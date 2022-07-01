import React, { Suspense, SuspenseList } from "react";

import UserWelcome from "./UserWelcome";
import Todos from "./Todos";

const App = () => {
  return (
    <div className="app">
      <h2>Simple Todo</h2>

      <SuspenseList revealOrder="forwards">
        {/*only in experimental(npm i react@experimental)*/}
        <Suspense fallback={<p>Loading user details...</p>}>
          <UserWelcome />
        </Suspense>
        <Suspense fallback={<p>Loading Todos...</p>}>
          <Todos />
        </Suspense>
      </SuspenseList>
    </div>
  );
};

export default App;
