import React, { Suspense, lazy } from "react";
import LoadSpinner from "components/LoadSpinner";

const StreamListCont = lazy(() => import("../containers/StreamListCont"));

const StreamListPage = (props) => {
  return (
    <Suspense fallback={<LoadSpinner />}>
      <StreamListCont {...props} />
    </Suspense>
  );
};

export default StreamListPage;
