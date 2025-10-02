import {
  MainPage,
  MainSection,
  MainSectionContent,
  MainSectionHeader,
  SuspenseWrapper,
} from "@/components";
import { getRackets, getTop10Rackets } from "@/services";
import { PATH } from "@/shared";
import { notFound } from "next/navigation";

const Page = async () => {
  const racketsPromise = getRackets({});
  const top10RacketsPromise = getTop10Rackets();

  const [
    { isError: isRacketsError, data: rackets },
    { isError: isTop10Rackets, data: top10Rackets },
  ] = await Promise.all([racketsPromise, top10RacketsPromise]);

  if (isRacketsError || isTop10Rackets) {
    return "error";
  }

  if (!rackets || !top10Rackets) {
    return notFound();
  }

  return (
    <MainPage>
      <SuspenseWrapper>
        <MainSection>
          <MainSectionHeader
            title="Ракетки"
            href={PATH.rackets}
            linkTitle="Все"
          />
          <MainSectionContent rackets={rackets} />
        </MainSection>
      </SuspenseWrapper>
      <SuspenseWrapper>
        <MainSection>
          <MainSectionHeader
            title="Топ-10 ракеток"
            href={PATH.top10Rackets}
            linkTitle="Топ-10"
          />
          <MainSectionContent rackets={top10Rackets} />
        </MainSection>
      </SuspenseWrapper>
    </MainPage>
  );
};

export default Page;
