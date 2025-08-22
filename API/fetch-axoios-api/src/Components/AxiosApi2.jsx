import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosApi2 = () => {
    const [postdata,setPostData]=useState(null);
    const baseUrl = ('https://jsonplaceholder.typicode.com/posts')
    useEffect(()=>{
        
        axios.get(`${baseUrl}/1`)
        .then((response)=>setPostData(response.data));
    },[])
function createPost (){
    axios.post(baseUrl,{
        title:'hello guys',
        body:'i am good'
    }).then((response)=>{
        setPostData(response.data);
    })
}
    if (!postdata) return 'nothing';
  return (
    <div>
        <ul>
          <h2>{postdata.title}</h2>
          <p>{postdata.body}</p>
        </ul>
        
      {/* <ul>
        {postdata.map((item)=>{
        return <li key={item.id}>{item.title}<ul><li>{item.body}</li></ul></li>
      })}
      </ul> */}
      <button className='btn btn-danger' onClick={createPost}>Create Post</button>
    </div>
  )
}

export default AxiosApi2
