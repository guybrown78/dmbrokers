import { createMachine } from "xstate";

export const heroLoopMachine = createMachine(
  {
    id: "trafficLight",
    initial: "green",
    context: {
      timerDuration: 4750,
    },
    states: {
      green: {
        after: {
          timer: "green-yellow",
        },
      },
      "green-yellow": {
        on: {
          TRANSITION_END: "yellow",
        },
      },
      yellow: {
        after: {
          timer: "yellow-green",
        },
      },
      "yellow-green": {
        on: {
          TRANSITION_END: "green",
        },
      },
    },
  },
  {
    delays: {
      timer: (context) => context.timerDuration,
    },
  }
);
