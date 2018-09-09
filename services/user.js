import mongoose from 'mongoose';

class UserService {

  get() {
    const User = mongoose.model('User');

    return {User};
  }


  saveUser = ({address}) => {
    const {User}= this.get();
    const {user, conversation} = address;

    let data = {
      address: {
        ...address
      },
      userId: user.id,
      name: user.name,
      conversationId: conversation.id,
      isGroup: conversation.isGroup || false
    }
    return new Promise ((resolve, reject) => {
      User.findOrCreate({userId: data.userId}, data, (err, res) => {
        if (err) reject(err)
        else resolve(res);
      })
    }).catch(err => console.log(err))
  }


  updateUser = (user) => {
    const {User}= this.get();

    User.updateOne({_id: user._id}, user, (err,res) => {
      if (err) console.log(err);
      else console.log(res);
    })
  }
}


export default new UserService();
