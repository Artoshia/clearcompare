import { AzureOpenAI } from "openai";
const apiVersion = "2025-04-01-preview";

export const createAzureClient = ({
  apiKey,
  endpoint,
  deployment,
}: {
  apiKey: string;
  endpoint: string | undefined;
  deployment: string;
}) => {
  if (!apiKey || !endpoint) {
    throw new Error(
      "GPT_API_KEY or GPT_BASE_URL is not set in environment variables."
    );
  }

  return new AzureOpenAI({
    apiKey,
    endpoint,
    apiVersion,
    deployment,
  });
};
