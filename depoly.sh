#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'depoly脚本更新'
git remote add origin https://github.com/hixiaobu/vue-mooc.git
git config user.name 'hixiaobu'
git config user.email '1205355926@qq.com'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f origin master:gh-pages
