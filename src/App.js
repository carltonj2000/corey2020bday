import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Table from "./Table";
import Photos from "./Photos";
import Videos from "./Videos";
import PhotosMain from "./PhotosMain";
import Day1 from "./img_day1.js";
import Day2 from "./img_day2.js";
import Day3 from "./img_day3.js";
import gettingThere from "./gettingThere.js";
import giftTime from "./giftTime.js";
import cathedralRock from "./cathedralRock.js";
import airportSunset from "./airportSunset.js";
import italianEats from "./italianEats.js";

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
        <Route path="/italianEats">
          <Photos tileData={italianEats} />
        </Route>
        <Route path="/airportSunset">
          <Photos tileData={airportSunset} />
        </Route>
        <Route path="/day1">
          <Photos tileData={Day1} />
        </Route>
        <Route path="/day2">
          <Photos tileData={Day2} />
        </Route>
        <Route path="/day3">
          <Photos tileData={Day3} />
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
