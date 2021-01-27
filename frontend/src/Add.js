import { useForm } from "react-hook-form";
import axios from "axios";

export default function Add(props){
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        addQuestion(data);
    }
}

// function to make a POST req to the server to insert data to MySQL db
const addReview = (data) => {
    axios.post("http://localhost:5000/questions", data).then(() => {
        props.setQuestions([...props.questions, {data}])
    });
};
