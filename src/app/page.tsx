"use client";
import React, { useState, useEffect, Suspense } from "react";
import styles from "./page.module.scss";
import { CardI } from "@/models/Card.model";
import Card from "@/components/elements/Card/Card";
import SkeletonCard from "@/components/elements/Card/CardSkeleton";
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
export default function Home() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [buttonSelected, setButtonSelected] = useState("0");

  function changeSelectedButton(val: string) {
    setButtonSelected(val);
  }
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
      setSelectedData(fetchedData);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (buttonSelected === "0") {
      setSelectedData(data);
    } else {
      const newData = data.filter((elto: CardI) => elto.available);
      setSelectedData(newData);
    }
  }, [buttonSelected, data]);
  return (
    <main>
      <div className={styles.container}>
        <img alt='background' className={styles.img} src={"./images/bg-cafe.jpg"} />
        <div className={styles.overlay}>
          <div className={styles["header-container"]}>
            <h2>Our Collection</h2>
            <p>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <div className={styles["button-container"]}>
            <button
              onClick={() => changeSelectedButton("0")}
              type="button"
              className={`${styles.button} ${
                buttonSelected === "0" ? `${styles.selected}` : ""
              }`}
            >
              All products
            </button>
            <button
              type="button"
              onClick={() => changeSelectedButton("1")}
              className={`${styles.button} ${
                buttonSelected === "1" ? `${styles.selected}` : ""
              }`}
            >
              Available now
            </button>
          </div>
          <div className={styles["store-container"]}>
            {selectedData.map((card: CardI, index: number) => (
              <Suspense key={index} fallback={<SkeletonCard />}>
                <Card card={card} key={index} />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
