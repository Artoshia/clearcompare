import { readFileSync } from "node:fs";

const template = readFileSync("/customisation/template.md", {
  encoding: "utf8", //ensure utf8 to support special characters (e.g. emojis)
});

export const returnPrompt = `
You are a helpful assistant that creates a PR summary based on the following git diff output. 
    
Please summarize the changes in a concise manner, focusing on the main modifications and their implications.

You are required to do so according to this format, please also check the correct boxes in the checklists please do not edit the format only add content:

${template}

Here is the git diff output:
`;
