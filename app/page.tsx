"use client";
import Link from "next/link";
import { CldUploadWidget } from "next-cloudinary";

export default function Home() {
  return (
    <main className="flex space-y-5 flex-col items-center justify-between p-24">
      <Link href="users" className="btn btn-info">
        Users
      </Link>
      <CldUploadWidget uploadPreset="xc9urtcl">
        {({ open }) => {
          return (
            <button
              className="btn btn-outline"
              type="button"
              onClick={() => open()}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </main>
  );
}
