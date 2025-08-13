// Telangana Commodity Flow Analysis - Batasingaram Market

const applicationData = {
  market: {
    name: "Gaddiannaram/Batasingaram Fruit Market",
    coordinates: [17.3850, 78.4867],
    area_acres: 31.05,
    mango_area_acres: 12.18,
    commission_agents: 341,
    commission_rate: 4,
    cold_storage_onsite: 1800,
    cold_storage_nearby: 15000,
    daily_footfall: "2000-2500",
    state_mango_share: 11.91,
    state_mosambi_share: 15.48,
    state_watermelon_share: 159.42,
    state_muskmelon_share: 178.79,
    state_papaya_share: 13.32,
    state_guava_share: 5.47,
    state_banana_share: 0.13,
    state_pomegranate_share: 131.89,
    state_grapes_share: 69.69,
    state_dragon_share: 21.08,
    state_apple_share: 0,
    state_orange_share: 0
  },

  // Commodity colors for visualization
  colors: {
    mango: "#ff8c00",
    mosambi: "#32cd32",
    watermelon: "#0fb9b1",
    apple: "#c0392b",
    orange: "#f39c12"
  },

// Outbound market dependencies from Batasingaram
outbound_dependencies: {
  mango: [
    { market: "Delhi", dependency: 9.2, volume: 1620, coordinates: [28.6139, 77.2090] },
    { market: "Mumbai", dependency: 5.7, volume: 1800, coordinates: [19.0760, 72.8877] },
    { market: "Jaipur", dependency: 7.5, volume: 1089, coordinates: [26.9124, 75.7873] },
    { market: "Lucknow", dependency: 4.4, volume: 1350, coordinates: [26.8467, 80.9462] },
    { market: "Surat", dependency: 5.3, volume: 950, coordinates: [21.1702, 72.8311] },
    { market: "Ahmedabad", dependency: 4.6, volume: 820, coordinates: [23.0225, 72.5714] },
    { market: "Chandigarh", dependency: 5.9, volume: 1100, coordinates: [30.7333, 76.7794] }
  ],
  mosambi: [
    { market: "Delhi", dependency: 18.0, volume: 576, coordinates: [28.6139, 77.2090] },
    { market: "Jaipur", dependency: 12.1, volume: 387, coordinates: [26.9124, 75.7873] },
    { market: "Mathura", dependency: 12.1, volume: 387, coordinates: [27.4924, 77.6737] },
    { market: "Bhopal", dependency: 10.9, volume: 349, coordinates: [23.2599, 77.4126] },
    { market: "Ujjain", dependency: 10.9, volume: 349, coordinates: [23.1765, 75.7885] }
  ],
  watermelon: [
    { market: "Hyderabad Local", dependency: 35.0, volume: 2200, coordinates: [17.3850, 78.4867] },
    { market: "Warangal District", dependency: 25.0, volume: 1800, coordinates: [17.9689, 79.5941] },
    { market: "Karimnagar District", dependency: 20.0, volume: 1400, coordinates: [18.4386, 79.1288] },
    { market: "Nizamabad District", dependency: 15.0, volume: 1000, coordinates: [18.6725, 78.0941] },
    { market: "Khammam District", dependency: 5.0, volume: 400, coordinates: [17.2473, 80.1514] }
  ],
  apple: [
    { market: "Hyderabad Metro", dependency: 45.0, volume: 1800, coordinates: [17.3850, 78.4867] },
    { market: "Secunderabad", dependency: 22.4, volume: 900, coordinates: [17.4399, 78.4983] },
    { market: "Warangal City", dependency: 15.6, volume: 625, coordinates: [17.9689, 79.5941] },
    { market: "Nizamabad City", dependency: 10.5, volume: 420, coordinates: [18.6725, 78.0941] },
    { market: "Khammam City", dependency: 6.5, volume: 260, coordinates: [17.2473, 80.1514] }
  ],
  orange: [
    { market: "Hyderabad Local", dependency: 40.6, volume: 1580, coordinates: [17.3850, 78.4867] },
    { market: "Warangal District", dependency: 24.8, volume: 965, coordinates: [17.9689, 79.5941] },
    { market: "Bangalore Market", dependency: 15.0, volume: 585, coordinates: [12.9716, 77.5946] },
    { market: "Chennai Market", dependency: 9.4, volume: 365, coordinates: [13.0827, 80.2707] },
    { market: "Vijayawada Market", dependency: 5.0, volume: 195, coordinates: [16.5062, 80.6480] },
    { market: "Vizag Market", dependency: 5.2, volume: 200, coordinates: [17.6868, 83.2185] }
  ]
},

// Inbound market dependencies to Batasingaram
inbound_dependencies: {
  mango: [
    { source: "Local Production (Telangana)", dependency: 82.0, volume: 97439, coordinates: [17.3850, 78.4867] },
    { source: "Andhra Pradesh", dependency: 18.0, volume: 21469, coordinates: [15.9129, 79.7400] }
  ],
  mosambi: [
    { source: "Local Production (Telangana)", dependency: 72.4, volume: 46807, coordinates: [17.3850, 78.4867] },
    { source: "Andhra Pradesh", dependency: 27.6, volume: 17835, coordinates: [15.9129, 79.7400] }
  ],
  watermelon: [
    { source: "Warangal", state: "Telangana", dependency: 74, volume: 47107, coordinates: [17.9689, 79.5941] },
    { source: "Raichur", state: "Karnataka", dependency: 10, volume: 6370, coordinates: [16.2066, 77.3463] },
    { source: "Gulbarga", state: "Karnataka", dependency: 9, volume: 5733, coordinates: [17.3297, 76.8343] },
    { source: "Ananthapur", state: "Andhra Pradesh", dependency: 7, volume: 4459, coordinates: [14.6819, 77.6006] }
  ],
  apple: [
    { source: "Shimla", dependency: 34, volume: 11709, coordinates: [31.1048, 77.1734] },
    { source: "Kashmir", dependency: 27, volume: 9298, coordinates: [34.0837, 74.7973] },
    { source: "Delhi", dependency: 13, volume: 4477, coordinates: [28.6139, 77.2090] },
    { source: "Chandigarh", dependency: 9, volume: 3099, coordinates: [30.7333, 76.7794] },
    { source: "Chile", dependency: 6, volume: 2066, coordinates: [-33.4489, -70.6693] },
    { source: "Washington", dependency: 7, volume: 2411, coordinates: [47.7511, -120.7401] },
    { source: "New Zealand", dependency: 4, volume: 1378, coordinates: [-41.2866, 174.7756] }
  ],
  orange: [
    { source: "Nagpur", state: "Maharashtra", dependency: 22, volume: 8656, coordinates: [21.1458, 79.0882] },
    { source: "Hingoli", state: "Maharashtra", dependency: 19, volume: 7476, coordinates: [19.7179, 77.1494] },
    { source: "Nashik", state: "Maharashtra", dependency: 19, volume: 7476, coordinates: [19.9975, 73.7898] },
    { source: "Aurangabad", state: "Maharashtra", dependency: 19, volume: 7476, coordinates: [19.8762, 75.3433] },
    { source: "Pune", state: "Maharashtra", dependency: 14, volume: 5509, coordinates: [18.5204, 73.8567] },
    { source: "Chile", dependency: 7, volume: 2754, coordinates: [-33.4489, -70.6693] }
  ]
},

  // 4-level flow patterns from DPR data
  flow_patterns: {
    mango: {
      arrivals: { within_block: 5.0, within_district: 15.0, within_state: 62.0, outside_state: 18.0 },
      dispatches: { within_block: 8.9, within_district: 20.6, within_state: 27.7, outside_state: 42.8 }
    },
    mosambi: {
      arrivals: { within_block: 2.36, within_district: 6.9, within_state: 63.14, outside_state: 27.6 },
      dispatches: { within_block: 5.3, within_district: 12.2, within_state: 18.3, outside_state: 64.2 }
    },
    watermelon: {
      arrivals: { within_block: 0.0, within_district: 7.5, within_state: 53.3, outside_state: 39.2 },
      dispatches: { within_block: 10.0, within_district: 45.0, within_state: 45.0, outside_state: 0.0 }
    },
    apple: {
      arrivals: { within_block: 0.0, within_district: 0.0, within_state: 0.0, outside_state: 100.0 },
      dispatches: { within_block: 9.1, within_district: 23.8, within_state: 67.1, outside_state: 0.0 }
    },
    orange: {
      arrivals: { within_block: 0.0, within_district: 0.0, within_state: 0.0, outside_state: 100.0 },
      dispatches: { within_block: 5.0, within_district: 24.8, within_state: 40.6, outside_state: 29.4 }
    }
  },

  // Complete seasonality data for ALL commodities from DPR
complete_seasonality: {
  // Major commodities with detailed seasonal patterns
  mango: {
    name: "Mango",
    season: "March to July",
    peak_months: ["April", "May"],
    indices: [5, 15, 180, 250, 280, 220, 45, 25, 10, 8, 7, 5],
    color: "#ff8c00"
  },
  mosambi: {
    name: "Mosambi",
    season: "February to November",
    peak_months: ["July", "August"],
    indices: [95, 110, 85, 75, 65, 70, 120, 140, 130, 125, 115, 105],
    color: "#32cd32"
  },
  orange: {
    name: "Orange",
    season: "Throughout the year (imported), December to March (local)",
    peak_months: ["January", "February", "December"],
    indices: [140, 150, 130, 110, 90, 80, 75, 80, 90, 110, 130, 140],
    color: "#f39c12"
  },
  apple: {
    name: "Apple",
    season: "August to December (imported), August to October (local)",
    peak_months: ["November", "December"],
    indices: [120, 110, 100, 90, 85, 80, 85, 90, 100, 130, 140, 150],
    color: "#c0392b"
  },
  watermelon: {
    name: "Watermelon",
    season: "Throughout the year",
    peak_months: ["May", "June"],
    indices: [80, 85, 90, 120, 140, 160, 110, 100, 95, 85, 80, 75],
    color: "#0fb9b1"
  },
  muskmelon: {
    name: "Muskmelon",
    season: "Throughout the year",
    peak_months: ["May", "June"],
    indices: [85, 90, 100, 125, 145, 155, 120, 105, 95, 85, 80, 80],
    color: "#17a2b8"
  },
  papaya: {
    name: "Papaya",
    season: "Throughout the year",
    peak_months: ["March", "April"],
    indices: [95, 100, 130, 140, 120, 110, 100, 95, 90, 85, 85, 90],
    color: "#e67e22"
  },
  pineapple: {
    name: "Pineapple",
    season: "Throughout the year",
    peak_months: ["June", "July"],
    indices: [90, 95, 100, 105, 115, 135, 140, 125, 110, 95, 90, 85],
    color: "#f1c40f"
  },
  banana: {
    name: "Banana",
    season: "Throughout the year",
    peak_months: ["February", "March"],
    indices: [110, 120, 125, 105, 95, 90, 85, 80, 85, 90, 95, 105],
    color: "#f39c12"
  },
  guava: {
    name: "Guava",
    season: "Throughout the year",
    peak_months: ["October", "November"],
    indices: [95, 90, 85, 80, 75, 80, 85, 90, 100, 130, 140, 120],
    color: "#27ae60"
  },
  pomegranate: {
    name: "Pomegranate (Anar)",
    season: "July to December",
    peak_months: ["September", "October"],
    indices: [40, 35, 30, 25, 30, 40, 80, 120, 160, 180, 140, 90],
    color: "#c0392b"
  },
  grapes_white: {
    name: "Grapes (White)",
    season: "Throughout the year",
    peak_months: ["December", "January"],
    indices: [140, 130, 120, 110, 100, 90, 85, 80, 85, 95, 110, 135],
    color: "#9b59b6"
  },
  grapes_black: {
    name: "Grapes (Black)",
    season: "Throughout the year",
    peak_months: ["December", "January"],
    indices: [135, 125, 115, 105, 95, 85, 80, 75, 80, 90, 105, 130],
    color: "#8e44ad"
  },
  sapota: {
    name: "Sapota",
    season: "Throughout the year",
    peak_months: ["March", "April"],
    indices: [95, 100, 125, 135, 120, 110, 105, 100, 95, 90, 85, 90],
    color: "#d2691e"
  },
  kiwi: {
    name: "Kiwi",
    season: "Throughout the year",
    peak_months: ["October", "November"],
    indices: [90, 85, 80, 75, 70, 75, 80, 85, 95, 130, 140, 115],
    color: "#228b22"
  },
  plum: {
    name: "Plum",
    season: "Throughout the year (imported), July to September (local)",
    peak_months: ["August", "September"],
    indices: [80, 75, 70, 65, 60, 70, 100, 140, 160, 120, 95, 85],
    color: "#dda0dd"
  },
  pear: {
    name: "Pear (Naspathi)",
    season: "Throughout the year (imported), July to September (local)",
    peak_months: ["August", "September"],
    indices: [85, 80, 75, 70, 65, 75, 105, 145, 165, 125, 100, 90],
    color: "#ffb6c1"
  },
  strawberry: {
    name: "Strawberry",
    season: "November to April",
    peak_months: ["January", "February"],
    indices: [160, 180, 140, 120, 60, 20, 10, 15, 25, 40, 80, 130],
    color: "#ff69b4"
  },
  ber: {
    name: "Ber",
    season: "August to March",
    peak_months: ["December", "January"],
    indices: [150, 120, 80, 40, 20, 15, 25, 60, 100, 130, 140, 160],
    color: "#daa520"
  },
  kinnow: {
    name: "Kinnow",
    season: "Throughout the year",
    peak_months: ["January", "February"],
    indices: [140, 150, 120, 100, 80, 70, 75, 80, 90, 110, 120, 135],
    color: "#ffa500"
  },
  custard_apple: {
    name: "Custard Apple",
    season: "August to October",
    peak_months: ["September", "October"],
    indices: [20, 15, 25, 40, 60, 80, 120, 180, 200, 160, 100, 50],
    color: "#98fb98"
  },
  dragon_fruit: {
    name: "Dragon Fruit",
    season: "Throughout the year",
    peak_months: ["June", "July"],
    indices: [90, 95, 100, 110, 120, 140, 150, 130, 115, 100, 95, 90],
    color: "#e74c3c"
  },
  fig: {
    name: "Fig",
    season: "Throughout the year",
    peak_months: ["August", "September"],
    indices: [80, 75, 70, 65, 70, 85, 110, 140, 160, 120, 95, 85],
    color: "#800080"
  },
  jack_fruit: {
    name: "Jack Fruit",
    season: "April to August",
    peak_months: ["June", "July"],
    indices: [20, 30, 50, 120, 160, 180, 200, 140, 80, 40, 25, 20],
    color: "#228b22"
  },
  lichi: {
    name: "Lichi",
    season: "May to June",
    peak_months: ["May", "June"],
    indices: [10, 15, 20, 30, 180, 200, 120, 60, 30, 20, 15, 10],
    color: "#ff1493"
  },
  jamun: {
    name: "Jamun",
    season: "June to July",
    peak_months: ["June", "July"],
    indices: [15, 20, 25, 30, 60, 180, 200, 100, 50, 30, 20, 15],
    color: "#483d8b"
  },
  dates: {
    name: "Dates",
    season: "Throughout the year",
    peak_months: ["November", "December"],
    indices: [95, 90, 85, 80, 85, 90, 95, 100, 105, 115, 130, 140],
    color: "#8b4513"
  },
  cancer_fruit: {
    name: "Cancer Fruit",
    season: "February to December",
    peak_months: ["June", "July"],
    indices: [60, 80, 100, 120, 140, 160, 180, 150, 130, 110, 90, 50],
    color: "#ff6347"
  },
  cherry: {
    name: "Cherry",
    season: "July to September",
    peak_months: ["August", "September"],
    indices: [20, 25, 30, 40, 50, 80, 150, 180, 160, 100, 60, 30],
    color: "#dc143c"
  }
},
// Complete price and trends data - CORRECTED with actual DPR data (2020-21 to 2022-23) + Fruit Icons
complete_price_trends: {
    mosambi: {
        name: "Mosambi",
        icon: "🍊",
        min_price: 493,
        max_price: 15713,
        price_variation: 275,
        trend: "volatile",
        yearly_data: [
            { year: "2020-21", min: 493, max: 4397 },
            { year: "2021-22", min: 557, max: 15713 },
            { year: "2022-23", min: 875, max: 6391 }
        ],
        volatility: "very_high",
        color: "#32cd32"
    },
    mango: {
        name: "Mango",
        icon: "🥭",
        min_price: 524,
        max_price: 13338,
        price_variation: 285,
        trend: "increasing",
        yearly_data: [
            { year: "2020-21", min: 814, max: 7313 },
            { year: "2021-22", min: 524, max: 10294 },
            { year: "2022-23", min: 1258, max: 13338 }
        ],
        volatility: "high",
        color: "#ff8c00"
    },
    watermelon: {
        name: "Watermelon",
        icon: "🍉",
        min_price: 200,
        max_price: 4482,
        price_variation: 190,
        trend: "volatile",
        yearly_data: [
            { year: "2020-21", min: 228, max: 1822 },
            { year: "2021-22", min: 251, max: 4482 },
            { year: "2022-23", min: 200, max: 3746 }
        ],
        volatility: "high",
        color: "#0fb9b1"
    },
    muskmelon: {
        name: "Musk Melon",
        icon: "🍈",
        min_price: 425,
        max_price: 5800,
        price_variation: 245,
        trend: "increasing",
        yearly_data: [
            { year: "2020-21", min: 455, max: 1753 },
            { year: "2021-22", min: 425, max: 5800 },
            { year: "2022-23", min: 500, max: 4366 }
        ],
        volatility: "very_high",
        color: "#17a2b8"
    },
    papaya: {
        name: "Papaya",
        icon: "🫒",
        min_price: 301,
        max_price: 6587,
        price_variation: 180,
        trend: "stable",
        yearly_data: [
            { year: "2020-21", min: 301, max: 6587 },
            { year: "2021-22", min: 584, max: 2499 },
            { year: "2022-23", min: 572, max: 3977 }
        ],
        volatility: "moderate",
        color: "#e67e22"
    },
    pineapple: {
        name: "Pineapple",
        icon: "🍍",
        min_price: 337,
        max_price: 4565,
        price_variation: 120,
        trend: "increasing",
        yearly_data: [
            { year: "2020-21", min: 337, max: 3037 },
            { year: "2021-22", min: 385, max: 3187 },
            { year: "2022-23", min: 400, max: 4565 }
        ],
        volatility: "moderate",
        color: "#f1c40f"
    },
    orange: {
        name: "Orange",
        icon: "🍊",
        min_price: 412,
        max_price: 10115,
        price_variation: 210,
        trend: "volatile",
        yearly_data: [
            { year: "2020-21", min: 412, max: 4977 },
            { year: "2021-22", min: 600, max: 10115 },
            { year: "2022-23", min: 500, max: 5617 }
        ],
        volatility: "high",
        color: "#f39c12"
    },
    apple: {
        name: "Apple",
        icon: "🍎",
        min_price: 1318,
        max_price: 19387,
        price_variation: 380,
        trend: "premium_volatile",
        yearly_data: [
            { year: "2020-21", min: 2500, max: 15170 },
            { year: "2021-22", min: 2395, max: 19387 },
            { year: "2022-23", min: 1318, max: 15927 }
        ],
        volatility: "very_high",
        color: "#c0392b"
    },
    pomegranate: {
        name: "Pomegranate (Anar)",
        icon: "🫒",
        min_price: 800,
        max_price: 31705,
        price_variation: 650,
        trend: "premium_extreme",
        yearly_data: [
            { year: "2020-21", min: 800, max: 31705 },
            { year: "2021-22", min: 976, max: 9126 },
            { year: "2022-23", min: 1018, max: 14225 }
        ],
        volatility: "extreme",
        color: "#c0392b"
    },
    grapes_white: {
        name: "Grapes (White)",
        icon: "🍇",
        min_price: 1166,
        max_price: 17344,
        price_variation: 420,
        trend: "premium_increasing",
        yearly_data: [
            { year: "2020-21", min: 1253, max: 3893 },
            { year: "2021-22", min: 1180, max: 11875 },
            { year: "2022-23", min: 1166, max: 17344 }
        ],
        volatility: "very_high",
        color: "#9b59b6"
    },
    grapes_black: {
        name: "Grapes (Black)",
        icon: "🍇",
        min_price: 1494,
        max_price: 21192,
        price_variation: 480,
        trend: "premium_volatile",
        yearly_data: [
            { year: "2020-21", min: 1499, max: 21192 },
            { year: "2021-22", min: 1494, max: 20000 },
            { year: "2022-23", min: 2006, max: 6456 }
        ],
        volatility: "extreme",
        color: "#8e44ad"
    },
    ber: {
        name: "Ber",
        icon: "🫒",
        min_price: 262,
        max_price: 5000,
        price_variation: 180,
        trend: "seasonal_volatile",
        yearly_data: [
            { year: "2020-21", min: 375, max: 2207 },
            { year: "2021-22", min: 262, max: 5000 },
            { year: "2022-23", min: 336, max: 4000 }
        ],
        volatility: "high",
        color: "#daa520"
    },
    guava: {
        name: "Guava",
        icon: "🫒",
        min_price: 623,
        max_price: 4871,
        price_variation: 140,
        trend: "increasing",
        yearly_data: [
            { year: "2020-21", min: 623, max: 4006 },
            { year: "2021-22", min: 703, max: 3785 },
            { year: "2022-23", min: 878, max: 4871 }
        ],
        volatility: "moderate",
        color: "#27ae60"
    },
    plum: {
        name: "Plum",
        icon: "🫒",
        min_price: 1330,
        max_price: 13809,
        price_variation: 320,
        trend: "premium_stable",
        yearly_data: [
            { year: "2020-21", min: 1330, max: 8697 },
            { year: "2021-22", min: 1395, max: 13809 },
            { year: "2022-23", min: 1788, max: 13331 }
        ],
        volatility: "very_high",
        color: "#dda0dd"
    },
    naspathi: {
        name: "Naspathi (Pear)",
        icon: "🍐",
        min_price: 1000,
        max_price: 93764,
        price_variation: 1250,
        trend: "premium_extreme",
        yearly_data: [
            { year: "2020-21", min: 1885, max: 38776 },
            { year: "2021-22", min: 1000, max: 93764 },
            { year: "2022-23", min: 4580, max: 30000 }
        ],
        volatility: "extreme",
        color: "#ffb6c1"
    },
    kiwi: {
        name: "Kiwi",
        icon: "🥝",
        min_price: 3061,
        max_price: 29413,
        price_variation: 580,
        trend: "premium_stable",
        yearly_data: [
            { year: "2020-21", min: 3061, max: 29413 },
            { year: "2021-22", min: 4805, max: 18310 },
            { year: "2022-23", min: 7607, max: 18471 }
        ],
        volatility: "extreme",
        color: "#228b22"
    },
    banana: {
        name: "Banana",
        icon: "🍌",
        min_price: 814,
        max_price: 10000,
        price_variation: 220,
        trend: "volatile",
        yearly_data: [
            { year: "2020-21", min: 814, max: 10000 },
            { year: "2021-22", min: 1000, max: 3000 },
            { year: "2022-23", min: 3300, max: 6650 }
        ],
        volatility: "high",
        color: "#f39c12"
    },
    dragon_fruit: {
        name: "Dragon Fruit",
        icon: "🐲",
        min_price: 1214,
        max_price: 113610,
        price_variation: 1850,
        trend: "exotic_extreme",
        yearly_data: [
            { year: "2020-21", min: 1214, max: 10979 },
            { year: "2021-22", min: 4888, max: 15208 },
            { year: "2022-23", min: 6250, max: 113610 }
        ],
        volatility: "extreme",
        color: "#e74c3c"
    },
    fig: {
        name: "Fig",
        icon: "🫒",
        min_price: 300,
        max_price: 10000,
        price_variation: 290,
        trend: "premium_volatile",
        yearly_data: [
            { year: "2020-21", min: 1000, max: 3000 },
            { year: "2021-22", min: 1000, max: 10000 },
            { year: "2022-23", min: 300, max: 8635 }
        ],
        volatility: "very_high",
        color: "#800080"
    },
    kinnow: {
        name: "Kinnow",
        icon: "🍊",
        min_price: 958,
        max_price: 11237,
        price_variation: 250,
        trend: "increasing",
        yearly_data: [
            { year: "2020-21", min: 958, max: 5000 },
            { year: "2021-22", min: 1275, max: 8175 },
            { year: "2022-23", min: 1500, max: 11237 }
        ],
        volatility: "high",
        color: "#ffa500"
    },
    custard_apple: {
        name: "Custard Apple",
        icon: "🍎",
        min_price: 669,
        max_price: 10000,
        price_variation: 280,
        trend: "increasing",
        yearly_data: [
            { year: "2020-21", min: 669, max: 5000 },
            { year: "2021-22", min: 1000, max: 6173 },
            { year: "2022-23", min: 1000, max: 10000 }
        ],
        volatility: "high",
        color: "#98fb98"
    },
    sapota: {
        name: "Sapota",
        icon: "🫒",
        min_price: 76,
        max_price: 4533,
        price_variation: 190,
        trend: "declining",
        yearly_data: [
            { year: "2020-21", min: 410, max: 4533 },
            { year: "2021-22", min: 486, max: 4010 },
            { year: "2022-23", min: 76, max: 2135 }
        ],
        volatility: "high",
        color: "#d2691e"
    },
    jack_fruit: {
        name: "Jack Fruit",
        icon: "🫒",
        min_price: 80,
        max_price: 12000,
        price_variation: 380,
        trend: "seasonal_volatile",
        yearly_data: [
            { year: "2020-21", min: 80, max: 10166 },
            { year: "2021-22", min: 850, max: 12000 },
            { year: "2022-23", min: 2400, max: 6400 }
        ],
        volatility: "extreme",
        color: "#228b22"
    },
    strawberry: {
        name: "Strawberry",
        icon: "🍓",
        min_price: 3469,
        max_price: 11066,
        price_variation: 220,
        trend: "premium_increasing",
        yearly_data: [
            { year: "2020-21", min: 3706, max: 4569 },
            { year: "2021-22", min: 3469, max: 11066 },
            { year: "2022-23", min: 5607, max: 11023 }
        ],
        volatility: "high",
        color: "#ff69b4"
    },
    cherry: {
        name: "Cherry",
        icon: "🍒",
        min_price: 1333,
        max_price: 24975,
        price_variation: 0, // New commodity
        trend: "new_entry",
        yearly_data: [
            { year: "2020-21", min: 0, max: 0 },
            { year: "2021-22", min: 0, max: 0 },
            { year: "2022-23", min: 1333, max: 24975 }
        ],
        volatility: "extreme",
        color: "#dc143c",
        isNewCommodity: true
    },
    lichi: {
        name: "Lichi",
        icon: "🫒",
        min_price: 2500,
        max_price: 13300,
        price_variation: 0, // New commodity
        trend: "new_entry",
        yearly_data: [
            { year: "2020-21", min: 0, max: 0 },
            { year: "2021-22", min: 0, max: 0 },
            { year: "2022-23", min: 2500, max: 13300 }
        ],
        volatility: "high",
        color: "#ff1493",
        isNewCommodity: true
    },
    cancer_fruit: {
        name: "Cancer Fruit",
        icon: "🫒",
        min_price: 2500,
        max_price: 6000,
        price_variation: 0, // New commodity
        trend: "new_entry",
        yearly_data: [
            { year: "2020-21", min: 0, max: 0 },
            { year: "2021-22", min: 0, max: 0 },
            { year: "2022-23", min: 2500, max: 6000 }
        ],
        volatility: "moderate",
        color: "#ff6347",
        isNewCommodity: true
    },
    dates: {
        name: "Dates",
        icon: "🫒",
        min_price: 800,
        max_price: 16100,
        price_variation: 0, // New commodity
        trend: "new_entry",
        yearly_data: [
            { year: "2020-21", min: 0, max: 0 },
            { year: "2021-22", min: 0, max: 0 },
            { year: "2022-23", min: 800, max: 16100 }
        ],
        volatility: "very_high",
        color: "#8b4513",
        isNewCommodity: true
    }
},

  // Arrivals by year data from DPR
  arrivals_by_commodity: {
    mango: { "2019_20": 89508, "2020_21": 71079, "2021_22": 109680, "2022_23": 100248, "2023_24": 118769, "2024_25": 122160 },
    mosambi: { "2019_20": 41246, "2020_21": 34859, "2021_22": 46132, "2022_23": 62828, "2023_24": 64498, "2024_25": 64938 },
    watermelon: { "2019_20": 63984, "2020_21": 33989, "2021_22": 32436, "2022_23": 67738, "2023_24": 67496, "2024_25": 63400 },
    apple: { "2019_20": 54634, "2020_21": 34397, "2021_22": 27186, "2022_23": 58640, "2023_24": 33887, "2024_25": 34437 },
    orange: { "2019_20": 26952, "2020_21": 28763, "2021_22": 19908, "2022_23": 29068, "2023_24": 46956, "2024_25": 39346 }
  },

// Consolidated outbound dependencies with volume data integrated
consolidated_outbound_dependencies: {
  mango: [
    { destination: "Delhi", dependency: 9.2, volume: 1620, drij: 0.092, classification: "Moderate Sink", coordinates: [28.6139, 77.2090] },
    { destination: "Mumbai", dependency: 5.7, volume: 1800, drij: 0.057, classification: "Low Sink", coordinates: [19.0760, 72.8877] },
    { destination: "Jaipur", dependency: 7.5, volume: 1089, drij: 0.075, classification: "Low Sink", coordinates: [26.9124, 75.7873] },
    { destination: "Lucknow", dependency: 4.4, volume: 1350, drij: 0.044, classification: "Low Sink", coordinates: [26.8467, 80.9462] },
    { destination: "Surat", dependency: 5.3, volume: 950, drij: 0.053, classification: "Low Sink", coordinates: [21.1702, 72.8311] },
    { destination: "Ahmedabad", dependency: 4.6, volume: 820, drij: 0.046, classification: "Low Sink", coordinates: [23.0225, 72.5714] },
    { destination: "Chandigarh", dependency: 5.9, volume: 1100, drij: 0.059, classification: "Low Sink", coordinates: [30.7333, 76.7794] },
    { destination: "Telangana Local", dependency: 57.2, volume: 12650, drij: 0.572, classification: "State Sink", coordinates: [17.3850, 78.4867] }
  ],
  mosambi: [
    { destination: "Delhi", dependency: 18.0, volume: 576, drij: 0.18, classification: "Moderate Sink", coordinates: [28.6139, 77.2090] },
    { destination: "Jaipur", dependency: 12.1, volume: 387, drij: 0.121, classification: "Moderate Sink", coordinates: [26.9124, 75.7873] },
    { destination: "Mathura", dependency: 12.1, volume: 387, drij: 0.121, classification: "Moderate Sink", coordinates: [27.4924, 77.6737] },
    { destination: "Bhopal", dependency: 10.9, volume: 349, drij: 0.109, classification: "Moderate Sink", coordinates: [23.2599, 77.4126] },
    { destination: "Ujjain", dependency: 10.9, volume: 349, drij: 0.109, classification: "Moderate Sink", coordinates: [23.1765, 75.7885] },
    { destination: "Telangana Local", dependency: 36.0, volume: 1152, drij: 0.36, classification: "State Sink", coordinates: [17.3850, 78.4867] }
  ],
  watermelon: [
    { destination: "Hyderabad Local", dependency: 35.0, volume: 2200, drij: 0.35, classification: "Primary Sink", coordinates: [17.3850, 78.4867] },
    { destination: "Warangal District", dependency: 25.0, volume: 1800, drij: 0.25, classification: "Major Sink", coordinates: [17.9689, 79.5941] },
    { destination: "Karimnagar District", dependency: 20.0, volume: 1400, drij: 0.20, classification: "Moderate Sink", coordinates: [18.4386, 79.1288] },
    { destination: "Nizamabad District", dependency: 15.0, volume: 1000, drij: 0.15, classification: "Moderate Sink", coordinates: [18.6725, 78.0941] },
    { destination: "Khammam District", dependency: 5.0, volume: 400, drij: 0.05, classification: "Low Sink", coordinates: [17.2473, 80.1514] }
  ],
  apple: [
    { destination: "Hyderabad Metro", dependency: 45.0, volume: 1800, drij: 0.45, classification: "Primary Sink", coordinates: [17.3850, 78.4867] },
    { destination: "Secunderabad", dependency: 22.4, volume: 900, drij: 0.224, classification: "Major Sink", coordinates: [17.4399, 78.4983] },
    { destination: "Warangal City", dependency: 15.6, volume: 625, drij: 0.156, classification: "Moderate Sink", coordinates: [17.9689, 79.5941] },
    { destination: "Nizamabad City", dependency: 10.5, volume: 420, drij: 0.105, classification: "Moderate Sink", coordinates: [18.6725, 78.0941] },
    { destination: "Khammam City", dependency: 6.5, volume: 260, drij: 0.065, classification: "Low Sink", coordinates: [17.2473, 80.1514] }
  ],
  orange: [
    { destination: "Hyderabad Local", dependency: 40.6, volume: 1580, drij: 0.406, classification: "Primary Sink", coordinates: [17.3850, 78.4867] },
    { destination: "Warangal District", dependency: 24.8, volume: 965, drij: 0.248, classification: "Major Sink", coordinates: [17.9689, 79.5941] },
    { destination: "Bangalore Market", dependency: 15.0, volume: 585, drij: 0.15, classification: "Moderate Sink", coordinates: [12.9716, 77.5946] },
    { destination: "Chennai Market", dependency: 9.4, volume: 365, drij: 0.094, classification: "Low Sink", coordinates: [13.0827, 80.2707] },
    { destination: "Vijayawada Market", dependency: 5.0, volume: 195, drij: 0.05, classification: "Low Sink", coordinates: [16.5062, 80.6480] },
    { destination: "Vizag Market", dependency: 5.2, volume: 200, drij: 0.052, classification: "Low Sink", coordinates: [17.6868, 83.2185] }
  ]
},

// Consolidated inbound dependencies with volume data integrated
consolidated_inbound_dependencies: {
  mango: [
    { source: "Local Production (Telangana)", dependency: 82.0, volume: 97439, drij: 0.82, classification: "Primary Source", coordinates: [17.3850, 78.4867] },
    { source: "Andhra Pradesh", dependency: 18.0, volume: 21469, drij: 0.18, classification: "Moderate Source", coordinates: [15.9129, 79.7400] }
  ],
  mosambi: [
    { source: "Local Production (Telangana)", dependency: 72.4, volume: 46807, drij: 0.724, classification: "Primary Source", coordinates: [17.3850, 78.4867] },
    { source: "Andhra Pradesh", dependency: 27.6, volume: 17835, drij: 0.276, classification: "High Source", coordinates: [15.9129, 79.7400] }
  ],
  watermelon: [
    { source: "Warangal (Telangana)", dependency: 74.0, volume: 47107, drij: 0.74, classification: "Primary Source", coordinates: [17.9689, 79.5941] },
    { source: "Raichur (Karnataka)", dependency: 10.0, volume: 6370, drij: 0.10, classification: "Moderate Source", coordinates: [16.2066, 77.3463] },
    { source: "Gulbarga (Karnataka)", dependency: 9.0, volume: 5733, drij: 0.09, classification: "Moderate Source", coordinates: [17.3297, 76.8343] },
    { source: "Ananthapur (AP)", dependency: 7.0, volume: 4459, drij: 0.07, classification: "Low Source", coordinates: [14.6819, 77.6006] }
  ],
  apple: [
    { source: "Shimla", dependency: 34.0, volume: 11709, drij: 0.34, classification: "High Source", coordinates: [31.1048, 77.1734] },
    { source: "Kashmir", dependency: 27.0, volume: 9298, drij: 0.27, classification: "High Source", coordinates: [34.0837, 74.7973] },
    { source: "Delhi", dependency: 13.0, volume: 4477, drij: 0.13, classification: "Moderate Source", coordinates: [28.6139, 77.2090] },
    { source: "Chandigarh", dependency: 9.0, volume: 3099, drij: 0.09, classification: "Low Source", coordinates: [30.7333, 76.7794] },
    { source: "Chile", dependency: 6.0, volume: 2066, drij: 0.06, classification: "Low Source", coordinates: [-33.4489, -70.6693] },
    { source: "Washington", dependency: 7.0, volume: 2411, drij: 0.07, classification: "Low Source", coordinates: [47.7511, -120.7401] },
    { source: "New Zealand", dependency: 4.0, volume: 1378, drij: 0.04, classification: "Low Source", coordinates: [-41.2866, 174.7756] }
  ],
  orange: [
    { source: "Nagpur (Maharashtra)", dependency: 22.0, volume: 8656, drij: 0.22, classification: "High Source", coordinates: [21.1458, 79.0882] },
    { source: "Hingoli (Maharashtra)", dependency: 19.0, volume: 7476, drij: 0.19, classification: "High Source", coordinates: [19.7179, 77.1494] },
    { source: "Nashik (Maharashtra)", dependency: 19.0, volume: 7476, drij: 0.19, classification: "High Source", coordinates: [19.9975, 73.7898] },
    { source: "Aurangabad (Maharashtra)", dependency: 19.0, volume: 7476, drij: 0.19, classification: "High Source", coordinates: [19.8762, 75.3433] },
    { source: "Pune (Maharashtra)", dependency: 14.0, volume: 5509, drij: 0.14, classification: "Moderate Source", coordinates: [18.5204, 73.8567] },
    { source: "Chile", dependency: 7.0, volume: 2754, drij: 0.07, classification: "Low Source", coordinates: [-33.4489, -70.6693] }
  ]
},

// Complete upstream and downstream lists from DPR data - ALL commodities
upstream_list: [
    "Mango, Mosambi — Local Production (Telangana districts)",
    "Orange — Maharashtra (Nagpur, Hingoli, Nashik, Aurangabad, Pune); Chile (Imported)",
    "Apple — Domestic: Shimla, Kashmir, Delhi, Chandigarh; International: Chile, Washington, New Zealand",
    "Watermelon — Telangana (Warangal, Mahabubnagar, Nalgonda); Karnataka (Raichur, Gulbarga); AP (Ananthapur)",
    "Papaya — Telangana districts (Mahabubnagar, Nalgonda, Ranga Reddy, Medak, Nizamabad, Nagar Kurnool, Gadwal)",
    "Banana — Maharashtra (Nanded); Andhra Pradesh (Rajahmundry, Eluru, Kakinada, Tanuku)",
    "Pomegranate (Anar) — Maharashtra (Solapur, Pandharpur, Sangli); Karnataka; AP (Medak)",
    "Grapes (White) — Australia, China; Maharashtra; Karnataka",
    "Grapes (Black) — Karnataka (Bangalore); Maharashtra (Solapur, Tuljapur, Osmanabad, Pandharpur)",
    "Pineapple — Kerala (Primary source)",
    "Guava — Telangana (Ibrahimpatnam, Turkapalli, Khammam); AP (Nuzvid, West Godavari); Maharashtra",
    "Sapota — Andhra Pradesh (Ulavapadu, Ananthapur); Maharashtra",
    "Kiwi — International: New Zealand, Italy, France, Iran",
    "Plum — International: Spain, USA, China, South Africa; Domestic: Delhi",
    "Pear (Naspathi) — International: South Africa, USA, China; Domestic: Delhi",
    "Strawberry — Odisha (Bhubaneswar); Maharashtra (Mahabaleshwar)",
    "Ber — Telangana (Ananthapur); Karnataka; Maharashtra",
    "Kinnow — Punjab; Haryana; Uttar Pradesh (Lucknow)",
    "Custard Apple — Telangana (Nalgonda, Mahabubnagar, Ranga Reddy, Vikarabad)",
    "Dragon Fruit — International: New Zealand, Italy, France, Iran",
    "Fig — Karnataka (Primary source)",
    "Jack Fruit — Andhra Pradesh (Visakhapatnam); Karnataka",
    "Lichi — West Bengal/Bihar",
    "Jamun — Andhra Pradesh (Madanapalle); Maharashtra",
    "Dates — International: Iran/Saudi Arabia",
    "Cancer Fruit — Karnataka/Kerala/Tamil Nadu/Burma",
    "Cherry — Chile (Imported)",
    "Musk Melon — Telangana (Mahabubnagar, Warangal); Karnataka; Maharashtra; AP (Ananthapur)"
],

downstream_list: [
    "Mango — Interstate: Delhi (9.2%), Jaipur (7.5%), Mumbai (5.7%), Lucknow (4.4%), Surat (5.3%), Ahmedabad (4.6%), Chandigarh (5.9%); Intrastate: Telangana Local (57.2%)",
    "Mosambi — Interstate: Delhi (18%), Jaipur (12.1%), Mathura (12.1%), Bhopal (10.9%), Ujjain (10.9%); Intrastate: Telangana Local (36%)",
    "Watermelon — Exclusively Local Distribution: Hyderabad Local (35%), Warangal District (25%), Karimnagar District (20%), Nizamabad District (15%), Khammam District (5%)",
    "Apple — Exclusively Local Distribution: Hyderabad Metro (45%), Secunderabad (22.4%), Warangal City (15.6%), Nizamabad City (10.5%), Khammam City (6.5%)",
    "Orange — Exclusively Local Distribution: Hyderabad Local (40.6%), Warangal District (24.8%), Bangalore Market (15%), Chennai Market (9.4%), Vijayawada Market (5%), Vizag Market (5.2%)",
    "Pomegranate (Anar) — Local Sales Only (100% within Telangana and neighboring regions)",
    "Grapes (White & Black) — Local Sales Only (100% within Telangana markets)",
    "Pineapple — Local Sales Only (100% Telangana distribution)",
    "Papaya — Local Sales Only (100% within Telangana districts)",
    "Banana — Local Sales Only (100% local distribution)",
    "Guava — Local Sales Only (100% within state)",
    "Sapota — Local Sales Only (100% local markets)",
    "Kiwi — Local Sales Only (100% premium local distribution)",
    "Plum — Local Sales Only (100% within Telangana)",
    "Pear (Naspathi) — Local Sales Only (100% local markets)",
    "Strawberry — Local Sales Only (100% within state)",
    "Ber — Local Sales Only (100% local distribution)",
    "Kinnow — Local Sales Only (100% within Telangana)",
    "Custard Apple — Local Sales Only (100% within state districts)",
    "Dragon Fruit — Local Sales Only (100% premium local markets)",
    "Fig — Local Sales Only (100% within Telangana)",
    "Jack Fruit — Local Sales Only (100% local consumption)",
    "Lichi — Local Sales Only (100% within state)",
    "Jamun — Local Sales Only (100% local distribution)",
    "Dates — Local Sales Only (100% within Telangana)",
    "Cancer Fruit — Local Sales Only (100% local markets)",
    "Cherry — Local Sales Only (100% premium local distribution)",
    "Musk Melon — Local Sales Only (100% within state)"
]
};
// Global variables
let map;
let currentCommodityFilter = "all";
let majorCommodities = ["mango", "mosambi", "watermelon", "apple", "orange"];
let locationOnlyCommodities = [
  "papaya","banana","pomegranate","grapes_white","grapes_black","pineapple",
  "guava","sapota","kiwi","plum","pear","strawberry","ber","kinnow",
  "custard_apple","dragon_fruit","fig","jack_fruit","lichi","jamun",
  "dates","cancer_fruit","cherry","muskmelon"
];
let currentFlowCategory = "major";

