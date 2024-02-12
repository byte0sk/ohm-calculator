const BASE_PATH = "/api/resistance";

const manager = {
  /// <summary>
  /// Calculates the Ohm value of a resistor based on the band colors.
  /// </summary>
  /// <param name="bandAColor">The color of the first figure of component value band.</param>
  /// <param name="bandBColor">The color of the second significant figure band.</param>
  /// <param name="bandCColor">The color of the decimal multiplier band.</param>
  /// <param name="bandDColor">The color of the tolerance value band.</param>
  calculate: async ({ bandA, bandB, bandC, bandD }) => {
    try {
      if (!bandA || !bandB || !bandC || !bandD) {
        throw new Error("Invalid color code");
      }

      const firstDigit = bandA.significantFigure;
      const secondDigit = bandB.significantFigure;
      const multiplier = bandC.multiplier;
      const tolerance = bandD.tolerance;

      const resistanceValue = (firstDigit * 10 + secondDigit) * multiplier;

      let formattedResult = resistanceValue;

      if (resistanceValue >= 1000000000) {
        formattedResult = `${(resistanceValue / 1000000000).toFixed(2)} GΩ`;
      } else if (resistanceValue >= 1000000) {
        formattedResult = `${(resistanceValue / 1000000).toFixed(2)} MΩ`;
      } else if (resistanceValue >= 1000) {
        formattedResult = `${(resistanceValue / 1000).toFixed(2)} KΩ`;
      }

      return `${formattedResult} ±${tolerance}`;
    } catch (e) {
      console.log("calculate - error: ", e.message);
      return "Calculation Error";
    }
  },
  getColors: async () => {
    try {
      const apiResponse = await fetch(BASE_PATH).then((response) =>
        response.json()
      );
      return apiResponse;
    } catch (e) {
      console.log("getColors - error", e.message);
      return Promise.reject(e);
    }
  },
};

export default manager;
