import askUserInfo from './askUserInfo';
import welcome from './welcome';

export default (bot) => {
  askUserInfo(bot);
  welcome(bot)
}
