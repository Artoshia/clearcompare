# Clear Compare

A tool for generating PR descriptions according to a template.

## How to install

requirements:

1. Installed [node.js](https://nodejs.org/en/download).
1. Installed [pnpm](https://pnpm.io/).

instructions:

1. run `pnpm run setup`, this installs the packages needed & allows you to run the command anywhere.
2. add .env file with `GPT_API_KEY="KEY_HERE"` and add your [OpenAI](https://platform.openai.com/api-keys) key
3. open a terminal & run `clearcompare --help` to see available commands.

## How to change template

1. go to `./src/customisation/template.md`
2. add your content (including markdown).

---

Author: Liam Anderson


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
