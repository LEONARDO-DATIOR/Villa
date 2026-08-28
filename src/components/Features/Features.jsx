import styled from 'styled-components';
import { FaHamburger, FaGlassCheers, FaMusic, FaUsers } from 'react-icons/fa';

const Section = styled.section`
  padding: 80px 5%;
  background: ${({ theme }) => theme.colors.black};
`;

const Grid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 16px;
  filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.orangeGlow});
`;

const Title = styled.h3`
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const features = [
  {
    icon: FaHamburger,
    title: 'SABORES PARA TODOS',
    text: 'Diversas opções para todos os gostos.',
  },
  {
    icon: FaGlassCheers,
    title: 'AMBIENTE AO AR LIVRE',
    text: 'Espaço ao ar livre, acolhedor e cheio de boas energias.',
  },
  {
    icon: FaMusic,
    title: 'MÚSICA AO VIVO',
    text: 'Programação especial para animar seus dias.',
  },
  {
    icon: FaUsers,
    title: 'PARA TODOS OS MOMENTOS',
    text: 'Encontros, celebrações e momentos únicos.',
  },
];

export function Features() {
  return (
    <Section id="sobre">
      <Grid>
        {features.map(({ icon: Icon, title, text }) => (
          <Item key={title}>
            <IconWrapper>
              <Icon />
            </IconWrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Item>
        ))}
      </Grid>
    </Section>
  );
}
