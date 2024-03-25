import { createBrowserRouter } from "react-router-dom";
import { Main } from "./Layout/Main";
import { Home } from "../Pages/Home";
import { Blogs } from "../Pages/Blogs";
import { BookMarks } from "../Pages/BookMarks";
import { Blog } from "../Pages/Blog";
import { Content } from "../components/Content";
import { Author } from "../components/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>,
            loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
         path: "/blog/:id",
         element: <Blog></Blog>,
         loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
         children:[
          {
            path: "",
            element: <Content></Content>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
          }
         ]
        },
        {
            path: "/bookmarks",
            element: <BookMarks></BookMarks>
        }
      ]
    },
  ]);
