import React, { FC } from "react";

interface CardProps {
  id: number;
  name: string;
  email: string;
}

const Card: FC<CardProps> = ({ id, name, email }) => {
  return (
    <article className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?set=set4&size=200x200`}
        alt={`${name} headshot`}
      />

      <div className="tc">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Card;
