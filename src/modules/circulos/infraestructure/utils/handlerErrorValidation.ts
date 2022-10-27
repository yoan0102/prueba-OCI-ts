
export const HandlerErrorValidate = (status: number, message: string) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  throw error;
 }