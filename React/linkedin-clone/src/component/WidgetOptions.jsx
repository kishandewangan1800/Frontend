import React from 'react'
import './WidgetOptions.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function WidgetOptions() {
    const news = [
        {
            newsData: 'Fears Russia wants to split Ukraine',
            newsTime: '31m ago • 915,191 readers'

        },
        {
            newsData: 'What Indian consumers are spending',
            newsTime: '2d ago • 85,285 readers'
        },
        {
            newsData: 'The latest in the startup world',
            newsTime: '2d ago • 115,387 readers'
        },
        {
            newsData: 'Techies with these skills are in demand',
            newsTime: '2d ago • 856,549 readers'
        },

        {
            newsData: "How generous are India's uber rich?",
            newsTime: '2d ago • 15,259 readers'
        }
    ]

    return (
        <div>
            {
                news.map((item, index) => {
                    return (
                        <div className="news-feed" key={index}>
                            <div className="news-data">{item.newsData}</div>
                            <div className="news-time">{item.newsTime}</div>
                        </div>
                    )

                })

            }

            <span className='show-more'>Show More <KeyboardArrowDownIcon /> </span>
        </div>
    )
}

export default WidgetOptions