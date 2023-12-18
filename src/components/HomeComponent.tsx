import React from "react";
import styles from "../../public/css/Home.module.css";
import useCars from "./hooks/useCars";
import CarCard from "./CarCard";
import { Spacer, Text } from "vcc-ui";
import PaginationDesktop from "./PaginationDesktop";
export const HomeComponent: React.FC = () => {
  const { cars } = useCars();

  const onClickLeft = () => {
    let cardList = document.getElementById("cardList");
    let card = cardList?.firstElementChild;
    let cardSize = card?.clientWidth;
    let scrollPosition = cardList?.scrollLeft;
    if (scrollPosition! >= cardSize!) {
      cardList?.scrollTo({
        left: scrollPosition! - cardSize!,
        behavior: "smooth",
      });
    }
  };
  const onClickRight = () => {
     let cardList = document.getElementById("cardList");
    let card = cardList?.firstElementChild;
    let scrollSize = cardList?.scrollWidth;
    let cardSize = card?.clientWidth;
    let scrollPosition = cardList?.scrollLeft;
    if (scrollPosition! +  cardSize! <= scrollSize!) {
      cardList?.scrollTo({
        left: scrollPosition! + cardSize!,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.homeWrapper}>
      <Text variant="amundsen">Selecione o seu Volvo</Text>
      <Spacer />
      <div className={styles.cardWrapper} id="cardList">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            modelName={car.modelName}
            bodyType={car.bodyType}
            modelType={car.modelType}
            imageUrl={car.imageUrl}
          />
        ))}
      </div>
      <PaginationDesktop
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
      />
    </div>
  );
};
