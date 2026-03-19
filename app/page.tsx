"use client";
import { useState } from "react";
import Image from "next/image";

const buttons = [
  "AC", "+/-", "%", "÷",
  "7", "8", "9", "x",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ",", "="
];

export default function Home() {
  const [display, setDisplay] = useState("0");

  // this function get the value and update the state with setDisplay
  function handleButtonClick(value : string) {

    switch (value) {

      case "AC":
        setDisplay("0");
        return;
        break;
      case "=":
        // Logic of equal
        const numbers = display.split(/[+x÷%-]/);
        // setDisplay(numbers[1]);
        const operator = ["+", "-", "x", "÷", "%"].find(op => display.includes(op));
        let result = 0;
        switch (operator) {
          case "+":
            result = Number(numbers[0]) + Number(numbers[1]);
            setDisplay(String(result));
            return
          case "x":
            result = Number(numbers[0]) * Number(numbers[1]);
            setDisplay(String(result));
          
          return;
          case "-":
            result = Number(numbers[0]) - Number(numbers[1]);
            setDisplay(String(result));
          
          return;
          case "÷":
            result = Number(numbers[0]) / Number(numbers[1]);
            setDisplay(String(result));
          
          return;
          case "%":
            result = Number(numbers[0]) % Number(numbers[1]);
            setDisplay(String(result)); 
          return;
          case "+/-":
            result = Number(numbers[0]) * -1;
            setDisplay(String(result));
          return;
          default:
            break;
        }
        return;

        // there is something called eval but is not used because it can run malicioou code
      break;
    
    }

   if (display === "0") {
    setDisplay(value);
   }else {
    setDisplay(display + value);
    
   }
  }

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-[320px]">
        {/* Where the numbers are shown */}
        <div className="flex h-32 items-end justify-end px-4 py-6">
          <span className="text-7xl font-light text-white">{display}</span>
        </div>

        {/* Keyboard (where I use .map) */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
            key={btn}
            className={`flex h-16 items-center justify-center rounded-full text-2xl font-medium transition-colors
              ${btn === "=" || btn === "÷" || btn === "x" || btn === "+" || btn === "-"
                ? "bg-orange-500 text-white hover:bg-orange-400"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
              }
              ${btn === "0" ? "col-span-2 px-6 justify-start" : ""}
               `}
               onClick={() => handleButtonClick(btn)}
              >
              {btn}
              </button>
          ))}

        </div>

      </div>

    </main>
    
  );
}
