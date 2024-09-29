import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import type { Caido } from "@caido/sdk-frontend";
import { getCaidoAPI, setCaidoAPI } from "./utils/caidoapi";
import { PluginStorage } from "./utils/types";
import { PrimatePackSettings } from "./submodules/settings";
import { EmbedPage } from "./submodules/embedder";

const addSettingsPages = (caido: Caido) => {
  const body = document.createElement("div");
  body.className = "primatepack-settings";
  body.innerHTML = '<div id="settings-root"></div>';
  document.body.appendChild(body);

  const rootElement = document.getElementById("settings-root");
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<PrimatePackSettings caido={caido} />);
  }

  caido.navigation.addPage("/settings/primatepack", { body });
};

const addEmbedderPage = (caido: Caido) => {
  const embedderBody = document.createElement("div");
  embedderBody.className = "primatepack-embedder";
  embedderBody.innerHTML = '<div id="embedder-root" width="80%" height="80%"></div>';
  document.body.appendChild(embedderBody);

  const embedderRootElement = document.getElementById("embedder-root");
  if (embedderRootElement) {
    const root = createRoot(embedderRootElement);
    root.render(<EmbedPage caido={caido} />);
  }

  caido.navigation.addPage("/embedder", { body: embedderBody });
};

const loadPrefs = (caido: Caido) => {
  const storage = caido.storage.get() as PluginStorage | null;

  const defaultPrefs: PluginStorage = {
    embed_title: "Embedder",
    embed_url: "https://www.example.com",
    gif_url: "https://i.pinimg.com/originals/56/7a/09/567a0964671de5b98b70583fe81ae5b0.gif",
    gif_width: 150,
    gif_height: 100,
    webhooks: []
  };

  return {
    gifUrl: storage?.gif_url || defaultPrefs.gif_url,
    gifWidth: storage?.gif_width || defaultPrefs.gif_width,
    gifHeight: storage?.gif_height || defaultPrefs.gif_height,
    webhooks: storage?.webhooks || defaultPrefs.webhooks,
    embedTitle: storage?.embed_title || defaultPrefs.embed_title,
    embedUrl: storage?.embed_url || defaultPrefs.embed_url
  };
};

export const init = (caido: Caido) => {
  setCaidoAPI(caido);
  addSettingsPages(caido);
  addEmbedderPage(caido);

  getCaidoAPI().menu.registerItem({
    type: "Settings",
    label: "The Primate Pack",
    path: "/settings/primatepack",
    leadingIcon: "fas fa-cat",
  });

  const { gifUrl, gifWidth, gifHeight, webhooks, embedTitle } = loadPrefs(caido);

  getCaidoAPI().sidebar.registerItem("", "#", {
    icon: "",
    group: `<img id='gifImage' src='${gifUrl}' width='${gifWidth}' height='${gifHeight}'>`,
  });

  caido.sidebar.registerItem(embedTitle, "/embedder", {
    icon: "fas fa-cat",
    group: "Primate Pack",
  });

  const gifImage = document.getElementById("gifImage") as HTMLImageElement;
  if (gifImage) {
    gifImage.src = gifUrl;
    gifImage.width = gifWidth;
    gifImage.height = gifHeight;
  }

  if (webhooks.length === 0) {
    console.warn("No webhooks found.");
    return;
  }

  webhooks.forEach((webhook) => {
    const commandId = `send_to_${webhook.name.toLowerCase().replace(/\s+/g, '_')}`;
    
    caido.commands.register(commandId, {
      name: `Send to ${webhook.name}`,
      run: async () => {
        const selectedText = caido.window.getActiveEditor()?.getSelectedText();
        
        if (!selectedText) {
          alert("Please select text");
          return;
        }

        const cleanedText = selectedText.replace(/(?:^|\n)(?:\s*cookie:\s*.*?(\r?\n|$)|\s*Authorization:\s*.*?(\r?\n|$))/gi, '');

        try {
          const response = await fetch(webhook.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: cleanedText }),
          });
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          alert("Request Sent Successfully");
        } catch (error) {
          alert("Failed to Send");
        }
      },
      group: "Custom Commands",
    });

    caido.menu.registerItem({
      type: "Request",
      commandId: commandId,
      leadingIcon: "fas fa-paper-plane",
    });
  });

  /*
  Speech-to-text navigation coming soon for web-based Caido users! leaving this snippet of code here as an easter egg.

  getCaidoAPI().commands.register("stt", {
    name: "STT",
    group: "Navigation",
    run: () => {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript;
          console.log("Navigated to " + transcript + " via STT");
          getCaidoAPI().navigation.goTo("/"+transcript);
      };
      recognition.start();
    },
  });
  */

  // getCaidoAPI().commandPalette.register("stt");
};
