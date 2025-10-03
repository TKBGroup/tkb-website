import {
  Montserrat,
  Montserrat_Alternates,
  Poppins,
  Inter,
  Chivo,
} from "next/font/google";

export const montserratAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat-alt",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});
export const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});
