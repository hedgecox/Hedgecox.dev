import React from "react";
import { mount } from "enzyme";
import Profile from "../components/Profile";

describe("Profile Component", () => {
	const wrap = mount(<Profile />);

	//Enforce good semantics
	test("Renders a single h1 tag", () => {
		expect(wrap.find("h1").length).toBe(1);
	});

	//Enforce good semantics
	test("Renders a single h2 tag", () => {
		expect(wrap.find("h2").length).toBe(1);
	});

	test("Renders at least one p tag", () => {
		expect(wrap.find("p").length).toBeGreaterThan(0);
	});

	test("Renders at least one link tag", () => {
		expect(wrap.find("a").length).toBeGreaterThan(0);
	});

	test("Renders a valid image with alt for every link", () => {
		wrap.find("a").forEach(a => {
			const img = a.find("img");
			expect(img.length).toBe(1);
			expect(img.prop("alt")).toBeTruthy();
		});
	});
});
