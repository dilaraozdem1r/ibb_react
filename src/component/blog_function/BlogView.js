import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BlogView() {
  const [viewApi,setViewApi] = useState([]); 
  const [id, setId] = useState(null);
  let navigate = useNavigate();



  useEffect(() => {
    setId(localStorage.getItem("view_id"));
    axios.get(`https://64e37696bac46e480e78d7fd.mockapi.io/api/v1/blog/react_project/${localStorage.getItem("view_id")}`)
    .then((response) => {
      setViewApi(response.data);
  
    }).catch((error) => {console.log(error)});
  }, []) 
  return (
    <div>
      <br /><br /><br /><br /><br />
      {localStorage.getItem("view_id")}
      <br />
      {viewApi.header}
      <br />
      {viewApi.content}
    </div>
  )
}
