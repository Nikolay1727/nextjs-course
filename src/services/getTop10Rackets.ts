import { BASE_URL, ERROR_500, RacketType, Response } from "@/shared";

export const getTop10Rackets = async (): Promise<Response<RacketType[]>> => {
  const result = await fetch(`${BASE_URL}/top-10`);

  if (!result.ok) {
    return { ...ERROR_500 };
  }

  const data: RacketType[] = await result.json();

  return { isError: false, data };
};
