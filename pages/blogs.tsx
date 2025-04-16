import React from 'react';
import { BlogCard1, BlogCard2, BlogCard3, BlogCard4, BlogCard5 } from 'components/reuseable/blog-cards';
import { blogList1, blogList4, blogList5 } from '../src/data/blog'; // Optimized import

const Blogs = () => {
  return (
    <div className="container mt-20">
      <div className="row">
        {blogList1.map((blog) => (
          <div className="col-md-6 col-lg-4 mb-4" key={blog.id}>
            <BlogCard1
              date={blog.date}
              image={blog.image}
              title={blog.title}
              category={blog.category}
              description={blog.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
