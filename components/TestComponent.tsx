"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import useToast from "@/app/hooks/useToast";

export const TestComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { addToast, removeToast } = useToast();

  const handleLoading = () => {
    setIsLoading((prev) => !prev);

    setTimeout(() => {
      setIsLoading((prev) => !prev);
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <Button>Test</Button>
        <Button
          variant="default"
          isLoading={isLoading}
          onClick={handleLoading}
          size="large"
        >
          Test Loading
        </Button>
        <Button size="xlarge" variant="primary">
          Test
        </Button>
        <Button variant="secondary">Test</Button>

        <Button
          variant="secondary"
          onClick={() => addToast("I am a toast")}
          className="bg-purple-500"
        >
          Test Toast
        </Button>
        <Button variant="secondary" onClick={removeToast}>
          Remove Toaster{" "}
        </Button>
      </div>
    </>
  );
};
