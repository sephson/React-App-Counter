import React, { Component } from "react";

class Counter extends Component {
  //   renderTags() {
  //     if (this.state.tag.length === 0) return <p>There are no tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tag.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    return (
      <div>
        <span className={this.getBadgeMethod()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
