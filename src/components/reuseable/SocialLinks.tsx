import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-instagram',  title:"Instagram", url: 'https://www.instagram.com/rexcoders/' },
  { id: 2, icon: 'uil uil-facebook-f', title:"Faceebook",  url: 'https://facebook.com/rexcoders/' },
  { id: 3, icon: 'uil uil-linkedin', title:"LinkedIn",  url: 'https://www.linkedin.com/company/rexcoders/' },
  { id: 4, icon: 'uil uil-youtube', title:"YouTube",  url: 'https://www.youtube.com/@rexcoders-academy' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'mt-4 nav social social-white' }) => {
  return (
    <nav className={className}>
      <ul className="mb-0 list-unstyled">

      
      {links.map(({ id, icon, url,title }) => (
       <li key={id}><a href={url}  target="_blank" rel="noreferrer" >
          <i className={icon} /> {title}
        </a>
        </li>
      ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
