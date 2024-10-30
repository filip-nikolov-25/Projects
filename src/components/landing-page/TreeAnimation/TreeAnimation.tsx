import React from "react";
import "./treeAnimation.css";

const TreeAnimation = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="smallTreeImgContainer singleTree">
        <img
          src="../../../../public/images/landing-page/tree-animations/smallTree.svg"
          alt=""
          className="w-100"
        />
      </div>
      <div className="withoutLeafsTreeImgContainer singleTree">
        <img
          src="../../../../public/images/landing-page/tree-animations/withoutLeafsTree.svg"
          alt=""
          className="w-100 noLeafTree"
        />
      </div>
      <div className="bigTreeImgContainer singleTree">
        <img
          className="h-100 w-100"
          src="../../../../public/images/landing-page/tree-animations/bigTree.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default TreeAnimation;
