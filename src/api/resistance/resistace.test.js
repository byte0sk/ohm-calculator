import resistance from "./index";

const defColors = [
  {
    displayName: "No Color",
    color: "transparent",
    code: "",
    significantFigure: null,
    multiplier: null,
    tolerance: 20,
  },
  {
    displayName: "Pink",
    color: "#c44fa1",
    code: "PK",
    significantFigure: null,
    multiplier: 0.001,
    tolerance: null,
  },
  {
    displayName: "Silver",
    color: "#a3a3a3",
    code: "SR",
    significantFigure: null,
    multiplier: 0.01,
    tolerance: 10,
  },
  {
    displayName: "Gold",
    color: "#c79d14",
    code: "GD",
    significantFigure: null,
    multiplier: 0.1,
    tolerance: 5,
  },
  {
    displayName: "Black",
    color: "#1c1c1c",
    code: "BK",
    significantFigure: 0,
    multiplier: 1,
    tolerance: null,
  },
  {
    displayName: "Brown",
    color: "#594b3e",
    code: "BN",
    significantFigure: 1,
    multiplier: 10,
    tolerance: 1,
  },
  {
    displayName: "Red",
    color: "#c73e32",
    code: "RD",
    significantFigure: 2,
    multiplier: 100,
    tolerance: 2,
  },
  {
    displayName: "Orange",
    color: "#e67330",
    code: "OG",
    significantFigure: 3,
    multiplier: 1000,
    tolerance: 0.05,
  },
  {
    displayName: "Yellow",
    color: "#f2d938",
    code: "YE",
    significantFigure: 4,
    multiplier: 10000,
    tolerance: 0.02,
  },
  {
    displayName: "Green",
    color: "#23ad27",
    code: "GN",
    significantFigure: 5,
    multiplier: 100000,
    tolerance: 0.5,
  },
  {
    displayName: "Blue",
    color: "#232aad",
    code: "BU",
    significantFigure: 6,
    multiplier: 1000000,
    tolerance: 0.25,
  },
  {
    displayName: "Violet",
    color: "#8123ad",
    code: "VT",
    significantFigure: 7,
    multiplier: 10000000,
    tolerance: 0.1,
  },
  {
    displayName: "Grey",
    color: "#7a7a7a",
    code: "GY",
    significantFigure: 8,
    multiplier: 100000000,
    tolerance: 0.01,
  },
  {
    displayName: "White",
    color: "white",
    code: "WH",
    significantFigure: 9,
    multiplier: 1000000000,
    tolerance: null,
  },
];

describe("Testing Calculator", () => {
  const tests = [
    {
      bands: { bandA: null, bandB: null, bandC: null, bandD: null },
      expected: "Calculation Error",
    },
    {
      bands: { bandA: "YE", bandB: "GY", bandC: "RD", bandD: "GD" },
      expected: "4.80 KΩ ±5",
    },
    {
      bands: { bandA: "GY", bandB: "GY", bandC: "RD", bandD: "GD" },
      expected: "8.80 KΩ ±5",
    },
    {
      bands: { bandA: "OG", bandB: "YE", bandC: "BN", bandD: "OG" },
      expected: "340 ±0.05",
    },
    {
      bands: { bandA: "YE", bandB: "GY", bandC: "GY", bandD: "GD" },
      expected: "4.80 GΩ ±5",
    },
    {
      bands: { bandA: "BU", bandB: "GY", bandC: "RD", bandD: "GD" },
      expected: "6.80 KΩ ±5",
    },
    {
      bands: { bandA: "BN", bandB: "VT", bandC: "YE", bandD: "RD" },
      expected: "170.00 KΩ ±2",
    },
  ];

  for (const t of tests) {
    const bandA = defColors.find((x) => x.code === t.bands.bandA);
    const bandB = defColors.find((x) => x.code === t.bands.bandB);
    const bandC = defColors.find((x) => x.code === t.bands.bandC);
    const bandD = defColors.find((x) => x.code === t.bands.bandD);

    test(`${bandA?.displayName}, ${bandB?.displayName}, ${bandC?.displayName}, ${bandD?.displayName} => "${t.expected}"`, async () => {
      const result = await resistance.calculate({
        bandA,
        bandB,
        bandC,
        bandD,
      });
      console.log("result: ", result);
      expect(result).toBe(t.expected);
    });
  }
});
