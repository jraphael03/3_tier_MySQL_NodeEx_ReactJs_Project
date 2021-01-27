

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  margin-bottom: 0.75rem;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

.btn {
  text-transform: uppercase;
  background: transparent;
  color: var(--clr-black);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  color: var(--clr-white);
  background: var(--clr-black);
}

/* section */
.section {
  padding: 5rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 35rem;
  margin-top: 8rem;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.title {
  margin-bottom: 0;
  color: var(--clr-grey-1);
  letter-spacing: 2px;
  transition: var(--transition);
}
.edit-btn,
.delete-btn {
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 0.7rem;
  margin: 0 0.15rem;
  transition: var(--transition);
}
.edit-btn {
  color: var(--clr-green-light);
}
.edit-btn:hover {
  color: var(--clr-green-dark);
}
.delete-btn {
  color: var(--clr-red-light);
}
.delete-btn:hover {
  color: var(--clr-red-dark);
}
.clear-btn {
  text-transform: capitalize;
  width: 10rem;
  height: 1.5rem;
  display: grid;
  align-items: center;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-light);
  margin: 0 auto;
  font-size: 0.85rem;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  margin-top: 1.25rem;
}
.clear-btn:hover {
  color: var(--clr-red-dark);
}

.grid-container{
  display: grid;
  justify-content: center;
}

.grid-nav-container{
  display: grid;
  justify-content: center;
  margin-bottom: 20px;
}

.li{
  justify-content: space-between;
}
















export default class Register extends Component {
constructor(props){
	super(props);
	this.state = this.initialState;
	this.state.show=false
	this.userChange=this.userChange.bind(this);
	this.submitUser=this.submitUser.bind(this);
}
initialState = { email:"" }
resetUser=() => { this.setState(() => this.initialState) }
submitUser= event =>{
        event.preventDefault();
        const user = email: this.state.email };
        axios.post("http://localhost:8080/forms",user)
	.then(response => {
	if(response.data!=null){
	this.setState({"show":true});
	setTimeout(() => this.setState({"show":false}),3000);}
	else{ this.setState({"show":false}); }});
	this.setState(this.initialState);}
userChange = event =>{ this.setState({ [event.target.name]:event.target.value }) };
userList=()=>{ return this.props.history.push("/list"); };
render()
{ const {email}=this.state;