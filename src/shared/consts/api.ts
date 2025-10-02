import { Response } from "../types";

export const BASE_URL = "http://localhost:4000/api";

export const ERROR_404: Response<undefined> = {
  isError: false,
  data: undefined,
};

export const ERROR_500: Response<undefined> = {
  isError: true,
  data: undefined,
};
