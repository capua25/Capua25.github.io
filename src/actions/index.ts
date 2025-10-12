import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  myAction: defineAction({
    comentario: z.object({
      texto: z.string().min(10, "El comentario no puede contener menos de 10 caracteres").max(250, "El comentario no puede contener más de 250 caracteres"),
      nombre: z.string().min(3, "El nombre no puede contener menos de 3 caracteres").max(25, "El nombre no puede contener más de 25 caracteres"),
    }),
    handler: async (comentario) => {
      return {
        success: true,
        message: "Gracias por tu comentario!"
      };
    }
  })
};