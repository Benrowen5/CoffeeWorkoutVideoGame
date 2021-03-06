import axios from 'axios';

// // example
// getSomething (data)  {
//     let nameForReq = { backendKey: data.whatever }
//     Axios.get("route/route", nameForReq)
// }

// // all data for one event
// getEvent: function (eventData) {
//     var eventRequest = { event : eventData.event};
//     return axios.post("/api/event/one", eventRequest);
// },

export default {

    // USERS
    getAllUsers: function () {
        return axios.get("/api/users/");
    },
    getUser: function (id) {
        return axios.get("/api/users/"+id);
    },
    addUser: function (userData) {
        return axios.post("/api/users/", userData);
    },
    loginUser: function (userReq) {
        return axios.post("/api/users/login", userReq);
    },
    addFavorite: function (userId, gameId) {
        return axios.post('/api/users/'+userId+'/favorites/'+gameId);
    },
    deleteFavorite: function (userId, gameId) {
        return axios.delete('/api/users/'+userId+'/favorites/'+gameId);
    },

    // GAMES
    getAllGames: function () {
        return axios.get("/api/games/");
    },
    getGame: function (id) {
        return axios.get("/api/games/"+id);
    },
    //might need body here or params
    addGame: function (gameData) {
        return axios.post("api/games/", gameData);
    },

    //COMMENTS
    addComment: function (gameId, commentBody) {
        return axios.post("/api/comments/"+gameId, commentBody);
    },
    getComment: function (commentId) {
        return axios.get("/api/comments/"+commentId);
    },
    deleteComment: function (gameId, commentId) {
        return axios.delete("/api/comments/"+gameId+"/"+commentId);
    },
    addReply: function (gameId, commentId) {
        return axios.put("/api/comments/"+gameId+"/"+commentId);
    },
    deleteReply: function (gameId, commentId, replyId) {
        return axios.delete("/api/comments/"+gameId+"/"+commentId+"/"+replyId);
    }
};
