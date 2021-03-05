"use strict";

const axios = require("axios");
const url = 'https://integration-api.tangocard.com/raas/v2/orders'
const key = 'UUFQbGF0Zm9ybTI6YXBZUGZUNkhOT05wRFJVajNDTEdXWXQ3Z3ZJSE9OcERSVVlQZlQ2SGo='

class TangoCardController {
  async orderCard({ request, response }) {
    const order = request.body
    // console.log('ORDEEEER')
    // console.log(order)
    
    try {
      let responseData = await axios.post(url, order, {
        headers: {
          Authorization: `Basic ${key}`,
        },
      })
      .then((data) => {
        // console.log("RESPONSE DATA BELOW");
        // console.log(data.data);
        return data.data
      })
      .catch((error) => {
        // console.log("EEERRROOOOOOOOOOORRRRR");
        // console.log(error);
        return error.message
      });

      return response.send(responseData)

    } catch(error) {
      let responseError
      responseError = error
      console.log(responseError)
    }
  }

  baseUrl({ response }) {
    return response.send('Looooool')
  }
}

module.exports = TangoCardController;
