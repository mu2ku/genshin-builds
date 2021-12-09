import React, { useState, useEffect } from 'react'
import { getProfile, getMyCharacters, createBuild } from '../../services/profileService'
import { Link } from 'react-router-dom'
import Characters from '../../components/Characters/Characters'
import styles from './ProfilePage.module.css'


const ProfilePage = (props) => {
   const user = props.user
   const [myProfile, setMyProfile] = useState(user)
   const [myCharacters, setMyCharacters] = useState([])
   // const [myTeambuilds, setMyTeamBuilds] = useState([])

   const [formData, setFormData] = useState({
      createdBy: props.user.profile,
      character1: [],
      character2: [],
      character3: [],
      character4: []
   })

   const addToCollection = evt => {
      createBuild(props.user.profile, formData)
   }

   useEffect(() => {
      getProfile(props.user.profile)
         .then(myProfile => {
            setMyProfile(myProfile)
         })
   }, [])

   useEffect(() => {
      getMyCharacters(props.user.profile)
         .then(getMyCharacters => {
            setMyCharacters(getMyCharacters)
         })
   }, [])

   return (
      <>
         <div className={styles.bground}>
         <main className={styles.profile_page}>
            <h1 className={styles.text}>{myProfile.name} character collection:</h1>
            <div className={styles.imgHolder}>
            <Characters user={user} myCharacters={myCharacters} />
            </div>
            {/* avatar image goes here */}
            {/* edit image here  */}
            {/* <TeamBuilds user={props.user} myCharacters={myCharacters} weapons={props.weapons} myTeambuilds={myTeambuilds} /> */}
            <div className={styles.buttony}>
            <Link
               className="button"
               to='/createTeamBuild'
               onClick={addToCollection}
               state={myCharacters}
            >Create a Build</Link>
            </div>
         </main>
         </div>
      </>
   );
}

export default ProfilePage;