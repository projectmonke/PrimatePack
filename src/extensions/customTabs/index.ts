import { Caido } from "@caido/sdk-frontend";
import { primatePackSettingsTab } from "./primatepacksettings/theprimatepack";


export const setup = () => {
  Caido.navigation.addPage("/settings/theprimatepack", {
    body: primatePackSettingsTab(),
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
};
