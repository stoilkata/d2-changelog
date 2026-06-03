import Box from "@mui/material/Box";
import {
  AncientFragmentRecipesGroup,
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
      <AncientFragmentRecipesGroup />
    </Box>
  );
}
