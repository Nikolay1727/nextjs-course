import { RacketCardsBox } from "@/components";
import { getRackets } from "@/services";
import { notFound } from "next/navigation";

const Rackets = async () => {
  const { isError, data } = await getRackets({ limit: 20 });

  if (isError) {
    return "error";
  }

  if (!data) {
    return notFound();
  }

  return <RacketCardsBox rackets={data} />;
};

export default Rackets;
