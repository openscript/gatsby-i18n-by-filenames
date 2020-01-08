export interface Options {
  searchPath: string[];
  defaultLanguage?: string;
  prefixDefault?: boolean;
}

export const defaultOptions: Options = {
  searchPath: ['./src/pages/']
};
