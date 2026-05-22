# YouTube radio blocker addon for Firefox

## Disclaimer
The files in this project were written entirely by AI. I don't know how to make a browser extension and I don't really care to learn, sorry. I just wanted this to be made because YouTube was being annoying. But this readme and repo was made with my two fleshy, greasy, human hands.  

Additionally, this repo will already be dead upon conception. I'm not going to update this or fix issues unless they stop me personally using the addon.

### What it be doing yo
Sometimes YouTube starts a "radio" playlist when you watch a video that is considered to be music. This radio auto plays related music videos, and I hate that feature, and it's impossible to disable. Other addons don't seem to be fixing this problem already.  

This addon simply watches for YouTube URLs that contain `start_radio`, which is what usually exposes when a radio station is started. If it sees this, it removes the radio station playlist and the `start_radio` from the URL and reloads the page.  

### How to install
1. Download the [latest release](https://github.com/CarpetBook/youtube-radio-blocker/releases/latest).
2. If Firefox doesn't automatically offer to install the addon, go to `about:addons` in Firefox.
3. Click the gear above the list, and choose `Install Add-on From File...`.
4. Choose the XPI file that you downloaded in step 1.

### Some tiny issues
When the addon reloads the page, it can cause YouTube's "Internet is disconnected" error page to appear for a fraction of a second. This is probably due to the addon refreshing the page too fast, but no amount of delay seems to improve it, and of course delays makes the addon slower to act, so I didn't try to fix it.

### License
This repo is licensed under the Unlicense, which is to say, do whatever you want with this code I don't care.
