const seoSchema =
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://rexcoders.in/#organization",
      "name": "Rexcoders Coding Academy",
      "alternateName": "Rexcoders",
      "url": "https://rexcoders.in",
      "logo": "https://rexcoders.in/assets/images/logo.png",
      "foundingDate": "2024",
      "description": "Rexcoders Coding Academy offers practical, mentor-led training programs in MERN, MEAN, Data Analytics, and GenAI. We focus on hands-on learning, real-world projects, and complete placement support for students and fresh graduates.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Christo Tower, 3A/2, Weavers Colony",
        "addressLocality": "Nagercoil",
        "addressRegion": "Tamil Nadu",
        "postalCode": "629001",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Tamil"]
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "42"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ashika"
          },
          "datePublished": "2025-07-10",
          "reviewBody": "Rexcoders is a place where I have improved my knowledge and skills. It helped me improve my learning strategies and gave me confidence to explore new things.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Asinth J.J"
          },
          "datePublished": "2024-09-15",
          "reviewBody": "I completed a one-month internship at Rexcoders. The environment and structured learning approach helped me gain practical skills with weekly doubt-clearing sessions.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        }
      ],
      "sameAs": [
        "https://www.google.com/maps/place/Rexcoders+-+Coding+Academy",
        "https://www.instagram.com/rexcoders",
        "https://www.linkedin.com/company/rexcoders",
        "https://www.facebook.com/rexcoders"
      ]
    },

    {
      "@type": "Course",
      "@id": "https://rexcoders.in/courses/mern#course",
      "name": "MERN Full-Stack Developer Program",
      "description": "Learn React, Node, Express, and MongoDB through real-world projects and placement-focused training with 1:1 mentorship.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Rexcoders Coding Academy",
        "sameAs": "https://rexcoders.in"
      },
      "url": "https://rexcoders.in/courses/mern"
    },

    {
      "@type": "Course",
      "@id": "https://rexcoders.in/courses/mean#course",
      "name": "MEAN Full-Stack Developer Program",
      "description": "Master Angular, Node.js, Express, and MongoDB to become a full-stack developer ready for real-world projects and interviews.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Rexcoders Coding Academy",
        "sameAs": "https://rexcoders.in"
      },
      "url": "https://rexcoders.in/courses/mean"
    },

    {
      "@type": "Course",
      "@id": "https://rexcoders.in/courses/data-analytics#course",
      "name": "Data Analytics Program",
      "description": "Hands-on Data Analytics training with Excel, SQL, Python, and Power BI — build dashboards and solve real business problems.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Rexcoders Coding Academy",
        "sameAs": "https://rexcoders.in"
      },
      "url": "https://rexcoders.in/courses/data-analytics"
    },

    {
      "@type": "Course",
      "@id": "https://rexcoders.in/courses/genai-fullstack#course",
      "name": "GenAI Full-Stack Program",
      "description": "Learn how to build full-stack web apps integrated with AI tools, LLMs, and Generative AI workflows through real projects.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Rexcoders Coding Academy",
        "sameAs": "https://rexcoders.in"
      },
      "url": "https://rexcoders.in/courses/genai-fullstack"
    }
  ]
};


export default seoSchema;