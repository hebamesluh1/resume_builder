import Input from '../Input';
import './style.scss';
import { useState, useEffect } from 'react';

const Editor = ({ sections, information }) => {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]);
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });
  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };
  const workExpBody = (
    <div className="detail">
      <div className="row">
        <Input
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <Input
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <Input
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
        <Input
          label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <Input
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <Input
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>

      <div className="column">
        <label>Enter work description</label>
        <Input
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <Input
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <Input
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className="detail">
      <div className="row">
        <Input
          label="Title"
          value={values.title}
          placeholder="Enter title eg. Chat app"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <Input
        label="Overview"
        value={values.overview}
        placeholder="Enter basic overview of project"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }
      />
      <div className="row">
        <Input
          label="Deployed Link"
          value={values.link}
          placeholder="Enter deployed link of project"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <Input
          label="Github Link"
          value={values.github}
          placeholder="Enter github link of project"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className="column">
        <label>Enter project description</label>
        <Input
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <Input
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <Input
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <Input
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className="detail">
      <div className="row">
        <Input
          label="Title"
          value={values.title}
          placeholder="Enter title eg. B-tech"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <Input
        label="College/School Name"
        value={values.college}
        placeholder="Enter name of your college/school"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }
      />
      <div className="row">
        <Input
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <Input
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className="detail">
      <div className="row">
        <Input
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <Input
          label="Title"
          value={values.title}
          placeholder="Enter your title eg. Frontend developer"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <Input
          label="Linkedin Link"
          value={values.linkedin}
          placeholder="Enter your linkedin profile link"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <Input
          label="Github Link"
          value={values.github}
          placeholder="Enter your github profile link"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className="row">
        <Input
          label="Email"
          value={values.email}
          placeholder="Enter your email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <Input
          label="Enter phone"
          value={values.phone}
          placeholder="Enter your phone number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className="detail">
      <div className="column">
        <label>List your achievements</label>
        <Input
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <Input
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <Input
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <Input
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className="detail">
      <Input
        label="Summary"
        value={values.summary}
        placeholder="Enter your objective/summary"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );
  const otherBody = (
    <div className="detail">
      <Input
        label="Other"
        value={values.other}
        placeholder="Enter something"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
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
  };


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
        {sections[activeSectionKey]}
        <Input />
      </div>
    </div>
  )
}

export default Editor