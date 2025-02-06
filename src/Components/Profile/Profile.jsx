import React, { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Divider, TextField } from '@mui/material';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import ExpCard from './ExpCard';
import CertiCard from './CertiCard';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import AddIcon from '@mui/icons-material/Add';  // Add Icon for Adding
import DeleteIcon from '@mui/icons-material/Delete';  // Delete Icon
import SelectInput from './SelectInput';
import TagsInput from '../convert/TagsInput';

const Profile = (props) => {
    const select = [
        { label: "Job Title", placeholder: "Enter Job Title", options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], value: "Software Engineer", leftSection: "IconBriefcase" },
        { label: "Company", placeholder: "Enter Company Name", options: ['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'], value: "Google", leftSection: "IconBriefcase" },
        { label: "Location", placeholder: "Enter Job Location", options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'], value: "New York, United States", leftSection: "IconMapPin" }
    ];
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [about, setAbout] = useState(props.about);
    const [skills, setSkills] = useState(props.skills);
    const [experience, setExperience] = useState(props.experience);
    const [certifications, setCertifications] = useState(props.certifications);

    const handleEdit = (index) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    };

    const handleSkillChange = (updatedSkills) => {
        setSkills(updatedSkills);
    };

    const handleExperienceChange = (index, key, value) => {
        const updatedExperience = [...experience];
        updatedExperience[index][key] = value;
        setExperience(updatedExperience);
    };

    const handleCertificationChange = (index, key, value) => {
        const updatedCertifications = [...certifications];
        updatedCertifications[index][key] = value;
        setCertifications(updatedCertifications);
    };

    // Add new Experience
    const addExperience = () => {
        const newExp = { title: '', company: '', location: '', startDate: '', endDate: '', description: '' };
        setExperience([...experience, newExp]);
    };

    // Delete Experience
    const deleteExperience = (index) => {
        const updatedExperience = experience.filter((_, i) => i !== index);
        setExperience(updatedExperience);
    };

    // Add new Certification
    const addCertification = () => {
        const newCert = { name: '', issuer: '', issueDate: '', certificateId: '' };
        setCertifications([...certifications, newCert]);
    };

    // Delete Certification
    const deleteCertification = (index) => {
        const updatedCertifications = certifications.filter((_, i) => i !== index);
        setCertifications(updatedCertifications);
    };

    return (
        <div className='w-4/5 mx-auto'>
            {/* Banner */}
            <div className='relative'>
                <img className='rounded-t-2xl' src="/Profile/banner.jpg" alt="Banner" />
                <img className='w-48 h-48 rounded-full absolute -bottom-1/3 left-3 border-8 border-nile-blue-800' src="/avatar.png" alt="Avatar" />
            </div>

            {/* Profile Info */}
            <div className='px-5 py-4 mt-16'>
                <div className='text-3xl font-semibold flex justify-between'>
                    {props.name}
                    <Fab onClick={() => handleEdit(0)} size="medium" color="primary" aria-label="edit">
                        {edit[0] ? <SaveTwoToneIcon /> : <EditIcon />}
                    </Fab>
                </div>

                {edit[0] ? (
                    <div className='flex gap-10 [&>*]:w-1/2'>
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                        <SelectInput {...select[2]} />
                    </div>
                ) : (
                    <>
                        <div className='text-xl flex gap-1 items-center'>
                            <WorkRoundedIcon className='!h-5' /> {props.role} &bull; {props.company}
                        </div>
                        <div className='flex gap-1 text-nile-blue-300 text-lg items-center'>
                            <LocationOnOutlinedIcon className='!h-5' />{props.location}
                        </div>
                    </>
                )}
            </div>

            <Divider className='!my-6' variant='middle' />
            {/* About Section */}
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-3 flex justify-between'>
                    About
                    <Fab onClick={() => handleEdit(1)} size="medium" color="primary" aria-label="edit">
                        {edit[1] ? <SaveTwoToneIcon /> : <EditIcon />}
                    </Fab>
                </div>
                {edit[1] ? (
                    <TextField id="outlined-multiline-static" label="About" multiline
                        minRows={4} fullWidth value={about} onChange={(e) => setAbout(e.target.value)}
                    />
                ) : (
                    <div className='text-sm text-nile-blue-300 text-justify'>
                        {about}
                    </div>
                )}
            </div>

            <Divider className='!my-6' variant='middle' />

            {/* Skills Section */}
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-3 flex justify-between'>
                    Skills
                    <Fab onClick={() => handleEdit(2)} size="medium" color="primary" aria-label="edit">
                        {edit[2] ? <SaveTwoToneIcon /> : <EditIcon />}
                    </Fab>
                </div>

                {edit[2] ? (
                    <TagsInput initialTags={props.skills} editable={true} onSave={handleSkillChange} />
                ) : (
                    <div className='flex flex-wrap gap-2'>
                        {skills.map((skill, index) => (
                            <div key={index} className='bg-quarter-spanish-white-300 text-sm font-medium bg-opacity-15 rounded-3xl text-quarter-spanish-white-400 px-3 py-1'>
                                {skill}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Divider className='!my-6' variant='middle' />
            {/* Experience Section */}
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5 flex justify-between'>
                    Experience
                    <Fab onClick={() => handleEdit(3)} size="medium" color="primary" aria-label="edit">
                        {edit[3] ? <SaveTwoToneIcon /> : <EditIcon />}
                    </Fab>
                </div>

                {edit[3] ? (
                    <>
                        {experience.map((exp, index) => (
                            <div key={index} className='mb-5 relative'>
                                <Fab size="small" color="secondary" aria-label="delete" onClick={() => deleteExperience(index)}
                                    className="absolute top-0 right-0">
                                    <DeleteIcon />
                                </Fab>

                                <TextField
                                    label="Title" value={exp.title} onChange={(e) => handleExperienceChange(index, 'title', e.target.value)} fullWidth margin="normal" />
                                <TextField label="Company" value={exp.company} onChange={(e) => handleExperienceChange(index, 'company', e.target.value)} fullWidth margin="normal"/>
                                <TextField label="Location" value={exp.location} onChange={(e) => handleExperienceChange(index, 'location', e.target.value)} fullWidth margin="normal"                                 />
                                <div className="flex gap-4">
                                    <TextField label="Start Date" type="date" value={exp.startDate} onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{ shrink: true }}
                                    />
                                    <TextField
                                        label="End Date"
                                        type="date"
                                        value={exp.endDate}
                                        onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </div>
                                <TextField
                                    label="Description"
                                    value={exp.description}
                                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    margin="normal"
                                />
                            </div>
                        ))}
                        <Fab onClick={addExperience} size="small" color="primary" aria-label="add" className='mt-4'>
                            <AddIcon />
                        </Fab>
                    </>
                ) : (
                    <div className='flex flex-col gap-8'>
                        {experience.map((exp, index) => (
                            <ExpCard key={index} {...exp} />
                        ))}
                    </div>
                )}
            </div>

            <Divider className='!my-6' variant='middle' />

            {/* Certifications Section */}
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5 flex justify-between'>
                    Certifications
                    <Fab onClick={() => handleEdit(4)} size="medium" color="primary" aria-label="edit">
                        {edit[4] ? <SaveTwoToneIcon /> : <EditIcon />}
                    </Fab>
                </div>

                {edit[4] ? (
                    <>
                        {certifications.map((certi, index) => (
                            <div key={index} className='mb-5 relative'>
                                <Fab
                                    size="small"
                                    color="secondary"
                                    aria-label="delete"
                                    onClick={() => deleteCertification(index)}
                                    className="absolute top-0 right-0"
                                >
                                    <DeleteIcon />
                                </Fab>

                                <TextField
                                    label="Certification Name"
                                    value={certi.name}
                                    onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Issuer"
                                    value={certi.issuer}
                                    onChange={(e) => handleCertificationChange(index, 'issuer', e.target.value)}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Issue Date"
                                    value={certi.issueDate}
                                    onChange={(e) => handleCertificationChange(index, 'issueDate', e.target.value)}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Certificate ID"
                                    value={certi.certificateId}
                                    onChange={(e) => handleCertificationChange(index, 'certificateId', e.target.value)}
                                    fullWidth
                                    margin="normal"
                                />
                            </div>
                        ))}
                        <Fab onClick={addCertification} size="small" color="primary" aria-label="add" className='mt-4'>
                            <AddIcon />
                        </Fab>
                    </>
                ) : (
                    <div className='flex flex-col gap-8'>
                        {certifications.map((certi, index) => (
                            <CertiCard key={index} {...certi} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
