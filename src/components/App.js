import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Profile from "./Profile";
import Bulb from "./Bulb";

const GlobalStyle = createGlobalStyle`
    :root{
      --brightness: 10;
    }

    body{
        padding: 0;
        margin: 0;
        font-family: roboto; 
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
	height: 100vh;
	background: url("https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-1.png")
		repeat-x;
	background-size: 200% auto;
	background-position: 0% 0%;
	animation: rollingFog 160s linear infinite;
	background-color: rgb(var(--brightness), var(--brightness), var(--brightness));
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Main>
				<Profile />
				<Bulb />
			</Main>
		</>
	);
};

export default App;
