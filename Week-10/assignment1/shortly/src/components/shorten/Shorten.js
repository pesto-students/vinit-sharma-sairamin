import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../button";
import Copy from "../copy";
import Error from "../error";
import Input from "../input";
import validator from "validator";
import "./shorten.css";

//component
const Shorten = () => {
  const [inputUrl, setInputUrl] = useState();
  const [urlOnClickEvent, setUrlOnClickEvent] = useState();
  const [shortenedUrl, setShortenedUrl] = useState();
  const [errorPopUpMessage, setErrorPopUpMessage] = useState();

  //executing makeApiRequest(urlOnClickEvent) function on first load, refresh, and when  "urlOnClickEvent" has value
  useEffect(() => {
    if (urlOnClickEvent) {
      makeApiRequest(urlOnClickEvent);
    }
  }, [urlOnClickEvent]);

  //geting value(url) from the input field
  function getInputUrl(e) {
    setInputUrl(e.target.value);
  }

  //this function running onClick event
  function submitUrlOnClick() {
    if (inputUrl) {
      if (validator.isURL(inputUrl)) {
        setUrlOnClickEvent(inputUrl);
      } else {
        setErrorPopUpMessage("input value must be an URL");
      }
    } else {
      setErrorPopUpMessage("input field should not be empty");
    }
    setInputUrl("");
  }

  //fetching response using axios from the api
  async function makeApiRequest(urlOnClickEvent) {
    try {
      var response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${urlOnClickEvent}`
      );
      var shortUrl = response.data.result.full_short_link;
      setShortenedUrl(shortUrl);
    } catch (err) {
      setErrorPopUpMessage(err.message);
    }
  }

  return (
    <>
      {errorPopUpMessage ? (
        <Error
          onErrorMessage={errorPopUpMessage}
          onSetErrorMassege={setErrorPopUpMessage}
        />
      ) : (
        ""
      )}
      <div className="shorten_super_container">
        <div className="shorten_sub_container">
          <Input onGetInputUrl={getInputUrl} inputUrl={inputUrl} />
          <Button
            onClickButton={() => submitUrlOnClick()}
            buttonName="Shorten It!"
          />
        </div>
      </div>
      <Copy shortenedUrl={shortenedUrl} longUrl={urlOnClickEvent} />
    </>
  );
};

export default Shorten;
