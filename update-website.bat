@echo off
echo Updating your website on GitHub...

git add .
git commit -m "Update website content"
git push origin main

echo Website updated successfully!
echo Your website should be available at https://auto-o.github.io/apology-website/
echo (It might take a few minutes for changes to appear)

pause 