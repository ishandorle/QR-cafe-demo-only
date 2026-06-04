// Velvet Brew Premium Menu Data - 77 items across 14 categories

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
  // --- COFFEE (10 items) ---
  {
    id: "c1",
    name: "Espresso",
    category: "Coffee",
    price: "$3.75",
    description: "Double shot of our house signature single-origin espresso. Rich crema with notes of dark chocolate and orange peel.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-151097252790b-a63880a22ab7?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c2",
    name: "Americano",
    category: "Coffee",
    price: "$4.25",
    description: "Double shot of signature espresso diluted with hot water. Bold, clean, and highly sophisticated flavor profile.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1551046713-2415b6c30293?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c3",
    name: "Cappuccino",
    category: "Coffee",
    price: "$4.95",
    description: "Equal parts espresso, steamed milk, and dense micro-foam. Dusted with premium organic cocoa powder.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c4",
    name: "Latte",
    category: "Coffee",
    price: "$5.25",
    description: "Double shot espresso with silky steamed milk and a delicate layer of micro-foam on top. Velvety smooth texture.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c5",
    name: "Flat White",
    category: "Coffee",
    price: "$5.00",
    description: "Ristretto double shot blended with steamed whole milk. A strong coffee flavor with a velvety micro-foam texture.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c6",
    name: "Mocha",
    category: "Coffee",
    price: "$5.75",
    description: "Espresso combined with premium dark Belgian chocolate syrup and steamed milk, finished with whipped cream.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c7",
    name: "Caramel Macchiato",
    category: "Coffee",
    price: "$5.95",
    description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and drizzled with buttery caramel sauce.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c8",
    name: "Hazelnut Latte",
    category: "Coffee",
    price: "$5.75",
    description: "Classic latte infused with organic roasted hazelnut syrup, delivering a sweet, nutty, and comforting finish.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c9",
    name: "Vanilla Latte",
    category: "Coffee",
    price: "$5.75",
    description: "Rich espresso and steamed milk flavored with premium Madagascar Bourbon vanilla syrup.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "c10",
    name: "Irish Coffee",
    category: "Coffee",
    price: "$7.50",
    description: "Espresso and hot water infused with non-alcoholic Irish whiskey flavor, brown sugar, and topped with dense cold cream.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- SIGNATURE COFFEE (5 items) ---
  {
    id: "sc1",
    name: "Velvet Brew Reserve",
    category: "Signature Coffee",
    price: "$8.50",
    description: "Our signature micro-lot Geisha espresso, pulled over a chilled gold-plated steel sphere to preserve delicate aromatics.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sc2",
    name: "House Blend Gold",
    category: "Signature Coffee",
    price: "$6.95",
    description: "A flawless espresso blend of Ethiopian Sidamo and Colombian Supremo, topped with edible 24K gold flakes.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sc3",
    name: "Cinnamon Honey Latte",
    category: "Signature Coffee",
    price: "$6.50",
    description: "Steamed oat milk, double espresso, raw organic wildflower honey, and freshly grated Ceylon cinnamon.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sc4",
    name: "Roastery Special",
    category: "Signature Coffee",
    price: "$7.25",
    description: "Slow-dripped pour-over featuring our seasonal single-origin beans, hand-selected by our master roaster.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sc5",
    name: "Nitro Cold Brew",
    category: "Signature Coffee",
    price: "$6.25",
    description: "24-hour slow steeped cold brew infused with nitrogen. Pours a beautiful cascade with a velvety head.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- COLD BEVERAGES (8 items) ---
  {
    id: "cb1",
    name: "Cold Coffee",
    category: "Cold Beverages",
    price: "$5.50",
    description: "Classic blended cold coffee made with rich espresso, creamy milk, and vanilla ice cream. Pure comfort.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb2",
    name: "Iced Latte",
    category: "Cold Beverages",
    price: "$5.25",
    description: "Double shot espresso chilled over ice, combined with fresh cold milk for a refreshing kick.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb3",
    name: "Iced Americano",
    category: "Cold Beverages",
    price: "$4.50",
    description: "Signature double espresso poured over premium hand-cut ice, topped up with chilled water.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb4",
    name: "Chocolate Shake",
    category: "Cold Beverages",
    price: "$6.50",
    description: "Thick milk shake blended with premium dark Belgian chocolate and artisan cocoa ice cream, topped with flakes.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb5",
    name: "Oreo Shake",
    category: "Cold Beverages",
    price: "$6.75",
    description: "Indulgent milkshake blended with milk, vanilla ice cream, and crunchy Oreo cookies, topped with whipped cream.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb6",
    name: "Caramel Frappe",
    category: "Cold Beverages",
    price: "$6.95",
    description: "Espresso blended with sweet caramel sauce, milk, and ice, topped with whipped cream and caramel drizzle.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb7",
    name: "Vanilla Frappe",
    category: "Cold Beverages",
    price: "$6.95",
    description: "A rich ice-blended beverage infused with premium vanilla bean extract, milk, espresso, and topped with cream.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "cb8",
    name: "Mango Smoothie",
    category: "Cold Beverages",
    price: "$6.50",
    description: "Pure Alphonso mango pulp blended with rich Greek yogurt and organic honey. Refreshingly sweet.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- TEA (5 items) ---
  {
    id: "t1",
    name: "Masala Chai",
    category: "Tea",
    price: "$4.00",
    description: "Brewed black tea infused with fresh ginger, cardamom, cinnamon, and cloves, boiled with whole milk.",
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
    description: "Steeped premium organic Sencha green tea leaves. Clean, earthy notes and rich in antioxidants.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "t3",
    name: "Lemon Tea",
    category: "Tea",
    price: "$3.95",
    description: "Light black tea infused with fresh lemon juice and sweetened with a touch of organic honey.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "t4",
    name: "Earl Grey",
    category: "Tea",
    price: "$4.50",
    description: "Premium black tea scented with oil of Bergamot rind. Served with lemon or a splash of milk.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "t5",
    name: "Jasmine Tea",
    category: "Tea",
    price: "$4.75",
    description: "Fragrant green tea leaves naturally scented with delicate jasmine blossoms for a soothing floral aroma.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- MOCKTAILS (5 items) ---
  {
    id: "m1",
    name: "Virgin Mojito",
    category: "Mocktails",
    price: "$6.50",
    description: "Crushed fresh mint leaves and lime wedges muddled with sugar syrup, topped with sparkling club soda.",
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
    description: "A vibrant blend of blue Curaçao syrup, fresh lime juice, and sweet lemonade, garnished with a slice of orange.",
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
    description: "Freshly pressed watermelon juice, fresh mint, and lime juice shaken with ice and topped with ginger ale.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1508253730741-0391d171d185?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "m4",
    name: "Passion Fruit Fizz",
    category: "Mocktails",
    price: "$7.50",
    description: "Exotic passion fruit pulp blended with lime and carbonated water, topped with a rosemary sprig.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "m5",
    name: "Mint Sparkler",
    category: "Mocktails",
    price: "$6.75",
    description: "Crisp ginger beer, lime juice, cucumber slices, and muddled mint leaves for an ultra-refreshing finish.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- BREAKFAST (5 items) ---
  {
    id: "b1",
    name: "Avocado Toast",
    category: "Breakfast",
    price: "$11.50",
    description: "Creamy mashed Haas avocados, organic cherry tomatoes, micro-greens, and feta cheese on toasted artisanal sourdough bread.",
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
    description: "Fluffy buttermilk pancakes stacked high, topped with fresh mixed berries, whipped butter, and pure maple syrup.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "b3",
    name: "Croissant Sandwich",
    category: "Breakfast",
    price: "$12.00",
    description: "Flaky butter croissant filled with soft scrambled eggs, melted aged cheddar, and organic baby spinach leaves.",
    isVeg: false,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "b4",
    name: "English Breakfast",
    category: "Breakfast",
    price: "$14.95",
    description: "A hearty classic platter containing double sunny-side eggs, grilled chicken sausage, sautéed mushrooms, baked beans, and toast.",
    isVeg: false,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "b5",
    name: "Cheese Omelette",
    category: "Breakfast",
    price: "$9.50",
    description: "Three egg omelette folded with Swiss, mozzarella, and cheddar cheese, served with a side of micro-green salad.",
    isVeg: false,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- SANDWICHES (5 items) ---
  {
    id: "sw1",
    name: "Cheese Sandwich",
    category: "Sandwiches",
    price: "$8.50",
    description: "Melted premium Gouda and aged sharp cheddar cheeses between slices of toasted sourdough with herb butter.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sw2",
    name: "Grilled Veg Sandwich",
    category: "Sandwiches",
    price: "$9.75",
    description: "Zucchini, bell peppers, eggplant, and mozzarella cheese grilled to perfection with basil pesto spreads.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sw3",
    name: "Club Sandwich",
    category: "Sandwiches",
    price: "$12.50",
    description: "Double-decker toasted bread layered with grilled chicken breast, fried egg, lettuce, tomatoes, and garlic aioli.",
    isVeg: false,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sw4",
    name: "Paneer Tikka Sandwich",
    category: "Sandwiches",
    price: "$10.50",
    description: "Tandoori marinated paneer cubes, mint chutney, sliced onions, and green peppers inside a toasted panini.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sw5",
    name: "Mexican Sandwich",
    category: "Sandwiches",
    price: "$11.00",
    description: "Spicy chipotle chicken or pinto beans, avocado, pepper jack cheese, and sweet corn salsa in a warm toasted flatbread.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- BURGERS (5 items) ---
  {
    id: "bg1",
    name: "Veg Burger",
    category: "Burgers",
    price: "$9.95",
    description: "Crispy vegetable patty topped with sliced cucumber, tomato, lettuce, and our house thousand-island dressing.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bg2",
    name: "Crispy Paneer Burger",
    category: "Burgers",
    price: "$11.50",
    description: "A thick paneer block coated in crisp panko breadcrumbs, fried golden, topped with spicy sriracha mayo and slaw.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bg3",
    name: "Double Cheese Burger",
    category: "Burgers",
    price: "$13.95",
    description: "Two prime flame-grilled chicken patties, layered with double cheddar cheese, caramelized onions, and pickles.",
    isVeg: false,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bg4",
    name: "Mushroom Burger",
    category: "Burgers",
    price: "$12.50",
    description: "Grilled veggie patty loaded with creamy sautéed button and shiitake mushrooms, melted Swiss cheese, and truffle mayo.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bg5",
    name: "Signature House Burger",
    category: "Burgers",
    price: "$14.50",
    description: "Flame-grilled signature chicken sausage patty, crispy onion rings, fried egg, pepper jack, and special smoky BBQ sauce.",
    isVeg: false,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- PASTA (5 items) ---
  {
    id: "p1",
    name: "Alfredo Pasta",
    category: "Pasta",
    price: "$12.95",
    description: "Creamy fettuccine tossed in rich Parmesan cheese butter sauce, loaded with fresh garlic and cracked black pepper.",
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
    description: "Penne pasta cooked in a fiery spicy tomato sauce infused with garlic, red chili flakes, and extra virgin olive oil.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1563379971899-660589a01de3?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "p3",
    name: "Pink Sauce Pasta",
    category: "Pasta",
    price: "$12.50",
    description: "Rigatoni pasta tossed in our specialty hybrid sauce combining rich marinara and velvety cream sauce.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1563379971899-660589a01de3?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "p4",
    name: "Pesto Pasta",
    category: "Pasta",
    price: "$13.50",
    description: "Spaghetti tossed in house-made Genovese basil pesto, toasted pine nuts, cherry tomatoes, and grated Pecorino.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "p5",
    name: "Truffle Mushroom Pasta",
    category: "Pasta",
    price: "$15.95",
    description: "Wild mushrooms sautéed with tagliarelle in a rich cream sauce, finished with premium black truffle oil.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- PIZZA (5 items) ---
  {
    id: "pz1",
    name: "Margherita",
    category: "Pizza",
    price: "$12.95",
    description: "Sourdough crust topped with rich San Marzano tomato sauce, fresh buffalo mozzarella, fresh basil, and olive oil.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "pz2",
    name: "Farmhouse",
    category: "Pizza",
    price: "$14.50",
    description: "Loaded with fresh red onions, green bell peppers, mushrooms, sweet corn, and organic cherry tomatoes.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "pz3",
    name: "Paneer Supreme",
    category: "Pizza",
    price: "$15.25",
    description: "Spicy marinated paneer chunks, colored bell peppers, red onion slices, green chilies, and fresh coriander.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "pz4",
    name: "Four Cheese Pizza",
    category: "Pizza",
    price: "$15.95",
    description: "A decadent combination of Mozzarella, Gorgonzola, Parmesan, and Fontina cheeses over custom white sauce.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "pz5",
    name: "Roasted Veg Pizza",
    category: "Pizza",
    price: "$13.95",
    description: "Oven-roasted zucchini, caramelized onions, garlic cloves, goat cheese crumbles, and balsamic glaze drizzle.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- DESSERTS (5 items) ---
  {
    id: "d1",
    name: "Tiramisu",
    category: "Desserts",
    price: "$8.50",
    description: "Classic Italian dessert made with ladyfingers soaked in our house espresso, layered with whipped mascarpone.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "d2",
    name: "Chocolate Brownie",
    category: "Desserts",
    price: "$6.95",
    description: "Warm, fudgy chocolate brownie loaded with chocolate chunks, served with vanilla bean ice cream.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "d3",
    name: "Cheesecake",
    category: "Desserts",
    price: "$7.95",
    description: "New York-style baked cheesecake with a buttery graham cracker crust, topped with fresh strawberry compote.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "d4",
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: "$7.50",
    description: "Warm chocolate cake with a molten dark chocolate center, dusted with powdered sugar and served with cream.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "d5",
    name: "Belgian Waffle",
    category: "Desserts",
    price: "$8.95",
    description: "Freshly baked, crisp Belgian waffle topped with Nutella drizzle, banana slices, and a scoop of vanilla cream.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1562376502-6f769499c886?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- CAKES (5 items) ---
  {
    id: "ck1",
    name: "Red Velvet Cake",
    category: "Cakes",
    price: "$7.25",
    description: "Decadent layers of red velvet cocoa sponge cake filled and iced with premium cream cheese frosting.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f8011b?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "ck2",
    name: "Chocolate Truffle Cake",
    category: "Cakes",
    price: "$7.50",
    description: "Rich chocolate sponge cake layered with smooth dark chocolate ganache, finished with chocolate shavings.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "ck3",
    name: "Blueberry Cheesecake",
    category: "Cakes",
    price: "$8.50",
    description: "Velvety smooth cold-set cream cheese cake topped with a generous layer of sweet wild blueberry glaze.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "ck4",
    name: "Dutch Chocolate Cake",
    category: "Cakes",
    price: "$7.75",
    description: "Premium moist cake baked using traditional Dutch-process cocoa, covered in an airy, smooth frosting.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "ck5",
    name: "Caramel Crunch Cake",
    category: "Cakes",
    price: "$7.50",
    description: "Vanilla butter cake layered with rich salted caramel sauce and crunchy butterscotch pieces.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f8011b?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- BAKERY (5 items) ---
  {
    id: "bk1",
    name: "Butter Croissant",
    category: "Bakery",
    price: "$3.95",
    description: "Traditional French laminated pastry, hand-rolled with fine butter and baked to a crisp, golden brown.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bk2",
    name: "Chocolate Croissant",
    category: "Bakery",
    price: "$4.50",
    description: "Flaky puff pastry croissant filled with two logs of premium semi-sweet dark Belgian chocolate.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bk3",
    name: "Cinnamon Roll",
    category: "Bakery",
    price: "$4.75",
    description: "Soft yeast dough swirled with aromatic brown sugar and cinnamon, glazed with a velvety cream cheese icing.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bk4",
    name: "Blueberry Muffin",
    category: "Bakery",
    price: "$3.95",
    description: "Moist, cake-like muffin bursting with fresh wild blueberries, topped with a sweet sugar crumble streusel.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "bk5",
    name: "Banana Walnut Bread",
    category: "Bakery",
    price: "$4.25",
    description: "Slice of dense, flavorful banana bread packed with chopped walnuts and cinnamon spice, served warm.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=400&q=80"
  },

  // --- SNACKS (5 items) ---
  {
    id: "sn1",
    name: "French Fries",
    category: "Snacks",
    price: "$4.95",
    description: "Crispy golden shoestring potatoes seasoned simply with sea salt, served with premium tomato ketchup.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sn2",
    name: "Peri Peri Fries",
    category: "Snacks",
    price: "$5.50",
    description: "Crispy golden french fries tossed in a spicy, tangy African bird's eye chili seasoning blend.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sn3",
    name: "Garlic Bread",
    category: "Snacks",
    price: "$6.95",
    description: "Artisanal baguette slices slathered in butter, roasted garlic, and Italian herbs, toasted crisp.",
    isVeg: true,
    isPopular: true,
    isChefRecommended: true,
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sn4",
    name: "Nachos",
    category: "Snacks",
    price: "$8.95",
    description: "Crisp corn tortilla chips smothered in hot melted cheese sauce, topped with jalapeños and tomato salsa.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: "sn5",
    name: "Onion Rings",
    category: "Snacks",
    price: "$5.95",
    description: "Thick-cut sweet white onions dipped in batter and panko crumbs, fried golden brown, served with garlic mayo.",
    isVeg: true,
    isPopular: false,
    isChefRecommended: false,
    image: "https://images.unsplash.com/photo-1639024471283-2da7a3c6a267?auto=format&fit=crop&w=400&h=400&q=80"
  }
];
