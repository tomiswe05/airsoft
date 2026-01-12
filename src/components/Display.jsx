import './Display.css'

// Hyper Realism
import hyper1 from '../assets/images/hyper-realism/IMG_3456.JPG'
import hyper2 from '../assets/images/hyper-realism/IMG_3467.JPG'
import hyper3 from '../assets/images/hyper-realism/IMG_3468.JPG'
import hyper4 from '../assets/images/hyper-realism/IMG_3472.JPG'
import hyper5 from '../assets/images/hyper-realism/IMG_3494.JPG'
import hyper6 from '../assets/images/hyper-realism/IMG_3495.JPG'

// Minimalist
import mini1 from '../assets/images/minimalist/File_000.png'
import mini2 from '../assets/images/minimalist/IMG_2694.PNG'
import mini3 from '../assets/images/minimalist/IMG_3485.JPG'
import mini4 from '../assets/images/minimalist/IMG_3486.PNG'
import mini5 from '../assets/images/minimalist/IMG_3490.JPG'
import mini6 from '../assets/images/minimalist/IMG_3492.JPG'
import mini7 from '../assets/images/minimalist/IMG_3493.JPG'

// Realism
import real1 from '../assets/images/realism/IMG_3480.JPG'
import real2 from '../assets/images/realism/IMG_3482.JPG'
import real3 from '../assets/images/realism/IMG_3489.JPG'
import real4 from '../assets/images/realism/IMG_3502.JPG'
import real5 from '../assets/images/realism/IMG_3503.JPG'
import real6 from '../assets/images/realism/IMG_3511.JPG'
import real7 from '../assets/images/realism/IMG_3514.JPG'

// Semi-Realism
import semi1 from '../assets/images/semi-realism/IMG_3457.JPG'
import semi2 from '../assets/images/semi-realism/IMG_3458.JPG'
import semi3 from '../assets/images/semi-realism/IMG_3461.JPG'
import semi4 from '../assets/images/semi-realism/IMG_3462.JPG'
import semi5 from '../assets/images/semi-realism/IMG_3464.JPG'
import semi6 from '../assets/images/semi-realism/IMG_3513.PNG'

// Trilogy
import trilogy1 from '../assets/images/trilogy/IMG_3491.JPG'

function Display({ selected }) {
    const portfolioItems = [
        // Hyper Realism
        { id: 1, image: hyper1, title: 'Hyper Realism Cover', category: 'Hyper Realism' },
        { id: 2, image: hyper2, title: 'Hyper Realism Cover', category: 'Hyper Realism' },
        { id: 3, image: hyper3, title: 'Hyper Realism Cover', category: 'Hyper Realism' },
        { id: 4, image: hyper4, title: 'Hyper Realism Cover', category: 'Hyper Realism' },
        { id: 5, image: hyper5, title: 'Hyper Realism Cover', category: 'Hyper Realism' },
        { id: 6, image: hyper6, title: 'Hyper Realism Cover', category: 'Hyper Realism' },

        // Minimalism
        { id: 7, image: mini1, title: 'Minimalist Cover', category: 'Minimalism' },
        { id: 8, image: mini2, title: 'Minimalist Cover', category: 'Minimalism' },
        { id: 9, image: mini3, title: 'Minimalist Cover', category: 'Minimalism' },
        { id: 10, image: mini4, title: 'Minimalist Cover', category: 'Minimalism' },
        { id: 11, image: mini5, title: 'Minimalist Cover', category: 'Minimalism' },
        { id: 12, image: mini6, title: 'Minimalist Cover', category: 'Minimalism' },
        { id: 13, image: mini7, title: 'Minimalist Cover', category: 'Minimalism' },

        // Realism
        { id: 14, image: real1, title: 'Realism Cover', category: 'Realism' },
        { id: 15, image: real2, title: 'Realism Cover', category: 'Realism' },
        { id: 16, image: real3, title: 'Realism Cover', category: 'Realism' },
        { id: 17, image: real4, title: 'Realism Cover', category: 'Realism' },
        { id: 18, image: real5, title: 'Realism Cover', category: 'Realism' },
        { id: 19, image: real6, title: 'Realism Cover', category: 'Realism' },
        { id: 20, image: real7, title: 'Realism Cover', category: 'Realism' },

        // Semi-Realism
        { id: 21, image: semi1, title: 'Semi-Realism Cover', category: 'Semi-Realism' },
        { id: 22, image: semi2, title: 'Semi-Realism Cover', category: 'Semi-Realism' },
        { id: 23, image: semi3, title: 'Semi-Realism Cover', category: 'Semi-Realism' },
        { id: 24, image: semi4, title: 'Semi-Realism Cover', category: 'Semi-Realism' },
        { id: 25, image: semi5, title: 'Semi-Realism Cover', category: 'Semi-Realism' },
        { id: 26, image: semi6, title: 'Semi-Realism Cover', category: 'Semi-Realism' },

        // Trilogy
        { id: 27, image: trilogy1, title: 'Trilogy Cover Set', category: 'Trilogy' },
    ];

    const filteredItems = selected === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selected);

    return (
        <div className='display-container'>
            {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                    <div key={item.id} className='portfolio-item'>
                        <img
                            src={item.image}
                            alt={item.title}
                            className='img'
                            loading="lazy"
                            decoding="async"
                        />
                        <div className='portfolio-overlay'>
                            <span className='portfolio-title'>{item.title}</span>
                            <span className='portfolio-category'>{item.category}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p className='no-results'>No covers found in this category.</p>
            )}
        </div>
    );
}

export default Display;
