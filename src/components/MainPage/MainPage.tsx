"use client";
import { RacketType } from "@/shared";
import { Header } from "./Header";
import { Content } from "./Content";

interface Props {
  rackets: RacketType[];
}

export const MainPage = (props: Props) => {
  return (
    <>
      <Header />
      <Content {...props} />
    </>
  );
};
