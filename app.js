const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(async (req, res, next) => {
  const user = await User.findById("64d08438f8fe3e56d421889b");
  req.user = user;
  next();
  // User.findById('64d08198441cd24ef6878f97')
  //   .then(user => {
  //     req.user = new User(user.name, user.email, user.cart, user._id);
  //     next();
  //   })
  //   .catch(err => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect("mongodb://127.0.0.1:27017/shop")
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        console.log("MONGODB CONNECTED");
        // Create a new user
        const user = new User({
          name: "John Doe",
          email: "jde@gmail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000, () => {
      console.log("LISTENING ON PORT 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });


