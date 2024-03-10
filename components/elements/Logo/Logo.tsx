import Link from "next/link";

export default function Logo() {
  return (
    <Link className="logo" href="/">
      <img className="logo__img" src="/img/logo.svg" alt="Rostelecom_Logo" />
    </Link>
  );
}
