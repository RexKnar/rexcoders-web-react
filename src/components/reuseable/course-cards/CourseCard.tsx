import Link from 'next/link';
import { FC } from 'react';


const CourseCard: FC<any> = (props) => {
  const { id, name, image, technologies, path='#' } = props;
  const techLogos: { [key: string]: string } ={
    react:"/img/icons/tech/react/icons8-react-100.svg",
    angular: "/img/icons/tech/angular/icons8-angularjs-48.svg",
    html: "/img/icons/tech/html/icons8-html-48.svg",
    css: "/img/icons/tech/css/icons8-css-48.svg",
    mysql:	 "/img/icons/tech/mysql/icons8-mysql-48.svg",
    nodejs: "/img/icons/tech/nodejs/icons8-nodejs-48.svg",
    javascript:"/img/icons/tech/javascript/icons8-javascript-48.svg"
}

  return (
    <div className="shadow-lg card" key={id}>
                  <figure className="card-img-top overlay overlay-1">
                    <Link href={path} passHref legacyBehavior>
                      <a>
                        <img className="img-fluid" src={image['1x']}  alt="" />
                        <span className="bg" />
                      </a>
                    </Link>

                    <figcaption>
                      <h5 className="mb-0 from-top">View Details</h5>
                    </figcaption>
                  </figure>

                  <div className="p-6 pt-0 card-body">
                    <h4 className="mb-1 fs-21">{name}</h4>
                    <ul className="mb-0 post-meta fs-16">
                        {
                            technologies.map((tech: string,index:number | null | undefined)=>
                                {
                                    return (<li key={index}><img className="w-5 img-fluid" src={techLogos[`${tech}`]} alt="" /></li>)
})
                        }
                    </ul>
                    <ul className="mb-0 post-meta fs-16">
                      {/* <li>{item.photos} Photos</li> */}
                      {/* <li>{item.category}</li> */}
                    </ul>
                  </div>
                </div>
  );
};

export default CourseCard;

