// import React, { useState, useEffect } from 'react';
// import Auth from '../../utils/auth'
// import api from '../../utils/api';



function Dashboard(){
    // // starter function for calling favedGames
    // // waiting for route
    // const [faveGameData, setFaveGameData] = useState({});
    // const faveGameDataLength = Object.keys(faveGameData).length;

    // useEffect(() => {
    //     const getFaveGameData = async () => {
    //         try {
    //             const token = Auth.loggedIn() ? Auth.getToken() : null;

    //             if (!token) {
    //             return false;
    //             }

    //             const response = await api.getUser(token);

    //             if (!response.ok) {
    //             throw new Error('something went wrong!');
    //             }

    //             const user = await response.json();
    //             setFaveGameData(user);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //         };
    //         getFaveGameData()
    //     }, [faveGameDataLength]
    // );


    return(
        <div>Dashboard</div>
    )
};

export default Dashboard;