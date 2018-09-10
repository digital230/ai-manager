import CronJob from 'cron';
import mongoose from 'mongoose';
import moment from 'moment';


const cJob = CronJob.CronJob;

export default (bot) => {
  const str = '00 */30 * * * 1-5';
  new cJob(str, async () => {
    const Store = mongoose.model('Store');
    const User = mongoose.model('User');
    let users = await User.find({});

    let namaz = await Store.findOne({_id: '0'});
    let cTime = Date.parse(`01/01/2011 ${moment().format('hh:mm A')}`)
    let cUTime = Date.parse(`01/01/2011 ${moment().add(20, 'minutes').format('hh:mm A')}`)
    let noInd = ['day', 'iDate', 'date', 'sunrise'];

    if (namaz) {
      const {data = []} = namaz.toJSON();
      let nTime = data.find((d) => {
        let dt = Date.parse(`01/01/2011 ${d.value}`)
        if(!noInd.includes(d.title) && (dt >= cTime && dt<= cUTime)) {
          return d;
        }
      });

      console.log(nTime, 'lll');
      if (nTime) {
        for(let u of users) {
          let c = {...u.toJSON()}
          bot.beginDialog(c.address, 'sendNamazAlert', {user: c, p: nTime});
        }
      }

    }


  },true, 'America/Los_Angeles');

}

