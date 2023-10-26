import Home from './Home'
import SongContainer from './SongContainer'
import ErrorPage from './ErrorPage'
import ExtraSongInfo from './ExtraSongInfo'
import Reviews from './Reviews'

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/reviews",
        element: <Reviews />,
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