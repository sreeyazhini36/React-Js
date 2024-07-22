import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from './Actions1'; // Assuming incrementCounter takes a size argument
import './BlogEditor.css';

const BlogEditor = ({ counter, incrementCounter }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [previewFontSize, setPreviewFontSize] = useState(counter); // Initial previewFontSize

  const handleImageUpload = () => {
    // Implement your image upload logic here
    console.log('Image upload logic goes here:', image);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    // Display image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFontChange = (event) => {
    const newFont = event.target.value;
    setSelectedFont(newFont);
  };

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    incrementCounter(newSize); // Update counter state
    setPreviewFontSize(newSize); // Update previewFontSize state
  };

  const handlePost = () => {
    // Implement logic to post the blog content, image, etc.
    console.log('Blog content:', content);
    console.log('Selected Font:', selectedFont);
    console.log('Preview Font Size:', previewFontSize);
    // You can also include the logic for posting the image if needed.

    // Reset the state or navigate to another page after posting
    setContent('');
    setImage(null);
    setImagePreview(null);
    setSelectedFont('Arial');
    setPreviewFontSize(counter); // Reset preview font size to the initial counter value
  };

  useEffect(() => {
    incrementCounter(); // Dispatch action to update counter state initially
  }, []);

  return (
    <div className="editor-container">
      <div className="font-controls">
        <label htmlFor="fontSelect">Select Font:</label>
        <br />
        <select id="fontSelect" onChange={handleFontChange} value={selectedFont}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <br />
        <label htmlFor="fontSizeSelect">Font Size:</label>
        <input
          type="number"
          id="fontSizeSelect"
          value={counter} // Display current counter state
          onChange={handleFontSizeChange}
        />
      </div>

      <div className="editor">
        <h2>Blog Editor</h2>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Start writing your blog here..."
          style={{ fontFamily: selectedFont, fontSize: `${counter}px` }}
        ></textarea>
        <input type="file" onChange={handleImageChange} />
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Selected" style={{ maxWidth: '100%', marginTop: '10px' }} />
          </div>
        )}
        <button onClick={handleImageUpload}>Upload Image</button>
      </div>

      <div className="preview">
        <h2>Preview</h2>
        {imagePreview && (
          <div className="image-preview-preview">
            <img src={imagePreview} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: content }} style={{ fontFamily: selectedFont, fontSize: `${previewFontSize}px` }}></div>
        <div className="post-button">
  <button onClick={handlePost} className="post-button">
    Post
  </button>
</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: (newSize) => dispatch(incrementCounter(newSize)), // Pass argument
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogEditor);
