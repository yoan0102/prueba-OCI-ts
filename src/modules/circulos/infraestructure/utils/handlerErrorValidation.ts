
export const HandlerErrorValidate = ( message: string) => {
  const error = new Error();
  error.message = message;
  throw error;
 }