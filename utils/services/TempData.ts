export const HomeData = {
  carousel: [
    {
      title: 'Coffee Time is a chance to slow down.',
      details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur veniam odit reiciendis voluptas maiores ex cupiditate sapiente dolore quidem.',
      coverPhoto: '/images/white-cup-4k.webp'
    },
    {
      title: 'Savor the best with our coffee.',
      details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur veniam odit reiciendis voluptas maiores ex cupiditate sapiente dolore quidem.',
      coverPhoto: '/images/coffee-with-coffee-beans-4k.webp'
    }
  ],
  whyUs: {
    imageUrl: '/images/why-choose-us.jpg',
    title: 'Why choose our coffee',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  content: [
    {
      imagePosition: 'right',
      imageUrl: '/images/jello-mangotea.jpg',
      title: 'Try our new Jell-o Mango Tea',
      details: [
        'Did someone say, beat the heat with a summer tropical drink? 🤔😎☀️',
        'Our Jell-o Mango Tea is now avail for this season!🥭🍹Perfect to keep yourselves hydrated and refreshed in this scorching weather.🥵🔥',
        '*this is only a seasonal drink so make sure to come see us before it runs out.😉'
      ]
    },
    {
      imagePosition: 'right',
      imageUrl: '/images/pandan-coconut-mochi-waffle.jpg',
      title: 'Pandan Coconut Mochi Waffle',
      details: [
        "Indulge in a symphony of flavors with our pandan coconut mochi waffle a tantalizing fusion that brings Vietnam's street food charm straight to your plate! 🍨🧇💚",
        'This might be your new favorite so make to drop by and see us. 🤗'
      ]
    },
    {
      imagePosition: 'right',
      imageUrl: '/images/beat-the-heat-taste-of-vietname.jpg',
      title: 'Beat the summer heat with a taste of Vietnam!',
      details: [
        'Introducing our newest favorites inspired by the streets of the locals: refreshing iced egg coffee (cà phê trứng) and indulgent iced egg cacao (sô cô la trứng). 🥚☕️🍫',
        'Perfectly crafted to cool you down, it is available in-store in both hot and iced versions. 🤎',
        'What are you waiting for? Dive in with sweet goodness. 😎🛵.'
      ]
    }
  ]
};

export type HomeDataType = typeof HomeData;
const MENU = [
  {
    id: 1,
    name: 'Ca Phe Den Sua',
    description: 'Traditional vietnamese coffee',
    category: 'Ca Phe Series',
    price: [
      {
        id: 1,
        type: 'Hot',
        size: '8oz',
        price: 150
      },
      {
        id: 2,
        type: 'Iced',
        size: '12oz',
        price: 170
      },
      {
        id: 3,
        type: 'Iced',
        size: '16oz',
        price: 190
      }
    ],
    image: '/images/menu-001.jpg',
    isFeatured: false
  },
  {
    id: 2,
    name: 'Ca Phe Bac Xiu',
    description: 'Milk coffee',
    category: 'Ca Phe Series',
    price: [
      {
        id: 4,
        type: 'Hot',
        size: '8oz',
        price: 145
      },
      {
        id: 5,
        type: 'Iced',
        size: '12oz',
        price: 165
      },
      {
        id: 6,
        type: 'Iced',
        size: '16oz',
        price: 185
      }
    ],
    image: '/images/menu-001.jpg',
    isFeatured: false
  },
  {
    id: 3,
    name: 'Ca Phe Tra Xanh',
    description: 'Matcha coffee',
    category: 'Ca Phe Series',
    price: [
      {
        id: 7,
        type: 'Iced',
        size: '12oz',
        price: 205
      },
      {
        id: 8,
        type: 'Iced',
        size: '16oz',
        price: 225
      }
    ],
    image: '/images/menu-001.jpg',
    isFeatured: true
  },
  {
    id: 4,
    name: 'Ca Phe Cot Dua',
    description: 'Coconut coffee',
    category: 'Ca Phe Series',
    price: [
      {
        id: 9,
        type: 'Iced',
        size: '12oz',
        price: 165
      },
      {
        id: 10,
        type: 'Iced',
        size: '16oz',
        price: 185
      }
    ],
    image: '/images/menu-001.jpg',
    isFeatured: true
  },
  {
    id: 5,
    name: 'Ca Phe Banh Flan',
    description: 'Leche flan coffee',
    category: 'Ca Phe Series',
    price: [
      {
        id: 11,
        type: 'Iced',
        size: '16oz',
        price: 195
      }
    ],
    image: '/images/menu-001.jpg',
    isFeatured: true
  },
  {
    id: 6,
    name: 'Ca Phe Bac Xiu',
    description: 'Oat milk coffee',
    category: 'Oat Series',
    price: [
      {
        id: 12,
        type: 'Hot',
        size: '8oz',
        price: 170
      },
      {
        id: 13,
        type: 'Iced',
        size: '12oz',
        price: 190
      },
      {
        id: 14,
        type: 'Iced',
        size: '16oz',
        price: 210
      }
    ],
    image: '/images/menu-001.jpg',
    isFeatured: false
  },
  {
    id: 7,
    name: 'Matcha Milk',
    description: 'Made from high quality fined matcha powder',
    category: 'Non-Coffee Series',
    price: [
      {
        id: 15,
        type: 'Hot',
        size: '8oz',
        price: 190
      },
      {
        id: 16,
        type: 'Iced',
        size: '12oz',
        price: 170
      },
      {
        id: 15,
        type: 'Iced',
        size: '16oz',
        price: 190
      }
    ],
    image: '/images/menu-001.jpg',
    isFeatured: true
  },
  {
    id: 8,
    name: 'Tra Dau Hibiscus',
    description: 'Strawberry hibiscus tea',
    category: 'Tra Series',
    price: [
      {
        id: 18,
        type: 'Iced',
        size: '16oz',
        price: 150
      }
    ],
    image: '/images/menu-001.jpg',
    isFeatured: false
  }
];

const CATEGORY = [
  {
    id: '1',
    name: 'Ca Phe Series',
    altName: '',
    menu: [
      {
        id: 2,
        name: 'Ca Phe Bac Xiu',
        description: 'Milk coffee',
        category: 'Ca Phe Series',
        price: [
          {
            id: 4,
            type: 'Hot',
            size: '8oz',
            price: 145
          },
          {
            id: 5,
            type: 'Iced',
            size: '12oz',
            price: 165
          },
          {
            id: 6,
            type: 'Iced',
            size: '16oz',
            price: 185
          }
        ],
        image: '/images/menu-001.jpg',
        isFeatured: false
      },
      {
        id: 3,
        name: 'Ca Phe Tra Xanh',
        description: 'Matcha coffee',
        category: 'Ca Phe Series',
        price: [
          {
            id: 7,
            type: 'Iced',
            size: '12oz',
            price: 205
          },
          {
            id: 8,
            type: 'Iced',
            size: '16oz',
            price: 225
          }
        ],
        image: '/images/menu-001.jpg',
        isFeatured: true
      },
      {
        id: 4,
        name: 'Ca Phe Cot Dua',
        description: 'Coconut coffee',
        category: 'Ca Phe Series',
        price: [
          {
            id: 9,
            type: 'Iced',
            size: '12oz',
            price: 165
          },
          {
            id: 10,
            type: 'Iced',
            size: '16oz',
            price: 185
          }
        ],
        image: '/images/menu-001.jpg',
        isFeatured: true
      },
      {
        id: 5,
        name: 'Ca Phe Banh Flan',
        description: 'Leche flan coffee',
        category: 'Ca Phe Series',
        price: [
          {
            id: 11,
            type: 'Iced',
            size: '16oz',
            price: 195
          }
        ],
        image: '/images/menu-001.jpg',
        isFeatured: true
      },
      {
        id: 6,
        name: 'Ca Phe Bac Xiu',
        description: 'Oat milk coffee',
        category: 'Oat Series',
        price: [
          {
            id: 12,
            type: 'Hot',
            size: '8oz',
            price: 170
          },
          {
            id: 13,
            type: 'Iced',
            size: '12oz',
            price: 190
          },
          {
            id: 14,
            type: 'Iced',
            size: '16oz',
            price: 210
          }
        ],
        image: '/images/menu-001.jpg',
        isFeatured: false
      }
    ]
  },
  {
    id: '2',
    name: 'Oat Series',
    altName: '',
    menu: [
      {
        id: 7,
        name: 'Matcha Milk',
        description: 'Made from high quality fined matcha powder',
        category: 'Non-Coffee Series',
        price: [
          {
            id: 15,
            type: 'Hot',
            size: '8oz',
            price: 190
          },
          {
            id: 16,
            type: 'Iced',
            size: '12oz',
            price: 170
          },
          {
            id: 15,
            type: 'Iced',
            size: '16oz',
            price: 190
          }
        ],
        image: '/images/menu-001.jpg',
        isFeatured: true
      }
    ]
  },
  {
    id: '3',
    name: 'Non-Cofee Series',
    altName: '',
    menu: [
      {
        id: 7,
        name: 'Matcha Milk',
        description: 'Made from high quality fined matcha powder',
        category: 'Non-Coffee Series',
        price: [
          {
            id: 15,
            type: 'Hot',
            size: '8oz',
            price: 190
          },
          {
            id: 16,
            type: 'Iced',
            size: '12oz',
            price: 170
          },
          {
            id: 15,
            type: 'Iced',
            size: '16oz',
            price: 190
          }
        ],
        image: '/images/menu-001.jpg',
        isFeatured: true
      }
    ]
  },
  {
    id: '4',
    name: 'Tra Series',
    altName: '',
    menu: [
      {
        id: 8,
        name: 'Tra Dau Hibiscus',
        description: 'Strawberry hibiscus tea',
        category: 'Tra Series',
        price: [
          {
            id: 18,
            type: 'Iced',
            size: '16oz',
            price: 150
          }
        ],
        image: '/images/menu-001.jpg',
        isFeatured: false
      }
    ]
  },
  { id: '5', name: 'Pour-over Coffee', altName: '', menu: [] },
  { id: '6', name: 'Vietnamese Foods', altName: '', menu: [] }
];
