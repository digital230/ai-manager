
export default (bot) => {
  bot.dialog('sendNamazAlert', [
    (session, args) => {
      const {user, p} = args;
      session.endDialog(`hi! ${user.name} ${p.title} is stating in 20 minutes. about ${p.value}`)
    }
  ])
}
