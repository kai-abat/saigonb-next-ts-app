import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProps } from "@/utils/Props";
import Header from "@/components/layout/Header";
import BreadCrumbs from "@/components/BreadCrumbs";
import Footer from "@/components/layout/Footer";
import { Divider } from "@nextui-org/react";
import { Providers } from "./providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saigon Brewers",
  description:
    "Saigon Brewers, Legitimate brewers of vietnamese coffee beans and more",
};

export default function RootLayout({ children }: AppProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <section
            id="main-section"
            className="min-w-420px flex flex-col gap-6 bg-primary-100 dark:bg-stone-950"
          >
            <Header />
            <main className="flex">
              <section className=" m-auto min-w-[300px] max-w-[1024px] w-[90vw] sm:w-[80vw]">
                <BreadCrumbs />
                <Divider className="my-2" />
                {children}
              </section>
            </main>
            <Footer />
          </section>
        </Providers>
      </body>
    </html>
  );
}