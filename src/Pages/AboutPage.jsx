import React, { useRef } from 'react';
import './About.css';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  AOS.init();

  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ikh11qw', 'template_sx60x7p', form.current, 'FS9lKpAPxjm4ljd6B')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
  return (
    <div className=" min-h-screen text-white p-10 img ">
      <div className="container  mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">About Our College</h1>
        <p className="text-white mb-8">
          Tejgaon College,Dhaka (Bengali: তেজগাঁও কলেজ,ঢাকা) is a college in Dhaka city,[1] Bangladesh which was founded in 1961.[2] It has 30,000 students.[citation needed]

          Tejgaon College is located at Farmgate, at the Dhaka city centre. It had started off as a night college in a school campus at Sadarghat. After successive moves to Tejgaon Industrial Area, Alia Madrasha (Bakshi Bazaar), Polytechnic School and Al-Razee Hospital Building, it is now located at Indira Road, Farmgate, Dhaka.

          It is a university college since it now offers honours and master's courses on 25 to 27 subjects under the National University. Established on over 1-acre (4,000 m2) of land, there are six multi-storeyed buildings, five six-storied buildings and one one-storied building, in addition to various other buildings in the compound.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-white mb-8">
          Our mission is to empower students with knowledge, skills, and values that will
          enable them to succeed in their careers and make positive contributions to society.
          We strive to create an inclusive and diverse community that fosters creativity,
          critical thinking, and lifelong learning.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-white mb-8">
          Our vision is to be a leading educational institution recognized for excellence in
          teaching, research, and community engagement. We aim to produce future leaders who
          are ethical, compassionate, and committed to making a difference in the world.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label><br />
                    <input className='h-12 w-96 rounded-xl bg-slate-500 p-2' type="text" placeholder='your name...' name="from_name" /><br />
                    <label>Email</label><br />
                    <input className=' h-12 w-96 rounded-xl bg-slate-500 p-2' type="email" placeholder='your Email...' name="from_email" /><br />
                    <label>Message</label><br />
                    <textarea className='h-20 w-96 rounded-xl bg-slate-500 p-2' placeholder='message' name="message" /><br />
                    <input className='bg-blue-500 rounded-xl px-16 py-3 mb-10' type="submit" value="Send" />
                </form>

      </div>
      <div className='md:relative mt-2'>
                    <div className='absolute bottom-0  left-0  mr-8 mb-4'>
                        <h2 data-aos="fade-left" data-aos-delay="100" className='text-white uppercase mt-10'>Find us on</h2>
                        <div className='flex gap-5 text-white text-3xl pt-3'>
                            <p className=' bg-transparent'><Link to='https://www.facebook.com/T.C.DOfficials/photos/'><FaFacebook></FaFacebook></Link></p>
                            <p className=' bg-transparent'><Link to='https://www.instagram.com/barna_roksana/'><FaInstagramSquare></FaInstagramSquare></Link></p>
                            <p className=' bg-transparent'><Link to='https://www.linkedin.com/in/roksana-monowar-barna-154504280'><FaLinkedin></FaLinkedin></Link></p>
                            <p className=' bg-transparent'><Link to='https://github.com/roksana-barna'><FaGithub></FaGithub> </Link></p>
                        </div>
                    </div>
                </div>


    </div>
  );
};

export default AboutPage;
