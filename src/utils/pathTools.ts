import { Node } from 'gatsby';

interface AbsolutePaths {
  absolutePath?: string;
  fileAbsolutePath?: string;
}

const getCheckedFilePath = (filePath?: string) => {
  if (!filePath || filePath === '') {
    throw new Error(`No absolute file path given for: ${filePath}`);
  }
  return filePath;
};

export const getFilePath = (node: Node) => {
  const nodeWithPaths = node as Node & AbsolutePaths;

  switch (node.internal.type) {
    case 'File':
      return getCheckedFilePath(nodeWithPaths.absolutePath);
    case 'MarkdownRemark':
      return getCheckedFilePath(nodeWithPaths.fileAbsolutePath);
    default:
      return;
  }
};

/**
 * Checks if a file is in a folder.
 * @param file absolute path of the file
 * @param folder relative path of the search path
 */
export const isFileInFolder = (file: string, folder: string) => {
  const sanitizeExpression = /^(\.|\/|\\)?(\/|\\)?(?<path>\S*)$/;
  const sanitizationResult = sanitizeExpression.exec(folder);
  if (sanitizationResult?.groups && sanitizationResult.groups['path']) {
    return file.indexOf(sanitizationResult.groups['path']) !== -1;
  }
  return false;
};
