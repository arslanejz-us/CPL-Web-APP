import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogBySlug } from '@/lib/queries/blogs';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';

export const revalidate = 60;

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className={styles.container}>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blogs' },
          { label: blog.title },
        ]}
      />

      {/* Header */}
      <header className={styles.header}>
        {blog.blog_categories && (
          <span className={styles.category}>{blog.blog_categories.name}</span>
        )}
        
        <h1 className={styles.title}>{blog.title}</h1>
        
        <div className={styles.meta}>
          {blog.author_name && <span className={styles.author}>By {blog.author_name}</span>}
          {blog.published_at && (
            <span className={styles.date}>{new Date(blog.published_at).toLocaleDateString()}</span>
          )}
        </div>
      </header>

      {/* Featured Image */}
      <div className={styles.imageWrapper}>
         <Image
            src={blog.featured_image_url || '/images/hero-bg.png'}
            alt={blog.title}
            fill
            className={styles.image}
            priority
          />
      </div>

      {/* Content */}
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: blog.content || '<p>Content coming soon.</p>' }} 
      />
    </article>
  );
}
