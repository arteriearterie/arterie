import React from 'react'
import styled from "@emotion/styled";

const Logo = styled("span")`
    font-family: 'Vollkorn', serif;
    font-size: 35px;
    color: black;
`;

const NavBarWrapper = styled("div")`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 2px solid black;
    z-index: 2;
`

const NavItemsWrapper = styled("nav")`
    display: flex;
`

const NavItem = styled("span")`
    font-family: 'Manrope', sans-serif;
    font-size: 19px;
    color: black;
    padding-right: 50px;

    a {
        color: black;
        text-decoration: none;
    }
`

const navItems =
    [["Cos'è un MVP", "/mvp"],
    ["Questionario", "/questionario"],
    ["Scopri di più", "/more"]]

export default function NavBar() {
    return (
        <NavBarWrapper>
            <Logo>A.</Logo>
            <NavItemsWrapper>
                {navItems.map((item) => {
                    return (

                        <NavItem>
                            <a href={item[1]}>
                                {item[0]}
                            </a>
                        </NavItem>

                    )
                })}
            </NavItemsWrapper>
        </NavBarWrapper>
    )
}
