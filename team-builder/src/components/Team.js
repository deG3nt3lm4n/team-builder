import React from 'react'
import SingleMember from './SingleMember'

function Team({teamMemeber}) {



  return (
    <div className="myTeam">
      {
        teamMemeber.map(memeber => {
          return(
            <SingleMember key={Math.random() * 10000} name={memeber.name} email={memeber.email} role={memeber.role} />
          )
        })
      }
    </div>
  )
}

export default Team
