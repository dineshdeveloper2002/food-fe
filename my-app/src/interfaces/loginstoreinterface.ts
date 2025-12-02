import { Action } from "easy-peasy";

export interface Loginstoreinterface {
  name: string;
  setusername: Action<Loginstoreinterface, string>;  // takes a string as payload
  password: string;
  setpassword: Action<Loginstoreinterface,string>;          // takes no payload
}

