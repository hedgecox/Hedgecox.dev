import React from "react";
import styled from "styled-components";
import Range from "./Range";

const BulbImg = styled.img`
  max-width: 100%;
  max-width: 325px;

  @media (max-width: 991px) {
    max-height: 550px;
  }

  @media (max-width: 575px) {
    max-height: 250px;
  }
`;

const BulbContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 36%;
  z-index: 1;
  text-align: center;

  @media (max-width: 991px) {
    position: relative;
    width: 100%;
  }

  &:after {
    content: "";
    width: 0;
    height: 30%;
    position: absolute;
    top: 60%;
    box-shadow: 0px 67px 106px 39px
      rgba(251, 255, 0, calc(var(--brightness) / 255));
    left: 48%;
  }
`;

const Bulb = () => {
  return (
    <BulbContainer>
      <BulbImg src="/bulbtest.png" alt="Lightbulb" />
      <Range />
    </BulbContainer>
  );
};

export default Bulb;
