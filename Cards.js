import React from 'react'

const Cards = ({courses}) => {
    let allCourses = [];

    // returns you a list of all courses recieves from the api responce
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory)=>{
courseCategory.forEach((course)) =>{
    allCourses.push(courses);
}
        })
        return allCourses;
    }
  return (
    <div>
      getCourses().map(courses) => {
        <card/>
      })
    </div>
  )
}

export default Cards
