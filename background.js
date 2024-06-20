chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url.includes('youtube.com/watch')) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: playVideo
            });
        }
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/watch')) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: playVideo
        });
    }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            if (tab.url.includes('youtube.com/watch')) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: pauseVideo
                });
            }
        });
    });
});

function playVideo() {
    const video = document.querySelector('video');
    if (video && video.paused) {
        video.play();
    }
}

function pauseVideo() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
        video.pause();
    }
}
