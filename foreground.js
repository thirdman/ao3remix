// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log(
  "This prints to the console of the page (injected only if the page url matched)"
);

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
//     chrome.scripting
//       .insertCSS({
//         target: { tabId: tabId },
//         files: ["./foreground_styles.css"],
//       })
//       .then(() => {
//         console.log("INJECTED THE FOREGROUND STYLES.");
//       })
//       .catch((err) => console.log(err));
//   }
// });
