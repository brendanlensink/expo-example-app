import { LOCAL_API_URL, PRODUCTION_API_URL, STAGING_API_URL } from "@env";

export enum Environment {
  PRODUCTION = "PRODUCTION",
  STAGING = "STAGING",
  LOCAL = "LOCAL",
}

export interface EnvironmentState {
  name: Environment;
  apiUrl: string;
}

const localState = {
  apiUrl: LOCAL_API_URL,
  name: Environment.LOCAL,
};

const stagingState = {
  apiUrl: STAGING_API_URL,
  name: Environment.STAGING,
};

const productionState = {
  apiUrl: PRODUCTION_API_URL,
  name: Environment.PRODUCTION,
};

export class EnvService {
  static _shared: EnvService | null = null;

  _env = stagingState;

  static current(): EnvService {
    if (EnvService._shared === null) {
      EnvService._shared = new EnvService();
    }

    return this._shared!;
  }

  static env(): EnvironmentState {
    return this.current().getEnv();
  }

  setEnv(env: Environment) {
    switch (env) {
      case Environment.LOCAL:
        this._env = localState;
        break;
      case Environment.STAGING:
        this._env = stagingState;
        break;
      case Environment.PRODUCTION:
        this._env = productionState;
        break;
    }
  }

  private getEnv() {
    return this._env;
  }
}
