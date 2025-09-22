import { RacketDetailCard } from "@/components";
import { rackets } from "../../../../public";

type Props = {
  params: Promise<{ id: string }>;
};

const Racket = async ({ params }: Props) => {
  const { id } = await params;

  return <RacketDetailCard racket={rackets.find((item) => item.id === +id)} />;
};

export default Racket;
