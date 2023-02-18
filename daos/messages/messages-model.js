import mongoose from "mongoose";
import MessageSchema from "./messages-schema.js";
//create MessageModel to interact with mongoose database
//name of model can be used as ref name in another Schema
const MessageModel = mongoose.model('MessageModel', MessageSchema);
export default MessageModel;