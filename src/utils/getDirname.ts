import { fileURLToPath } from "url";
import { dirname } from "path";

/**
 * pass in the import.meta.url variable
 * and get the directory name of the file
 * @param {string} importMetaUrl - pass in import.meta.url
 * @returns {string} directory path for file
 */
export function getDirname(importMetaUrl: string): string {
  const __dirname = dirname(fileURLToPath(importMetaUrl));
  return __dirname;
}
