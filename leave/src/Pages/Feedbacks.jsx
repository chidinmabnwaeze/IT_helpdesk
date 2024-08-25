import React from 'react'
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'
import thumb from '../assets/icons/thumbs.svg'


const Feedbacks = () => {
    // new addition
    const date = new Date

    const feedback = [
        {
          name: "Mary John",
          time: "9:57 am",
          message: "Thanks for coming to my aid, I was stranded thankfully you were there to help",
          dept: "Administrative Unit",
          date: ""
        },
        {
          name: "Mary John",
          time: "9:57 am",
          message: "Thanks for coming to my aid",
          dept: "Administrative Unit"
        },
        {
          name: "Mary John",
          time: "9:57 am",
          message: "Thanks for coming to my aid",
          dept: "Administrative Unit"
        },
        {
            name: "Mary John",
            time: "9:57 am",
            message: "Thanks for coming to my aid",
            dept: "Administrative Unit"
          },
      ];
  return (
    <div>
       < Topbar/>
        <Sidebar/>

        <section className="feed-body m-8 p-4 bg-white">
            <div className="heading m-2">
              <h3 className="font-semibold">Feedback</h3>
            </div>

            {feedback.map((feed, index) => (
              <div className="div flex justify-between items-center mx-2 border-b" key={index}>
                <div className="flex m-4">
                <div className="thumbs mr-4">
                  <img src={thumb} alt="" />
                </div>
                  <div className="message">{feed.message}</div>
                </div>
                  <div className="top flex p-2">
                    <span className="mr-6">
                      <p>{feed.name}</p>
                    </span>
                    <span className="mr-6 ">
                      <p>{feed.dept}</p>
                    </span>
                    <span className="mr-6 ">
                      <p>{feed.date}</p>
                    </span>
                    <span className="mr-6 text-gray-400 ">
                      <p>{feed.time}</p>
                    </span>
                  </div>
              </div>
            ))}
          </section>
    </div>
  )
}

export default Feedbacks