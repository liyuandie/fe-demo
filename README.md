# 一个简易前端工程

包括如下内容：

1. webpack 打包
2. webpack-dev-server 热更新
3. unit test
4. gh-pages 部署 github pages
5. deploy.sh 自动部署

操作流程如下：

1. `npm init`初始化项目工程
2. 创建目录结构

```bash
mkdir src
mkdir test
mkdir dist
touch README.md
```

3. 写 README.md 文件
4. 首次提交

```bash
touch .gitignore
git init
git add .
git add -f dist/index.html
git commit -m'init'
```

注意`.gitignore`中忽略了`dist/`因为这个是`npm run build`生成的， 但是`index.html`是需要的， 可以单独使用`git add -f dist/index.html`添加进去

5. 配置 webpack 打包，添加 webpack.config.js， 创建框架文件， 包括`index.html`, `index.js`等
   参考 https://webpack.js.org/guides/getting-started/

```bash
npm install -D webpack webpack-cli
```

6. 打包`npm run build`

7. 添加 JS 代码， export/import

8. 添加 css 代码
   参考：

- https://webpack.js.org/loaders/css-loader/
- 中文 https://webpack.docschina.org/loaders/css-loader/

```bash
npm i -D css-loader style-loader
```

然后配置`webpack.config.js`文件

9. unit test
   参考：

- https://dev.to/bnorbertjs/my-nodejs-setup-mocha--chai-babel7-es6-43ei
- http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
- https://mochajs.org/

  `--save-dev` === `-D`

```bash
npm install --save-dev mocha
```

由于 mocha 不支持 ES6， 需要用 babel 转化， 配置`.babelrc`
执行:

```bash
./node_modules/.bin/mocha --require @babel/register test/**/*.js
```

注意， `--compilers`失效， 应该用`--require`: https://github.com/mochajs/mocha/wiki/compilers-deprecation

配置`package.json`，添加`test`
执行`npm test`测试代码

10. github pages

    参考：

- https://pages.github.com/
- https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages

目前支持三种方式，

- master 分支
- gh-pages 分支
- master 分支下的`docs/`目录， 简单起见，选这个， 直接把 dist 目录改为 docs 即可， 别忘了修改`webpack.config.js`。

然后在 github 项目的`settings`页面里面， 找到`GitHub Pages`那部分配置， 修改即可。
