
import {Prompts} from "botbuilder/lib/botbuilder";
import UserService from '../services/user';

export default (bot) => {
  bot.dialog('welcome', [
    (session) => {
      session.endDialog(`hi! ${session.userData.name} have a nice day`);
    }
  ])
}
