const mongoose = require('mongoose');
const Auth = require('./schema/auth-schema');
require('dotenv').config();


const promoteToAdmin = async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const result = await Auth.updateOne(
        {email: 'mezy@admin.com'}, 
        {$set: {role: 'admin'}}
    );

    console.log(result);
    await mongoose.disconnect();
}

promoteToAdmin();