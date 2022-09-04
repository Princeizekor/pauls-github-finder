import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState('Princeizekor')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSearch = () => {
        axios.get(`https://api.github.com/search/users?q=${search}`)
        .then(res => {
            setUser(res.data.items)
            setLoading(false)
            setError(false)
        })
        .then(err => {
            setError(err)
            setLoading(false)
        })
        setLoading(true)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    
    return (
        <div id="home">
            <div className="search-div">
            <input type="text" id="search" placeholder="Search User..." value={search} onChange={handleChange}/>
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <button className="btn" onClick={handleSearch}>Search</button>
            {
        loading ? <div className="loader">
        <img src="./img/Spinner-1s-24px (2).svg" alt="Loader image" className="spin"/>
        <p>Loading</p>
        </div> : null
            }
            <div className="users">
            {
                user?.length ? user?.map(prof =>  
                    <div className="details" key={prof?.id}>
                     <img src={prof?.avatar_url} alt="user-image" className="user-img"/>
                     <p>{prof?.login}</p>
                     <Link to={`/details/${prof?.login}`}><button className="more">More</button></Link>
                    </div>)
                : null}
            </div>
            {error ? <div className="loader">OOPS something went wrong, Could not fecth data, Please try refreshing your browser or try reopening ur browser</div> : null }
        </div>
    )
}

export default Home
