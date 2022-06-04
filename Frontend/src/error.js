import Header from './header.js';
import Footer from './footer.js';

export default function Error(){
    return (
        <>
            <Header/>
            <div className="container">
                <h1>Page not found</h1>
                <h2>Uh oh, we can't seem to find the page you're looking for.</h2>
                <a href="/index.html">Go To Home Page</a>
            </div>
            <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<Error/>);