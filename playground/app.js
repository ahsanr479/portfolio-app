class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options:[]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlDeleteOption = this.handlDeleteOption.bind(this);
    }

    componentDidMount() {
       try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options}));
        }
       }catch(e){
            //Do nothing at all
       }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
            console.log('saving data');
        }
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }

    handleDeleteOptions(){
        this.setState(() => ({ options:[] }));
    }

    handlePick(){
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIndex];
        alert(option);
    }

    handlDeleteOption(optionToRemove){
       this.setState((prevState) => ({
           options: prevState.options.filter((option) => {
               return optionToRemove !== option;
           })
       }));
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add option';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((preState) => (
             {
               options: preState.options.concat([option])
            }
        ))
    }

    render(){
        const subTittle = "Put you life in the hands of a computer";
        const options = this.state.options;
        return (
            <div>
                <Header subTittle = {subTittle}/>
                <Action 
                    hasOptions={options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options options={options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handlDeleteOption = {this.handlDeleteOption}
                />
                <AddOption handleAddOption = {this.handleAddOption} />
            </div>
        )
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.tittle }</h1>
            <h2>{props.subTittle && <p>{props.subTittle}</p>}</h2>
        </div>
        );
}

Header.defaultProps = {
    tittle:'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled = {!props.hasOptions}
            onClick={props.handlePick}>What should i do</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>please add options</p>}
            {props.options.map((option) => {
                 return <Option 
                 key={option} 
                 optionText={option} 
                 handlDeleteOption = {props.handlDeleteOption}
                 />
            })}
        </div>
    )
}


const Option=(props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handlDeleteOption(props.optionText)
                }}
            >Remove</button>
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));
        if(!error){
            e.target.elements.option.value = "";
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const User=()=>{
//     return(<div>
//         <p>Name:</p>
//         <p>Age:</p>
//     </div>)
// };


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));