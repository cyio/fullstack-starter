# fullstack-starter

[Demo](https://udcx14jedxkk.leanapp.cn)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### 本地开发启动后端
```
lean up
```
或者不使用 leancloud
```
yarn dev:server
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 前端部署
静态构建到 gh-pages，以便 lean server 拉取
```
git clone https://github.com/cyio/fullstack-starter.git dist
cd dist
git checkout -b gh-pages
cd ..
yarn build
cd dist
git add -A
git commit -m 'update'
git push --set-upstream origin gh-pages
```
配置 travis 自动构建（可选）

build 命令参数加上 no-clean，否则 dist 目录会删除新建。可以定期指定清理

### leancloud nodejs 项目
`.leanignore`deploy 上传忽略目录，如`node_modules`，否则会全部上传

脚本必须有`start`命令，以启动 Node 应用。本项目改造增加了前端拉取部署

需要配置 node engine，否则默认用 0.x，版本太低

在`.gitignore`中添加`.leancloud`