let flowLayers = [];
let charts = {};
let sourceMarkersLayer = L.layerGroup();        // ADD THIS LINE
let destinationMarkersLayer = L.layerGroup();   // ADD THIS LINE
let productionMarkersLayer = L.layerGroup();    // ADD THIS LINE
let currentFlowFilter = 'both';  
document.addEventListener("DOMContentLoaded", function() {
    console.log("Initializing Telangana Commodity Flow Dashboard...");
    
    try {
        initializeMap();
        initializeTabs(); // This handles the price tab
        initializeCommodityFilter();
        populateDataTables();
        updateStateShareBars();
        populateUpstreamDownstream();
        initializeSeasonality();
        initializePriceAndTrends(); // Add this line
        
        setTimeout(() => {
            initializeCharts();
        }, 500);
        
    } catch (error) {
        console.error("Error during initialization:", error);
    }
});

// Map a consistent color for each commodity (used for dot if no emoji)
const commodityColors = {
  mango:"#ff8c00", mosambi:"#32cd32", watermelon:"#0fb9b1", apple:"#c0392b", orange:"#f39c12",
  papaya:"#e67e22", banana:"#f1c40f", pomegranate:"#c0392b", grapes_white:"#9b59b6", grapes_black:"#8e44ad",
  pineapple:"#f1c40f", guava:"#27ae60", sapota:"#d2691e", kiwi:"#228b22", plum:"#a67ecf",
  pear:"#ffb6c1", strawberry:"#ff69b4", ber:"#daa520", kinnow:"#ffa500", custard_apple:"#98fb98",
  dragon_fruit:"#e74c3c", fig:"#800080", jack_fruit:"#228b22", lichi:"#ff1493", jamun:"#483d8b",
  dates:"#8b4513", cancer_fruit:"#ff6347", cherry:"#dc143c", muskmelon:"#17a2b8"
};

