import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "./Profile";
import Bulb from "./Bulb";

const GlobalStyle = createGlobalStyle`
    :root{
      --brightness: 10;
      --brand: #ea6f10;
    }

    body{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: rgb(
          calc(255 - var(--brightness)),
          calc(255 - var(--brightness)),
          calc(255 - var(--brightness))
        );
        background-color: rgb(
          var(--brightness),
          var(--brightness),
          var(--brightness)
        );

        @media (max-width: 575px) {
          font-size: 9px;
        }
    }

    @keyframes rollingFog {
     0% { background-position: 0% 0%; }
     100% { background-position: 200% 0%; }
    }

    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }
`;

const Main = styled.main`
	width: 100%;
	min-height: 100vh;
	background: url("/fog.png") repeat-x;
	background-size: 200% 100%;
	background-position: 0% 0%;
	animation: rollingFog 140s linear infinite;
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Main>
				<Bulb />
				<Profile />
			</Main>
		</>
	);
};

export default App;
