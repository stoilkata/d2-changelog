import { Fragment, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ItemGroup } from "../components/ChangelogComponents";

type ResistanceRow = {
  id: string;
  physical?: number;
  magic?: number;
  fire?: number;
  light?: number;
  cold?: number;
  poison?: number;
};

type MapRow = {
  name: string;
  monsters: string[];
};

const resistanceRows: ResistanceRow[] = [
  {
    id: "bloodlord5_new",
    physical: 70,
    magic: 50,
    fire: 70,
    light: 70,
    cold: 95,
    poison: 70,
  },
  {
    id: "willowisp7_new",
    physical: 80,
    magic: 30,
    fire: 40,
    light: 80,
    cold: 80,
    poison: 95,
  },
  {
    id: "bonefetish7_new",
    physical: 50,
    magic: 60,
    fire: 70,
    light: 130,
    cold: 80,
    poison: 75,
  },
  // {
  //   id: "succubuswitch5_new",
  //   physical: 50,
  //   magic: 110,
  //   fire: 150,
  //   light: 66,
  //   cold: 80,
  //   poison: 50,
  // },
  // {
  //   id: "cr_archer3_new",
  //   physical: 70,
  //   magic: 35,
  //   fire: 50,
  //   light: 120,
  //   cold: 50,
  //   poison: 50,
  // },
  // {
  //   id: "fingermage3_new",
  //   physical: 70,
  //   magic: 80,
  //   fire: 70,
  //   light: 120,
  //   cold: 70,
  //   poison: 70,
  // },
  // {
  //   id: "doomknight3_new",
  //   physical: 70,
  //   magic: 70,
  //   fire: 120,
  //   light: 60,
  //   cold: 120,
  //   poison: 75,
  // },
  // {
  //   id: "clawviper5_new",
  //   physical: 40,
  //   magic: 70,
  //   fire: 33,
  //   light: 70,
  //   cold: 120,
  //   poison: 60,
  // },
  // {
  //   id: "thornhulk4_new",
  //   physical: 50,
  //   magic: 35,
  //   fire: 120,
  //   light: 120,
  //   cold: 90,
  //   poison: 70,
  // },
  {
    id: "vampire5_new",
    physical: 50,
    magic: 60,
    fire: 85,
    light: 70,
    cold: 60,
    poison: 75,
  },
  // {
  //   id: "cantor4_new",
  //   physical: 30,
  //   magic: 35,
  //   fire: 33,
  //   light: 75,
  //   cold: 75,
  //   poison: 20,
  // },
  // {
  //   id: "unraveler5_new",
  //   physical: 55,
  //   magic: 100,
  //   fire: 66,
  //   light: 66,
  //   cold: 66,
  //   poison: 50,
  // },
  // {
  //   id: "frozenhorror5_new",
  //   physical: 50,
  //   magic: 35,
  //   fire: 70,
  //   light: 33,
  //   cold: 190,
  //   poison: 33,
  // },
  {
    id: "reanimatedhorde2_new",
    physical: 20,
    magic: 50,
    fire: 50,
    light: 50,
    cold: 95,
    poison: 95,
  },
  {
    id: "pantherwoman4_new",
    physical: 50,
    magic: 50,
    fire: 50,
    light: 50,
    cold: 70,
    poison: 50,
  },
  {
    id: "succubus5_new",
    physical: 70,
    magic: 80,
    fire: 70,
    light: 70,
    cold: 80,
    poison: 80,
  },
  // {
  //   id: "bighead10_new",
  //   physical: 35,
  //   magic: 35,
  //   fire: 85,
  //   light: 120,
  //   cold: 85,
  //   poison: 50,
  // },
  {
    id: "siegebeast3_new",
    physical: 80,
    magic: 80,
    fire: 70,
    light: 130,
    cold: 90,
    poison: 75,
  },
  {
    id: "putriddefiler1_new",
    physical: 50,
    magic: 60,
    fire: 85,
    light: 70,
    cold: 80,
    poison: 75,
  },
  // {
  //   id: "bonefetish7_new",
  //   physical: 55,
  //   magic: 50,
  //   fire: 50,
  //   light: 55,
  //   cold: 65,
  //   poison: 120,
  // },
  {
    id: "batdemon3_new",
    physical: 50,
    magic: 80,
    fire: 70,
    light: 130,
    cold: 80,
    poison: 75,
  },
  // {
  //   id: "blunderbore1_new",
  //   physical: 65,
  //   magic: 55,
  //   fire: 115,
  //   light: 50,
  //   cold: 50,
  //   poison: 80,
  // },
  {
    id: "corruptrogueThrone",
    physical: 60,
    magic: 60,
    fire: 80,
    light: 80,
    cold: 80,
    poison: 90,
  },
  {
    id: "cr_archerThrone",
    physical: 60,
    magic: 60,
    fire: 80,
    light: 80,
    cold: 130,
    poison: 90,
  },
  {
    id: "cr_lancerThrone",
    physical: 60,
    magic: 60,
    fire: 80,
    light: 80,
    cold: 80,
    poison: 90,
  },
  {
    id: "impThrone",
    physical: 60,
    magic: 80,
    fire: 90,
    light: 70,
    cold: 70,
    poison: 80,
  },
  {
    id: "overseerThrone",
    physical: 80,
    magic: 50,
    fire: 70,
    light: 70,
    cold: 130,
    poison: 80,
  },
  {
    id: "megademonThrone",
    physical: 75,
    magic: 60,
    fire: 95,
    light: 80,
    cold: 130,
    poison: 95,
  },
  // { id: "frogdemonThrone", physical: 15, fire: 75, cold: 25, poison: 85 },
  // {
  //   id: "fingermageThrone",
  //   physical: 50,
  //   magic: 25,
  //   fire: 25,
  //   light: 65,
  //   cold: 130,
  // },
  // {
  //   id: "zombieCaldeum",
  //   physical: 50,
  //   fire: 95,
  //   light: 25,
  //   cold: 75,
  //   poison: 45,
  // },
  // {
  //   id: "pantherwoman1Caldeum",
  //   physical: 15,
  //   magic: 25,
  //   fire: 75,
  //   cold: 65,
  //   poison: 50,
  // },
  // {
  //   id: "swarm4_new",
  //   physical: 100,
  //   magic: 100,
  //   fire: 95,
  //   light: 95,
  //   cold: 95,
  //   poison: 95,
  // },
  // {
  //   id: "slinger2_new",
  //   physical: 40,
  //   magic: 35,
  //   fire: 65,
  //   light: 70,
  //   cold: 140,
  //   poison: 70,
  // },
  // {
  //   id: "fetish3_new",
  //   physical: 35,
  //   magic: 35,
  //   fire: 55,
  //   light: 55,
  //   cold: 140,
  //   poison: 50,
  // },
  // {
  //   id: "baboon5_new",
  //   physical: 70,
  //   magic: 35,
  //   fire: 80,
  //   light: 110,
  //   cold: 50,
  //   poison: 75,
  // },
  // { id: "skeleton3Crypt", physical: 35, fire: 30, cold: 65, poison: 65 },
  // { id: "scarab3Crypt", light: 80, cold: 50 },
  // { id: "batdemon3Crypt", physical: 50, magic: 25, fire: 75, light: 50 },
  // {
  //   id: "sk_archer3Crypt",
  //   physical: 35,
  //   magic: 150,
  //   fire: 30,
  //   light: 20,
  //   poison: 105,
  // },
  {
    id: "bighead1Crypt",
    physical: 50,
    magic: 50,
    fire: 20,
    light: 80,
    cold: 70,
    poison: 50,
  },
  {
    id: "baboon1Crypt",
    physical: 80,
    magic: 60,
    fire: 70,
    light: 80,
    cold: 90,
    poison: 75,
  },
  // { id: "clawviper2Crypt", physical: 60, fire: 45, light: 25, poison: 40 },
  // {
  //   id: "gargoyletrapCrypt",
  //   physical: 25,
  //   magic: 50,
  //   fire: 65,
  //   light: 50,
  //   cold: 120,
  //   poison: 75,
  // },
  // {
  //   id: "flyingscimitarCrypt",
  //   physical: 25,
  //   magic: 50,
  //   fire: 50,
  //   light: 75,
  //   poison: 75,
  // },
  // {
  //   id: "skmage_fire6_new",
  //   physical: 55,
  //   magic: 80,
  //   fire: 130,
  //   light: 90,
  //   cold: 50,
  //   poison: 110,
  // },
  // {
  //   id: "megademon4_new",
  //   physical: 65,
  //   magic: 70,
  //   fire: 140,
  //   light: 33,
  //   cold: 120,
  //   poison: 50,
  // },
  // {
  //   id: "fetishblow8_new",
  //   physical: 40,
  //   magic: 35,
  //   fire: 130,
  //   light: 55,
  //   cold: 55,
  //   poison: 65,
  // },
  // {
  //   id: "quillrat8_new",
  //   physical: 50,
  //   magic: 35,
  //   fire: 55,
  //   light: 130,
  //   cold: 75,
  //   poison: 65,
  // },
];

