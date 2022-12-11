//Testimonial Data
const testimonials = [
  {
    name: 'Jo Vos',
    job: 'CMO, imaware™',
    image: 'images/home/testimonials/jo.jpeg',
    testimonial:
      '"Adam is the real deal. From a commercial standpoint, his approach to strategy is thoughtful and rooted in a genuine passion for problem solving. No matter the ask, he always goes above and beyond, comfortable stepping outside of his lane to help where needed. Having him as an extended part of our team has fundamentally shifted my views on embedded consulting."',
    link: 'https://www.linkedin.com/in/jovos/',
  },
  {
    name: 'Amir M',
    job: 'CEO, Blackcreek.io',
    image: 'images/home/testimonials/amir.jpeg',
    testimonial:
      '"Adam is a fantastic person to work with. He has extensive knowledge in building high performing websites... From the start, he was very articulate and did a fantastic job presenting a roadmap on how we would work together to improve our site\'s SEO. He is super patient, knowledgeable, and has excellent client relationship skills."',
    link: 'https://www.linkedin.com/in/amirmxt/',
  },
  {
    name: 'Ben Freeborn',
    job: 'Head of customer experience, Interflora',
    image: 'images/home/testimonials/ben.jpeg',
    testimonial:
      '"Adam made a tremendous difference advancing SEO for Interflora\'s brands - he possesses a naturally curious mind to deliver measured improvement at pace, with real passion. It was a real pleasure working with Adam. I would have no hesitation in recommending the talent he would bring to organisations big or small."',
    link: 'https://www.linkedin.com/in/benfreeborn/',
  },
  {
    name: 'Simon Porter',
    job: 'Director, James Porter & Son',
    image: 'images/home/testimonials/simon.jpeg',
    testimonial:
      '"We asked Adam to carry out an audit of our website to uncover it\'s weaknesses and on his findings implement a strategy to grow traffic and revenue. In short we have found Adams advice absolutely invaluable and have absolutely no hesitation in thoroughly recommending his skills."',
    link: 'https://www.linkedin.com/in/simon-porter-3a982b40/',
  },
  {
    name: 'Wendy Shand',
    job: 'Founder, Tots to Travel',
    image: 'images/home/testimonials/wendy.jpeg',
    testimonial:
      '"Adam is a superstar and a total delight to work with.  He is trustworthy, eminently likeable, but above all, he is talented, creative and understands the commercial imperative behind what he is being asked to do. He has worked within an agency and in-house, giving him a huge amount of insight and empathy into what businesses are looking for."',
    link: 'https://www.linkedin.com/in/wendy-shand-95999525/',
  },
  {
    name: 'Devon Scoble',
    job: 'Head Of Content, imaware™',
    image: 'images/home/testimonials/devon.jpeg',
    testimonial:
      '"Adam is such a joy to work with. He\'s a professional whiz, offering clear direction and solid SEO advice. He\'s also kind, funny and empathetic. He gets into readers heads, and he understands writers and their needs. As a freelancer, I love working with Adam because his stellar communication skills make it easy."',
    link: 'https://www.linkedin.com/in/devonscoble/',
  },
  {
    name: 'Andrew Land',
    job: 'Senior Email & CRM Manager, Conde Nast',
    image: 'images/home/testimonials/andy.jpeg',
    testimonial:
      '"I worked with Adam and he was right up there with the best SEO specialists I\'ve had the pleasure of working alongside. Not just that but he has a true passion for the area and was constantly introducing me to new bits of tech he\'d read about. An absolute top man and true expert in his field."',
    link: 'https://www.linkedin.com/in/andrew-land-982b329/',
  },
  {
    name: 'Peter Mason',
    job: 'Founder & MD, Peter Mason Photography',
    image: 'images/home/testimonials/peter.jpeg',
    testimonial:
      '"Working with Adam over the past year or two has been fantastic. We initially started with an overhaul of my existing website to make it more SEO friendly and worked up to redesigning the whole site from the ground up, with Adam taking on design as well as SEO."',
    link: 'https://www.linkedin.com/in/peter-mason-photography/',
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById('testimonial-container');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

nextBtn.addEventListener('click', () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener('click', () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <a class="testimonial-link" href="${testimonials[i].link}">
    <div class="testimonial-wrapper">
    <div class="testimonial-image">
    <img src=${testimonials[i].image}>
    </div>
    <div class="testimonial-name">
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    <img class="li-icon" src="images/home/icons/linkedin-icon.png"/>
    </div>
    </div>
    </a>
  `;
};
window.onload = displayTestimonial;
