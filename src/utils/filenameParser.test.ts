import { parseFilename } from './filenameParser';

test('parseFilename', () => {
  expect(parseFilename('page.md')).toStrictEqual({});
  expect(parseFilename('page.en.md')).toStrictEqual({ language: 'en', region: undefined });
  expect(parseFilename('page.another.en.md')).toStrictEqual({ language: 'en', region: undefined });
  expect(parseFilename('page.en-GB.md')).toStrictEqual({ language: 'en', region: 'GB' });
  expect(parseFilename('page.another.en-GB.md')).toStrictEqual({ language: 'en', region: 'GB' });
});
