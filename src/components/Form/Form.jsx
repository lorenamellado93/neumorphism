import React, { useState } from "react";

const Form = (props) => {
  const submitForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="">Pick a color</label>
          <input type="color" />
          <label htmlFor="">or</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Size</label>
          <input type="range" />
        </div>
        <div>
          <label htmlFor="">Radius</label>
          <input type="range" />
        </div>
        <div>
          <label htmlFor="">Distance</label>
          <input type="range" />
        </div>
        <div>
          <label htmlFor="">Intensity</label>
          <input type="range" />
        </div>
        <div>
          <label htmlFor="">Blur</label>
          <input type="range" />
        </div>
        <div>
          <label htmlFor="" for="flat">Shape</label>
          <input type="radio" id="flat"/>
          <label htmlFor="" for="concave"></label>
          <input type="radio" id="concave"/>
          <label htmlFor="" for="convex"></label>
          <input type="radio" id="convex"/>
          <label htmlFor="" for="flatConcave"></label>
          <input type="radio" id="flatConcave"/>
        </div>
      </form>
    </section>
  );
};

export default Form;
