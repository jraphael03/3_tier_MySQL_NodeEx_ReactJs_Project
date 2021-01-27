import React, { useState, useEffect } from "react";
import axios from "axios";

function Sidebar() {

const [questions, setQuestions] = useState([]);

const getQuestions = () => {
  axios.get("http://localhost:5000/questions").then((res) => {
    setQuestions(res.data);
  });
};

useEffect(() => {
  getQuestions();
}, [questions]);

const componentDidMount = () => {
  this.getQid();
};

  const getQid = () => {
    axios.get("http://localhost:5000/questions")
    .then((res) => {
      const data = res.data;
      this.setState({ posts: data })
      console.log("Data has been received!")
    })
    .catch(() => {
      alert("Error Retrieving data!")
    });
  }

  return (
    <ul>
      <li>
        <h2>Categories</h2>
      </li>
      <li className="li-item1">
        <button> Football </button>
      </li>
      <li className="li-item2">
        <button> Basketball </button>
      </li>
      <li className="li-item3">
        <button> Baseball </button>
      </li>
      <li className="li-item4">
        <button> MMA </button>
      </li>
      <li className="li-item5">
        <button
          onClick={() => {
            {
              questions.map((question, qid) => {
                return (
                  <div key={qid}>
                  </div>
                );
              });
            }
            console.log(questions);
          }}
        >
          All Categories
        </button>
      </li>
    </ul>
  );
}

export default Sidebar;
