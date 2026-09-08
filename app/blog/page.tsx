import Link from "next/link";
import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/blog";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical guides on Braj Darshan, outstation taxi routes and planning private-car trips from Govardhan and Mathura.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <PageHero
        eyebrow="Blog"
        title="Travel Guides from Braj Travels"
        description="Practical guides on Braj Darshan, outstation routes and planning private-car trips."
      />
      <section className="section-y">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col rounded-lg border border-navy-100 bg-white p-5 no-underline transition-colors hover:border-saffron-300"
              >
                <p className="text-xs text-navy-400">
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {post.readingTime}
                </p>
                <h2 className="mt-2 text-base font-semibold text-navy-800">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-medium text-saffron-600">
                  Read more
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
