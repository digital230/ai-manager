import * as builder from 'botbuilder';
import UserService from '../services/user';

export default (connector) => {
  const inMemoryStorage = new builder.MemoryBotStorage();

  const bot = new builder.UniversalBot(connector, async function (session) {
    let user = await UserService.saveUser(session.message);
    console.log(user)
    if (user && (user.name == '' || user.name == 'User')) {
      session.userData = {...user.toJSON()};
      session.beginDialog('askUserInfo')
    }

    if (user && user.name != "" && user.name != 'User') {
      session.userData = {...user.toJSON()};
      session.beginDialog('welcome')
    }
  }).set('storage', inMemoryStorage);

  return bot;

}
