import { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@radix-ui/themes";
import { Link1Icon } from "@radix-ui/react-icons";
import type { Caido } from "@caido/sdk-frontend";
import type { PluginStorage } from "../utils/types";

export const EmbedderSettingsForm = ({ caido }: { caido: Caido }) => {
  const [embedTitle, setEmbedTitle] = useState(() => {
    const storage = caido.storage.get() as PluginStorage;
    return storage?.embed_title || "Embedder";
  });
  const [embedUrl, setEmbedUrl] = useState(() => {
    const storage = caido.storage.get() as PluginStorage;
    return storage?.embed_url || "https://www.example.com";
  });

  useEffect(() => {
    const storage = caido.storage.get() as PluginStorage;
    if (storage) {
      setEmbedTitle(storage.embed_title || "Embedder");
      setEmbedUrl(storage.embed_url || "https://www.example.com");
    }
  }, [caido]);

  const handleSaveChanges = () => {
    const storage = caido.storage.get() as PluginStorage;
    caido.storage.set({
      ...storage,
      embed_title: embedTitle,
      embed_url: embedUrl
    });
  };

  return (
    <Grid columns="1" gap="3" rows="3" width="200px" style={{ margin: "auto" }}>
      <h1 style={{ margin: "auto" }}>Embedder</h1>
      <TextField.Root
        placeholder="Enter your embed title..."
        value={embedTitle}
        onChange={(e) => setEmbedTitle(e.target.value)}
        id="embed_title_input"
      />
      <TextField.Root
        placeholder="Enter your embed URL..."
        value={embedUrl}
        onChange={(e) => setEmbedUrl(e.target.value)}
        id="embed_url_input"
      >
        <TextField.Slot>
          <Link1Icon />
        </TextField.Slot>
      </TextField.Root>
      <Button variant="outline" onClick={handleSaveChanges}>
        Save Changes
      </Button>
    </Grid>
  );
};

export const EmbedderSettings = ({ caido }: { caido: Caido }) => (
  <Grid columns="1" gap="3" rows="2" width="200px" style={{ margin: "auto" }}>
    <EmbedderSettingsForm caido={caido} />
  </Grid>
);

export const EmbedPage = ({ caido }: { caido: Caido }) => {
  const storage = caido.storage.get() as PluginStorage;
  const embedUrl = storage ? storage.embed_url || "https://www.example.com" : "https://www.example.com";
  return (
    <iframe 
      src={embedUrl} 
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="Embedded Content"
    />
  );
};
