import { insertProductschema } from "@/lib/validators";
import { z } from "zod";

export type TProduct = z.infer<typeof insertProductschema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
