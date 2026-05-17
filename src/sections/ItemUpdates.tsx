import Box from "@mui/material/Box";
import {
  CharmUpdateGroup,
  NewUniqueCharmsGroup,
  NewUniqueItemsGroup,
  UpdatedUniqueItemsGroup,
} from "./itemUpdates/CharmAndUniqueGroups";
import NewItemsGroup from "./itemUpdates/NewItemsGroup";
import {
  SetChangesGroup,
  StorageUpdatesGroup,
} from "./itemUpdates/StorageAndSetGroups";

export default function ItemUpdates() {
  return (
    <Box>
      <NewItemsGroup />
      <CharmUpdateGroup />
      <NewUniqueCharmsGroup />
      <NewUniqueItemsGroup />
      <UpdatedUniqueItemsGroup />
      <StorageUpdatesGroup />
      <SetChangesGroup />
    </Box>
  );
}
