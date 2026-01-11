import React from "react";
import Reply from "./Reply";
import Comment from "./Comment";
import SectionTitle from "../SectionTitle/SectionTitle";

type CommentUserProps = {
  props?: {
    comment?: Array<{
      authorImg?: string;
      name: string;
      commentmeta: string;
      commenttext: string;
    }>;
    reply?: Array<{
      authorImg: string;
      name: string;
      commentmeta: string;
      replytext: string;
    }>;
  };
};
  
export default function CommentUser({ props }: CommentUserProps) {
  return (
    <div>
      <SectionTitle animTwo={true} textWhite={"Comment (1)"} />
      <p>Comment Yet! Comment post comment box</p>
      <ol className="comment-list">
        <li className="comment">
          {props?.comment?.map((comm, i) => {
            return (
              <Comment
                props={{
                  ...comm,
                  authorImg: comm.authorImg ?? "",
                }}
                key={i}
              />
            );
          })}
          {props?.reply?.map((rep, i) => {
            return <Reply props={rep} key={i} />;
          })}
        </li>
      </ol>
    </div>
  );
}
