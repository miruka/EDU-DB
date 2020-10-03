const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware BASE Routes
app.get("/", (req, res) => {
  res.status(200).json({
    Message: "We are GOOD to GO!!!!!!!",
  });
});

//Creater Sever and Liistening PORT
app.listen(process.env.PORT || 3000, () => {
  console.log(`SERVER Listening  on PORT ${process.env.PORT || 3000}`);
});
