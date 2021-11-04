// 改写后续引入路径
if (window.__POWERED_BY_QIANKUN__) {
  const fix = process.env.NODE_ENV === 'production' ? 'hjView/' : ''
  const path = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ + fix
  // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是 http://localhost:8081/ 这个样子，写入绝对路径
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = path;
}
