import { publications } from "@/lib/data";
import PublicationCarousel from "./PublicationCarousel";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-16">
      <p className="text-[11px] uppercase tracking-[0.28em] text-ink-faint">
        Bylines
      </p>
      <div className="mt-5">
        <PublicationCarousel publications={publications} />
      </div>
      <div className="mt-10 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Mokshaa Shivlani.</p>
        <p>Fashion &mdash; Health &amp; Beauty &mdash; Art &amp; Culture &mdash; Food &amp; Travel</p>
      </div>
    </footer>
  );
}
