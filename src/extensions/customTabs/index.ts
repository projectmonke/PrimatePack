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

  let petHTML = "<img src=\"" + getMonkeSetting("gif_url") + "\"" + " width=" + getMonkeSetting("gif_width") + " height=" + getMonkeSetting("gif_height") + ">" 
  Caido.sidebar.registerItem("", "/#", {
    icon: petHTML,
    group: "The Primate Pack",
  });

  Caido.sidebar.registerItem("Activity", "/theprimatepack/activity", {
    icon: "fas fa-clock",
    group: "The Primate Pack",
  });
};
