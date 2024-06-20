# youtube-tab-control
This Extension can pause a video when the tab is switched or minimized and unpause the video of the tab opened.

# YouTube Tab Control Extension

## Overview

The YouTube Tab Control Chrome extension automatically pauses a YouTube video when you switch away from the tab and resumes playing it when you switch back. This extension enhances your YouTube viewing experience by ensuring you don't miss any part of the video when multitasking.

## Features

1. Automatically pauses YouTube videos when switching tabs.
2. Automatically resumes YouTube videos when switching back to the tab.
3. Lightweight and easy to use.


## Installation

### Step 1: Download or Clone the Repository

Download the repository as a ZIP file or clone it using Git: git clone https://github.com/Abhijeet-Singh14/youtube-tab-control.git

### Step 2: Extract the ZIP (if downloaded)

If you downloaded the ZIP file, extract it to a convenient location on your computer.

### Step 3: Load the Extension in Chrome

Open Chrome and go to chrome://extensions/.
Enable "Developer mode" using the toggle switch in the top right.
Click the "Load unpacked" button and select the directory where you extracted or cloned the repository.

## Project Structure

### The project directory should look like this:

```
youtube-tab-control/
│
├── background.js
├── content.js
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
├── manifest.json
```

### manifest.json
This file contains the metadata for the extension, such as its name, version, permissions, and scripts to be loaded.

### background.js
This script runs in the background and listens for tab activation, tab updates, and tab removal events. It pauses or resumes the YouTube video based on these events.

### content.js
This script runs in the context of the YouTube page and listens for visibility change events. It pauses the video when the tab is hidden and resumes it when the tab becomes visible again.

## Icons
The icons directory contains the icon images for the extension in different sizes (16x16, 48x48, and 128x128 pixels).

## How to Use the Extension

Open a YouTube video: Navigate to YouTube and play any video.
Switch to another tab: The video will automatically pause when you switch to a different tab.
Switch back to the YouTube tab: The video will automatically resume playing when you return to the YouTube tab.

## Notes

Ensure that the extension has the necessary permissions to run scripts on YouTube.
The extension only affects tabs with YouTube video URLs (i.e., https://www.youtube.com/watch).

## Troubleshooting

Extension not working: Make sure you have followed the installation steps correctly and that the extension is enabled in chrome://extensions/.
Icons not showing: Ensure that the icons are correctly placed in the icons directory and are named icon16.png, icon48.png, and icon128.png.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes. Contributions are always welcome!








