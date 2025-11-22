import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";

export const clashDisplay = localFont({
  src: "./_fonts/ClashDisplay-Variable.woff2",
  display: "swap",
  variable: "--font-clash-display",
  weight: "100 900",
  style: "normal",
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  // You can specify weights you need
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
