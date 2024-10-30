import React from "react";
import SmallCard from "../base/SmallCard";

const People = () => {
  return (
    <div className="mt-[10%]">
      <h2 className=" text-5xl mb-[8%]">ОДБОР НА МАЧР</h2>
      <div className="grid grid-cols-6 gap-6">
        <SmallCard
          imgSrc="/aboutPageImgs/firstCardImg.png"
          name="Дарко Петровски"
          title="Претседател на МАЧР"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/secondCardImg.png"
          name="Христина Лозаноска"
          title="Вита Институт"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/thirdCardImg.png"
          name="Љупчо Ефтимов"
          title="Економски факултет - Скопје, при УКИМ"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/fourthCardImg.png"
          name="Ана Салтирова Давидовски"
          title="АМСМ"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/fifthCardImg.png"
          name="Ана Томовска Мисоска"
          title="Универзитет Американ колеџ Скопје"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/sixthCardImg.png"
          name="Ивана Дојчиновска Стојановиќ"
          title="НЛБ банка"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/seventhCardImg.png"
          name="Мелита Секуловска"
          title="Економски факултет, Универзитет Љубљана"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/eightCardImg.png"
          name="Олгица Спасевска"
          title="Шпаркасе банка"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/ninthCardImg.png"
          name="Елица Перчинкова"
          title="АЕК"
        />
        <SmallCard
          imgSrc="/aboutPageImgs/tenthCardImg.png"
          name="Марија Петрушевска"
          title="ТТК банка"
        />
      </div>
    </div>
  );
};

export default People;
