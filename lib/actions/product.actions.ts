"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

export async function getLatestProduct() {
  const data = await prisma.product.findMany({
    take: 6,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
