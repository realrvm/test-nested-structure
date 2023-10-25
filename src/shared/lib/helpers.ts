import { ClothingSchema } from "@/entities/clothing";

export const findItem = (item: ClothingSchema, slug: string) => {
  const stash = [item];
  let res;

  while (stash.length) {
    const pop = stash.pop() as ClothingSchema;

    if (pop.slug === slug) {
      res = pop;
      break;
    }

    if (pop.children) {
      stash.push(...pop.children);
    }
  }

  return res;
};
