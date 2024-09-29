import { Theme, Tabs } from "@radix-ui/themes";
import type { Caido } from "@caido/sdk-frontend";
import { PetsSettings } from "./pets";
import { NerdSniperSettings } from "./nerdsniper";
import { EmbedderSettings } from "./embedder";

export const PrimatePackSettings = ({ caido }: { caido: Caido }) => {
    return(
        <Theme appearance="dark" accentColor="crimson">
    <Tabs.Root defaultValue="pets">
      <Tabs.List>
        <Tabs.Trigger value="pets">Pets</Tabs.Trigger>
        <Tabs.Trigger value="nerdsniper">Nerd Sniper</Tabs.Trigger>
        <Tabs.Trigger value="embedder">Embedder</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="pets" style={{ margin: "30px" }}>
        <PetsSettings caido={caido} />
      </Tabs.Content>
      <Tabs.Content value="nerdsniper">
        <Tabs.Content value="nerdsniper" style={{ margin: "30px" }}>
          <NerdSniperSettings caido={caido} />
        </Tabs.Content>
      </Tabs.Content>
      <Tabs.Content value="embedder">
        <Tabs.Content value="embedder" style={{ margin: "30px" }}>
          <EmbedderSettings caido={caido} />
        </Tabs.Content>
      </Tabs.Content>
    </Tabs.Root>
  </Theme>
    )
}