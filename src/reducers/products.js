const initailState = [
  {
    id: 1,
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    id: 2,
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    id: 3,
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    id: 4,
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    id: 5,
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    id: 6,
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  },
  {
    id: 7,
    category: "Electronics",
    price: "$399.99",
    stocked: true,
    name: "iPhone 7 p+"
  },
  {
    id: 8,
    category: "Foods",
    price: "$1.99",
    stocked: false,
    name: "chocolate bar"
  }
];

const products = (state = initailState, action) => {
  return state;
};

export default products;
