lein release
rm -fr ./docs
mkdir ./docs
cp -r ./resources/public/ ./docs
git add .
git commit -am "release"
git push
echo "Deployment done"