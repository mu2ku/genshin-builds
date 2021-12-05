import React, { Profiler, useEffect, useState } from 'react'

const TeamBuild = (props) => {
   const userProfile = props.user
   // const allWeps = props.weapons
   const [profile, setProfile] = useState(userProfile)
   // const [weapons, setWeapons] = useState(allWeps); 
   const [teamBuild, setTeamBuild] = useState({})

   return (
      <>
         <h2>Team Component Working</h2>
         {!Profiler ? 'Has Builds' : 'Go build something!!'}
      </>
   );
}

export default TeamBuild;