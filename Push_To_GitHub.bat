@echo off
title Push Website to GitHub
cd /d "%~dp0"
echo ======================================================
echo   Updating your website on GitHub (zhir4web/MyWebsite)...
echo ======================================================
echo.
git push origin main
echo.
echo ======================================================
echo   Done!
echo ======================================================
pause
