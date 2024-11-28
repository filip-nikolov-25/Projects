import ChooseKeyPopUp from "@/components/ChooseKeyPopUp";
import DragAndDrop from "@/components/DragAndDrop";
import { AllChords } from "@/types/types";
import { GetStaticProps } from "next";
import { useState } from "react";

interface Props {
  allChordsData: AllChords;
}
export default function Home({ allChordsData }: Props) {
  const [chooseKey, setChooseKey] = useState<string>("");
  console.log(chooseKey, "KEY FROM PARENT");

  return (
    <>
      <DragAndDrop allChordsData={allChordsData} keyOfASong={chooseKey} />
      <ChooseKeyPopUp setChooseKey={setChooseKey} />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const chordRes = await fetch("http://localhost:5000/allChords");
  const allChordsData = await chordRes.json();

  return {
    props: {
      allChordsData,
    },
  };
};
