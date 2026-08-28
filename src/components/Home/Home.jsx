import styled from 'styled-components';
import { HiLocationMarker } from 'react-icons/hi';
import { Button } from '../Button/Button';
import { images } from '../../constants/images';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 5% 80px;
  background:
    linear-gradient(to right, rgba(0, 0, 0, 0.96) 45%, rgba(0, 0, 0, 0.3)),
    url("${images.home}") center / cover no-repeat;
`;

const Content = styled.div`
  max-width: 660px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: ${({ theme }) => theme.colors.orange};
  margin: 24px 0;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.orangeGlow};
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 32px;
`;

export function Home() {
  return (
    <Section id="home">
      <Content>
        <Title>
          A praça de alimentação mais aconchegante de <span>Belo Horizonte.</span>
        </Title>
        <Divider />
        <Subtitle>
          Boa comida, bons drinks e bons momentos ao ar livre.
        </Subtitle>
        <a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwiQqeiA87SWAxUAAAAAHQAAAAAQDw..i&sca_esv=3083328332abd1ed&pvq=Cg0vZy8xMXpia3dkcTM4&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&ftid=0xa69700231d2811:0x283d8197cc38f239" target="_blank" rel="noopener noreferrer">
          <Button >
            <HiLocationMarker size={18} />
            Venha nos conhecer
          </Button>
        </a>
      </Content>
    </Section>
  );
}
