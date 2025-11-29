import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../assets/styles/Main.scss';
import { getProfile, Profile } from '../services/api';

// 1. Import translation hook
import { useTranslation } from "react-i18next";

function Main() {
  const [profile, setProfile] = useState<Profile | null>(null);

  // 2. i18n
  const { t } = useTranslation();

  // 3. Fetch profile from Django backend
  useEffect(() => {
    getProfile()
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  if (!profile) return null;

  return (
    <div className="container">
      <div className="about-section">

        {/* Profile Image */}
        <div className="image-wrapper">
          <img
            src={profile.avatar}
            alt="Avatar"
            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300"; }}
          />
        </div>

        {/* Text Content */}
        <div className="content">

          {/* Social Icons (Desktop) */}
          <div className="social_icons">
            {profile.github_link && (
              <a href={profile.github_link} target="_blank" rel="noreferrer"><GitHubIcon /></a>
            )}
            {profile.linkedin_link && (
              <a href={profile.linkedin_link} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            )}
            {profile.facebook_link && (
              <a href={profile.facebook_link} target="_blank" rel="noreferrer">
                <FacebookIcon/>
              </a>
            )}
          </div>

          {/* Name from backend */}
          <h1>{profile.name}</h1>

          {/* Job title → translated fallback */}
          <p>
            {profile.job_title || t("main.job_title")}
          </p>

          {/* Social Icons (Mobile) */}
          <div className="mobile_social_icons">
            {profile.github_link && (
              <a href={profile.github_link} target="_blank" rel="noreferrer"><GitHubIcon /></a>
            )}
            {profile.linkedin_link && (
              <a href={profile.linkedin_link} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;



// import React, { useEffect, useState } from "react";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import '../assets/styles/Main.scss';
// import { getProfile, Profile } from '../services/api';

// function Main() {
//   // 1. State to store profile data
//   const [profile, setProfile] = useState<Profile | null>(null);

//   // 2. Fetch profile from Django on load
//   useEffect(() => {
//     getProfile()
//       .then(response => {
//         setProfile(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching profile:", error);
//       });
//   }, []);

//   // If loading, you could show a spinner, or just show nothing
//   if (!profile) return null;

//   return (
//     <div className="container">
//       <div className="about-section">
//         <div className="image-wrapper">
//           {/* Use the Avatar from Django */}
//           <img 
//             src={profile.avatar} 
//             alt="Avatar" 
//             onError={(e) => {e.currentTarget.src = "https://via.placeholder.com/300"}}
//           />
//         </div>
//         <div className="content">
//           <div className="social_icons">
//             {profile.github_link && (
//               <a href={profile.github_link} target="_blank" rel="noreferrer"><GitHubIcon/></a>
//             )}
//             {profile.linkedin_link && (
//               <a href={profile.linkedin_link} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
//             )}
//           </div>
//           {/* Dynamic Name and Job Title */}
//           <h1>{profile.name}</h1>
//           <p>{profile.job_title}</p>

//           <div className="mobile_social_icons">
//             {profile.github_link && (
//               <a href={profile.github_link} target="_blank" rel="noreferrer"><GitHubIcon/></a>
//             )}
//             {profile.linkedin_link && (
//               <a href={profile.linkedin_link} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;
