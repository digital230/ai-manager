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


UserSchema.statics.findOrCreateOrUpdate = function findOrCreateOrUpdate(cond, data, cb) {
  let self = this;

  self.findOne(cond, (err, user) => {
    if (user) {
      self.updateOne(cond, data, {returnNewDocument: true}, (err, updatedUser) => {
        if (updatedUser) {
          self.findOne(cond, (err, res) => {
            return cb(err, res);
          });
        }
      });
    }

    if (!user) {
      self.create(data, (err, res) => {
        return cb(err, res);
      })
    }
  })
}

export default mongoose.model('User', UserSchema);
