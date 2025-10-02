import { RacketDetailPage } from "@/components";
import { getRacketById } from "@/services";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const Racket = async ({ params }: Props) => {
  const { id } = await params;
  const { isError, data } = await getRacketById({ id });

  if (isError) {
    return "error";
  }

  if (!data) {
    return notFound();
  }

  return <RacketDetailPage racket={data} />;
};

export default Racket;
