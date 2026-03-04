// Problem: Given a customer's order history, calculate their total spent, average order value, and favorite category.

const orders = [
  { id: 1, category: "Electronics", amount: 299 },
  { id: 2, category: "Clothing", amount: 85 },
  { id: 3, category: "Electronics", amount: 150 },
  { id: 4, category: "Books", amount: 45 },
  { id: 5, category: "Clothing", amount: 120 }
];

function customerSummary(orders) {
  // Write your logic here
  // Return: { total: 0, average: 0, favoriteCategory: "" }

  const total = orders.reduce((sum, order)=> sum + order.amount , 0)
  const average = total / orders.length

  // Find favorite category ( most orders )

  const categoryCount = {}
  order.for
}

console.log(customerSummary(orders));