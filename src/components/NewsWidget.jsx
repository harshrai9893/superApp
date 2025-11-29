// import React , {useState,useEffect} from 'react'
// import fetchNews from '../api/fetchNews';
// // import formatDateAndTime from "../utils/formatDateAndTime"

// const NewsWidget = () => {
//     const[news,setNews] = useState(null);
//     useEffect(()=>{
//         fetchNews().then((data)=>{
//             if(data.status=="ok"){
//                  console.log(data);
//                 const randomIndex =Math.floor(Math.random()*data.articles.length);
//                 setNews(data.articles[randomIndex])
//             }
//         })
//     },[] );
 
//     console.log(news);
   

//   return (
//     <div className="">
//         <div className="">
//             <img src={news?.urlToImage} alt="News Image" />
//             <div>
//                 <p>{news?.title}</p>
//                 <p>{news?.publishedAt}</p>
//             </div>
//         </div>
//         <div className="">
//             <p>
//               {news?.content}
//             </p>
//         </div>
//     </div>
//   )
// }

// export default NewsWidget


// chat gpt code ----->

import React, { useState, useEffect } from "react";
import fetchNews from "../api/fetchNews"; // assume default export; see below if named export

const NewsWidget = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    // If fetchNews2 returns axios response, we normalize below.
    fetchNews()
      .then((raw) => {
        console.log("raw fetch result:", raw); // <-- inspect this first
        const data = raw?.data ?? raw; // normalize axios response vs direct JSON
        console.log("normalized data:", data);

        // defensive checks
        if (!data) {
          throw new Error("No data returned from fetchNews");
        }

        // status check — some APIs return "ok", some return other shapes
        const ok = data.status === "ok" || data.status === "OK" || !!data.articles;
        if (!ok) {
          throw new Error("API returned unexpected status: " + JSON.stringify(data.status));
        }

        const articles = data.articles || [];
        if (articles.length === 0) {
          throw new Error("No articles in response");
        }

        const randomIndex = Math.floor(Math.random() * articles.length);
        if (mounted) setNews(articles[randomIndex]);
                // setLoading(false)

      })
      .catch((err) => {
        console.error("fetchNews error:", err);
        if (mounted) setError(err.message || String(err));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  console.log("news state:", news);

  if (loading) return <div>Loading news…</div>;
  if (error) return <div>Error: {error}</div>;
  if (!news) return <div>No news available</div>;

  // Note: correct field name is urlToImage (not urlTOImage)
  return (
    <div className="height-100">
      <div className="">
        {news.urlToImage ? (
          <img src={news.urlToImage} alt={news.title || "news image"} />
        ) : (
          <div className="placeholder-image">No image</div>
        )}
        <div>
          <p>{news.title}</p>
          <p>{news.publishedAt}</p>
        </div>
      </div>

      <div className="bg-red-500 text-white p-5 text-3xl">
        <p>{news.content ?? news.description ?? "No content available"}</p>
      </div>
    </div>
  );
};

export default NewsWidget;
