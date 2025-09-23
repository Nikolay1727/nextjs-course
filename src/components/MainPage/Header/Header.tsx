import { PATH } from "@/shared";
import { Container, Title } from "./styles";
import { ButtonLink } from "@/ui";

export const Header = () => (
  <Container>
    <Title>Ракетки</Title>
    <ButtonLink href={PATH.rackets} icon="↗" title="Все" />
  </Container>
);
