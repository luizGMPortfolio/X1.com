import './Header.css'


import Logo from '../../assets/Logo.png'


const Header = () => {
  return (
    <header className='header'>
        <div className='logoBox'>
            <img src={Logo} alt="" />
        </div>
        <div className='YellowBase'>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </header>
  )
}

export default Header