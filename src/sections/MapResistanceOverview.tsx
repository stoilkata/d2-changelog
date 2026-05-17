import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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
    physical: 88,
    magic: 66,
    fire: 120,
    light: 66,
    cold: 66,
    poison: 66,
  },
  {
    id: "willowisp7_new",
    physical: 90,
    magic: 80,
    fire: 70,
    light: 100,
    cold: 66,
    poison: 115,
  },
  {
    id: "bonefetish7_new",
    physical: 66,
    magic: 35,
    fire: 50,
    light: 60,
    cold: 66,
    poison: 110,
  },
  {
    id: "succubuswitch5_new",
    physical: 50,
    magic: 110,
    fire: 150,
    light: 66,
    cold: 80,
    poison: 50,
  },
  {
    id: "cr_archer3_new",
    physical: 70,
    magic: 35,
    fire: 50,
    light: 120,
    cold: 50,
    poison: 50,
  },
  {
    id: "fingermage3_new",
    physical: 70,
    magic: 80,
    fire: 70,
    light: 120,
    cold: 70,
    poison: 70,
  },
  {
    id: "doomknight3_new",
    physical: 70,
    magic: 70,
    fire: 120,
    light: 60,
    cold: 120,
    poison: 75,
  },
  {
    id: "clawviper5_new",
    physical: 40,
    magic: 70,
    fire: 33,
    light: 70,
    cold: 120,
    poison: 60,
  },
  {
    id: "thornhulk4_new",
    physical: 50,
    magic: 35,
    fire: 120,
    light: 120,
    cold: 90,
    poison: 70,
  },
  {
    id: "vampire5_new",
    physical: 60,
    magic: 80,
    fire: 150,
    light: 65,
    cold: 65,
    poison: 90,
  },
  {
    id: "cantor4_new",
    physical: 30,
    magic: 35,
    fire: 33,
    light: 75,
    cold: 75,
    poison: 20,
  },
  {
    id: "unraveler5_new",
    physical: 55,
    magic: 100,
    fire: 66,
    light: 66,
    cold: 66,
    poison: 50,
  },
  {
    id: "frozenhorror5_new",
    physical: 50,
    magic: 35,
    fire: 70,
    light: 33,
    cold: 190,
    poison: 33,
  },
  {
    id: "reanimatedhorde2_new",
    physical: 70,
    magic: 35,
    fire: 150,
    light: 33,
    cold: 70,
    poison: 80,
  },
  {
    id: "pantherwoman4_new",
    physical: 35,
    magic: 35,
    fire: 76,
    light: 76,
    cold: 120,
    poison: 76,
  },
  {
    id: "succubus5_new",
    physical: 40,
    magic: 35,
    fire: 66,
    light: 50,
    cold: 50,
    poison: 120,
  },
  {
    id: "bighead10_new",
    physical: 35,
    magic: 35,
    fire: 85,
    light: 120,
    cold: 85,
    poison: 50,
  },
  {
    id: "siegebeast3_new",
    physical: 70,
    magic: 35,
    fire: 75,
    light: 33,
    cold: 120,
    poison: 90,
  },
  {
    id: "putriddefiler1_new",
    physical: 35,
    magic: 100,
    fire: 50,
    light: 50,
    cold: 50,
    poison: 130,
  },
  {
    id: "bonefetish7_new",
    physical: 55,
    magic: 50,
    fire: 50,
    light: 55,
    cold: 65,
    poison: 120,
  },
  {
    id: "batdemon3_new",
    physical: 30,
    magic: 25,
    fire: 80,
    light: 80,
    cold: 120,
    poison: 80,
  },
  {
    id: "blunderbore1_new",
    physical: 65,
    magic: 55,
    fire: 115,
    light: 50,
    cold: 50,
    poison: 80,
  },
  {
    id: "corruptrogueThrone",
    physical: 40,
    magic: 20,
    fire: 25,
    light: 50,
    cold: 65,
    poison: 40,
  },
  {
    id: "cr_archerThrone",
    physical: 15,
    fire: 25,
    light: 45,
    cold: 50,
    poison: 40,
  },
  { id: "cr_lancerThrone", physical: 45, light: 45, cold: 50, poison: 40 },
  { id: "impThrone", magic: 75, fire: 50, light: 25, poison: 50 },
  { id: "overseerThrone", physical: 40, fire: 50, light: 130 },
  {
    id: "megademonThrone",
    physical: 50,
    magic: 20,
    fire: 75,
    light: 25,
    cold: 45,
    poison: 75,
  },
  { id: "frogdemonThrone", physical: 15, fire: 75, cold: 25, poison: 85 },
  {
    id: "fingermageThrone",
    physical: 50,
    magic: 25,
    fire: 25,
    light: 65,
    cold: 130,
  },
  {
    id: "zombieCaldeum",
    physical: 50,
    fire: 95,
    light: 25,
    cold: 75,
    poison: 45,
  },
  {
    id: "pantherwoman1Caldeum",
    physical: 15,
    magic: 25,
    fire: 75,
    cold: 65,
    poison: 50,
  },
  {
    id: "swarm4_new",
    physical: 100,
    magic: 100,
    fire: 95,
    light: 95,
    cold: 95,
    poison: 95,
  },
  {
    id: "slinger2_new",
    physical: 40,
    magic: 35,
    fire: 65,
    light: 70,
    cold: 140,
    poison: 70,
  },
  {
    id: "fetish3_new",
    physical: 35,
    magic: 35,
    fire: 55,
    light: 55,
    cold: 140,
    poison: 50,
  },
  {
    id: "baboon5_new",
    physical: 70,
    magic: 35,
    fire: 80,
    light: 110,
    cold: 50,
    poison: 75,
  },
  { id: "skeleton3Crypt", physical: 35, fire: 30, cold: 65, poison: 65 },
  { id: "scarab3Crypt", light: 80, cold: 50 },
  { id: "batdemon3Crypt", physical: 50, magic: 25, fire: 75, light: 50 },
  {
    id: "sk_archer3Crypt",
    physical: 35,
    magic: 150,
    fire: 30,
    light: 20,
    poison: 105,
  },
  { id: "bighead1Crypt", light: 75, cold: 65 },
  { id: "baboon1Crypt", fire: 60, light: 25, cold: 125, poison: 25 },
  { id: "clawviper2Crypt", physical: 60, fire: 45, light: 25, poison: 40 },
  {
    id: "gargoyletrapCrypt",
    physical: 25,
    magic: 50,
    fire: 65,
    light: 50,
    cold: 120,
    poison: 75,
  },
  {
    id: "flyingscimitarCrypt",
    physical: 25,
    magic: 50,
    fire: 50,
    light: 75,
    poison: 75,
  },
  {
    id: "skmage_fire6_new",
    physical: 55,
    magic: 80,
    fire: 130,
    light: 90,
    cold: 50,
    poison: 110,
  },
  {
    id: "megademon4_new",
    physical: 65,
    magic: 70,
    fire: 140,
    light: 33,
    cold: 120,
    poison: 50,
  },
  {
    id: "fetishblow8_new",
    physical: 40,
    magic: 35,
    fire: 130,
    light: 55,
    cold: 55,
    poison: 65,
  },
  {
    id: "quillrat8_new",
    physical: 50,
    magic: 35,
    fire: 55,
    light: 130,
    cold: 75,
    poison: 65,
  },
];

