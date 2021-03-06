import React, { SVGProps } from "react";

const SvgRatingFilled3 = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
		<g fill="none" fillRule="evenodd" transform="translate(1 1)">
			<path
				fill="#ED892E"
				fillRule="nonzero"
				d="M19-.77C8.081-.77-.77 8.08-.77 19c0 10.919 8.85 19.77 19.77 19.77 10.919 0 19.77-8.851 19.77-19.77C38.77 8.081 29.92-.77 19-.77z"
			/>
			<path
				fill="#F9CA0F"
				fillRule="nonzero"
				d="M19 .77C29.068.77 37.23 8.932 37.23 19S29.068 37.23 19 37.23.77 29.068.77 19 8.932.77 19 .77z"
			/>
			<path
				fill="#ED892E"
				fillRule="nonzero"
				d="M26.703 26.446a1.027 1.027 0 01.112 2.048l-.112.006h-15.92a1.027 1.027 0 01-.111-2.048l.112-.006h15.919z"
			/>
			<path
				fill="#ED892E"
				d="M19 .514c10.214 0 18.059 7.95 18.47 17.92C35.456 10.214 27.95 4.108 19 4.108S2.544 10.214.53 18.434C.942 8.464 8.787.514 19 .514z"
				opacity={0.25}
			/>
			<circle cx={8.216} cy={19} r={2.568} fill="#ED892E" />
			<circle cx={29.784} cy={19} r={2.568} fill="#ED892E" />
		</g>
	</svg>
);

export default SvgRatingFilled3;
