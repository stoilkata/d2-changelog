import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import T from "./T";

type ItemType = "added" | "changed" | "removed" | "neutral";

interface ListItemEntry {
  text: React.ReactNode;
  type?: ItemType;
  sub?: React.ReactNode[];
}

interface Props {
  items: ListItemEntry[];
}

const typeColor: Record<ItemType, string> = {
  added: "#27ae60",
  changed: "#e67e22",
  removed: "#c0392b",
  neutral: "#e8d5b0",
};

export function ChangelogList({ items }: Props) {
  return (
    <List dense disablePadding>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <ListItem
            disableGutters
            sx={{ alignItems: "flex-start", py: "3px", pl: 1 }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "0.95rem",
                color: typeColor[item.type ?? "neutral"],
                lineHeight: 1.5,
              }}
            >
              {item.text}
            </Typography>
          </ListItem>
          {item.sub && (
            <List dense disablePadding sx={{ pl: 3 }}>
              {item.sub.map((s, j) => (
                <ListItem key={j} disableGutters sx={{ py: "2px", pl: 1 }}>
                  <Typography
                    component="span"
                    sx={{ fontSize: "0.88rem", color: "#a89070" }}
                  >
                    {s}
                  </Typography>
                </ListItem>
              ))}
            </List>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

interface GroupProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export function ItemGroup({ title, children }: GroupProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: '"Cinzel", serif',
          fontWeight: 600,
          color: "#e67e22",
          borderBottom: "1px solid rgba(230,126,34,0.3)",
          pb: 0.5,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export function SkillChange({
  name,
  items,
}: {
  name: React.ReactNode;
  items: React.ReactNode[];
}) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          color: "#e8d5b0",
          fontFamily: '"Cinzel", serif',
          fontSize: "0.85rem",
        }}
      >
        {name}
      </Typography>
      <List dense disablePadding sx={{ pl: 2 }}>
        {items.map((item, i) => (
          <ListItem key={i} disableGutters sx={{ py: "2px" }}>
            <Typography
              component="span"
              sx={{ fontSize: "0.9rem", color: "#c9b8a0" }}
            >
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export function ClassGroup({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        mb: 3,
        p: 2,
        border: "1px solid rgba(192,57,43,0.2)",
        borderRadius: 1,
        background: "rgba(0,0,0,0.2)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Cinzel", serif',
          fontWeight: 700,
          color: "#e74c3c",
          fontSize: "1rem",
          mb: 1.5,
          borderBottom: "1px solid rgba(192,57,43,0.25)",
          pb: 0.5,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export function MercGroup({
  title,
  skills,
}: {
  title: React.ReactNode;
  skills: string;
}) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Typography
        sx={{
          fontFamily: '"Cinzel", serif',
          fontWeight: 600,
          color: "#e67e22",
          fontSize: "0.9rem",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: "0.9rem", color: "#c9b8a0", pl: 1 }}>
        <strong style={{ color: "#e8d5b0" }}>Skills:</strong> {skills}
      </Typography>
    </Box>
  );
}

export function RunewordDetail({
  name,
  base,
  items,
}: {
  name: string;
  base: string;
  items: string[];
}) {
  return (
    <Box
      sx={{
        mb: 2,
        p: 1.5,
        border: "1px solid rgba(192,57,43,0.2)",
        borderRadius: 1,
        background: "rgba(0,0,0,0.15)",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Cinzel", serif',
          fontWeight: 700,
          color: "#e8d5b0",
          fontSize: "0.95rem",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.82rem",
          color: "#a89070",
          fontStyle: "italic",
          mb: 0.5,
        }}
      >
        <T>{base}</T>
      </Typography>
      <List dense disablePadding sx={{ pl: 1 }}>
        {items.map((item, i) => (
          <ListItem key={i} disableGutters sx={{ py: "1px" }}>
            <Typography
              component="span"
              sx={{ fontSize: "0.88rem", color: "#c9b8a0" }}
            >
              <T>{item}</T>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
