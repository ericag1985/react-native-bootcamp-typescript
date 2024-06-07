import React, { FC } from "react";
import Card from "../card/card";
import { Cat } from "../../data/cat-data";

interface CardListProps {
  items: Cat[];
}

const CardList: FC<CardListProps> = ({ items }) => {
  return (
    <ul className="list flex flex-wrap">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Card {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
