import styled from "styled-components";
import { Button } from "../Button/Button";
import { images } from "../../constants/images";

const Section = styled.section`
  padding: 80px 5%;
`;

const Grid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  grid-template-rows: auto auto;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 24px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  text-transform: uppercase;
  margin-bottom: 16px;

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 24px;
  font-size: 1rem;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 2px solid ${({ theme }) => theme.colors.orange};
`;

const Thumbs = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.orange};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const thumbs = [
  { src: images.burger, alt: "Hambúrguer com batatas" },
  { src: images.pizza, alt: "Pizza com queijo derretido" },
  { src: images.sushi, alt: "Bowl de sushi" },
  { src: images.milkshake, alt: "Milkshake de chocolate" },
];

export function Gastronomy() {
  return (
    <Section id="gastronomia">
      <Grid>
        <TextBlock>
          <Title>
            Conheça nossos <span>restaurantes.</span>
          </Title>
          <Description>
            Conheça os restaurantes que fazem parte da nossa praça de
            alimentação.
          </Description>
          <h3>Conheça </h3>
          {images.logos.map((src, index) => {
            <img src={src} alt="Logo parceiro" />;
          })}
          <Button href="#cardapio">Conheça nosso cardápio &gt;</Button>
        </TextBlock>
        <MainImage src={images.gastronomiaMain} alt="Prato especial" />
        <Thumbs>
          {thumbs.map(({ src, alt }) => (
            <Thumb key={alt} src={src} alt={alt} loading="lazy" />
          ))}
        </Thumbs>
      </Grid>
    </Section>
  );
}
