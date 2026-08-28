import styled from 'styled-components';

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  background: transparent;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.black};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.orangeGlow};
  }
`;

export function Button({ href, children, ...props }) {
  return (
    <StyledButton href={href} {...props}>
      {children}
    </StyledButton>
  );
}
