import Editor from '../Editor';
import './style.scss';
import { FiDownloadCloud } from "react-icons/fi";
import { colors, sections } from '../../mock/data'
const Body = () => {

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
                <Editor sections={sections} />
            </div>
        </div>
    )
}

export default Body