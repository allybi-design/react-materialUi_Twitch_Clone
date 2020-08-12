import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Header from "components/Header";
import Footer from "components/Footer";

import StreamList from "pages/StreamListPage";
import StreamCreate from "pages/StreamCreatePage";
import StreamEdit from "pages/StreamEditPage";
import StreamDelete from "pages/StreamDeletePage";
import StreamShow from "pages/StreamShowPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
