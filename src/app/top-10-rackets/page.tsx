import { RacketCardsBox } from "@/components";
import { getTop10Rackets } from "@/services";
import { notFound } from "next/navigation";

const Top10Rackets = async () => {
  const { isError, data = [] } = await getTop10Rackets();

  if (isError) {
    return "error";
  }

  if (!data) {
    return notFound();
  }

  return <RacketCardsBox rackets={data} />;
};

export default Top10Rackets;
