import styled from "styled-components";
import { FaCarSide, FaMusic } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";

const Section = styled.section`
  padding: 96px 5% 104px;
  background: ${({ theme }) => theme.colors.grayDark};
  scroll-margin-top: 88px;
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Intro = styled.div`
  max-width: 640px;
  margin-bottom: 40px;
  text-align: left;
`;

const Eyebrow = styled.span`
  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const EventCard = styled.article`
  overflow: hidden;
  border: 1px solid rgba(255, 211, 91, 0.2);
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.black};
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.orange};
  }
`;

const CardArtwork = styled.div`
  position: relative;
  display: flex;
  min-height: 190px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.orange};
  background:
    radial-gradient(circle at 50% 115%, rgba(255, 211, 91, 0.2), transparent 55%),
    linear-gradient(135deg, #292419, #11100d 70%);

  &::before,
  &::after {
    position: absolute;
    width: 180px;
    height: 180px;
    border: 1px solid rgba(255, 211, 91, 0.12);
    border-radius: 50%;
    content: "";
  }

  &::before {
    transform: scale(1.35);
  }

  &::after {
    transform: scale(1.8);
  }
`;

const EventIcon = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  width: 84px;
  height: 84px;
  place-items: center;
  border: 1px solid rgba(255, 211, 91, 0.5);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  font-size: 2.25rem;
  filter: drop-shadow(0 0 12px ${({ theme }) => theme.colors.orangeGlow});
`;

const CardBody = styled.div`
  padding: 24px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const EventType = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const EventTitle = styled.h3`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.35rem;
  line-height: 1.25;
`;

const EventDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  line-height: 1.65;
`;

const events = [
  {
    title: "Encontro de carros antigos",
    type: "Encontro especial",
    description:
      "Um ponto de encontro para admirar clássicos, trocar histórias e aproveitar bons momentos na Villa.",
    icon: FaCarSide,
  },
  {
    title: "Sertanejo na Villa",
    type: "Toda quarta-feira",
    description:
      "As quartas-feiras ganham clima sertanejo para reunir os amigos e curtir a noite juntos.",
    icon: FaMusic,
  },
];

export function Eventos() {
  return (
    <Section id="eventos">
      <Content>
        <Intro>
          <Eyebrow>Encontros que fazem parte da Villa</Eyebrow>
          <Title>Eventos na Villa</Title>
          <Description>
            Da paixão por carros clássicos ao sertanejo de quarta-feira, sempre
            tem um bom motivo para se encontrar por aqui.
          </Description>
        </Intro>
        <Grid>
          {events.map(({ title, type, description, icon: Icon }) => (
            <EventCard key={title}>
              <CardArtwork aria-hidden="true">
                <EventIcon>
                  <Icon />
                </EventIcon>
              </CardArtwork>
              <CardBody>
                <EventType>
                  <HiCalendar aria-hidden="true" />
                  {type}
                </EventType>
                <EventTitle>{title}</EventTitle>
                <EventDescription>{description}</EventDescription>
              </CardBody>
            </EventCard>
          ))}
        </Grid>
      </Content>
    </Section>
  );
}