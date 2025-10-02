"use client";
import { Container, Title } from "./styles";
import { ButtonLink } from "@/ui";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  href: string;
  linkTitle: ReactNode;
  icon?: ReactNode;
}

export const MainSectionHeader = ({
  title,
  href,
  linkTitle,
  icon = "↗",
}: Props) => (
  <Container>
    <Title>{title}</Title>
    <ButtonLink href={href} icon={icon} title={linkTitle} />
  </Container>
);
