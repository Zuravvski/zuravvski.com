import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <Image src={"/logo.png"} alt="Logo" width={200} height={100} />
      </Link>
      <nav>
        <ul className="flex space-x-4 hover:[&>li>a]:text-teal-600 [&>li>a]:transition-colors">
          <li>
            <Link href="#resume">Resume</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
