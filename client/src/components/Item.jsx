import React from 'react';
import { convertPrice } from '../utils/convert';

const Item = ({ item }) => {
  return (
    <li className="flex justify-between items-center">
      <div>
        <h3 className="text-0C0E16 dark:text-FFFF">
          {item ? item.name : 'item name'}
        </h3>
        <p className="mt-2">
          {item ? item.quantity : 'item quantity'} X{' '}
          {item ? convertPrice(item.price) : 'item price'}
        </p>
      </div>
      <div className="text-0C0E16  dark:text-FFFF text-body-1 ">
        {item ? convertPrice(item.price) : 'item price'}
      </div>
    </li>
  );
};

export default Item;
