import { getRacketById } from "@/services";
import Image from "next/image";
import { notFound } from "next/navigation";

export const RacketDetailPage = async ({ id }: { id: string }) => {
  const { data, isError } = await getRacketById({ id });

  if (isError) {
    throw new Error("error");
  }

  if (!data) {
    return notFound();
  }

  return (
    <div>
      <div>
        <div>{data.name}</div>
        <div>{data.description}</div>
      </div>
      <Image src={data.imageUrl} alt="" height={500} width={350} />
      <div>
        <div>{data.price}</div>
      </div>
    </div>
  );
};
