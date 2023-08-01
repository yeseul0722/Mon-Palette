import React, { useState } from "react";
import styles from "./Comment.module.css"
import { FixedSizeGrid as Grid } from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';


const getTimegap = (createdAt) => {
    const msgap = Date.now() - new Date(createdAt).getTime();
    const minutegap = Math.floor(msgap / 60000);
    const hourgap = Math.floor(msgap / 3600000);
    const daygap = Math.floor(msgap / 86400000);

    if (msgap < 0) {
        return <span>0분전</span>;
    }
    if (hourgap > 24) {
        return <span>{daygap}일 전</span>;
    }
    if (minutegap > 60) {
        return <span>{hourgap}시간 전</span>;
    } else {
        return <span>{minutegap}분 전</span>;
    }
};

// const [comment, setComment] = useState("");
// const onChange = (event) => {
//     setComment(event.target.value);
// }

// const [commentArray, setCommentArray] = useState([]);
// const onSubmit = event => {
//     event.preventDefault();
//     if (comment === '') {
//         return;
//     }
//     setCommentArray(commentValueList => [comment, ...commentValueList])
//     setCommentArray('');
// };

// <div onSubmit={onSubmit}>
//     <form>
//         <input
//         type="text"
//         placeholder="댓글달기..."
//         value={comment}
//         onChange={onChange}
//         />
//         <button>게시</button>
//     </form>
// </div>

function Comment(props) {

    const FeedData = {

        "data" : [
            {
                "comments": [
                    {
                        "id": 16,
                        "userId": 57,
                        "nickname": "kuromiClon",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양안녕1test양안녕2test양안녕3test양안녕4test양안녕5test양안녕6test양안녕7test양안녕8test양안녕9test양안녕10아아아아아아아아아아아아아아아아아아아아아아아아",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 15,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 14,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 13,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 12,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 11,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 10,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 9,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 8,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 7,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 6,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 5,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    },
                    {
                        "id": 4,
                        "userId": 71,
                        "nickname": "pink",
                        "profileImage": "data:image/png;base64,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",
                        "commentContent": "너무 귀엽쟈나",
                        "createdAt": "2023-07-29T10:10:32.146994"
                        
                    },
                    {
                        "id": 3,
                        "userId": 90,
                        "nickname": "bean",
                        "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YlSdFlOtclsjiwcZLJB1LLrWL-piKP2YKQ&usqp=CAU",
                        "commentContent": "호엑",
                        "createdAt": "2023-07-28T20:15:32.146994"
                        
                    },
                    {
                        "id": 2,
                        "userId": 89,
                        "nickname": "apeach",
                        "profileImage": "data:image/png;base64,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",
                        "commentContent": "쫀귀",
                        "createdAt": "2023-07-27T10:32:32.146994"
                        
                    },
                    {
                        "id": 1,
                        "userId": 57,
                        "nickname": "kuromiClone",
                        "profileImage": "https://i.namu.wiki/i/l9JWhPivO-KKFbsrt4fEwBh-KCMDLsmA1f93kmd_lJLNnPxmZHmU7GoARSDXJJ4atDBU_dDKQcM8s93h-H_PxQ.svg",
                        "commentContent": "test양",
                        "createdAt": "2023-07-29T20:10:32.146994"


                    }
                ],
            }

        ]

    }

    

    // let commentArray = props.commentArray;

    return (
        <div>
          {FeedData.data.map((info) => (
            <div key={info.id}>
              <div>
                {
                    info.comments.map((comment) => (
                        <div className={styles.commentInfo}>
                            <div>
                                <img
                                className={styles.img}
                                src={comment.profileImage}
                                alt=""
                                />
                            </div>
                            <div className={styles.author_info}>
                                <span
                                className={styles.author}
                                >{comment.nickname}</span>
                                <div className={styles.time}>{getTimegap(comment.createdAt)}</div>
                            </div>
                            <div className={styles.content_wrap}>
                                <p>{comment.commentContent}</p>
                            </div>
                        </div>
                        
                    ))
                }
              </div>
            </div>
          ))}
        </div>
      );
      
}

export default Comment;