// PostPage.js

import React from 'react';

const PostPage = ({ location }) => {
  const { state } = location;

  if (!state) {
    // Handle cases where there is no state (direct navigation without posting)
    return <div>No content to display.</div>;
  }

  const { content, selectedFont, previewFontSize, imagePreview } = state;

  return (
    <div>
      <h2>Posted Content</h2>
      <p>Content: {content}</p>
      <p>Font: {selectedFont}</p>
      <p>Font Size: {previewFontSize}px</p>
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default PostPage;
