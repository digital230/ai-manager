import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  _id: {type: String, required: true},
  title: {type: String, required: true},
  data: {type: Array},
}, {timestamps: true, collection: "stores"});


// UserSchema.statics.findOrCreateOrUpdate = function findOrCreateOrUpdate(cond, data, cb) {
//   let self = this;

//   self.findOne(cond, (err, user) => {
//     if (user) {
//       self.updateOne(cond, data, {returnNewDocument: true}, (err, updatedUser) => {
//         if (updatedUser) {
//           self.findOne(cond, (err, res) => {
//             return cb(err, res);
//           });
//         }
//       });
//     }

//     if (!user) {
//       self.create(data, (err, res) => {
//         return cb(err, res);
//       })
//     }
//   })
// }

export default mongoose.model('Store', StoreSchema);
