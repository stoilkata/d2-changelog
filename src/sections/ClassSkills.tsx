import Box from "@mui/material/Box";
import AmazonSkills from "./classSkills/AmazonSkills";
import AssassinSkills from "./classSkills/AssassinSkills";
import BarbarianSkills from "./classSkills/BarbarianSkills";
import DruidSkills from "./classSkills/DruidSkills";
import NecromancerSkills from "./classSkills/NecromancerSkills";
import PaladinSkills from "./classSkills/PaladinSkills";
import SorceressSkills from "./classSkills/SorceressSkills";

export default function ClassSkills() {
  return (
    <Box>
      <SorceressSkills />
      <NecromancerSkills />
      <PaladinSkills />
      <AmazonSkills />
      <DruidSkills />
      <AssassinSkills />
      <BarbarianSkills />
    </Box>
  );
}
