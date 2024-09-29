import { useState, useEffect } from "react";
import { TextField, Button, Grid, Box } from "@radix-ui/themes";
import { Link1Icon, WidthIcon, HeightIcon } from "@radix-ui/react-icons";
import type { Caido } from "@caido/sdk-frontend";
import type { PluginStorage } from "../utils/types";

export const SettingsForm = ({ caido }: { caido: Caido }) => {
  const [gifUrl, setGifUrl] = useState<string>("https://i.pinimg.com/originals/56/7a/09/567a0964671de5b98b70583fe81ae5b0.gif");
  const [gifWidth, setGifWidth] = useState<string>("150");
  const [gifHeight, setGifHeight] = useState<string>("100");

  useEffect(() => {
    const loadSettings = () => {
      const petsStorage = caido.storage.get() as PluginStorage;
      if (typeof petsStorage === 'object' && petsStorage) {
        setGifUrl(petsStorage.gif_url || "");
        setGifWidth(petsStorage.gif_width?.toString() || "150");
        setGifHeight(petsStorage.gif_height?.toString() || "100");
      }
    };
    loadSettings();
  }, [caido]);

  const handleSave = () => {
    const storage = caido.storage.get() as PluginStorage;
    caido.storage.set({
      ...storage,
      gif_url: gifUrl,
      gif_width: Number(gifWidth),
      gif_height: Number(gifHeight),
    });
  };

  return (
    <Grid columns="1" gap="3" rows="5" width="200px" style={{ margin: "auto" }}>
      <h1 style={{ margin: "auto" }}>Pets</h1>
      <TextField.Root
        placeholder="Enter your GIF url..."
        value={gifUrl}
        onChange={(e) => setGifUrl(e.target.value)}
        id="gif_url_input"
      >
        <TextField.Slot>
          <Link1Icon />
        </TextField.Slot>
      </TextField.Root>

      <TextField.Root
        placeholder="Enter GIF width..."
        value={gifWidth}
        onChange={(e) => setGifWidth(e.target.value)}
        id="gif_width"
      >
        <TextField.Slot>
          <WidthIcon />
        </TextField.Slot>
      </TextField.Root>

      <TextField.Root
        placeholder="Enter GIF height..."
        value={gifHeight}
        onChange={(e) => setGifHeight(e.target.value)}
        id="gif_height"
      >
        <TextField.Slot>
          <HeightIcon />
        </TextField.Slot>
      </TextField.Root>

      <Button variant="outline" onClick={handleSave}>
        Save Changes
      </Button>
    </Grid>
  );
};

export const PetsSettings = ({ caido }: { caido: Caido }) => {
  const storage = caido.storage.get() as PluginStorage;
  const gifUrl = storage?.gif_url || "https://i.pinimg.com/originals/56/7a/09/567a0964671de5b98b70583fe81ae5b0.gif";
  const gifWidth = storage?.gif_width?.toString() || "150";
  const gifHeight = storage?.gif_height?.toString() || "100";

  return (
    <Grid columns="1" gap="1" rows="2" width="200px" style={{ margin: "auto" }}>
      <SettingsForm caido={caido} />
      <Box>
        <img
          src={gifUrl}
          alt="Custom GIF"
          height={gifHeight}
          width={gifWidth}
        />
      </Box>
    </Grid>
  );
};