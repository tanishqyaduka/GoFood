const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://tanishqyaduka:tanishq@cluster0.aag2cnw.mongodb.net/GoFoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('Connected!');
        let fetched_data = mongoose.connection.db.collection("food_items");
        let data = await fetched_data.find({}).toArray()
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        let catData = await foodCategory.find({}).toArray()
        global.food_items = data;
        global.foodCategory = catData;
    } catch (error) {
        console.log('err: ', error);
    }
};

module.exports = mongoDB;