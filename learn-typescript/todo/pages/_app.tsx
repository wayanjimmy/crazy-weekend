import * as React from "react";
import App from "next/app";
import Head from "next/head";

import "tailwindcss/dist/base.css";

export default class MyApp extends App {
	public render() {
		const { Component, pageProps } = this.props;

		return (
			<React.Fragment>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>Next.js TypeScript Quickstart</title>
				</Head>
				<Component {...pageProps} />
			</React.Fragment>
		);
	}
}
