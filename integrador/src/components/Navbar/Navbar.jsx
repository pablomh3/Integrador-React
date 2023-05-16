import { LogoImg, NavbarContainer, NavbarLi, NavbarUl, IniciarSesion, Carrito, ContainerUserCarrito } from "./Navbar.Styles"
import { BsCart3 } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
const Navbar =() =>{

    return(
        <NavbarContainer>
            <LogoImg>
                <img src="https://integradorjavascript-taupe.vercel.app/img/logo-nombre1.png" alt="logo" />
            </LogoImg>
            <NavbarUl>
                <NavbarLi> Home </NavbarLi>
                <NavbarLi> Club de Beneficios</NavbarLi>
                <NavbarLi>Productos</NavbarLi>
                <NavbarLi>Contacto</NavbarLi>
            </NavbarUl>
            <ContainerUserCarrito>
            <IniciarSesion> <BiUser/> Iniciá Sesión </IniciarSesion>
            <Carrito> <BsCart3/> </Carrito> 
            </ContainerUserCarrito>
            
            
        </NavbarContainer>
    )
}
export default Navbar