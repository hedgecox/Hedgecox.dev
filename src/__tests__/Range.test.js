import React from "react";
import Range from "../components/Range";
import { shallow } from "enzyme";

describe("Range Component", () => {
	test("Range renders input", () => {
		const wrap = shallow(<Range />).dive();
		expect(wrap.find(`input[type="range"]`).length).toBe(1);
	});
});
