import React from 'react';

import LogoImg from '../../assets/svg/webmotors.svg';
import { Container, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Logo src={LogoImg} alt="Logo Webmotors" />
    </Container>
  );
}

export default Header;
