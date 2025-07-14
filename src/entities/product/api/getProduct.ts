import { DEFAULT_API } from "@/constants";
import { IProduct } from "../model/types";

export const fetchProductById = async (slug: string): Promise<IProduct> => {
  const response = await fetch(`${DEFAULT_API}/products/slug/${slug}`);
  if (!response.ok) throw new Error("Product not found");
  return response.json();
};
