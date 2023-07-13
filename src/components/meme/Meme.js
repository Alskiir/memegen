import React from "react";
import './meme.css';

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme (prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <main>
        <div className="form">
            <input className="form--input"
                type="text"
                placeholder="Top text"
                name="topText"
                onChange={handleChange}
                value={meme.topText}
            />

            <input className="form--input"
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
            />

            <button className="form--button"
                onClick={getMemeImage}>
                Get a new meme image 🖼
            </button>
        </div>
        
        <div className="meme">
            <img className="meme--image" src={meme.randomImage} />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </main>
    )
}

export default Meme