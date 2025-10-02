import { BASE_URL, ERROR_500, RacketType, Response } from "@/shared";

interface Props {
  page?: number;
  limit?: number;
}

export const getRackets = async ({
  page = 1,
  limit = 10,
}: Props): Promise<Response<RacketType[]>> => {
  const result = await fetch(
    `${BASE_URL}/products?page=${page}&limit=${limit}`
  );

  if (!result.ok) {
    return { ...ERROR_500 };
  }

  const data: RacketType[] = await result.json();

  return { isError: false, data };
};
