"use client";
import { Container } from "./styles";

export const PageTitle = ({ title }: { title: string }) => (
  <Container>{title.toUpperCase()}</Container>
);
