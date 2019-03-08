import React, { Component } from "react";
// Import React Table
class CategoryBadge extends Component {
  constructor() {
    super();

  }

  render() {
    //const {clumns} = this.state.column s;
      return (
        <div>
          <span class="badge badge-pill badge-primary">{this.props.categoryLabel}</span>
        </div>
    );
  }
}
export default CategoryBadge;
