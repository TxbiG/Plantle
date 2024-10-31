const plants = [
    { name: "Basil", hints: [
        "Origin: Tropical regions worldwide.",
        "Use: Commonly used in cooking, especially in Italian dishes.",
        "Properties: Known for its aromatic leaves.",
        "Medicinal: Believed to have anti-inflammatory properties.",
        "Cultivation: Grows well in warm climates."
    ]},
    { name: "Tulip", hints: [
        "Origin: Central Asia.",
        "Properties: Comes in various colors and shapes.",
        "Use: Widely cultivated as a garden flower.",
        "Symbolism: Represents perfect love.",
        "Festivals: Celebrated in many spring flower festivals."
    ]},
    { name: "Maple", hints: [
        "Origin: North America and Asia.",
        "Use: Wood is used for furniture and flooring.",
        "Properties: Known for its beautiful autumn foliage.",
        "Syrup: Famous for maple syrup production.",
        "Lifespan: Some species can live for over 200 years."
    ]},
    { name: "Daisy", hints: [
        "Origin: Europe and North America.",
        "Use: Commonly used in floral arrangements.",
        "Symbolism: Represents innocence and purity.",
        "Flowers: Typically white petals with a yellow center.",
        "Habitat: Grows in a variety of environments."
    ]},
    { name: "Peony", hints: [
        "Origin: Europe, North America, and Asia.",
        "Use: Popular in floral arrangements.",
        "Properties: Known for large, fragrant blooms.",
        "Symbolism: Represents prosperity and good fortune.",
        "Lifespan: Can live for over 100 years."
    ]},
    { name: "Thyme", hints: [
        "Origin: Mediterranean region.",
        "Use: Commonly used as a culinary herb.",
        "Properties: Known for its strong aroma.",
        "Medicinal: Believed to have antiseptic properties.",
        "Varieties: Includes lemon thyme and creeping thyme."
    ]},
    { name: "Poppy", hints: [
        "Origin: Europe, Asia, and North America.",
        "Use: Seeds are used in baking.",
        "Symbolism: Represents sleep and peace.",
        "Flowers: Brightly colored blooms.",
        "Varieties: Includes corn poppy and opium poppy."
    ]},
    { name: "Lilac", hints: [
        "Origin: Europe and Asia.",
        "Use: Popular ornamental shrub.",
        "Properties: Known for its fragrant purple flowers.",
        "Symbolism: Represents the beginning of spring.",
        "Habitat: Prefers well-drained soil."
    ]},
    { name: "Ficus", hints: [
        "Origin: Tropics and subtropics worldwide.",
        "Use: Commonly used as houseplants.",
        "Properties: Includes varieties like the weeping fig.",
        "Care: Prefers bright, indirect light.",
        "Growth: Can grow quite large indoors."
    ]},
    { name: "Holly", hints: [
        "Origin: North America, Europe, and Asia.",
        "Use: Commonly used in Christmas decorations.",
        "Properties: Known for its spiny leaves and bright berries.",
        "Symbolism: Represents protection and defense.",
        "Habitat: Thrives in acidic soils."
    ]},
    { name: "Chili", hints: [
        "Origin: Central and South America.",
        "Use: Commonly used in cooking for heat and flavor.",
        "Properties: Contains capsaicin, responsible for spiciness.",
        "Medicinal: Believed to have pain-relieving properties.",
        "Varieties: Includes jalapeño, habanero, and cayenne."
    ]},
    { name: "Acorn", hints: [
        "Origin: North America.",
        "Use: Commonly used in baking and roasting.",
        "Properties: Sweet flavor and tender texture.",
        "Growth: Grows well in warm climates.",
        "Nutrition: Rich in vitamins A and C."
    ]},
    { name: "Kaffir", hints: [
        "Origin: Southeast Asia.",
        "Use: Leaves and fruit used in cooking.",
        "Properties: Known for its aromatic leaves.",
        "Medicinal: Believed to have antimicrobial properties.",
        "Growth: Thrives in warm, tropical climates."
    ]},
    { name: "Lemon", hints: [
        "Origin: Europe and Asia.",
        "Use: Commonly used in teas and herbal remedies.",
        "Properties: Known for its lemon-scented leaves.",
        "Medicinal: Believed to have calming effects.",
        "Growth: Grows well in full sun."
    ]},
    { name: "Agave", hints: [
        "Origin: Native to the Americas, particularly Mexico.",
        "Use: Used to make tequila and sweeteners.",
        "Properties: Succulent plant with spiky leaves.",
        "Medicinal: Traditionally used for various remedies.",
        "Cultivation: Grows well in arid environments."
    ]},
    { name: "Ajuga", hints: [
        "Origin: Europe and Asia.",
        "Use: Commonly used as a ground cover.",
        "Properties: Known for its blue flowers.",
        "Habitat: Prefers shady areas.",
        "Cultivation: Tolerates a variety of soil conditions."
    ]},
    { name: "Alang", hints: [
        "Origin: Tropical regions.",
        "Use: Often used in traditional medicine.",
        "Properties: Grass species with tall growth.",
        "Habitat: Prefers wet, marshy areas.",
        "Growth: Fast-growing perennial."
    ]},
    { name: "Alder", hints: [
        "Origin: Northern Hemisphere.",
        "Use: Wood used in furniture and charcoal production.",
        "Properties: Deciduous tree with catkins.",
        "Habitat: Often found near water.",
        "Ecological: Improves soil fertility."
    ]},
    { name: "Algae", hints: [
        "Origin: Found in various aquatic environments.",
        "Use: Source of food and biofuel.",
        "Properties: Simple, photosynthetic organisms.",
        "Ecological: Important for aquatic ecosystems.",
        "Nutrition: Rich in vitamins and minerals."
    ]},
    { name: "Anise", hints: [
        "Origin: Mediterranean region.",
        "Use: Commonly used as a spice.",
        "Properties: Known for its aromatic seeds.",
        "Medicinal: Used for digestive issues.",
        "Cultivation: Prefers sunny locations."
    ]},
    { name: "Avens", hints: [
        "Origin: Europe and North America.",
        "Use: Ornamental plant and ground cover.",
        "Properties: Produces small, yellow flowers.",
        "Habitat: Thrives in moist, shady areas.",
        "Ecological: Attracts pollinators."
    ]},
    { name: "Blite", hints: [
        "Origin: Found in various regions.",
        "Use: Used in traditional cuisine.",
        "Properties: Leafy plant with edible parts.",
        "Cultivation: Prefers well-drained soil.",
        "Nutrition: Rich in vitamins."
    ]},
    { name: "Brake", hints: [
        "Origin: Common in temperate regions.",
        "Use: Used for erosion control.",
        "Properties: Fern with feathery leaves.",
        "Habitat: Grows in shady, moist areas.",
        "Ecological: Provides habitat for wildlife."
    ]},
    { name: "Brank", hints: [
        "Origin: Commonly found in wetlands.",
        "Use: Used in traditional crafts.",
        "Properties: Grass-like appearance.",
        "Habitat: Prefers damp soil.",
        "Growth: Forms dense clumps."
    ]},
    { name: "Briar", hints: [
        "Origin: Common in temperate regions.",
        "Use: Often used for hedging.",
        "Properties: Thorny plant with small flowers.",
        "Habitat: Grows well in poor soils.",
        "Ecological: Provides habitat for birds."
    ]},
    { name: "Broom", hints: [
        "Origin: Europe and Asia.",
        "Use: Commonly used for making brooms.",
        "Properties: Shrubby plant with yellow flowers.",
        "Habitat: Thrives in dry, sandy soils.",
        "Ecological: Attracts various insects."
    ]},
    { name: "Butea", hints: [
        "Origin: Southeast Asia.",
        "Use: Flowers used in traditional ceremonies.",
        "Properties: Large tree with vibrant flowers.",
        "Habitat: Prefers tropical climates.",
        "Medicinal: Various traditional uses."
    ]},
    { name: "Cacti", hints: [
        "Origin: Americas.",
        "Use: Grown for ornamental purposes.",
        "Properties: Succulent plants with spines.",
        "Habitat: Thrive in arid environments.",
        "Ecological: Important for desert ecosystems."
    ]},
    { name: "Camas", hints: [
        "Origin: North America.",
        "Use: Roots traditionally used as food.",
        "Properties: Produces blue flowers.",
        "Habitat: Prefers wet meadows.",
        "Ecological: Attracts pollinators."
    ]},
    { name: "Canna", hints: [
        "Origin: Tropical regions.",
        "Use: Grown as an ornamental plant.",
        "Properties: Large, colorful flowers.",
        "Habitat: Prefers moist soil.",
        "Cultivation: Requires full sun."
    ]},
    { name: "Caper", hints: [
        "Origin: Mediterranean region.",
        "Use: Flower buds used in cooking.",
        "Properties: Shrubby plant with spiny branches.",
        "Medicinal: Used in traditional remedies.",
        "Cultivation: Thrives in dry, sunny areas."
    ]},
    { name: "Carex", hints: [
        "Origin: Worldwide.",
        "Use: Commonly used in landscaping.",
        "Properties: Grass-like appearance.",
        "Habitat: Prefers moist, shaded areas.",
        "Ecological: Important for wetlands."
    ]},
    { name: "Chara", hints: [
        "Origin: Found in freshwater environments.",
        "Use: Contributes to aquatic ecosystems.",
        "Properties: Algae-like plant.",
        "Habitat: Prefers shallow waters.",
        "Ecological: Provides oxygen to water."
    ]},
    { name: "Chaya", hints: [
        "Origin: Mexico.",
        "Use: Leaves used in cooking.",
        "Properties: Large, leafy shrub.",
        "Medicinal: High in vitamins.",
        "Cultivation: Thrives in warm climates."
    ]},
    { name: "Chive", hints: [
        "Origin: Europe and Asia.",
        "Use: Culinary herb used in cooking.",
        "Properties: Grass-like with purple flowers.",
        "Medicinal: Believed to aid digestion.",
        "Cultivation: Prefers well-drained soil."
    ]},
    { name: "Chufa", hints: [
        "Origin: Africa and Mediterranean regions.",
        "Use: Edible tubers used in cooking.",
        "Properties: Grass-like plant.",
        "Habitat: Prefers wet soils.",
        "Nutrition: High in healthy fats."
    ]},
    { name: "Cibol", hints: [
        "Origin: Central and South America.",
        "Use: Used in culinary dishes.",
        "Properties: Similar to chives.",
        "Medicinal: Believed to have health benefits.",
        "Cultivation: Grows well in gardens."
    ]},
    { name: "Clary", hints: [
        "Origin: Mediterranean region.",
        "Use: Used in herbal medicine.",
        "Properties: Known for its aromatic leaves.",
        "Medicinal: Believed to have calming effects.",
        "Cultivation: Prefers sunny locations."
    ]},
    { name: "Clote", hints: [
        "Origin: Europe.",
        "Use: Used in traditional herbal remedies.",
        "Properties: Produces small flowers.",
        "Habitat: Grows in meadows.",
        "Ecological: Attracts various pollinators."
    ]},
    { name: "Clove", hints: [
        "Origin: Indonesia.",
        "Use: Commonly used as a spice.",
        "Properties: Known for its aromatic buds.",
        "Medicinal: Used for its antiseptic properties.",
        "Cultivation: Prefers warm, humid climates."
    ]},
    { name: "Couch", hints: [
        "Origin: Native to Europe and Asia.",
        "Use: Commonly used in lawns and pastures.",
        "Properties: Perennial grass.",
        "Habitat: Thrives in a variety of soils.",
        "Ecological: Important for soil stabilization."
    ]},
    { name: "Cress", hints: [
        "Origin: Europe and Asia.",
        "Use: Edible leaves used in salads.",
        "Properties: Fast-growing herb.",
        "Medicinal: Believed to have detoxifying properties.",
        "Cultivation: Grows well in moist soil."
    ]},
    { name: "Cumin", hints: [
        "Origin: Mediterranean and South Asia.",
        "Use: Commonly used as a spice.",
        "Properties: Aromatic seeds.",
        "Medicinal: Believed to aid digestion.",
        "Cultivation: Prefers sunny locations."
    ]},
    { name: "Dicot", hints: [
        "Origin: Various regions.",
        "Use: Refers to a group of flowering plants.",
        "Properties: Have two seed leaves.",
        "Ecological: Important for biodiversity.",
        "Habitat: Found in diverse environments."
    ]},
    { name: "Dulse", hints: [
        "Origin: Coastal regions.",
        "Use: Edible seaweed used in cooking.",
        "Properties: Rich in minerals.",
        "Medicinal: Used for its nutritional benefits.",
        "Cultivation: Harvested from rocky shorelines."
    ]},
    { name: "Durra", hints: [
        "Origin: Africa and the Middle East.",
        "Use: Grain used for food.",
        "Properties: Drought-resistant crop.",
        "Ecological: Important for sustainable agriculture.",
        "Nutrition: High in carbohydrates."
    ]},
    { name: "Dwale", hints: [
        "Origin: Europe.",
        "Use: Historically used for medicinal purposes.",
        "Properties: Produces small flowers.",
        "Habitat: Prefers dry, well-drained soil.",
        "Caution: Contains toxic properties."
    ]},
    { name: "Elder", hints: [
        "Origin: Europe and North America.",
        "Use: Berries used to make syrups and jams.",
        "Properties: Flowering shrub or small tree.",
        "Medicinal: Believed to have immune-boosting properties.",
        "Habitat: Grows in a variety of soils."
    ]},
    { name: "Erica", hints: [
        "Origin: Europe and Africa.",
        "Use: Commonly used as ornamental plants.",
        "Properties: Known for their small, colorful flowers.",
        "Habitat: Prefers acidic soils.",
        "Ecological: Attracts pollinators."
    ]},
    { name: "Eruca", hints: [
        "Origin: Mediterranean region.",
        "Use: Leaves used in salads and cooking.",
        "Properties: Also known as arugula.",
        "Medicinal: Believed to have health benefits.",
        "Cultivation: Grows well in cooler climates."
    ]},
    { name: "Fitch", hints: [
        "Origin: Various regions.",
        "Use: Commonly grown for its seeds.",
        "Properties: Herbaceous plant.",
        "Habitat: Thrives in sunny areas.",
        "Ecological: Attracts beneficial insects."
    ]},
    { name: "Fucus", hints: [
        "Origin: Coastal regions.",
        "Use: Edible seaweed used in cooking.",
        "Properties: Rich in vitamins and minerals.",
        "Medicinal: Used for its nutritional benefits.",
        "Cultivation: Harvested from rocky shorelines."
    ]},
    { name: "Furze", hints: [
        "Origin: Europe.",
        "Use: Grown for its ornamental value.",
        "Properties: Spiny shrub with yellow flowers.",
        "Habitat: Prefers sandy soils.",
        "Ecological: Provides habitat for wildlife."
    ]},
    { name: "Glaux", hints: [
        "Origin: Coastal regions.",
        "Use: Commonly found in marshy areas.",
        "Properties: Herbaceous plant.",
        "Habitat: Prefers wet soil.",
        "Ecological: Important for wetlands."
    ]},
    { name: "Gombo", hints: [
        "Origin: Africa.",
        "Use: Edible pods used in cooking.",
        "Properties: Also known as okra.",
        "Medicinal: Believed to have health benefits.",
        "Cultivation: Thrives in warm climates."
    ]},
    { name: "Gorse", hints: [
        "Origin: Europe.",
        "Use: Grown for its ornamental value.",
        "Properties: Spiny shrub with yellow flowers.",
        "Habitat: Prefers poor, sandy soils.",
        "Ecological: Provides habitat for wildlife."
    ]},
    { name: "Gosse", hints: [
        "Origin: Various regions.",
        "Use: Traditionally used for crafts.",
        "Properties: Herbaceous plant.",
        "Habitat: Grows in diverse environments.",
        "Ecological: Attracts pollinators."
    ]},
    { name: "Gourd", hints: [
        "Origin: Americas.",
        "Use: Edible and ornamental varieties.",
        "Properties: Hard-shelled fruit.",
        "Medicinal: Used in traditional remedies.",
        "Cultivation: Grows well in warm climates."
    ]},
    { name: "Grama", hints: [
        "Origin: Native to the Americas.",
        "Use: Grown for forage and erosion control.",
        "Properties: Grass species.",
        "Habitat: Prefers dry, well-drained soils.",
        "Ecological: Important for grassland ecosystems."
    ]},
    { name: "Grass", hints: [
        "Origin: Worldwide.",
        "Use: Commonly found in lawns and fields.",
        "Properties: Herbaceous plants with narrow leaves.",
        "Ecological: Important for soil health.",
        "Growth: Grows well in a variety of environments."
    ]},
    { name: "Gumbo", hints: [
        "Origin: Africa.",
        "Use: Used in cooking, especially in stews.",
        "Properties: Related to okra.",
        "Medicinal: Believed to have nutritional benefits.",
        "Cultivation: Thrives in warm climates."
    ]},
    { name: "Halfa", hints: [
        "Origin: North Africa.",
        "Use: Used for traditional crafts.",
        "Properties: Grass species.",
        "Habitat: Prefers arid conditions.",
        "Ecological: Important for desert ecosystems."
    ]},
    { name: "Henna", hints: [
        "Origin: North Africa and Middle East.",
        "Use: Leaves used for dyeing.",
        "Properties: Shrubby plant.",
        "Medicinal: Traditionally used for skin conditions.",
        "Cultivation: Prefers hot, dry climates."
    ]},
    { name: "Holly", hints: [
        "Origin: North America, Europe, and Asia.",
        "Use: Commonly used in Christmas decorations.",
        "Properties: Known for its spiny leaves and bright berries.",
        "Symbolism: Represents protection and defense.",
        "Habitat: Thrives in acidic soils."
    ]},
    { name: "Liana", hints: [
        "Origin: Tropical regions.",
        "Use: Climbing plants often used in landscaping.",
        "Properties: Woody vines.",
        "Habitat: Grows in rainforests.",
        "Ecological: Provides habitat for wildlife."
    ]},
    { name: "Liane", hints: [
        "Origin: Tropical regions.",
        "Use: Climbing plants often used in landscaping.",
        "Properties: Woody vines.",
        "Habitat: Grows in rainforests.",
        "Ecological: Provides habitat for wildlife."
    ]},
    { name: "Linum", hints: [
        "Origin: Europe and Asia.",
        "Use: Used for its fibers and seeds.",
        "Properties: Produces beautiful blue flowers.",
        "Medicinal: Traditionally used for digestive issues.",
        "Cultivation: Grows well in well-drained soils."
    ]},
    { name: "Loofa", hints: [
        "Origin: Tropical regions.",
        "Use: Used as a sponge in bathing.",
        "Properties: Gourd plant.",
        "Medicinal: Various traditional uses.",
        "Cultivation: Thrives in warm climates."
    ]},
    { name: "Loufa", hints: [
        "Origin: Tropical regions.",
        "Use: Used as a sponge in bathing.",
        "Properties: Gourd plant.",
        "Medicinal: Various traditional uses.",
        "Cultivation: Thrives in warm climates."
    ]},
    { name: "Luffa", hints: [
        "Origin: Tropical regions.",
        "Use: Used as a sponge in bathing.",
        "Properties: Gourd plant.",
        "Medicinal: Various traditional uses.",
        "Cultivation: Thrives in warm climates."
    ]},
    { name: "Maize", hints: [
        "Origin: Central America.",
        "Use: Staple food crop worldwide.",
        "Properties: Tall grass with ears of kernels.",
        "Nutrition: High in carbohydrates.",
        "Cultivation: Prefers warm climates."
    ]},
    { name: "Medic", hints: [
        "Origin: Various regions.",
        "Use: Refers to medicinal plants.",
        "Properties: Varies widely among species.",
        "Habitat: Grows in diverse environments.",
        "Ecological: Important for herbal medicine."
    ]},
    { name: "Morel", hints: [
        "Origin: Found in temperate regions.",
        "Use: Edible mushroom, highly sought after.",
        "Properties: Distinctive honeycomb appearance.",
        "Habitat: Grows near certain trees.",
        "Caution: Must be properly identified before consumption."
    ]},
    { name: "Mould", hints: [
        "Origin: Various environments.",
        "Use: Refers to fungal growth, not a plant.",
        "Properties: Forms on decaying organic matter.",
        "Ecological: Important for nutrient cycling.",
        "Caution: Can be harmful if inhaled."
    ]},
    { name: "Mucor", hints: [
        "Origin: Commonly found in soil.",
        "Use: Refers to fungal growth, not a plant.",
        "Properties: Fast-growing mold.",
        "Ecological: Important for decomposition.",
        "Caution: Can be harmful in certain contexts."
    ]},
    { name: "Musci", hints: [
        "Origin: Worldwide.",
        "Use: Refers to mosses, not true plants.",
        "Properties: Non-vascular plants.",
        "Habitat: Often found in damp environments.",
        "Ecological: Important for soil health."
    ]},
    { name: "Naias", hints: [
        "Origin: Aquatic environments.",
        "Use: Important for aquatic ecosystems.",
        "Properties: Submerged aquatic plants.",
        "Habitat: Prefers shallow waters.",
        "Ecological: Provides habitat for fish."
    ]},
    { name: "Navew", hints: [
        "Origin: Europe.",
        "Use: Edible leaves used in cooking.",
        "Properties: Biennial plant.",
        "Medicinal: Believed to have health benefits.",
        "Cultivation: Grows well in cooler climates."
    ]},
    { name: "Nopal", hints: [
        "Origin: Mexico.",
        "Use: Edible cactus pads.",
        "Properties: High in fiber.",
        "Medicinal: Believed to help regulate blood sugar.",
        "Cultivation: Thrives in arid environments."
    ]},
    { name: "Orach", hints: [
        "Origin: Europe and Asia.",
        "Use: Edible leaves used in salads.",
        "Properties: Annual plant with colorful leaves.",
        "Medicinal: Believed to have nutritional benefits.",
        "Cultivation: Grows well in a variety of soils."
    ]},
    { name: "Orris", hints: [
        "Origin: Mediterranean region.",
        "Use: Roots used in perfumes and medicine.",
        "Properties: Produces beautiful flowers.",
        "Medicinal: Believed to have astringent properties.",
        "Cultivation: Prefers well-drained soils."
    ]},
    { name: "Oshac", hints: [
        "Origin: Central and South America.",
        "Use: Edible plant with culinary uses.",
        "Properties: Leafy green.",
        "Medicinal: Believed to have health benefits.",
        "Cultivation: Thrives in warm climates."
    ]},
    { name: "Osier", hints: [
        "Origin: Europe and Asia.",
        "Use: Used for basket weaving.",
        "Properties: Willow-like appearance.",
        "Habitat: Prefers wet soil.",
        "Ecological: Important for wildlife."
    ]},
    { name: "Paddy", hints: [
        "Origin: Asia.",
        "Use: Staple food crop (rice).",
        "Properties: Grows in flooded fields.",
        "Nutrition: High in carbohydrates.",
        "Cultivation: Requires warm, wet conditions."
    ]},
    { name: "Panic", hints: [
        "Origin: Various regions.",
        "Use: Commonly refers to panic grass.",
        "Properties: Herbaceous plant.",
        "Habitat: Thrives in diverse environments.",
        "Ecological: Important for grassland ecosystems."
    ]},
    { name: "Pulse", hints: [
        "Origin: Various regions.",
        "Use: Refers to leguminous plants.",
        "Properties: Edible seeds.",
        "Nutrition: High in protein and fiber.",
        "Cultivation: Grows well in various soils."
    ]},
    { name: "Ramee", hints: [
        "Origin: Asia.",
        "Use: Used for fiber production.",
        "Properties: Fast-growing plant.",
        "Habitat: Prefers tropical climates.",
        "Ecological: Important for sustainable materials."
    ]},
    { name: "Ramie", hints: [
        "Origin: East Asia.",
        "Use: Fiber used in textiles.",
        "Properties: Strong and durable.",
        "Cultivation: Prefers humid environments.",
        "Sustainable: Often used in eco-friendly products."
    ]},
    { name: "Rubia", hints: [
        "Origin: Europe and Asia.",
        "Use: Roots used for dyeing.",
        "Properties: Herbaceous plant.",
        "Medicinal: Traditionally used for various ailments.",
        "Cultivation: Prefers well-drained soils."
    ]},
    { name: "Rubus", hints: [
        "Origin: Europe and North America.",
        "Use: Edible fruits (blackberries, raspberries).",
        "Properties: Thorny shrubs.",
        "Habitat: Prefers moist, well-drained soils.",
        "Ecological: Important for wildlife."
    ]},
    { name: "Runch", hints: [
        "Origin: Various regions.",
        "Use: Traditionally used for medicinal purposes.",
        "Properties: Herbaceous plant.",
        "Habitat: Grows in diverse environments.",
        "Ecological: Important for biodiversity."
    ]},
    { name: "Salal", hints: [
        "Origin: North America.",
        "Use: Ornamental plant and ground cover.",
        "Properties: Evergreen shrub with shiny leaves.",
        "Habitat: Prefers moist, shaded areas.",
        "Ecological: Attracts pollinators."
    ]},
    { name: "Savin", hints: [
        "Origin: Europe.",
        "Use: Often used in traditional medicine.",
        "Properties: Shrubby plant with aromatic leaves.",
        "Habitat: Prefers well-drained soils.",
        "Medicinal: Believed to have antiseptic properties."
    ]},
    { name: "Sedge", hints: [
        "Origin: Worldwide.",
        "Use: Important for wetland habitats.",
        "Properties: Grass-like appearance.",
        "Habitat: Prefers wet soils.",
        "Ecological: Important for biodiversity."
    ]},
    { name: "Sorrel", hints: [
        "Origin: Europe and Asia.",
        "Use: Edible leaves with a tangy flavor.",
        "Properties: Herbaceous plant.",
        "Medicinal: Believed to have digestive benefits.",
        "Cultivation: Grows well in cooler climates."
    ]},
    { name: "Spice", hints: [
        "Origin: Various regions.",
        "Use: Refers to various flavoring agents.",
        "Properties: Varies widely among species.",
        "Culinary: Used in cooking and baking.",
        "Medicinal: Some have traditional health benefits."
    ]},
    { name: "Spurge", hints: [
        "Origin: Worldwide.",
        "Use: Grown for ornamental value.",
        "Properties: Produces milky sap.",
        "Medicinal: Some species have traditional uses.",
        "Cultivation: Prefers well-drained soils."
    ]},
    { name: "Spiny", hints: [
        "Origin: Various regions.",
        "Use: Refers to various thorny plants.",
        "Properties: Sharp spines or thorns.",
        "Habitat: Grows in dry, arid regions.",
        "Ecological: Important for wildlife."
    ]},
    { name: "Sugar", hints: [
        "Origin: Tropical regions.",
        "Use: Source of sugar (sugarcane).",
        "Properties: Tall grass with sweet stalks.",
        "Nutrition: High in carbohydrates.",
        "Cultivation: Requires warm, wet conditions."
    ]},
    { name: "Thyme", hints: [
        "Origin: Mediterranean region.",
        "Use: Culinary herb used in cooking.",
        "Properties: Aromatic leaves.",
        "Medicinal: Believed to have antiseptic properties.",
        "Cultivation: Prefers well-drained soils."
    ]},
    { name: "Tuber", hints: [
        "Origin: Various regions.",
        "Use: Refers to underground storage organs.",
        "Properties: Varies widely among species.",
        "Habitat: Grows in diverse environments.",
        "Ecological: Important for food security."
    ]},
    { name: "Vetch", hints: [
        "Origin: Various regions.",
        "Use: Commonly grown as cover crops.",
        "Properties: Leguminous plant.",
        "Ecological: Improves soil fertility.",
        "Cultivation: Grows well in various soils."
    ]},
    { name: "Vicia", hints: [
        "Origin: Worldwide.",
        "Use: Commonly grown as a cover crop.",
        "Properties: Leguminous plant.",
        "Ecological: Improves soil health.",
        "Habitat: Prefers well-drained soils."
    ]}
];


