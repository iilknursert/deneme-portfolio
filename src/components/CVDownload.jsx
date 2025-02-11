import React from "react";

function CVDownload() {
  return (
    <div className="cv-container">
      <a href="/cv.pdf" download className="cv-button">
        CV İndir
      </a>
    </div>
  );
}

export default CVDownload;
