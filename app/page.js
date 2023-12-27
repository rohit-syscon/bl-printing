'use client';
import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WysiwygEditor = ({ onChange, value, selectedLabel, pageContent, setPageContent }) => {
  const handleEditorChange = (_, __, editor) => {
    const selectedItem = pageContent.find((item) => item.label === selectedLabel);

    if (selectedItem && editor && editor.root) {
      const updatedContent = pageContent.map((item) =>
        item.label === selectedLabel ? { ...item, value: editor.root.innerHTML } : item
      );

      setPageContent(updatedContent);
    }
  };

  return (
    <ReactQuill
      theme="snow"
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image', 'video'],
          ['clean'],
        ],
      }}
      onChange={handleEditorChange}
      value={value}
    />
  );
};


const ReactGridLayout = WidthProvider(Responsive);

const DraggableItem = ({ item, label, onEdit, onSelect }) => {
  const [, drag] = useDrag({
    type: 'BL_DATA',
    item: { label, value: item },
  });

  return (
    <div
      ref={drag}
      className="card draggable-item mb-2"
      style={{
        border: '1px solid #ccc',
        padding: '8px',
        margin: '4px',
        backgroundColor: 'white',
        borderRadius: '4px',
        cursor: 'move',
      }}
      onClick={() => onSelect(label)}
    >
      <div className="card-body">
        <strong>{label}: </strong>
        {typeof item === 'object' ? JSON.stringify(item) : item}
      </div>
    </div>
  );
};

const CenterColumnDropZone = ({ onDrop }) => {
  const [, drop] = useDrop({
    accept: 'BL_DATA',
    drop: (item) => onDrop(item),
  });

  return <div ref={drop} className="drop-zone"></div>;
};

const CanvasImage = ({ onDrop, layout, pageContent }) => {
  const [, drop] = useDrop({
    accept: 'BL_DATA',
    drop: (item) => onDrop(item),
  });

  return (
    <div
      ref={drop}
      className="canvas-image"
      style={{
        position: 'relative',
        width: '100%',
        height: '800px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ReactGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 6 }}
        rowHeight={100}
        width={800}
      >
        {pageContent.map((item) => (
          <div key={item.i} className="draggable-item">
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <strong>{item.label}:</strong> {item.value}
            </div>
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
};

export default function Home() {
  const [blData, setBlData] = useState(null);
  const [firstSectionKeys, setFirstSectionKeys] = useState([]);
  const [pageContent, setPageContent] = useState([]);
  const [layout, setLayout] = useState([]);
  const [pageBackground, setPageBackground] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content) => {
    const selectedItem = pageContent.find((item) => item.label === selectedLabel);

    if (selectedItem) {
      const updatedContent = pageContent.map((item) =>
        item.label === selectedLabel ? { ...item, value: content } : item
      );

      setPageContent(updatedContent);
    }
  };

  useEffect(() => {
    const blId = 41831;

    fetch(`http://localhost:4000/api/bl/${blId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setBlData(data);

        const keys = Object.keys(data);
        setFirstSectionKeys(keys);

        const initialLayout = keys.map((key, index) => ({
          i: key,
          x: index % 6,
          y: Math.floor(index / 6),
          w: 1,
          h: 1,
        }));
        setLayout(initialLayout);
      })
      .catch((error) => console.error('Error fetching BL data:', error));
  }, []);

  const handleDrop = (item) => {
    console.log('Dropped Item:', item);
    console.log('blData:', blData);
  
    const newValue = blData[item.label];
    console.log('New Value:', newValue);
  
    const newItem = {
      i: item.label || `image-${pageContent.length}`,
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      label: item.label,
      value: newValue,
    };
  
    console.log('New Item:', newItem);
  
    setLayout([...layout, newItem]);
    setPageContent([...pageContent, newItem]);
    setSelectedLabel(item.label); // Set the selected label
  };
  
  const handleEdit = (label) => {
    setSelectedLabel(label);
    const newValue = prompt(`Enter new value for ${label}:`, blData[label]);
    if (newValue !== null) {
      const updatedContent = pageContent.map((item) =>
        item.label === label ? { ...item, value: newValue } : item
      );
      setPageContent(updatedContent);
    }
  };

  const handlePrint = () => {
    console.log('Printable Content:', pageContent);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPageBackground(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        {/* Navigation bar */}
        <nav className="navbar navbar-light nav-bg">
          <div className="container pt-2 pb-2">
            <a className="navbar-brand" href="#">
              <h4 className="nav-head mt-2">BL Printing</h4>
            </a>
            <button className="btn btn-primary ml-auto" onClick={handlePrint}>
              Print Page
            </button>
          </div>
        </nav>

        {/* Container for BL data and dynamic pages */}
        <div className="container-fluid mt-4">
          <div className="row">
            {/* Left column - Draggable items */}
            <div className="col-md-3" style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {firstSectionKeys.map((key) => (
                <DraggableItem
                  key={key}
                  item={blData[key]}
                  label={key}
                  onEdit={handleEdit}
                  onSelect={setSelectedLabel}
                />
              ))}
            </div>

            {/* Center column - Blank area for draggable items */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Blank Area</div>
                <div
                  className="card-body"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '800px',
                    backgroundImage: `url(${pageBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <CenterColumnDropZone onDrop={handleDrop} />
                  <CanvasImage onDrop={handleDrop} layout={layout} pageContent={pageContent} />
                </div>
              </div>
            </div>

            {/* Right column - Image upload and WYSIWYG Editor */}
            <div className="col-md-3" style={{ maxHeight: '600px', overflowY: 'auto' }}>
              <div className="card">
                <div className="card-header">Image Upload</div>
                <div className="card-body">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-header">WYSIWYG Editor</div>
                <div className="card-body">
                  <WysiwygEditor
                    value={editorContent.content}
                    onChange={handleEditorChange}
                    selectedLabel={selectedLabel}
                    pageContent={pageContent}
                    setPageContent={setPageContent}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DndProvider>
  );
}
