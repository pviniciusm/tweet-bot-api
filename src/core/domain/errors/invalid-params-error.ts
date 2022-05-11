export class InvalidParamsError extends Error {
  constructor() {
    super('Parametros invalidos');
    this.name = 'InvalidParamsError';
  }
}
