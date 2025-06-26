import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className={`group block overflow-hidden ${featured ? 'md:col-span-2' : ''}`}
    >
      <article className={`
        h-full flex flex-col 
        bg-white dark:bg-gray-800 
        rounded-xl shadow-md hover:shadow-xl 
        transition-all duration-300 ease-in-out 
        transform hover:-translate-y-1
        border border-gray-100 dark:border-gray-700
      `}>
        {/* Cover Image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={featured}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700" />
          )}
          
          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="
                  px-3 py-1 text-xs font-medium 
                  bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                  text-blue-600 dark:text-blue-400 
                  rounded-full shadow-sm
                  transition-colors duration-200
                "
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="
                px-3 py-1 text-xs font-medium 
                bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                text-gray-600 dark:text-gray-400 
                rounded-full shadow-sm
              ">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col flex-grow p-5 gap-3">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {post.title}
          </h2>
          
          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          
          {/* Metadata */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            {/* Author */}
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    {post.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {post.author.name}
              </span>
            </div>
            
            {/* Date and Read Time */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
              <span>·</span>
              <span>{post.readTime} 分钟阅读</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
