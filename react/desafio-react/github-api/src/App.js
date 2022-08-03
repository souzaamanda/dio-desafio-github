import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img souce="https://avatars.githubusercontent.com/u/80546584?v=4" alt="avatar of user" />
          <h1>Amanda Souza</h1>
          <h3>Username: </h3>
          <span>souzaamanda</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Following</h4>
              <span>10</span>
            </div>  
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>

      </Layout>
    </main>
  );
}

export default App;
