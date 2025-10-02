"use client";
import { RacketType } from "@/shared";
import { Container } from "./styles";
import { RacketBigCard } from "@/components/RacketBigCard";

interface Props {
  rackets: RacketType[];
}

export const MainSectionContent = ({ rackets }: Props) => (
  <Container>
    {rackets.map((racket) => (
      <RacketBigCard key={racket.id} racket={racket} />
    ))}
  </Container>
);
