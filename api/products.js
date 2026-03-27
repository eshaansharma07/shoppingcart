import { products } from "../data/products.js";

export default function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ message: "Method not allowed" });
  }

  return response.status(200).json({
    products,
    count: products.length,
    generatedAt: new Date().toISOString()
  });
}
