if (window.__POWERED_BY_QIANKUN__) {
  const fix = process.env.NODE_ENV === 'production' ? 'hjView/' : ''
  const path = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + fix
  // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是 http://localhost:8081/ 这个样子
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = path;
} else {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = process.env.NODE_ENV === 'production' ? '/hjView/' : '/';
}
