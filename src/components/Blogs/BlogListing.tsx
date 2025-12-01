import { ArrowRight, Calendar, Clock } from "lucide-react";

const BlogListing = () => {
  const posts = [
    {
      id: 1,
      category: "Strategy",
      title: "Why Your SaaS Blog Isn't Converting (And How to Fix It)",
      excerpt:
        "Traffic is vanity, conversion is sanity. Learn the 5 structural changes that turn readers into trials.",
      date: "Oct 12, 2023",
      readTime: "5 min read",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      category: "Technical Writing",
      title: "Documenting APIs: A Developer-First Approach",
      excerpt:
        "Stop writing dry documentation. Here is how to create API guides that developers actually want to use.",
      date: "Oct 28, 2023",
      readTime: "8 min read",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      category: "SEO",
      title: "The Death of Keyword Stuffing in 2024",
      excerpt:
        "Google's helpful content update changed the game. Here is what semantic search means for your content roadmap.",
      date: "Nov 03, 2023",
      readTime: "4 min read",
      color: "from-[#fed50a] to-orange-500",
    },
    {
      id: 4,
      category: "Copywriting",
      title: "Micro-Copy: The Small Words That Make Big Impact",
      excerpt:
        "From button labels to error messages, learn how to refine the UX writing on your platform.",
      date: "Nov 15, 2023",
      readTime: "6 min read",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="bg-[#0b1220] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="group relative h-64 overflow-hidden rounded-3xl border border-[#e6eef8]/10 bg-[#0e1629] transition-all hover:border-[#0781fe]/30 md:h-auto">
            <div
              className={`absolute inset-0 bg-linear-to-br opacity-10 ${posts[0].color} transition-opacity group-hover:opacity-20`}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="mb-2 text-sm font-bold tracking-wide text-[#fed50a] uppercase">
                {posts[0].category}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-[#0781fe] md:text-3xl">
                {posts[0].title}
              </h3>
              <p className="mb-4 line-clamp-2 text-[#e6eef8]/70">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#e6eef8]/50">
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {posts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {posts[0].readTime}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group flex cursor-pointer flex-col gap-6 rounded-2xl border border-[#e6eef8]/5 bg-[#0e1629] p-6 transition-all hover:bg-[#0e1629]/80 md:flex-row"
              >
                <div
                  className={`h-32 w-full rounded-xl bg-linear-to-br md:w-32 ${post.color} shrink-0 opacity-20 transition-opacity group-hover:opacity-30`}
                ></div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0781fe] uppercase">
                      {post.category}
                    </span>
                    <ArrowRight
                      size={16}
                      className="-translate-x-2 text-[#e6eef8]/20 transition-all group-hover:translate-x-0 group-hover:text-[#fed50a]"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[#fed50a]">
                    {post.title}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-[#e6eef8]/60">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#e6eef8]/40">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="rounded-full border border-[#e6eef8]/20 px-8 py-3 text-sm font-bold text-[#e6eef8] transition-colors hover:bg-[#e6eef8]/5">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};
export default BlogListing;
