import { encoding_for_model, TiktokenModel } from "tiktoken";

/**
 * Truncate a string to a specific token count for a given model.
 * @param {string} text - The input string.
 * @param {number} maxTokens - Maximum tokens to keep.
 * @param {string} model - Model name (e.g., "gpt-3.5-turbo", "gpt-4").
 * @returns {string} - Truncated string.
 */
export const tokenTruncate = (
  text: string,
  maxTokens: number = 30000,
  model: TiktokenModel = "gpt-4-turbo"
) => {
  const encoder = encoding_for_model(model);
  let tokens = encoder.encode(text);
  let truncatedTokens = tokens.slice(0, maxTokens);
  let truncatedText = encoder.decode(truncatedTokens);

  // Ensure the decoded string fits within the token limit
  while (encoder.encode(truncatedText.toString()).length > maxTokens) {
    truncatedTokens = truncatedTokens.slice(0, -1);
    truncatedText = encoder.decode(truncatedTokens);
  }

  encoder.free();
  return truncatedText.toString();
};
