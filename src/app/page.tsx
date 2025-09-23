import { MainPage } from "@/components";
import { rackets } from "../../public";

const Page = () => {
  return <MainPage rackets={rackets.slice(0, 3)} />;
};

export default Page;
