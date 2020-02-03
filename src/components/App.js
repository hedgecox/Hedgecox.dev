import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
    }
`;

const Main = styled.main`
	width: 100%;
	height: 100vh;
`;

const Bulb = styled.img`
	position: absolute;
`;

const App = () => {
	const [Brightness, SetBrightness] = useState(50);
	const BrightnessChange = e => SetBrightness(e.target.value);

	return (
		<>
			<GlobalStyle />
			<Main style={{ backgroundColor: `rgb(${Brightness}, ${Brightness}, ${Brightness})` }}>
				<input
					type="range"
					min={50}
					max={255}
					value={Brightness}
					onChange={BrightnessChange}
				/>
			</Main>

			<Bulb src="/bulb.png" alt="Lightbulb" />
		</>
	);
};

export default App;
