import type { Metadata } from "next";
import "./globals.css";
import { ComponentProps } from "@/utils/types/Props";
import Header from "@/components/layout/Header";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import Footer from "@/components/layout/Footer";
import { Divider } from "@nextui-org/react";
import { Providers } from "./providers";
import { getUserData } from "@/utils/services/UserAPI";
import Initializer from "@/components/ui/Initializer";
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saigon Brewers",
  description:
    "Saigon Brewers, Legitimate brewers of vietnamese coffee beans and more",
};

export default async function RootLayout({ children }: ComponentProps) {
  const userData = await getUserData();

  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <Initializer userData={userData}> */}
          <section
            id="main-section"
            className="relative min-w-420px flex flex-col gap-6 bg-primary-100 dark:bg-stone-950"
          >
            <Header userData={userData} />
            <div className="fixed z-0 w-full min-h-lvh opacity-10">
              <Image
                src="/images/bg/bg-top.png"
                fill
                alt="background top"
                className="w-full h-full object-fill z-10"
              />
              <Image
                src="/images/bg/bg-top-2.jpg"
                width={200}
                height={200}
                alt="background top 2"
                className="w-[300px] h-[300px] object-fill z-10 rounded-full absolute top-[18%] left-32"
              />
            </div>

            <main className=" z-40 flex">
              <section className=" m-auto min-w-[300px] max-w-[1024px] w-[90vw] sm:w-[80vw]">
                <BreadCrumbs />
                <Divider className="my-2" />
                {children}
              </section>
            </main>
            <Footer />
          </section>
          {/* </Initializer> */}
        </Providers>
      </body>
    </html>
  );
}
