import logo from '../assets/logo.png';
import classess from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classess.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
