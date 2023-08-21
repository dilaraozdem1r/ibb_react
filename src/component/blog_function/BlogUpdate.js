import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function BlogUpdate() {

  let navigate = useNavigate();

  const [id, setId] = useState(null);
  const [header, setHeader] = useState(null);
  const [content, setContent] = useState(null); 

  useEffect(() => {
    setId(localStorage.getItem("blog_id"));
    setHeader(localStorage.getItem("blog_header"));
    setContent(localStorage.getItem("blog_content"));
  }, []);

  //API SERVICES
  const blogUpdate = async(event) => {
    event.preventDefault();
    const blogDto = {header,content}
   
    try{
      const response = await axios.put(`https://64e37696bac46e480e78d7fd.mockapi.io/api/v1/blog/react_project/${id}`,blogDto);
      if(response.status === 200){
        alert("guncellendi");
        navigate("/blog/list2");
      }
    }catch(err){
      console.log(err);
    }
   
  }
  return (
    <React.Fragment>blog_update

<form>
        <div className="form-group mb-4">
          <span>Header</span>
          <input
            type="text"
            className="form-control"
            id="header"
            name="header"
            placeholder="Header"
            required={true}
            value={header}
            onChange={(event) => {
              setHeader(event.target.value);
            }}
          />
          {/* <span className="text-danger">{validationErrors.header}</span> */}
        </div>

        <div className="form-group mb-4">
          <span>Content</span>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            placeholder="Content"
            required={true}
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          {/* <span className="text-danger">{validationErrors.content}</span> */}
        </div>

        <button
          className="btn btn-primary mb-5"
          onClick={blogUpdate}
          type="submit"
        >
          Submit
        </button>
      </form>

    </React.Fragment>
  )
}
