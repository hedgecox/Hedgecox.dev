import React, { useState, useRef, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "./Profile";

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: roboto; 
    }

    @keyframes rollingFog {
     0% { background-position: 0% 0%; }
     100% { background-position: 200% 0%; }
    }
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background: url("https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-1.png")
    repeat-x;
  background-size: 200% auto;
  background-position: 0% 0%;
  animation: rollingFog 160s linear infinite;
`;

const Bulb = styled.img`
  max-width: 100%;
`;

const BulbContainer = styled.div`
  --bulb-opacity: 0.6;
  position: absolute;
  top: 0;
  right: 135px;
  max-width: 650px;
  z-index: 1;

  &:after {
    content: "";
    width: 0;
    height: 245px;
    position: absolute;
    top: 320px;
    left: 327px;
    box-shadow: 0px 67px 106px 39px rgba(251, 255, 0, var(--bulb-opacity));
  }
`;

const Slider = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
`;

const App = () => {
  const [Brightness, SetBrightness] = useState(10);
  const BrightnessChange = e => SetBrightness(e.target.value);
  const BulbContainerRef = useRef();

  useEffect(() => {
    BulbContainerRef.current.style.setProperty(
      "--bulb-opacity",
      Brightness / 255
    );
  }, [Brightness]);

  return (
    <>
      <GlobalStyle />
      <Main
        style={{
          backgroundColor: `rgb(${Brightness}, ${Brightness}, ${Brightness})`
        }}
      >
        <Profile />

        <Slider
          type="range"
          min={10}
          max={200}
          value={Brightness}
          onChange={BrightnessChange}
        />

        <BulbContainer ref={BulbContainerRef}>
          <Bulb src="/bulbtest.png" alt="Lightbulb" />
        </BulbContainer>
      </Main>
    </>
  );
};

export default App;
