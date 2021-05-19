import { logger } from "react-native-logs";
import Constants from "expo-constants";

class Clog {
  log: any;

  constructor() {
    this.log = logger.createLogger();

    // Set up Sentry or whatever crash detection you're using here.
    // Then, you'll want to add breadcrumbs for fatal and error logs like so:
    //  if (Constants.isDevice) {
    //   Sentry.addBreadcrumb({
    //     level: Sentry.Severity.Fatal,
    //     message: message,
    //   });
    // }
  }

  fatal = (message: string) => {
    this.log.error(message);
    throw new Error(message);
  };

  error = (message: string) => {
    this.log.error(message);
  };

  warn = (message: string) => {
    this.log.warn(message);
  };

  info = (message: string) => {
    this.log.info(message);
  };

  debug = (message: string) => {
    this.log.debug(message);
  };
}

export const clog = new Clog();
