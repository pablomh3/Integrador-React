import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
flex-wrap: nowrap;
display: flex;
height: 130px;
justify-content: space-around;
align-items: center;
gap: 0px;
padding: 0px 30px 0px 20px;
position: fixed;
top: 0;
overflow: hidden;
background-color: var(--negro);
`
export const LogoImg = styled.div`
cursor: pointer;
transition: all 0-2s;
:hover{
    transform: scale(1.01);
}
`
export const NavbarUl = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
background-color: var(--negro);
gap: 10px;
font-family: 'Geostar Fill', cursive;
font-size: 18px; 
width: 50%;
`
export const NavbarLi = styled.li`
font-weight: 800;
background: linear-gradient(to left, var(--magenta), var(--cyan));
background-clip: text;
-webkit-background-clip: text;
color: transparent;
transition: all 0.5s;
cursor: pointer;

:hover{
    transform: scale(1.0);
    color: var(--blanco);
}
`
export const ContainerUserCarrito = styled.div`
display: flex;
align-item: center;
gap: 40px;

`
export const IniciarSesion = styled.span `
font-weight: 800;
font-size: 14px;
display: flex;
gap: 5px;
justify-content: center;
align-items: center;
background-clip: text;
background: white;
-webkit-background-clip: text;
color: var(--blanco);
transition: all 0.5s;
cursor: pointer;


:hover{
    transform: scale(1.0);
    color: var(--magenta);
}
`
export const Carrito = styled.div `
padding: 12px 18px;
border-radius: 10px;
transition: all 0.4s;
border: 1px solid var(--magenta);

:hover{
    background-color: var(--blanco);
    transform: scale(1.0);
    color: var(--magenta);
    font-weight: 800;
}
`