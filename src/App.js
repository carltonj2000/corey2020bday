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

export default function App() {
  return (
    <Router basename={"/corey2020bday"}>
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
