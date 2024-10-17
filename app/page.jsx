import Image from "next/image";
import yosua from "./assets/yosua.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 max-w-4xl">
        <div className="col-span-2 row-span-1 bg-neutral-600 text-slate-50 p-4 rounded-lg">
          <p>
            Hi my name is Yosua Bastian Pitoy, I am from Tomohon Sulawesi Utara.
            Graduated with a bachelor degree in Informatic Engineering. Currently
            looking a job for Administrative Staff. I have 1 year experience on
            the same field as Admin Staff, I do data entry, database inventory,
            and performing monthly rekapitulation.
          </p>
        </div>
        <div className="col-span-1 row-span-1 items-start rounded-lg p-4 bg-neutral-600">
          <Image
            src="/images/yosua.jpg"
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full bg-cover bg-"
          />
          <p className="text-slate-50">
            Tomohon, Sulawesi Utara 🇮🇩
          </p>
        </div>
        <div className="col-span-1 row-span-10 bg-neutral-600 text-black p-4 rounded-lg">
          {/* Konten tambahan */}
        </div>
        <div className="col-span-2 row-span-10 bg-neutral-600 text-black p-4 rounded-lg">
          {/* Konten tambahan */}
        </div>
        <div className="col-span-3 row-span-10 bg-neutral-600 text-black p-4 rounded-lg">
          {/* Konten tambahan */}
        </div>
      </div>
    </div>
  );
}