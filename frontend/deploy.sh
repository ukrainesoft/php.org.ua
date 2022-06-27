#!/usr/bin/env sh

# abort on errors
set -e
yarn build
cd out
echo 'php.org.ua' > CNAME
echo '' > .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:ukrainesoft/php.org.ua.git master:gh-pages
cd -
