import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div>
        <div>404</div>

        <div>Not Found</div>
      </div>

      <Link href="/">Return Home</Link>
    </div>
  );
}
