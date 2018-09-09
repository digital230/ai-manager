import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  address: Schema.Types.Mixed,
  conversationId: {type: String, required: true},
  userId: {type: String, required: true},
  name: {type: String, required: true},
  isGroup: Boolean,
}, {timestamps: true, collection: "users"});


export default mongoose.model('User', UserSchema);
