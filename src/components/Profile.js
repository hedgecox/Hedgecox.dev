import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  color: #fff;
  font-weight: 300;
  margin: 0;
  position: relative;
  word-spacing: -12px;

  &:before {
    content: "<";
    position: absolute;
    left: -35px;
    color: #bada55;
    font-weight: 400;
  }

  &:after {
    content: "/>";
    margin-left: 5px;
    color: #bada55;
    font-weight: 400;
  }
`;

const Tagline = styled.h2`
  font-weight: 200;
  margin: 15px 0 0 0;
  font-size: 125%;
`;

const Intro = styled.p`
  font-weight: 300;
  margin: 20px 0 0 0;
  line-height: 127%;
  font-size: 90%;
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 60%;
  padding-left: 6%;
  padding-top: 13%;
  font-size: 200%;
  color: #fff;
`;

const Tag = styled.span`
  color: #bada55;

  &:before {
    content: "<";
    margin-top: 3px;
  }

  &:after {
    content: ">";
  }
`;

const Profile = () => {
  return (
    <Container>
      <Name>Luke Hedgecox</Name>
      <Tagline>Front End Engineer | Roboticist</Tagline>
      <Intro>
        Hello, World! Welcome to the <Tag>summary</Tag> of me
        <br />I write <Tag>code</Tag> to build a better web
        <br />
        My experiences <Tag>span</Tag> from front end development to social
        robotics
        <br />
        My <Tag>main</Tag> focus is building dynamic, responsive interfaces
        <br />
        Blending technology with the human touch of creativity
      </Intro>
    </Container>
  );
};

export default Profile;
