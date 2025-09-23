"use client";
import { PATH, RacketType } from "@/shared";
import {
  Container,
  RacketImage,
  RacketImageBox,
  RacketName,
  StyledLink,
} from "./styles";

export const RacketBigCard = ({ racket }: { racket: RacketType }) => (
  <StyledLink href={`${PATH.rackets}/${racket.id}`}>
    <Container>
      <RacketImageBox>
        <RacketImage src={racket.imageUrl} />
      </RacketImageBox>
      <RacketName>{racket.name}</RacketName>
    </Container>
  </StyledLink>
);
