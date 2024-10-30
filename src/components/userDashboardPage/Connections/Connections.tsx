import { UserDashBoardPageBadgeSectionType } from "@/types/typesNew";
import Image from "next/image";
import React from "react";
interface Props {
  staticContent: UserDashBoardPageBadgeSectionType;
}

const Connections = ({ staticContent }: Props) => {
  return (
    <div className="p-10 mt-10 bg-white shadow-2xl rounded-3xl">
      <h2 className="mb-5 text-xl font-bold">
        {staticContent.listofConnections}
      </h2>
      <div className="flex items-center">
        <p className="mr-5">{staticContent.addConnection}</p>
        <input
          type="text"
          className="rounded-full p-3 w-[63%] bg-gray-50"
          placeholder="Пребарај"
        />
      </div>
      <div className="flex mt-5 justify-between mb-5">
        <h3 className="text-xl font-bold">{staticContent.latestAdded}</h3>
        <p className="text-orange-400 underline">{staticContent.viewAll}</p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="text-center">
          <div className="mb-5">
            <Image
              src={"/randomUserProfilePic1.png"}
              alt="profilePicture"
              className="rounded-t-full border-4 border-cyan-300"
              width={200}
              height={200}
            />
          </div>
          <p>Jovana B.</p>
        </div>
        <div className="text-center">
          <div className="mb-5">
            <Image
              src={"/randomUserProfilePic1.png"}
              alt="profilePicture"
              className="rounded-t-full border-4 border-cyan-300"
              width={200}
              height={200}
            />
          </div>
          <p>Влатко М.</p>
        </div>
        <div className="text-center">
          <div className="mb-5">
            <Image
              src={"/randomUserProfilePic1.png"}
              alt="profilePicture"
              className="rounded-t-full border-4 border-cyan-300"
              width={200}
              height={200}
            />
          </div>
          <p>Борче К.</p>
        </div>
        <div className="text-center">
          <div className="mb-5">
            <Image
              src={"/randomUserProfilePic1.png"}
              alt="profilePicture"
              className="rounded-t-full border-4 border-cyan-300"
              width={200}
              height={200}
            />
          </div>
          <p>Јовче Ј.</p>
        </div>
        <div className="text-center">
          <div className="mb-5">
            <Image
              src={"/randomUserProfilePic1.png"}
              alt="profilePicture"
              className="rounded-t-full border-4 border-cyan-300"
              width={200}
              height={200}
            />
          </div>
          <p>Aнабела П.</p>
        </div>
        <div className="text-center">
          <div className="mb-5">
            <Image
              src={"/randomUserProfilePic1.png"}
              alt="profilePicture"
              className="rounded-t-full border-4 border-cyan-300"
              width={200}
              height={200}
            />
          </div>
          <p>Баже К.</p>
        </div>
      </div>
    </div>
  );
};

export default Connections;
