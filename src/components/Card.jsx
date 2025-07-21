import "./card.css";

export default function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>React card Component</h1>
            </div>
            <div className="cards">
                <Card />
            </div>
        </div>
    );
}
const Card = () => {
    return (
        <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png" alt="img" />
            <div className="card-body">
                <h2>Title of the card</h2>
                <p>caption of card</p>
                <h5>Author Name</h5>
            </div>
        </div>
    );
};