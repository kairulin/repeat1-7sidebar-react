import React from 'react'

export const Message = ({sidebar}) => {
  return (
    <div  className={sidebar? 'move active' : 'move'}>Message Page</div>
  )
}

export const MessageOne = ({sidebar}) => {
    return (
      <div className={sidebar? 'move active' : 'move'}>Message1 Page</div>
    )
  }

  
  export const MessageTwo = ({sidebar}) => {
    return (
      <div className={sidebar? 'move active' : 'move'}>Message2 Page</div>
    )
  }
  