import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(() => {
    return [
      { id: "fake1", text: "Learn T3 Stack", done: false },
      { id: "fake2", text: "Build a cool app", done: true },

    ];
  }),
});
