"use client"

import Link from "next/link";
import styles from "./header.module.scss";
import { useState } from "react";

export default function Donate() {
  const [donateOpen, setDonateOpen] = useState(true)
  return (
    <>
    { donateOpen === true ?
    <div className={styles.donate}>
    <p className={styles.donateText}>
      <span className={styles.close} onClick={()=>setDonateOpen(false)}>&#10005;</span>
      This project is built and maintained by a single dev, donations fund server costs and ☕. Please consider supporting :&#41;</p>
    </div>: ""}
    </>
  );
}