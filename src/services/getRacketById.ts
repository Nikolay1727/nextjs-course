import { BASE_URL, ERROR_404, ERROR_500, RacketType, Response } from "@/shared";

interface RacketResponse {
  product: RacketType;
}

interface Props {
  id: string;
}

export const getRacketById = async ({
  id,
}: Props): Promise<Response<RacketType>> => {
  const result = await fetch(`${BASE_URL}/product/${id}`);

  if (result.status === 404) {
    return { ...ERROR_404 };
  }

  if (!result.ok) {
    return { ...ERROR_500 };
  }

  const data: RacketResponse = await result.json();

  return { isError: false, data: data.product };
};
