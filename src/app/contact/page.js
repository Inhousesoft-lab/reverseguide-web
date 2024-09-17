"use client";
import { useState, useEffect } from "react";

export default function Contact() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch("/api/hello");
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      CONTACT
      {data && (
        <div className="api-data">
          <h2 className="api-data-title">API Data:</h2>
          <pre className="api-data-content">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
