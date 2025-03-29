import profilePicture from './assets/aadhar.png'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePicture} alt="profile picture"></img>
            <h2 className='card-title'>Payaluga</h2>
            <p className='card-content'>react js payaluga da koduramma!!!</p>
        </div>
    )
}

export default Card