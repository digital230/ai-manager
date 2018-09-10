import askUserInfo from './askUserInfo';
import welcome from './welcome';
import NamazAlert from './sendNamazAlert';

export default (bot) => {
  askUserInfo(bot);
  welcome(bot);
  NamazAlert(bot)
}
