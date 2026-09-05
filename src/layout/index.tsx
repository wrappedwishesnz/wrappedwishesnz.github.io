"use client";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Enquiry from "@/components/enquiry";

import styles from "./layout.module.scss";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={`${styles.wrapper}`}>
      <Nav />
      <main id="top">
        {children}
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
};
