import {
  BASE_URL,
  ERROR_404,
  ERROR_500,
  MetaRacketType,
  Response,
} from "@/shared";

interface MetaRacketResponse {
  product: MetaRacketType;
}

interface Props {
  id: string;
}

export const getMetaRacketById = async ({
  id,
}: Props): Promise<Response<MetaRacketType>> => {
  const result = await fetch(`${BASE_URL}/meta/product/${id}`);

  if (result.status === 404) {
    return { ...ERROR_404 };
  }

  if (!result.ok) {
    return { ...ERROR_500 };
  }

  const data: MetaRacketResponse = await result.json();

  return { isError: false, data: data.product };
};
