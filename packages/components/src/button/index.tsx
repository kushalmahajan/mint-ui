import * as React from "react";
import styled, { css } from "styled-components";
import { tuple } from "../__utils/Type";
import COLORS from "../__utils/Colors";
import { transparentize } from "polished";
import { GlobalStyles } from "../app";

const ButtonTypeTuple = tuple("outlined", "solid", "link");
export type ButtonType = typeof ButtonTypeTuple[number];
const ButtonStyleTuple = tuple("default", "primary", "danger");
export type ButtonStyle = typeof ButtonStyleTuple[number];
const ButtonSizeTuple = tuple("sm", "default", "lg");
export type ButtonSize = typeof ButtonSizeTuple[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
	btnType?: ButtonType;
	btnStyle?: ButtonStyle;
	disabled?: boolean;
	size?: ButtonSize;
	loading?: boolean | { delay?: number };
	icon?: any;
	className?: string;
	prefixCls?: string;
	children?: React.ReactNode;
}
export type AnchorButtonProps = {
	href: string;
	target?: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
	Omit<React.AnchorHTMLAttributes<unknown>, "type" | "onClick">;

export type NativeButtonProps = {
	onClick: React.MouseEventHandler<HTMLElement>;
	htmlType?: ButtonHTMLType;
} & BaseButtonProps &
	Omit<React.ButtonHTMLAttributes<unknown>, "type" | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const BaseButton = css<ButtonProps>`
	${GlobalStyles};
	cursor: pointer;
	padding: 8px 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	touch-action: manipulation;
	font-size: 16px;
	line-height: 15px;
	min-height: 40px;
	transition: color 0.3s ease-in;
	&:focus {
		outline: 0;
	}
	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none;
		`}
	${({ size }) =>
		size === "sm" &&
		css`
			font-size: 14px;
			line-height: 15px;
			min-height: 36px;
			padding: 6px 15px;
		`};
	${({ size }) =>
		size === "lg" &&
		css`
			font-size: 18px;
			line-height: 14px;
			min-height: 49px;
			padding: 10px 15px;
		`}
`;

export const ButtonDefault = styled.button<ButtonProps>`
	${BaseButton};
	color: ${COLORS.GREY1};
	border: 1px solid ${COLORS.GREY4};
	background-color: transparent;
	&:hover {
		background-color: ${COLORS.BACKGROUND_GREY};
	}
	&:active {
		color: ${COLORS.BLACK};
		border-color: ${COLORS.GREY3};
	}
	${({ btnStyle }) =>
		btnStyle === "primary" &&
		css`
			color: ${COLORS.PRIMARY};
			border-color: ${COLORS.PRIMARY};
			&:hover {
				color: ${COLORS.PRIMARY_LIGHT};
				border-color: ${COLORS.PRIMARY_LIGHT};
				background-color: ${transparentize(0.9, COLORS.PRIMARY_LIGHT)};
			}
			&:active {
				color: ${COLORS.PRIMARY_DARK};
				border-color: ${COLORS.PRIMARY_DARK};
			}
		`};
	${({ btnStyle }) =>
		btnStyle === "danger" &&
		css`
			border-color: ${COLORS.DANGER};
			color: ${COLORS.DANGER};
			&:hover {
				color: ${COLORS.DANGER_LIGHT};
				border-color: ${COLORS.DANGER_LIGHT};
				background-color: ${transparentize(0.9, COLORS.DANGER_LIGHT)};
			}
			&:active {
				color: ${COLORS.DANGER_DARK};
				border-color: ${COLORS.DANGER_DARK};
			}
		`};

	${({ disabled }) =>
		disabled &&
		css`
			color: ${COLORS.DISABLED};
			border-color: ${COLORS.DISABLED};
		`};
