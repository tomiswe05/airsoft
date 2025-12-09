import book from '../assets/images/book.jpg';
import bk1 from '../assets/images/bk1.jpg';
import bk2 from '../assets/images/bk2.jpg';
import imge1 from '../assets/images/imge1.jpg';
import imge2 from '../assets/images/imge2.jpg';
import imge3 from '../assets/images/imge3.jpg';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Creating Captivating Fantasy Book Covers: A Complete Guide",
    author: "AirSoft Studios",
    date: "December 5, 2024",
    category: "design-tips",
    excerpt: "Learn the essential elements that transform an ordinary book cover into a mesmerizing gateway to fantastical worlds. From color theory to typography choices.",
    image: book,
    content: "Fantasy book covers are more than just artwork—they're portals that invite readers into new worlds. The right cover can mean the difference between a reader picking up your book or passing it by...",
    tags: ["design", "fantasy", "tips", "covers"]
  },
  {
    id: 2,
    title: "The Psychology of Color in Fantasy Book Design",
    author: "AirSoft Studios",
    date: "November 28, 2024",
    category: "design-tips",
    excerpt: "Discover how different color palettes evoke specific emotions and genre expectations in fantasy literature. Master the art of color psychology.",
    image: bk1,
    content: "Colors speak a universal language that transcends words. In fantasy book design, understanding color psychology is crucial for connecting with your target audience...",
    tags: ["color", "psychology", "design", "branding"]
  },
  {
    id: 3,
    title: "Top Book Cover Design Trends for 2024",
    author: "AirSoft Studios",
    date: "November 20, 2024",
    category: "news",
    excerpt: "Stay ahead of the curve with the latest trends in fantasy book cover design. From minimalist approaches to bold, illustrative styles.",
    image: bk2,
    content: "The publishing industry is constantly evolving, and book cover trends shift with reader preferences and market dynamics. Here are the top trends we're seeing...",
    tags: ["trends", "2024", "industry", "design"]
  },
  {
    id: 4,
    title: "Case Study: Designing 'The Dragon's Prophecy' Cover",
    author: "AirSoft Studios",
    date: "November 15, 2024",
    category: "case-studies",
    excerpt: "Go behind the scenes of our award-winning fantasy cover design. See the creative process from concept sketches to final artwork.",
    image: imge1,
    content: "When we first received the manuscript for 'The Dragon's Prophecy', we knew we had something special. The challenge was creating a cover that captured the epic scope...",
    tags: ["case-study", "process", "dragon", "fantasy"]
  },
  {
    id: 5,
    title: "Typography Secrets for Fantasy Book Covers",
    author: "AirSoft Studios",
    date: "November 8, 2024",
    category: "design-tips",
    excerpt: "Master the art of selecting and customizing fonts that enhance your fantasy book's genre and mood. Typography can make or break your cover design.",
    image: imge2,
    content: "Typography is often overlooked, yet it's one of the most critical elements of book cover design. The right font choice communicates genre, tone, and professionalism...",
    tags: ["typography", "fonts", "design", "tips"]
  },
  {
    id: 6,
    title: "How We Transformed a Self-Published Author's Sales",
    author: "AirSoft Studios",
    date: "October 30, 2024",
    category: "case-studies",
    excerpt: "A complete redesign led to a 300% increase in sales. Read how strategic cover design transformed this author's career.",
    image: imge3,
    content: "Sarah Mitchell had a great story but her book wasn't selling. After analyzing her target market and competition, we created a cover that resonated with readers...",
    tags: ["success-story", "redesign", "sales", "self-publishing"]
  },
  {
    id: 7,
    title: "The Future of Book Cover Design: AI and Innovation",
    author: "AirSoft Studios",
    date: "October 22, 2024",
    category: "news",
    excerpt: "Explore how emerging technologies are changing the landscape of book cover design while maintaining artistic integrity and human creativity.",
    image: book,
    content: "Artificial intelligence is reshaping many creative industries, and book design is no exception. However, the human touch remains irreplaceable...",
    tags: ["AI", "technology", "future", "innovation"]
  },
  {
    id: 8,
    title: "From Concept to Print: The Book Cover Creation Process",
    author: "AirSoft Studios",
    date: "October 15, 2024",
    category: "case-studies",
    excerpt: "Take a detailed journey through our complete design process. Learn what to expect when working with professional cover designers.",
    image: bk1,
    content: "Many authors wonder what happens behind the scenes when creating a professional book cover. Let's walk through each stage of our proven process...",
    tags: ["process", "workflow", "client-guide", "professional"]
  }
];

export const blogCategories = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Design Tips", value: "design-tips" },
  { id: 3, name: "Industry News", value: "news" },
  { id: 4, name: "Case Studies", value: "case-studies" }
];

export default blogPosts;
