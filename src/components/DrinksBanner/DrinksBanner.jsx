import styled from 'styled-components';
import { FaCocktail } from 'react-icons/fa';
import { Button } from '../Button/Button';

const Section = styled.section`
  padding: 0 5% 80px;
`;

const Banner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 40px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.orangeGlow};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
  }
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.orange};
  filter: drop-shadow(0 0 12px ${({ theme }) => theme.colors.orangeGlow});
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  text-transform: uppercase;
  margin-bottom: 8px;

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
`;

export function DrinksBanner() {
  return (
    <Section id="eventos">
      <Banner>
        <IconWrapper>
          <FaCocktail />
        </IconWrapper>
        <Content>
          <Title>
            <span>Drinks</span> que combinam
          </Title>
          <Subtitle>
            Chame os amigos e aproveite nosso happy hour!
          </Subtitle>
        </Content>
        <Button href="#drinks">Ver drinks &gt;</Button>
      </Banner>
    </Section>
  );
}
