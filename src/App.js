import React, { useEffect, useState } from 'react';
import { callApi } from "./utils/call-api"
import { subUrl } from "./constants/api-sub-url"

const App = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    const payload = {
      "userId": 1,
      "id": 4,
      "title": "title for testing...",
      "body": "body for testing....."
    }

    callApi(subUrl.posts, "get", null, payload).then((res) => {
      setPosts(res)
    }).catch((error) => {
      alert("Error occure" + error)
    })

  }, [])


  return (
    <>
      <div style={{ marginLeft: "500px", marginTop: "50px" }}>
        <h1>Title</h1>
        {posts.slice(1, 10).map((info, index) =>
          <h6 key={index}>{info.title}</h6>
        )}
      </div>
    </>
  );
}

export default App;
