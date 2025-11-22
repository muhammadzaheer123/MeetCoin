import { Inter, Fontdiner_Swanky } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const fontdinerSwanky = Fontdiner_Swanky({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fontdiner",
});

// export const clashDisplay = localFont({
//   src: [
//     {
//       path: "../../public/fonts/ClashDisplay-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/ClashDisplay-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/ClashDisplay-Semibold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/ClashDisplay-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-clash-display",
//   display: "swap",
// });

export const fontVariables = [
  inter.variable,
  fontdinerSwanky.variable,
  // clashDisplay.variable,
].join(" ");
