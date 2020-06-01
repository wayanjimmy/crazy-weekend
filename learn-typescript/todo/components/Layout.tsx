import * as React from "react";
import Head from "next/head";
import tw from "twin.macro";

type Props = {
	title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
	children,
	title = "This is the default title",
}) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<header />
		<div css={[tw`container mx-auto px-5 py-8`]}>{children}</div>
		<footer css={[tw`text-gray-700`]}>
			<div
				css={[
					tw`container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col`,
				]}
			>
				<a
					css={[
						tw`flex font-medium items-center md:justify-start justify-center text-gray-900`,
					]}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						css={[
							tw`w-10 h-10 text-white p-2 bg-indigo-500 rounded-full`,
						]}
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span css={[tw`ml-3 text-xl`]}>tailblocks</span>
				</a>
				<p
					css={[
						tw`text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4`,
					]}
				>
					© 2020 tailblocks —
					<a
						href="https://twitter.com/wayanjimmy"
						css={[tw`text-gray-600 ml-1`]}
						rel="noopener noreferrer"
						target="_blank"
					>
						@wayanjimmy
					</a>
				</p>
			</div>
		</footer>
	</div>
);

export default Layout;