// Preferred emoji for some commodities
const commodityEmojis = {
  mango:"🥭", mosambi:"🍊", watermelon:"🍉", apple:"🍎", orange:"🍊",
  banana:"🍌", pineapple:"🍍", grapes_white:"🍇", grapes_black:"🍇",
  kiwi:"🥝", strawberry:"🍓", cherry:"🍒", pear:"🍐", muskmelon:"🍈"
};

// Build UI label: emoji if available, else colored dot
function getCommodityLabelHTML(id) {
  const pretty = id.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const emoji = commodityEmojis[id];
  if (emoji) return `${emoji} ${pretty}`;
  const color = commodityColors[id] || "#6b7280";
  return `<span class="dot" style="--dot-color:${color}"></span>${pretty}`;
}

// Initialize Leaflet map
function initializeMap() {
  console.log("Initializing map...");
  
  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("Map container not found");
    return;
  }
  
  mapContainer.style.height = "100%";
  mapContainer.style.width = "100%";
  
  // Create map
  map = L.map("map", {
    center: applicationData.market.coordinates,
    zoom: 7,
    zoomControl: true
  });
  
  // Add tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19
  }).addTo(map);
  
  // Add hub marker
  const hubMarker = L.marker(applicationData.market.coordinates, {
    icon: L.divIcon({
      className: "market-marker",
      html: "",
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    })
  }).addTo(map);
  
  hubMarker.bindPopup(buildHubPopup());
  hubMarker.on("click", () => renderFlows());
// Ensure map resizes correctly on mobile after layout/rotation
window.addEventListener('resize', () => {
  try { map && map.invalidateSize(); } catch (e) {}
});

// On orientation change (iOS/Android)
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    try { map && map.invalidateSize(); } catch (e) {}
  }, 250);
});

