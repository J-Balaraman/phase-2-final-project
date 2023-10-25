import Home from './Home'
import DataForm from './DataForm'
import SongContainer from './SongContainer'
import ErrorPage from './ErrorPage'
import ExtraSongInfo from './ExtraSongInfo'

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
        path: "/songs",
        element: <SongContainer />,
        errorElement: <ErrorPage />
      },
      {
        path: "/songs/:title",
        element: <ExtraSongInfo />,
        errorElement: <ErrorPage />
      }
]

export default routes;