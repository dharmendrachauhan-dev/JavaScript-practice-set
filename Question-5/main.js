const CountGroup = [
  { category: "Food" },
  { category: "Sport" },
  { category: "Clothing" },
  { category: "Sport" },
  { category: "Clothing" },
  { category: "Grocery" },
  { category: "Grocery" },
];

const GetCategory = (CountGroup) => {
    const category = {}
    CountGroup.forEach(categories => {
        return category[categories.category] = (category[categories.category] || 0) + 1
    });
    return category
}

let ans = GetCategory(CountGroup)
console.log(ans)