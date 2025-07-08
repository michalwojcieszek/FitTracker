"use client";
import { Box, IconButton } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// const handleEdit = (id: string) => {
//   console.log("Edit metric at id:", id);
// };

const handleDelete = (id: string) => {
  console.log("Delete metric at id:", id);
};

type StatsButtonsProps = {
  id: string;
};

const StatsButtons = ({ id }: StatsButtonsProps) => {
  return (
    <Box>
      {/* <IconButton
        onClick={() => handleEdit(id)}
        color="primary">
        <EditIcon />
      </IconButton> */}
      <IconButton
        onClick={() => handleDelete(id)}
        color="error">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default StatsButtons;
