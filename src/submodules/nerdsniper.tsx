import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Table, DropdownMenu } from "@radix-ui/themes";
import type { Caido } from "@caido/sdk-frontend";
import type { PluginStorage } from "../utils/types";

export const NerdSniperSettings = ({ caido }: { caido: Caido }) => {
  const storage = caido.storage.get() as PluginStorage;
  const [webhookName, setWebhookName] = useState(storage?.webhooks?.[0]?.name || "");
  const [webhookUrl, setWebhookUrl] = useState(storage?.webhooks?.[0]?.url || "");
  const [webhooks, setWebhooks] = useState(storage?.webhooks || []);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadSettings = () => {
      const storage = caido.storage.get() as PluginStorage;
      if (typeof storage === "object" && storage !== null) {
        const savedWebhooks = storage.webhooks || [];
        setWebhooks(savedWebhooks);
      }
    };
    loadSettings();
  }, [caido]);

  const handleSave = () => {
    if (webhookName.trim() === "" || webhookUrl.trim() === "") {
      alert("Webhook name and URL cannot be empty.");
      return;
    }
    const newWebhook = { name: webhookName, url: webhookUrl };
    const updatedWebhooks = editingIndex !== null 
      ? webhooks.map((webhook, index) => index === editingIndex ? newWebhook : webhook)
      : [...webhooks, newWebhook];

    setWebhooks(updatedWebhooks);
    caido.storage.set({ ...storage, webhooks: updatedWebhooks });
    setEditingIndex(null);
    setWebhookName(""); 
    setWebhookUrl(""); 
    console.log("Webhook saved:", newWebhook);
  };

  const handleDelete = (index: number) => {
    const updatedWebhooks = webhooks.filter((_, i) => i !== index);
    setWebhooks(updatedWebhooks);
    caido.storage.set({ ...storage, webhooks: updatedWebhooks });
  };

  const handleUpdate = (index: number) => {
    const webhookToEdit = webhooks[index];
    if (webhookToEdit) {
      setWebhookName(webhookToEdit.name);
      setWebhookUrl(webhookToEdit.url);
      setEditingIndex(index);
    }
  };

  return (
    <Grid columns="1" gap="2" rows="4" width="300px" style={{ margin: "auto" }}>
      <h1 style={{ margin: "auto" }}>Nerd Sniper</h1>
      <TextField.Root
        placeholder="Enter webhook name..."
        value={webhookName}
        onChange={(e) => setWebhookName(e.target.value)}
        id="webhook_name_input"
        style={{ width: "300px" }}
      />
      <TextField.Root
        placeholder="Enter your webhook URL..."
        value={webhookUrl}
        onChange={(e) => setWebhookUrl(e.target.value)}
        id="webhook_url_input"
        style={{ width: "300px" }}
      />
      <Button variant="outline" onClick={handleSave}>
        {editingIndex !== null ? "Update Webhook" : "Save Webhook"}
      </Button>
      <Table.Root style={{ margin: "auto" }}> 
        <Table.Header>
          <Table.Row>
            <Table.Cell style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Name</Table.Cell>
            <Table.Cell>Actions</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {webhooks.map((webhook, index) => (
            <Table.Row key={index}>
              <Table.Cell style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{webhook.name}</Table.Cell>
              <Table.Cell>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="outline">Actions</Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item onClick={() => handleUpdate(index)}>Update</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={() => handleDelete(index)}>Delete</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Grid>
  );
};
