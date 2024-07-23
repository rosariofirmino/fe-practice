import React from 'react'

interface ProfileProps{
    fullName: string,
    position: string,
    company: string,
    description: string,
    email: string,
    linkedin?: string,
    instagram?: string,
    github?: string,
    x?: string,
    imageUrl: string
}
export default function ProfileCard({fullName, position, company, description, email, linkedin, instagram, github, x, imageUrl} : ProfileProps) {
  return (
    <div style={containerStyle} >
        <img src={imageUrl} />
        <h3>{fullName}</h3>
        <p>{position} @ {company}</p>
        <p>{description}</p>
        <button>Contact Me</button>
        <div>
            
        </div>

    </div>
  )
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
}
