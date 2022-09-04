import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
    const [data, setData] = useState([])
    const [repo, setRepo] = useState([])
    const [hire, setHire] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [location, setLocation] = useState(null)
    const Param = useParams()
    useEffect(() => {
        axios.get(`https://api.github.com/users/${Param.details}`)
        .then(res => {
            setData(res.data)
            setHire(true)
            setLoading(false)
            setError(false)
            setLocation(data.location)
        })
        .catch(err => {
            setError(err)
            setHire(false)
            setLoading(false)
            setLocation(null)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://api.github.com/users/${Param.details}/repos`)
        .then(res => {
            setRepo(res.data)
            setError(false)
        })
        .catch(err => {
            setError(err)
        })
    }, [])
    return (
        <div className="detail">
            <Link to="/"><button className="back"><i className="arrow-left fa-solid fa-arrow-left"></i>Back To Search</button></Link>
            {
        loading ? <div className="loader">
        <img src="./img/Spinner-1s-24px (2).svg" alt="Loader image" className="spin"/>
        <p>Loading</p>
        </div> : null
            }
                    <div className="user-data">
                <div className="user-data1">
                <img src={data?.avatar_url} alt="user-image" className="user-img"/>
                <h3>{data?.name}</h3>
                     <p>{location ? 'Location: null' : `Location: ${data?.location}`}</p>
                     <button className="hire">{hire ? <p><i className="uncheck fa-solid fa-xmark"></i> Not Hireable </p> : <p><i className="check fa-solid fa-check"></i> Hireable</p> }</button>
                </div>
                <div className="user-data2">
                    <h3>Bio</h3>
                    <p>{data?.bio}</p>
                    <a href={data?.html_url} target="_blank"><button className="visit">Visit Github Profile</button></a>
                    <p className="name">Username: {data?.login}</p>
                    <p className="comp">company: {data?.company}</p>
                    <p className="web">Website: {data?.blog}</p>
                </div>
            </div>
            <div className="follow-data">
                 <button className="followers"><i className="fa-solid fa-users"></i> Followers: {data?.followers}</button>
                 <button className="following"><i className="fa-solid fa-user-plus"></i> Following: {data?.following}</button>
                 <button className="repo"><i className="fa-brands fa-github"></i> Public Repo: {data?.public_repos}</button>
                 <button className="gist"><i className="fa-brands fa-github-alt"></i> Public Gists: {data?.public_gists}</button>
            </div>
            {
                repo?.map?.((items, i) => 
                <div className="follow-data2" key={i}>
                    <a href={items?.html_url}>
                        {items?.name}
                    </a>
                </div>
                )
            }
            {
                error ? <div className="loader">OOPS something went wrong, Could not fecth data, Please try refreshing your browser or visit{<Link to='/'>Home page</Link>}</div> : null
            }
        </div>
    )
}

export default Details
