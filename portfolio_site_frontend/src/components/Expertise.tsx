import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; // Fallback icon
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { getExpertise, Expertise as ExpertiseType } from '../services/api';

// Helper to pick the right icon based on the string from Django
const getIcon = (iconName: string) => {
    switch(iconName.toLowerCase()) {
        case 'react': return faReact;
        case 'docker': return faDocker;
        case 'python': return faPython;
        default: return faLaptopCode; // Fallback
    }
};

function Expertise() {
    const [expertiseList, setExpertiseList] = useState<ExpertiseType[]>([]);

    useEffect(() => {
        getExpertise()
            .then(response => {
                setExpertiseList(response.data);
            })
            .catch(error => {
                console.error("Error fetching expertise:", error);
            });
    }, []);

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {expertiseList.map((item) => (
                    <div className="skill" key={item.id}>
                        <FontAwesomeIcon icon={getIcon(item.icon_name)} size="3x"/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {/* Django sends this as a list of strings now */}
                            {item.tags_list.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;



