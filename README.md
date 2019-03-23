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
git commit -m'init'
```

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
