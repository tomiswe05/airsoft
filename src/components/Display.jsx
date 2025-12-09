import './Display.css'
import bookImage from '../assets/images/book.jpg'
import bk from '../assets/images/bk1.jpg'
import bk2 from '../assets/images/bk2.jpg'
function Display({selected}) {
    return(
        <>
        <div className='display-container'>
            <img src={bookImage} alt="hey" className='img'/>
            <img src={bk} alt="hey" className='img'/>
            <img src={bk2} alt="hey" className='img'/>

            <img src={bookImage} alt="hey" className='img'/>
            <img src={bk} alt="hey" className='img'/>
            <img src={bk2} alt="hey" className='img'/>

        </div>

        </>
    )

}
export default Display;