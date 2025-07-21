
import { FaRegSun, FaMoon } from "react-icons/fa";
import { MdComputer, MdDashboard, MdViewColumn, MdViewSidebar, MdUnfoldLess, MdHorizontalRule, MdFilterNone } from "react-icons/md";

export const groceries = [
    // Cereals & Grains (9 items)
    { name: "Oats", type: ["Cereal", "Healthy"], price: 200, quantity: "1kg" },
    { name: "Corn Flakes", type: "Cereal", price: 150, quantity: "500g" },
    { name: "Rice", type: ["Cereal", "Pantry"], price: 600, quantity: "5kg" },
    { name: "Wheat Flour", type: ["Cereal", "Pantry"], price: 180, quantity: "2kg" },
    { name: "Quinoa", type: ["Cereal", "Healthy"], price: 350, quantity: "500g" },
    { name: "Barley", type: "Cereal", price: 120, quantity: "1kg" },
    { name: "Muesli", type: ["Cereal", "Snack"], price: 280, quantity: "750g" },
    { name: "Brown Rice", type: ["Cereal", "Healthy"], price: 220, quantity: "1kg" },
    { name: "Pasta", type: ["Cereal", "Pantry"], price: 95, quantity: "500g" },

    // Vegetables (10 items)
    { name: "Carrot", type: ["Vegetable", "Healthy"], price: 60, quantity: "1kg" },
    { name: "Potato", type: "Vegetable", price: 80, quantity: "2kg" },
    { name: "Spinach", type: ["Vegetable", "Healthy"], price: 40, quantity: "500g" },
    { name: "Tomato", type: ["Vegetable", "Pantry"], price: 90, quantity: "1kg" },
    { name: "Onion", type: ["Vegetable", "Pantry"], price: 70, quantity: "2kg" },
    { name: "Broccoli", type: ["Vegetable", "Healthy"], price: 120, quantity: "500g" },
    { name: "Bell Pepper", type: "Vegetable", price: 150, quantity: "500g" },
    { name: "Cucumber", type: ["Vegetable", "Healthy"], price: 45, quantity: "1kg" },
    { name: "Cauliflower", type: "Vegetable", price: 80, quantity: "1 piece" },
    { name: "Garlic", type: ["Vegetable", "Pantry"], price: 200, quantity: "250g" },

    // Fruits (9 items)
    { name: "Apple", type: ["Fruit", "Healthy"], price: 180, quantity: "1kg" },
    { name: "Banana", type: ["Fruit", "Healthy"], price: 50, quantity: "1 dozen" },
    { name: "Orange", type: ["Fruit", "Healthy"], price: 120, quantity: "1kg" },
    { name: "Mango", type: "Fruit", price: 200, quantity: "1kg" },
    { name: "Grapes", type: ["Fruit", "Healthy"], price: 160, quantity: "500g" },
    { name: "Strawberry", type: ["Fruit", "Healthy"], price: 300, quantity: "250g" },
    { name: "Pineapple", type: "Fruit", price: 80, quantity: "1 piece" },
    { name: "Watermelon", type: ["Fruit", "Healthy"], price: 40, quantity: "1kg" },
    { name: "Pomegranate", type: ["Fruit", "Healthy"], price: 250, quantity: "500g" },

    // Drinks (8 items)
    { name: "Orange Juice", type: ["Drink", "Healthy"], price: 110, quantity: "1L" },
    { name: "Milk", type: ["Drink", "Dairy"], price: 60, quantity: "1L" },
    { name: "Green Tea", type: ["Drink", "Healthy"], price: 180, quantity: "250g" },
    { name: "Coffee", type: ["Drink", "Pantry"], price: 320, quantity: "200g" },
    { name: "Coconut Water", type: ["Drink", "Healthy"], price: 45, quantity: "500ml" },
    { name: "Lemonade", type: "Drink", price: 35, quantity: "500ml" },
    { name: "Herbal Tea", type: ["Drink", "Healthy"], price: 220, quantity: "100g" },
    { name: "Sparkling Water", type: ["Drink", "Healthy"], price: 50, quantity: "750ml" },

    // Snacks (10 items)
    { name: "Chips", type: "Snack", price: 40, quantity: "200g" },
    { name: "Cookies", type: ["Snack", "Dairy"], price: 60, quantity: "300g" },
    { name: "Granola Bar", type: ["Snack", "Healthy"], price: 120, quantity: "6 bars" },
    { name: "Nuts Mix", type: ["Snack", "Healthy"], price: 280, quantity: "250g" },
    { name: "Popcorn", type: "Snack", price: 85, quantity: "150g" },
    { name: "Crackers", type: ["Snack", "Pantry"], price: 75, quantity: "200g" },
    { name: "Pretzels", type: "Snack", price: 95, quantity: "200g" },
    { name: "Trail Mix", type: ["Snack", "Healthy"], price: 180, quantity: "200g" },
    { name: "Protein Bar", type: ["Snack", "Healthy"], price: 150, quantity: "4 bars" },
    { name: "Biscuits", type: ["Snack", "Dairy"], price: 45, quantity: "200g" },

    // Dairy (9 items)
    { name: "Cheese", type: ["Dairy", "Pantry"], price: 220, quantity: "200g" },
    { name: "Butter", type: ["Dairy", "Pantry"], price: 180, quantity: "250g" },
    { name: "Yogurt", type: ["Dairy", "Healthy"], price: 45, quantity: "400g" },
    { name: "Cream", type: "Dairy", price: 85, quantity: "200ml" },
    { name: "Paneer", type: ["Dairy", "Meat"], price: 160, quantity: "250g" },
    { name: "Ice Cream", type: ["Dairy", "Snack"], price: 120, quantity: "500ml" },
    { name: "Condensed Milk", type: ["Dairy", "Pantry"], price: 75, quantity: "400g" },
    { name: "Sour Cream", type: "Dairy", price: 95, quantity: "200g" },
    { name: "Milk Powder", type: ["Dairy", "Pantry"], price: 450, quantity: "1kg" },

    // Meat & Protein (8 items)
    { name: "Chicken Breast", type: ["Meat", "Healthy"], price: 320, quantity: "1kg" },
    { name: "Fish Fillet", type: ["Meat", "Healthy"], price: 450, quantity: "500g" },
    { name: "Eggs", type: ["Meat", "Dairy"], price: 80, quantity: "12 pieces" },
    { name: "Mutton", type: "Meat", price: 750, quantity: "1kg" },
    { name: "Prawns", type: ["Meat", "Healthy"], price: 600, quantity: "500g" },
    { name: "Tofu", type: ["Meat", "Healthy"], price: 120, quantity: "250g" },
    { name: "Sausages", type: ["Meat", "Snack"], price: 180, quantity: "300g" },
    { name: "Bacon", type: "Meat", price: 250, quantity: "200g" },

    // Pantry & Spices (10 items)
    { name: "Salt", type: "Pantry", price: 25, quantity: "1kg" },
    { name: "Sugar", type: "Pantry", price: 45, quantity: "1kg" },
    { name: "Olive Oil", type: "Pantry", price: 280, quantity: "500ml" },
    { name: "Vinegar", type: "Pantry", price: 65, quantity: "500ml" },
    { name: "Honey", type: "Pantry", price: 320, quantity: "500g" },
    { name: "Turmeric", type: "Pantry", price: 150, quantity: "100g" },
    { name: "Cumin Seeds", type: "Pantry", price: 180, quantity: "200g" },
    { name: "Red Chili Powder", type: "Pantry", price: 120, quantity: "200g" },
    { name: "Garam Masala", type: "Pantry", price: 95, quantity: "100g" },
    { name: "Soy Sauce", type: "Pantry", price: 85, quantity: "200ml" }
];

export const themes = [
    { name: "Light", value: "light", icon: <FaRegSun /> },
    { name: "Dark", value: "dark", icon: <FaMoon /> },
];

export const navigationModes = [
    { name: "Floating", value: "floating", icon: <MdDashboard /> },
    { name: "Fixed", value: "fixed", icon: <MdViewColumn /> },
];

export const headerModes = [
    { name: "Fixed", value: "fixed", icon: <MdHorizontalRule /> },
    { name: "Floating", value: "floating", icon: <MdFilterNone /> }
];


