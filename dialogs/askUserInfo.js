
import {Prompts} from "botbuilder/lib/botbuilder";
import UserService from '../services/user';


export default (bot) => {
  bot.dialog('askUserInfo', [
    (session) => {
      Prompts.text(session, 'Hi! What is your name?');
    },
    (session, result) => {
      const {userData} = session;
      const {response} = result;
      userData.name = response;
      Prompts.text(session, `'Hi!' ${response} 'What is your date of birth?'`);
    },
    async (session, result) => {
      const {userData} = session;
      const {response} = result;
      userData.dob = response;
      let user = await UserService.updateUser(userData)
      session.endDialog();
    }

  ])
}
