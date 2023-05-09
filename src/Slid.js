import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { DataContext } from "./context/Context";

function valuetext(value) {
  return `${value}°C`;
}
// uitc2022
export default function RangeSlider() {
  const { value ,setValue } = useContext(DataContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        step={1}
        max={300}
      />
    </Box>
  );
}
