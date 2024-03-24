export const HomeData = {
  carousel: [
    {
      title: "Coffee Time is a chance to slow down.",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur veniam odit reiciendis voluptas maiores ex cupiditate sapiente dolore quidem.",
      coverPhoto: "/images/white-cup-4k.webp",
    },
    {
      title: "Savor the best with our coffee.",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur veniam odit reiciendis voluptas maiores ex cupiditate sapiente dolore quidem.",
      coverPhoto: "/images/coffee-with-coffee-beans-4k.webp",
    },
  ],
};

export const MENU = [
  {
    id: 1,
    name: "Ca Phe Den Sua",
    description: "Traditional vietnamese coffee",
    category: "Ca Phe Series",
    price: [
      {
        id: 1,
        type: "Hot",
        size: "8oz",
        price: 150,
      },
      {
        id: 2,
        type: "Iced",
        size: "12oz",
        price: 170,
      },
      {
        id: 3,
        type: "Iced",
        size: "16oz",
        price: 190,
      },
    ],
    image: "/images/menu-001.jpg",
    isFeatured: false,
  },
  {
    id: 2,
    name: "Ca Phe Bac Xiu",
    description: "Milk coffee",
    category: "Ca Phe Series",
    price: [
      {
        id: 4,
        type: "Hot",
        size: "8oz",
        price: 145,
      },
      {
        id: 5,
        type: "Iced",
        size: "12oz",
        price: 165,
      },
      {
        id: 6,
        type: "Iced",
        size: "16oz",
        price: 185,
      },
    ],
    image: "/images/menu-001.jpg",
    isFeatured: false,
  },
  {
    id: 3,
    name: "Ca Phe Tra Xanh",
    description: "Matcha coffee",
    category: "Ca Phe Series",
    price: [
      {
        id: 7,
        type: "Iced",
        size: "12oz",
        price: 205,
      },
      {
        id: 8,
        type: "Iced",
        size: "16oz",
        price: 225,
      },
    ],
    image: "/images/menu-001.jpg",
    isFeatured: true,
  },
  {
    id: 4,
    name: "Ca Phe Cot Dua",
    description: "Coconut coffee",
    category: "Ca Phe Series",
    price: [
      {
        id: 9,
        type: "Iced",
        size: "12oz",
        price: 165,
      },
      {
        id: 10,
        type: "Iced",
        size: "16oz",
        price: 185,
      },
    ],
    image: "/images/menu-001.jpg",
    isFeatured: true,
  },
  {
    id: 5,
    name: "Ca Phe Banh Flan",
    description: "Leche flan coffee",
    category: "Ca Phe Series",
    price: [
      {
        id: 11,
        type: "Iced",
        size: "16oz",
        price: 195,
      },
    ],
    image: "/images/menu-001.jpg",
    isFeatured: true,
  },
  {
    id: 6,
    name: "Ca Phe Bac Xiu",
    description: "Oat milk coffee",
    category: "Oat Series",
    price: [
      {
        id: 12,
        type: "Hot",
        size: "8oz",
        price: 170,
      },
      {
        id: 13,
        type: "Iced",
        size: "12oz",
        price: 190,
      },
      {
        id: 14,
        type: "Iced",
        size: "16oz",
        price: 210,
      },
    ],
    image: "/images/menu-001.jpg",
    isFeatured: false,
  },
  {
    id: 7,
    name: "Matcha Milk",
    description: "Made from high quality fined matcha powder",
    category: "Non-Coffee Series",
    price: [
      {
        id: 15,
        type: "Hot",
        size: "8oz",
        price: 190,
      },
      {
        id: 16,
        type: "Iced",
        size: "12oz",
        price: 170,
      },
      {
        id: 15,
        type: "Iced",
        size: "16oz",
        price: 190,
      },
    ],
    image: "/images/menu-001.jpg",
    isFeatured: true,
  },
  {
    id: 8,
    name: "Tra Dau Hibiscus",
    description: "Strawberry hibiscus tea",
    category: "Tra Series",
    price: [
      {
        id: 18,
        type: "Iced",
        size: "16oz",
        price: 150,
      },
    ],
    image: "/images/menu-001.jpg",
    isFeatured: false,
  },
];

