import React from 'react'
import './topicbox.css'
export default function TopicBox() {
    const topic = "My favoirte food is kottu."
    const item = " and rice."
    const a = 3;
    const b = 5;
    
  return (
    <div>
        <div className="topicBox">
            <span className="text">{topic}{item}{a+b}</span>
        </div>
    </div>
  )
}
