import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeHeader from "../src/components/Home/header";
import HomeBanner from "../src/components/Home/banner";
import HomeFeatured from "../src/components/Home/featured";
import HomeFavourite from "../src/components/Home/favourite";
import HomeCategory from "../src/components/Home/category";
export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeBanner />
      <HomeFeatured />
      <HomeFavourite />
      <HomeCategory />
    </>
  );
}
