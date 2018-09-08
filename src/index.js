import * as builder from 'botbuilder';

export default (connector) => {
  const inMemoryStorage = new builder.MemoryBotStorage();

  const bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
  }).set('storage', inMemoryStorage);

}