export const CATEGORY = [
  {
    id: "1",
    name: "Ca Phe Series",
    altName: "",
    menu: [
      {
        id: 2,
        name: "Ca Phe Bac Xiu",
        description: "Milk coffee",
        category: "Ca Phe Series",
        price: [
          {
            id: 4,
            type: "Hot",
            size: "8oz",
            price: 145,
          },
          {
            id: 5,
            type: "Iced",
            size: "12oz",
            price: 165,
          },
          {
            id: 6,
            type: "Iced",
            size: "16oz",
            price: 185,
          },
        ],
        image: "/images/menu-001.jpg",
        isFeatured: false,
      },
      {
        id: 3,
        name: "Ca Phe Tra Xanh",
        description: "Matcha coffee",
        category: "Ca Phe Series",
        price: [
          {
            id: 7,
            type: "Iced",
            size: "12oz",
            price: 205,
          },
          {
            id: 8,
            type: "Iced",
            size: "16oz",
            price: 225,
          },
        ],
        image: "/images/menu-001.jpg",
        isFeatured: true,
      },
      {
        id: 4,
        name: "Ca Phe Cot Dua",
        description: "Coconut coffee",
        category: "Ca Phe Series",
        price: [
          {
            id: 9,
            type: "Iced",
            size: "12oz",
            price: 165,
          },
          {
            id: 10,
            type: "Iced",
            size: "16oz",
            price: 185,
          },
        ],
        image: "/images/menu-001.jpg",
        isFeatured: true,
      },
      {
        id: 5,
        name: "Ca Phe Banh Flan",
        description: "Leche flan coffee",
        category: "Ca Phe Series",
        price: [
          {
            id: 11,
            type: "Iced",
            size: "16oz",
            price: 195,
          },
        ],
        image: "/images/menu-001.jpg",
        isFeatured: true,
      },
      {
        id: 6,
        name: "Ca Phe Bac Xiu",
        description: "Oat milk coffee",
        category: "Oat Series",
        price: [
          {
            id: 12,
            type: "Hot",
            size: "8oz",
            price: 170,
          },
          {
            id: 13,
            type: "Iced",
            size: "12oz",
            price: 190,
          },
          {
            id: 14,
            type: "Iced",
            size: "16oz",
            price: 210,
          },
        ],
        image: "/images/menu-001.jpg",
        isFeatured: false,
      },
    ],
  },
  {
    id: "2",
    name: "Oat Series",
    altName: "",
    menu: [
      {
        id: 7,
        name: "Matcha Milk",
        description: "Made from high quality fined matcha powder",
        category: "Non-Coffee Series",
        price: [
          {
            id: 15,
            type: "Hot",
            size: "8oz",
            price: 190,
          },
          {
            id: 16,
            type: "Iced",
            size: "12oz",
            price: 170,
          },
          {
            id: 15,
            type: "Iced",
            size: "16oz",
            price: 190,
          },
        ],
        image: "/images/menu-001.jpg",
        isFeatured: true,
      },
    ],
  },
  {
    id: "3",
    name: "Non-Cofee Series",
    altName: "",
    menu: [
      {
        id: 7,
        name: "Matcha Milk",
        description: "Made from high quality fined matcha powder",
        category: "Non-Coffee Series",
        price: [
          {
            id: 15,
            type: "Hot",
            size: "8oz",
            price: 190,
          },
          {
            id: 16,
            type: "Iced",
            size: "12oz",
            price: 170,
          },
          {
            id: 15,
            type: "Iced",
            size: "16oz",
            price: 190,
          },
        ],
        image: "/images/menu-001.jpg",
        isFeatured: true,
      },
    ],
  },
  {
    id: "4",
    name: "Tra Series",
    altName: "",
    menu: [
      {
        id: 8,
        name: "Tra Dau Hibiscus",
        description: "Strawberry hibiscus tea",
        category: "Tra Series",
        price: [
          {
            id: 18,
            type: "Iced",
            size: "16oz",
            price: 150,
          },
        ],
        image: "/images/menu-001.jpg",
        isFeatured: false,
      },
    ],
  },
  { id: "5", name: "Pour-over Coffee", altName: "", menu: [] },
  { id: "6", name: "Vietnamese Foods", altName: "", menu: [] },
];
