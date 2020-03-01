import mongoose, { ConnectionOptions } from "mongoose";

import config from "./config/config";

const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose.connect(config.DB.URI, dbOptions)

const connection = mongoose.connection

connection.once('open', () => {
    console.log('>> mongodb stableshed');
    
})

connection.on('error', err => {
    console.log('>> mongodb  err');
})