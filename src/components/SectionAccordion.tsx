import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function SectionAccordion({
  title,
  children,
  defaultExpanded = false,
}: Props) {
  return (
    <Accordion defaultExpanded={defaultExpanded} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#e74c3c" }} />}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Cinzel", serif',
            fontWeight: 600,
            color: "#e8d5b0",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
