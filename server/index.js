
const fs = require("fs")
const express = require("express")
const app = express()
const request = require("request")
const cors = require("./cors.middleware")

const host = "127.0.0.1"
const port = 3002
const requestHTTP = "https://api.simpleswap.io/v1/get_all_currencies?api_key=1eb05f06-53ae-4e11-a34a-a66bc963d9fc"


const jsonParser = express.json()
const filePath = "allCurrencies.json"

app.use(express.static(__dirname + "/public"))
app.use(cors)

const writeFile = () => {
    try {
        request(requestHTTP, (err, response, body) => {
            if (err) return res.status(500).send({ message: err })
            let data = JSON.stringify(body)
            fs.writeFileSync("allCurrencies.json", data)
        })
        return new Promise((res, rej)=>{
            setTimeout(()=> res("response"), 6000)
        })
        }catch(e) {
            console.log(e)
        }
    }

app.get("/api/currencies", function (req, res) {
    const content = fs.readFileSync(filePath, "utf8")
    const currencies = JSON.parse(content)
    return res.send(currencies)
})


const updateFile = async () => {
    try {
        app.post("/api/currencies", jsonParser, function (req, res) {
            let data = fs.readFileSync(filePath, "utf8")
            let currs = JSON.parse(data)
            res.send(currs)
        })
        return new Promise((res, rej) => {
            setTimeout(() => res("response"), 60000)
        })
    } catch (e) {
        console.log(e)
    }
}

updateFile()
writeFile()

app.listen(port, host, () => {
    console.log(`server start at ${port}`)
})