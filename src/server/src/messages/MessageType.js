// @flow

export type Message = {
  type: string,
  payload?: Object,
  recipients?: {
    all: boolean,
  }
};
