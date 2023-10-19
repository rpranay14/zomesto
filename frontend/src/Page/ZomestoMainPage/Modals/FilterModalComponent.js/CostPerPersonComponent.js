import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../../../redux/ActionCreators";

function valuetext(value) {
  return `${value}°C`;
}
const gfg = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 25,
    label: "25°C",
  },
  {
    value: 50,
    label: "50°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: 900,
  },
  margin: {
    height: theme.spacing(3),
  },
  thumb: {
    background: "red",
    "&~&": {
      background: "red",
    },
  },
  mark: {
    background: "black",
  },
  rail: {
    background: "red",
    border: "red",
    color: "red",
  },
  track: {
    background: "red",
    border: "red",
    color: "red",
  },
}));
const CostPerPersonComponent = () => {
  const value = useSelector((state) => state.filter.filter.costperperson);
  console.log(value, "value of value");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    dispatch(addFilter({ costperperson: newValue }));
  };

  return (
    <main className="ml-3 mt-3">
      <p className="text-gray-400 text-base">Cost per person</p>
      <p className=" font-semibold text-lg">
        ₹{value[0]} - {value[1] === 1000 ? "Any" : `₹${value[1]}`}
      </p>
      <div className="w-[20rem] mt-32  ml-20">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={100}
          getAriaValueText={valuetext}
          min={0}
          max={1000}
          classes={{
            thumb: classes.thumb,
            rail: classes.rail,
            track: classes.track,
            valueLabel: classes.valueLabel,
            mark: classes.mark,
          }}
        />
      </div>
    </main>
  );
};

export default CostPerPersonComponent;
