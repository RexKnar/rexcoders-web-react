import MasonryGrid from "components/MasonryGrid";
import { TestimonialCard3 } from "components/reuseable/testimonial-cards";
// CUSTOM DATA
// import { testimonialList } from "data/demo-7";

export default function HomeTestimonialGrid() {
    const testimonialList = [
        {
            id: 5,
            name: 'Aneesh S.P',
            rating: 'five',
            image: '/img/students/aneesh.jpg',
            designation: 'Software Engineer, Infosys',
            review: `As an Electrical engineering graduate, when I decided to change my career path as an IT professional because of my passion for it, I know how difficult it will be. However, I started doing my internship. at REXCODERS and they helped me to overcome my struggle and trained me to set my career as a web developer. Right now, I got placed at Infosys as Software Engineer. Thanks, Rexcoders team for your great support.`
        },
        
        {
            id: 3,
            name: 'Shyjin',
            rating: 'five',
            image: '/img/avatars/te1.jpg',
            designation: 'Software Developer, TCS',
            review: `Hi, I am Shyjin, a Bachelor of Engineering graduate. During my third year, I realized I had zero knowledge of coding skills, even though I was in the Computer Science branch. This realization made me worry about my future. Determined to improve, I decided to take a course in a programming language and began searching for a coding academy. That’s when I discovered Rexcoders.
  
  Rexcoders provided me with a path to build my coding knowledge. Through their guidance, I learned many new things related to web development. What I admired most about Rexcoders was their teaching philosophy: every problem has a solution, even if it takes time and effort to find it.`
          },
        {
            id: 6,
            name: 'Jobin S',
            rating: 'five',
            image: '/img/students/jobin.jpg',
            designation: 'System Engineer, Orion Innovation',
            review: `I am a mechanical engineering student.After completing engineering,I was interested in becoming a Software Engineer.But I dont have any coding knowledge and never knew where to start.Then i joined REXCODERS, and from the scratch,they trained me to get all the knowledge of coding.One thing that impressed me about the academy is, they make as self-learns.Now i become a Software Trainee in a reputed Company.Thank you REXCODERS for making this happen and also, i thank the staffs of REXCODERS for their support in fixing my career.`
        },
        {
            id: 7,
            name: 'Bejan Festus',
            rating: 'five',
            image: '/img/students/bejan.jpg',
            designation: 'System Engineer, TangoEye',
            review: `With the dream of becoming a developer, stepped into REXCODERS as an intern. In addition to the training, they made me to work in live projects. The staffs in REXCODERS create a friendly environment and they were always there to clear my queries. It is the best place for students who were struggling to get knowledge about programming. They provide knowledge sharing as well as discussion sessions which is educative and also entertaining. Now am a front-end developer at Moonhive Private Limited.Thank You REXCODERS, am so grateful for your support.`
        },
    //     {
    //       id: 1,
    //       name: 'Sheik Ali',
    //       rating: 'five',
    // image: '/img/students/sheik.jpg',
    // designation: 'Ass. Professor  -> System Engineer',
    // review: `Hi I am Sheik Ali, I am a graduate in Master of Engineering. I have a 12 years experience in teaching. I was looking out for the right place to build my skills in software developing to fulfill my long-standing desire to shift my career from education industry to IT industry. Finally I have found and joined Rexcoders Coding Academy. The way of training given in this academy was very unique. I got an excellent learning experience from Rexcoders coding academy. The best parts of trainings I admired and enjoyed in the academy are Individual care to each and every students, conducting weekly technical Games, weekend technical sessions handled by experts. Initially I thought it would be difficult for me to change careers after a long gap but after coming to Rexcoders Academy I lost that feeling completely. And now I am a Web Developer at Rexknar Creative Solutions.A very big thanks to Rexcoders Coding Academy Team.`
    //     },
        {
          id: 2,
          name: 'Mafaz Malik',
          rating: 'five',
          image: '/img/avatars/te1.jpg',
          designation: 'Software Developer',
          review: `Rexcoders coding academy has knowledgeable and experienced instructors who can convey complex coding concepts in a way that is easy to understand. It is the place where I developed myself in every aspect. We can develop our skills in many ways, but I developed my skills such as communication, deliverance, and so on here. Individual training is the best part I liked personally.
          Now I have the confidence to develop a Web application.`
        },
        {
            id: 4,
            name: 'Krishna Augustine.P',
            rating: 'five',
            image: '/img/students/krishna.jpg',
            designation: 'Software Developer, QMSMART',
            review: `After completing my bachelors degree, I was confused and had no idea what to do. I was stuck in home during the COVID period and was very depressed thinking of my future. But always wanted to become an IT professional, so I decided to move forward to reach my goal. Then I joined REXCODERS as an intern. I worked on real-time projects in ANGULAR and I improved my skill set. Now I can say I am a proud SOFTWARE DEVELOPER in QM Smart Technologies. Thank you REXCODERS for giving me guidance and support throughout my journey`
        }
      ];
  return (
    <section className='container wrapper rounded-4'>
    <div className="card bg-soft-primary mb-15 mb-md-17">
      <div className=" px-lg-0">
      <div className="text-center row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="mb-3 fs-16 text-uppercase text-primary">Happy Learners </h2>
            <h3 className="mb-10 display-4 px-xxl-10">
            See what our students say about their <span className="underline-3 style-2 green">learning journey and success</span> 
            </h3>
          </div>
        </div>
      <div className="grid">
        <MasonryGrid className="row isotope gy-6">
          {testimonialList.map((item) => (
            <div className="item col-md-6 col-xl-4" key={item.id}>
              <TestimonialCard3 {...item} shadow />
            </div>
          ))}
        </MasonryGrid>
      </div>
     
    </div>
    
    </div>
    <div className="pb-5 d-flex justify-content-center"><a className="mx-1 rounded btn btn-primary" href="https://www.google.com/search?q=rexcoders&oq=rexcoders&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMgYIARBFGDwyFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAMQRRg9MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGEGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3b0455ee63d50f97:0x8a38b79d1146805b,1,,,,">View more on Google</a>
    </div>
    </section>
  );
}
