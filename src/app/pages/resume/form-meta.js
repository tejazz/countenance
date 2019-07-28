const stateVar = "this.state.PortfolioData";

const FormMeta = [
    {
        label: "Full Name",
        value: `${stateVar}['FullName']`,
        array: false,
        object: false, input: true
    },
    {
        label: "Designation",
        value: `${stateVar}['Designation']`,
        array: false,
        object: false, input: true
    },
    {
        label: "Email",
        value: `${stateVar}['Email']`,
        array: false,
        object: false, input: true
    },
    {
        label: "Mobile-1",
        value: `${stateVar}['Contact'][0]`,
        array: true,
        object: false, input: true
    },
    {
        label: "Mobile-1",
        value: `${stateVar}['Contact'][1]`,
        array: true,
        object: false, input: true
    },
    {
        label: "Website",
        value: `${stateVar}['Website']`,
        array: false,
        object: false, input: true
    },
    {
        label: "Company-1",
        value: `${stateVar}['WorkExperience'][0].Company`,
        array: true,
        object: true, input: true
    },
    {
        label: "Duration-1-Start",
        value: `${stateVar}['WorkExperience'][0].From`,
        array: true,
        object: true, input: true
    },
    {
        label: "Duration-1-End",
        value: `${stateVar}['WorkExperience'][0].To`,
        array: true,
        object: true, input: true
    },
    {
        label: "Role-1",
        value: `${stateVar}['WorkExperience'][0].JobTitle`,
        array: true,
        object: true, input: true
    },
    {
        label: "Description-1",
        value: `${stateVar}['WorkExperience'][0].JobDescription`,
        array: true,
        object: true, input: false
    },
    {
        label: "Company-2",
        value: `${stateVar}['WorkExperience'][1].Company`,
        array: true,
        object: true, input: true
    },
    {
        label: "Duration-2-Start",
        value: `${stateVar}['WorkExperience'][1].From`,
        array: true,
        object: true, input: true
    },
    {
        label: "Duration-2-End",
        value: `${stateVar}['WorkExperience'][1].To`,
        array: true,
        object: true, input: true
    },
    {
        label: "Role-2",
        value: `${stateVar}['WorkExperience'][1].JobTitle`,
        array: true,
        object: true, input: true
    },
    {
        label: "Description-2",
        value: `${stateVar}['WorkExperience'][1].JobDescription`,
        array: true,
        object: true, input: false
    },
    {
        label: "Company-3",
        value: `${stateVar}['WorkExperience'][2].Company`,
        array: true,
        object: true, input: true
    },
    {
        label: "Duration-3-Start",
        value: `${stateVar}['WorkExperience'][2].From`,
        array: true,
        object: true, input: true
    },
    {
        label: "Duration-3-End",
        value: `${stateVar}['WorkExperience'][2].To`,
        array: true,
        object: true, input: true
    },
    {
        label: "Role-3",
        value: `${stateVar}['WorkExperience'][2].JobTitle`,
        array: true,
        object: true, input: true
    },
    {
        label: "Description-3",
        value: `${stateVar}['WorkExperience'][2].JobDescription`,
        array: true,
        object: true, input: false
    },
    {
        label: "Project-1",
        value: `${stateVar}['SideProjects'][0].ProjectName`,
        array: true,
        object: true, input: true
    },
    {
        label: "Project Title-1",
        value: `${stateVar}['SideProjects'][0].ProjectTitle`,
        array: true,
        object: true, input: true
    },
    {
        label: "Project Description-1",
        value: `${stateVar}['SideProjects'][0].ProjectGist`,
        array: true,
        object: true, input: false
    },
    {
        label: "Project-2",
        value: `${stateVar}['SideProjects'][1].ProjectName`,
        array: true,
        object: true, input: true
    },
    {
        label: "Project Title-2",
        value: `${stateVar}['SideProjects'][1].ProjectTitle`,
        array: true,
        object: true, input: true
    },
    {
        label: "Project Description-2",
        value: `${stateVar}['SideProjects'][1].ProjectGist`,
        array: true,
        object: true, input: false
    },
    {
        label: "Project-3",
        value: `${stateVar}['SideProjects'][2].ProjectName`,
        array: true,
        object: true, input: true
    },
    {
        label: "Project Title-3",
        value: `${stateVar}['SideProjects'][2].ProjectTitle`,
        array: true,
        object: true, input: true
    },
    {
        label: "Project Description-3",
        value: `${stateVar}['SideProjects'][2].ProjectGist`,
        array: true,
        object: true, input: false
    },
    {
        label: "Post Graduation School",
        value: `${stateVar}['Education'][0].Name`,
        array: true,
        object: true, input: true
    },
    {
        label: "Post Graduation Degree",
        value: `${stateVar}['Education'][0].Degree`,
        array: true,
        object: true, input: true
    },
    {
        label: "Post Graduation Session",
        value: `${stateVar}['Education'][0].Session`,
        array: true,
        object: true, input: true
    },
    {
        label: "Post Graduation CGPA",
        value: `${stateVar}['Education'][0].CGPA`,
        array: true,
        object: true, input: true
    },
    {
        label: "Graduation School",
        value: `${stateVar}['Education'][1].Name`,
        array: true,
        object: true, input: true
    },
    {
        label: "Graduation Degree",
        value: `${stateVar}['Education'][1].Degree`,
        array: true,
        object: true, input: true
    },
    {
        label: "Graduation Session",
        value: `${stateVar}['Education'][1].Session`,
        array: true,
        object: true, input: true
    },
    {
        label: "Graduation CGPA",
        value: `${stateVar}['Education'][1].CGPA`,
        array: true,
        object: true, input: true
    },
    {
        label: "Highlights",
        value: `${stateVar}['Highlights']`,
        array: false,
        object: false, input: false
    },
    {
        label: "Skill Set",
        value: `${stateVar}['SkillSet']`,
        array: false,
        object: false, input: false
    }
];

export default FormMeta;