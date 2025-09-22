"use client";
import { PageTitle } from "@/ui";
import { Container, MenuBox, TitleBox } from "./styles";
import { NavMenu } from "../NavMenu";

export const Header = () => {
  return (
    <Container>
      <TitleBox>
        <PageTitle>tennis store</PageTitle>
      </TitleBox>
      <MenuBox>
        <NavMenu />
      </MenuBox>
    </Container>
  );
};
