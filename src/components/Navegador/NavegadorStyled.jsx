import styled from "styled-components";

export const Contenidor = styled.div`
  background-color: ${({ theme }) => theme.colors.fonsFosc};
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.divisor};
  border-width: 0.1rem 0;

  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
  }

  li {
    text-align: center;
    padding: 1rem 1.75rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.divisor};
    border-width: 0 0.1rem;
  }

  li:nth-child(1) {
    width: 8rem;
  }

  li:nth-child(2) {
    width: 10.5rem;
  }

  .link {
    display: inline;
    text-align: center;
    text-decoration: none;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.deshabilitat};
  }

  .link:hover {
    color: ${({ theme }) => theme.colors.lletraGlobal};
    font-weight: 500;
  }

  .actiu {
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.voraBlava};
  }

  .actiu .link {
    color: ${({ theme }) => theme.colors.lletraGlobal};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.amplada.movil}) {
    .link {
      font-size: 1rem;
    }

    li {
      padding: 0.75rem 1rem;
    }

    li:nth-child(1) {
      width: 6rem;
    }

    li:nth-child(2) {
      width: 8rem;
    }
  }
`;
