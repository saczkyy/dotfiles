// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
// import { BiUserCircle } from "react-icons/bi";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function App() {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(5);
    const [show, setShow] = useState(true);
    const [like2, setLike2] = useState(false);
    const [count2, setCount2] = useState(5);
    const [show2, setShow2] = useState(true);
    const [like3, setLike3] = useState(false);
    const [count3, setCount3] = useState(5);
    const [show3, setShow3] = useState(true);

    const handleLikes = () => {
        if (!like) {
            setLike(true);
            setCount(count + 1);
        } else {
            setLike(false);
            setCount(count - 1);
        }
    };
    const handleLikes2 = () => {
        if (!like2) {
            setLike2(true);
            setCount2(count2 + 1);
        } else {
            setLike2(false);
            setCount2(count2 - 1);
        }
    };
    const handleLikes3 = () => {
        if (!like3) {
            setLike3(true);
            setCount3(count3 + 1);
        } else {
            setLike3(false);
            setCount3(count3 - 1);
        }
    };

    const imageUrl = "img";

    return (
        <div className="main-container">
            
            <h4>Likes Count: {count+count2+count3}</h4>

            <div class="things0">
                <div class="things">
                    <div class="post">
                        <h1>First Title</h1>
                        <h4>{count}</h4>
                        <button type="button" onClick={() => {
                            setShow(!show);
                            handleLikes();
                        }}>
                            {show === true ? 'Like' : 'Dislike'}
                        </button>
                    </div>
                    <div class="post">
                        <h1>Second Title</h1>
                        <h4>{count2}</h4>
                        <button type="button" onClick={() => {
                            setShow2(!show2);
                            handleLikes2();
                        }}>
                            {show2 === true ? 'Like' : 'Dislike'}
                        </button>
                    </div>
                    <div class="post">
                        <h1>Third Title</h1>
                        <h4>{count3}</h4>
                        <button type="button" onClick={() => {
                            setShow3(!show3);
                            handleLikes3();
                        }}>
                            {show3 === true ? 'Like' : 'Dislike'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
