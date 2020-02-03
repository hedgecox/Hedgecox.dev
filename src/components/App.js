import React, { useState, useRef, useEffect } from "react";
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
	max-width: 100%;
`;

const BulbContainer = styled.div`
	--bulb-opacity: 0.6;
	position: absolute;
	top: 0;
	right: 200px;
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

const App = () => {
	const [Brightness, SetBrightness] = useState(50);
	const BrightnessChange = e => SetBrightness(e.target.value);
	const BulbContainerRef = useRef();

	useEffect(() => {
		BulbContainerRef.current.style.setProperty("--bulb-opacity", Brightness / 255);
	}, [Brightness]);

	return (
		<>
			<GlobalStyle />
			<Main style={{ backgroundColor: `rgb(${Brightness}, ${Brightness}, ${Brightness})` }}>
				<input
					type="range"
					min={50}
					max={240}
					value={Brightness}
					onChange={BrightnessChange}
				/>
			</Main>

			<BulbContainer ref={BulbContainerRef}>
				<Bulb src="/bulb2.png" alt="Lightbulb" />
			</BulbContainer>
		</>
	);
};

export default App;
