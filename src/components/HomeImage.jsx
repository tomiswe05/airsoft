import { useState } from 'react';
import { categoriesData } from '../data/categories';
import './HomeImage.css';

// Fantasy Book Cover images (Hyper Realism + Realism)
import hyper1 from '../assets/images/hyper-realism/IMG_3456.JPG';
import hyper2 from '../assets/images/hyper-realism/IMG_3467.JPG';
import hyper3 from '../assets/images/hyper-realism/IMG_3468.JPG';
import hyper4 from '../assets/images/hyper-realism/IMG_3472.JPG';
import real1 from '../assets/images/realism/IMG_3480.JPG';
import real2 from '../assets/images/realism/IMG_3482.JPG';
import real3 from '../assets/images/realism/IMG_3489.JPG';
import real4 from '../assets/images/realism/IMG_3502.JPG';

// Fantasy Design images (Semi-Realism + Minimalism)
import semi1 from '../assets/images/semi-realism/IMG_3457.JPG';
import semi2 from '../assets/images/semi-realism/IMG_3458.JPG';
import semi3 from '../assets/images/semi-realism/IMG_3461.JPG';
import semi4 from '../assets/images/semi-realism/IMG_3462.JPG';
import mini1 from '../assets/images/minimalist/IMG_3485.JPG';
import mini2 from '../assets/images/minimalist/IMG_3490.JPG';
import mini3 from '../assets/images/minimalist/IMG_3492.JPG';
import mini4 from '../assets/images/minimalist/IMG_3493.JPG';

const imagesData = [
    // Fantasy Book Cover (8 images)
    { id: 1, category: "fantasy_book_cover", image: hyper1, title: "Enchanted Realm" },
    { id: 2, category: "fantasy_book_cover", image: hyper2, title: "Crystal Crown" },
    { id: 3, category: "fantasy_book_cover", image: hyper3, title: "Shadow Kingdom" },
    { id: 4, category: "fantasy_book_cover", image: hyper4, title: "Curse of the Ancients" },
    { id: 5, category: "fantasy_book_cover", image: real1, title: "Legends Reborn" },
    { id: 6, category: "fantasy_book_cover", image: real2, title: "The Last Guardian" },
    { id: 7, category: "fantasy_book_cover", image: real3, title: "Quest for Truth" },
    { id: 8, category: "fantasy_book_cover", image: real4, title: "Rise of Heroes" },

    // Fantasy Design (8 images)
    { id: 9, category: "fantasy_design", image: semi1, title: "Dragon's Lair" },
    { id: 10, category: "fantasy_design", image: semi2, title: "Mystic Portal" },
    { id: 11, category: "fantasy_design", image: semi3, title: "Arcane Magic" },
    { id: 12, category: "fantasy_design", image: semi4, title: "Celestial Beings" },
    { id: 13, category: "fantasy_design", image: mini1, title: "Ethereal Wings" },
    { id: 14, category: "fantasy_design", image: mini2, title: "Twilight Realm" },
    { id: 15, category: "fantasy_design", image: mini3, title: "Moonlit Secrets" },
    { id: 16, category: "fantasy_design", image: mini4, title: "Sorcerer's Touch" },
];

function HomeImage() {
    const [activeCategory, setActiveCategory] = useState('all');

    // Filter images based on active category
    const filteredImages = activeCategory === 'all'
        ? imagesData
        : imagesData.filter(img => img.category === activeCategory);

    return (
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
                                    src={item.image}
                                    alt={item.title}
                                    className="gallery-image"
                                    loading="lazy"
                                    decoding="async"
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
    );
}

export default HomeImage;
