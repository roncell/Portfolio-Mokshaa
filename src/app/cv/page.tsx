import PageHeader from "@/components/PageHeader";
import {
  publications,
  resumeContact,
  resumeSummary,
  experience,
  education,
  projects,
  author,
  skills,
} from "@/lib/data";

export const metadata = {
  title: "CV — Mokshaa Shivlani",
};

export default function CVPage() {
  return (
    <div className="px-6 pb-24 pt-16 md:px-16 md:pt-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <PageHeader eyebrow="CV" title="Resume" />
        <a
          href="/cv.pdf"
          download
          className="whitespace-nowrap text-sm uppercase tracking-[0.2em] text-ink underline-accent"
        >
          Download PDF &darr;
        </a>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
        {resumeSummary}
      </p>
      <p className="mt-4 text-sm text-ink-faint">
        {resumeContact.location} &middot; {resumeContact.phone} &middot;{" "}
        <a href={`mailto:${resumeContact.email}`} className="hover:text-accent">
          {resumeContact.email}
        </a>
      </p>

      {/* Embedded PDF */}
      <div className="mt-12 overflow-hidden rounded-sm border border-line bg-paper-raised">
        <object
          data="/cv.pdf#view=fitH"
          type="application/pdf"
          className="h-[70vh] w-full min-h-[500px] md:h-[85vh]"
        >
          <div className="flex h-[400px] flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-sm text-ink-soft">
              Your browser can&rsquo;t preview PDFs inline.
            </p>
            <a
              href="/cv.pdf"
              className="text-sm uppercase tracking-[0.2em] text-ink underline-accent"
            >
              Open the PDF directly &rarr;
            </a>
          </div>
        </object>
      </div>
      <p className="mt-3 text-xs text-ink-faint">
        Viewer not loading (common on mobile)?{" "}
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
          Open the PDF in a new tab
        </a>
        .
      </p>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-14">
          <section>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
              Experience
            </p>
            <div className="mt-5 flex flex-col gap-9">
              {experience.map((job) => (
                <div key={`${job.role}-${job.org}`}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="font-display text-xl italic text-ink">
                      {job.role}
                    </h3>
                    <span className="whitespace-nowrap text-xs uppercase tracking-[0.15em] text-ink-faint">
                      {job.dates}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{job.org}</p>
                  {job.bullets.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed text-ink-soft">
                      {job.bullets.map((b) => (
                        <li key={b} className="pl-4 -indent-4">
                          &mdash;&nbsp;{b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
              Education
            </p>
            <div className="mt-5 flex flex-col gap-8">
              {education.map((ed) => (
                <div key={ed.school}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="font-display text-xl italic text-ink">
                      {ed.school}
                    </h3>
                    <span className="whitespace-nowrap text-xs uppercase tracking-[0.15em] text-ink-faint">
                      {ed.dates}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">
                    {ed.program}
                    {ed.gpa && ` — GPA ${ed.gpa}`}
                  </p>
                  {ed.extra?.map((line) => (
                    <p key={line} className="mt-1 text-sm text-ink-soft">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
              Projects
            </p>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm leading-relaxed text-ink-soft">
              {projects.map((p) => (
                <li key={p} className="pl-4 -indent-4">
                  &mdash;&nbsp;{p}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
              Author
            </p>
            <p className="mt-4 font-display text-xl italic text-ink">
              {author.book}
            </p>
            <p className="text-sm text-ink-soft">{author.note}</p>
          </section>
        </div>

        <aside className="flex flex-col gap-12 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
              Skills
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
              Selected Bylines
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {publications.map((pub) => (
                <li key={pub.name}>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg italic text-ink-soft transition-colors hover:text-accent"
                  >
                    {pub.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