// If your app toggles layouts/tabs, call this after the DOM changes:
function refreshMapSize() {
  setTimeout(() => {
    try { map && map.invalidateSize(); } catch (e) {}
  }, 150);
}
icon: L.divIcon({
  className: 'destination-marker-enhanced',
  html: '',
  iconSize: [28, 28],
  iconAnchor: [14, 14]
})

  // Enhanced table interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add data labels for responsive design
  const tables = document.querySelectorAll('.dependency-table table');
  
  tables.forEach(table => {
    const headers = table.querySelectorAll('th');
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      cells.forEach((cell, index) => {
        if (headers[index]) {
          cell.setAttribute('data-label', headers[index].textContent);
        }
      });
    });
  });
  
  // Add click handlers for table rows
  document.querySelectorAll('.dependency-table tbody tr').forEach(row => {
    row.addEventListener('click', function() {
      // Add subtle click animation
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
});


// Add all market markers
addDestinationMarkers();
addSourceMarkers(); 
addProductionMarkers();

  
  setTimeout(() => {
    map.invalidateSize();
    renderFlows();
  }, 100);
  
  console.log("Map initialized successfully");
}
// Add destination markets with enhanced popups - ADD THIS NEW FUNCTION
function addDestinationMarkers() {
  const destinationMarkets = [
    // Mango destinations from your DPR data
    { name: "Delhi Market", coords: [28.6139, 77.2090], type: "Major Hub", commodities: ["mango"], dependency: 9.2, volume: "1,620 MT/year", distance: "1,370 km" },
    { name: "Mumbai Market", coords: [19.0760, 72.8777], type: "Port City", commodities: ["mango"], dependency: 5.7, volume: "1,800 MT/year", distance: "620 km" },
    { name: "Jaipur Market", coords: [26.9124, 75.7873], type: "Regional Hub", commodities: ["mango", "mosambi"], dependency: 7.5, volume: "1,089 MT/year", distance: "895 km" },
    { name: "Lucknow Market", coords: [26.8467, 80.9462], type: "Regional Hub", commodities: ["mango"], dependency: 4.4, volume: "1,350 MT/year", distance: "1,280 km" },
    { name: "Surat Market", coords: [21.1702, 72.8311], type: "Commercial Hub", commodities: ["mango"], dependency: 5.3, volume: "950 MT/year", distance: "485 km" },
    { name: "Ahmedabad Market", coords: [23.0225, 72.5714], type: "Commercial Hub", commodities: ["mango"], dependency: 4.6, volume: "820 MT/year", distance: "520 km" },
    { name: "Chandigarh Market", coords: [30.7333, 76.7794], type: "Regional Hub", commodities: ["mango"], dependency: 5.9, volume: "1,100 MT/year", distance: "1,450 km" },
    
    // Mosambi destinations
    { name: "Mathura Market", coords: [27.4924, 77.6737], type: "Regional Hub", commodities: ["mosambi"], dependency: 12.1, volume: "387 MT/year", distance: "1,320 km" },
    { name: "Bhopal Market", coords: [23.2599, 77.4126], type: "Regional Hub", commodities: ["mosambi"], dependency: 10.9, volume: "349 MT/year", distance: "640 km" },
    { name: "Ujjain Market", coords: [23.1765, 75.7885], type: "Regional Hub", commodities: ["mosambi"], dependency: 10.9, volume: "349 MT/year", distance: "720 km" }
  ];
  
  destinationMarkets.forEach(market => {
    const marker = L.marker(market.coords, {
      icon: L.divIcon({
        className: 'destination-marker-enhanced',
        html: '<div class="dest-icon">🏪</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      })
    });
    
    // Store commodity info and market data on marker
    marker.commodities = market.commodities;
    marker.marketData = market;
    marker.addTo(map);
    
    marker.on('click', () => {
      const popupContent = buildMarketOverviewPopup(market, 'destination');
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'enhanced-popup-style'
      }).openPopup();
    });
  });
}

// Add source markets function - ADD THIS NEW FUNCTION
function addSourceMarkers() {
  const sourceMarkets = [
    // Apple sources
    { name: "Shimla", coords: [31.1048, 77.1734], type: "Hill Station", commodities: ["apple"], dependency: 34, country: "India" },
    { name: "Kashmir", coords: [34.0837, 74.7973], type: "Valley Region", commodities: ["apple"], dependency: 27, country: "India" },
    { name: "Delhi Hub", coords: [28.6139, 77.2090], type: "Distribution Hub", commodities: ["apple"], dependency: 13, country: "India" },
    { name: "Chandigarh Hub", coords: [30.7333, 76.7794], type: "Regional Hub", commodities: ["apple"], dependency: 9, country: "India" },
    
    // Orange sources
    { name: "Nagpur", coords: [21.1458, 79.0882], type: "Citrus Hub", commodities: ["orange"], dependency: 22, state: "Maharashtra" },
    { name: "Hingoli", coords: [19.7179, 77.1494], type: "Production Center", commodities: ["orange"], dependency: 19, state: "Maharashtra" },
    { name: "Nashik", coords: [19.9975, 73.7898], type: "Production Center", commodities: ["orange"], dependency: 19, state: "Maharashtra" },
    { name: "Aurangabad", coords: [19.8762, 75.3433], type: "Production Center", commodities: ["orange"], dependency: 19, state: "Maharashtra" },
    { name: "Pune", coords: [18.5204, 73.8567], type: "Production Center", commodities: ["orange"], dependency: 14, state: "Maharashtra" },
    
    // Watermelon sources
    { name: "Warangal", coords: [17.9689, 79.5941], type: "Production District", commodities: ["watermelon"], dependency: 74, state: "Telangana" },
    { name: "Raichur", coords: [16.2066, 77.3463], type: "Production Hub", commodities: ["watermelon"], dependency: 10, state: "Karnataka" },
    { name: "Gulbarga", coords: [17.3297, 76.8343], type: "Production Hub", commodities: ["watermelon"], dependency: 9, state: "Karnataka" },
    { name: "Ananthapur", coords: [14.6819, 77.6006], type: "Production Hub", commodities: ["watermelon"], dependency: 7, state: "Andhra Pradesh" }
  ];
  
  sourceMarkets.forEach(source => {
    const marker = L.marker(source.coords, {
      icon: L.divIcon({
        className: 'source-marker-enhanced',
        html: '<div class="source-icon">🌾</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })
    });
    
    marker.commodities = source.commodities;
    marker.marketData = source;
    marker.addTo(map);
    
    marker.on('click', () => {
      const popupContent = buildMarketOverviewPopup(source, 'source');
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'enhanced-popup-style'
      }).openPopup();
    });
  });
} 

// ADD ALL THESE NEW FUNCTIONS RIGHT HERE:

function renderCommoditySpecificFlows(commodity) {
    console.log(`Rendering flows for: ${commodity}`);
    clearAllMarkers();

    if (majorCommodities.includes(commodity)) {
        showCommodityMarkers(commodity);
        renderArrivalFlows(commodity, true);
        renderDispatchFlows(commodity, true);
    } 
    else if (locationOnlyCommodities.includes(commodity)) {
        renderBasicUpstreamFlows(commodity);
        renderBasicDownstreamFlows(commodity);
    }
}
function renderBasicUpstreamFlows(commodity) {
    const list = getBasicUpstreamLocations(commodity);
    list.forEach(src => {
        const line = L.polyline([src.coordinates, applicationData.market.coordinates], {
            color: '#3498db', weight: 2, dashArray: '6,3'
        }).bindTooltip(`<div class="upstream-tooltip"><b>📥 ${commodity.toUpperCase()} Source</b><br>${src.source}</div>`);
        map.addLayer(line); flowLayers.push(line);
    });
}

function renderBasicDownstreamFlows(commodity) {
    const list = getBasicDownstreamLocations(commodity);
    list.forEach(dest => {
        const line = L.polyline([applicationData.market.coordinates, dest.coordinates], {
            color: '#e67e22', weight: 2, dashArray: '8,4'
        }).bindTooltip(`<div class="downstream-tooltip"><b>📤 ${commodity.toUpperCase()} Destination</b><br>${dest.destination}</div>`);
        map.addLayer(line); flowLayers.push(line);
    });
}



function renderArrivalFlows(commodity, detailed = false) {
    const inboundData = applicationData.consolidated_inbound_dependencies[commodity];
    if (!inboundData || inboundData.length === 0) return;

    inboundData.forEach(source => {
        const lineWeight = detailed && source.dependency 
            ? Math.max(2, source.dependency / 5)
            : 2;

        const flowLine = L.polyline([
            source.coordinates,
            applicationData.market.coordinates
        ], {
            color: getArrivalFlowColor(commodity),
            weight: lineWeight,
            opacity: 0.8,
            dashArray: '10,5',
            className: 'arrival-flow'
        });

        const tooltipHtml = detailed && source.volume
            ? `<b>📥 ARRIVAL (${commodity})</b><br>From: ${source.source}<br>Volume: ${source.volume} MT<br>Dependency: ${source.dependency}%`
            : `<b>📥 ARRIVAL (${commodity})</b><br>From: ${source.source}`;

        flowLine.bindTooltip(tooltipHtml);
        map.addLayer(flowLine);
        flowLayers.push(flowLine);
    });
}

function renderDispatchFlows(commodity, detailed = false) {
    const outboundData = applicationData.consolidated_outbound_dependencies[commodity];
    if (!outboundData || outboundData.length === 0) return;

    outboundData.forEach(destination => {
        const lineWeight = detailed && destination.dependency
            ? Math.max(2, destination.dependency / 5)
            : 2;

        const flowLine = L.polyline([
            applicationData.market.coordinates,
            destination.coordinates
        ], {
            color: getDispatchFlowColor(commodity),
            weight: lineWeight,
            opacity: 0.8,
            dashArray: '15,10,5,10',
            className: 'dispatch-flow'
        });

        const tooltipHtml = detailed && destination.volume
            ? `<b>📤 DISPATCH (${commodity})</b><br>To: ${destination.destination}<br>Volume: ${destination.volume} MT<br>Dependency: ${destination.dependency}%`
            : `<b>📤 DISPATCH (${commodity})</b><br>To: ${destination.destination}`;

        flowLine.bindTooltip(tooltipHtml);
        map.addLayer(flowLine);
        flowLayers.push(flowLine);
    });
}
function renderBasicUpstreamFlows(commodity) {
    const locations = getBasicUpstreamLocations(commodity);
    locations.forEach(loc => {
        const flowLine = L.polyline([
            loc.coordinates,
            applicationData.market.coordinates
        ], {
            color: '#3498db',
            weight: 2,
            opacity: 0.7,
            dashArray: '8,4'
        }).bindTooltip(`<b>📥 UPSTREAM (${commodity})</b><br>From: ${loc.source}`);
        
        map.addLayer(flowLine);
        flowLayers.push(flowLine);
    });
}

function renderBasicDownstreamFlows(commodity) {
    const locations = getBasicDownstreamLocations(commodity);
    locations.forEach(loc => {
        const flowLine = L.polyline([
            applicationData.market.coordinates,
            loc.coordinates
        ], {
            color: '#e74c3c',
            weight: 2,
            opacity: 0.7,
            dashArray: '8,4'
        }).bindTooltip(`<b>📤 DOWNSTREAM (${commodity})</b><br>To: ${loc.destination}`);
        
        map.addLayer(flowLine);
        flowLayers.push(flowLine);
    });
}


function getArrivalFlowColor(commodity) {
    const colors = {
        mango: '#1b9e77',
        mosambi: '#2d6e3b',
        watermelon: '#0a8a82',
        apple: '#8b2635',
        orange: '#b8860b'
    };
    return colors[commodity] || '#1b9e77';
}

function getDispatchFlowColor(commodity) {
    const colors = {
        mango: '#d95f02',
        mosambi: '#e6ab02',
        watermelon: '#e15759',
        apple: '#f28e2c',
        orange: '#ff9d9a'
    };
    return colors[commodity] || '#d95f02';
}

function clearAllMarkers() {
    sourceMarkersLayer.clearLayers();
    destinationMarkersLayer.clearLayers();
    productionMarkersLayer.clearLayers();
    
    map.removeLayer(sourceMarkersLayer);
    map.removeLayer(destinationMarkersLayer);
    map.removeLayer(productionMarkersLayer);
}

function showCommodityMarkers(commodity) {
    clearAllMarkers();
    
    addCommoditySourceMarkers(commodity);
    addCommodityDestinationMarkers(commodity);
    addCommodityProductionMarkers(commodity);
    
    sourceMarkersLayer.addTo(map);
    destinationMarkersLayer.addTo(map);
    productionMarkersLayer.addTo(map);
}

function addCommoditySourceMarkers(commodity) {
    const inboundData = applicationData.consolidated_inbound_dependencies[commodity];
    if (!inboundData) return;
    
    inboundData.forEach(source => {
        const marker = L.marker(source.coordinates, {
            icon: L.divIcon({
                className: 'source-marker-commodity',
                html: `<div class="marker-inner source-${commodity}">📍</div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            })
        });
        
        marker.bindPopup(buildCompactSourcePopup(source, commodity), {
            maxWidth: 280,
            className: 'compact-popup'
        });
        
        sourceMarkersLayer.addLayer(marker);
    });
}

function addCommodityDestinationMarkers(commodity) {
    const outboundData = applicationData.consolidated_outbound_dependencies[commodity];
    if (!outboundData) return;
    
    outboundData.forEach(destination => {
        const marker = L.marker(destination.coordinates, {
            icon: L.divIcon({
                className: 'destination-marker-commodity',
                html: `<div class="marker-inner destination-${commodity}">🎯</div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            })
        });
        
        marker.bindPopup(buildCompactDestinationPopup(destination, commodity), {
            maxWidth: 280,
            className: 'compact-popup'
        });
        
        destinationMarkersLayer.addLayer(marker);
    });
}

function buildCompactSourcePopup(source, commodity) {
    const commodityIcon = getCommodityIcon(commodity);
    return `
        <div class="compact-popup-content">
            <div class="popup-header">
                ${commodityIcon} ${commodity.toUpperCase()} SOURCE
            </div>
            <div class="popup-body">
                <div class="popup-row">
                    <span class="popup-label">Location:</span>
                    <span class="popup-value">${source.source}</span>
                </div>
                <div class="popup-row">
                    <span class="popup-label">Volume:</span>
                    <span class="popup-value">${source.volume.toLocaleString()} MT</span>
                </div>
                <div class="popup-row">
                    <span class="popup-label">Dependency:</span>
                    <span class="popup-value">${source.dependency}%</span>
                </div>
            </div>
        </div>
    `;
}

function buildCompactDestinationPopup(destination, commodity) {
    const commodityIcon = getCommodityIcon(commodity);
    return `
        <div class="compact-popup-content">
            <div class="popup-header">
                ${commodityIcon} ${commodity.toUpperCase()} DESTINATION
            </div>
            <div class="popup-body">
                <div class="popup-row">
                    <span class="popup-label">Market:</span>
                    <span class="popup-value">${destination.destination}</span>
                </div>
                <div class="popup-row">
                    <span class="popup-label">Volume:</span>
                    <span class="popup-value">${destination.volume.toLocaleString()} MT</span>
                </div>
                <div class="popup-row">
                    <span class="popup-label">Dependency:</span>
                    <span class="popup-value">${destination.dependency}%</span>
                </div>
            </div>
        </div>
    `;
}

function getCommodityIcon(commodity) {
    const icons = {
        mango: '🥭',
        mosambi: '🍊',
        watermelon: '🍉',
        apple: '🍎',
        orange: '🍊'
    };
    return icons[commodity] || '🍎';
}

function addCommodityProductionMarkers(commodity) {
    // This function can be expanded later if you have production data
    // For now, it's just a placeholder
}


// Enhanced popup builder function - ADD THIS NEW FUNCTION
function buildMarketOverviewPopup(marketData, marketType = 'hub') {
  const filterText = currentCommodityFilter === 'all' ? 'All Commodities' : 
    currentCommodityFilter.charAt(0).toUpperCase() + currentCommodityFilter.slice(1);
  
  if (marketType === 'hub') {
    return `
      <div style="width:320px;max-height:450px;overflow-y:auto;font-family:var(--font-family-base);">
        <div style="background:linear-gradient(135deg, #21808d 0%, #1d7480 100%);color:white;padding:14px;border-radius:8px 8px 0 0;">
          <div style="display:flex;align-items:center;">
            <div style="width:50px;height:50px;background:rgba(255,255,255,0.2);border-radius:6px;margin-right:12px;display:flex;align-items:center;justify-content:center;font-size:20px;">
              🏛️
            </div>
            <div>
              <h3 style="margin:0;font-size:16px;font-weight:600;">Gaddiannaram/Batasingaram</h3>
              <p style="margin:2px 0 0 0;font-size:12px;opacity:0.9;">Primary Fruit Trading Hub</p>
            </div>
          </div>
        </div>
        
        <div style="padding:16px;background:white;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
            <div style="text-align:center;padding:10px;background:#f8f9fa;border-radius:6px;">
              <div style="font-size:11px;color:#666;margin-bottom:4px;">📍 Location</div>
              <div style="font-size:12px;font-weight:600;">17.385°N, 78.487°E</div>
            </div>
            <div style="text-align:center;padding:10px;background:#f8f9fa;border-radius:6px;">
              <div style="font-size:11px;color:#666;margin-bottom:4px;">🎯 Filter</div>
              <div style="font-size:12px;font-weight:600;">${filterText}</div>
            </div>
            <div style="text-align:center;padding:10px;background:#f8f9fa;border-radius:6px;">
              <div style="font-size:11px;color:#666;margin-bottom:4px;">📏 Area</div>
              <div style="font-size:12px;font-weight:600;">31.05 acres</div>
            </div>
            <div style="text-align:center;padding:10px;background:#f8f9fa;border-radius:6px;">
              <div style="font-size:11px;color:#666;margin-bottom:4px;">🏪 Agents</div>
              <div style="font-size:12px;font-weight:600;">341</div>
            </div>
          </div>
          
          <div style="text-align:center;padding:8px;background:#fff3cd;border-radius:4px;">
            <p style="margin:0;font-size:10px;color:#856404;"><strong>💡 Tip:</strong> Double-click for animated flows</p>
          </div>
        </div>
      </div>
    `;
  } else if (marketType === 'destination') {
    return `
      <div style="width:280px;font-family:var(--font-family-base);">
        <div style="background:linear-gradient(135deg, #3498db 0%, #2980b9 100%);color:white;padding:12px;border-radius:6px 6px 0 0;">
          <h4 style="margin:0;font-size:14px;font-weight:600;">🏪 ${marketData.name}</h4>
          <p style="margin:2px 0 0 0;font-size:11px;opacity:0.9;">${marketData.type}</p>
        </div>
        
        <div style="padding:14px;background:white;">
          <div style="margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee;">
              <span style="font-size:11px;color:#666;">📍 Distance:</span>
              <span style="font-size:11px;font-weight:600;">${marketData.distance}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee;">
              <span style="font-size:11px;color:#666;">📦 Volume:</span>
              <span style="font-size:11px;font-weight:600;">${marketData.volume}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;">
              <span style="font-size:11px;color:#666;">📊 Dependency:</span>
              <span style="font-size:11px;font-weight:600;color:#3498db;">${marketData.dependency}%</span>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (marketType === 'source') {
    return `
      <div style="width:280px;font-family:var(--font-family-base);">
        <div style="background:linear-gradient(135deg, #27ae60 0%, #229954 100%);color:white;padding:12px;border-radius:6px 6px 0 0;">
          <h4 style="margin:0;font-size:14px;font-weight:600;">🌾 ${marketData.name}</h4>
          <p style="margin:2px 0 0 0;font-size:11px;opacity:0.9;">${marketData.type}</p>
        </div>
        
        <div style="padding:14px;background:white;">
          <div style="margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee;">
              <span style="font-size:11px;color:#666;">📍 Region:</span>
              <span style="font-size:11px;font-weight:600;">${marketData.country || marketData.state}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;">
              <span style="font-size:11px;color:#666;">📊 Supply Share:</span>
              <span style="font-size:11px;font-weight:600;color:#27ae60;">${marketData.dependency}%</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function buildHubPopup() {
  const filterText = currentCommodityFilter === "all" ? "All Commodities" : 
    currentCommodityFilter.charAt(0).toUpperCase() + currentCommodityFilter.slice(1);
  
  return `
    <div style="min-width:260px">
      <h4>${applicationData.market.name}</h4>
      <div><strong>Filter:</strong> ${filterText}</div>
      <hr/>
      <div><strong>Total Area:</strong> ${applicationData.market.area_acres} acres</div>
      <div><strong>Commission Agents:</strong> ${applicationData.market.commission_agents}</div>
      <div><strong>Cold Storage:</strong> ${applicationData.market.cold_storage_onsite + applicationData.market.cold_storage_nearby} MT</div>
      <div><strong>State Share:</strong> Mango ${applicationData.market.state_mango_share}% | Mosambi ${applicationData.market.state_mosambi_share}%</div>
    </div>
  `;
}

function addProductionMarkers() {
  const districts = [
    { name: "Nalgonda", coordinates: [17.0574, 79.2686] },
    { name: "Ranga Reddy", coordinates: [17.385, 78.4867] },
    { name: "Mahbubnagar", coordinates: [16.7496, 77.9981] },
    { name: "Khammam", coordinates: [17.2473, 80.1514] },
    { name: "Warangal", coordinates: [17.9689, 79.5941] }
  ];
  
  districts.forEach(district => {
    L.circleMarker(district.coordinates, {
      radius: 6,
      color: "#27ae60",
      weight: 2,
      fillColor: "#27ae60",
      fillOpacity: 0.6
    }).addTo(map).bindTooltip(district.name);
  });
}

function renderFlows() {
    flowLayers.forEach(layer => map.removeLayer(layer));
    flowLayers = [];
    
    const commodity = currentCommodityFilter;
    
    if (commodity === "all") {
        renderAllCommodityFlows();
    } else {
        renderCommoditySpecificFlows(commodity);
    }
}



// Enhanced screen layout controls
document.addEventListener('DOMContentLoaded', function() {
    let currentLayout = 'normal';
    let isFullscreen = false;
    
    const mainContent = document.querySelector('.main-content');
    const panelToggleBtn = document.getElementById('panel-toggle-btn');
    const fullscreenToggleBtn = document.getElementById('fullscreen-toggle-btn');
    
    // Panel layout cycling
    if (panelToggleBtn) {
        panelToggleBtn.addEventListener('click', function() {
            const layouts = ['normal', 'map-focus', 'panel-focus'];
            const currentIndex = layouts.indexOf(currentLayout);
            const nextIndex = (currentIndex + 1) % layouts.length;
            currentLayout = layouts[nextIndex];
            
            mainContent.setAttribute('data-layout', currentLayout);
            
            // Update button state
            updatePanelButtonState();
            
            // Refresh map size after layout change
            setTimeout(() => {
                if (window.map) {
                    map.invalidateSize();
                }
            }, 300);
        });
    }
    
    // Fullscreen toggle
    if (fullscreenToggleBtn) {
        fullscreenToggleBtn.addEventListener('click', function() {
            if (!isFullscreen) {
                // Enter fullscreen
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                }
                
                mainContent.setAttribute('data-layout', 'fullscreen');
                isFullscreen = true;
                fullscreenToggleBtn.classList.add('active');
                fullscreenToggleBtn.querySelector('.control-text').textContent = 'Exit';
                
            } else {
                // Exit fullscreen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                
                mainContent.setAttribute('data-layout', currentLayout);
                isFullscreen = false;
                fullscreenToggleBtn.classList.remove('active');
                fullscreenToggleBtn.querySelector('.control-text').textContent = 'Full';
            }
            
            // Refresh map after fullscreen change
            setTimeout(() => {
                if (window.map) {
                    map.invalidateSize();
                }
            }, 300);
        });
    }
    
    // Handle fullscreen change events
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    
    function handleFullscreenChange() {
        const isInFullscreen = !!(document.fullscreenElement || 
                                 document.webkitFullscreenElement || 
                                 document.msFullscreenElement);
        
        if (!isInFullscreen && isFullscreen) {
            // Exited fullscreen
            mainContent.setAttribute('data-layout', currentLayout);
            isFullscreen = false;
            fullscreenToggleBtn.classList.remove('active');
            fullscreenToggleBtn.querySelector('.control-text').textContent = 'Full';
            
            setTimeout(() => {
                if (window.map) {
                    map.invalidateSize();
                }
            }, 300);
        }
    }
    
    function updatePanelButtonState() {
        const controlText = panelToggleBtn.querySelector('.control-text');
        const controlIcon = panelToggleBtn.querySelector('.control-icon');
        
        switch(currentLayout) {
            case 'normal':
                controlText.textContent = 'Panel';
                controlIcon.textContent = '⚏';
                panelToggleBtn.title = 'Switch to Map Focus';
                break;
            case 'map-focus':
                controlText.textContent = 'Map+';
                controlIcon.textContent = '⛶';
                panelToggleBtn.title = 'Switch to Panel Focus';
                break;
            case 'panel-focus':
                controlText.textContent = 'Data+';
                controlIcon.textContent = '☰';
                panelToggleBtn.title = 'Switch to Normal View';
                break;
        }
    }
    
    // Initialize button state
    updatePanelButtonState();
});

// Enhanced tab initialization with compact layout
function initializeTabs() {
    console.log("Initializing enhanced tabs with compact layout...");
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Show first tab by default
    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
    
    // Add click handlers for tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            
            // Remove active class from all tabs and content
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            btn.classList.add('active');
            
            // Show target content
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Enhanced tab initialization - Fixed version
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (!tabButtons.length || !tabContents.length) {
        console.warn("Tabs not found");
        return;
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab') || button.getAttribute('data-target');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Find and activate the corresponding content
            let targetContent;
            if (button.getAttribute('data-tab')) {
                // New format: data-tab="price" -> id="tab-price"
                targetContent = document.getElementById(`tab-${targetTab}`);
            } else if (button.getAttribute('data-target')) {
                // Old format: data-target="tab-overview" -> id="tab-overview"
                targetContent = document.getElementById(targetTab);
            }
            
            if (targetContent) {
                targetContent.classList.add('active');
            } else {
                console.warn(`Target content not found for: ${targetTab}`);
            }
            
            // Initialize specific functionality based on tab
            setTimeout(() => {
                if (targetTab === 'price') {
                    initializePriceAndTrends();
                } else if (targetTab === 'seasonality') {
                    initializeSeasonality();
                } else if (targetTab === 'upstream-downstream' || targetTab === 'tab-upstream-downstream') {
                    populateUpstreamDownstream();
                } else if (targetTab === 'dependencies' || targetTab === 'tab-dependencies') {
                    populateInterdependencyTables();
                } else if (targetTab === 'flows' || targetTab === 'tab-flows') {
                    // Initialize flow patterns if needed
                    if (typeof initializeFlowPatterns === 'function') {
                        initializeFlowPatterns();
                    }
                }
                
                // Resize charts after tab initialization
                Object.values(charts).forEach(chart => {
                    try { 
                        if (chart && typeof chart.resize === 'function') {
                            chart.resize(); 
                        } else if (chart && typeof chart.update === 'function') {
                            chart.update();
                        }
                    } catch (e) {
                        console.warn("Chart resize failed:", e);
                    }
                });
            }, 100);
        });
    });
    
    // Set default active tab if none is active
    const activeTab = document.querySelector('.tab-btn.active');
    const activeContent = document.querySelector('.tab-content.active');
    
    if (!activeTab && tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        const firstTargetTab = tabButtons[0].getAttribute('data-tab') || tabButtons[0].getAttribute('data-target');
        let firstContent;
        
        if (tabButtons[0].getAttribute('data-tab')) {
            firstContent = document.getElementById(`tab-${firstTargetTab}`);
        } else {
            firstContent = document.getElementById(firstTargetTab);
        }
        
        if (firstContent) {
            firstContent.classList.add('active');
        }
    }
}


