import React from 'react'
import { useState } from 'react'


export default function NavBar() {
    const ContentsContainer = ({ listName }) => {
        if (listName === "detail") {
            return <div>상세정보</div>
        } else if (listName === "qa") {
            return <div>Q&A</div>
        } else if (listName === "review") {
            return <div>Review</div>
        }
    }

    const [listName, setListName] = useState('detail');
    const checkId = (e) => {
        setListName(e.target.id);
    }
    return (
        <>
            <nav>
                <ul>
                    <li
                        id="detail"
                        style={
                            listName === "detail" ? { color: "red" } : { color: "black" }
                        }
                        onClick={checkId}
                    >
                        상세정보
                    </li>
                    <li
                        id='qa'
                        style={
                            listName === "qa" ? { color: "red" } : { color: "black" }
                        }
                        onClick={checkId}
                    >
                        Q&A
                    </li>
                    <li
                        id='review'
                        style={
                            listName === "review" ? { color: "red" } : { color: "black" }
                        }
                        onClick={checkId}
                    >
                        Review
                    </li>
                </ul>
            </nav>
            <ContentsContainer listName={listName} />
        </>
    )
}
