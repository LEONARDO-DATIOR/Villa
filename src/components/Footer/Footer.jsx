import styled from 'styled-components';
import { HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.grayDark};
  padding: 60px 5% 24px;
`;

const Columns = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border: 3px double ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange};
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.orangeGlow};
  line-height: 1.2;
`;

const ColumnTitle = styled.h4`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 12px;
`;

const ColumnText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.orange};
    transition: filter 0.2s;

    &:hover {
      filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.orangeGlow});
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  border-top: 1px solid #333;
  padding-top: 24px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export function Footer() {
  return (
    <FooterWrapper id="contato">
      <Columns>
        <div>
          <Logo>
            VILLA
            <br />
            Olegário
          </Logo>
        </div>
        <div>
          <ColumnTitle>Onde estamos</ColumnTitle>
          <ColumnText>
            <HiLocationMarker size={16} />
            Rua Olegário Maciel, 123, Centro – Olegário/MG
          </ColumnText>
        </div>
        <div>
          <ColumnTitle>Horário de funcionamento</ColumnTitle>
          <ColumnText>
            <HiClock size={16} />
            Todos os dias, 10h às 23h
          </ColumnText>
        </div>
        <div>
          <ColumnTitle>Siga-nos</ColumnTitle>
          <SocialLinks>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://wa.me" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </SocialLinks>
        </div>
      </Columns>
      <Copyright>
        © 2024 Villa Olegário – Todos os direitos reservados.
      </Copyright>
    </FooterWrapper>
  );
}
