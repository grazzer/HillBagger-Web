import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useHillsStore } from "../hillsStore";

export default function ClassificationRadial() {
  const setSelectedClassification = useHillsStore(
    (state) => state.setSelectedClassification
  );
  const classification = useHillsStore((state) => state.selectedClassification);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedClassification(event.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={classification}
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
