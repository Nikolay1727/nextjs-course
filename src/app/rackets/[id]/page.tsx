import { RacketDetailPage } from "@/components";
import { rackets } from "../../../../public";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return rackets.slice(0, 3).map((racket) => {
    return { id: String(racket.id) };
  });
}

const Racket = async ({ params }: Props) => {
  const { id } = await params;

  return <RacketDetailPage racket={rackets.find((item) => item.id === +id)} />;
};

export default Racket;
