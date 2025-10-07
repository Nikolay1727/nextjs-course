import {
  BASE_URL,
  ERROR_500,
  RacketType,
  Response,
  REVALIDATE_TAG,
} from "@/shared";

export const getTop10Rackets = async (): Promise<Response<RacketType[]>> => {
  const result = await fetch(`${BASE_URL}/top-10`, {
    next: { tags: [REVALIDATE_TAG.getTop10Rackets] },
  });

  if (!result.ok) {
    return { ...ERROR_500 };
  }

  const data: RacketType[] = await result.json();

  return { isError: false, data };
};
