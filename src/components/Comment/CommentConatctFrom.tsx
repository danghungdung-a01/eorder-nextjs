'use client'
import React, { useState } from "react";
import { SubmitButton } from "../Button/Button";

type Inputs = {
  fristname: string;
  email: string;
  textarea: string;
};

export default function CommentConatctFrom() {
  const [inputs, setInputs] = useState<Inputs>({
    fristname: "",
    email: "",
    textarea: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Data send successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="from-input flex gap-2">
        <input
          placeholder="Name"
          className="md:w-1/2 w-full"
          type="text"
          name="fristname"
          value={inputs.fristname || ""}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          className="md:w-1/2 w-full"
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <textarea
          name="textarea"
          rows={5}
          value={inputs.textarea || ""}
          onChange={handleChange}
          className="w-full"
          placeholder="Comment text."
        />
      </div>
      <div className="ak-height-40 ak-height-lg-20"></div>
      <SubmitButton>Post Comment</SubmitButton>
    </form>
  );
}
