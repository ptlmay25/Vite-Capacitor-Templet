import { Button } from "@/components/ui/button";
import React from "react";

export const Landing = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-yellow-500">
          Hello Capacitor
        </h1>
        <div>
          <Button>Click me</Button>
        </div>
      </div>
    </>
  );
};
