import * as builder from 'botbuilder';


export default () => {
  console.log(process.env.MicrosoftAppId)
  const connector = new builder.ChatConnector({
      appId: process.env.MicrosoftAppId,
      appPassword: process.env.MicrosoftAppPassword
  });

  return connector;
}

