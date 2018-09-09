import * as builder from 'botbuilder';
import UserService from '../services/user';

//dialogs


export default (connector) => {
  const inMemoryStorage = new builder.MemoryBotStorage();

  const bot = new builder.UniversalBot(connector, async function (session) {
    let user = await UserService.saveUser(session.message);
    if (user && user.name == '' || user.name == 'User') {
      session.userData = {...user._doc};
      session.beginDialog('askUserInfo')
    }
    // session.send("You said: %s", session.message.text);
  }).set('storage', inMemoryStorage);

  return bot;

}
