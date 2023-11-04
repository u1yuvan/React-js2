function btnClickEventHandler(){
    console.log('Button Clicked!');
}

function Button(props){
       return <button onClick={btnClickEventHandler} className="btn btn-primary">{props.children}</button>
}




export default Button;