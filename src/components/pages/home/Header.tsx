import logo from 'assets/images/logo.png';
import { Button } from 'components/core';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from 'service/Service';

const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    if (getCurrentUser() !== 0) {
      logout();
    }
    navigate('/login');
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Techanic" />
      </Link>
      <Button type="button" onClick={onClick} color="primary">
        {getCurrentUser() === 0 ? 'Login' : 'Logout'}
      </Button>
    </header>
  );
};

export default Header;
