import React from 'react'
import styled from 'styled-components'
function ChatContainer({currentChat}) {
  return (
    <div className="chat-header">
        <div className="user-details">
            <div className="avatar">
                     <img
                      src={`data:image/svg+xml;base64,${currentChat}`}
                      alt="avatar"
                    />
            </div>
            <div className="username">
                <h3>{currentChat.username}</h3>
            </div>
        </div>
    </div>
  )
}
const Container=styled.div``;
export default ChatContainer