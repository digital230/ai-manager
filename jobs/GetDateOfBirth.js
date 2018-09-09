import CronJob from 'cron';
import mongoose from 'mongoose';


const cJob = CronJob.CronJob;

export default (bot) => {
  const str = '00 30 12 * * 1-5';
  new cJob(str, async () => {
    const User = mongoose.model('User');
    let users = await User.find({dob: {$exists: false}});
    for(let u of users) {
      let clone = {...u.toJSON()};
      if (clone.isGroup == true) {
        clone.isGroup = false;
        delete clone.address['conversation'];
      }
      bot.beginDialog(clone.address, 'askUserInfo', {user: clone});
    }

  },true, 'America/Los_Angeles');

}
