export default function Footer() {
  return (
    <footer className={"footer"}>
      <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <span className={"logo"}>
          <img
            src="https://raw.githubusercontent.com/vercel/next.js/canary/packages/create-next-app/templates/default/public/vercel.svg"
            alt="Vercel"
            width={72}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
}
