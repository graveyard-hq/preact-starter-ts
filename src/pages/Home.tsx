export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center">
          <span className="text-gray-900">React + Vite + </span>
          <span className="text-blue-500">TypeScript + </span>
          <span className="text-indigo-600">TailwindCSS</span>
        </h1>
        <div>
          <div className="flex flex-col space-y-4 m-20">
            <p className="text-lg text-center">Get started by</p>
            <span className="font-mono text-center">
              npx degit aelpxy/react-tailwind-template
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
