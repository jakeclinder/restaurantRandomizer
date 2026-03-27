// Home recipes — your actual cook-at-home list
// Tags must match ids in cuisines.js
export const RECIPES = [

  // ── Thai ──────────────────────────────────────────────
  { id: 'massaman',        name: 'Massaman Curry',          cuisines: ['thai'] },
  { id: 'panang',          name: 'Panang Curry',            cuisines: ['thai'] },
  { id: 'basil-chicken',   name: 'Basil Chicken',           cuisines: ['thai'] },
  { id: 'pad-see-ew',      name: 'Pad See Ew',              cuisines: ['thai'] },
  { id: 'stir-beef-wok',   name: 'Stir Fried Beef Wok',     cuisines: ['thai'] },

  // ── Chinese ───────────────────────────────────────────
  { id: 'black-bean-chix',      name: 'Black Bean Chicken',           cuisines: ['chinese'] },
  { id: 'three-cup-chix',       name: 'Three Cup Chicken',            cuisines: ['chinese'] },
  { id: 'kung-pao',             name: 'Kung Pao Chicken',             cuisines: ['chinese'] },
  { id: 'beef-and-broc',        name: 'Beef and Broccoli',            cuisines: ['chinese'] },
  { id: 'szech-green-beans',    name: 'Szechuan Green Beans',         cuisines: ['chinese', 'vegetarian'] },
  { id: 'sesame-chix',          name: 'Sesame Chicken',               cuisines: ['chinese'] },
  { id: 'general-tsos',         name: "General Tso's Chicken",        cuisines: ['chinese'] },
  { id: 'congee',               name: 'Congee',                       cuisines: ['chinese'] },
  { id: 'szech-eggplant',       name: 'Szechuan Eggplant',            cuisines: ['chinese', 'vegetarian'] },
  { id: 'dragon-noodle',        name: 'Pork & Peanut Dragon Noodle',  cuisines: ['chinese'] },
  { id: 'pepper-steak',         name: 'Pepper Steak',                 cuisines: ['chinese'] },
  { id: 'chicken-dry-pot',      name: 'Chicken Dry Pot',              cuisines: ['chinese'] },
  { id: 'hainanese-chix-rice',  name: 'Hainanese Chicken Rice',       cuisines: ['chinese'] },

  // ── American ──────────────────────────────────────────
  { id: 'chili',      name: 'Chili',         cuisines: ['american'] },
  { id: 'meatloaf',   name: 'Meatloaf',      cuisines: ['american'] },
  { id: 'len-chix',   name: 'Lemon Chicken', cuisines: ['american'] },
  { id: 'red-beans',  name: 'Red Beans and Rice', cuisines: ['american'] },

  // ── Mexican ───────────────────────────────────────────
  { id: 'salsa-chix',     name: 'Salsa Chicken',             cuisines: ['mexican'] },
  { id: 'mole',           name: 'Mole',                      cuisines: ['mexican'] },
  { id: 'al-pastor',      name: 'Al Pastor',                 cuisines: ['mexican', 'tacos'] },
  { id: 'carne-asada',    name: 'Carne Asada',               cuisines: ['mexican', 'tacos'] },
  { id: 'pollo-asada',    name: 'Pollo Asada',               cuisines: ['mexican'] },
  { id: 'cheesy-bl-beans',name: 'Cheesy Spicy Black Beans',  cuisines: ['mexican', 'vegetarian'] },
  { id: 'burrito-bowls',  name: 'Burrito Bowls',             cuisines: ['mexican'] },

  // ── Mediterranean ─────────────────────────────────────
  { id: 'gyros',        name: 'Gyros',        cuisines: ['mediterranean'] },
  { id: 'halal-chix',   name: 'Halal Chicken', cuisines: ['mediterranean'] },
  { id: 'avgolemono',   name: 'Avgolemono',    cuisines: ['mediterranean'] },

  // ── Indian ────────────────────────────────────────────
  { id: 'butter-chix',   name: 'Butter Chicken',      cuisines: ['indian'] },
  { id: 'tikka-masala',  name: 'Tikka Masala',         cuisines: ['indian'] },
  { id: 'saag-paneer',   name: 'Saag Paneer',          cuisines: ['indian', 'vegetarian'] },
  { id: 'tjs-tikka',     name: "TJ's Tikka Thighs",    cuisines: ['indian'] },

  // ── Japanese ──────────────────────────────────────────
  { id: 'salmon-rice',    name: 'Salmon Rice Bowls',  cuisines: ['japanese', 'seafood'] },
  { id: 'teriyaki-chix',  name: 'Teriyaki Chicken',   cuisines: ['japanese'] },
  { id: 'katsu',          name: 'Katsu',               cuisines: ['japanese'] },
  { id: 'japanese-curry', name: 'Japanese Curry',      cuisines: ['japanese'] },
  { id: 'ginger-pork',    name: 'Ginger Pork',         cuisines: ['japanese'] },
  { id: 'gyoza',          name: 'Gyoza',               cuisines: ['japanese'] },
  { id: 'gyudon',         name: 'Gyudon',              cuisines: ['japanese'] },
  { id: 'yakisoba',       name: 'Yakisoba',            cuisines: ['japanese'] },
  { id: 'oyakodon',       name: 'Oyakodon',            cuisines: ['japanese'] },
  { id: 'enoki-rolls',    name: 'Enoki Beef Rolls',    cuisines: ['japanese'] },
  { id: 'nabe',           name: 'Nabe',                cuisines: ['japanese'] },
  { id: 'miso-eggplant',  name: 'Miso Eggplant',       cuisines: ['japanese', 'vegetarian'] },
  { id: 'beef-bowl',      name: 'Beef Bowl',           cuisines: ['japanese'] },

  // ── Italian ───────────────────────────────────────────
  { id: 'pesto-chix',       name: 'Creamy Pesto Chicken',          cuisines: ['italian'] },
  { id: 'sundried-chix',    name: 'Creamy Sundried Tomato Chicken', cuisines: ['italian'] },
  { id: 'spicy-saus-rig',   name: 'Spicy Sausage Rigatoni',        cuisines: ['italian'] },
  { id: 'lasagna',          name: 'Lasagna',                       cuisines: ['italian'] },
  { id: 'chicken-parm',     name: 'Chicken Parm',                  cuisines: ['italian'] },
  { id: 'meatball-parm',    name: 'Meatball Parm',                 cuisines: ['italian'] },
  { id: 'sausage-peppers',  name: 'Sausage and Peppers',           cuisines: ['italian'] },

  // ── Korean ────────────────────────────────────────────
  { id: 'korean-beef-bowl',  name: 'Korean Ground Beef Bowl',  cuisines: ['korean'] },
  { id: 'jjajangmyeon',      name: 'Jjajangmyeon',             cuisines: ['korean'] },
  { id: 'spicy-beef-gochujang', name: 'Spicy Gochujang Beef',  cuisines: ['korean'] },

  // ── Southeast Asian ───────────────────────────────────
  { id: 'sg-chicken-curry',  name: 'Singaporean Chicken Curry',  cuisines: ['southeast-asian'] },
  { id: 'rendang',           name: 'Rendang',                    cuisines: ['southeast-asian'] },
  { id: 'nasi-goreng',       name: 'Mi / Nasi Goreng',           cuisines: ['southeast-asian'] },

  // ── African ───────────────────────────────────────────
  { id: 'beef-tibs',      name: 'Beef Tibs',             cuisines: ['african'] },
  { id: 'doro-wat',       name: 'Doro Wat',              cuisines: ['african'] },
  { id: 'njahi',          name: 'Njahi',                 cuisines: ['african', 'vegetarian'] },
  { id: 'ful-madames',    name: 'Ful Madames',           cuisines: ['african', 'vegetarian'] },
  { id: 'moroccan-tagine',name: 'Moroccan Lamb Tagine',  cuisines: ['african', 'mediterranean'] },
  { id: 'chicken-yassa',  name: 'Chicken Yassa',         cuisines: ['african'] },
  { id: 'peanut-soup',    name: 'Chicken and Peanut Soup', cuisines: ['african'] },
  { id: 'beef-suya',      name: 'Beef Suya',             cuisines: ['african'] },
  { id: 'bharazi',        name: 'Bharazi',               cuisines: ['african', 'vegetarian'] },

  // ── Caribbean (Jamaican, Cuban, Other) ────────────────
  { id: 'curry-goat',    name: 'Curry Goat',          cuisines: ['caribbean'] },
  { id: 'jerk-chicken',  name: 'Jerk Chicken',         cuisines: ['caribbean'] },
  { id: 'brown-stew',    name: 'Brown Stew Chicken',   cuisines: ['caribbean'] },
  { id: 'cuban-pork',    name: 'Garlicky Cuban Pork',  cuisines: ['caribbean'] },
  { id: 'ropa-vieja',    name: 'Ropa Vieja',           cuisines: ['caribbean'] },
  { id: 'pork-verde',    name: 'Pork Verde',           cuisines: ['caribbean', 'mexican'] },
  { id: 'rice-and-beans',name: 'Rice and Beans',       cuisines: ['caribbean', 'vegetarian'] },
  { id: 'pinchos',       name: 'Pinchos',              cuisines: ['caribbean'] },
  { id: 'mofongo',       name: 'Mofongo',              cuisines: ['caribbean'] },
  { id: 'pernil',        name: 'Pernil',               cuisines: ['caribbean'] },
];
