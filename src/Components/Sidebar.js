import React, { useContext, useState } from 'react'
import { ContextProvider } from '../Global/Context'

const Sidebar = () => {
    const { user, loading, } = useContext(ContextProvider);
    const username = !loading && user && user.displayName ? user.displayName : '';
    const [state, setState] = useState([
        {id:1, image: "https://designpress-10674.kxcdn.com/wp-content/uploads/2014/04/debonair-mens-hairstyles.jpg", name: "Hairs"},
        {id:2, image: "https://ourhairstyle.com/design/design.273.jpg", name: "Popuns"},
        {id:3, image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/04/01/967300-shah-rukh-khan.jpg", name: "Shah Rukh"},
        {id:4, image: "https://www.pinkvilla.com/files/styles/contentpreview/public/siddharth_pithani_given_10_day_parole_for_wedding.jpg?itok=lMZFeONP", name: "Sushant"},
        {id:5, image: "https://indianewengland.com/wp-content/uploads/2019/06/Katrina-Kaif-IANS.png", name: "Katrina Kaif"}
    ]);
    return (
        <div className="sidebar">
            {!loading && user ? (
                <div className="sidebar_user">
                    <div className="sidebar_user-avtor">{username[0]}</div>
                    <div className="sidebar_user-name">{username}</div>
                </div>
            ) : ( 
                ''
                )}
            <div className="sidebar_list">
                <h3>Suggestions for You</h3>
                {state.map((user)=> (
                    <div className="sidebar_list-user" key={user.id}>
                        <div className="sidebar_list-a">
                            <div className="sidebar_list-a-img">
                                <img src={user.image} alt={user.name} />
                            </div>
                            <div className="sidevar_list-a-name">{user.name}</div>
                        </div>
                        <div className="sidebar_list-b">
                            <a href="#">Follow</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
