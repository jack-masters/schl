express = import("express")
app = express()

app.get("/", (req, res) => {
  res.send("Hello")
})

app.listen(80)
