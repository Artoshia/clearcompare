#!/usr/bin/env node

// Register esbuild for .md file loading
require("esbuild-register/dist/node").register({
  loaders: {
    ".md": "text", // Treat .md files as plain text
  },
});

/*

## ClearPR - AI PR Summary Tool.

Will compare a branch with main to be able to generate a summary of changes made 


Author: Liam Anderson (Artoshia, Swifty.eth)
Version: 0.0.01


*/

import { config } from "dotenv";

config({
  debug: false, //for dev mode.
  path: __dirname + "/../.env",
  quiet: true,
});

import { Command } from "@commander-js/extra-typings";
const program = new Command();

import { summary } from "./commands/summary";
import { createAzureClient, createOpenAIClient } from "./clients";

program
  .name("clearcompare")
  .description("A simple CLI tool built with Node.js that builds a PR summary.")
  .version("0.0.1");

//load azure client...
summary({
  program,
  aiClient: createAzureClient({
    apiKey: process.env.GPT_API_KEY || "",
    endpoint: process.env.GPT_BASE_URL,
    deployment: process.env.DEPLOYMENT_NAME || "",
  }),
}); //load summary command.

/*

this is the openai client, uncomment this to use the openAI client.

summary({
  program,
  aiClient: createOpenAIClient({
    apiKey: process.env.GPT_API_KEY_OPENAI || "",
  }),
}); //load summary command.

*/
program.parse(process.argv);
