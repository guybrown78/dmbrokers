import React, { createContext, useContext, useEffect } from "react";
import { useMachine } from "@xstate/react";
import { heroLoopMachine } from "./heroLoopMachine"; // Import your machine

// Create a context for the state machine
const HeroLoopContext = createContext();

export function HeroLoopProvider({ children }) {
  const [state, send] = useMachine(heroLoopMachine);

  // Function to send the TRANSITION_END event
  const handleTransitionEnd = () => {
    send("TRANSITION_END");
  };

  // You can use `useEffect` to listen for state changes
  // useEffect(() => {
  //   console.log("Current state:", state.value);
  // }, [state]);

  return (
    <HeroLoopContext.Provider value={{ state, send, handleTransitionEnd }}>
      {children}
    </HeroLoopContext.Provider>
  );
}

// Custom hook to access the context
export function useHeroLoop() {
  return useContext(HeroLoopContext);
}
