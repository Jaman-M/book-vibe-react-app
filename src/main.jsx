import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// reouter setup
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboadr from './components/Dashboard/Dashboadr';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <Dashboadr></Dashboadr>
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        // worst way to load data. used for understand some logic only
        loader: () => fetch('/booksData.json')
      },
      {

      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
