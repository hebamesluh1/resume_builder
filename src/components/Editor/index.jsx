import Input from '../Input';
import './style.scss';
import { useState } from 'react';

const Editor = ({ sections,information }) => {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]);

  const workExpBody = (
    <div className="detail">
      <div className="row">
        <Input
          label="Title"
          placeholder="Enter title eg. Frontend developer"
        />
        <Input
          label="Company Name"
          placeholder="Enter company name eg. amazon"
        />
      </div>
      <div className="row">
        <Input
          label="Certificate Link"
          placeholder="Enter certificate link"
        />
        <Input
          label="Location"
          placeholder="Enter location eg. Remote"
        />
      </div>
      <div className="row">
        <Input
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
        />
        <Input
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
        />
      </div>

      <div className="column">
        <label>Enter work description</label>
        <Input
          placeholder="Line 1"
        />
        <Input
          placeholder="Line 2"
        />
        <Input
          placeholder="Line 3"
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className="detail">
      <div className="row">
        <Input
          label="Title"
          placeholder="Enter title eg. Chat app"
        />
        <Input
          label="Overview"
          placeholder="Enter basic overview of project"
        />
      </div>
      <div className="row">
        <Input
          label="Deployed Link"
          placeholder="Enter deployed link of project"
        />
        <Input
          label="Github Link"
          placeholder="Enter github link of project"
        />
      </div>

      <div className="column">
        <label>Enter project description</label>
        <Input
          placeholder="Line 1"
        />
        <Input
          placeholder="Line 2"
        />
        <Input
          placeholder="Line 3"
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className="detail">
      <div className="row">
        <Input
          label="Title"
          placeholder="Enter title eg. B-tech"
        />
        <Input
          label="College/School Name"
          placeholder="Enter name of your college/school"
        />
      </div>
      <div className="row">
        <Input
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
        />
        <Input
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
        />
      </div>

      <div className="column">
        <label>Enter project description</label>
        <Input
          placeholder="Line 1"
        />
        <Input
          placeholder="Line 2"
        />
        <Input
          placeholder="Line 3"
        />
        <Input
          placeholder="Line 4"
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className="detail">
      <div className="row">
        <Input
          label="Name"
          placeholder="Enter your Full name eg. Heba Mesluh"
        />
        <Input
          label="Title"
          placeholder="Enter your title eg.Frontend developer"
        />
      </div>
      <div className="row">
        <Input
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
        />
        <Input
          label="Github Link"
          placeholder="Enter your Github profile link"
        />
      </div>
      <div className="row">
        <Input
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          label="Enter phone"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className="detail">
      <div className="column">
        <label>Enter your achievments</label>
        <Input
          placeholder="Line 1"
        />
        <Input
          placeholder="Line 2"
        />
        <Input
          placeholder="Line 3"
        />
        <Input
          placeholder="Line 4"
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className="detail">
      <Input
        label="Summary"
        placeholder="Enter your objective/summary"
      />
    </div>
  );
  const otherBody = (
    <div className="detail">
      <Input
        label="Other"
        placeholder="Enter sth"
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  }

  return (
    <div className='editor-container'>
      <div className="title-editor">
        {Object.keys(sections)?.map(key => <div
          key={key}
          className={`section ${activeSectionKey == key && 'active'}`}
          onClick={() => setActiveSectionKey(key)}
        >
          {console.log(key)}
          {sections[key]}
        </div>)}
      </div>
      <div className="body">
        <Input label="Title" placeholder="Enter section title" />
        <div className="chips">
          <div className="chip">
            <p>Project x </p>
          </div>
          <div className="chip">
            <p>Project x </p>
          </div>
        </div>
        {generateBody()}
      </div>
    </div>
  )
}

export default Editor