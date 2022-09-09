import React from "react";
import { Loading, NoResults, Card } from "../components";
import { Transition } from "@headlessui/react";
import { transitionProps } from "../data/data";
import { useGlobalContext } from "../context/context";

const Cards = () => {
  const { invoices, loadingCards } = useGlobalContext();

  if (loadingCards) {
    return <Loading />;
  }
  if (invoices.length < 1) {
    return <NoResults />;
  }

  return (
    <Transition {...transitionProps} show={invoices.length > 0}>
      <ul className={containerStyles}>
        {invoices.map((invoice) => (
          <Card key={invoice.id} {...invoice.content} id={invoice.id} />
        ))}
      </ul>
    </Transition>
  );
};

export default Cards;

const containerStyles =
  "min-w-[375px] grid grid-rows-[1fr] gap-y-4 place-content-center pb-16 mt-8 tablet:mt-14 desktop:mt-[65px]";
