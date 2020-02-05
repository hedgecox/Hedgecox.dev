import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BulbImg = styled.img`
	max-width: 100%;
`;

const BulbContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	max-width: 33.33%;
	z-index: 1;

	&:after {
		content: "";
		width: 0;
		height: 30%;
		position: absolute;
		top: 60%;
		box-shadow: 0px 67px 106px 39px rgba(251, 255, 0, calc(var(--brightness) / 255));
		left: 48%;
	}
`;

const Slider = styled.input`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 11;
`;

const Bulb = () => {
	const [Brightness, SetBrightness] = useState(10);
	const BrightnessChange = e => SetBrightness(e.target.value);

	useEffect(() => {
		document.documentElement.style.setProperty("--brightness", Brightness);
	}, [Brightness]);

	return (
		<BulbContainer>
			<BulbImg src="/bulbtest.png" alt="Lightbulb" />
			<Slider
				type="range"
				min={10}
				max={200}
				value={Brightness}
				onChange={BrightnessChange}
			/>
		</BulbContainer>
	);
};

export default Bulb;
