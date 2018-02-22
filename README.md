# react-minimal-error-boundary

[![CircleCI][circleci-image]][circleci-url]
[![Codecov][codecov-image]][codecov-url]

[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

Minimal React error boundary component for React 16+

```sh
yarn add react-minimal-error-boundary

# or

npm install react-minimal-error-boundary
```

## Usage

```js
import ErrorBoundary from 'react-minimal-error-boundary';

<ErrorBoundary>
  <Root />
</ErrorBoundary>
```

## Props

- `onError` : `PropTypes.func`
- `onRerendered` : `PropTypes.func`
- `FallbackComponent` : `PropTypes.oneOfType([PropTypes.element, PropTypes.func])`
- `rerender` : `PropTypes.bool`

## license

[MIT](https://sugarshin.mit-license.org/)

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/react-minimal-error-boundary/tree/master.svg?style=svg&circle-token=04f8cf60eb194b0708f7f5e7ff31819ebb3941d1
[circleci-url]: https://circleci.com/gh/sugarshin/react-minimal-error-boundary/tree/master
[codecov-image]: https://codecov.io/gh/sugarshin/react-minimal-error-boundary/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/sugarshin/react-minimal-error-boundary
[npm-image]: https://img.shields.io/npm/v/react-minimal-error-boundary.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-minimal-error-boundary
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
