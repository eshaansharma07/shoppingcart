export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Method not allowed" });
  }

  const { items = [], summary = {} } = request.body ?? {};

  if (!Array.isArray(items) || items.length === 0) {
    return response.status(400).json({ message: "Cart is empty" });
  }

  return response.status(200).json({
    message: "Checkout created successfully",
    order: {
      id: `ORD-${Date.now()}`,
      itemCount: summary.itemCount ?? items.length,
      total: summary.total ?? 0,
      createdAt: new Date().toISOString()
    }
  });
}
