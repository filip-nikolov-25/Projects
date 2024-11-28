import { AllChords } from "@/types/types";
import React, { useEffect, useState, useRef } from "react";

interface Props {
  allChordsData: AllChords;
  keyOfASong: string;
}

const DragAndDrop = ({ allChordsData, keyOfASong }: Props) => {
  const [data, setNewData] = useState<AllChords>();
  const [dragAndDropArr, setDragAndDropArr] = useState<string[]>([]);
  const [allChords, setAllChords] = useState<string[]>([]);
  const [songText, setSongText] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setNewData(allChordsData);
    if (allChordsData) {
      setAllChords(allChordsData.cMajorORaMinor.chordScale);
      if (keyOfASong) {
        //@ts-expect-error typescript is giving error it is not sure that keyOfASong will be correct name to access the data
        setAllChords(allChordsData[keyOfASong]?.chordScale || []);
      }
    }
  }, [allChordsData, keyOfASong, data]);

  const handleOnDrag = (e: React.DragEvent, dragItem: string) => {
    e.dataTransfer.setData("dragItem", dragItem);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const dragItem = e.dataTransfer.getData("dragItem");

    // Making the drop area and entering the lyrics for the song
    if (textAreaRef.current) {
      const cursorPosition = textAreaRef.current.selectionStart;
      const newText =
        songText.slice(0, cursorPosition) +
        dragItem +
        songText.slice(cursorPosition);
      setSongText(newText);
    }

    const filteredArr = allChords?.filter((items) => items !== dragItem);
    setAllChords(filteredArr);
  };

  const handleRemoveChord = (chord: string) => {
    const filteredArr = dragAndDropArr.filter((items) => items !== chord);
    setDragAndDropArr(filteredArr);

    if (!allChords?.includes(chord)) {
      setAllChords([...allChords, chord]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        {allChords?.map((item) => (
          <div
            className="bg-cyan-500 p-4 m-2 cursor-pointer"
            draggable
            onDragStart={(e) => handleOnDrag(e, item)}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-1/2">
        <h1>DROP ITEMS HERE</h1>
        <div
          className="bg-black w-full p-10 h-auto"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          {dragAndDropArr.map((chord, index) => (
            <div
              key={index}
              className="bg-green-600 p-2 m-2 flex justify-between"
            >
              <div>{chord}</div>
              <div onClick={() => handleRemoveChord(chord)}>X</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-10">
        <textarea
          ref={textAreaRef}
          value={songText}
          onChange={(e) => setSongText(e.target.value)}
          placeholder="Enter your song lyrics here..."
          className="w-full p-4 h-40"
        />
      </div>
    </div>
  );
};

export default DragAndDrop;
