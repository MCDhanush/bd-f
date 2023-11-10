const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://dhanushmc93:KHbRaPqQUNqS48A9@cluster0.xjm8on6.mongodb.net";

mongoose.set("strictQuery", false);

// approach 3
const mongoDB = async () => {
  await mongoose.connect(
    mongoURL,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("...", err);
      else {
        console.log("db connected");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodcategory = await mongoose.connection.db.collection(
            "foodcategory"
          );
          foodcategory.find({}).toArray(async function (err, catdata) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodcategory = catdata;
              // console.log(global.food_items);
            }
          });
        });
      }
    }
  );
};

module.exports = mongoDB;
