import OpenAI from "openai";

export const createOpenAIClient = ({ apiKey }: { apiKey: string }) => {
  if (!apiKey) {
    throw new Error("GPT_API_KEY is not set in environment variables.");
  }
  return new OpenAI({
    apiKey,
  });
};
