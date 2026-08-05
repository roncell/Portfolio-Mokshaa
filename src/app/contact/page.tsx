import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { substack } from "@/lib/data";

export const metadata = {
  title: "Contact — Mokshaa Shivlani",
};

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-16 md:px-16 md:pt-24">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        dek="For commissions, collaborations, or just to say hello."
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm />

        <aside className="flex flex-col gap-8 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Email</p>
            <a
              href="mailto:collaboratewithmokshaa@gmail.com"
              className="mt-2 block font-display text-xl italic text-ink transition-colors hover:text-accent"
            >
              collaboratewithmokshaa@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Newsletter</p>
            <a
              href={substack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-display text-xl italic text-ink transition-colors hover:text-accent"
            >
              {substack.name}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
