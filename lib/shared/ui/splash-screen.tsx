import Image from "next/image";
import Link from "next/link";

export const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 grid place-items-center p-2">
      <Link href="/" className="block">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={200}
          height={100}
          className="animate-pulse"
        />
      </Link>
    </div>
  );
};