const mapRows: MapRow[] = [
  {
    name: "Infernal Expanse (Tier 1)",
    monsters: [
      "bloodlord5_new",
      "willowisp7_new",
      "reanimatedhorde2_new",
      "pantherwoman4_new",
      "succubus5_new",
      "bighead1Crypt",
    ],
  },
  {
    name: "Hall of Ancestral Judgment (Tier 2)",
    monsters: [
      "corruptrogueThrone",
      "cr_archerThrone",
      "cr_lancerThrone",
      "impThrone",
      "overseerThrone",
      "megademonThrone",
    ],
  },
  {
    name: "Pandemonium Rift (Tier 2)",
    monsters: [
      "putriddefiler1_new",
      "bonefetish7_new",
      "batdemon3_new",
      "vampire5_new",
      "baboon1Crypt",
      "siegebeast3_new",
    ],
  },
  // {
  //   name: "Pharaoh’s Hollow (Diablo)",
  //   monsters: [
  //     "clawviper5_new",
  //     "thornhulk4_new",
  //     "vampire5_new",
  //     "cantor4_new",
  //     "unraveler5_new",
  //     "frozenhorror5_new",
  //     "cr_archer3_new",
  //     "fingermage3_new",
  //   ],
  // },
  // {
  //   name: "Sepulcher of the Fallen (Baal)",
  //   monsters: [
  //     "skeleton3Crypt",
  //     "scarab3Crypt",
  //     "batdemon3Crypt",
  //     "sk_archer3Crypt",
  //     "bighead1Crypt",
  //     "baboon1Crypt",
  //     "clawviper2Crypt",
  //     "flyingscimitarCrypt",
  //   ],
  // },
  // {
  //   name: "Crimson Tributary (Izual)",
  //   monsters: [
  //     "bloodlord5_new",
  //     "willowisp7_new",
  //     "bonefetish7_new",
  //     "succubuswitch5_new",
  //     "cr_archer3_new",
  //     "fingermage3_new",
  //     "doomknight3_new",
  //     "clawviper5_new",
  //   ],
  // },
  // {
  //   name: "Temple of Withered Faith (Hephasto)",
  //   monsters: [
  //     "clawviper5_new",
  //     "skmage_fire6_new",
  //     "megademon4_new",
  //     "willowisp7_new",
  //     "fetishblow8_new",
  //     "quillrat8_new",
  //     "batdemon3Crypt",
  //     "succubus5_new",
  //   ],
  // },
];

