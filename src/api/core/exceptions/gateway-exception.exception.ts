export class GatewayException {
  name: string;

  message: string;

  code?: string;

  stack?: string;

  constructor(name: string, message: string, code?: string, stack?: string) {
    this.name = name;
    this.message = message;
    this.code = code;
    this.stack = stack;
  }
}
