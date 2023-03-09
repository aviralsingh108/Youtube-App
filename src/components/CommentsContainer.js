import React from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Aviral",
      text: "Lorem Ipsum Dolor Sit amet",
      replies: [
        {
          name: "Aviral1",
          text: "Lorem Ipsum Dolor Sit amet",
          replies: [
            {
              name: "Aviral2",
              text: "Lorem Ipsum Dolor Sit amet",
              replies: [
                {
                  name: "Aviral3",
                  text: "Lorem Ipsum Dolor Sit amet",
                  replies: [
                    {
                      name: "Aviral4",
                      text: "Lorem Ipsum Dolor Sit amet",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Aviral",
      text: "Lorem Ipsum Dolor Sit amet",
      replies: [],
    },
    {
      name: "Aviral",
      text: "Lorem Ipsum Dolor Sit amet",
      replies: [],
    },
    {
      name: "Aviral",
      text: "Lorem Ipsum Dolor Sit amet",
      replies: [],
    },
    {
      name: "Aviral",
      text: "Lorem Ipsum Dolor Sit amet",
      replies: [],
    },
  ];
  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex shadow-lg p-2 rounded-lg border border-gray-200">
        <img
          className="w-12 h-12"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text} </p>
        </div>
      </div>
    );
  };
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <Comment data={commentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
