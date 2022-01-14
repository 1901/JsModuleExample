# JavaScript 常见的几种模块化方案
---

## CommonJS
`NodeJs` 使用的模块加载方式（同步加载）。`commonjs` 目录中示例了几种常见的写法。


## AMD
异步加载模块，用于浏览器环境。

- 全称：Asynchronous Module Definition
- 代表项目：[require.js](https://requirejs.org/)


## CMD
异步加载模块，用于浏览器环境。

- 全称：[Common Module Definition](https://github.com/seajs/seajs/issues/242)
- 代表项目：[sea.js](https://github.com/seajs/seajs)


## UMD
`UMD` 是 `AMD` 和 `CommonJS` 的结合。 

- 全称：Universal Module Definition
- 项目地址：[umd](https://github.com/umdjs/umd)
- 下面的代码大致描述了 `UMD` 的工作原理
```js
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // 运行在 AMD 环境
        define(factory);
    else if (typeof exports === 'object') {
        // 运行在 CommonJS 环境
        module.exports = factory();
    } else {
        // 运行在其他环境
        root['moduleName'] = factory();
    }
})(this, function() {
    return {};
});
```


## ES Modoule
以 `import` 引入模块，`export` 导出接口。示例参见 `es` 目录。

- 需要正常使用 es 模块，可以使用下面两种方法。
    1. 文件后缀为 `.mjs` 
    2. 将 `package.json` 中的 `type` 设置为 `module`。（默认值为 `commonjs`）


## TypeScript
待完成

## 参考
- https://segmentfault.com/a/1190000022599809
