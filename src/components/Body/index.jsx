import Editor from '../Editor';
import { useState,useRef } from 'react';
import Resume from '../Resume';
import './style.scss';
import { FiDownloadCloud } from "react-icons/fi";
import { colors, sections, information } from '../../mock/data'
const Body = () => {
    const [resumeInformation, setResumeInformation] = useState(information);
    const resumeRef = useRef();
    const [activeColor, setActiveColor] = useState(colors[0]);
    return (
        <div className='container'>
            <div className="title">
                A Resume Builder
            </div>
            <div className='toolbar'>
                <div className="colors">
                    {colors.map(item =>
                        <span
                            key={item}
                            style={{ background: item }}
                            className="color"></span>
                    )}
                </div>
                <button><FiDownloadCloud />Download</button>
            </div>
            <div className="main">
                <Editor sections={sections} information={resumeInformation} />
                <Resume
                    ref={resumeRef}
                    sections={sections}
                    information={resumeInformation}
                    activeColor={activeColor}
                />
            </div>
        </div>
    )
}

export default Body