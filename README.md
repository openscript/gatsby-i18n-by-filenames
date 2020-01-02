# gatsby-i18n-filenames
Internationalize content based by a filename suffix.

[![Maintainability](https://api.codeclimate.com/v1/badges/9b95c170690b5b9b8b21/maintainability)](https://codeclimate.com/github/openscript/gatsby-i18n-by-filenames/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9b95c170690b5b9b8b21/test_coverage)](https://codeclimate.com/github/openscript/gatsby-i18n-by-filenames/test_coverage)
[![Build Status](https://api.travis-ci.org/openscript/gatsby-i18n-by-filenames.svg?branch=master)](https://travis-ci.org/openscript/gatsby-i18n-by-filenames)

This plugin can be installed with:

```
yarn add gatsby-i18n-filenames
```


## Configuration

## Naming
Use ISO 639-1 alpha-2 codes for declaring the language of a file. For example:
 - `page.de.md, page.en.md, page.nl.md, ...`
 - `another-page.de.md, another-page.en.md, ...`

Use ISO 3166-2 alpha-2 codes for declaring the languages region of a file. For example:
 - `page.de-DE.md, page.de-CH.md, page.en.md, ...`
 - `another-page.en-US.md, another-page.en-GB.md, ...`

