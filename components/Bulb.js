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
		z-index: -1;
		height: 13%;
		position: absolute;
		top: 63%;
		box-shadow: 0px 67px 120px 100px rgba(227, 159, 30, calc(var(--brightness) / 255));
		width: 0;
		left: 50%;
		border-radius: 50%;

		@media (max-width: 575px) {
			box-shadow: 0px 67px 60px 38px rgba(227, 159, 30, calc(var(--brightness) / 255));
			top: 45%;
		}
	}
`;

const Bulb = () => {
	return (
		<BulbContainer>
			<BulbImg src="/bulb.png" alt="Lightbulb" />
			<Range />
		</BulbContainer>
	);
};

export default Bulb;
