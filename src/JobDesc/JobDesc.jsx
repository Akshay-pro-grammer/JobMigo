import React from 'react';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import IconMapPin from '@mui/icons-material/LocationOn';
import IconBriefcase from '@mui/icons-material/Work';
import IconPremiumRights from '@mui/icons-material/MonetizationOn';
import IconRecharging from '@mui/icons-material/Bolt';
import DOMPurify from 'dompurify';

const JobDesc = () => {
    const card = [
        { name: "Location", icon: "IconMapPin", value: "New York" },
        { name: "Experience", icon: "IconBriefcase", value: "Expert" },
        { name: "Salary", icon: "IconPremiumRights", value: "48 LPA" },
        { name: "Job Type", icon: "IconRecharging", value: "Full Time" },
    ];

    const iconMap = {
        IconMapPin: IconMapPin,
        IconBriefcase: IconBriefcase,
        IconPremiumRights: IconPremiumRights,
        IconRecharging: IconRecharging,
    };
    const skills = ['React', 'Spring Boot', 'Java', 'Python', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL']
    const desc = "<h4>About The Job</h4><p>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us. In this role, you would use various tech stacks, including Laravel, Node JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS. You will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.</p><h4>Responsibilities</h4><ul><li>Design, build, test, and deploy software applications and features</li><li>Carry software products through the software development life cycle (SDLC)</li><li>Write clean, concise, and efficient code</li><li>Manage code documentation and version control</li><li>Troubleshoot and debug software</li><li>Participate in on-call rotation to respond to production issues</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>3+ years of professional experience working on this field</li><li>Bachelor's degree in computer science, software engineering, or related field</li><li>Proficiency in at least one programming language (e.g., Java, C#, C++)</li><li>Back-end development expertise</li><li>Strong problem-solving and communication skills</li><li>Experience with build tools such as Gradle and Maven</li><li>Good working knowledge of the Linux operating system</li></ul>";
    const data = DOMPurify.sanitize(desc);
    return (
        <div className="w-2/3">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-nile-blue-800 rounded-xl">
                        <img className="h-14 w-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-2xl">Software Engineer</div>
                        <div className="text-lg text-nile-blue-300">
                            Google &#x2022; 3 Days Ago &#x2022; 48 Applicants
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to="/apply-job">
                        <Button
                            className="!text-quarter-spanish-white-400 !border-quarter-spanish-white-300 hover:!bg-nile-blue-800"
                            variant="outlined"
                            fullWidth
                        >
                            Apply Now
                        </Button>
                    </Link>
                    <BookmarkBorderRoundedIcon className="text-quarter-spanish-white-400 cursor-pointer" />
                </div>
            </div>
            <Divider sx={{ my: 2 }} />
            <div className="flex justify-between">
                {card.map((item, index) => {
                    const IconComponent = iconMap[item.icon]; // Get the correct icon component dynamically
                    return (
                        <div key={index} className="flex flex-col items-center gap-1">
                            <IconButton className="!w-14 !h-14" color="primary" size="large">
                                <IconComponent style={{ fontSize: 40 }} />
                            </IconButton>
                            <div className="text-sm text-nile-blue-300">{item.name}</div>
                            <div className="font-semibold">{item.value}</div>
                        </div>
                    );
                })}
            </div>
            <Divider sx={{ my: 2 }} />
            <div>
                <div className='text-xl font-semibold mb-5'>Required Skills</div>
                <div className='flex flex-wrap gap-2'>
                    {
                        skills.map((skill, index) => (
                            <IconButton key={index} className="!text-sm !w-fit !font-medium !h-fit !p-2" color="primary" aria-label='Settings'>
                                {skill}
                            </IconButton>
                        ))
                    }
                </div>
            </div>
            <Divider sx={{ my: 2 }} />
            <div className='[&_h4]:text-xl [&_*]:text-nile-blue-200 [&_li]:marker:text-quarter-spanish-white-400 [&_h4]:font-semibold [&_h4]:my-5 [&_h4]:text-nile-blue-200 [&_p]:text-justify ' dangerouslySetInnerHTML={{ __html: data }}>

            </div>
            <Divider sx={{ my: 2 }} />
            <div>
                <div className='text-xl font-semibold mb-5'>Required Skills</div>
            </div>
        </div>
    );
};

export default JobDesc;
