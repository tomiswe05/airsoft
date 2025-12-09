import bookImage from '../assets/images/imge1.jpg'
import bk from '../assets/images/imge2.jpg'
import bk2 from '../assets/images/imge3.jpg'
import './ImageHero.css'
function ImageHero() {
  return (
    <>
      <div className="card-showcase">
          <div className="book-card rotate-left">
            <img src={bookImage} alt='' />
          </div>
          <div className="book-card center-card">
            <img src={bk} alt='' />
          </div>
          <div className="book-card rotate-right">
            <img src={bk2} alt='' />
          </div>
        </div>
    </>
  );
}
export default ImageHero;