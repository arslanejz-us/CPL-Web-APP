# This script fixes the npm PATH issue and runs the dev server
# The broken nvm configuration looks for yasir.nasir\AppData
# This script uses the correct Program Files Node.js instead

# Remove nvm from PATH and use Program Files Node.js
$env:PATH = $env:PATH -replace [regex]::Escape("C:\Users\arslan.ejaz\nvm\nodejs"), ""
$env:PATH = $env:PATH -replace [regex]::Escape("C:\Users\arslan.ejaz\nvm"), ""
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# Clean up any duplicate path separators
$env:PATH = $env:PATH -replace ';;+', ';'

# Verify npm is working
Write-Output "npm version: $(npm --version)"
Write-Output "node version: $(node --version)"
Write-Output ""
Write-Output "Starting dev server on port 3005..."
Write-Output ""

# Run the dev server
npm run dev -- --port 3005
