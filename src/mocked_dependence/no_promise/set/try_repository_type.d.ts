export type ErrorCallback = (error?: Error) => void;

export interface DataHandler {
  delete(id: number, callback: ErrorCallback): Promise<ErrorCallback | void>;
}

export default class Repository implements DataHandler {
  constructor();
  delete: (
    id: number,
    callback: ErrorCallback
  ) => Promise<ErrorCallback | void>;
}
