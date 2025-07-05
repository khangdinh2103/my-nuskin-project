/**
 * @typedef {Object} Category
 * @property {number} id - Mã danh mục
 * @property {string} name - Tên danh mục
 * @property {string} slug - Đường dẫn (URL thân thiện)
 * @property {Category[]} [children] - Danh mục con (nếu có)
 */
/** @type {Category[]} */
export const categories = [
    {
      id: 1,
      name: "Dresses",
      slug: "dresses",
      children: [
        { id: 11, name: "Casual Dresses", slug: "dresses-casual" },
        { id: 12, name: "Evening Dresses", slug: "dresses-evening" },
        { id: 13, name: "Party Dresses", slug: "dresses-party" },
      ],
    },
    { id: 2, name: "Shirts", slug: "shirts" },
    { id: 3, name: "Jeans", slug: "jeans" },
    { id: 4, name: "Swimwear", slug: "swimwear" },
    { id: 5, name: "Sleepwear", slug: "sleepwear" },
    { id: 6, name: "Sportswear", slug: "sportswear" },
    { id: 7, name: "Jumpsuits", slug: "jumpsuits" },
    { id: 8, name: "Blazers", slug: "blazers" },
    { id: 9, name: "Jackets", slug: "jackets" },
    { id: 10, name: "Shoes", slug: "shoes" },
  ];
  