import React from "react";
import { Link } from "react-router-dom";
import { CardSmall, CardLarge } from "../components";

const Card = ({ id, clientName, paymentDue, items, status, total }) => {
  return (
    <Link to={`/${id}`}>
      <article className={articleStyles}>
        <CardLarge
          id={id}
          clientName={clientName}
          paymentDue={paymentDue}
          items={items}
          status={status}
          total={total}
        />
        <CardSmall
          total={total}
          id={id}
          clientName={clientName}
          paymentDue={paymentDue}
          items={items}
          status={status}
        />
      </article>
    </Link>
  );
};

export default Card;

/* ---------styles-------*/
const articleStyles =
  "w-327 h-134 tablet:w-672 tablet:h-[73px] desktop:w-730 rounded-lg text-0C0E16 dark:text-FFFF bg-F0F7FA dark:bg-1E2139 card-shadow hover:border-7C5DFA hover:border";
