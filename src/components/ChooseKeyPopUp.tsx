import React from "react";

interface Props {
  setChooseKey: (key: string) => void;
}

const ChooseKeyPopUp = ({ setChooseKey }: Props) => {
  const keys = [
    "Em / G",
    "Fm / G#",
    "F#m / A",
    "Gm / B",
    "G#m / H",
    "Am / C",
    "Dm / F",
    "Bm / C#",
    "Hm / D",
    "Cm / D#",
    "C#m / E",
    "D#m / F#",
  ];

  return (
    <div className="p-20 bg-green-600 w-4/5 mx-auto rounded-3xl">
      <div className="grid grid-cols-6 gap-4">
        {keys.map((key, index) => (
          <button
            key={index}
            onClick={() => {
              if (key.includes("Em / G")) {
                setChooseKey("gMajorORdeMinor");
              }
              if (key.includes("Fm / G#")) {
                setChooseKey("gSharpMajorORdFMinor");
              }
              if (key.includes("F#m / A")) {
                setChooseKey("aMajorORfSharpMinor");
              }
              if (key.includes("Gm / B")) {
                setChooseKey("bMajorORgMinor");
              }
              if (key.includes("G#m / H")) {
                setChooseKey("hMajorORgSharpMinor");
              }
              if (key.includes("Am / C")) {
                setChooseKey("cMajorORaMinor");
              }
              if (key.includes("Dm / F")) {
                setChooseKey("fMajorORdMinor");
              }
              if (key.includes("Bm / C#")) {
                setChooseKey("cSharpMajorORbMinor");
              }
              if (key.includes("Hm / D")) {
                setChooseKey("dMajorORhMinor");
              }
              if (key.includes("Cm / D#")) {
                setChooseKey("dSharpMajorORcMinor");
              }
              if (key.includes("C#m / E")) {
                setChooseKey("eMajorORcSharpMinor");
              }
              if (key.includes("D#m / F#")) {
                setChooseKey("fSharpMajorORdSharpMinor");
              }
            }}
            className="bg-white px-5 py-5 rounded-full w-full"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooseKeyPopUp;
