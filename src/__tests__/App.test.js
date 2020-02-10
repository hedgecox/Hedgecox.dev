import React from "react";
import { mount } from "enzyme";
import App from "../components/App";

describe("General App Component", () => {
	const wrap = mount(<App />);

	describe("App Semantics", () => {
		test("Only one h1", () => {
			expect(wrap.find("h1").length).toBe(1);
		});

		test("Name is inside a h1", () => {
			expect(wrap.find("h1").text()).toContain("Luke Hedgecox");
		});

		test("Only one h2", () => {
			expect(wrap.find("h2").length).toBe(1);
		});

		test("All images to be valid with alt tags", () => {
			wrap.find("img").forEach(img => {
				expect(img.prop("src")).toBeTruthy();
				expect(img.prop("alt")).toBeTruthy();
			});
		});
	});
});
