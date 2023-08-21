import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BlogCreate() {
  // Redirect
  let navigate = useNavigate();

  // State
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const postBlog = () => {
    axios
      .post(
        "https://64e37696bac46e480e78d7fd.mockapi.io/api/v1/blog/react_project",
        { header, content }
      )
      .then(() => {
        navigate("/blog/list2");
      })
      .catch((error) => {});
  };

  return (
    <React.Fragment>
      Blog Create
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
            onChange={(event) => {
              setHeader(event.target.value);
            }}
          />
          <span className="text-danger">{validationErrors.header}</span>
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
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <span className="text-danger">{validationErrors.content}</span>
        </div>

        <button
          className="btn btn-primary mb-5"
          onClick={postBlog}
          type="submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}
