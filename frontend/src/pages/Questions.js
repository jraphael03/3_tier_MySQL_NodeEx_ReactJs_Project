import { useState, useEffect } from "react";
import axios from "axios";


function Questions() {
  const [questions, setQuestions] = useState([]);

  const getQuestions = () => {
    axios.get("http://localhost:5000/questions").then((res) => {
      setQuestions(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = this.newQuestion;
    console.log(newQuestion);
  };

  useEffect(() => {
    getQuestions();
  }, [questions]);

  return (
    <div>
      <div>
        {questions.map((question, qid) => {
          return (
            <div key={qid} {...question}>
              <button onClick={() => console.log(question)}>Click</button>
              <h3>Question: {question.question}</h3>
            </div>
          );
        })}
      </div>
      <form className="card" action="" method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            <input type="text" placeholder="Do you have a question?" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            <select name="" id="">
              <option cid="1">Football</option>
              <option cid="2">Basketball</option>
              <option cid="3">Baseball</option>
              <option cid="4">MMA</option>
            </select>
          </label>
        </div>
        <div>
          <button className="submit-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Questions;
