import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BlogList() {
  const [mockApi, setMockApi] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://64e37696bac46e480e78d7fd.mockapi.io/api/v1/blog/react_project"
      )
      .then((response) => {
        setMockApi(response.data);
      })
      .catch((error) => {});

    console.log(mockApi);
  }, []);

  //Blog Object set
  const setBlogData = (data) => {
    let { id, header, content } = data;
    localStorage.setItem("blog_id", id);
    localStorage.setItem("blog_header", header);
    localStorage.setItem("blog_content", content);
  };

  //Blog Object Get
  const getBlogData = () => {
    axios
      .get(
        "https://64e37696bac46e480e78d7fd.mockapi.io/api/v1/blog/react_project"
      )
      .then((response) => {
        setMockApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const blogDelete = (id) => {
    axios
      .delete(
        `https://64e37696bac46e480e78d7fd.mockapi.io/api/v1/blog/react_project/${id}`
      )
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <h1 className="text-center display-4 text-uppercase mt-5">Blog List</h1>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>HEADER</th>
            <th>CONTENT</th>
            <th>DATE</th>
            <th>PICTURE</th>
            <th>GÜNCELLE</th>
            <th>GÖSTER</th>
            <th>SİL</th>
          </tr>
        </thead>
        <tbody>
          {mockApi.map((temp) => (
            <tr key={temp.id}>
              <td>{temp.id}</td>
              <td>{temp.header}</td>
              <td>{temp.content}</td>
              <td>{temp.createdAt}</td>
              <td>{temp.avatar}</td>
              {/* UPDATE */}
              <td>
                <Link to="/blog/update2">
                  <button type="button" onClick={() => setBlogData(temp)}>
                    <i className="fa-solid fa-pen-nib text-primary text-center"></i>
                  </button>
                </Link>
              </td>

              <td>
                <Link to="/blog/view2">
                  <button type="button" onClick={() => setBlogData(temp)}>
                    <i className="fa-solid fa-binoculars text-warning text-center"></i>
                  </button>
                </Link>
              </td>

              {/* DELETE */}
              <td>
                <button type="button" onClick={() => blogDelete(temp.id)}>
                  <i className="fa-solid fa-trash text-danger text-center"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
