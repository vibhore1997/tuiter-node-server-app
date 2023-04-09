import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
    userName: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    dislikes: Number,
    replies: Number,
    retuits: Number,
    tuit: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;