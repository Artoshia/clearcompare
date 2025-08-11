import { execSync } from "child_process";
import clipboard from "clipboardy";
import { Command } from "@commander-js/extra-typings";
import { returnPrompt } from "../agent-info/summaryPrompt";
import OpenAI from "openai";

export default ({
  program,
  aiClient,
}: {
  program: Command;
  aiClient: OpenAI;
}) => {
  program
    .command("summary [branch]")
    .option("-v, --view", "Preview the summary in the terminal")
    .description(
      "Compare the current branch with the main branch and generate a PR summary."
    )
    .action(async (possibleBranch, options) => {
      try {
        console.log("\n", "Loading...");

        //ensure credentials are nicely set up.
        execSync(
          `git config credential.helper manager-core
git fetch origin`,
          {
            encoding: "utf8",
          }
        );

        let branchName = possibleBranch;
        if (!branchName) {
          branchName = execSync("git branch --show-current", {
            encoding: "utf8",
          });
        }
        const baseBranch = "origin/main";
        const mergeBase = execSync(
          `git merge-base ${baseBranch} ${branchName}`,
          {
            encoding: "utf8",
          }
        ).trim();

        const diffOutput = execSync(`git diff ${mergeBase} ${possibleBranch}`, {
          encoding: "utf8",
        });

        if (!diffOutput) {
          console.log("No changes detected.");
          return;
        }

        const gptResponse = await aiClient.responses.create({
          model: "gpt-4-turbo",
          instructions: returnPrompt,
          input: diffOutput,
        });

        if (options.view) {
          console.log("\n", gptResponse.output_text);
        }

        clipboard.writeSync(gptResponse.output_text);
        console.log("\n", "📋 Copied to clipboard ✅");
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error running summary.", err.message);
        } else {
          console.error("Error running summary.", err);
        }
      }
    });
};
