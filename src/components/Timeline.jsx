import './Timeline.css'
function Timeline() {
    const timelineData = [
        {id:1, name:'Step 1'}, 
        {id:2, name:'Step 2'}, 
        {id:3, name:'Step 3'}, 
        {id:4, name:'Step 4'}, 
        {id:5, name:'Step 5'}, 
        {id:6, name:'Step 6'}, 
        {id:7, name:'Step 7'}
    ];
    
    return (
        <>
        <div className="timeline-center">
           <div className="timeline-container">
            
            <div className="timeline">
                <div className="line-time"></div>
                {timelineData.map((item, index) => (
                    <div key={item.id}>
                        <div className="line-time"></div>
                        <div className="circle">
                            {index === 0 && <span className='span-circle-active'></span>}
                        </div>

                        <p className='step'>{item.name}</p>
                    </div>
                    
                ))}
                <div className="line-time-last"></div>
            </div>
            </div>
        </div>
    
        </>
    )
}

export default Timeline;