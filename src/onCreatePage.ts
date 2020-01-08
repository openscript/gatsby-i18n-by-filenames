import { GatsbyNode } from 'gatsby';
import { defaultOptions, Options } from './models/options';
import { getFilePath, isFileInFolder } from './utils/pathTools';

export const onCreatePage: Required<GatsbyNode>['onCreatePage'] = ({ page, actions, reporter }, configuration?) => {
  const options = {
    ...defaultOptions,
    ...configuration
  } as Options;

  const filePath = getFilePath(page);
  if (!filePath) {
    reporter.warn(`Skipping ${page.id} of type ${page.internal.type}, because no file path could be found.`);
    return;
  }

  const isInAnySearchPath = options.searchPath.reduce((sum, next) => sum || isFileInFolder(filePath, next), false);
  if (!isInAnySearchPath) {
    reporter.warn(`Skipping ${filePath}, because it wasn't found in any search path.`);
    return;
  }

  return null;
};
