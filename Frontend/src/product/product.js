import Header from './../header/header.js'
import Footer from './../footer/footer.js'
import Content from './content.js'

export default function Product({product}){
    
    product = JSON.parse(product)


    return(<>

        <Header/>
        <Content product={product}/>
        <Footer/>        
    
    </>)
}

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<Product product={data}/>);