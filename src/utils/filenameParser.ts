import { Language } from '../models/language';

const FILENAME_REGEX = /\.(?<language>[a-z]{2})?\-?(?<region>[A-Z]{2})?\./gim;

export const parseFilename = (filename: string): Language => {
  const result = FILENAME_REGEX.exec(filename);
  if (result?.groups) {
    return {
      language: result.groups['language'],
      region: result.groups['region']
    };
  }
  return {};
}