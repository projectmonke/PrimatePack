import EvenBetterAPI from "@bebiks/evenbetter-api";
import * as customTabs from "./extensions/customTabs";

const init = () => {
  customTabs.setup();
  customTabs.setGif();
  console.log("[Caido Pets] Setting GIF if enabled.")

  EvenBetterAPI.eventManager.on("onPageOpen", () => {
    localStorage.setItem("previousPath", window.location.hash);

    const activeTab = document.querySelector(
      ".c-sidebar-item[data-is-active='true']"
    );
    if (activeTab) {
      let countElement = activeTab.querySelector(".c-sidebar-item__count");
      if (countElement) countElement.innerHTML = "";
    }
  });
};

init();
