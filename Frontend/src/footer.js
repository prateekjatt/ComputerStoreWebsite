
export default function Footer(){
    let year = new Date().getFullYear();

    return (
        <footer>
            <div className="upperfooter">
                <div className="company">
                    <ul className="ul1">
                        <li><h2>COMPUTER STORE</h2></li>
                        <li><p>INDIA</p></li>
                    </ul>
                </div>
                <div className="info">
                    <ul className="ul2">
                        <li><h2>INFORMATION</h2></li>
                        <li><p>Sitemap</p></li>
                        <li><p>Payment Method</p></li>
                        <li><p>Cancellation & Refund</p></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <ul className="ul3">
                        <li><h2>NEWSLETTER</h2></li>
                        <li><p>Stay up to date with news and promotions.</p></li>
                        <li><input type="text" placeholder="Enter Email"/><input type="submit" value="Send"/></li>
                    </ul>
                </div>
            </div>
            <div className="lowerfooter">
                <p>Copyright © {year}, Computer Store, All Rights Reserved.</p>
            </div>
        </footer>
    );
}