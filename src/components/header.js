import { React } from 'react';
import { HeaderPage } from './headerPage';
import { HeaderHome } from './headerHome';
import { Nav } from './nav';
import { useLocation } from 'react-router';
import { MobileMenu } from './navMobile';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container as ContainerDefault } from './styles';

export const Header = () => {
  const { pathname } = useLocation();
  const data = useSelector((state) => {
    return state.homeData;
  });

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderLogo>
            <a href='/'>
              {data?.logo?.url ? (
                <LogoImage src={data?.logo?.url} alt='Logo' />
              ) : null}
            </a>
          </HeaderLogo>
          <Nav />
        </Container>
      </HeaderStyled>

      {pathname === '/' ? <HeaderHome /> : <HeaderPage />}
      <MobileMenu />
    </>
  );
};

export const HeaderStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.81);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  z-index: 2;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const HeaderLogo = styled.div`
  padding: 10px 0;
  max-width: 105px;
  max-height: 80px;
  object-fit: contain;
  img {
    height: 100%;
  }
`;

const LogoImage = styled.img`
  height: 80px;
`;
const Container = styled(ContainerDefault)`
  display: flex;
  justify-content: space-between;
`;
