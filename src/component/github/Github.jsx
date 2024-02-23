import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data =  useLoaderData()
    console.log(data);
    // const [data, setData] =  useState ([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AkhileshHjp')
    //     .then( res => res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="" width={300} />
        </div>

  )
}

export default Github


export  const gitInfo = async () =>{
    const resp =   await fetch('https://api.github.com/users/PujaKumari0')
    return resp.json()
} 