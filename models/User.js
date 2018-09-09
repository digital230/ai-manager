import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  address: Schema.Types.Mixed,
  conversationId: {type: String, required: true},
  userId: {type: String, required: true},
  name: {type: String, required: true},
  dob: {type: String},
  isGroup: Boolean,
}, {timestamps: true, collection: "users"});


UserSchema.statics.findOrCreate = function findOrCreate(cond, data, cb) {
  let self = this;

  self.findOne(cond, (err, user) => {
    if (user) {
      return cb(err, user);
    }

    if (!user) {
      self.create(data, (err, res) => {
        return cb(err, res);
      })
    }
  })
}

export default mongoose.model('User', UserSchema);
