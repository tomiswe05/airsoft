import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Pricing from '../pages/Pricing';
import Blog from '../pages/Blog';
import BlogArticle from '../pages/BlogArticle';
import Commitments from '../pages/Commitments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:id',
        element: <BlogArticle />,
      },
      {
        path: 'commitments',
        element: <Commitments />,
      },
    ],
  },
]);

export default router;
