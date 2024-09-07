import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-clipboard",
	shadow: true,
	styleUrl: "coreproject-shape-clipboard.css"
})
export class CoreprojectShapeClipboard {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					data-marker="D"
				>
					<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
					<rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
				</svg>
			</Host>
		);
	}
}
