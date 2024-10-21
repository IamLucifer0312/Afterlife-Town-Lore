import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MiddlePage = () => {
  const purpose = useParams().purpose;
  const storyNo = useParams().storyNo;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(purpose);
    console.log(storyNo);
    if (localStorage.getItem("isAuthenticated") !== "true") {
      switch (purpose) {
        case "story":
          navigate("/login/story/" + storyNo);
          break;
        default:
          navigate("/login");
      }
    } else {
      switch (purpose) {
        case "story":
          navigate(
            "/get-story/" + localStorage.getItem("user") + "/" + storyNo
          );
          break;
        default:
          navigate("/main-page/" + localStorage.getItem("user"));
      }
    }
  }, []);
};

export default MiddlePage;