function initializeCommodityFilter() {
    const filterContainer = document.querySelector('.commodity-filter');
    if (!filterContainer) return;

    // Add category toggles ABOVE existing commodity buttons
    const categoryRow = document.createElement('div');
    categoryRow.className = 'category-toggle-row';

    const categories = [
        { id: 'major', label: ' Major fruits', list: majorCommodities },
        { id: 'others', label: 'Others', list: locationOnlyCommodities },
        { id: 'combined', label: 'All Commodities', list: [...majorCommodities, ...locationOnlyCommodities] }
    ];

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn category-btn' + (cat.id === currentFlowCategory ? ' active' : '');
        btn.textContent = cat.label;
        btn.dataset.category = cat.id;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFlowCategory = cat.id;
            buildCommodityButtons(cat.list);
        });
        categoryRow.appendChild(btn);
    });

    // Create commodity button container
    const commodityRow = document.createElement('div');
    commodityRow.id = 'commodity-button-row';
    commodityRow.className = 'commodity-btns';

    // Clear existing HTML and insert our two rows
    filterContainer.innerHTML = '';
    filterContainer.appendChild(categoryRow);
    filterContainer.appendChild(commodityRow);

    // Initially show major commodities
    buildCommodityButtons(majorCommodities);
}

function buildCommodityButtons(list) {
    const row = document.getElementById('commodity-button-row');
    row.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.innerHTML = 'All';
    allBtn.className = 'filter-btn active';
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', () => {
        currentCommodityFilter = 'all';
        renderFlows();
    });
    row.appendChild(allBtn);

    list.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
       btn.innerHTML = getCommodityLabelHTML(c);
        btn.addEventListener('click', () => {
            document.querySelectorAll('#commodity-button-row .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCommodityFilter = c;
            renderFlows();
        });
        row.appendChild(btn);
    });
}


// Enhanced consolidated data tables population function (keeping same function name)
function populateDataTables() {
  console.log("Populating consolidated dependency tables for all commodities...");
  
  // OUTBOUND CONSOLIDATED DEPENDENCIES - Fill consolidated tables for all commodities
  console.log("Populating outbound consolidated dependencies...");
  
  ["mango", "mosambi", "watermelon", "apple", "orange"].forEach(commodity => {
    const tableId = `#tbl-${commodity}-outbound-dependencies tbody`;
    const tbody = document.querySelector(tableId);
    
    if (tbody) {
      tbody.innerHTML = "";
      const dependencies = applicationData.consolidated_outbound_dependencies[commodity] || [];
      
      if (dependencies.length > 0) {
        dependencies.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td style="font-weight: var(--font-weight-semibold); color: var(--color-primary);">${item.destination}</td>
            <td style="font-weight: var(--font-weight-medium); color: var(--color-success);">${item.dependency}%</td>
            <td style="font-family: var(--font-family-mono); font-weight: var(--font-weight-medium);">${item.volume.toLocaleString()} MT</td>
            <td style="font-family: var(--font-family-mono); color: var(--color-info);">${item.drij}</td>
            <td>
              <span class="classification-badge ${item.classification.toLowerCase().replace(/\s+/g, '-')}">${item.classification}</span>
            </td>
          `;
          tbody.appendChild(row);
        });
        console.log(`✅ Populated ${commodity} outbound dependencies with ${dependencies.length} destinations`);
      } else {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td colspan="5" style="text-align: center; color: var(--color-text-secondary); font-style: italic;">
            No outbound dependency data available for ${commodity}
          </td>
        `;
        tbody.appendChild(row);
      }
    } else {
      console.warn(`❌ Outbound table for ${commodity} not found: ${tableId}`);
    }
  });
  
  // INBOUND CONSOLIDATED DEPENDENCIES - Fill consolidated tables for all commodities
  console.log("Populating inbound consolidated dependencies...");
  
  ["mango", "mosambi", "watermelon", "apple", "orange"].forEach(commodity => {
    const tableId = `#tbl-${commodity}-inbound-dependencies tbody`;
    const tbody = document.querySelector(tableId);
    
    if (tbody) {
      tbody.innerHTML = "";
      const dependencies = applicationData.consolidated_inbound_dependencies[commodity] || [];
      
      if (dependencies.length > 0) {
        dependencies.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td style="font-weight: var(--font-weight-semibold); color: var(--color-primary);">${item.source}</td>
            <td style="font-weight: var(--font-weight-medium); color: var(--color-success);">${item.dependency}%</td>
            <td style="font-family: var(--font-family-mono); font-weight: var(--font-weight-medium);">${item.volume.toLocaleString()} MT</td>
            <td style="font-family: var(--font-family-mono); color: var(--color-info);">${item.drij}</td>
            <td>
              <span class="classification-badge ${item.classification.toLowerCase().replace(/\s+/g, '-')}">${item.classification}</span>
            </td>
          `;
          tbody.appendChild(row);
        });
        console.log(`✅ Populated ${commodity} inbound dependencies with ${dependencies.length} sources`);
      } else {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td colspan="5" style="text-align: center; color: var(--color-text-secondary); font-style: italic;">
            No inbound dependency data available for ${commodity}
          </td>
        `;
        tbody.appendChild(row);
      }
    } else {
      console.warn(`❌ Inbound table for ${commodity} not found: ${tableId}`);
    }
  });
  
  // EXISTING ARRIVALS TABLE FUNCTIONALITY (keep unchanged)
  const arrivalsTable = document.querySelector("#tbl-arrivals-batasingaram tbody");
  if (arrivalsTable) {
    arrivalsTable.innerHTML = "";
    ["mango", "mosambi", "watermelon", "apple", "orange"].forEach(commodity => {
      const data = applicationData.arrivals_by_commodity[commodity];
      if (data) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td style="font-weight: var(--font-weight-semibold); text-transform: capitalize;">${commodity}</td>
          <td>${data["2019_20"].toLocaleString()}</td>
          <td>${data["2020_21"].toLocaleString()}</td>
          <td>${data["2021_22"].toLocaleString()}</td>
          <td>${data["2022_23"].toLocaleString()}</td>
          <td>${data["2023_24"].toLocaleString()}</td>
          <td>${data["2024_25"].toLocaleString()}</td>
        `;
        arrivalsTable.appendChild(row);
      }
    });
    console.log("✅ Populated arrivals table for all commodities");
  }
  
  console.log("✅ All consolidated dependency tables populated successfully");
}


// Update state share bars
function updateStateShareBars() {
  const mangoFill = document.querySelector(".share-fill.mango");
  const mangoPercent = document.querySelector('[data-share="mango"]');
  const mosambiFill = document.querySelector(".share-fill.mosambi");
  const mosambiPercent = document.querySelector('[data-share="mosambi"]');
  
  if (mangoFill && mangoPercent) {
    mangoFill.style.width = `${applicationData.market.state_mango_share}%`;
    mangoPercent.textContent = `${applicationData.market.state_mango_share}%`;
  }
  
  if (mosambiFill && mosambiPercent) {
    mosambiFill.style.width = `${applicationData.market.state_mosambi_share}%`;
    mosambiPercent.textContent = `${applicationData.market.state_mosambi_share}%`;
  }
  
  // Add the missing commodities
  const watermelonFill = document.querySelector(".share-fill.watermelon");
  const watermelonPercent = document.querySelector('[data-share="watermelon"]');
  if (watermelonFill && watermelonPercent) {
    watermelonFill.style.width = `${applicationData.market.state_watermelon_share}%`;
    watermelonPercent.textContent = `${applicationData.market.state_watermelon_share}%`;
  }
  
  const muskmelonFill = document.querySelector(".share-fill.muskmelon");
  const muskmelonPercent = document.querySelector('[data-share="muskmelon"]');
  if (muskmelonFill && muskmelonPercent) {
    muskmelonFill.style.width = `${applicationData.market.state_muskmelon_share}%`;
    muskmelonPercent.textContent = `${applicationData.market.state_muskmelon_share}%`;
  }
  
  // Continue for all other commodities...
  const papayaFill = document.querySelector(".share-fill.papaya");
  const papayaPercent = document.querySelector('[data-share="papaya"]');
  if (papayaFill && papayaPercent) {
    papayaFill.style.width = `${applicationData.market.state_papaya_share}%`;
    papayaPercent.textContent = `${applicationData.market.state_papaya_share}%`;
  }
  
  const guavaFill = document.querySelector(".share-fill.guava");
  const guavaPercent = document.querySelector('[data-share="guava"]');
  if (guavaFill && guavaPercent) {
    guavaFill.style.width = `${applicationData.market.state_guava_share}%`;
    guavaPercent.textContent = `${applicationData.market.state_guava_share}%`;
  }
  
  const bananaFill = document.querySelector(".share-fill.banana");
  const bananaPercent = document.querySelector('[data-share="banana"]');
  if (bananaFill && bananaPercent) {
    bananaFill.style.width = `${applicationData.market.state_banana_share}%`;
    bananaPercent.textContent = `${applicationData.market.state_banana_share}%`;
  }
  
  const pomegranateFill = document.querySelector(".share-fill.pomegranate");
  const pomegranatePercent = document.querySelector('[data-share="pomegranate"]');
  if (pomegranateFill && pomegranatePercent) {
    pomegranateFill.style.width = `${applicationData.market.state_pomegranate_share}%`;
    pomegranatePercent.textContent = `${applicationData.market.state_pomegranate_share}%`;
  }
  
  const grapesFill = document.querySelector(".share-fill.grapes");
  const grapesPercent = document.querySelector('[data-share="grapes"]');
  if (grapesFill && grapesPercent) {
    grapesFill.style.width = `${applicationData.market.state_grapes_share}%`;
    grapesPercent.textContent = `${applicationData.market.state_grapes_share}%`;
  }
  
  const dragonFill = document.querySelector(".share-fill.dragon");
  const dragonPercent = document.querySelector('[data-share="dragon"]');
  if (dragonFill && dragonPercent) {
    dragonFill.style.width = `${applicationData.market.state_dragon_share}%`;
    dragonPercent.textContent = `${applicationData.market.state_dragon_share}%`;
  }
  
  const appleFill = document.querySelector(".share-fill.apple");
  const applePercent = document.querySelector('[data-share="apple"]');
  if (appleFill && applePercent) {
    appleFill.style.width = `${applicationData.market.state_apple_share}%`;
    applePercent.textContent = `${applicationData.market.state_apple_share}%`;
  }
  
  const orangeFill = document.querySelector(".share-fill.orange");
  const orangePercent = document.querySelector('[data-share="orange"]');
  if (orangeFill && orangePercent) {
    orangeFill.style.width = `${applicationData.market.state_orange_share}%`;
    orangePercent.textContent = `${applicationData.market.state_orange_share}%`;
  }
}

// Populate interdependency tables
function populateInterdependencyTables() {
  // Mango interdependency
  const mangoTable = document.querySelector("#tbl-mango-interdependency tbody");
  if (mangoTable) {
    mangoTable.innerHTML = "";
    applicationData.interdependency.mango.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.destination}</td>
        <td>${item.fij}%</td>
        <td>${item.drij.toFixed(3)}</td>
        <td>${item.classification}</td>
      `;
      mangoTable.appendChild(row);
    });
  }
  
  // Mosambi interdependency
  const mosambiTable = document.querySelector("#tbl-mosambi-interdependency tbody");
  if (mosambiTable) {
    mosambiTable.innerHTML = "";
    applicationData.interdependency.mosambi.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.destination}</td>
        <td>${item.fij}%</td>
        <td>${item.drij.toFixed(3)}</td>
        <td>${item.classification}</td>
      `;
      mosambiTable.appendChild(row);
    });
  }
  
  // Watermelon interdependency
  const watermelonTable = document.querySelector("#tbl-watermelon-interdependency tbody");
  if (watermelonTable) {
    watermelonTable.innerHTML = "";
    applicationData.interdependency.watermelon.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.source}</td>
        <td>${item.fij}%</td>
        <td>${item.drij.toFixed(2)}</td>
        <td>${item.classification}</td>
      `;
      watermelonTable.appendChild(row);
    });
  }
  
  // Apple interdependency
  const appleTable = document.querySelector("#tbl-apple-interdependency tbody");
  if (appleTable) {
    appleTable.innerHTML = "";
    applicationData.interdependency.apple.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.source}</td>
        <td>${item.fij}%</td>
        <td>${item.drij.toFixed(2)}</td>
        <td>${item.classification}</td>
      `;
      appleTable.appendChild(row);
    });
  }
  
  // Orange interdependency
  const orangeTable = document.querySelector("#tbl-orange-interdependency tbody");
  if (orangeTable) {
    orangeTable.innerHTML = "";
    applicationData.interdependency.orange.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.source}</td>
        <td>${item.fij}%</td>
        <td>${item.drij.toFixed(2)}</td>
        <td>${item.classification}</td>
      `;
      orangeTable.appendChild(row);
    });
  }
}

// Fixed upstream/downstream population to prevent layout shifts
function populateUpstreamDownstream() {
    console.log("Populating upstream/downstream data...");
    
    const upstreamList = document.getElementById('list-upstream');
    const downstreamList = document.getElementById('list-downstream');
    
    if (!upstreamList || !downstreamList) {
        console.error("Lists not found");
        return;
    }
    
    // Prevent layout shift by setting min-height immediately
    upstreamList.style.minHeight = '300px';
    downstreamList.style.minHeight = '300px';
    
    // Clear and populate upstream
    upstreamList.innerHTML = '';
    applicationData.upstream_list.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${index + 1}.</strong> ${item}`;
        // Prevent flash of unstyled content
        li.style.opacity = '0';
        upstreamList.appendChild(li);
        
        // Fade in with delay to prevent jarring appearance
        setTimeout(() => {
            li.style.transition = 'opacity 0.3s ease';
            li.style.opacity = '1';
        }, index * 50);
    });
    
    // Clear and populate downstream
    downstreamList.innerHTML = '';
    applicationData.downstream_list.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${index + 1}.</strong> ${item}`;
        // Prevent flash of unstyled content
        li.style.opacity = '0';
        downstreamList.appendChild(li);
        
        // Fade in with delay to prevent jarring appearance
        setTimeout(() => {
            li.style.transition = 'opacity 0.3s ease';
            li.style.opacity = '1';
        }, index * 50);
    });
    
    // Add search functionality only after content is loaded
    setTimeout(() => {
        addSimpleSearchOnceStable();
    }, 100);
}

