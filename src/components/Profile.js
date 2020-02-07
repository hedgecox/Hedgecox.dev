import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  font-weight: 300;
  margin: 0;
  position: relative;
  word-spacing: -12px;

  &:before {
    content: "<";
    position: absolute;
    right: 100%;
    color: var(--brand);
    font-weight: 400;
  }

  &:after {
    content: "/>";
    margin-left: 5px;
    color: var(--brand);
    font-weight: 400;
  }
`;

const Tagline = styled.h2`
  font-weight: 200;
  margin: 15px 0 0 0;
  font-size: 125%;
`;

const Intro = styled.div`
  font-weight: 300;
  margin: 20px 0 0 0;
  line-height: 127%;
  font-size: 85%;
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 64%;
  padding: 0 6%;
  padding-top: 13%;
  font-size: 200%;

  @media (max-width: 991px) {
    padding-top: 0;
    width: 100%;
    position: relative;
  }
`;

const Tag = styled.span`
  color: var(--brand);
  font-weight: bold;

  &:before {
    content: "<";
    margin-top: 3px;
  }

  &:after {
    content: ">";
  }
`;

const P = styled.p`
  margin: 12px 0;
`;

const Links = styled.div`
  margin-top: 35px;

  a {
    margin-right: 50px;
    border-radius: 50%;
    display: inline-block;
    width: 75px;
    height: 75px;

    @media (max-width: 575px) {
      width: 55px;
      height: 55px;
    }

    &:hover {
      box-shadow: 0px 0px 8px 2px #f89b34, inset 0px 0px 3px 7px #f89b34;
    }
  }

  img {
    filter: invert(calc(var(--brightness) / 255 * 100%));
    max-width: 100%;
  }
`;

const Profile = () => {
  return (
    <Container>
      <Name>Luke Hedgecox</Name>
      <Tagline>Front End Engineer | Roboticist</Tagline>
      <Intro>
        <P>
          Hello, World! Welcome to the <Tag>summary</Tag> of me
        </P>
        <P>
          I write <Tag>code</Tag> to build a better web. The <Tag>span</Tag> of
          my work ranges from front end web development to social robotics. My{" "}
          <Tag>main</Tag> focus has always been building dynamic, responsive
          interfaces:
        </P>
        <P>Blending technology with the human touch of creativity</P>
        <Links>
          <a href="https://github.com/hedgecox" target="blank">
            <img src="/github.png" alt="My Github" />
          </a>

          <a
            href="https://www.linkedin.com/in/luke-hedgecox-1968b9b2"
            target="blank"
          >
            <img src="/linkedin.png" alt="My Linkedin" />
          </a>
        </Links>
      </Intro>
    </Container>
  );
};

export default Profile;
