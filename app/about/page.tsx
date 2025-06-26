import Image from "next/image";
import Link from "next/link";
import { authors } from "@/lib/blog";

export default function About() {
  const author = authors.yordyi;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 opacity-90"
        />
        <div className="container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold text-balance">
            关于我们
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-balance">
            了解Factory Blog背后的故事和创作者
          </p>
        </div>
      </section>

      {/* Author Profile */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl flex-shrink-0 border-4 border-white dark:border-gray-800">
              <Image
                src={author.avatar || "/images/authors/yordyi.jpg"}
                alt={author.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{author.name}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {author.bio} 我是一名全栈开发者，专注于现代Web应用开发。在过去的几年里，
                我一直致力于探索前端新技术和最佳实践，特别是React生态系统和Next.js框架。
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  React / Next.js
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">技术专长</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  前端开发
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  专注于构建高性能、可访问性强的现代Web应用。熟练掌握React、Next.js、
                  TypeScript和现代CSS解决方案如Tailwind CSS。
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>React和React生态系统</li>
                  <li>Next.js和服务器组件</li>
                  <li>TypeScript类型系统</li>
                  <li>现代CSS和动画</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                  后端开发
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  构建可扩展的API和服务器端应用。熟悉Node.js生态系统、数据库设计和云服务。
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Node.js和Express</li>
                  <li>数据库设计和优化</li>
                  <li>RESTful API和GraphQL</li>
                  <li>云服务和部署</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">博客使命</h2>
          <div className="text-lg leading-relaxed space-y-6 mx-auto">
            <p>
              Factory Blog的创建初衷是分享我在技术探索和实践中的经验与见解。
              在这个快速发展的技术世界中，持续学习和分享知识对于每一位开发者都至关重要。
            </p>
            <p>
              通过这个博客，我希望能够：
            </p>
            <ul>
              <li>分享前沿技术的深度解析和实践经验</li>
              <li>探讨软件开发中的最佳实践和设计模式</li>
              <li>记录个人成长和技术学习的历程</li>
              <li>与更广泛的开发者社区建立联系和交流</li>
            </ul>
            <p>
              我相信，技术不仅仅是工具，更是解决问题和创造价值的手段。
              希望这个博客能成为你技术旅程中的一个有价值的资源。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-800 dark:via-pink-800 dark:to-red-800 opacity-90"
        />
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">联系我</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            有问题、建议或合作意向？欢迎通过以下方式与我联系。
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:contact@factoryblog.com"
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
            <a
              href="https://github.com/yordyi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-700 font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              返回博客首页
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