const mapRows: MapRow[] = [
  {
    name: "Infernal Expanse (Andariel)",
    monsters: [
      "reanimatedhorde2_new",
      "pantherwoman4_new",
      "bloodlord5_new",
      "succubus5_new",
      "bighead1Crypt",
      "willowisp7_new",
      "siegebeast3_new",
      "vampire5_new",
      "putriddefiler1_new",
      "bonefetish7_new",
      "batdemon3_new",
      "blunderbore1_new",
    ],
  },
  {
    name: "Hall of Ancestral Judgment (Mephisto)",
    monsters: [
      "corruptrogueThrone",
      "cr_archerThrone",
      "cr_lancerThrone",
      "impThrone",
      "overseerThrone",
      "megademonThrone",
      "frogdemonThrone",
      "fingermageThrone",
    ],
  },
  {
    name: "Pandemonium Rift (Duriel)",
    monsters: [
      "reanimatedhorde2_new",
      "bonefetish7_new",
      "bighead1Crypt",
      "succubus5_new",
      "baboon1Crypt",
      "siegebeast3_new",
      "vampire5_new",
    ],
  },
  {
    name: "Pharaoh’s Hollow (Diablo)",
    monsters: [
      "clawviper5_new",
      "thornhulk4_new",
      "vampire5_new",
      "cantor4_new",
      "unraveler5_new",
      "frozenhorror5_new",
      "cr_archer3_new",
      "fingermage3_new",
    ],
  },
  {
    name: "Sepulcher of the Fallen (Baal)",
    monsters: [
      "skeleton3Crypt",
      "scarab3Crypt",
      "batdemon3Crypt",
      "sk_archer3Crypt",
      "bighead1Crypt",
      "baboon1Crypt",
      "clawviper2Crypt",
      "flyingscimitarCrypt",
    ],
  },
  {
    name: "Crimson Tributary (Izual)",
    monsters: [
      "bloodlord5_new",
      "willowisp7_new",
      "bonefetish7_new",
      "succubuswitch5_new",
      "cr_archer3_new",
      "fingermage3_new",
      "doomknight3_new",
      "clawviper5_new",
    ],
  },
  {
    name: "Temple of Withered Faith (Hephasto)",
    monsters: [
      "clawviper5_new",
      "skmage_fire6_new",
      "megademon4_new",
      "willowisp7_new",
      "fetishblow8_new",
      "quillrat8_new",
      "batdemon3Crypt",
      "succubus5_new",
    ],
  },
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

  return {
    name: map.name,
    ...immunities,
  };
});

