import React from 'react'

export const Overview = ({sidebar}) => {
  return (
    <div className={sidebar? 'move active' : 'move'}>Overview Page</div>
  )
}

export const Users = ({sidebar}) => {
    return (
      <div className={sidebar? 'move active' : 'move'}>Users Page</div>
    )
  }

  export const Revenue = ({sidebar}) => {
    return (
      <div className={sidebar? 'move active' : 'move'}>Revenue Page</div>
    )
  }
  