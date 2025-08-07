import { ColorSchemeScript } from "@mantine/core"
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.png" />
				<ColorSchemeScript />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
