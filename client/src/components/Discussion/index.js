import React, {Fragment} from 'react';
import Title from "../Title/Title";
// import { useParams } from 'react-router-dom';
// import CommentForm from '../CommentForm';
import styles from './Discussion.module.css';

const Discussion = (props) => {
    // const { id: gameId } = useParams();

    // const games = [
    //     { _id: "5432", 
    //       name: 'Skyrim', 
    //       description: 'Open world medieval role playing game',
    //       comments: [
    //         {
    //             _id: "61c0e666ffb529afa43e9dec",
    //             commentText: "Test comment 2",
    //             username: "Sue",
    //             userId: "61c0e508ec7479a60d5b36f1",
    //             gameId: "5432",
    //             replies: [
    //                 {
    //                     "replyBody": "Heres a 3rd reply",
    //                     "username": "Paige",
    //                     "_id": "61c0e267d4e1888410cd5f05",
    //                     "replyId": "61c0e267d4e1888410cd5f06",
    //                     "createdAt": "Dec 20th, 2021 at 15:7 pm"
    //                 }
    //             ],
    //             createdAt: "Dec 20th, 2021 at 15:24 pm",
    //         },
    //         {
    //             _id: "61c0e6adffb529afa43e9df3",
    //             commentText: "Test comment 3",
    //             username: "Paige",
    //             userId: "61bd2c0595aea8a455c9d9f3",
    //             gameId: "5432",
    //             replies: [],
    //             createdAt: "Dec 20th, 2021 at 15:25 pm",
    //         }
    //       ]
    //     },
    //     { _id: "4567", 
    //       name: 'Mario Kart', 
    //       description: 'Action packed racing game',
    //       comments: [] 
    //     },
    //     { _id: "9876", 
    //       name: 'Soul Calliber', 
    //       description: 'Button mashing fighter',
    //       comments: [] 
    //     },
    //     { _id: "1234", 
    //       name: 'Animal Crossing', 
    //       description: 'Cute farm animals',
    //       comments: [
    //         {
    //             _id: "61c0e247d4e1888410cd5f01",
    //             commentText: "Test comment 1",
    //             username: "Paige",
    //             userId: "61bd2c0595aea8a455c9d9f3",
    //             gameId: "1234",
    //             replies: [
    //                 {
    //                     replyBody: "Heres a reply",
    //                     username: "Sunny",
    //                     _id: "61c0e267d4e1888410cd5f05",
    //                     replyId: "61c0e267d4e1888410cd5f06",
    //                     createdAt: "Dec 20th, 2021 at 15:7 pm"
    //                 },
    //                 {
    //                     replyBody: "Heres another reply",
    //                     username: "Paige",
    //                     _id: "61c0e267d4e1888410cd5f05",
    //                     replyId: "61c0e267d4e1888410cd5f06",
    //                     createdAt: "Dec 20th, 2021 at 15:7 pm"
    //                 }
    //             ],
    //             createdAt: "Dec 20th, 2021 at 15:6 pm",
    //         }
    //       ] 
    //     }
    // ];

    // let currentGame = games[0];

    // for (let i = 0; i < games.length; i++) {
    //     //console.log(games[i]._id);
    //     if (games[i]._id === gameId) {
    //         currentGame = games[i];
    //     }
    // }

    //after logging in, use console log for correct keys
    
    return (
        <div className='discussion'>
            <Title title={'Discussion'}/>
            <div className={styles.comments}>
                {props.comments?.map((comment) => (
                    <Fragment>
                        <p className={styles.date}>{comment.createdAt}</p>
                        <p className={styles.comment}>{comment.commentBody}</p>
                        <p className={styles.username}>{comment.commentBy}</p>
                        <div className={styles.replies}>
                            <p className={styles.repliesTitle}>Replies</p>
                            {comment.replies?.map((reply) => (
                                <p className={styles.reply}>{reply.replyBody}</p>
                            ))}
                            {/* <CommentForm></CommentForm> */}
                        </div>
                    </Fragment>
                    ))}
            </div>

            {/*Delete below after populating data above using list map*/}
            <div className={styles.comments}>
                <p className={styles.date}>Jan 12, 2021</p>
                <p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                    condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                    mi, ac feugiat metus aliquam maximus.</p>
                <p className={styles.username}>reactpro</p>
                <div className={styles.replies}>
                    <p className={styles.repliesTitle}>Replies</p>
                    <p className={styles.reply}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                        condimentum molestie.</p>
                </div>
            </div>
        </div>
    );
};

export default Discussion;
