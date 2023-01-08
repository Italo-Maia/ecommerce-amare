import React from "react";
import Head from "next/head";

import { string } from "prop-types";

const defaultDesciption = " ";
const defaultOGURL = " ";
const defaultOGImage = "/logo.png";

//Necessario complementar Head
const Heads = (props) => {
	return (
		<Head>
			<meta
				name="description"
				content={props.description || defaultDesciption}
			/>
			<title>{props.title}</title>
			<meta property="og:url" content={props.url || defaultOGURL} />
			<meta property="og:title" content={props.title || " "} />
			<meta
				name="og:description"
				content={props.description || defaultDesciption}
			/>
			<meta property="twitter:site" content={props.url || defaultOGURL} />
			<meta property="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:image"
				content={props.ogImage || defaultOGImage}
			/>
			<meta
				property="og:image"
				content={props.ogImage || defaultOGImage}
			/>
			<meta property="og:image:width" content="600" />
			<meta property="og:image:height" content="600" />
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
				crossOrigin="anonymous"
			/>
			{props.children}
		</Head>
	);
};

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string,
};

export default Heads;
