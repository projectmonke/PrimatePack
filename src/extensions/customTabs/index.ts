import { Caido } from "@caido/sdk-frontend";
import { primatePackSettingsTab, primatePackActivityTab } from "./primatepacksettings/theprimatepack";
import { getMonkeSetting } from "./primatepacksettings/theprimatepack";

export const setup = () => {

  Caido.navigation.addPage("/settings/theprimatepack", {
    body: primatePackSettingsTab(),
  })

  Caido.navigation.addPage("/theprimatepack/activity", {
    body: primatePackActivityTab(),
  })

  Caido.menu.registerItem({
    type: "Settings",
    label: "The Primate Pack",
    path: "/settings/theprimatepack",
    leadingIcon: "fas fa-cat",
  });
  

  Caido.commands.register("evenbetter:settings", {
    name: "Go to The Primate Pack: Settings",
    group: "The Primate Pack: Navigation",
    run: () => {
      Caido.navigation.goTo("/settings/theprimatepack");
    }
  });

  Caido.commandPalette.register("theprimatepack:settings");
  if (getMonkeSetting("caido_pets_enabled") === "true"){
    Caido.sidebar.registerItem("", "#", {
      icon: "",
      group: `<img id='gifImage' width='200' height='200'>`,
    });
  }

  Caido.sidebar.registerItem("Activity", "/theprimatepack/activity", {
    icon: "fas fa-clock",
    group: "The Primate Pack",
  });
};

export const setGif = () => {
  const gifImageElement = document.getElementById("gifImage") as HTMLImageElement;
  if (gifImageElement) {
    gifImageElement.src = getMonkeSetting("gif_url");
    gifImageElement.width = parseInt(getMonkeSetting("gif_width"));
    gifImageElement.height = parseInt(getMonkeSetting("gif_height"));
  } else {
    setTimeout(setGif, 500);
  }
};