`;

const ButtonSolid = styled.button<ButtonProps>`
	${BaseButton};
	color: ${COLORS.WHITE};
	border: 1px solid transparent;
	background-color: ${COLORS.GREY3};
	&:hover {
		background-color: ${transparentize(0.3, COLORS.GREY3)};
	}
	&:active {
		background-color: ${COLORS.GREY2};
	}
	${({ btnStyle }) =>
		btnStyle === "primary" &&
		css`
			background-color: ${COLORS.PRIMARY};
			&:hover {
				background-color: ${transparentize(0.2, COLORS.PRIMARY)};
			}
			&:active {
				background-color: ${COLORS.PRIMARY_DARK};
			}
		`};
	${({ btnStyle }) =>
		btnStyle === "danger" &&
		css`
			background-color: ${COLORS.DANGER};
			&:hover {
				background-color: ${transparentize(0.2, COLORS.DANGER)};
			}
			&:active {
				background-color: ${COLORS.DANGER_DARK};
			}
		`};

	${({ disabled }) =>
		disabled &&
		css`
			background-color: ${COLORS.DISABLED};
		`};
`;

export const Link = styled.a<ButtonProps>`
	${BaseButton};
	display: inline-flex;
	text-decoration: none;
	background: none;
	border: 0;
	color: ${COLORS.GREY1};
	&:hover {
		background: ${COLORS.BACKGROUND_GREY};
	}
	&:active {
		color: ${COLORS.BLACK};
	}
	${({ disabled }) =>
		disabled &&
		css`
			color: ${COLORS.DISABLED};
		`};

	${({ btnStyle }) =>
		btnStyle === "primary" &&
		css`
			color: ${COLORS.PRIMARY};
			&:hover {
				color: ${COLORS.PRIMARY_LIGHT};
				background: ${transparentize(0.9, COLORS.PRIMARY)};
			}
			&:active {
				color: ${COLORS.PRIMARY_LIGHT};
			}
		`}
	${({ btnStyle }) =>
		btnStyle === "danger" &&
		css`
			color: ${COLORS.DANGER};
			&:hover {
				color: ${COLORS.DANGER_LIGHT};
				background: ${transparentize(0.9, COLORS.DANGER)};
			}
			&:active {
				color: ${COLORS.DANGER_DARK};
			}
		`}
`;

export const Button: React.FC<ButtonProps> = ({
	btnType = "outlined",
	btnStyle = "default",
	icon,
	loading = false,
	onClick = function() {},
	href = "#",
	target = "blank",
	htmlType = "button",
	children = <></>,
	...rest
}: ButtonProps) => {
	const handleClick: React.MouseEventHandler<
		HTMLButtonElement | HTMLAnchorElement
	> = e => {
		if (btnType !== "link") {
			onClick(e);
		}
	};
	const Icon = icon;
	const getIcon = (style: string, btnType: string) => {
		if (btnType === "outlined" || btnType === "link") {
			switch (style) {
				case "primary":
					return <Icon color={COLORS.PRIMARY} />;
				case "danger":
					return <Icon color={COLORS.DANGER} />;
				default:
					return <Icon color={COLORS.GREY2} />;
			}
		}
		return <Icon color={COLORS.WHITE} />;
	};

	const getButtonType = (type: string | undefined) => {
		switch (type) {
			case "solid":
				return (
					<ButtonSolid
						onClick={handleClick}
						btnType={btnType}
						btnStyle={btnStyle}
						type={htmlType}
						{...rest}
					>
						{icon ? getIcon(btnStyle, btnType) : null}
						{children}
					</ButtonSolid>
				);
			case "link":
				return (
					<Link
						href={href}
						target={target}
						btnStyle={btnStyle}
						onClick={handleClick}
						{...rest}
					>
						{icon ? getIcon(btnStyle, btnType) : null}
						{children}
					</Link>
				);
			default:
				return (
					<ButtonDefault
						onClick={handleClick}
						btnType={btnType}
						btnStyle={btnStyle}
						type={htmlType}
						{...rest}
					>
						{icon ? getIcon(btnStyle, btnType) : null}
						{children}
					</ButtonDefault>
				);
		}
	};
	return loading ? (
		<ButtonDefault btnType={btnType} disabled>
			Loading...
		</ButtonDefault>
	) : btnType ? (
		getButtonType(btnType)
	) : null;
};

export default Button;
