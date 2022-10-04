import React from 'react'
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  a {
    color: inherit;
    text-decoration: inherit;
}
`

const NavBox = styled("div")`
  width: 210px;
  height: 106px;
  border: 1px solid black;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 50px 50px 0;

  * {
    display: block;
    font-size: 20px;
    font-family: 'Manrope', sans-serif;
  }
`
const NavBoxNumber = styled("span")`
  position: absolute;
  top: 10px;
  left: 10px;
`

const NavBoxName = styled("span")`
  text-align: center;
  justify-self: end;
`
const MvpTypes = [
  "Prototipi software",
  "Product design",
  "Video demo",
  "Landing pages",
  "Prototipi software",
  "Concierge",
  "Mago di Oz"
]

export default function MvpTypesNavigation() {
  return (
    <Wrapper>
      {MvpTypes.map((item, index) => {
        let anchorDestination = "#" + item.replace(" ", "")
        return (
          <a href={anchorDestination}>
            <NavBox>
              <NavBoxNumber>{(index + 1).toString().padEnd(2, ".")}</NavBoxNumber>
              <NavBoxName>
                {item}
              </NavBoxName>
            </NavBox>
          </a>
        )
      })}
    </Wrapper>
  )
}