export default function MapResistanceOverview() {
  return (
    <ItemGroup title="Map Resistance Overview">
      <Typography sx={{ fontSize: "0.85rem", color: "#a89070", mb: 1 }}>
        Immunity threshold is resistance above 100. Cells show immune count and
        immune values in brackets.
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
              <TableCell sx={{ color: "#e8d5b0", fontWeight: 700 }}>
                Level Name
              </TableCell>
              <TableCell sx={{ color: "#e8d5b0", fontWeight: 700 }}>
                Physical
              </TableCell>
              <TableCell sx={{ color: "#e8d5b0", fontWeight: 700 }}>
                Magic
              </TableCell>
              <TableCell sx={{ color: "#e8d5b0", fontWeight: 700 }}>
                Fire
              </TableCell>
              <TableCell sx={{ color: "#e8d5b0", fontWeight: 700 }}>
                Light
              </TableCell>
              <TableCell sx={{ color: "#e8d5b0", fontWeight: 700 }}>
                Cold
              </TableCell>
              <TableCell sx={{ color: "#e8d5b0", fontWeight: 700 }}>
                Poison
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mapSummary.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={{ color: "#c9b8a0" }}>{row.name}</TableCell>
                <TableCell sx={{ color: "#c9b8a0" }}>
                  {formatImmunityCell(row.physical)}
                </TableCell>
                <TableCell sx={{ color: "#c9b8a0" }}>
                  {formatImmunityCell(row.magic)}
                </TableCell>
                <TableCell sx={{ color: "#c9b8a0" }}>
                  {formatImmunityCell(row.fire)}
                </TableCell>
                <TableCell sx={{ color: "#c9b8a0" }}>
                  {formatImmunityCell(row.light)}
                </TableCell>
                <TableCell sx={{ color: "#c9b8a0" }}>
                  {formatImmunityCell(row.cold)}
                </TableCell>
                <TableCell sx={{ color: "#c9b8a0" }}>
                  {formatImmunityCell(row.poison)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ItemGroup>
  );
}
