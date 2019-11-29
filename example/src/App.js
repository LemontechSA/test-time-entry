import React, { Component } from "react";
import { TimeEntry } from "@lemontech/test-time-entry";

export default class App extends Component {
  render() {
    return (
      <div>
        <TimeEntry
          project="Cliente 1, Proyecto 1"
          description="Lorem consequat et veniam pariatur consectetur Lorem Lorem sint pariatur nisi. Est nulla eu mollit et magna est aliquip enim mollit qui minim. Labore labore ullamco et reprehenderit deserunt Lorem anim ipsum excepteur. Mollit ipsum enim officia Lorem eu laboris commodo nisi elit anim cupidatat non qui laboris. Ad irure sint esse labore ipsum et voluptate esse irure sit."
          duration={135}
        />
      </div>
    );
  }
}
