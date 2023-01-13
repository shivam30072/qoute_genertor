import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuote, getTag, getQuoteByTag } from "../reduxfolder/actions/Action";
import axios from "axios";
import "../Styles.css";

const Quotes = () => {
  const quotes = useSelector((state) => state.quote.payload); // for random quote when the page loads.

  const tags = useSelector((state) => state.tag); // gets all the tags you can select.

  const newTag = useSelector((state) => state.selectedTag.payload); // fetches quote related to selcted tag.

  const dispatch = useDispatch(); // hook for dispatching actions

  // function for fetching random qoute
  const fetchQuotes = async () => {
    const response = await axios
      .get("https://api.quotable.io/random")
      .catch((err) => {
        console.log(err);
      });
    dispatch(getQuote(response.data.content));
  };

  
 // function for fetching all the tags
  const fetchTags = async () => {
    const response = await axios
      .get("https://api.quotable.io/tags")
      .catch((err) => {
        console.log(err);
      });
    dispatch(getTag(response.data));
  };


  // function for fetching quote related to the selected tag
  const fetchQuoteByTags = async (selected) => {
    const response = await axios
      .get(`https://api.quotable.io/random?tags=${selected}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(getQuoteByTag(response.data.content));
  };


  // useEffect hook for getting random quote and all the tags at the starting when the page loads for the first time.
  useEffect(() => {
    fetchQuotes(); // defined above
    fetchTags(); // defined above
  }, []);


 // for storing all the tags. I don't what happened but i couldn't able to traverse the state directly from store so i first stored in this. below function traverse the state and store the tags in arr.
const arr = []; 
const storingTag = () => {  
  for (let key in tags) {
    const newTag = tags[key];
    for (let key2 in newTag) {
      arr.push(newTag.name);
    }
  }
}

storingTag(); // calling the above function

  let chosenTag = "";  // selecting the tag from the options 
  const select = (tag) => {
    chosenTag = tag;
  };

  // rendering all the tags using map function
  const renderTags = arr.map((ar, index) => {
    return (
      <div className="tag" key={index}> {/*onclick functon for selecting the tag */}
        <span onClick={(e) => select(e.target.textContent)}>
          {ar}
          <br></br>{" "}
        </span>
      </div>
    );
  });

  // JSX starts here
  return (
    <>
      <div className="quote">
        <div>{/* conditional statement, because at first random quote will be shown because newTag would be empty so random qoute will be shown */}
          <p className="para">{newTag ? newTag : quotes}</p>
        </div>
        <div className="bookmark">BM</div>
      </div>
      <div className="inputSection">
        <div className="tagSection">{renderTags}</div>
        <div>
          <button
            onClick={() => {// onclick function on button to fetch new quote 
              fetchQuoteByTags(chosenTag);
            }}
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </>
  );
};

export default Quotes;
