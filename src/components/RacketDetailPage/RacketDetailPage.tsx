"use client";
import { RacketType } from "@/shared";
import {
  BoldText,
  Container,
  Description,
  ImageBox,
  LeftContent,
  RightContent,
} from "./styles";

export const RacketDetailPage = ({ racket }: { racket?: RacketType }) => {
  if (!racket) return null;

  return (
    <Container>
      <LeftContent>
        <BoldText>{racket.name}</BoldText>
        <Description>{racket.description}</Description>
      </LeftContent>
      <ImageBox src={racket.imageUrl} />
      <RightContent>
        <BoldText>{racket.price}</BoldText>
      </RightContent>
    </Container>
  );
};
