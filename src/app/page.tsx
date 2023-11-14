import React from "react";
import styles from "./page.module.scss";
import { CardI } from "@/models/Card.model";
import Card from "@/components/elements/Card/Card";
import Image from "next/image";
async function getData() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    if (!res.ok) {
      throw new Error(`${res}`);
    }

    return res.json();
  } catch (error) {
    console.log("🚀 ~ file: page.tsx:11 ~ getData ~ error:", error);
  }
}
export default async function Home() {
  const data = await getData();
  console.log("🚀 ~ file: page.tsx:19 ~ Home ~ data:", data);
  return (
    <main>
      <div className={styles.container}>
        <img className={styles.img} src={"./images/bg-cafe.jpg"} />
        <div className={styles.overlay}>
          <div className={styles["header-container"]}>
            <h2>Our Collection</h2>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <div className={styles['store-container']}>
            {data.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
