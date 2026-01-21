import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ctx}) => {
  //   const todos=await ctx.db.todo.findMany({
  //     where:{userId:ctx.session.user.id},
  //   });
  //  console.log('todos from prisma',todos.map(({id,text,done})=>({id,text,done})));
    return [
      { id: "fake1", text: "Learn T3 Stack", done: false },
      { id: "fake2", text: "Build a cool app", done: true },

    ];
  }),
  create: protectedProcedure
    .input(z.object({ text: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const todo = await ctx.db.todo.create({
        data: {
          text: input.text,
          userId: ctx.session.user.id,
        },
      });
      return { id: todo.id, text: todo.text, done: todo.done };
    }),
});
