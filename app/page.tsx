import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, authors } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  // 取前两篇作为精选，剩余为最新
  const featuredPosts = posts.slice(0, 2);
  const recentPosts = posts.slice(2);

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 opacity-90"
        />
        <div className="container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold text-balance">
            Factory Blog
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-balance">
            分享前沿技术与最佳实践，记录开发者成长之路。
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="#featured"
              className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-base font-semibold backdrop-blur hover:bg-white/20 transition-colors"
            >
              查看精选文章
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              了解作者
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Featured Posts ---------- */}
      <section id="featured" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          精选文章
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} featured />
          ))}
        </div>
      </section>

      {/* ---------- Recent Posts ---------- */}
      {recentPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            最新文章
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ---------- Author Intro ---------- */}
      <section
        id="about"
        className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="relative w-40 h-40 flex-shrink-0 rounded-full overflow-hidden shadow-lg">
          <Image
            src={authors.yordyi.avatar || '/images/placeholder.jpg'}
            alt={authors.yordyi.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">关于作者</h2>
          <p className="text-lg leading-relaxed">{authors.yordyi.bio}</p>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-800 dark:via-pink-800 dark:to-red-800 opacity-90"
        />
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold text-balance">
            与我们一起探索技术的未来
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            订阅以获取最新文章及更新，加入开发者社区！
          </p>
          <div className="mt-8">
            <Link
              href="https://github.com/yordyi/factory"
              target="_blank"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-purple-700 hover:bg-gray-100 transition-colors"
            >
              在 GitHub 上 Star ⭐
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
