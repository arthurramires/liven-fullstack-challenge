import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/liven.jpeg';
import { Container, Cart } from './styles';

const Header = (): JSX.Element => {

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="LivenChart" width={100}/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
