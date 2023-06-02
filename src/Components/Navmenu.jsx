import '../Styles/Navmenu.css';

const Navmenu = () => {
    const menuList = [
        { link: "Home" },
        { link:"About"},
        { link:"Menu"},
        { link:"Events"},
        { link:"Chefs"},
        { link:"Gallery"},
        { link:"Drop Down"},
        { link:"Contact"},
    ]
    return ( 
        <div className="navMenu">
            <ul id='list'>
                {
                    menuList.map(listItems => {
                        return <li><a href="#">{listItems.link}</a></li>
                    })
                }
            </ul>
        </div>
     );
}
 
export default Navmenu;