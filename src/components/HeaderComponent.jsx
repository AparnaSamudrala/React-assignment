import './css/HeaderComponent.css';
function HeaderComponent(props){
    return (
        <div className="header">
            {props.name}
        </div>
        
    );
}

export default HeaderComponent;