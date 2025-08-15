import { encoding_for_model, TiktokenModel } from "tiktoken";

/**
 * Truncate a string to a specific token count for a given model.
 * @param {string} text - The input string.
 * @param {number} maxTokens - Maximum tokens to keep.
 * @param {string} model - Model name (e.g., "gpt-3.5-turbo", "gpt-4").
 * @returns {string} - Truncated string.
 */
export const truncateByTokens = (
  text: string,
  maxTokens: number = 30000,
  model: TiktokenModel = "gpt-4-turbo"
) => {
  const encoder = encoding_for_model(model);

  // Encode text into tokens
  const tokens = encoder.encode(text);

  // Slice tokens to limit
  const truncatedTokens = tokens.slice(0, maxTokens);
  console.log(tokens.length, "??!!");

  // Decode tokens back to string
  const truncatedText = encoder.decode(truncatedTokens);

  encoder.free(); // release memory
  return truncatedText.toString();
};
