import { Stack ,Rating} from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function App() {
  const [value, setValue] = useState<number | null>(0);

  console.log({ value });
  const changeHandler = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Rating
        onChange={changeHandler}
        value={value}
        size="medium"
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
}

export default App;
