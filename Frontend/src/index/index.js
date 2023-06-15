import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Content from './content.js';


function App(){

    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    );
} 

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<App/>);