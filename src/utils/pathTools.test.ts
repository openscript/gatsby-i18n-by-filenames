import { Node } from 'gatsby';
import { getFilePath, isFileInFolder } from './pathTools';

describe('path tools', () => {
  test('getFilePath', () => {
    const testNode = {} as Node & { absolutePath?: string; fileAbsolutePath?: string };
    testNode.internal = {} as Node['internal'];

    testNode.id = 'fileTestNode';
    testNode.internal.type = 'File';
    testNode.absolutePath = '/home/user/gatsby-project/pages/page.en-GB.js';
    expect(getFilePath(testNode)).toBe('/home/user/gatsby-project/pages/page.en-GB.js');

    testNode.absolutePath = undefined;
    expect(() => getFilePath(testNode)).toThrowError(Error);

    testNode.id = 'markdownTestNode';
    testNode.internal.type = 'MarkdownRemark';
    testNode.fileAbsolutePath = '/home/user/gatsby-project/content/page.en-GB.md';
    expect(getFilePath(testNode)).toBe('/home/user/gatsby-project/content/page.en-GB.md');

    testNode.fileAbsolutePath = undefined;
    expect(() => getFilePath(testNode)).toThrowError(Error);

    testNode.internal.type = 'AnotherType';
    expect(getFilePath(testNode)).toBeUndefined();
  });

  test('isFileInFolder', () => {
    expect(isFileInFolder('/home/user/gatsby-project/src/content/page.en-GB.md', '/src/content/')).toEqual(true);
    expect(isFileInFolder('/home/user/gatsby-project/src/content/page.en-GB.md', './src/content/')).toEqual(true);
    expect(isFileInFolder('/home/user/gatsby-project/src/content/page.en-GB.md', 'src/content')).toEqual(true);
    expect(isFileInFolder('/home/user/gatsby-project/src/content/page.en-GB.md', '/src/content')).toEqual(true);
    expect(isFileInFolder('C:\\gatsby-project\\src\\content\\page.en-GB.md', '\\src\\content\\')).toEqual(true);
    expect(isFileInFolder('C:\\gatsby-project\\src\\content\\page.en-GB.md', '.\\src\\content\\')).toEqual(true);
    expect(isFileInFolder('C:\\gatsby-project\\src\\content\\page.en-GB.md', 'src\\content')).toEqual(true);
    expect(isFileInFolder('C:\\gatsby-project\\src\\content\\page.en-GB.md', '\\src\\content')).toEqual(true);
    expect(isFileInFolder('/home/user/gatsby-project/src/content/page.en-GB.md', '/src/pages')).toEqual(false);
    expect(isFileInFolder('/home/user/gatsby-project/src/content/page.en-GB.md', 'src/pages')).toEqual(false);
    expect(isFileInFolder('/home/user/gatsby-project/src/content/page.en-GB.md', '')).toEqual(false);
    expect(isFileInFolder('/home/user/gatsby-project/src/content/page.en-GB.md', '/')).toEqual(false);
  });
});
