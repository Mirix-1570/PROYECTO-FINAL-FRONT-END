import React from "react";
import "./estilos.css";
import posts from "../../../data/blogs.json";

function Blog() {
  return (
    <section className="blog-section">
      <div className="blog-left">
        <h2 className="blog-heading">
          <span className="heading-top">Cafeteando</span>
          <span className="heading-bottom">Blog</span>
        </h2>

        <div className="posts">
          {posts.map((post, idx) => (
            <article
              className={`post-card ${idx % 2 === 0 ? "left" : "right"}`}
              key={post.id}
            >
              <h3 className="post-title">{post.title}</h3>
              <p className="post-author">
                {post.author} · <time>{post.date}</time>
              </p>
              <p className="post-excerpt">{post.excerpt}</p>
              {/* En un futuro esto puede ser un Link a la ruta /blog/{post.slug} */}
            </article>
          ))}
        </div>
      </div>

      <aside className="blog-right" role="img" aria-label="Imagen del blog" />
    </section>
  );
}

export default Blog;
