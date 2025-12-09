import { useState } from 'react';
import { categoriesData } from '../data/categories';
import imagesData from '../data/data';
import './HomeImage.css';

// Import all images
import bookImg from '../assets/images/book.jpg';
import bk1 from '../assets/images/bk1.jpg';
import bk2 from '../assets/images/bk2.jpg';
import imge1 from '../assets/images/imge1.jpg';
import imge2 from '../assets/images/imge2.jpg';
import imge3 from '../assets/images/imge3.jpg';

// Map image filenames to imported images
const imageMap = {
  'book.jpg': bookImg,
  'bk1.jpg': bk1,
  'bk2.jpg': bk2,
  'imge1.jpg': imge1,
  'imge2.jpg': imge2,
  'imge3.jpg': imge3,
};

function HomeImage(){
    const [activeCategory, setActiveCategory] = useState('all');

    // Filter images based on active category
    const filteredImages = activeCategory === 'all' 
      ? imagesData 
      : imagesData.filter(img => img.category === activeCategory);

    return(
        <>
        <div className="home-image-section">
            <div className="image-header">
                <h2>Our Fantasy Book Cover Designs</h2>
                <div className="category-filters">
                    {categoriesData.map(cat => (
                        <button 
                            key={cat.id}
                            className={activeCategory === cat.value ? 'active' : ''}
                            onClick={() => setActiveCategory(cat.value)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="image-gallery">
                {filteredImages.map(item => (
                    <div key={item.id} className="gallery-item">
                        <div className="gallery-image-wrapper">
                            <img 
                                src={imageMap[item.image]} 
                                alt={item.title}
                                className="gallery-image"
                            />
                            <div className="gallery-overlay">
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default HomeImage;