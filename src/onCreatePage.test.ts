import { CreatePageArgs, Reporter } from 'gatsby';
import { onCreatePage } from './onCreatePage';
import { mock } from 'jest-mock-extended';

jest.mock('gatsby');

describe('on create page', () => {
  test('if pages are skipped, when no file path is found', () => {
    const pageArgsMock = mock<CreatePageArgs>({
      page: {
        id: 'randomId',
        internal: {
          type: 'AnotherType'
        }
      },
      reporter: mock<Reporter>()
    });

    onCreatePage(pageArgsMock);
    expect(pageArgsMock.reporter.warn).toBeCalledTimes(1);
    expect(pageArgsMock.reporter.warn).toBeCalledWith('Skipping randomId of type AnotherType, because no file path could be found.');
  });

  test('if pages are skipped, when they are not in any search path', () => {
    const pageArgsMock = mock<CreatePageArgs>({
      page: {
        id: 'randomId',
        internal: {
          type: 'MarkdownRemark'
        },
        fileAbsolutePath: '/home/user/gatsby-project/src/another/page.en-GB.md'
      },
      reporter: mock<Reporter>()
    });

    onCreatePage(pageArgsMock);
    expect(pageArgsMock.reporter.warn).toBeCalledTimes(1);
    expect(pageArgsMock.reporter.warn).toBeCalledWith(
      "Skipping /home/user/gatsby-project/src/another/page.en-GB.md, because it wasn't found in any search path."
    );
  });
});
