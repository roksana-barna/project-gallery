import React from 'react';
import './About.css';
const AboutPage = () => {
  return (
    <div className=" min-h-screen bg-opacity-100 text-white p-10 img ">
      <div className="container mx-auto py-12">
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
        <p className="text-white mb-2">Address: indira road,farmgate, Dhaka</p>
        <p className="text-white mb-2">Email: tejgaon@college.com</p>
        <p className="text-white mb-2">Phone: +1 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default AboutPage;
