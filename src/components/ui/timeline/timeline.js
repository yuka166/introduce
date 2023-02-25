import './timeline.css'

function Timeline({ children, year, desc }) {
    return (
        <div className='timeline-wrap'>
            <div className="timeline-event">
                <div className='time-mark'>
                    <div>
                        <div className="timeline-year">{year}</div>
                    </div>
                    {children}
                </div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
}

export default Timeline;