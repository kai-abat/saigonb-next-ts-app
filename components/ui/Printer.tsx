"use client";

import { useEffect } from "react";

const Printer = ({ data }: any) => {
  useEffect(() => {
    console.log("Printer", data);
  }, [data]);

  return <div>PRINTER</div>;
};
export default Printer;
