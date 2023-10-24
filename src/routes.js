import Home from './Home'
import DataForm from './DataForm'
import SongContainer from './SongContainer'
import ErrorPage from './ErrorPage'

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/dataform",
        element: <DataForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/songs/:title",
        element: <SongContainer />,
        errorElement: <ErrorPage />
      }
]

export default routes;