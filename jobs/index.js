import dobJob from './GetDateOfBirth';
import NamazJob from './NamazStore';
import NamazBotJob from './NamazBotJob';

export default (bot) => {
  dobJob(bot);
  NamazJob(bot);
  NamazBotJob(bot);
}
