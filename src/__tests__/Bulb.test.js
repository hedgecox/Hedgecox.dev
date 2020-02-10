import React from "react";
import { shallow } from "enzyme";
import Bulb from "../components/Bulb";

describe("Bulb Component", () => {
	const wrap = shallow(<Bulb />)
		.childAt(0)
		.dive();

	test("Bulb renders image", () => {
		expect(wrap.find("img").length).toBe(1);
	});

	test("Bulb image has a valid Alt tag", () => {
		expect(wrap.find("img").prop("alt")).toBeTruthy();
	});
});
