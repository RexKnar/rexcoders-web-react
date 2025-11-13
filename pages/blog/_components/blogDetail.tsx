"use client";
import { Calendar, Heart, MessageCircle,  } from 'lucide-react';
import React, { useEffect } from 'react';
import Image from 'next/image';
// import GLightbox from 'glightbox';

const BlogDetails: React.FC = () => {
  useEffect(() => {
    let lightbox: any;

    // ✅ Only run in the browser
    (async () => {
      // Dynamically import only on client
      const { default: GLightbox } = await import('glightbox');
 

      lightbox = GLightbox({
        selector: '[data-glightbox="true"]', // combines both effects
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
      });
    })();

    // ✅ Cleanup when component unmounts
    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, []);

  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12">
          <div className="col-lg-8">
            <div className="blog single">
              <div className="card">
                <figure className="card-img-top">
                  <Image
                    src="/img/photos/b1.jpg"
                    alt="demo"
                    width={960}
                    height={600}
                    className="h-auto w-100"
                    style={{ color: 'transparent' }}
                  />
                </figure>
                <div className="card-body">
                  <div className="classic-view">
                    <article className="post">
                      <div className="mb-5 post-content">
                        <h2 className="mb-4 h1">Cras mattis consectetur purus fermentum</h2>
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                          justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras
                          mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                          Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                          dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.
                        </p>
                        <p>
                          Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis
                          felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non
                          dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet
                          vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.
                        </p>
                        <div className="mt-3 mb-10 row g-6">
                          {[8, 9, 10, 11].map((num) => (
                            <div key={num} className="col-md-6">
                              <figure className="rounded hover-scale cursor-dark">
                                <a href={`img/photos/b${num}-full.jpg`} data-glightbox="true" data-gallery="post">
                                  <Image
                                    src={`/img/photos/b${num}.jpg`}
                                    alt="demo"
                                    width={460}
                                    height={307}
                                    className="h-auto w-100"
                                    style={{ color: 'transparent' }}
                                  />
                                </a>
                              </figure>
                            </div>
                          ))}
                        </div>

                        <p>
                          Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus
                          et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit
                          libero, a pharetra augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta
                          gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Cras mattis
                          consectetur purus sit amet fermentum. Praesent commodo cursus magna.
                        </p>
                        <blockquote className="my-8 fs-lg">
                          <p>
                            Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec
                            elit purus.
                          </p>
                          <footer className="blockquote-footer">Very important person</footer>
                        </blockquote>
                        <h3 className="mb-4 h2">Sit Vulputate Bibendum Purus</h3>
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                          justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur
                          purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                          Vestibulum id ligula porta felis euismod semper.
                        </p>
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                          justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas
                          eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                          fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Donec id elit
                          non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis
                          natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus,
                          tellus ac cursus commodo, tortor mauris condimentum nibh.
                        </p>
                      </div>
                      <div className="mt-8 post-footer d-md-flex flex-md-row justify-content-md-between align-items-center">
                        <div>
                          <ul className="mb-0 list-unstyled tag-list">
                            {['Still Life', 'Urban', 'Nature'].map((tag) => (
                              <li key={tag}>
                                <a className="mb-0 btn btn-soft-ash btn-sm rounded-pill" href="#">
                                  {tag}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-0 mb-md-2">
                          <div className="dropdown share-dropdown btn-group">
                            <button
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-bs-toggle="dropdown"
                              className="mb-0 btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle me-0"
                            >
                              <i className="uil uil-share-alt"></i> Share
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#" target="_blank" rel="noreferrer">
                                <i className="uil uil-twitter"></i>Twitter
                              </a>
                              <a className="dropdown-item" href="#" target="_blank" rel="noreferrer">
                                <i className="uil uil-facebook-f"></i>Facebook
                              </a>
                              <a className="dropdown-item" href="#" target="_blank" rel="noreferrer">
                                <i className="uil uil-linkedin"></i>Linkedin
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <hr />
                  <div className="mb-3 author-info d-md-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <figure className="overflow-hidden user-avatar rounded-circle">
                        <Image
                          src="/img/avatars/u5.jpg"
                          alt="demo"
                          width={120}
                          height={120}
                          className="h-auto w-100"
                          style={{ color: 'transparent' }}
                        />
                      </figure>
                      <div>
                        <h6>
                          <a className="link-dark" href="#">
                            Nikolas Brooten
                          </a>
                        </h6>
                        <span className="post-meta fs-15">Sales Manager</span>
                      </div>
                    </div>
                    <div className="mt-3 mt-md-0 ms-auto">
                      <a className="mb-0 btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start" href="#">
                        <i className="uil uil-file-alt"></i> All Posts
                      </a>
                    </div>
                  </div>
                  <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus
                    mollis interdum.
                  </p>
                  <nav className="nav social">
                    {[
                      { icon: 'twitter', url: 'https://twitter.com/uilibofficial' },
                      { icon: 'facebook-f', url: 'https://facebook.com/uiLibOfficial/' },
                      { icon: 'dribbble', url: '#' },
                      { icon: 'instagram', url: 'https://www.instagram.com/uilibofficial/' },
                      { icon: 'youtube', url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg' }
                    ].map((social) => (
                      <a key={social.icon} href={social.url} target="_blank" rel="noreferrer">
                        <i className={`uil uil-${social.icon}`}></i>
                      </a>
                    ))}
                  </nav>
                  <hr />
                  <h3 className="mb-6">You Might Also Like</h3>
                  <div className="mb-16 swiper-container blog grid-view">
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        {[4, 5, 6, 7].map((num) => (
                          <div key={num} className="swiper-slide">
                            <article>
                              <figure className="mb-6 rounded overlay overlay-1 hover-scale">
                                <a href="#">
                                  <Image
                                    src={`/img/photos/b${num}.jpg`}
                                    alt="Ligula tristique quis risus"
                                    width={560}
                                    height={350}
                                    className="h-auto w-100"
                                    style={{ color: 'transparent' }}
                                  />
                                  <span className="bg"></span>
                                </a>
                                <figcaption>
                                  <h5 className="mb-0 from-top">Read More</h5>
                                </figcaption>
                              </figure>
                              <div className="post-header">
                                <h2 className="mb-3 post-title h3">
                                  <a className="link-dark" href="#">
                                    Ligula tristique quis risus
                                  </a>
                                </h2>
                              </div>
                              <div className="post-footer">
                                <ul className="post-meta">
                                  <li className="post-date">
                                    <Calendar className="uil uil-calendar-alt" />
                                    <span>14 Apr 2022</span>
                                  </li>
                                  <li className="post-comments">
                                    <a className="link-dark" href="#">
                                      <MessageCircle className="uil uil-file-alt fs-15" />
                                      {['Coding', 'Workspace', 'Meeting', 'Business Tips'][num - 4]}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="swiper-controls">
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                  <hr />
                  <div id="comments">
                    <h3 className="mb-6">5 Comments</h3>
                    <ol className="commentlist" id="singlecomments">
                      {[
                        {
                          id: 1,
                          name: 'Connor Gibson',
                          date: '14 Jan 2022',
                          avatar: 'u1',
                          comment:
                            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis integer posuere erat ante.',
                          replies: []
                        },
                        {
                          id: 2,
                          name: 'Nikolas Brooten',
                          date: '21 Feb 2022',
                          avatar: 'u2',
                          comment:
                            'Quisque tristique tincidunt metus non aliquam. Quisque ac risus sit amet quam sollicitudin vestibulum vitae malesuada libero. Mauris magna elit, suscipit non ornare et, blandit a tellus. Pellentesque dignissim ornare faucibus mollis.',
                          replies: [
                            {
                              id: 3,
                              name: 'Pearce Frye',
                              date: '22 Feb 2022',
                              avatar: 'u3',
                              comment:
                                'Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis.',
                              replies: [
                                {
                                  id: 4,
                                  name: 'Nikolas Brooten',
                                  date: '04 Apr 2022',
                                  avatar: 'u2',
                                  comment:
                                    'Nullam id dolor id nibh ultricies vehicula ut id. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia aenean bibendum nulla consectetur.'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: 5,
                          name: 'Lou Bloxham',
                          date: '03 May 2022',
                          avatar: 'u4',
                          comment:
                            'Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                          replies: []
                        }
                      ].map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                      ))}
                    </ol>
                  </div>
                  <hr />
                  <form className="comment-form">
                    <div className="mb-4 form-floating">
                      <input type="text" className="form-control" placeholder="Name*" id="c-name" />
                      <label htmlFor="c-name">Name *</label>
                    </div>
                    <div className="mb-4 form-floating">
                      <input type="email" className="form-control" placeholder="Email*" id="c-email" />
                      <label htmlFor="c-email">Email*</label>
                    </div>
                    <div className="mb-4 form-floating">
                      <input type="text" className="form-control" placeholder="Website" id="c-web" />
                      <label htmlFor="c-web">Website</label>
                    </div>
                    <div className="mb-4 form-floating">
                      <textarea
                        name="textarea"
                        placeholder="Comment"
                        className="form-control"
                        style={{ height: '150px' }}
                      ></textarea>
                      <label>Comment *</label>
                    </div>
                    <button type="submit" className="mb-0 btn btn-primary rounded-pill">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <aside className="top-0 p-3 overflow-auto col-lg-4 sidebar position-fixed end-0 vh-100 bg-light mt-15">
            <div className="widget">
              <h4 className="mb-3 widget-title">Categories</h4>
              <ul className="unordered-list bullet-primary text-reset">
                {[
                  { name: 'Teamwork', count: 21 },
                  { name: 'Ideas', count: 19 },
                  { name: 'Workspace', count: 16 },
                  { name: 'Coding', count: 7 },
                  { name: 'Meeting', count: 12 },
                  { name: 'Business Tips', count: 14 }
                ].map((category) => (
                  <li key={category.name}>
                    <a href="#">
                      {category.name} ({category.count})
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="widget">
              <h4 className="mb-3 widget-title">Popular Posts</h4>
              <ul className="image-list">
                {[1, 2, 3].map((num) => (
                  <li key={num}>
                    <a href="#">
                      <figure className="rounded">
                        <Image
                          src={`/img/photos/a${num}.jpg`}
                          alt="demo"
                          width={100}
                          height={100}
                          className="h-auto w-100"
                          style={{ color: 'transparent' }}
                        />
                      </figure>
                    </a>
                    <div className="post-content">
                      <h6 className="mb-2">
                        <a className="link-dark" href="#">
                          {['Magna Mollis Ultricies', 'Ornare Nullam Risus', 'Euismod Nullam Fusce'][num - 1]}
                        </a>
                      </h6>
                      <ul className="post-meta">
                        <li className="post-date">
                          <span>{['26 Mar 2022', '16 Feb 2022', '08 Jan 2022'][num - 1]}</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
const Comment: React.FC<{ comment: any }> = ({ comment }) => {
  return (
    <li className="comment">
      <div className="comment-header d-md-flex align-items-center">
        <div className="d-flex align-items-center">
          <figure className="overflow-hidden user-avatar rounded-circle">
            <Image
              src={`/img/avatars/${comment.avatar}.jpg`}
              alt="demo"
              width={120}
              height={120}
              className="h-auto w-100"
              style={{ color: 'transparent' }}
            />
          </figure>
          <div>
            <h6 className="comment-author">
              <a className="link-dark" href="#">
                {comment.name}
              </a>
            </h6>
            <ul className="post-meta">
              <li>
                <Calendar className="uil uil-calendar-alt" /> {comment.date}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 mt-md-0 ms-auto">
          <button className="mb-0 btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start">
            <MessageCircle className="uil uil-comments" /> Reply
          </button>
        </div>
      </div>
      <p>{comment.comment}</p>
      {comment.replies && comment.replies.length > 0 && (
        <ul className="children">
          {comment.replies.map((reply: any) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default BlogDetails;