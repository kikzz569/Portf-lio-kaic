import './styles.css'
import CreateBy from '../../objects/createBy/indeex';
import Icons from '../../objects/icons/indeex';
import MyPortfolio from '../../objects/myportfolio/indeex';

const Header = () => (
  <header className='header'>
    <nav className='navbar'>
      <MyPortfolio />
      <Icons />
      <CreateBy />
    </nav>
  </header>
    
  );

export default Header;