import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import NewData from "./data.mdx";
import HelloWorld from "./hello.mdx";
import Header from "./Components/Header";
import Container from "./Components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Container />
      {/* <NewData /> */}
    </>
  );
}
