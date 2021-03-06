import React, { SVGProps } from "react";

const SvgRatingFilled2 = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
		<g fill="none" fillRule="evenodd">
			<path
				fill="#E1511C"
				fillRule="nonzero"
				d="M20 .23C9.081.23.23 9.08.23 20 .23 30.919 9.08 39.77 20 39.77c10.919 0 19.77-8.851 19.77-19.77C39.77 9.081 30.92.23 20 .23z"
			/>
			<path
				fill="#FE8348"
				fillRule="nonzero"
				d="M20 1.77c10.068 0 18.23 8.162 18.23 18.23S30.068 38.23 20 38.23 1.77 30.068 1.77 20 9.932 1.77 20 1.77z"
			/>
			<path
				fill="#E1511C"
				fillRule="nonzero"
				d="M27.06 31.962a1.027 1.027 0 001.285-1.603c-5.504-4.408-11.172-4.408-16.689 0a1.027 1.027 0 001.282 1.604c4.767-3.808 9.37-3.808 14.123 0z"
			/>
			<path
				fill="#E1511C"
				d="M20 1.514c10.214 0 18.059 7.95 18.47 17.92C36.456 11.214 28.95 5.108 20 5.108S3.544 11.214 1.53 19.434C1.942 9.464 9.787 1.514 20 1.514z"
				opacity={0.25}
			/>
			<circle cx={9.216} cy={20} r={2.568} fill="#E1511C" />
			<circle cx={30.784} cy={20} r={2.568} fill="#E1511C" />
		</g>
	</svg>
);

export default SvgRatingFilled2;
