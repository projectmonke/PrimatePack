// Primate Pack

// Monke Defaults
var defaultMonkeSettings = {
    gif_url: "https://media.tenor.com/fAQ4mdg7iz4AAAAj/pixel-cat.gif",
    gif_width: "200",
    gif_height: "200",
    caido_pets_enabled: true
}

// Get Monke Settings
var getMonkeSetting = (settingName) => {
  if (localStorage.getItem(`monke_${settingName}`) === null) {
    return defaultMonkeSettings[settingName];
  }
  return localStorage.getItem(`monke_${settingName}`) || "";
};

// Set Monke Settings
var setMonkeSetting = (settingName, value) => {
  localStorage.setItem(`monke_${settingName}`, value);
};

var createNotionTabHTML = () => {
  return `
<iframe src="https://www.example.com"/>
`
}
// Settings Tab HTML
var createMonkeTabHTML = () => {
  const monkeFeatures = [
    {
      name: "caido_pets_enabled",
      title: "Caido Pets",
      items: [
        {
          name: "caido_pets_enabled",
          title: "Caido Pets",
          description: "Adds a gif in the bottom-left corner of the Caido UI."
        }
      ]
    },
    {
      name: "notion_enabled",
      title: "Notion",
      items: [
        {
          name: "notion_enabled",
          title: "Notion",
          description: "Enable Notion within Caido."
        }
      ]
    }
  ];

  const featureHtml = monkeFeatures.map(feature => `
    <div class="toggle-features__content-item">
      <div class="toggle-features__content-item-title">${feature.title}</div>
      ${feature.items.map(item => `
        <div class="toggle-features__content-item-toggle">
          <div class="toggle-features__content-item-description">
            <b>${item.title}:</b> ${item.description}
          </div>
          <div>
            <input type="checkbox" name="${item.name}" id="${item.name}" ${getMonkeSetting(item.name) === "true" ? "checked" : ""} />
          </div>
        </div>`).join("")}
    </div>
    <hr />`).join("");

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


// Monke Settings Tab
var monkeTab = () => {
  const monkeTabHTML = document.createElement("div");
  monkeTabHTML.innerHTML = createMonkeTabHTML();

  const monkePetsFunctionality = monkeTabHTML.querySelector("#caidoPets");
  const featureFlagFunctionality = monkeTabHTML.querySelector("#featureFlags");
  
  if (monkePetsFunctionality && featureFlagFunctionality) {
    const caidoPetsButton = monkePetsFunctionality.querySelector("#petSaveButton");
    const featureSaveButton = featureFlagFunctionality.querySelector("#featureSaveButton");
    const inputs = monkePetsFunctionality.querySelectorAll("input");
    const featureFlagCheckboxes = featureFlagFunctionality.querySelectorAll("input[type='checkbox']");

    inputs.forEach(input => input.addEventListener("input", () => caidoPetsButton.disabled = false));

    featureFlagCheckboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        featureSaveButton.disabled = false;
      });
    });

    caidoPetsButton.addEventListener("click", () => {
      ["gif_url", "gif_width", "gif_height"].forEach((item, idx) => setMonkeSetting(item, inputs[idx].value));
      location.reload();
    });

    featureSaveButton.addEventListener("click", () => {
      featureFlagCheckboxes.forEach((checkbox) => {
        setMonkeSetting(checkbox.name, checkbox.checked);
      });
      location.reload();
    });

    inputs.forEach((input, idx) => {
      if (idx < inputs.length) input.value = getMonkeSetting(input.id);
    });

    featureFlagCheckboxes.forEach(checkbox => {
      checkbox.checked = getMonkeSetting(checkbox.name) === "true";
    });
  }

  return monkeTabHTML;
};

var notionTab = () => {
  const notionTabHTML = document.createElement("div");
  notionTab.innerHTML = createNotionTabHTML();
}

// Create Pets UI
var monkeTools = () => {
 
  Caido.navigation.addPage("/primatepack/settings", {
    body: monkeTab()
  });

  Caido.navigation.addPage("/primatepack/notion", {
    body: notionTab()
  });
    
  Caido.sidebar.registerItem("Settings", "/primatepack/settings", {
    icon: "fas fa-cat",
    group: `Primate Pack`,
  });
  
  Caido.sidebar.registerItem("Notion", "/primatepack/notion", {
    icon: "fas fa-pencil",
    group: `Primate Pack`,
  });

  if (getMonkeSetting("caido_pets_enabled") === "true"){
    Caido.sidebar.registerItem("", "#", {
      icon: "",
      group: `<img id='gifImage' width='200' height='200'>`,
    });
    setGif();
  }
};

var setGif = () => {
  const gifImageElement = document.getElementById("gifImage");
  if (gifImageElement) {
    gifImageElement.src = getMonkeSetting("gif_url");
    gifImageElement.width = getMonkeSetting("gif_width");
    gifImageElement.height = getMonkeSetting("gif_height");
  } else {
    setTimeout(setGif, 500);
  }
};

monkeTools();
