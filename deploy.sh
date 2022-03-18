#!/usr/bin/env sh
set -e
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'contents updated'
git push -f git@github.com:archaeologies/sznews.git master:gh-pages
cd -