import './app.css'
import Products from './Components/Products';

function App() {
    // const p = document.createElement('p');
    // p.textContent = 'This is a Demo Paragraph!'
    // return p;
    let msg = 'Awesome'
    return (<div className='row'>
        <div className='col-lg-8 mx-auto'>
            <Products></Products>;
        </div>

    </div>)
}


export default App;
