"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./home.css";

export default function Home() {
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
    <div className="home-container">
      <main className="main-content">
        <Image
          className="logo"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="instruction-list">
          <li className="instruction-item">
            Get started by editing{" "}
            <code className="code-snippet">src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {data && (
          <div className="api-data">
            <h2 className="api-data-title">API Data:</h2>
            <pre className="api-data-content">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}

        <div className="button-container">
          <a
            className="primary-button"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="logo"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="secondary-button"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="footer">
        <a
          className="footer-link"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="footer-link"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="footer-link"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
