import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/store/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideoPage from './components/WatchVideoPage';
import SearchResults from './components/SearchResults';
import Header from './components/Header';

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

const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Header />
      <Body />
    </div>,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchVideoPage />
      },
      {
        path: 'results',
        element: <SearchResults />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={mainRouter}>
        <div>
          <Header />
          <Body />
        </div>
      </RouterProvider>
    </Provider>
  );
}


export default App;
