import './css/ContentComponent.css';

function ContentComponent(props){
return (
    <>
    <div className="content">
        <div className="about-us"> {props.name} </div>
       <div>
            <div className="qlinks">
                Quick links
            </div>
            <div className="qlinks">
                Quick links
            </div>
        </div>
    </div>
    
    </>
);
}

export default ContentComponent;