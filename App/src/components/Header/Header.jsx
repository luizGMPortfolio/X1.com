import './Header.css'

import Base1 from '../../assets/HeaderBase1.png'
import Base2 from '../../assets/HeaderBase2.png'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <header className='header'>
        <div className='logoBox'>
            <img src={Logo} alt="" />
        </div>
        <button></button>
        <img src={Base1} alt="" className='base1'/>
        <img src={Base2} alt="" className='base2'/>
    </header>
  )
}

export default Header