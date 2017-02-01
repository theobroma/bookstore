/**
 * Created by Sasha on 01.02.2017.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema ({
  img: { data: Buffer, contentType: String }
});


module.exports = mongoose.model('Avatar',schema);
