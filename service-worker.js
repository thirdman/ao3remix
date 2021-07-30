// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log(
  "This prints to the console of the service worker (background script)"
);

// Importing and using functionality from external files is also possible.
importScripts("service-worker-utils.js");

// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.

// Extension event listeners are a little different from the patterns you may have seen in DOM or
// Node.js APIs. The below event listener registration can be broken in to 4 distinct parts:
//
// * chrome      - the global namespace for Chrome's extension APIs
// * runtime     – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to
// * addListener - what we want to do with this event
//
// See https://developer.chrome.com/docs/extensions/reference/events/ for additional details.
chrome.runtime.onInstalled.addListener(async () => {
  console.log("test chrome", chrome);
  // While we could have used `let url = "hello.html"`, using runtime.getURL is a bit more robust as
  // it returns a full URL rather than just a path that Chrome needs to be resolved contextually at
  // runtime.
  // let url = chrome.runtime.getURL("popup/popup.html");

  // // Open a new tab pointing at our page's URL using JavaScript's object initializer shorthand.
  // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#new_notations_in_ecmascript_2015
  // //
  // // Many of the extension platform's APIs are asynchronous and can either take a callback argument
  // // or return a promise. Since we're inside an async function, we can await the resolution of the
  // // promise returned by the tabs.create call. See the following link for more info on async/await.
  // // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
  // let tab = await chrome.tabs.create({ url });

  // // Finally, let's log the ID of the newly created tab using a template literal.
  // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  // //
  // // To view this log message, open chrome://extensions, find "Hello, World!", and click the
  // // "service worker" link in th card to open DevTools.
  // console.log(`Created tab ${tab.id}`);
});
