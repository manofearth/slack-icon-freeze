const iconUrl = chrome.runtime.getURL("icon32.png");

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.favIconUrl && tab.url.startsWith('https://app.slack.com/')) {
    chrome.scripting.executeScript({
      target: { tabId },
      args: [iconUrl],
      func: iconUrl => {
        document.querySelector('link[rel~=\'icon\']').href = iconUrl;
      }
    })
  }
});