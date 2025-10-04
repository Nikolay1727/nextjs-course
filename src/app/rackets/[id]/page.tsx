import { RacketDetailPage } from "@/components";
import { getMetaRacketById, getRacketById } from "@/services";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;

  const { data } = await getMetaRacketById({ id });

  if (!data) {
    return {
      title: `Racket - ${id}`,
    };
  }

  return {
    title: data.name,
    description: data.description,
  };
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
