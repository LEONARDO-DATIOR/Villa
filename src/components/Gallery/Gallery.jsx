import styled from 'styled-components';
import { images } from '../../constants/images';

const Section = styled.section`
  padding: 0 5% 80px;
`;

const Grid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.orange};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const altTexts = [
  'Entrada do Villa Olegário à noite',
  'Mesas ao ar livre com clientes',
  'Fachada do espaço com vegetação',
  'Mesa com comida e drinks ao entardecer',
];

export function Gallery() {
  return (
    <Section id="ambiente">
      <Grid>
        {images.gallery.map((src, index) => (
          <GalleryImage
            key={src}
            src={src}
            alt={altTexts[index]}
            loading="lazy"
          />
        ))}
      </Grid>
    </Section>
  );
}
