import './css/NavigationComponent.css';

function NavigationComponent(props){
    return (
        <nav className="nav-wrapper">
            {
        props.menu.map((menuArr) =>
            <ul className="nav-list">
                <li>{menuArr.menu1}</li>
                <li>{menuArr.menu2}</li>
                <li>{menuArr.menu3}</li>
                <li>{menuArr.menu4}</li>
                
            </ul>
            )
            }
        </nav>
        
    );
}

export default NavigationComponent;