import React from 'react'

interface TestimonialProps {
    imageUrl: string;
    fullName: string;
    userName: string;
    content: string;
}

export default function TestimonialCard({imageUrl, fullName, userName, content}: TestimonialProps) {
  return (
    <div style={{width: 340, backgroundColor: 'white', borderRadius: 7, padding: 15, border: 1, borderStyle: 'solid', borderColor: 'lightgray'}}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
            <img src={imageUrl} style={{width: 50,  paddingRight: 15}}/>
            <div>
                <h3 style={{margin:0}}>{fullName}</h3>
                <p style={{margin:0}}>@{userName}</p>
            </div>
        </div>
        <p>{content}</p>
    </div>
  )
}
