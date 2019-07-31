# SpaceStationFinderChromeExtension
## Chrome Extension for SpaceStationFinder

###Testing Locally:
* Open Chrome - go to `chrome://extensions/`
* Turn Developer mode ON
* Click "Load unpacked"
* Navigate to the local Chrome Extension folder (`C:\[path to]\SpaceStationFinderChromeExtension`)
* Select Folder

###Deployment:
* Go to the Chrome Dev Dashboard: https://chrome.google.com/webstore/developer/dashboard
* Go into Chrome-Extension LOCAL project
* move current SpaceStationFinderChromeExtension*.zip to Old Zips folder
* Zip everthing but the git files, and any folders, and this readme file into a new `SpaceStationFinderChromeExtension[Whatever].zip` file
* (Make sure to increment the version in the manifest)
* Go back to the Chrome Dev Dashboard
* SpaceStationFinderChromeExtension - select Edit
* Upload File
* Publish
* Wait 60 mins to test.
