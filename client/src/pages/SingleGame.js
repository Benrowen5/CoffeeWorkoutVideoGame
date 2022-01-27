import React from 'react';
import GameList from '../components/GameList';
import Discussion from '../components/Discussion';
import CommentForm from '../components/CommentForm';
import { useParams } from 'react-router-dom';

const VideoGame = () => {
    const { id: gameId } = useParams();

    const games = [
        { _id: "5432", 
          name: 'Skyrim', 
          description: 'Open world medieval role playing game',
          comments: [
            {
                _id: "61c0e666ffb529afa43e9dec",
                commentText: "Test comment 2",
                username: "Sue",
                userId: "61c0e508ec7479a60d5b36f1",
                gameId: "5432",
                replies: [
                    {
                        "replyBody": "Heres a 3rd reply",
                        "username": "Paige",
                        "_id": "61c0e267d4e1888410cd5f05",
                        "replyId": "61c0e267d4e1888410cd5f06",
                        "createdAt": "Dec 20th, 2021 at 15:7 pm"
                    }
                ],
                createdAt: "Dec 20th, 2021 at 15:24 pm",
            },
            {
                _id: "61c0e6adffb529afa43e9df3",
                commentText: "Test comment 3",
                username: "Paige",
                userId: "61bd2c0595aea8a455c9d9f3",
                gameId: "5432",
                replies: [],
                createdAt: "Dec 20th, 2021 at 15:25 pm",
            }
          ]
        },
        { _id: "4567", 
          name: 'Mario Kart', 
          description: 'Action packed racing game',
          comments: [] 
        },
        { _id: "9876", 
          name: 'Soul Calliber', 
          description: 'Button mashing fighter',
          comments: [] 
        },
        { _id: "1234", 
          name: 'Animal Crossing', 
          description: 'Cute farm animals',
          comments: [
            {
                _id: "61c0e247d4e1888410cd5f01",
                commentText: "Test comment 1",
                username: "Paige",
                userId: "61bd2c0595aea8a455c9d9f3",
                gameId: "1234",
                replies: [
                    {
                        replyBody: "Heres a reply",
                        username: "Sunny",
                        _id: "61c0e267d4e1888410cd5f05",
                        replyId: "61c0e267d4e1888410cd5f06",
                        createdAt: "Dec 20th, 2021 at 15:7 pm"
                    },
                    {
                        replyBody: "Heres another reply",
                        username: "Paige",
                        _id: "61c0e267d4e1888410cd5f05",
                        replyId: "61c0e267d4e1888410cd5f06",
                        createdAt: "Dec 20th, 2021 at 15:7 pm"
                    }
                ],
                createdAt: "Dec 20th, 2021 at 15:6 pm",
            }
          ] 
        }
    ];

    let currentGame = games[0];

    for (let i = 0; i < games.length; i++) {
        console.log(games[i]._id);
        if (games[i]._id === gameId) {
            currentGame = games[i];
        }
    }

    return (
        <section className='flex-row'>
            <div className='game'>
                <h1>{currentGame.name}</h1>
                <p>{currentGame.description}</p>
                <CommentForm></CommentForm>
                <Discussion></Discussion>
            </div>
            <GameList></GameList>
        </section>

    );
}

export default VideoGame;