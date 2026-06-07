// Velvet Brew Premium Menu Data - 42 highly curated items (exactly 3 per category)
// Every item is mapped to a unique, exact, high-resolution Unsplash photo ID.

export const menuCategories = [
  "Coffee",
  "Signature Coffee",
  "Cold Beverages",
  "Tea",
  "Mocktails",
  "Breakfast",
  "Sandwiches",
  "Burgers",
  "Pasta",
  "Pizza",
  "Desserts",
  "Cakes",
  "Bakery",
  "Snacks"
];

export const menuItems = [
  // --- COFFEE ---
  {
    id: "c1",
    name: "Espresso",
    category: "Coffee",
    price: "$3.75",
    description: "Double shot of our signature single-origin espresso. Rich crema with notes of dark cocoa and citrus.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c2",
    name: "Cappuccino",
    category: "Coffee",
    price: "$4.95",
    description: "Equal parts espresso, steamed milk, and dense micro-foam, finished with an elegant cacao dusting.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c3",
    name: "Caramel Macchiato",
    category: "Coffee",
    price: "$5.95",
    description: "Steamed milk marked with espresso, sweetened with vanilla, and finished with a buttery caramel drizzle.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- SIGNATURE COFFEE ---
  {
    id: "sc1",
    name: "Velvet Brew Reserve",
    category: "Signature Coffee",
    price: "$8.50",
    description: "Our prized micro-lot pour-over, slow-dripped to highlight complex floral and bergamot notes.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sc2",
    name: "Cinnamon Honey Latte",
    category: "Signature Coffee",
    price: "$6.50",
    description: "Silky steamed oat milk combined with raw honey, espresso, and topped with freshly grated Ceylon cinnamon.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sc3",
    name: "Nitro Cold Brew",
    category: "Signature Coffee",
    price: "$6.25",
    description: "Slow-steeped cold brew charged with nitrogen for an ultra-creamy head and natural cascading sweetness.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- COLD BEVERAGES ---
  {
    id: "cb1",
    name: "Chocolate Shake",
    category: "Cold Beverages",
    price: "$6.50",
    description: "Creamy milkshake blended with artisan dark cocoa and whole milk, finished with whipped cream.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb2",
    name: "Mango Smoothie",
    category: "Cold Beverages",
    price: "$6.50",
    description: "Vibrant yellow mango puree blended with Greek yogurt and honey, garnished with fresh mint.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb3",
    name: "Caramel Frappe",
    category: "Cold Beverages",
    price: "$6.95",
    description: "Blended ice espresso, milk, and caramel syrup, topped with thick cream and gold-colored caramel flakes.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- TEA ---
  {
    id: "t1",
    name: "Masala Chai",
    category: "Tea",
    price: "$4.00",
    description: "Robust black tea boiled with fresh ginger, crushed cardamom, cloves, and rich whole milk.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "t2",
    name: "Green Tea",
    category: "Tea",
    price: "$4.25",
    description: "Premium whole Sencha green tea leaves steeped to release sweet, clean, and grassy notes.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "t3",
    name: "Earl Grey",
    category: "Tea",
    price: "$4.50",
    description: "Steaming organic black tea leaves scented with oil of Bergamot, served with a fresh slice of lemon.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- MOCKTAILS ---
  {
    id: "m1",
    name: "Virgin Mojito",
    category: "Mocktails",
    price: "$6.50",
    description: "Muddled lime wedges and garden-fresh mint, shaken with cane syrup and topped with sparkling soda.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "m2",
    name: "Blue Lagoon",
    category: "Mocktails",
    price: "$6.95",
    description: "A cool, electric blue beverage made with orange peel syrup, lemon tonic, and a twist of citrus rind.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "m3",
    name: "Watermelon Cooler",
    category: "Mocktails",
    price: "$7.25",
    description: "Pressed watermelon nectar, lime juice, and cucumber slices topped with ginger carbonation.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- BREAKFAST ---
  {
    id: "b1",
    name: "Avocado Toast",
    category: "Breakfast",
    price: "$11.50",
    description: "Crushed Haas avocados, red pepper flakes, micro-herbs, and feta crumbs on toasted organic sourdough.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "b2",
    name: "Pancake Stack",
    category: "Breakfast",
    price: "$10.50",
    description: "Three light pancakes layered with berry compote, whipped maple butter, and organic grade-A maple syrup.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "b3",
    name: "Cheese Omelette",
    category: "Breakfast",
    price: "$9.50",
    description: "French-rolled three-egg omelette stuffed with Swiss and aged white cheddar, served with toasted sourdough.",
    isVeg: false,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- SANDWICHES ---
  {
    id: "sw1",
    name: "Grilled Veg Sandwich",
    category: "Sandwiches",
    price: "$9.75",
    description: "Toasted pan-sandwich with grilled bell peppers, zucchini, and melted mozzarella cheese.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sw2",
    name: "Paneer Tikka Sandwich",
    category: "Sandwiches",
    price: "$10.50",
    description: "Tandoori seasoned cottage cheese chunks, mint cream, and crisp onion rings inside a fresh panini.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sw3",
    name: "Club Sandwich",
    category: "Sandwiches",
    price: "$12.50",
    description: "Triple-decker toasted bread filled with shredded chicken, hard-boiled egg, fresh lettuce, and garlic aioli.",
    isVeg: false,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- BURGERS ---
  {
    id: "bg1",
    name: "Veg Burger",
    category: "Burgers",
    price: "$9.95",
    description: "Crispy vegetable patty topped with sliced cucumber, tomato, lettuce, and our house dressing.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bg2",
    name: "Crispy Paneer Burger",
    category: "Burgers",
    price: "$11.50",
    description: "Golden fried panko-crusted cottage cheese block topped with spicy red sriracha and creamy cabbage slaw.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bg3",
    name: "Signature House Burger",
    category: "Burgers",
    price: "$14.50",
    description: "Flame-grilled house chicken patty, melted Swiss, crisp onion rings, and a rich hickory barbecue sauce.",
    isVeg: false,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- PASTA ---
  {
    id: "p1",
    name: "Alfredo Pasta",
    category: "Pasta",
    price: "$12.95",
    description: "Fettuccine noodles tossed in a rich, buttery garlic cream sauce and loaded with aged Parmesan.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "p2",
    name: "Arrabbiata Pasta",
    category: "Pasta",
    price: "$11.95",
    description: "Penne pasta slow-cooked in a fiery crushed tomato sauce with garlic and toasted red chili flakes.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "p3",
    name: "Pesto Pasta",
    category: "Pasta",
    price: "$13.50",
    description: "Spaghetti enveloped in fresh sweet basil pesto, finished with pine nuts and olive oil drops.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- PIZZA ---
  {
    id: "pz1",
    name: "Margherita",
    category: "Pizza",
    price: "$12.95",
    description: "Thin Neapolitan crust topped with tomato passata, fresh buffalo mozzarella, and fresh sweet basil.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "pz2",
    name: "Farmhouse",
    category: "Pizza",
    price: "$14.50",
    description: "Crispy oven-baked crust loaded with red onions, green peppers, mushrooms, and sweet corn.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "pz3",
    name: "Four Cheese Pizza",
    category: "Pizza",
    price: "$15.95",
    description: "A rich mozzarella, gorgonzola, parmesan, and fontina combination over a crispy golden base.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- DESSERTS ---
  {
    id: "d1",
    name: "Tiramisu",
    category: "Desserts",
    price: "$8.50",
    description: "Creamy layered Italian dessert soaked in our signature espresso, dusted with organic cocoa powder.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "d2",
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "$7.50",
    description: "Warm single-portion cake containing a rich molten dark chocolate ganache center, served with cream.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "d3",
    name: "Belgian Waffle",
    category: "Desserts",
    price: "$8.95",
    description: "Crispy waffle topped with vanilla bean cream, chocolate sauce, and fresh strawberries.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- CAKES ---
  {
    id: "ck1",
    name: "Red Velvet Cake",
    category: "Cakes",
    price: "$7.25",
    description: "Layered sponge cake with a hint of chocolate, frosted with a premium cream cheese frosting.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "ck2",
    name: "Blueberry Cheesecake",
    category: "Cakes",
    price: "$8.50",
    description: "Velvety smooth cold cheesecake on a butter crust, topped with sweet wild blueberries.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "ck3",
    name: "Chocolate Truffle Cake",
    category: "Cakes",
    price: "$7.50",
    description: "Moist chocolate cake layered with a rich double-chocolate truffle frosting.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- BAKERY ---
  {
    id: "bk1",
    name: "Butter Croissant",
    category: "Bakery",
    price: "$3.95",
    description: "Authentic laminated puff pastry, rolled with clean French butter and baked to a golden flake.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bk2",
    name: "Cinnamon Roll",
    category: "Bakery",
    price: "$4.75",
    description: "Soft swirled dough filled with aromatic cinnamon sugar, glazed with premium cream cheese icing.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bk3",
    name: "Blueberry Muffin",
    category: "Bakery",
    price: "$3.95",
    description: "Fluffy bakery muffin loaded with whole blueberries and topped with a sweet sugar streusel.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- SNACKS ---
  {
    id: "sn1",
    name: "Peri Peri Fries",
    category: "Snacks",
    price: "$5.50",
    description: "Crispy french fries tossed in a spicy, zesty African bird's eye chili seasoning blend.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sn2",
    name: "Garlic Bread",
    category: "Snacks",
    price: "$6.95",
    description: "Four sliced toasted baguette pieces slathered in premium garlic herb butter.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sn3",
    name: "Nachos",
    category: "Snacks",
    price: "$8.95",
    description: "Crispy corn tortilla chips topped with a hot cheese blend, sliced jalapeños, and salsa sauce.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=400&h=400&q=80"
  }
];
