import hyperRealism from '../assets/images/hyper-realism/IMG_3467.JPG'
import realism from '../assets/images/realism/IMG_3502.JPG'
import semiRealism from '../assets/images/semi-realism/IMG_3457.JPG'
import './ImageHero.css'

function ImageHero() {
  return (
    <>
      <div className="card-showcase">
          <div className="book-card rotate-left">
            <img src={hyperRealism} alt='Hyper Realism Book Cover' loading="lazy" decoding="async" />
          </div>
          <div className="book-card center-card">
            <img src={realism} alt='Realism Book Cover' loading="lazy" decoding="async" />
          </div>
          <div className="book-card rotate-right">
            <img src={semiRealism} alt='Semi-Realism Book Cover' loading="lazy" decoding="async" />
          </div>
        </div>
    </>
  );
}

export default ImageHero;