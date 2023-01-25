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

export default function Quote(props) {
  const { content, author, getQuote } = props;

  if (!content) {
    return null;
  }

  return (
    <Paper shadow={"xs"} p="md" style={{ minWidth: "80vw" }}>
      <Blockquote cite={author ? `-${author}` : ""}>{content}</Blockquote>
      <Space h="md" />
      <Divider />
      <Space h="md" />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={getQuote}>New Quote</Button>
      </Box>
    </Paper>
  );
}
