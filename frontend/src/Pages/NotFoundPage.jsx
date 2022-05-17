import React from 'react';
import { Link } from 'react-router-dom';
// import PageNotFound from '../../public/404-Error-Page1.png';
// import "./NotFoundPage.css";
function NotFoundPage() {
    return (
        <div style={{
            height: "100vh",
            width: "100%",
            // border: "3px solid red"
        }}>
            <h1 style={{
                display: "flex",
                justifyContent: "left",
                color: "white",
                fontSize: "30px",
                padding: "20px"
                // border: "3px solid green"
            }}><Link to="/">Go to Home </Link></h1>
            <h1 style={{
                display: "flex",
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                fontSize: "50px",
                // border: "3px solid pink"

            }}>404 - Error Page Not Found</h1>
        </div >
    );
    // return (
    //     // <div style={{ backgroundColor: '#0080FF' }}>
    //     <div>
    //         <div>
    //             <div>
    //                 {/* <img src={require("../public_images/404-Error-Page1.png")} /> */}
    //             </div>
    //             <div>
    //                 <h1 style={{ textAlign: "left", paddingLeft: "10px", color: "white", fontSize: "20px", position: "absolute" }}>
    //                     <Link to="/">Go to Home </Link>
    //                 </h1>
    //             </div>

    //         </div>
    //     </div>
    // );
}
export default NotFoundPage;