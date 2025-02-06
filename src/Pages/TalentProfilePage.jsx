import { Button, Divider } from '@mui/material'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../Components/TalentProfile/Profile';
import RecommendTalent from '../Components/TalentProfile/RecommendTalent';

const TalentProfilePage = () => {
    const profile={
        name: "Jarrod Wood",
        role: "Software Engineer",
        company: "Google",
        location: "New York, United States",
        about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
        skills: ["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"],
        experience: [
          {
            title: "Software Engineer III",
            company: "Google",
            location: "New York, United States",
            startDate: "Apr 2022",
            endDate: "Present",
            description: "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
          },
          {
            title: "Software Engineer",
            company: "Microsoft",
            location: "Seattle, United States",
            startDate: "Jun 2018",
            endDate: "Mar 2022",
            description: "At Microsoft, I worked on developing and optimizing cloud-based applications, focusing on enhancing performance and scalability. I collaborated with product managers and designers to create innovative features that improved user engagement. My responsibilities included writing clean, maintainable code, performing code reviews, and mentoring junior developers. I played a key role in migrating legacy applications to modern cloud infrastructure, resulting in significant cost savings and improved efficiency."
          }
        ],
        certifications: [
          {
            name: "Google Professional Cloud Architect",
            issuer: "Google",
            issueDate: "Aug 2023",
            certificateId: "CB72982GG"
          },
          {
            name: "Microsoft Certified: Azure Solutions Architect Expert",
            issuer: "Microsoft",
            issueDate: "May 2022",
            certificateId: "MS12345AZ"
          }
        ]
      }
  return (
    <div className="min-h-[100vh] bg-nile-blue-800 font-['poppins'] p-4">
            <Link className='my-4 inline-block' to="/find-talent">
                <Button startIcon={<ArrowBackSharpIcon/>} className='!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800' variant="outlined" fullWidth>Go Back</Button>
            </Link>
            {/* <Divider variant='middle'/> */}
            <div className='flex gap-5'>
                <Profile {...profile}/>
                <RecommendTalent/>
            </div>
    </div>
  )
}

export default TalentProfilePage
