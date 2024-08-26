import React from 'react'
import styled from 'styled-components'
import Robot from "../assets/robot.gif"
function Welcome({username}) {
  return (
    <Container>
        <img src={Robot} alt="Robot" />
        <h1>
            welcome,<span>{username}!</span>
        </h1>
        <h3>please select a chat to start messaging.</h3>
    </Container>
  )
}
const Container=styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
export default Welcome