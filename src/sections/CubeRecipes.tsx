import Box from "@mui/material/Box";
import {
  CharmRerollingGroup,
  RuneUpgradingGroup,
  SocketingGroup,
  SpecialRecipesGroup,
  UniqueWeaponEnhancementGroup,
} from "./cubeRecipes/CoreRecipeGroups";
import CraftingRecipesGroup from "./cubeRecipes/CraftingRecipesGroup";

export default function CubeRecipes() {
  return (
    <Box>
      <SpecialRecipesGroup />
      <RuneUpgradingGroup />
      <UniqueWeaponEnhancementGroup />
      <CharmRerollingGroup />
      <CraftingRecipesGroup />
      <SocketingGroup />
    </Box>
  );
}