type ImmunityBucket = {
  physical: number[];
  magic: number[];
  fire: number[];
  light: number[];
  cold: number[];
  poison: number[];
};

const emptyBucket = (): ImmunityBucket => ({
  physical: [],
  magic: [],
  fire: [],
  light: [],
  cold: [],
  poison: [],
});

const isImmune = (value?: number): value is number =>
  value !== undefined && value >= 100;

const formatImmunityCell = (values: number[]) => {
  if (values.length === 0) {
    return "0";
  }

  const sorted = [...values].sort((a, b) => a - b);
  return `${values.length} (${sorted.join(", ")})`;
};

const resistanceByMonster = resistanceRows.reduce<
  Record<string, ResistanceRow>
>((acc, row) => {
  acc[row.id] = row;
  return acc;
}, {});

const RESISTANCE_KEYS = [
  "physical",
  "magic",
  "fire",
  "light",
  "cold",
  "poison",
] as const;

type ResistanceKey = (typeof RESISTANCE_KEYS)[number];

const mapSummary = mapRows.map((map) => {
  const immunities = map.monsters.reduce<ImmunityBucket>((acc, monsterId) => {
    const row = resistanceByMonster[monsterId];
    if (!row) {
      return acc;
    }

    if (isImmune(row.physical)) acc.physical.push(row.physical);
    if (isImmune(row.magic)) acc.magic.push(row.magic);
    if (isImmune(row.fire)) acc.fire.push(row.fire);
    if (isImmune(row.light)) acc.light.push(row.light);
    if (isImmune(row.cold)) acc.cold.push(row.cold);
    if (isImmune(row.poison)) acc.poison.push(row.poison);
    return acc;
  }, emptyBucket());

  const monsters = map.monsters
    .map((monsterId) => resistanceByMonster[monsterId])
    .filter((row): row is ResistanceRow => Boolean(row));

  return {
    name: map.name,
    monsters,
    ...immunities,
  };
});

