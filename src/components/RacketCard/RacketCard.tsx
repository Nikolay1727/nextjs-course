import { PATH, RacketType } from "@/shared";
import { Container, ImageBox, NameBox, StyledLink } from "./styles";

export const RacketCard = ({ racket }: { racket: RacketType }) => {
  return (
    <StyledLink href={`${PATH.rackets}/${racket.id}`}>
      <Container>
        <ImageBox src={racket.imageUrl} />
        <NameBox>{racket.name}</NameBox>
      </Container>
    </StyledLink>
  );
};
