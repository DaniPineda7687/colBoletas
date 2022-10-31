/*Importar los estilos del header*/
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
export default function Header(){
    const [menuVisible, setStateMenu] = useState(false);
    const handlerMenu = ()=>{
        return menuVisible ? setStateMenu(false) : setStateMenu (true);
    }
    return(
        <header className='header__container'>
            <section className='header__btn__menu'>
                <i class="bi bi-list" onClick={handlerMenu}></i>
            </section>
            <figure className='header__logo'>
                <Link to="/">
                    <img src="https://www.passline.com/imagenes/logo-passline.png" alt="Logo de ColBoletas" />
                </Link>
            </figure>
            <nav className={`nav__container ${menuVisible ? "" : "disabled"}`}>
                <section className='nav__menu__header'>
                    <section className='header__btn__menu'>
                        <i class="bi bi-x" onClick={handlerMenu}></i>
                    </section>
                    <figure className='nav__logo'>
                        <Link to="/">
                            <img src="https://www.passline.com/imagenes/logo-passline.png" alt="Logo de ColBoletas" />
                        </Link>
                    </figure>
                </section>
                <ul className='nav__menu__container'>
                    <li><Link to="#" className='nav__menu--link'><i class="bi bi-house-door-fill"></i><span>Inicio</span></Link></li>
                    <li><Link to="#" className='nav__menu--link'><i class="bi bi-star-fill"></i><span>Iniciar sesión</span></Link></li>
                    <li><Link to="#" className='nav__menu--link'><i class="bi bi-person-plus-fill"></i><span>Registrate</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}