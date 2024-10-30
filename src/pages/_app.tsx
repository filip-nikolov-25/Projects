import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { FooterType, NavType } from "@/types/typesNew";
import Footer from "@/components/Footer";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  const [navData, setNavData] = useState<NavType | null>(null);
  const [footerData, setFooterData] = useState<FooterType | null>(null);
  const { locale, push } = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchNavAndFooterData = async () => {
      try {
        const res = await fetch("http://localhost:5000/navbar");
        const navData = await res.json();
        const footerRes = await fetch("http://localhost:5000/footer");
        const footerData = await footerRes.json();

        if (locale) {
          setNavData(navData[locale]);
          setFooterData(footerData[locale]);
        }
      } catch (error) {
        console.error("Error fetching nav/footer data", error);
      }
    };

    fetchNavAndFooterData();
  }, [locale]);

  useEffect(() => {
    const detectLocale = async () => {
      const hasManualPreference = localStorage.getItem("manualLanguageChange");

      if (!hasManualPreference) {
        try {
          const response = await axios.get("https://ipapi.co/json/");
          const userCountry = response.data.country_code;

          if (userCountry === "MK" && locale !== "mk") {
            push("/", "/", { locale: "mk" });
          } else if (userCountry !== "MK" && locale !== "en") {
            push("/", "/", { locale: "en" });
          }
        } catch (error) {
          console.error("Error detecting location", error);
        }
      }
    };

    detectLocale();
  }, [locale, push]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar navData={navData} />
      <Component {...pageProps} />
      {footerData && <Footer staticContent={footerData} />}
    </>
  );
}

export default appWithTranslation(MyApp);
