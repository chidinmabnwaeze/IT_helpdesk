import React from 'react'

const Notification = () => {
  return (
    <div>
        <div>
            <p>New notification</p>
            <img src="" alt="" />
        </div>
        <div>
            <p>You have been assigned to a live session with a waiting client</p>
            <div>
            <button className="accept py-1.5 px-5  rounded-md">Accept</button>
    <button className="assign py-1.5 px-5  rounded-md">Assign</button>
            </div>
        </div>
    </div>
  )
}

export default Notification