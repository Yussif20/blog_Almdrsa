import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import ArticlePage from './pages/ArticlePage';
import CardContainer from './components/CardContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <CardContainer /> },
      { path: ':article', element: <ArticlePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
