"use client";
import { RacketType } from "@/shared";
import { Container } from "./styles";
import { RacketCard } from "../RacketCard/RacketCard";

interface Props {
  rackets: RacketType[];
}

export const RacketCardsBox = ({ rackets }: Props) => {
  return (
    <Container>
      {rackets.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </Container>
  );
};
