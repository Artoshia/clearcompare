#!/usr/bin/env node

/*

## ClearCompare - AI PR Summary Tool.

Will compare a branch with main to be able to generate a summary of changes made 


Author: Liam Anderson (Artoshia, Swifty.eth)
Version: 0.0.01


*/

import OpenAI from "openai";
import { Command } from "@commander-js/extra-typings";
const program = new Command();

import summary from "./commands/summary.js";

const aiClient = new OpenAI({
  apiKey: process.env.GPT_API_KEY,
});

program
  .name("clearcompare")
  .description("A simple CLI tool built with Node.js that builds a PR summary.")
  .version("1.0.0");

summary({ program, aiClient }); //load summary command.

program.parse(process.argv);
