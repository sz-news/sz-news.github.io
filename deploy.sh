#!/usr/bin/env sh
set -e
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'contents updated'
git push -f git@github.com:sz-news/sz-news.github.io.git master:gh-pages
cd -