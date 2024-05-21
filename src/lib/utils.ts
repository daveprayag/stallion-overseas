export const validateString = (str: any, maxLength: number) => {
  if (typeof str !== "string") {
    return false;
  }
  if (str.length === 0 || str.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};
