import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup({
  setterFunction,
  currentSelection,
}: {
  setterFunction: Dispatch<SetStateAction<string>>;
  currentSelection: string;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setterFunction(event.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={currentSelection}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="munro" control={<Radio />} label="Munro" />
        <FormControlLabel value="simm" control={<Radio />} label="Simm" />
        <FormControlLabel value="hump" control={<Radio />} label="Hump" />
        <FormControlLabel value="marilyn" control={<Radio />} label="Marilyn" />
      </RadioGroup>
    </FormControl>
  );
}
