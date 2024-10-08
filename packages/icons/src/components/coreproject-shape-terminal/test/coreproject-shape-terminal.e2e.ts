import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-terminal", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-terminal></coreproject-shape-terminal>");
		const element = await page.find("coreproject-shape-terminal");
		expect(element).toHaveClass("hydrated");
	});
});
