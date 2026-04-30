import Link from 'next/link';
import Image from 'next/image';
import { getBlogs } from '@/lib/queries/blogs';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';

export const revalidate = 60;

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Packaging Insights & News</h1>
          <p className={styles.subtitle}>Stay updated with the latest trends, guides, and tips in custom packaging.</p>
        </header>

      {blogs.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No articles found. Check back later!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {blogs.map((blog: any) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={blog.featured_image_url || '/images/hero-bg.png'}
                  alt={blog.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                {blog.blog_categories && (
                  <span className={styles.category}>{blog.blog_categories.name}</span>
                )}
                <h2 className={styles.blogTitle}>{blog.title}</h2>
                <p className={styles.excerpt}>{blog.excerpt || 'Read this article to learn more.'}</p>
                <div className={styles.meta}>
                  {blog.author_name && <span>By {blog.author_name}</span>}
                  {blog.published_at && <span>{new Date(blog.published_at).toLocaleDateString()}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      </div>
    </>
  );
}
