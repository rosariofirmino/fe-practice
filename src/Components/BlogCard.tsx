import { FaArrowRightLong } from "react-icons/fa6";

import React from 'react'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface BlogProps {
    imageUrl: string;
    categories: string[];
    title: string;
    description: string;
}

interface CategoryProps {
    categoryName: string;
}


function Category({categoryName}: CategoryProps){
    return(
        <div style={categoryStyle}>
            <p style={pStyle}>{categoryName}</p>

        </div>
    )
}

export default function BlogCard({imageUrl, categories, title, description}: BlogProps) {

  return (
    <div style={cardStyle}>
        <img src={imageUrl} style={imageStyle} />
        <div style={contentStyle}>
            {categories.map(category => {
                return (
                    <Category categoryName={category} />
                )
            })}
            <h3>{title}</h3>
            <p>{description}</p>
            <div style={readMoreStyle.container}>
                <p style={readMoreStyle.text}>Read More</p>
                <FaArrowRightLong style={readMoreStyle.icon}/>
            </div>
        </div>
    </div>
  )
}

const cardStyle = {
    width: 340, 
    backgroundColor: 'white', 
    borderRadius: 10,
    overflow: 'hidden'
}

const categoryStyle = {
    backgroundColor: '#F0FDF4', 
    border: 2, 
    borderStyle: 'solid', 
    borderColor: '#BBF7D0', 
    borderRadius: 20, 
    display: 'inline-block'
}

const pStyle = {
    margin: 0,
    color: '#15803D',
    paddingRight: 5,
    paddingLeft: 5
}

const contentStyle = {
    padding: 10
}

const imageStyle = {

}

const readMoreStyle = {
    container: {
        color: '#4338CA',
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        margin: 0
    },
    icon: {
        marginLeft: 10
    }
}
