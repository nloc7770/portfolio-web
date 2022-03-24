import Logo from '../logo'
import SocialIcons from '../social_icons'
import Locale from '../locale_button'
import Connect from '../connect'
import Link from '../link'

function index({ children, activeMenu = null }) {
    return (
        <div className='main-css'>
            <div className='container'>
                <Locale />
                <Logo />
                <SocialIcons />
                <Connect />
                <Link name='portfolio' />
                <div className='info'>
                    <Link name='about' />
                    <Link name='skills' />
                </div>
                {children}
            </div>
        </div>
    )
}

export default index