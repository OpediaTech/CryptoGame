const landData = [
  {
    land: "hill",
    image:
      "https://images.unsplash.com/photo-1642520174981-5d6449f24e4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    property: [
      {
        name: "Mountain Land",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: true,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
      {
        name: "Mountain Land",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: false,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
      {
        name: "Mountain Land",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: false,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
    ],
  },
  {
    land: "Mountain",
    image:
      "https://images.unsplash.com/photo-1545145940-f6419b5512d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    property: [
      {
        name: "Mountain Land",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: true,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
      {
        name: "Forest Trans",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: true,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
      {
        name: "River Tade",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: false,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
    ],
  },
  {
    land: "Trager",
    image:
      "https://images.unsplash.com/photo-1588599037678-3131ff026fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    property: [
      {
        name: "Mountain Land",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: true,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
      {
        name: "Hill Land",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: false,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
      {
        name: "playground Land",
        LandAttack: 10,
        AirAttack: 20,
        thumbnail: "",
        status: true,
        StatMultiplier: "1.3",
        LeafGeneration: "40,000",
        Underground: "10",
      },
    ],
  },
];

const raidData = [
  {
    name: "Multiplier - 1.4",
    color: "#f7d51d",
    icon: "../assets/Crypto/LandIcon.png",
  },
  {
    name: "Land - 10 (x1.3) -> 13",
    color: "#92cc41",
    icon: "../assets/Crypto/LandIcon.png",
  },
  {
    name: "Air - 9 (x1.3) -> 11.7",
    color: "#f71d3a",
    icon: "../assets/Crypto/LandIcon.png",
  },
  {
    name: "Underground - 4(x1.3) -> 5.2",
    color: "#d5a884",
    icon: "../assets/Crypto/LandIcon.png",
  },
];

export { landData, raidData };
