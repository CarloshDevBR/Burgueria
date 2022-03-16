const express = require("express")
const app = express()
const port = 3001
app.use(express.json())

const requests = []

app.get("/requests/", (req, res) => {
  res.json(requests)
})

app.post("/requests/", (req, res) => {
	const { name, order } = req.body
  const newRequest = { id: Math.random(), name, order}
  
  requests.push(newRequest)
  
  res.json(newRequest)
})

app.delete("/requests/:id", (req, res) => {
  const { id } = req.params
  const index = requests.findIndex(item => item.id == id)

  requests.splice(index, 1)
  
  res.json("sucess")
})

app.listen(port,() => {
  console.log("servidor no ar")
})
