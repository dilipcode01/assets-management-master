import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../assets/svg/avatar.svg';
import { Button, Container, HeaderCard, MenuButton, Navbar } from './layouts/styled';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (path) => {
    history(path);
    setMenuOpen(false);
  };

  return (
    <Container>
      <HeaderCard>
        <img
          src={Avatar}
          alt="Profile"
          className="rounded-full"
          style={{ borderRadius: '50%' }}
        />
        <h2 className="text-xl font-bold"><span className='text-[#4F46E5]'>In</span>AI</h2>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
      </HeaderCard>
      <Navbar open={menuOpen} className='!flex-row gap-3 mt-3'>
        <Button onClick={() => navigateTo('/')}>Portfolio Dashboard</Button>
        <Button onClick={() => navigateTo('/assets-balance')}>Assets Balance</Button>
      </Navbar>
    </Container>
  );
}

export default Header;
