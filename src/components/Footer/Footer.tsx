"use client";
import { PageTitle } from "@/ui";
import { Container, InfoText, TitleBox } from "./styles";

export const Footer = () => (
  <Container>
    <TitleBox>
      <PageTitle title="tennis store" />
    </TitleBox>
    <InfoText>© 2025 Tennis Store. All rights reserved.</InfoText>
  </Container>
);
