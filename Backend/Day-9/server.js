const mongoose = require('mongoose');
const main = async() =>{
    try{
    const connection = mongoose.connect('mongodb://127.0.0.1:27017/emteyaj_DB');
    
    console.log("DB connected");
    const userData = new mainModel(
        {
            name:"emteyaj",
            age: 25,
            married: false
        },
        
    )
   // await userData.save();

   const data= await mainModel.find({age:25});
   console.log("Data" ,data);
   await(await connection).disconnect();
    console.log('DB is disconnected');
} catch (error) {
    console.log('DB is not connected');
    console.log('error',error);
    
}
};

const mainSchema = new mongoose.Schema({
    name: String,
    age: Number,
    married: Boolean,
},
{
    versionKey: false,
});

const mainModel = new mongoose.model('user', mainSchema);

main();