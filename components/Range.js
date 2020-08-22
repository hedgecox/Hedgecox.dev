import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RangeSlider = styled.input`
  -webkit-appearance: none;
  height: 10px;
  border-radius: 5px;
  background: transparent;
  outline: none;
  opacity: 0.85;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  position: absolute;
  top: 25px;
  right: 10px;
  max-width: 35%;
  box-shadow: 0px 0px 10px 1px #fff;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 49px;
    height: 49px;
    border: 0;
    background: url("/thumb.png") no-repeat;
    cursor: pointer;

    @media (max-width: 575px) {
      width: 38px;
      height: 38px;
      background-size: 100% 100%;
    }
  }

  &::-moz-range-thumb {
    width: 49px;
    height: 49px;
    border: 0;
    background: url("/thumb.png") no-repeat;
    cursor: pointer;

    @media (max-width: 575px) {
      width: 38px;
      height: 38px;
      background-size: 100% 100%;
    }
  }
`;

const Range = () => {
  const [Brightness, SetBrightness] = useState(10);
  const BrightnessChange = e => SetBrightness(parseInt(e.target.value));
  useEffect(() => {
    document.documentElement.style.setProperty("--brightness", Brightness);
  }, [Brightness]);

  return (
    <RangeSlider
      type="range"
      min={10}
      max={250}
      value={Brightness}
      onChange={BrightnessChange}
    />
  );
};

export default Range;
