import React from 'react'

export const Reports = ({sidebar}) => {
  return (
    <div className={sidebar? 'move active' : 'move'}>Reports</div>
  )
}

export const ReportsOne = ({sidebar}) => {
    return (
      <div className={sidebar? 'move active' : 'move'}>Reports1 Page</div>
    )
  }

  export const ReportsTwo = ({sidebar}) => {
    return (
      <div className={sidebar? 'move active' : 'move'}>Reports2 Page</div>
    )
  }

  export const ReportsThree = ({sidebar}) => {
    return (
      <div className={sidebar? 'move active' : 'move'}>Reports3 Page</div>
    )
  }
  