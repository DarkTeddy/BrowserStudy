import React from 'react'
import "./lesson.css"

type subsectionType = {
  title: string,
  subsections: (string | subsectionType)[];
}

type lessonType = {
  section: string;
  subsections: (string | subsectionType)[];
}

export default function lesson<lessonType>({props}) {
  const {section, subsections} = props;

  
  return (
    <div className='lesson'>
        {/* 标题 */}
        <h1>{section}</h1>

        {subsections}
        {/* 内容 */}
        
        {/* 脚部 */}
        {/* 分割线 */}
    </div>
  )
}
