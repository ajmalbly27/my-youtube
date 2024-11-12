import React, { useState } from "react";

const VideoDescription = ({ videoInfo }) => {
  const [isDescOpen, setIsDescOpen] = useState(false);

  const maximizeDescription = () => {
    setIsDescOpen(true);
  };
  const minimizeDescription = () => {
    setIsDescOpen(false);
  };

  return (
    <div
      onClick={() => !isDescOpen && maximizeDescription()}
      className={`${
        !isDescOpen ? "h-32 cursor-pointer " : ""
      } my-5 p-4 text-[15px] font-[450] rounded-xl bg-gray-200`}
    >
      {videoInfo && (
        <div>
          <span className="font-semibold">
            {videoInfo.statistics.viewCount.replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )}{" "}
            views &nbsp;
          </span>
          <span className="font-semibold">
            {videoInfo.snippet.publishedAt.split("").splice(0, 10)} &nbsp;
          </span>
          {videoInfo.snippet.tags &&
            videoInfo.snippet.tags.splice(0, 3).map((tag, index) => (
              <span key={index} className="ml-1 font-semibold text-blue-600">
                #{tag}
              </span>
            ))}
        </div>
      )}
      <div className={!isDescOpen && "line-clamp-3"}>
        {videoInfo?.snippet?.description
          .split("\n\n")
          .map((paragraph, index) => (
            <p key={index} className="mb-2">
              {paragraph.split("\n").map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line
                    .split(/(https?:\/\/[^\s]+|#[\w]+)/g)
                    .map((segment, segmentIndex) => {
                      if (segment.match(/^https?:\/\//)) {
                        return (
                          <a
                            key={segmentIndex}
                            href={segment}
                            className="text-blue-500"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {segment}
                          </a>
                        );
                      } else if (segment.match(/^#/)) {
                        return (
                          <span key={segmentIndex} className="text-blue-500">
                            {segment}
                          </span>
                        );
                      } else {
                        return segment;
                      }
                    })}
                  <br />
                </React.Fragment>
              ))}
              <br />
            </p>
          ))}
      </div>
      {isDescOpen && (
        <button
          // use stopPropagation method to avoid event bubbling
          onClick={(e) => {
            e.stopPropagation();
            minimizeDescription();
          }}
          className="font-semibold"
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default VideoDescription;
