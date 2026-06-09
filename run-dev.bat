@echo off
REM This script fixes the npm PATH issue and runs the dev server
REM The broken nvm configuration looks for yasir.nasir\AppData
REM This script uses the correct Program Files Node.js instead

REM Set the PATH to use Program Files Node.js first
set PATH=C:\Program Files\nodejs;%PATH%

REM Remove nvm from PATH (for PowerShell removal, but this helps too)
set PATH=%PATH:C:\Users\arslan.ejaz\nvm\nodejs;=%
set PATH=%PATH:C:\Users\arslan.ejaz\nvm;=%

echo npm version:
npm --version

echo.
echo node version:
node --version

echo.
echo Starting dev server on port 3005...
echo.

REM Run the dev server
call npm run dev -- --port 3005
