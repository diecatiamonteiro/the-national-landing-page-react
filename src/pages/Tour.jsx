import { FaExternalLinkAlt } from "react-icons/fa";

export default function Tour() {
  return (
    <div className="page-content text-center text-xl xl:text-2xl">
      <h2 className="flex flex-col items-center text-xl xl:text-2xl gap-4 mt-5 md:flex-row md:justify-center">
        Check tour dates on
        <span className="flex items-center gap-2">
          <a
            href="https://www.americanmary.com/#tour"
            target="_blank"
            className="inline-flex items-center gap-2 underline underline-offset-[6px] hover:underline-offset-[6px] hover:opacity-70 transition-underline-offset duration-200 "
          >
            band's official website
          </a>
          <span className="text-xl xl:text-2xl ml-[-8px]">.</span>
        </span>
      </h2>
    </div>
  );
}
