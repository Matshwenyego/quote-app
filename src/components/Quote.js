import React from "react";
import {
  Paper,
  Blockquote,
  Button,
  Box,
  Divider,
  Space,
  ActionIcon,
} from "@mantine/core";
import { Volume, Copy, BrandTwitter } from "tabler-icons-react";
import { toast } from "react-toastify";

const synth = window.speechSynthesis;

const speak = (content) => {
  if (synth.speaking) {
    return;
  }
  const toSpeak = new SpeechSynthesisUtterance(content);
  toSpeak.onend = (e) => {
    console.log("Done speaking...");
  };
  toSpeak.onerror = (e) => {
    console.log("Error on speaking...");
  };
  synth.speak(toSpeak);
};

export default function Quote(props) {
  const { content, author, getQuote } = props;

  if (!content) {
    return null;
  }

  const handleSpeakOnClink = () => {
    speak(content);
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(content);
    toast.info("Quote Copied");
  };

  return (
    <Paper shadow={"xs"} p="md" style={{ minWidth: "80vw" }}>
      <Blockquote cite={author ? `-${author}` : ""}>{content}</Blockquote>
      <Space h="md" />
      <Divider />
      <Space h="md" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <ActionIcon
            size={"lg"}
            variant="outline"
            onClick={handleSpeakOnClink}
          >
            <Volume size={24} />
          </ActionIcon>
          <Space w="xs" />
          <ActionIcon onClick={handleCopyQuote} size={"lg"} variant="outline">
            <Copy size={24} />
          </ActionIcon>
          <Space w="xs" />
          <ActionIcon
            component="a"
            target={"_blank"}
            href={`https://twitter.com/intent/tweet?text=${content} - ${author}`}
            size={"lg"}
            variant="outline"
          >
            <BrandTwitter size={24} />
          </ActionIcon>
        </Box>
        <Button onClick={getQuote}>New Quote</Button>
      </Box>
    </Paper>
  );
}
