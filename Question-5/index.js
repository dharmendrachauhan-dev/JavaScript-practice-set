// Problem: Given a customer's order history, calculate their total spent, average order value, and favorite category.

const orders = [
  { id: 1, category: "Electronics", amount: 299 },
  { id: 2, category: "Clothing", amount: 85 },
  { id: 3, category: "Electronics", amount: 150 },
  { id: 4, category: "Books", amount: 45 },
  { id: 5, category: "Clothing", amount: 120 }
];

function customerSummary(orders) {

  const total = orders.reduce((sum, order)=> sum + order.amount , 0)
  const average = total / orders.length

  const categoryCount = {}
  orders.forEach(category => {
    return categoryCount[category.category] = (categoryCount[category.category] || 0) + 1
  });

  let favoriteCategory = "";
  let maxCount = 0;

  for (let category in categoryCount) {
    if (categoryCount[category] > maxCount) {
      maxCount = categoryCount[category];
      favoriteCategory = category
    }
  }

  return {
    total: total,
    average: average.toFixed(2),
    favoriteCategory: favoriteCategory
  }


  return categoryCount
}

console.log(customerSummary(orders));