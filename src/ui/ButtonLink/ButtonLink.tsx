"use client";
import { ReactNode } from "react";
import { StyledButtonLink } from "./styles";

interface Props {
  href: string;
  title: string;
  icon?: ReactNode;
}

export const ButtonLink = ({ href, title, icon }: Props) => (
  <StyledButtonLink href={href}>
    <span>{title}</span>
    {icon && <span>{icon}</span>}
  </StyledButtonLink>
);
