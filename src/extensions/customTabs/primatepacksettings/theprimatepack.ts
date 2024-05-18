import EvenBetterAPI from "@bebiks/evenbetter-api";
import evenbetterStyles from "./evenbetter.css";
import loadCSS from "@bebiks/evenbetter-api/src/css";

interface Change {
  name: string;
  value: any;
}

interface Settings {
  [key: string]: string;
}

const defaultSettings: Settings = {
  gif_url: "https://media.tenor.com/fAQ4mdg7iz4AAAAj/pixel-cat.gif",
  gif_width: "200",
  gif_height: "200",
  caido_pets_enabled: "true",
};

export const getMonkeSetting = (settingName: string): string => {
  const item = localStorage.getItem(`monke_${settingName}`);
  if (item === null) {
    return defaultSettings[settingName];
  }
  return item;
};

export const setMonkeSetting = (settingName: string, value: string): void => {
  localStorage.setItem(`monke_${settingName}`, value);
};

const primatePackSettingsTabHTML = () => {
  const monkeFeatures = [
    {
      name: "caido_pets_enabled",
      title: "Caido Pets",
      items: [
        {
          name: "caido_pets_enabled",
          title: "Caido Pets",
          description: "Adds a gif in the bottom-left corner of the Caido UI.",
        },
      ],
    },
    {
      name: "activity_tracker_enabled",
      title: "Activity Tracker",
      items: [
        {
          name: "activity_tracker_enabled",
          title: "Activity Tracker",
          description: "Enable Activity Tracker within Caido.",
        },
      ],
    },
  ];

  const featureHtml = monkeFeatures
    .map(
      (feature) => `
    <div class="toggle-features__content-item">
      <div class="toggle-features__content-item-title">${feature.title}</div>
      ${feature.items
        .map(
          (item) => `
        <div class="toggle-features__content-item-toggle">
          <div class="toggle-features__content-item-description">
            <b>${item.title}:</b> ${item.description}
          </div>
          <div>
            <input type="checkbox" name="${item.name}" id="${item.name}" ${
            getMonkeSetting(item.name) === "true" ? "checked" : ""
          } />
          </div>
        </div>`
        )
        .join("")}
    </div>
    <hr />`
    )
    .join("");

  return `
  <div class="even-better__settings" id="evenbetter-settings-content">
    <header>
      <div class="header-title"><h1>The Primate Pack - Settings</h1></div>
      <div class="header-description">Primate Pack settings.</div>
    </header>
    <main>
      <div class="left">
        <div class="settings-box" id="caidoPets">
          <div class="settings-box__header">
            <div class="settings-box__header-title">Caido Pets</div>
            <div class="settings-box__header-description">Pet Configuration</div>
          </div>
          <div class="settings-box__content">
            <div class="c-text-input">
              <div class="c-text-input__outer">
                <u>GIF URL</u>
                <div class="c-text-input__inner">
                  <input type="text" placeholder="https://www.example.com" spellcheck="false" class="c-text-input__input" id="gif_url" />
                </div>
              </div>
              <br>
              <div class="c-text-input__outer">
                <u>Width</u>
                <div class="c-text-input__inner">
                  <input type="text" placeholder="200" spellcheck="false" class="c-text-input__input" id="gif_width" />
                </div>
              </div>
              <br>
              <div class="c-text-input__outer">
                <u>Height</u>
                <div class="c-text-input__inner">
                  <input type="text" placeholder="200" spellcheck="false" class="c-text-input__input" id="gif_height" />
                </div>
              </div>
            </div>
            <button id="petSaveButton">Save</button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="toggle-features" id="featureFlags">
          <div class="toggle-features__header">
            <div class="toggle-features__header-title">Toggle Features</div>
            <div class="toggle-features__header-description">Enable or disable features of the Primate Pack plugins</div>
          </div>
          <hr />
          <div class="toggle-features__content">${featureHtml}</div>
          <button id="featureSaveButton">Save</button>
        </div>
      </div>
    </main>
  </div>
  `;
};

export const primatePackSettingsTab = () => {
  loadCSS({ id: "evenbetter-settings", cssText: evenbetterStyles.toString() });
  const container = document.createElement("div");
  container.innerHTML = primatePackSettingsTabHTML();
  const checkboxes = container.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      setMonkeSetting(target.name, target.checked ? "true" : "false");
    });
  });

  const petSaveButton = container.querySelector("#petSaveButton");
  petSaveButton.addEventListener("click", () => {
    const gifUrl = (container.querySelector("#gif_url") as HTMLInputElement)
      .value;
    const gifWidth = (container.querySelector("#gif_width") as HTMLInputElement)
      .value;
    const gifHeight = (
      container.querySelector("#gif_height") as HTMLInputElement
    ).value;
    setMonkeSetting("gif_url", gifUrl);
    setMonkeSetting("gif_width", gifWidth);
    setMonkeSetting("gif_height", gifHeight);
  });

  return container;
};

const primatePackActivityHTML = () => {
  return `
  <div class="even-better__settings" id="evenbetter-settings-content">
    <header>
      <div class="header-title"><h1>Activity Tracker</h1></div>
      <div class="header-description">Track your activity here.</div>
    </header>
    <main>
      <div class="left">    
      </div>
      <div class="right">
      </div>
    </main>
  </div>
  `;
};

export const primatePackActivityTab = () => {
  loadCSS({ id: "evenbetter-settings", cssText: evenbetterStyles.toString() });
  const container = document.createElement("div");
  container.innerHTML = primatePackActivityHTML();
  return container;
};

