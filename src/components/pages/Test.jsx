import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import React from "react";

export const Test = () => {
  return (
    <>
      <FormLabel component="legend">Category</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox name="gilad" />} label="HP" />
        <FormControlLabel control={<Checkbox name="jason" />} label="Acer" />
        <FormControlLabel
          control={<Checkbox name="antoine" />}
          label="Lenovo"
        />
        <FormControlLabel control={<Checkbox name="antoine" />} label="ASUS" />
        <FormControlLabel control={<Checkbox name="antoine" />} label="Evoo" />
        <FormControlLabel
          control={<Checkbox name="antoine" />}
          label="Surface"
        />
        <FormControlLabel control={<Checkbox name="antoine" />} label="Apple" />
      </FormGroup>
    </>
  );
};
