import React from 'react'
import './Recent.css'


function Recent() {
    const data = [
        {
            recent: "Recent",
            recentData: ['Machine Learning', 'Hand-on Traning', 'Management']
        },

        {
            recent: "Group",
            recentData: ["Machine Learning", 'Hand-on Traning', "Frontend Developer"]
        },

        {
            recent: "Event",
            recentData: ['Product Management', 'Reactjs and React-Native', 'Real Time Application']
        },

        {
            recent: 'Hashtag',
            recentData: ['Management', 'Data', 'Programing','Marketing','Development','Frontend','API']
        }

    ]




    return (
        <div>
            {
                data.map((item, index) => {

                    return (
                        <div className="recent-data" key={index}>
                            <span>
                                {item.recent}
                            </span>
                            {item.recentData.map((it,idx)=>{
                                return(
                                    <div className="recent-data-array" key={10*idx}>
                                        # {it}
                                    </div>
                                )
                            })}

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Recent