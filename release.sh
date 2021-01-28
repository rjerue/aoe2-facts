lein release
rm -r resources/public/js/compiled/cljs-runtime/
git add .
git commit -am "release"
git push
echo "Deployment done"