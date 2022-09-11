import "../index.css"

export default function Home() {
  return (
    <>
      <div className={"container"}>
        <main className={"main"}>
          <h1 className={"title"}>
            <a href="/">
              <span className="text-blue-700">React + </span>
              <span className="text-blue-500">TypeScript</span>
            </a>
          </h1>

          <p className={"description"}>
            <code className={'code'}>npx degit aelpxy/react-template</code>
          </p>
        </main>

        <footer className={"footer"}>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={"logo"}>
              <img src="https://raw.githubusercontent.com/vercel/next.js/canary/packages/create-next-app/templates/default/public/vercel.svg" alt="Vercel" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
