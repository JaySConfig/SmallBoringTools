import { Inter } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import { getSEOTags } from "@/libs/seo";

// Add this function at the top of your file
export async function generateMetadata({ params }) {
  const { category } = params;
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return getSEOTags({
    title: `${formattedCategory} Tools | Small Boring Tools`,
    description: `Discover our collection of simple, predictable ${category} tools that get the job done without unnecessary complexity.`,
    canonicalUrlRelative: `/submissions/${category}`
  });
}

const font = Inter({ subsets: ["latin"] });

export const viewport = {
	// Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
	themeColor: config.colors.main,
	width: "device-width",
	initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-theme={config.colors.theme}
			className={font.className}
		>
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</head>
			
			<body>
				{/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
