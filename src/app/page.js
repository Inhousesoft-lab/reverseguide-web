import Image from "next/image";
import NameField from "@/widgets/NameField";

export default function Home() {
  return (
    <div className="home-container">
      <main className="main-content">
        <ol className="instruction-list">
          <li className="instruction-item">
            Get started by editing{" "}
            <code className="code-snippet">src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <NameField />

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
    </div>
  );
}
