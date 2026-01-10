import React from 'react';

export default function Abouts({ mode }) {
  const isDark = mode === 'dark';

  const containerStyle = {
    backgroundColor: isDark ? '#121212' : '#ffffff',
    color: isDark ? '#f1f1f1' : '#212529',
    borderRadius: '12px',
    padding: '24px'
  };

  const accordionItemStyle = {
    backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
    border: 'none',
    borderRadius: '10px',
    overflow: 'hidden' // ⭐ THIS FIXES WHITE CORNERS
  };

  const accordionButtonStyle = {
    backgroundColor: isDark ? '#1e1e1e' : '#f8f9fa',
    color: isDark ? '#ffffff' : '#212529',
    fontWeight: 500,
    boxShadow: 'none'
  };

  const accordionBodyStyle = {
    backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
    color: isDark ? '#eaeaea' : '#343a40'
  };

  return (
    <div className="container my-5" style={containerStyle}>
      <h2 className="mb-4 fw-bold">About TextUtils</h2>

      <div className="accordion accordion-flush">

        <div className="accordion-item mb-3" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={accordionButtonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              What is TextUtils?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={accordionBodyStyle}>
              <strong>TextUtils</strong> is a React-based text utility app that
              helps you analyze and manipulate text efficiently.
            </div>
          </div>
        </div>

        <div className="accordion-item mb-3" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={accordionButtonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Why use TextUtils?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={accordionBodyStyle}>
              Ideal for students, developers, and writers who need fast text
              analysis and formatting tools.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={accordionButtonStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Features of TextUtils
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={accordionBodyStyle}>
              <ul className="mb-0">
                <li>Uppercase & Lowercase conversion</li>
                <li>Remove extra spaces</li>
                <li>Word & character counter</li>
                <li>Clean UI</li>
                <li>Fast & responsive</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
