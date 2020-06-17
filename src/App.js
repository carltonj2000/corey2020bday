import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Table from "./Table";
import Photos from "./Photos";
import Videos from "./Videos";
import PhotosMain from "./PhotosMain";
import gettingThere from "./gettingThere.js";
import giftTime from "./giftTime.js";
import cathedralRock from "./cathedralRock.js";
import airportSunset from "./airportSunset.js";
import italianEats from "./italianEats.js";
import devilsBridge from "./devilsBridge.js";
import sedona from "./sedona.js";
import chapelOnTheRock from "./chapelOnTheRock.js";
import airportMesa from "./airportMesa.js";
import cockscomb from "./cockscomb.js";
import sedonaVillage from "./sedonaVillage.js";
import oatman from "./oatman.js";

export default function App() {
  return (
    <Router basename={"/corey/2020/birthday"}>
      <Switch>
        <Route exact path="/">
          <PhotosMain />
        </Route>
        <Route path="/photos">
          <PhotosMain />
        </Route>
        <Route path="/gettingThere">
          <Photos tileData={gettingThere} />
        </Route>
        <Route path="/giftTime">
          <Photos tileData={giftTime} />
        </Route>
        <Route path="/cathedralRock">
          <Photos tileData={cathedralRock} />
        </Route>
        <Route path="/oatman">
          <Photos tileData={oatman} />
        </Route>
        <Route path="/italianEats">
          <Photos tileData={italianEats} />
        </Route>
        <Route path="/chapelOnTheRock">
          <Photos tileData={chapelOnTheRock} />
        </Route>
        <Route path="/airportMesa">
          <Photos tileData={airportMesa} />
        </Route>
        <Route path="/cockscomb">
          <Photos tileData={cockscomb} />
        </Route>
        <Route path="/sedonaVillage">
          <Photos tileData={sedonaVillage} />
        </Route>
        <Route path="/sedona">
          <Photos tileData={sedona} />
        </Route>
        <Route path="/airportSunset">
          <Photos tileData={airportSunset} />
        </Route>
        <Route path="/devilsBridge">
          <Photos tileData={devilsBridge} />
        </Route>
        <Route path="/itinerary">
          <Table />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
      </Switch>
    </Router>
  );
}