const headerCellSx = { color: "#e8d5b0", fontWeight: 700 };
const bodyCellSx = { color: "#c9b8a0" };

const formatResistanceValue = (value?: number) =>
  value === undefined ? "—" : String(value);

const resistanceValueSx = (value?: number) => ({
  color: isImmune(value) ? "#e74c3c" : "#c9b8a0",
  fontWeight: isImmune(value) ? 700 : 400,
});

type MapSummaryRowProps = {
  row: (typeof mapSummary)[number];
  open: boolean;
  onToggle: () => void;
};

function MapSummaryRow({ row, open, onToggle }: MapSummaryRowProps) {
  return (
    <Fragment>
      <TableRow
        hover
        onClick={onToggle}
        sx={{
          cursor: "pointer",
          "& > *": { borderBottom: open ? "unset" : undefined },
        }}
      >
        <TableCell sx={bodyCellSx}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton
              aria-label={open ? "Collapse map details" : "Expand map details"}
              aria-expanded={open}
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                onToggle();
              }}
              sx={{ color: "#e8d5b0" }}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            {row.name}
          </Box>
        </TableCell>
        {RESISTANCE_KEYS.map((key) => (
          <TableCell key={key} sx={bodyCellSx}>
            {formatImmunityCell(row[key])}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell
          colSpan={1 + RESISTANCE_KEYS.length}
          sx={{ py: 0, borderBottom: open ? undefined : "none" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ py: 1.5, px: 1 }}>
              <Typography sx={{ fontSize: "0.8rem", color: "#a89070", mb: 1 }}>
                Monster resistances (immune values highlighted)
              </Typography>
              <Table
                size="small"
                aria-label={`${row.name} monster resistances`}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={headerCellSx}>Monster</TableCell>
                    {RESISTANCE_KEYS.map((key) => (
                      <TableCell key={key} sx={headerCellSx}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.monsters.map((monster) => (
                    <TableRow key={monster.id}>
                      <TableCell sx={bodyCellSx}>{monster.id}</TableCell>
                      {RESISTANCE_KEYS.map((key: ResistanceKey) => (
                        <TableCell
                          key={key}
                          sx={resistanceValueSx(monster[key])}
                        >
                          {formatResistanceValue(monster[key])}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

export default function MapResistanceOverview() {
  const [expandedMaps, setExpandedMaps] = useState<Record<string, boolean>>({});

  const toggleMap = (mapName: string) => {
    setExpandedMaps((prev) => ({
      ...prev,
      [mapName]: !prev[mapName],
    }));
  };

  return (
    <ItemGroup title="Map Resistance Overview">
      <Typography sx={{ fontSize: "0.85rem", color: "#a89070", mb: 1 }}>
        Immunity threshold is resistance at or above 100. Summary cells show
        immune count and values in brackets. Expand a row for full monster
        resistances.
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "rgba(0,0,0,0.25)",
          border: "1px solid rgba(192,57,43,0.2)",
        }}
      >
        <Table size="small" aria-label="map resistance summary">
          <TableHead>
            <TableRow>
              <TableCell sx={headerCellSx}>Level Name</TableCell>
              {RESISTANCE_KEYS.map((key) => (
                <TableCell key={key} sx={headerCellSx}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mapSummary.map((row) => (
              <MapSummaryRow
                key={row.name}
                row={row}
                open={Boolean(expandedMaps[row.name])}
                onToggle={() => toggleMap(row.name)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ItemGroup>
  );
}