const randomPlant = plants[Math.floor(Math.random() * plants.length)];
const randomHint = randomPlant.hints;
let attempts = 0;

// Display the plant list
document.getElementById("plantList").innerHTML = plants.map(plant => `<li>${plant.name}</li>`).join('');
document.getElementById("hint").innerText = randomHint;

// Function to handle user guess
function submitGuess() {
    const guessInput = document.getElementById("guess");
    const guess = guessInput.value.toLowerCase();
    guessInput.value = "";
    attempts++;

    if (guess === randomPlant.name.toLowerCase()) {
        document.getElementById("feedback").innerText = "Congratulations! You guessed it right!";
    } else if (attempts >= 6) {
        document.getElementById("feedback").innerText = `Sorry! The word was "${randomPlant.name}".`;
    } else {
        document.getElementById("feedback").innerText = `Try again! You have ${6 - attempts} attempts left.`;
        // Provide a new random hint for the next guess
        const newHint = randomPlant.hints[Math.floor(Math.random() * randomPlant.hints.length)];
        document.getElementById("hint").innerText = newHint;
    }
}

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    getNewWord();

    let guessedWords = [[]];
    let availableSpace = 1;

    let word = randomPlant.name; // Ensure we use the name for guessing
    let guessedWordCount = 0;

    const keys = document.querySelectorAll(".keyboard-row button");

    function getCurrentWordArr() {
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1];
    }

    function updateGuessedWords(letter) {
        const currentWordArr = getCurrentWordArr();

        if (currentWordArr && currentWordArr.length < 5) {
            currentWordArr.push(letter);

            const availableSpaceEl = document.getElementById(String(availableSpace));

            availableSpace = availableSpace + 1;
            availableSpaceEl.textContent = letter;
        }
    }

    function getTileColor(letter, index) {
        const isCorrectLetter = word.includes(letter);

        if (!isCorrectLetter) {
            return "rgb(58, 58, 60)"; // Dark gray for incorrect letter
        }

        const letterInThatPosition = word.charAt(index);
        const isCorrectPosition = letter === letterInThatPosition;

        if (isCorrectPosition) {
            return "rgb(83, 141, 78)"; // Green for correct letter in the correct position
        }

        return "rgb(181, 159, 59)"; // Yellow for correct letter in the wrong position
    }

    function handleSubmitWord() {
        const currentWordArr = getCurrentWordArr();
        if (currentWordArr.length !== 5) {
            window.alert("Word must be 5 letters");
            return; // Stop execution if word length is incorrect
        }

        const currentWord = currentWordArr.join("");
        guessedWordCount += 1;

        if (currentWord === word) {
            window.alert("Congratulations! You've guessed the word!");
        }

        if (guessedWords.length === 6) {
            window.alert(`Sorry, you have no more guesses! The word is ${word}.`);
        }
    }

    function createSquares() {
        const gameBoard = document.getElementById("board");

        for (let index = 0; index < 30; index++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
    }

    function handleDeleteLetter() {
        const currentWordArr = getCurrentWordArr();
        const removedLetter = currentWordArr.pop();

        guessedWords[guessedWords.length - 1] = currentWordArr;

        const lastLetterEl = document.getElementById(String(availableSpace - 1));
        lastLetterEl.textContent = "";
        availableSpace = availableSpace - 1;
    }

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");

            if (letter === "enter") {
                handleSubmitWord();
                return;
            }

            if (letter === "del") {
                handleDeleteLetter();
                return;
            }

            updateGuessedWords(letter);
        };
    }
});