// Stable search function to prevent layout shifts
function addSimpleSearchOnceStable() {
    // Check if search already exists for upstream
    if (!document.getElementById('upstream-search')) {
        const upstreamContainer = document.getElementById('list-upstream').parentElement;
        const upstreamSearch = document.createElement('div');
        upstreamSearch.innerHTML = `
            <input type="text" id="upstream-search" placeholder="🔍 Search upstream..." 
                   class="simple-search-input">
            <div class="search-count" id="upstream-count">${applicationData.upstream_list.length} items</div>
        `;
        upstreamSearch.className = 'simple-search-bar';
        upstreamContainer.insertBefore(upstreamSearch, document.getElementById('list-upstream'));
        
        // Add search functionality
        document.getElementById('upstream-search').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.getElementById('list-upstream').querySelectorAll('li');
            let visibleCount = 0;
            
            items.forEach(item => {
                if (item.textContent.toLowerCase().includes(searchTerm)) {
                    item.style.display = 'list-item';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            document.getElementById('upstream-count').textContent = 
                searchTerm === '' ? `${applicationData.upstream_list.length} items` : `${visibleCount} of ${applicationData.upstream_list.length} items`;
        });
    }
    
    // Check if search already exists for downstream
    if (!document.getElementById('downstream-search')) {
        const downstreamContainer = document.getElementById('list-downstream').parentElement;
        const downstreamSearch = document.createElement('div');
        downstreamSearch.innerHTML = `
            <input type="text" id="downstream-search" placeholder="🔍 Search downstream..." 
                   class="simple-search-input">
            <div class="search-count" id="downstream-count">${applicationData.downstream_list.length} items</div>
        `;
        downstreamSearch.className = 'simple-search-bar';
        downstreamContainer.insertBefore(downstreamSearch, document.getElementById('list-downstream'));
        
        // Add search functionality
        document.getElementById('downstream-search').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.getElementById('list-downstream').querySelectorAll('li');
            let visibleCount = 0;
            
            items.forEach(item => {
                if (item.textContent.toLowerCase().includes(searchTerm)) {
                    item.style.display = 'list-item';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            
            document.getElementById('downstream-count').textContent = 
                searchTerm === '' ? `${applicationData.downstream_list.length} items` : `${visibleCount} of ${applicationData.downstream_list.length} items`;
        });
    }
}

// Enhanced price chart creation with WORKING transparent fill area - CORRECTED VERSION
function createPriceChart(selectedCommodity = 'all', displayMode = 'range') {
    const canvas = document.getElementById('price-chart');
    if (!canvas) {
        console.error("Price chart canvas not found");
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart
    if (window.priceChart) {
        window.priceChart.destroy();
        window.priceChart = null;
    }
    
    let datasets = [];
    let chartTitle = '';
    
    // Icon mapping for your Batasingaram market data
    const iconMap = {
        'all': '🍇', 'mango': '🥭', 'mosambi': '🍊', 'watermelon': '🍉',
        'muskmelon': '🍈', 'papaya': '🏉', 'pineapple': '🍍', 'orange': '🍊',
        'apple': '🍎', 'pomegranate': '🔴', 'grapes_white': '🍇', 'grapes_black': '🍇',
        'ber': '🟢', 'guava': '🟢', 'plum': '🟣', 'naspathi': '🍐', 'kiwi': '🥝',
        'banana': '🍌', 'dragon_fruit': '🐲', 'fig': '🟣', 'kinnow': '🍊',
        'custard_apple': '🍎', 'sapota': '🟤', 'jack_fruit': '🟢',
        'strawberry': '🍓', 'cherry': '🍒', 'lichi': '🔴',
        'cancer_fruit': '🟢', 'dates': '🟤'
    };
    
    try {
        if (selectedCommodity === 'all') {
            const majorCommodities = ['mango', 'mosambi', 'watermelon', 'apple', 'orange'];
            chartTitle = `🍇 Batasingaram Market - ${getModeTitle(displayMode)} (2020-21 to 2022-23)`;
            
            majorCommodities.forEach(commodity => {
                const priceData = applicationData.complete_price_trends[commodity];
                if (priceData && priceData.yearly_data && Array.isArray(priceData.yearly_data)) {
                    const commodityIcon = iconMap[commodity] || '🍎';
                    const data = getDataByMode(priceData.yearly_data, displayMode);
                    
                    if (data.some(val => val !== null && val > 0)) {
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name}`,
                            data: data,
                            borderColor: priceData.color || getDefaultColor(commodity),
                            backgroundColor: (priceData.color || getDefaultColor(commodity)) + '20',
                            borderWidth: 3,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 6,
                            pointHoverRadius: 10
                        });
                    }
                }
            });
        } else {
            // Single commodity analysis with CORRECTED transparent fill
            const priceData = applicationData.complete_price_trends[selectedCommodity];
            if (priceData && priceData.yearly_data && Array.isArray(priceData.yearly_data)) {
                const commodityIcon = iconMap[selectedCommodity] || '🍎';
                chartTitle = `${commodityIcon} ${priceData.name} - ${getModeTitle(displayMode)} (2020-21 to 2022-23)`;
                
                const minPrices = priceData.yearly_data.map(yearData => 
                    yearData.min > 0 ? yearData.min : null
                );
                const maxPrices = priceData.yearly_data.map(yearData => 
                    yearData.max > 0 ? yearData.max : null
                );
                
                if (displayMode === 'minimum') {
                    // Show only minimum prices
                    if (minPrices.some(price => price !== null)) {
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name} - Minimum Price`,
                            data: minPrices,
                            borderColor: priceData.color || getDefaultColor(selectedCommodity),
                            backgroundColor: (priceData.color || getDefaultColor(selectedCommodity)) + '30',
                            borderWidth: 4,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 8,
                            pointHoverRadius: 12
                        });
                    }
                } else if (displayMode === 'maximum') {
                    // Show only maximum prices
                    if (maxPrices.some(price => price !== null)) {
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name} - Maximum Price`,
                            data: maxPrices,
                            borderColor: priceData.color || getDefaultColor(selectedCommodity),
                            backgroundColor: (priceData.color || getDefaultColor(selectedCommodity)) + '30',
                            borderWidth: 4,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 8,
                            pointHoverRadius: 12
                        });
                    }
                } else {
                    // **CORRECTED FILL IMPLEMENTATION** - Show both min/max with transparent area
                    if (minPrices.some(price => price !== null) && maxPrices.some(price => price !== null)) {
                        
                        // **DATASET 1**: Minimum price line (bottom boundary)
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name} - Minimum Price`,
                            data: minPrices,
                            borderColor: (priceData.color || getDefaultColor(selectedCommodity)),
                            backgroundColor: 'rgba(0,0,0,0)', // Transparent background
                            borderWidth: 3,
                            fill: false, // Don't fill this dataset
                            tension: 0.4,
                            borderDash: [8, 4],
                            pointRadius: 6,
                            pointHoverRadius: 10,
                            pointBackgroundColor: (priceData.color || getDefaultColor(selectedCommodity)),
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 2
                        });
                        
                        // **DATASET 2**: Maximum price line (top boundary) with fill to previous dataset
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name} - Maximum Price`,
                            data: maxPrices,
                            borderColor: priceData.color || getDefaultColor(selectedCommodity),
                            backgroundColor: (priceData.color || getDefaultColor(selectedCommodity)) + '30', // 30% transparency
                            borderWidth: 4,
                            fill: '-1', // **KEY**: Fill to previous dataset (minimum line)
                            tension: 0.4,
                            pointRadius: 8,
                            pointHoverRadius: 12,
                            pointBackgroundColor: priceData.color || getDefaultColor(selectedCommodity),
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 3
                        });
                    }
                }
            }
        }
        
        if (datasets.length === 0) {
            console.warn("No datasets available for price chart");
            return;
        }
        
        // Smart Y-axis scaling (keep your existing logic)
        const allValues = datasets.flatMap(dataset => 
            dataset.data.filter(value => value !== null && value > 0)
        );
        
        if (allValues.length === 0) {
            console.warn("No valid price data to display");
            return;
        }
        
        const minValue = Math.min(...allValues);
        const maxValue = Math.max(...allValues);
        const dataRange = maxValue - minValue;
        
        // Dynamic Y-axis range based on display mode
        let yAxisMin, yAxisMax;
        
        if (displayMode === 'minimum') {
            const padding = dataRange * 0.1;
            yAxisMin = Math.max(0, minValue - padding);
            yAxisMax = maxValue + padding;
        } else if (displayMode === 'maximum') {
            const padding = dataRange * 0.15;
            yAxisMin = Math.max(0, minValue - padding);
            yAxisMax = maxValue + padding;
        } else if (selectedCommodity === 'all') {
            yAxisMin = 0;
            yAxisMax = maxValue * 1.1;
        } else {
            const padding = dataRange * 0.15;
            yAxisMin = Math.max(0, minValue - padding);
            yAxisMax = maxValue + padding;
        }
        
        // **ENHANCED CHART CONFIGURATION** with proper fill plugin support
        window.priceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2020-21', '2021-22', '2022-23'],
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                // **ENABLE FILL PLUGIN**
                plugins: {
                    filler: {
                        propagate: true
                    },
                    title: {
                        display: true,
                        text: chartTitle,
                        font: { size: 18, weight: 'bold' },
                        color: 'var(--color-text)'
                    },
                    legend: { 
                        display: true, 
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed.y;
                                if (value === null || value === 0) {
                                    return `${context.dataset.label}: N/A`;
                                }
                                return `${context.dataset.label}: ₹${value.toLocaleString()}/quintal`;
                            },
                            afterBody: function(context) {
                                if (displayMode === 'range' && context.length > 1) {
                                    const validContexts = context.filter(c => c.parsed.y > 0);
                                    if (validContexts.length > 1) {
                                        const maxVal = Math.max(...validContexts.map(c => c.parsed.y));
                                        const minVal = Math.min(...validContexts.map(c => c.parsed.y));
                                        if (maxVal > minVal) {
                                            const range = maxVal - minVal;
                                            const variation = ((range) / minVal * 100).toFixed(1);
                                            return ['', `📊 Price Range: ₹${range.toLocaleString()}/quintal`, `📈 Variation: ±${variation}%`];
                                        }
                                    }
                                }
                                return [];
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: { 
                            display: true, 
                            text: '📅 Financial Year'
                        }
                    },
                    y: {
                        display: true,
                        beginAtZero: false,
                        min: yAxisMin,
                        max: yAxisMax,
                        title: { 
                            display: true, 
                            text: `💰 ${getModeTitle(displayMode)} (₹/quintal)`
                        },
                        ticks: {
                            callback: function(value) {
                                if (value >= 1000) {
                                    return '₹' + (value / 1000).toFixed(1) + 'K';
                                }
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                },
                // **CRITICAL**: Enable interaction for fill areas
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                elements: {
                    line: {
                        borderJoinStyle: 'round',
                        borderCapStyle: 'round'
                    },
                    point: {
                        hoverBorderWidth: 4
                    }
                }
            }
        });
        
        console.log(`Price chart with transparent fill created for ${selectedCommodity} in ${displayMode} mode`);
        
    } catch (error) {
        console.error("Error creating price chart:", error);
    }
}

// Helper functions (keep existing ones)
function getDataByMode(yearlyData, mode) {
    switch(mode) {
        case 'minimum':
            return yearlyData.map(yearData => yearData.min > 0 ? yearData.min : null);
        case 'maximum':
            return yearlyData.map(yearData => yearData.max > 0 ? yearData.max : null);
        case 'range':
        default:
            return yearlyData.map(yearData => yearData.max > 0 ? yearData.max : null);
    }
}

function getModeTitle(mode) {
    switch(mode) {
        case 'minimum': return 'Minimum Prices';
        case 'maximum': return 'Maximum Prices';
        case 'range': return 'Price Range';
        default: return 'Prices';
    }
}


// Price details population for ALL commodities (same as seasonality approach)
function populatePriceDetails() {
    const container = document.getElementById('price-details-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Show ALL commodities price cards (same structure as seasonality)
    Object.keys(applicationData.complete_price_trends).forEach(commodity => {
        const priceData = applicationData.complete_price_trends[commodity];
        if (priceData) {
            const priceCard = createPriceCard(priceData);
            container.appendChild(priceCard);
        }
    });
}

function createPriceCard(priceData) {
    if (!priceData || !priceData.name) {
        console.warn("Invalid price data for card creation");
        return null;
    }
    
    const card = document.createElement('div');
    card.className = 'price-card';
    card.style.borderLeft = `4px solid ${priceData.color || '#3b82f6'}`;
    
    // Calculate price statistics from yearly data
    let minPrice = Math.min(...priceData.yearly_data.filter(y => y.min > 0).map(y => y.min));
    let maxPrice = Math.max(...priceData.yearly_data.map(y => y.max));
    
    // Handle new commodities (0 values)
    if (priceData.isNewCommodity) {
        const validData = priceData.yearly_data.find(y => y.min > 0);
        if (validData) {
            minPrice = validData.min;
            maxPrice = validData.max;
        }
    }
    // Dynamic price details update function for commodity filter changes
function updatePriceDetails(selectedCommodity = 'all') {
    const container = document.getElementById('price-details-container');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    if (selectedCommodity === 'all') {
        // Show all major commodities
        const majorCommodities = ['mango', 'mosambi', 'watermelon', 'apple', 'orange', 'pomegranate', 'grapes_white', 'papaya'];
        
        majorCommodities.forEach(commodity => {
            const data = applicationData.complete_price_trends[commodity];
            if (data) {
                const card = createPriceDetailsCard(commodity, data);
                container.appendChild(card);
            }
        });
    } else {
        // Show only selected commodity
        const data = applicationData.complete_price_trends[selectedCommodity];
        if (data) {
            const card = createPriceDetailsCard(selectedCommodity, data);
            container.appendChild(card);
        }
    }
}

// Helper function to create individual price detail cards
function createPriceDetailsCard(commodity, data) {
    const card = document.createElement('div');
    card.className = 'price-card';
    card.id = `price-card-${commodity}`;
    
    const minPrice = Math.min(...data.yearly_data.map(y => y.min > 0 ? y.min : Infinity));
    const maxPrice = Math.max(...data.yearly_data.map(y => y.max));
    const priceRange = maxPrice - minPrice;
    const avgPrice = (minPrice + maxPrice) / 2;
    const variation = ((priceRange / avgPrice) * 100).toFixed(1);
    
    card.innerHTML = `
        <div class="price-card-header">
            <h5>${data.icon} ${data.name}</h5>
            <span class="trend-badge trend-${data.trend}">${data.trend.replace(/_/g, ' ')}</span>
        </div>
        <div class="price-metrics">
            <div class="price-metric">
                <label>Min Price</label>
                <div class="price-value">₹${minPrice.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label>Max Price</label>
                <div class="price-value">₹${maxPrice.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label>Price Range</label>
                <div class="price-value">₹${priceRange.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label>Variation</label>
                <div class="price-value">±${variation}%</div>
            </div>
        </div>
        <div class="price-range-indicator">
            <div class="price-range-bar" style="width: ${Math.min(100, (priceRange / maxPrice) * 100)}%; left: ${(minPrice / maxPrice) * 100}%"></div>
            <div class="price-range-tooltip">${data.name}: ₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}</div>
        </div>
        <div class="volatility-badge volatility-${data.volatility}">${data.volatility.replace(/_/g, ' ')} volatility</div>
    `;
    
    return card;
}


// Helper function to create individual price detail cards
function createPriceDetailsCard(commodity, data) {
    const card = document.createElement('div');
    card.className = 'price-card';
    card.id = `price-card-${commodity}`;
    
    const minPrice = Math.min(...data.yearly_data.map(y => y.min > 0 ? y.min : Infinity));
    const maxPrice = Math.max(...data.yearly_data.map(y => y.max));
    const priceRange = maxPrice - minPrice;
    const avgPrice = (minPrice + maxPrice) / 2;
    const variation = ((priceRange / avgPrice) * 100).toFixed(1);
    
    card.innerHTML = `
        <div class="price-card-header">
            <h5>${data.icon} ${data.name}</h5>
            <span class="trend-badge trend-${data.trend}">${data.trend.replace(/_/g, ' ')}</span>
        </div>
        <div class="price-metrics">
            <div class="price-metric">
                <label>Min Price</label>
                <div class="price-value">₹${minPrice.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label>Max Price</label>
                <div class="price-value">₹${maxPrice.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label>Price Range</label>
                <div class="price-value">₹${priceRange.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label>Variation</label>
                <div class="price-value">±${variation}%</div>
            </div>
        </div>
        <div class="price-range-indicator">
            <div class="price-range-bar" style="width: ${Math.min(100, (priceRange / maxPrice) * 100)}%; left: ${(minPrice / maxPrice) * 100}%"></div>
            <div class="price-range-tooltip">${data.name}: ₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}</div>
        </div>
        <div class="volatility-badge volatility-${data.volatility}">${data.volatility.replace(/_/g, ' ')} volatility</div>
    `;
    
    return card;
}

    const variation = minPrice > 0 ? ((maxPrice - minPrice) / minPrice * 100).toFixed(1) : 'N/A';
    
    // Get latest year data for current prices
    const latestYear = priceData.yearly_data[priceData.yearly_data.length - 1];
    const currentMin = latestYear.min > 0 ? latestYear.min : minPrice;
    const currentMax = latestYear.max > 0 ? latestYear.max : maxPrice;
    
    card.innerHTML = `
        <h5 style="color: ${priceData.color || '#3b82f6'}; margin-bottom: 12px; font-size: 1rem; font-weight: 600; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.2em;">${priceData.icon || '🍎'}</span>
            ${priceData.name}
        </h5>
        <div class="price-metrics" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
            <div class="price-metric">
                <label style="font-size: 0.8rem; color: #6b7280; display: block; margin-bottom: 4px;">3-Year Min:</label>
                <div class="price-value" style="font-weight: 600; color: #1f2937;">₹${minPrice.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label style="font-size: 0.8rem; color: #6b7280; display: block; margin-bottom: 4px;">3-Year Max:</label>
                <div class="price-value" style="font-weight: 600; color: #1f2937;">₹${maxPrice.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label style="font-size: 0.8rem; color: #6b7280; display: block; margin-bottom: 4px;">Current Min:</label>
                <div class="price-value" style="font-weight: 600; color: #1f2937;">₹${currentMin.toLocaleString()}</div>
            </div>
            <div class="price-metric">
                <label style="font-size: 0.8rem; color: #6b7280; display: block; margin-bottom: 4px;">Current Max:</label>
                <div class="price-value" style="font-weight: 600; color: #1f2937;">₹${currentMax.toLocaleString()}</div>
            </div>
        </div>
        <div style="text-align: center; padding: 8px; background: #f3f4f6; border-radius: 6px; margin-bottom: 12px;">
            <strong style="color: #374151;">Price Range: ±${variation}%</strong>
        </div>
        <div style="display: flex; gap: 8px; align-items: center; justify-content: center; flex-wrap: wrap;">
            <span class="trend-badge trend-${(priceData.trend || 'stable').replace(/_/g, '-')}">${(priceData.trend || 'stable').replace(/_/g, ' ')}</span>
            <span class="volatility-badge volatility-${(priceData.volatility || 'moderate').replace(/_/g, '-')}">${(priceData.volatility || 'moderate').replace(/_/g, ' ')}</span>
        </div>
    `;
    
    return card;
}


// Update price details for selected commodity (same logic as seasonality)
function updatePriceDetails(selectedCommodity) {
    if (selectedCommodity === 'all') {
        populatePriceDetails();
        return;
    }
    
    const container = document.getElementById('price-details-container');
    if (!container) return;
    
    const priceData = applicationData.complete_price_trends[selectedCommodity];
    if (priceData) {
        container.innerHTML = '';
        const priceCard = createPriceCard(priceData);
        container.appendChild(priceCard);
    }
}

// Create comprehensive price summary table for ALL commodities
function createPriceSummaryTable() {
    const tableContainer = document.getElementById('price-summary-table-container');
    if (!tableContainer) return;
    
    let tableHTML = `
        <table id="tbl-price-summary" class="dependency-table">
            <thead>
                <tr>
                    <th>Commodity</th>
                    <th>Price Range (₹/quintal)</th>
                    <th>Price Variation</th>
                    <th>Trend</th>
                    <th>Volatility</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    // Add ALL commodities to the table (same as seasonality approach)
    Object.keys(applicationData.complete_price_trends).forEach(commodity => {
        const priceData = applicationData.complete_price_trends[commodity];
        if (priceData) {
            const priceRange = `₹${priceData.min_price.toLocaleString()} - ₹${priceData.max_price.toLocaleString()}`;
            const variation = ((priceData.max_price - priceData.min_price) / priceData.min_price * 100).toFixed(1);
            
            // Categorize commodities based on price ranges
            let category = 'Standard';
            if (priceData.max_price > 50000) category = 'Exotic';
            else if (priceData.max_price > 10000) category = 'Premium';
            else if (['mango', 'mosambi', 'watermelon', 'apple', 'orange'].includes(commodity)) category = 'Major';
            
            tableHTML += `
                <tr style="border-left: 3px solid ${priceData.color};">
                    <td><strong style="color: ${priceData.color};">${priceData.name}</strong></td>
                    <td class="price-range">${priceRange}</td>
                    <td>±${variation}%</td>
                    <td><span class="trend-badge trend-badge-${priceData.trend.replace(/_/g, '-')}">${priceData.trend.replace(/_/g, ' ')}</span></td>
                    <td><span class="volatility-badge volatility-badge-${priceData.volatility.replace(/_/g, '-')}">${priceData.volatility.replace(/_/g, ' ')}</span></td>
                    <td><span class="category-badge category-${category.toLowerCase()}">${category}</span></td>
                </tr>
            `;
        }
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

// Initialize charts
function initializeCharts() {
  if (typeof Chart === "undefined") {
    console.warn("Chart.js not loaded");
    return;
  }
  
  try {
    drawFlowPatternCharts();
    drawSeasonalityChart();
    drawArrivalTrendsChart();
  } catch (error) {
    console.error("Error initializing charts:", error);
  }
}

// Draw flow pattern charts
function drawFlowPatternCharts() {
  const commodities = ["mango", "mosambi", "watermelon", "apple", "orange"];
  const types = ["arrivals", "dispatches"];
  
  commodities.forEach(commodity => {
    types.forEach(type => {
      const canvasId = `${commodity}_${type}_chart`;
      const canvas = document.getElementById(canvasId);
      
      if (canvas && applicationData.flow_patterns[commodity]) {
        const ctx = canvas.getContext("2d");
        const data = applicationData.flow_patterns[commodity][type];
        
        if (data && charts[canvasId]) {
          charts[canvasId].destroy();
        }
        
        if (data) {
          charts[canvasId] = new Chart(ctx, {
            type: "bar",
            data: {
              labels: ["Within Block", "Within District", "Within State", "Outside State"],
              datasets: [{
                label: `${commodity} ${type}`,
                data: [
                  data.within_block || 0,
                  data.within_district || 0,
                  data.within_state || 0,
                  data.outside_state || 0
                ],
                backgroundColor: applicationData.colors[commodity] + "80",
                borderColor: applicationData.colors[commodity],
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { callback: function(value) { return value + "%"; } }
                }
              }
            }
          });
        }
      }
    });
  });
}

// Initialize seasonality functionality
function initializeSeasonality() {
  console.log("Initializing seasonality analysis...");
  
  // Initialize the commodity selector
  const commoditySelector = document.getElementById('commodity-selector');
  if (commoditySelector) {
    commoditySelector.addEventListener('change', handleCommoditySelection);
    
    // Initialize with all commodities view
    updateSeasonalityChart('all');
    populateSeasonalitySummaryTable();
  }
}

// Handle commodity selection change
function handleCommoditySelection(event) {
  const selectedCommodity = event.target.value;
  updateSeasonalityChart(selectedCommodity);
  updateCommodityDetails(selectedCommodity);
}

// Update seasonality chart based on selection
function updateSeasonalityChart(commodityKey) {
  const ctx = document.getElementById('seasonality-chart');
  if (!ctx) return;
  
  const chartTitle = document.getElementById('seasonality-chart-title');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Destroy existing chart
  if (charts.seasonality) {
    charts.seasonality.destroy();
  }
  
  let datasets = [];
  let title = '';
  
  if (commodityKey === 'all') {
    // Show major commodities overview
    title = 'Major Commodities - Seasonal Pattern Overview';
    const majorCommodities = ['mango', 'mosambi', 'orange', 'apple', 'watermelon'];
    
    datasets = majorCommodities.map(commodity => {
      const data = applicationData.complete_seasonality[commodity];
      return {
        label: data.name,
        data: data.indices,
        borderColor: data.color,
        backgroundColor: data.color + '20',
        borderWidth: 3,
        fill: false,
        tension: 0.4
      };
    });
  } else {
    // Show selected commodity
    const commodityData = applicationData.complete_seasonality[commodityKey];
    if (commodityData) {
      title = `${commodityData.name} - Seasonal Pattern Analysis`;
      
      datasets = [{
        label: commodityData.name,
        data: commodityData.indices,
        borderColor: commodityData.color,
        backgroundColor: commodityData.color + '30',
        borderWidth: 4,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: commodityData.color,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6
      }];
    }
  }
  
  if (chartTitle) {
    chartTitle.textContent = title;
  }
  
  charts.seasonality = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        title: {
          display: false
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            usePointStyle: true,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: 'white',
          bodyColor: 'white',
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y} (Index)`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Months',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Seasonality Index',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          beginAtZero: true
        }
      }
    }
  });
}

// Update commodity details panel
function updateCommodityDetails(commodityKey) {
  const seasonText = document.getElementById('season-text');
  const peakMonthsText = document.getElementById('peak-months-text');
  
  if (commodityKey === 'all') {
    seasonText.textContent = 'Overview of all major commodities seasonal patterns';
    peakMonthsText.textContent = 'Various peak periods across different commodities';
    return;
  }
  
  const commodityData = applicationData.complete_seasonality[commodityKey];
  if (commodityData) {
    seasonText.textContent = commodityData.season;
    peakMonthsText.textContent = commodityData.peak_months.join(', ');
  }
}

// Populate seasonality summary table
function populateSeasonalitySummaryTable() {
  const tbody = document.querySelector('#tbl-seasonality-summary tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  Object.entries(applicationData.complete_seasonality).forEach(([key, commodity]) => {
    const row = document.createElement('tr');
    
    // Determine availability pattern
    const maxIndex = Math.max(...commodity.indices);
    const minIndex = Math.min(...commodity.indices);
    const variation = maxIndex - minIndex;
    
    let pattern = '';
    if (variation > 100) {
      pattern = 'Highly Seasonal';
    } else if (variation > 50) {
      pattern = 'Moderately Seasonal';
    } else {
      pattern = 'Year-round Availability';
    }
    
    row.innerHTML = `
      <td style="font-weight: var(--font-weight-semibold); color: ${commodity.color};">${commodity.name}</td>
      <td>${commodity.season}</td>
      <td style="font-weight: var(--font-weight-medium);">${commodity.peak_months.join(', ')}</td>
      <td>
        <span class="pattern-badge ${pattern.toLowerCase().replace(/\s+/g, '-')}">${pattern}</span>
      </td>
    `;
    tbody.appendChild(row);
  });
}
// Fixed initialization function for price and trends
function initializePriceAndTrends() {
    console.log("Initializing Price and Trends...");
    
    // Validate that we have price data
    if (!applicationData.complete_price_trends || Object.keys(applicationData.complete_price_trends).length === 0) {
        console.error("Price trends data missing from applicationData");
        return;
    }
    
    try {
        // Clear any existing price chart
        if (window.priceChart) {
            window.priceChart.destroy();
            window.priceChart = null;
        }
        
        // Initialize components with delay to ensure DOM is ready
        setTimeout(() => {
            populatePriceControls();
            createPriceChart('all');
            populatePriceDetails();
            createPriceSummaryTable();
            createYearwisePriceTable();
            console.log("Price and trends initialized successfully");
        }, 200);
        
    } catch (error) {
        console.error("Error initializing price tab:", error);
    }
}

// Fixed price controls population
function populatePriceControls() {
    const commoditySelect = document.getElementById('price-commodity-filter');
    if (!commoditySelect) {
        console.error("Price commodity select element not found");
        return;
    }
    
    // Clear existing options
    commoditySelect.innerHTML = '<option value="all">All Major Commodities</option>';
    
    // Add all commodities from price data
    Object.keys(applicationData.complete_price_trends).forEach(commodity => {
        const priceData = applicationData.complete_price_trends[commodity];
        if (priceData && priceData.name) {
            const option = document.createElement('option');
            option.value = commodity;
            option.textContent = priceData.name;
            commoditySelect.appendChild(option);
        }
    });
    
    // Add event listener (remove existing first)
    commoditySelect.removeEventListener('change', handlePriceChange);
    commoditySelect.addEventListener('change', handlePriceChange);
    
    console.log(`Populated ${commoditySelect.options.length - 1} price commodity options`);
}

// Fixed price selection handler
function handlePriceChange(event) {
    const selectedCommodity = event.target.value;
    console.log("Selected commodity:", selectedCommodity);
    
    try {
        createPriceChart(selectedCommodity);
        updatePriceDetails(selectedCommodity);
    } catch (error) {
        console.error("Error handling price selection:", error);
    }
}

// Enhanced price chart with functional range controls - WORKING VERSION
function createPriceChart(selectedCommodity = 'all', displayMode = 'range') {
    const canvas = document.getElementById('price-chart');
    if (!canvas) {
        console.error("Price chart canvas not found");
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart
    if (window.priceChart) {
        window.priceChart.destroy();
        window.priceChart = null;
    }
    
    let datasets = [];
    let chartTitle = '';
    
    // Icon mapping for your Batasingaram market data
    const iconMap = {
        'all': '🍇', 'mango': '🥭', 'mosambi': '🍊', 'watermelon': '🍉',
        'muskmelon': '🍈', 'papaya': '🏉', 'pineapple': '🍍', 'orange': '🍊',
        'apple': '🍎', 'pomegranate': '🔴', 'grapes_white': '🍇', 'grapes_black': '🍇',
        'ber': '🟢', 'guava': '🟢', 'plum': '🟣', 'naspathi': '🍐', 'kiwi': '🥝',
        'banana': '🍌', 'dragon_fruit': '🐲', 'fig': '🟣', 'kinnow': '🍊',
        'custard_apple': '🍎', 'sapota': '🟤', 'jack_fruit': '🟢',
        'strawberry': '🍓', 'cherry': '🍒', 'lichi': '🔴',
        'cancer_fruit': '🟢', 'dates': '🟤'
    };
    
    try {
        if (selectedCommodity === 'all') {
            // Show major commodities comparison
            const majorCommodities = ['mango', 'mosambi', 'watermelon', 'apple', 'orange'];
            chartTitle = `🍇 Batasingaram Market - ${getModeTitle(displayMode)} (2020-21 to 2022-23)`;
            
            majorCommodities.forEach(commodity => {
                const priceData = applicationData.complete_price_trends[commodity];
                if (priceData && priceData.yearly_data && Array.isArray(priceData.yearly_data)) {
                    const commodityIcon = iconMap[commodity] || '🍎';
                    const data = getPriceDataByMode(priceData.yearly_data, displayMode);
                    
                    if (data.some(val => val !== null && val > 0)) {
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name}`,
                            data: data,
                            borderColor: priceData.color || getDefaultColor(commodity),
                            backgroundColor: (priceData.color || getDefaultColor(commodity)) + '20',
                            borderWidth: 3,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 6,
                            pointHoverRadius: 10
                        });
                    }
                }
            });
        } else {
            // Single commodity analysis with selected display mode
            const priceData = applicationData.complete_price_trends[selectedCommodity];
            if (priceData && priceData.yearly_data && Array.isArray(priceData.yearly_data)) {
                const commodityIcon = iconMap[selectedCommodity] || '🍎';
                chartTitle = `${commodityIcon} ${priceData.name} - ${getModeTitle(displayMode)} Analysis (2020-21 to 2022-23)`;
                
                if (displayMode === 'minimum') {
                    // Show only minimum prices
                    const minPrices = priceData.yearly_data.map(yearData => 
                        yearData.min > 0 ? yearData.min : null
                    );
                    
                    if (minPrices.some(price => price !== null)) {
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name} - Minimum Price`,
                            data: minPrices,
                            borderColor: priceData.color || getDefaultColor(selectedCommodity),
                            backgroundColor: (priceData.color || getDefaultColor(selectedCommodity)) + '30',
                            borderWidth: 4,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 8,
                            pointHoverRadius: 12
                        });
                    }
                } else if (displayMode === 'maximum') {
                    // Show only maximum prices
                    const maxPrices = priceData.yearly_data.map(yearData => 
                        yearData.max > 0 ? yearData.max : null
                    );
                    
                    if (maxPrices.some(price => price !== null)) {
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name} - Maximum Price`,
                            data: maxPrices,
                            borderColor: priceData.color || getDefaultColor(selectedCommodity),
                            backgroundColor: (priceData.color || getDefaultColor(selectedCommodity)) + '30',
                            borderWidth: 4,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 8,
                            pointHoverRadius: 12
                        });
                    }
                } else {
                    // Show both minimum and maximum (range mode)
                    const minPrices = priceData.yearly_data.map(yearData => 
                        yearData.min > 0 ? yearData.min : null
                    );
                    const maxPrices = priceData.yearly_data.map(yearData => 
                        yearData.max > 0 ? yearData.max : null
                    );
                    
                    // Maximum price line
                    if (maxPrices.some(price => price !== null)) {
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name} - Maximum Price`,
                            data: maxPrices,
                            borderColor: priceData.color || getDefaultColor(selectedCommodity),
                            backgroundColor: (priceData.color || getDefaultColor(selectedCommodity)) + '30',
                            borderWidth: 4,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 8,
                            pointHoverRadius: 12
                        });
                    }
                    
                    // Minimum price line
                    if (minPrices.some(price => price !== null)) {
                        datasets.push({
                            label: `${commodityIcon} ${priceData.name} - Minimum Price`,
                            data: minPrices,
                            borderColor: (priceData.color || getDefaultColor(selectedCommodity)),
                            backgroundColor: (priceData.color || getDefaultColor(selectedCommodity)) + '20',
                            borderWidth: 3,
                            fill: false,
                            tension: 0.4,
                            borderDash: [8, 4],
                            pointRadius: 6,
                            pointHoverRadius: 10
                        });
                    }
                }
            }
        }
        
        if (datasets.length === 0) {
            console.warn("No datasets available for price chart");
            return;
        }
        
        // **SMART Y-AXIS SCALING** based on display mode
        const allValues = datasets.flatMap(dataset => 
            dataset.data.filter(value => value !== null && value > 0)
        );
        
        if (allValues.length === 0) {
            console.warn("No valid price data to display");
            return;
        }
        
        const minValue = Math.min(...allValues);
        const maxValue = Math.max(...allValues);
        const dataRange = maxValue - minValue;
        
        // **DYNAMIC Y-AXIS RANGE** based on display mode - THIS IS THE KEY FIX
        let yAxisMin, yAxisMax;
        
        if (displayMode === 'minimum') {
            // Tight range for minimum prices only - PREVENTS FLAT LINES
            const padding = dataRange * 0.1;
            yAxisMin = Math.max(0, minValue - padding);
            yAxisMax = maxValue + padding;
        } else if (displayMode === 'maximum') {
            // Standard range for maximum prices
            const padding = dataRange * 0.15;
            yAxisMin = Math.max(0, minValue - padding);
            yAxisMax = maxValue + padding;
        } else if (selectedCommodity === 'all') {
            // Broad range for multiple commodities
            yAxisMin = 0;
            yAxisMax = maxValue * 1.1;
        } else {
            // Optimal range for both min and max
            const padding = dataRange * 0.15;
            yAxisMin = Math.max(0, minValue - padding);
            yAxisMax = maxValue + padding;
        }
        
        // Create enhanced chart
        window.priceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2020-21', '2021-22', '2022-23'],
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: chartTitle,
                        font: { size: 18, weight: 'bold' },
                        color: 'var(--color-text)'
                    },
                    legend: { 
                        display: true, 
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed.y;
                                if (value === null || value === 0) {
                                    return `${context.dataset.label}: N/A`;
                                }
                                return `${context.dataset.label}: ₹${value.toLocaleString()}/quintal`;
                            },
                            afterBody: function(context) {
                                if (displayMode === 'range' && context.length > 1) {
                                    const validContexts = context.filter(c => c.parsed.y > 0);
                                    if (validContexts.length > 1) {
                                        const maxVal = Math.max(...validContexts.map(c => c.parsed.y));
                                        const minVal = Math.min(...validContexts.map(c => c.parsed.y));
                                        if (maxVal > minVal) {
                                            const range = maxVal - minVal;
                                            const variation = ((range) / minVal * 100).toFixed(1);
                                            return ['', `📊 Price Range: ₹${range.toLocaleString()}/quintal`, `📈 Variation: ±${variation}%`];
                                        }
                                    }
                                }
                                return [];
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: { 
                            display: true, 
                            text: '📅 Financial Year'
                        }
                    },
                    y: {
                        display: true,
                        beginAtZero: false,
                        min: yAxisMin,
                        max: yAxisMax,
                        title: { 
                            display: true, 
                            text: `💰 ${getModeTitle(displayMode)} (₹/quintal)`
                        },
                        ticks: {
                            callback: function(value) {
                                if (value >= 1000) {
                                    return '₹' + (value / 1000).toFixed(1) + 'K';
                                }
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
        
        console.log(`Price chart created for ${selectedCommodity} in ${displayMode} mode`);
        
    } catch (error) {
        console.error("Error creating price chart:", error);
    }
}

// Helper functions
function getPriceDataByMode(yearlyData, mode) {
    switch(mode) {
        case 'minimum':
            return yearlyData.map(yearData => yearData.min > 0 ? yearData.min : null);
        case 'maximum':
            return yearlyData.map(yearData => yearData.max > 0 ? yearData.max : null);
        case 'range':
        default:
            return yearlyData.map(yearData => yearData.max > 0 ? yearData.max : null);
    }
}

function getModeTitle(mode) {
    switch(mode) {
        case 'minimum': return 'Minimum Prices';
        case 'maximum': return 'Maximum Prices';
        case 'range': return 'Price Range';
        default: return 'Prices';
    }
}


// Enhanced commodity filter update function
function updatePriceChart() {
    const selectedCommodity = document.getElementById('price-commodity-filter').value || 'all';
    createPriceChart(selectedCommodity);
    
    // Update other price displays
    updatePriceCards(selectedCommodity);
    updatePriceTrends(selectedCommodity);
}

// Enhanced helper function for default colors if commodity color is missing
function getDefaultColor(commodity) {
    const defaultColors = {
        mango: '#ff8c00',
        mosambi: '#32cd32',
        watermelon: '#0fb9b1',
        muskmelon: '#17a2b8',
        papaya: '#e67e22',
        pineapple: '#f1c40f',
        orange: '#f39c12',
        apple: '#c0392b',
        pomegranate: '#c0392b',
        grapes_white: '#9b59b6',
        grapes_black: '#8e44ad',
        ber: '#daa520',
        guava: '#27ae60',
        plum: '#dda0dd',
        naspathi: '#ffb6c1',
        kiwi: '#228b22',
        banana: '#f39c12',
        dragon_fruit: '#e74c3c',
        fig: '#800080',
        kinnow: '#ffa500',
        custard_apple: '#98fb98',
        sapota: '#d2691e',
        jack_fruit: '#228b22',
        strawberry: '#ff69b4',
        cherry: '#dc143c',
        lichi: '#ff1493',
        cancer_fruit: '#ff6347',
        dates: '#8b4513'
    };
    return defaultColors[commodity] || '#3498db';
}

// Enhanced event handlers for functional price range controls - CORRECTED VERSION
document.addEventListener('DOMContentLoaded', function() {
    // Price range button handlers
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('price-range-btn')) {
            // Remove active class from all buttons
            document.querySelectorAll('.price-range-btn').forEach(btn => 
                btn.classList.remove('active'));
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Get selected mode and commodity
            const displayMode = e.target.dataset.mode;
            const commodityFilter = document.getElementById('price-commodity-filter');
            const selectedCommodity = commodityFilter ? commodityFilter.value : 'all';
            
            console.log(`Switching to ${displayMode} mode for ${selectedCommodity}`);
            
            // Re-create chart with new display mode - CORRECTED FUNCTION CALL
            createPriceChart(selectedCommodity, displayMode);
                   // **ADD THIS**: Update price details cards
            updatePriceDetails(selectedCommodity);
            
            // **ADD THIS**: Update section headers
            updatePriceDetailsHeader(selectedCommodity);

        }
    });
    
    // Commodity filter change handler - ADD THIS
    const commodityFilter = document.getElementById('price-commodity-filter');
    if (commodityFilter) {
        commodityFilter.addEventListener('change', function() {
            const activeModeBtn = document.querySelector('.price-range-btn.active');
            const displayMode = activeModeBtn ? activeModeBtn.dataset.mode : 'range';
            console.log(`Commodity changed to ${this.value} with mode ${displayMode}`);
            createPriceChart(this.value, displayMode);
        });
    }
    
    // Initialize with default selections - ADD THIS
    setTimeout(() => {
        const defaultCommodity = commodityFilter ? commodityFilter.value : 'all';
        const activeModeBtn = document.querySelector('.price-range-btn.active');
        const defaultMode = activeModeBtn ? activeModeBtn.dataset.mode : 'range';
        createPriceChart(defaultCommodity, defaultMode);
    }, 500);
});

    
    // Commodity filter change handler
    const commodityFilter = document.getElementById('price-commodity-filter');
    if (commodityFilter) {
        commodityFilter.addEventListener('change', function() {
            const activeModeBtn = document.querySelector('.price-range-btn.active');
            const displayMode = activeModeBtn ? activeModeBtn.dataset.mode : 'range';
            console.log(`Commodity changed to ${this.value} with mode ${displayMode}`);
            createPriceChart(this.value, displayMode);
        });
    }
    

// Fixed price summary table
function createPriceSummaryTable() {
    const tableContainer = document.getElementById('price-summary-table-container');
    if (!tableContainer) {
        console.error("Price summary table container not found");
        return;
    }
    
    try {
        let tableHTML = `
            <table class="dependency-table" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="padding: 12px; text-align: left; background: linear-gradient(135deg, var(--color-primary), rgba(33, 128, 141, 0.8)); color: white;">Commodity</th>
                        <th style="padding: 12px; text-align: left; background: linear-gradient(135deg, var(--color-primary), rgba(33, 128, 141, 0.8)); color: white;">Price Range (₹/quintal)</th>
                        <th style="padding: 12px; text-align: left; background: linear-gradient(135deg, var(--color-primary), rgba(33, 128, 141, 0.8)); color: white;">Variation</th>
                        <th style="padding: 12px; text-align: left; background: linear-gradient(135deg, var(--color-primary), rgba(33, 128, 141, 0.8)); color: white;">Trend</th>
                        <th style="padding: 12px; text-align: left; background: linear-gradient(135deg, var(--color-primary), rgba(33, 128, 141, 0.8)); color: white;">Volatility</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        let rowCount = 0;
        Object.keys(applicationData.complete_price_trends).forEach(commodity => {
            const priceData = applicationData.complete_price_trends[commodity];
            if (priceData && priceData.name) {
                const minPrice = priceData.min_price || 0;
                const maxPrice = priceData.max_price || 0;
                const priceRange = `₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}`;
                const variation = minPrice > 0 ? ((maxPrice - minPrice) / minPrice * 100).toFixed(1) : 'N/A';
                
                tableHTML += `
                    <tr style="border-left: 3px solid ${priceData.color || '#3b82f6'}; border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 12px;"><strong style="color: ${priceData.color || '#3b82f6'};">${priceData.name}</strong></td>
                        <td style="padding: 12px; font-family: monospace;">${priceRange}</td>
                        <td style="padding: 12px; text-align: center;">±${variation}%</td>
                        <td style="padding: 12px;"><span class="trend-badge trend-${(priceData.trend || 'stable').replace(/_/g, '-')}">${(priceData.trend || 'stable').replace(/_/g, ' ')}</span></td>
                        <td style="padding: 12px;"><span class="volatility-badge volatility-${(priceData.volatility || 'moderate').replace(/_/g, '-')}">${(priceData.volatility || 'moderate').replace(/_/g, ' ')}</span></td>
                    </tr>
                `;
                rowCount++;
            }
        });
        
        tableHTML += '</tbody></table>';
        tableContainer.innerHTML = tableHTML;
        
        console.log(`Created price summary table with ${rowCount} rows`);
        
    } catch (error) {
        console.error("Error creating price summary table:", error);
    }
}
// Fixed year-wise price table - handle commodities with incomplete data
function createYearwisePriceTable() {
    const tableContainer = document.getElementById('yearwise-price-table-container');
    if (!tableContainer) {
        console.error("Year-wise price table container not found");
        return;
    }
    
    try {
        // Complete year-wise price data for ALL commodities from your DPR
        const yearwisePriceData = {
            mosambi: {
                name: "Mosambi",
                data: [
                    { year: "2020-21", min: 493, max: 4397 },
                    { year: "2021-22", min: 557, max: 15713 },
                    { year: "2022-23", min: 875, max: 6391 }
                ],
                color: "#32cd32"
            },
            mango: {
                name: "Mango",
                data: [
                    { year: "2020-21", min: 814, max: 7313 },
                    { year: "2021-22", min: 524, max: 10294 },
                    { year: "2022-23", min: 1258, max: 13338 }
                ],
                color: "#ff8c00"
            },
            watermelon: {
                name: "Watermelon",
                data: [
                    { year: "2020-21", min: 228, max: 1822 },
                    { year: "2021-22", min: 251, max: 4482 },
                    { year: "2022-23", min: 200, max: 3746 }
                ],
                color: "#0fb9b1"
            },
            muskmelon: {
                name: "Musk Melon",
                data: [
                    { year: "2020-21", min: 455, max: 1753 },
                    { year: "2021-22", min: 425, max: 5800 },
                    { year: "2022-23", min: 500, max: 4366 }
                ],
                color: "#17a2b8"
            },
            papaya: {
                name: "Papaya",
                data: [
                    { year: "2020-21", min: 301, max: 6587 },
                    { year: "2021-22", min: 584, max: 2499 },
                    { year: "2022-23", min: 572, max: 3977 }
                ],
                color: "#e67e22"
            },
            pineapple: {
                name: "Pineapple",
                data: [
                    { year: "2020-21", min: 337, max: 3037 },
                    { year: "2021-22", min: 385, max: 3187 },
                    { year: "2022-23", min: 400, max: 4565 }
                ],
                color: "#f1c40f"
            },
            orange: {
                name: "Orange",
                data: [
                    { year: "2020-21", min: 412, max: 4977 },
                    { year: "2021-22", min: 600, max: 10115 },
                    { year: "2022-23", min: 500, max: 5617 }
                ],
                color: "#f39c12"
            },
            apple: {
                name: "Apple",
                data: [
                    { year: "2020-21", min: 2500, max: 15170 },
                    { year: "2021-22", min: 2395, max: 19387 },
                    { year: "2022-23", min: 1318, max: 15927 }
                ],
                color: "#c0392b"
            },
            pomegranate: {
                name: "Pomegranate (Anar)",
                data: [
                    { year: "2020-21", min: 800, max: 31705 },
                    { year: "2021-22", min: 976, max: 9126 },
                    { year: "2022-23", min: 1018, max: 14225 }
                ],
                color: "#c0392b"
            },
            grapes_white: {
                name: "Grapes (White)",
                data: [
                    { year: "2020-21", min: 1253, max: 3893 },
                    { year: "2021-22", min: 1180, max: 11875 },
                    { year: "2022-23", min: 1166, max: 17344 }
                ],
                color: "#9b59b6"
            },
            grapes_black: {
                name: "Grapes (Black)",
                data: [
                    { year: "2020-21", min: 1499, max: 21192 },
                    { year: "2021-22", min: 1494, max: 20000 },
                    { year: "2022-23", min: 2006, max: 6456 }
                ],
                color: "#8e44ad"
            },
            ber: {
                name: "Ber",
                data: [
                    { year: "2020-21", min: 375, max: 2207 },
                    { year: "2021-22", min: 262, max: 5000 },
                    { year: "2022-23", min: 336, max: 4000 }
                ],
                color: "#daa520"
            },
            guava: {
                name: "Guava",
                data: [
                    { year: "2020-21", min: 623, max: 4006 },
                    { year: "2021-22", min: 703, max: 3785 },
                    { year: "2022-23", min: 878, max: 4871 }
                ],
                color: "#27ae60"
            },
            plum: {
                name: "Plum",
                data: [
                    { year: "2020-21", min: 1330, max: 8697 },
                    { year: "2021-22", min: 1395, max: 13809 },
                    { year: "2022-23", min: 1788, max: 13331 }
                ],
                color: "#dda0dd"
            },
            naspathi: {
                name: "Naspathi (Pear)",
                data: [
                    { year: "2020-21", min: 1885, max: 38776 },
                    { year: "2021-22", min: 1000, max: 93764 },
                    { year: "2022-23", min: 4580, max: 30000 }
                ],
                color: "#ffb6c1"
            },
            kiwi: {
                name: "Kiwi",
                data: [
                    { year: "2020-21", min: 3061, max: 29413 },
                    { year: "2021-22", min: 4805, max: 18310 },
                    { year: "2022-23", min: 7607, max: 18471 }
                ],
                color: "#228b22"
            },
            banana: {
                name: "Banana",
                data: [
                    { year: "2020-21", min: 814, max: 10000 },
                    { year: "2021-22", min: 1000, max: 3000 },
                    { year: "2022-23", min: 3300, max: 6650 }
                ],
                color: "#f39c12"
            },
            dragon_fruit: {
                name: "Dragon Fruit",
                data: [
                    { year: "2020-21", min: 1214, max: 10979 },
                    { year: "2021-22", min: 4888, max: 15208 },
                    { year: "2022-23", min: 6250, max: 113610 }
                ],
                color: "#e74c3c"
            },
            fig: {
                name: "Fig",
                data: [
                    { year: "2020-21", min: 1000, max: 3000 },
                    { year: "2021-22", min: 1000, max: 10000 },
                    { year: "2022-23", min: 300, max: 8635 }
                ],
                color: "#800080"
            },
            kinnow: {
                name: "Kinnow",
                data: [
                    { year: "2020-21", min: 958, max: 5000 },
                    { year: "2021-22", min: 1275, max: 8175 },
                    { year: "2022-23", min: 1500, max: 11237 }
                ],
                color: "#ffa500"
            },
            custard_apple: {
                name: "Custard Apple",
                data: [
                    { year: "2020-21", min: 669, max: 5000 },
                    { year: "2021-22", min: 1000, max: 6173 },
                    { year: "2022-23", min: 1000, max: 10000 }
                ],
                color: "#98fb98"
            },
            sapota: {
                name: "Sapota",
                data: [
                    { year: "2020-21", min: 410, max: 4533 },
                    { year: "2021-22", min: 486, max: 4010 },
                    { year: "2022-23", min: 76, max: 2135 }
                ],
                color: "#d2691e"
            },
            jack_fruit: {
                name: "Jack Fruit",
                data: [
                    { year: "2020-21", min: 80, max: 10166 },
                    { year: "2021-22", min: 850, max: 12000 },
                    { year: "2022-23", min: 2400, max: 6400 }
                ],
                color: "#228b22"
            },
            strawberry: {
                name: "Strawberry",
                data: [
                    { year: "2020-21", min: 3706, max: 4569 },
                    { year: "2021-22", min: 3469, max: 11066 },
                    { year: "2022-23", min: 5607, max: 11023 }
                ],
                color: "#ff69b4"
            },
            // New commodities that started only in 2022-23 - CORRECTED DATA
            cherry: {
                name: "Cherry",
                data: [
                    { year: "2020-21", min: 0, max: 0 },
                    { year: "2021-22", min: 0, max: 0 },
                    { year: "2022-23", min: 1333, max: 24975 }
                ],
                color: "#dc143c",
                isNewCommodity: true
            },
            lichi: {
                name: "Lichi",
                data: [
                    { year: "2020-21", min: 0, max: 0 },
                    { year: "2021-22", min: 0, max: 0 },
                    { year: "2022-23", min: 2500, max: 13300 }
                ],
                color: "#ff1493",
                isNewCommodity: true
            },
            cancer_fruit: {
                name: "Cancer Fruit",
                data: [
                    { year: "2020-21", min: 0, max: 0 },
                    { year: "2021-22", min: 0, max: 0 },
                    { year: "2022-23", min: 2500, max: 6000 }
                ],
                color: "#ff6347",
                isNewCommodity: true
            },
            dates: {
                name: "Dates",
                data: [
                    { year: "2020-21", min: 0, max: 0 },
                    { year: "2021-22", min: 0, max: 0 },
                    { year: "2022-23", min: 800, max: 16100 }
                ],
                color: "#8b4513",
                isNewCommodity: true
            }
        };
        
        let tableHTML = `
            <div class="yearwise-price-header">
                <h4>📊 Complete Historical Price Analysis - All Commodities (₹/quintal)</h4>
                <p>Comprehensive year-wise minimum & maximum price data for ALL 28 commodities at Batasingaram Market (2020-21 to 2022-23)</p>
            </div>
            <table class="dependency-table">
                <thead>
                    <tr>
                        <th rowspan="2" class="commodity-header">Commodity</th>
                        <th colspan="2" class="year-header">2020-21</th>
                        <th colspan="2" class="year-header">2021-22</th>
                        <th colspan="2" class="year-header">2022-23</th>
                        <th rowspan="2" class="trend-header">Market Status</th>
                    </tr>
                    <tr>
                        <th class="price-type-header">Min (₹)</th>
                        <th class="price-type-header">Max (₹)</th>
                        <th class="price-type-header">Min (₹)</th>
                        <th class="price-type-header">Max (₹)</th>
                        <th class="price-type-header">Min (₹)</th>
                        <th class="price-type-header">Max (₹)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        // Add rows for ALL commodities with corrected trend logic
        Object.keys(yearwisePriceData).forEach(commodity => {
            const data = yearwisePriceData[commodity];
            
            // Check if this is a new commodity (started only in 2022-23)
            let trendDisplay = '';
            let statusIcon = '';
            let statusLabel = '';
            
            if (data.isNewCommodity) {
                // For new commodities, don't show misleading trends
                statusIcon = '🆕';
                statusLabel = 'NEW ENTRY';
                trendDisplay = `
                    <div class="trend-indicator trend-new">
                        ${statusIcon} ${statusLabel}
                    </div>
                    <div class="trend-label">2022-23 Debut</div>
                `;
            } else {
                // For established commodities, calculate proper trends
                const firstYearMax = data.data[0].max || 1;
                const lastYearMax = data.data[data.data.length - 1].max || 1;
                
                let trendDirection = 'stable';
                let trendPercentage = 0;
                
                if (firstYearMax > 0 && lastYearMax > 0) {
                    trendPercentage = ((lastYearMax - firstYearMax) / firstYearMax * 100).toFixed(1);
                    trendDirection = lastYearMax > firstYearMax ? 'increasing' : 
                                     lastYearMax < firstYearMax ? 'decreasing' : 'stable';
                }
                
                const trendIcon = trendDirection === 'increasing' ? '📈' : 
                                 trendDirection === 'decreasing' ? '📉' : '➡️';
                
                trendDisplay = `
                    <div class="trend-indicator trend-${trendDirection}">
                        ${trendIcon} ${Math.abs(trendPercentage)}%
                    </div>
                    <div class="trend-label">${trendDirection.toUpperCase()}</div>
                `;
            }
            
            tableHTML += `
                <tr style="border-left: 4px solid ${data.color};">
                    <td class="commodity-name-cell">
                        <strong style="color: ${data.color};">${data.name}</strong>
                    </td>
            `;
            
            // Add price data for each year
            data.data.forEach(yearData => {
                const minDisplay = yearData.min === 0 ? 'N/A' : `₹${yearData.min.toLocaleString()}`;
                const maxDisplay = yearData.max === 0 ? 'N/A' : `₹${yearData.max.toLocaleString()}`;
                
                // Only show price variation if data is available
                let variationDisplay = '';
                if (yearData.min > 0 && yearData.max > 0) {
                    const priceVariation = ((yearData.max - yearData.min) / yearData.min * 100).toFixed(1);
                    variationDisplay = `<div class="price-variation">±${priceVariation}%</div>`;
                }
                
                tableHTML += `
                    <td class="price-cell min-price">${minDisplay}</td>
                    <td class="price-cell max-price">
                        ${maxDisplay}
                        ${variationDisplay}
                    </td>
                `;
            });
            
            // Add trend/status indicator
            tableHTML += `
                    <td class="trend-cell">
                        ${trendDisplay}
                    </td>
                </tr>
            `;
        });
        
        tableHTML += `</tbody></table>`;
        
        // Add market insights
        tableHTML += `
            <div class="price-insights">
                <h5>💡 Key Market Insights from Complete Price Analysis</h5>
                <div class="insights-grid">
                    <div class="insight-card">
                        <span class="insight-title">Extreme Volatility Champion:</span>
                        <span class="insight-value">Dragon Fruit (₹1.13 lakh/quintal peak in 2022-23)</span>
                    </div>
                    <div class="insight-card">
                        <span class="insight-title">Premium Exotic Imports:</span>
                        <span class="insight-value">Naspathi (₹93,764/quintal), Kiwi (₹29,413/quintal)</span>
                    </div>
                    <div class="insight-card">
                        <span class="insight-title">Most Stable Pricing:</span>
                        <span class="insight-value">Watermelon (₹200-4,500 range consistently)</span>
                    </div>
                    <div class="insight-card">
                        <span class="insight-title">New Market Entries (2022-23):</span>
                        <span class="insight-value">Cherry, Lichi, Cancer Fruit, Dates</span>
                    </div>
                    <div class="insight-card">
                        <span class="insight-title">Premium Seasonal Fruits:</span>
                        <span class="insight-value">Strawberry, Plum, Pomegranate showing high-value positioning</span>
                    </div>
                    <div class="insight-card">
                        <span class="insight-title">International Supply Chain:</span>
                        <span class="insight-value">Apple, Orange, Kiwi, Dragon Fruit showing import patterns</span>
                    </div>
                </div>
            </div>
        `;
        
        tableContainer.innerHTML = tableHTML;
        
        console.log("Complete year-wise price table created successfully with ALL 28 commodities");
        
    } catch (error) {
        console.error("Error creating year-wise price table:", error);
    }
}

// Draw arrival trends chart
function drawArrivalTrendsChart() {
  const canvas = document.getElementById("arrival_trends_chart");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  
  if (charts.arrivals) {
    charts.arrivals.destroy();
  }
  
  const years = ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25"];
  const yearKeys = ["2019_20", "2020_21", "2021_22", "2022_23", "2023_24", "2024_25"];
  
  const datasets = Object.entries(applicationData.arrivals_by_commodity).map(([commodity, data]) => ({
    label: commodity.charAt(0).toUpperCase() + commodity.slice(1),
    data: yearKeys.map(key => data[key] || 0),
    borderColor: applicationData.colors[commodity] || "#666",
    backgroundColor: "transparent",
    borderWidth: 2,
    tension: 0.3
  }));
  
  charts.arrivals = new Chart(ctx, {
    type: "line",
    data: { labels: years, datasets: datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Arrivals (MT)" }
        }
      }
    }
  });// Add fullscreen controls to header
document.addEventListener("DOMContentLoaded", function() {
  // Add this to your existing DOMContentLoaded event
  const header = document.querySelector('.app-header .container');
  if (header) {
    const controls = document.createElement('div');
    controls.className = 'fullscreen-controls';
    controls.innerHTML = `
      <button class="fullscreen-btn active" onclick="resetView()">↔️ Split</button>
      <button class="fullscreen-btn" onclick="mapFullscreen()">🗺️ Map</button>
      <button class="fullscreen-btn" onclick="panelFullscreen()">📊 Panel</button>
    `;
    header.appendChild(controls);
  }
});

// Fullscreen functions
function mapFullscreen() {
  document.querySelector('.main-content').className = 'main-content map-fullscreen';
  updateButtons('map');
  setTimeout(() => { if(map) map.invalidateSize(); }, 100);
}

function panelFullscreen() {
  document.querySelector('.main-content').className = 'main-content sidebar-fullscreen';
  updateButtons('panel');
  setTimeout(() => { Object.values(charts).forEach(c => { try{ c.resize(); } catch(e){} }); }, 200);
}

function resetView() {
  document.querySelector('.main-content').className = 'main-content';
  updateButtons('split');
  setTimeout(() => { 
    if(map) map.invalidateSize(); 
    Object.values(charts).forEach(c => { try{ c.resize(); } catch(e){} }); 
  }, 100);
}

function updateButtons(active) {
  document.querySelectorAll('.fullscreen-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = active === 'map' ? 1 : active === 'panel' ? 2 : 0;
  document.querySelectorAll('.fullscreen-btn')[activeBtn].classList.add('active');
}
}
console.log("App.js loaded successfully");
