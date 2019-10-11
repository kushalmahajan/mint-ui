import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./index";
import Row from "../grid/row";
import Col from "../grid/col";
// Storybook Markdown support - https://github.com/storybookjs/storybook/issues/6434
// import ButtonReadme from "./button.README.md";

export const actions = {
	onOutlineClick: action("onOutlineClick"),
	onPrimaryClick: action("onPrimaryClick")
};
const stories = storiesOf("Buttons", module);
stories.add(
	"Primary",
	() => (
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button>Primary Button</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="primary" disabled>
					Primary Disabled
				</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="primary" size="md">
					Primary Large
				</Button>
			</Col>
		</Row>
	),
	{
		notes: { Introduction: "Notes", "Design notes": "Lorem ipsum" }
	}
);
stories.add("Outlined", () => (
	<Row>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="outlined"
				{...actions}
				onClick={() => {
					console.log("fired");
				}}
			>
				Outlined button
			</Button>
		</Col>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="outlined"
				disabled
				onClick={() => {
					console.log("fired");
				}}
			>
				Outlined disabled
			</Button>
		</Col>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="outlined"
				size="md"
				onClick={() => {
					console.log("fired");
				}}
			>
				Outlined large
			</Button>
		</Col>
	</Row>
));
stories.add("Danger", () => (
	<Row>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="danger"
				onClick={() => {
					console.log("fired");
				}}
			>
				Danger button
			</Button>
		</Col>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="danger"
				disabled
				onClick={() => {
					console.log("fired");
				}}
			>
				Danger disabled
			</Button>
		</Col>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="danger"
				size="md"
				onClick={() => {
					console.log("fired");
				}}
			>
				Danger large
			</Button>
		</Col>
	</Row>
));
stories.add("Link", () => (
	<Row>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="link"
				onClick={() => {
					console.log("fired");
				}}
			>
				Link button
			</Button>
		</Col>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="link"
				disabled
				onClick={() => {
					console.log("fired");
				}}
			>
				Link disabled
			</Button>
		</Col>
		<Col sm={3} md={3} lg={3}>
			<Button
				btnType="link"
				size="md"
				onClick={() => {
					console.log("fired");
				}}
			>
				Link large
			</Button>
		</Col>
	</Row>
));