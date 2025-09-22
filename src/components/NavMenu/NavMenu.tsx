"use client";
import { usePathname } from "next/navigation";
import { Container, StyledLink } from "./styles";
import { PATH } from "@/shared";

export const NavMenu = () => {
  const pathname = usePathname();

  return (
    <Container>
      <StyledLink data-is-active={pathname === PATH.base} href={PATH.base}>
        Главная
      </StyledLink>
      <StyledLink
        data-is-active={pathname === PATH.rackets}
        href={PATH.rackets}
      >
        Ракетки
      </StyledLink>
    </Container>
  );
};
