import './Card.css'

function Card({ icon: Icon, title, subtitle, description, color }){
    return(
        <div
            className="card-border"
            style={{ '--card-accent-color': color }}
        >
            <div className='card-top'>
                <div className='card-icon-wrapper'>
                    <div
                        className='card-icon'
                        style={{ backgroundColor: `${color}15` }}
                    >
                        <Icon size={38} color={color} strokeWidth={1.5} />
                    </div>
                </div>
                <div className='card-content'>
                    <div className='card-header'>
                        <h3 className='card-title'>{title}</h3>
                        <span className='card-subtitle'>{subtitle}</span>
                    </div>
                </div>
            </div>
            <div className='text'>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    )
}

export default Card;
