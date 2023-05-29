import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 15px;
  box-sizing: border-box;
  z-index: 2;
`;
export const SectionTitle = styled.h3`
  margin-top: 10vh;
  position: relative;
  display: block;
  padding: 25px 0;
  margin-bottom: -60px;
  font-weight: 500;
  font-size: 34px;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  z-index: 2;
  ::before {
    position: absolute;
    content: '';
    width: 50vw;
    height: 100%;
    border-radius: 0 10px 10px 0;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: linear-gradient(
      91.27deg,
      rgba(255, 255, 255, 0.6) 0.13%,
      rgba(255, 255, 255, 0) 118.17%
    );
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    z-index: -1;
    right: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
