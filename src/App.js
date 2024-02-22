import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/store/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideoPage from './components/WatchVideoPage';

/** Component Design
 * Header
 * Body
 *  SideBar
 *    MenuItems
 *  MainContainer
 *    ButtonList
 *    VideoContainer
 *      VideoCard
 */

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      }
      ,
      {
        path: 'watch',
        element: <WatchVideoPage />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
