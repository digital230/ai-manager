
import {Prompts} from "botbuilder/lib/botbuilder";
import UserService from '../services/user';


export default (bot) => {
  bot.dialog('askUserInfo', [
    (session, args, next) => {
      if (args) {
        session.userData = {...args.user};
        next();
      } else {
        Prompts.text(session, 'Hi! What is your name?');
      }
    },
    (session, result) => {
      if (result && result.response) {
        session.userData.name = result.response;
      }
      let {userData} = session;
      Prompts.text(session, `'Hi!' ${userData.name} 'What is your date of birth?'`);
    },
    async (session, result) => {
      if (result && result.response) {
        session.userData.dob = result.response;
      }
      let {userData} = session;
      let user = await UserService.updateUser(userData)
      session.endDialog('Thanks.');
    }

  ])
}
