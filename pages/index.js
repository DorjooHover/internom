import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeHeader from "../src/components/Home/header";
import HomeBanner from "../src/components/Home/banner";
import HomeFeatured from "../src/components/Home/featured";
export default function Home() {
     return (
          <>
               <HomeHeader />
               <HomeBanner />
               <HomeFeatured />
          </>
     );
}
