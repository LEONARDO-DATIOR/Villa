import styled from "styled-components";
import { images } from "../../constants/images";

const Section = styled.section`
  padding: 96px 5% 112px;
  background: ${({ theme }) => theme.colors.grayDark};
`;

const Intro = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto 36px;
  text-align: left;
`;

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.05;
`;

const Description = styled.p`
  max-width: 560px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
  line-height: 1.7;
`;

const Grid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 220px;
  gap: 16px;

  @media (min-width: 769px) {
    & > figure:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 190px;
    gap: 10px;
  }
`;

const GalleryItem = styled.figure`
  position: relative;
  min-width: 0;
  margin: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.black};
  border: 1px solid rgba(255, 102, 0, 0.3);

  &::after {
    position: absolute;
    inset: 45% 0 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.78));
    content: "";
    pointer-events: none;
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
`;

const Caption = styled.figcaption`
  position: absolute;
  z-index: 1;
  right: 18px;
  bottom: 16px;
  left: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    right: 12px;
    bottom: 12px;
    left: 12px;
    font-size: 0.75rem;
  }
`;

const altTexts = [
  "Entrada do Villa Olegário à noite",
  "Mesas ao ar livre com clientes",
  "Fachada do espaço com vegetação",
  "Mesa com comida e drinks ao entardecer",
];

const captions = [
  "Uma noite para lembrar",
  "Fundo com mesas ao ar livre",
  "Seu lugar no Villa",
  "Atendimento de qualidade",
  "Nosso bar em construção"
];

export function Gallery() {
  return (
    <Section id="ambiente">
      <Intro>
        <Eyebrow>Viva o momento</Eyebrow>
        <Title>Nosso ambiente</Title>
        <Description>
          Um espaço pensado para encontros leves, bons drinks e experiências que
          ficam na memória.
        </Description>
      </Intro>
      <Grid>
        {images.gallery.map((src, index) => (
          <GalleryItem key={src}>
            <GalleryImage src={src} alt={altTexts[index]} loading="lazy" />
            <Caption>{captions[index]}</Caption>
          </GalleryItem>
        ))}
      </Grid>
    </Section>
  );
}
