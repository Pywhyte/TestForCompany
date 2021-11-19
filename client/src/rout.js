import axios from "axios"

export default class CurrService {
  static async currencies() {
    const res = await axios.get("http://localhost:3002/api/currencies", {
    })
    return res.data
  }
}