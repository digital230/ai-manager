const rp = require('request-promise');
const cheerio = require('cheerio');
import CronJob from 'cron';
import mongoose from 'mongoose';

import {structure} from '../utils/constants'


const cJob = CronJob.CronJob;

export default (bot) => {
  const str = '00 01 * * 1-5';
  new cJob(str, async () => {
    const Store = mongoose.model('Store');
    let namaz = await Store.findOne({_id: '0'});
    let prayers = [];
    console.log('namaz')

    const options = {
      uri: `https://www.islamicfinder.org/world/pakistan/1172451/lahore-prayer-times/`,
      transform: function (body) {
        return cheerio.load(body);
      }
    };

    rp(options)
      .then(($) => {
          $('#monthly-prayers')
          .find('.row-today')
          .children('td')
          .each((i, el) => {
            let obj = {
              title: structure[i],
              value:  $(el).text()
            }
            prayers.push(obj);
          });
          if (namaz) {
            Store.updateOne({_id: '0'}, {title: 'Namaz', data: prayers}, (err, res) => {
              if (err) console.log(err, 'update');
              else console.log(res, 'update')
            })
          } else {
            Store.create({_id: '0', title:'Namaz', data: prayers}, (err, res) => {
              if (err) console.log(err);
              else console.log(res)
            })
          }
      })
      .catch((err) => {
        console.log('err');
    });

  },true, 'America/Los_Angeles');

}

