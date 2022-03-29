import Logo from '../logo'
import SocialIcons from '../social_icons'
import Locale from '../locale_button'
import Connect from '../connect'
import MenuMobile from '../MenuMobile'
import Link from '../link'
import { useApp } from '../../contexts/AppProvider';

function DefaultLayout({ children, activeMenu = null }) {
    const { setShowMenuMobile,isShowMenuMobile } = useApp();
    return (
        <div className='main-css'>
            <div className='container'>
                <Locale />
                <Logo />
                {isShowMenuMobile==true? <MenuMobile />:null}
               
                <SocialIcons />
                <Link name='portfolio' />
                <div className='info'>
                    <Link name='about' />
                    <Link name='skills' />
                </div>
                {children}

                <div className='menu'>
                    <a onClick={() => {
                        
                        setShowMenuMobile(true)
                    }}> <img src="/image/menu.png" alt="Menus" style={{ width: 26 }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout