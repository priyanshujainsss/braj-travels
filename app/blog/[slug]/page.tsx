import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { buildMetadata } from "@/lib/seo";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="section-y">
        <Container className="max-w-2xl">
          <p className="text-sm text-navy-400">
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readingTime}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-navy-800">{post.title}</h1>

          <div className="prose-content mt-8 space-y-6">
            {post.content.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl font-semibold text-navy-800">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="mt-3 leading-relaxed text-navy-600"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {post.relatedServiceHrefs.length > 0 && (
            <div className="mt-10 border-t border-navy-100 pt-6">
              <p className="text-sm font-medium text-navy-700">
                Related pages
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {post.relatedServiceHrefs.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-saffron-600 hover:text-saffron-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </article>
      <BookingCTA />
    </>
  );
}
