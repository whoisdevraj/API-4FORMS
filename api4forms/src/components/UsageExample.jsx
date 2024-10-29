import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./UsageExample.css"; // CSS file for styling

function UsageExample() {
  const [activeLanguage, setActiveLanguage] = useState("html");

  const codeExamples = {
    html: `<form action="https://api-4forms.vercel.app/YOUR_API_KEY_HERE/forms/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  
  <button type="submit">Submit</button>
</form>`,

    javascript: `const formData = new FormData();
formData.append('name', 'Your Name');
formData.append('email', 'your.email@example.com');
formData.append('message', 'Your message here.');

fetch('https://api-4forms.vercel.app/YOUR_API_KEY_HERE/forms/submit', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`,

    react: `import React from 'react';

function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('https://api-4forms.vercel.app/YOUR_API_KEY_HERE/forms/submit', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeLanguage]);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="usage-example">
      <h3 style={{ color: "#091816" }}>How to Use Your API Key</h3>{" "}
      <nav className="language-nav">
        <ul>
          {Object.keys(codeExamples).map((language) => (
            <li key={language}>
              <button onClick={() => setActiveLanguage(language)}>
                {language.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="code-container">
        <SyntaxHighlighter language={activeLanguage} style={vscDarkPlus}>
          {codeExamples[activeLanguage]}
        </SyntaxHighlighter>
        <button className="copy-button" onClick={handleCopy}>
          Copy Code
        </button>
      </div>
    </div>
  );
}

export default UsageExample;
