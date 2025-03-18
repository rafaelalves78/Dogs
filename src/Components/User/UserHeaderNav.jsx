import React from 'react';
import { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
//icones
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
//css
import styles from './UserHeaderNav.module.css';

import useMedia from '../../Hooks/useMedia';
import { useState } from 'react';
import { useEffect } from 'react';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={handleLogout}>
          {mobile && 'Sair'}
          <Sair />
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
