import React, { useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function Dollar({ amount }) {
  const oldAmount = useRef(amount);
  const timeOutRef = useRef(null);
  useEffect(() => {
    if (oldAmount.current !== amount) {
      if (amount > oldAmount.current) {
        const upDollar = document.querySelector(".amountClass");
        upDollar.classList.add("upDollar");
        upDollar.classList.remove("downDollar");
      } else if (amount < oldAmount.current) {
        const downDollar = document.querySelector(".amountClass");
        downDollar.classList.add("downDollar");
        downDollar.classList.remove("upDollar");
      }
    }
    oldAmount.current = amount;
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => {
      const dollarElement = document.querySelector(".amountClass");
      dollarElement.classList.remove("upDollar", "downDollar");
    }, 2000);
  }, [amount]);
  return (
    <div className="amountClass">
      Dollar : {amount.toPrecision(2)} :{" "}
      <span className="up-icon">
        <FaArrowUp />
      </span>
      <span className="down-icon">
        <FaArrowDown />
      </span>
      <br />
    </div>
  );
}

export default Dollar;
