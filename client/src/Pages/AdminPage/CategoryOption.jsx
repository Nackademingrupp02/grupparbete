import React from 'react'

const CategoryOption = ({category}) => {

  return (
    <option value={category._id}>{category.name}</option>
  )
}

export default CategoryOption