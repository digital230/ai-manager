import CronJob from 'cron';
import mongoose from 'mongoose';


const cJob = CronJob.CronJob;

export default (bot) => {
    console.log('You will see this message every second');

  new cJob('00 30 12 * * 1-5', async () => {
    const User = mongoose.model('User');
    let users = await User.find({dob: {$exists: false}});
    for(let u of users) {
      bot.beginDialog(u.address, 'askUserInfo', {user: u.toJSON()});
    }

  },true, 'America/Los_Angeles');

}
