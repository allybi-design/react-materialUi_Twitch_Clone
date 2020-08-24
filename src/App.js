import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Header from "components/Header";
import Footer from "components/Footer";
import LoadSpinner from "components/LoadSpinner"

const StreamList = lazy(() => import("pages/StreamListPage"))
const StreamCreate = lazy(() => import("pages/StreamCreatePage"))
const StreamEdit = lazy(() => import("pages/StreamEditPage"))
const StreamDelete = lazy(() => import("./containers/StreamDeletePageCont"))
const StreamShow = lazy(() => import("pages/StreamShowPage"))

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
      <Suspense fallback={<LoadSpinner />}>
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/show/:id" component={StreamShow} />
        </Switch>
      </Suspense>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
