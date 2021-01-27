import React, { Component } from "react";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { expressResponse: "not set yet" };

    // Get
    this.sendGet = () => {
      console.log("sendGet");
      fetch(`http://localhost:5000/questions`, {
        method: "GET",
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          this.setState({ expressResponse: data });
        })
        .catch((err) => console.error("Error:", err));
    };

    // Post
    this.sendPost = () => {
      console.log("sendPost");
      const data = { "qid": 1 }
      fetch(`http://localhost:5000/questions`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.text())
        .then(data => {
          console.log(data);
          this.setState({ expressResponse: data });
        })
        .catch(err => console.error("Error:", err));
    };

    //Put
    this.sendPut = () => {
      console.log("sendPut");
      const data = { "qid": 1 }
      fetch(`http://localhost:5000/questions/123`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
        .then(res => res.text())
        .then(data => {
          console.log(data);
          this.setState({ expressResponse: data });
        })
        .catch(err => console.error("Error:", err));
    };

    //Delete
    this.sendDelete = () => {
      console.log("sendDelete");
      fetch(`http://localhost:5000/questions/123`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.text())
        .then(data => {
          console.log(data);
          this.setState({ expressResponse: data });
        })
        .catch(err => console.error("Error:", err));
    };
  };
  render() {
    return (
      <div>
        <div>{this.state.expressResponse}</div>
        <div>
          <button onClick={this.sendGet}>Send Get</button>
        </div>
        <div>
          <button onClick={this.sendPost}>Send Post</button>
        </div>
        <div>
          <button onClick={this.sendPut}>Send Put</button>
        </div>
        <div>
          <button onClick={this.sendDelete}>Send Delete</button>
        </div>
      </div>
    );
  }
}
