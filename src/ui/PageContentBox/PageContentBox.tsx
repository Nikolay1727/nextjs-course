"use client";
import { ReactNode } from "react";
import { Container, ContentBox } from "./styles";

export const PageContentBox = ({ children }: { children: ReactNode }) => (
  <Container>
    <ContentBox>{children}</ContentBox>
  </Container>
);
