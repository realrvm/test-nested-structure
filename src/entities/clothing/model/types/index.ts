export type ClothingSchema = {
  id: number;
  slug: string;
  name: string;
  index: boolean;
  children: ClothingSchema[] | null;
};
