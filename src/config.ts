import configJson from "./auth_config.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  domain: configJson.domain,
  clientId: configJson.clientId,
  username: configJson.username,
  password: configJson.password,
};
