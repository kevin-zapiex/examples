const axios = require("axios");

const config = {
  headers: { "x-api-key": "replace-your-api-key-here" }
};
const body = {
  productId: "4000673338890"
};

(async () => {
  const result = await axios.post(
    "https://api.zapiex.com/v1/products",
    body,
    config
  );
  console.log(result);
})();
