import {lazy, Suspense, Fragment} from 'react';
import classes from './App.module.scss'

const Header = lazy(() => import('../components/header/Header'))
const Card = lazy(() => import('../components/card/Card'))
const Footer = lazy(() => import('../components/footer/Footer'))

function App() {
  return (
    <Fragment>
    <div className={classes.content}>
      <Suspense fallback={<h6>Loading header...</h6>}>
        <Header />
        <Suspense fallback={<h6>Loading items...</h6>}>
          <Card />
        </Suspense>
      </Suspense>
      </div>
      <Suspense fallback={<h6>Loading footer...</h6>}>
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default App;