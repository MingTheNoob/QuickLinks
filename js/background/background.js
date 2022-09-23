"use strict";
function startup() {
  firstRun = reason == ADDON_INSTALL;
  selectSearch = firstRun || reason == ADDON_ENABLE;

  if (!Services.search.getEngineByName(ENGINE_DETAILS.name)) {
      Services.search.addEngineWithDetails.apply(Services.search, [
          "name",
          "iconURL",
          "alias",
          "method",
          "description",
          "url",
      ].map(
          function (key) {
              ENGINE_DETAILS[key]
          }
      ));
  }

  let engine = Services.search.getEngineByName(ENGINE_DETAILS.name);

  if (selectSearch && !engine.hidden) {
      Services.search.moveEngine(engine, 0);
      Services.search.currentEngine = engine;
  }
}

browser.browserAction.onClicked.addListener(function() {
  browser.tabs.create({
    url: browser.extension.getURL("index.html")
  });
});