import { categoryList } from "./categories.jsx";

const [clothes, electronics, furniture, shoes] = categoryList;

export const products = [
  {
    id: "1",
    title: "Classic Cotton T-Shirt",
    price: 19,
    description:
      "A soft, breathable cotton t-shirt that pairs well with everything in your wardrobe.",
    category: clothes,
    images: ["https://placehold.co/600x600/f97316/ffffff?text=T-Shirt"],
  },
  {
    id: "2",
    title: "Slim Fit Denim Jeans",
    price: 49,
    description:
      "Stretch denim jeans with a modern slim fit and reinforced stitching at the seams.",
    category: clothes,
    images: ["https://placehold.co/600x600/f97316/ffffff?text=Jeans"],
  },
  {
    id: "3",
    title: "Hooded Pullover Sweatshirt",
    price: 39,
    description:
      "Heavyweight fleece hoodie with a kangaroo pocket and adjustable drawstring hood.",
    category: clothes,
    images: ["https://placehold.co/600x600/f97316/ffffff?text=Hoodie"],
  },
  {
    id: "4",
    title: "Lightweight Bomber Jacket",
    price: 79,
    description:
      "A water-resistant bomber jacket with ribbed cuffs and a full front zip.",
    category: clothes,
    images: ["https://placehold.co/600x600/f97316/ffffff?text=Jacket"],
  },

  {
    id: "5",
    title: "Wireless Bluetooth Headphones",
    price: 89,
    description:
      "Over-ear headphones with active noise cancellation and 30 hours of battery life.",
    category: electronics,
    images: ["https://placehold.co/600x600/0ea5e9/ffffff?text=Headphones"],
  },
  {
    id: "6",
    title: "Smartwatch Fitness Tracker",
    price: 129,
    description:
      "Tracks heart rate, sleep, and workouts, with a 7-day battery life.",
    category: electronics,
    images: ["https://placehold.co/600x600/0ea5e9/ffffff?text=Smartwatch"],
  },
  {
    id: "7",
    title: "Portable Bluetooth Speaker",
    price: 59,
    description:
      "Compact speaker with deep bass, IPX7 water resistance, and 12 hours of playtime.",
    category: electronics,
    images: ["https://placehold.co/600x600/0ea5e9/ffffff?text=Speaker"],
  },
  {
    id: "8",
    title: "Mechanical Keyboard",
    price: 99,
    description:
      "A compact 75% mechanical keyboard with hot-swappable switches and RGB backlighting.",
    category: electronics,
    images: ["https://placehold.co/600x600/0ea5e9/ffffff?text=Keyboard"],
  },

  {
    id: "9",
    title: "Mid-Century Accent Chair",
    price: 249,
    description:
      "Walnut-finished legs with a tufted cushion back — a statement piece for any room.",
    category: furniture,
    images: ["https://placehold.co/600x600/22c55e/ffffff?text=Chair"],
  },
  {
    id: "10",
    title: "Solid Oak Coffee Table",
    price: 199,
    description:
      "Hand-finished solid oak top with a sturdy steel frame and a lower storage shelf.",
    category: furniture,
    images: ["https://placehold.co/600x600/22c55e/ffffff?text=Coffee+Table"],
  },
  {
    id: "11",
    title: "Minimalist Bookshelf",
    price: 159,
    description:
      "A 5-tier open bookshelf with a clean silhouette that fits most spaces.",
    category: furniture,
    images: ["https://placehold.co/600x600/22c55e/ffffff?text=Bookshelf"],
  },
  {
    id: "12",
    title: "Velvet 3-Seater Sofa",
    price: 599,
    description:
      "Plush velvet upholstery over a hardwood frame, with deep seating and rolled arms.",
    category: furniture,
    images: ["https://placehold.co/600x600/22c55e/ffffff?text=Sofa"],
  },

  {
    id: "13",
    title: "Running Sneakers",
    price: 89,
    description:
      "Lightweight knit upper with responsive cushioning for daily training runs.",
    category: shoes,
    images: ["https://placehold.co/600x600/a855f7/ffffff?text=Sneakers"],
  },
  {
    id: "14",
    title: "Leather Chelsea Boots",
    price: 139,
    description:
      "Full-grain leather Chelsea boots with an elastic side panel and rubber sole.",
    category: shoes,
    images: ["https://placehold.co/600x600/a855f7/ffffff?text=Boots"],
  },
  {
    id: "15",
    title: "Canvas Slip-On Shoes",
    price: 45,
    description: "Easy slip-on canvas shoes with a flexible sole.",
    category: shoes,
    images: ["https://placehold.co/600x600/a855f7/ffffff?text=Slip-Ons"],
  },
  {
    id: "16",
    title: "Trail Hiking Boots",
    price: 119,
    description:
      "Waterproof hiking boots with an aggressive lug sole and ankle support.",
    category: shoes,
    images: [],
  },
];
