const {default: Footer} = require("./footer");
const {default: Header} = require("./header");


const Layouts = (props) => {
    return ( 
    <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-auto">{props.children}</div>
        <Footer/>
    </div>
    );
};

export default Layouts;