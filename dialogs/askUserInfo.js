
import {Prompts} from "botbuilder/lib/botbuilder";
import UserService from '../services/user';


export default (bot) => {
  bot.dialog('askUserInfo', [
    (session, args, next) => {
      if (args) {
        session.userData = args.user;
        next();
      } else {
        const {userData} = session;
        Prompts.text(session, 'Hi! What is your name?');
      }
    },
    (session, result) => {
      console.log('arfddd', result)
      if (result && result.response) {
        userData.name = response;
      }
      const {userData} = session;

      console.log(userData, 'args...........')
      Prompts.text(session, `'Hi!' ${userData.name} 'What is your date of birth?'`);
    },
    async (session, result) => {
      const {userData} = session;
      const {response} = result;
      userData.dob = response;
      let user = await UserService.updateUser(userData)
      session.endDialog('Thanks.');
    }

  ])
}
