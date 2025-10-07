import { RacketDetailPage, SuspenseWrapper } from "@/components";
import { getMetaRacketById } from "@/services";
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
  const { data, isError } = await getMetaRacketById({ id });

  if (isError) {
    throw new Error("error");
  }

  if (!data) {
    return notFound();
  }

  return (
    <SuspenseWrapper>
      <RacketDetailPage id={id} />
    </SuspenseWrapper>
  );
};

export default Racket;
