import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
// import ErrorBoundary from './Advanced Concepts/Error Boundaries/ErrorBoundary.jsx'

import App from './App.jsx'
import Basic from './Pages/Basic.jsx'
import Advanced from './Pages/Advanced.jsx'
import HooksNav from './Pages/HooksNav.jsx'

// -----------------------------------------------------------------------------------------------------------------------------------------

const Props = React.lazy(() => import('./Basic Concepts/Props/StudentApp.jsx'))
const ConditionalRendering = React.lazy(() => import('./Basic Concepts/Conditional rendering/AppUG.jsx'))
const RenderLists = React.lazy(() => import('./Basic Concepts/RenderList/AppList.jsx'))
const ClickEvents = React.lazy(() => import('./Basic Concepts/Click Event/CeApp.jsx'))

const UseStatesNav = React.lazy(() => import('./Pages/UseStatesNav.jsx'))
const UseState = React.lazy(() => import('./Basic Concepts/React Hook/UseState/UseState.jsx'))
const UpdateArray = React.lazy(() => import('./Basic Concepts/React Hook/UseState/UpdateArrays.jsx'))
const UpdateObject = React.lazy(() => import('./Basic Concepts/React Hook/UseState/UpdateObjects.jsx'))
const UpdateArrayOfObject = React.lazy(() => import('./Basic Concepts/React Hook/UseState/UpdateArraysOfObjects.jsx'))
const Counter = React.lazy(() => import('./Basic Concepts/React Hook/UseState/Counter.jsx'))


const OnChange = React.lazy(() => import('./Basic Concepts/React Hook/OnChange/AppOnChange.jsx'))
const UseEffect = React.lazy(() => import('./Basic Concepts/React Hook/UseEffect/UseEffect.jsx'))
const UseContext = React.lazy(() => import('./Basic Concepts/React Hook/UseContext/UseContext.jsx'))
const UseRef = React.lazy(() => import('./Basic Concepts/React Hook/UseRef/UseRef.jsx'))


// --------------------------------------------------------------------------------------------------------------------------------------------

const UseCustomHooks = React.lazy(() => import('./Advanced Concepts/CustomHooks/Demo.jsx'))
const ErrorBoundaryApp = React.lazy(() => import('./Advanced Concepts/ErrorBoundaries/ErrorBoundaryApp.jsx'))

const PerformanceOptimization = React.lazy(() => import('./Pages/PerformancesNav.jsx'))
const ReactMemo = React.lazy(() => import('.//Advanced Concepts/PeformanceOptimization/ReactMemo.jsx'))
const UseMemo = React.lazy(() => import('.//Advanced Concepts/PeformanceOptimization/UseMemo.jsx'))
const UseCallback = React.lazy(() => import('.//Advanced Concepts/PeformanceOptimization/UseCallback.jsx'))
const ReactWindow = React.lazy(() => import('./Advanced Concepts/PeformanceOptimization/ReactWindow.jsx'))


const StateManagers = React.lazy(() => import('./Pages/StateManagersNav.jsx'))


const Zustand = React.lazy(() => import('./Advanced Concepts/StateManagement/Zustand/ZustandApp.jsx'))
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from './Advanced Concepts/StateManagement/Redux/ReduxStore.jsx'
const Redux = React.lazy(() => import('./Advanced Concepts/StateManagement/Redux/ReduxApp.jsx'))

// import Register from './Auth/Register.jsx'
// import Login from './Auth/Login.jsx'
import ManualLogin from './Auth/ManualLogin.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App/>
  },
  {
    path: '/state-managers/zustand',
    element: <Zustand/>
  },
  {
    path: '/state-managers/redux',
    element: <Redux/>
  },


  {
    path: '/login',
    element: <ManualLogin/>
  },
  // {
  //   path: '/register',
  //   element: <Register/>
  // },
  // {
  //   path: '/login',
  //   element: <Login/>
  // },


  {
    path: '/basic',
    element: <Basic/>
  },
  {
    path: '/hooks',
    element: <HooksNav/>
  },

  {
    path: 'props',
    element: <Props/>
  },
  {
    path: 'conditional-rendering',
    element: <ConditionalRendering/>
  },
  {
    path: 'render-lists',
    element: <RenderLists/>
  },
  {
    path: 'click-events',
    element: <ClickEvents/>
  },

  {
    path: '/use-states-nav',
    element: <UseStatesNav/>
  },
  {
    path: '/use-state',
    element: <UseState/>
  },
  {
    path:'/use-state/update-array',
    element: <UpdateArray/>
  },
  {
    path:'/use-state/update-object',
    element: <UpdateObject/>
  },
  {
    path:'/use-state/update-array-of-object',
    element: <UpdateArrayOfObject/>
  },
  {
    path: '/use-state/counter',
    element: <Counter/>
  },
  {
    path: '/on-change',
    element: <OnChange/>
  },
  {
    path: '/use-effect',
    element: <UseEffect/>
  },
  {
    path: '/use-context',
    element: <UseContext/>
  },
  {
    path: '/use-ref',
    element: <UseRef/>
  },


  {
    path: '/advanced',
    element: <Advanced/>
  },

  {
    path: '/use-custom-hooks',
    element: <UseCustomHooks/>
  },
  {
    path: '/error-boundaries',
    element: <ErrorBoundaryApp/>
  },
  {
    path: '/performance-optimization',
    element: <PerformanceOptimization/>
  },
  {
    path: '/performances/react-memo',
    element: <ReactMemo/>
  },
  {
    path: '/performances/use-memo',
    element: <UseMemo/>
  },
  {
    path: '/performances/use-callback',
    element: <UseCallback/>
  },
  {
    path: '/performances/react-window',
    element: <ReactWindow/>
  },
  {
    path: '/state-managers',
    element: <StateManagers/>
  },
  {
    path: '/use-custom-hooks',
    element: <p></p>
  },
  {
    path: '/use-custom-hooks',
    element: <p></p>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ErrorBoundary fallback = "there is an error"> */}
      <Suspense fallback={<div><p>Loading...</p></div>}
>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router}/>
          </PersistGate>
        </Provider>
      </Suspense>
    {/* </ErrorBoundary> */}
  </StrictMode>,
)
