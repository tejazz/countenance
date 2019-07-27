import React, { Component, Fragment } from 'react';
import { Document, Page, View, Text, StyleSheet, PDFViewer, Link } from '@react-pdf/renderer';
import PfData from '../../data/pf-data.json';
import './resume.scss';

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 40,
        fontSize: 12
    },
    section: {
        paddingBottom: 20
    },
    headText: {
        color: "blue",
        fontWeight: 300,
        paddingBottom: 3,
        fontSize: 15
    },
    secondaryText: {
        opacity: 0.8,
        paddingBottom: 3
    },
    secondaryTextSubtitle: {
        opacity: 0.4,
        paddingBottom: 6
    },
    secondaryTextLink: {
        opacity: 0.8,
        paddingBottom: 3,
        color: "blue"
    },
    subTextTitle: {
        paddingBottom: 5,
        opacity: 0.8
    },
    subTextSubTitle: {
        fontSize: 12,
        opacity: 0.7,
        paddingBottom: 5
    },
    subTextDescription: {
        fontSize: 12,
        paddingBottom: 10
    },
    subTextDuration: {
        opacity: 0.6,
        fontSize: 12
    }
});

let WorkExperience = PfData.ExpertisePage.WorkExperience.sort((curr, next) => {
    let currTime = new Date(curr.From);
    let nextTime = new Date(next.From);
    return nextTime - currTime;
});

const PortfolioData = {
    FullName: PfData.HomePage.FullName,
    Designation: PfData.HomePage.BannerTitle,
    Email: PfData.ContactPage.Email,
    Contact: PfData.ContactPage.Mobile,
    Website: PfData.HomePage.WorkLinks.GitHub,
    WorkExperience: WorkExperience.slice(0, 3),
    Education: PfData.Education,
    SkillSet: PfData.ExpertisePage.SkillSet,
    Certifications: PfData.Certifications,
    Highlights: PfData.Highlights,
    SideProjects: PfData.ProjectsPage.Projects.slice(0, 3)
};

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PortfolioData
        };
    }

    componentDidMount() {
        localStorage.setItem("currentRoute", "resume");
    }

    render() {
        let {
            FullName,
            Designation,
            Email,
            Contact,
            Website,
            WorkExperience,
            Education,
            SkillSet,
            Highlights,
            SideProjects
        } = this.state.PortfolioData;

        const ResumeDocument = () => (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.headText}>
                            {FullName}
                        </Text>
                        <Text style={styles.secondaryTextSubtitle}>
                            {Designation}
                        </Text>
                        <Text style={styles.secondaryText}>
                            Email: {Email}
                        </Text>
                        <Text style={styles.secondaryText}>
                            Mobile: {Contact.slice(0, 2).map((item) => `${item} `)}
                        </Text>
                        <Link style={styles.secondaryTextLink}>
                            {Website}
                        </Link>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.secondaryTextSubtitle}>
                            Work Experience
                        </Text>
                        {WorkExperience.map((item) => (
                            <Fragment>
                                <Text style={styles.subTextTitle}>
                                    <Text>
                                        {item.Company}
                                    </Text>
                                    <Text style={styles.subTextDuration}>
                                        {`  ${item.From} - ${item.To}`}
                                    </Text>
                                </Text>
                                <Text style={styles.subTextSubTitle}>
                                    {item.JobTitle}
                                </Text>
                                <Text style={styles.subTextDescription}>
                                    {item.JobDescription}
                                </Text>
                            </Fragment>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.secondaryTextSubtitle}>
                            Side Projects
                        </Text>
                        {SideProjects.map((item) => (
                            <Fragment>
                                <Text style={styles.subTextTitle}>
                                    <Text>
                                        {item.ProjectName}
                                    </Text>
                                </Text>
                                <Text style={styles.subTextSubTitle}>
                                    {item.ProjectTitle}
                                </Text>
                                <Text style={styles.subTextDescription}>
                                    {item.ProjectGist}
                                </Text>
                            </Fragment>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.secondaryTextSubtitle}>
                            Education
                        </Text>
                        <Text>
                            {Education.Graduation.Name}
                        </Text>
                        <Text style={styles.subTextTitle}>
                            <Text>
                                {Education.Graduation.Degree}
                            </Text>
                            <Text style={styles.subTextDuration}>
                                {`  ${Education.Graduation.Session}`}
                            </Text>
                        </Text>
                        <Text style={styles.subTextTitle}>
                            CGPA: {Education.Graduation.CGPA}
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.secondaryTextSubtitle}>
                            Highlights
                        </Text>
                        {Highlights.map((item) => <Text>&#8226; {item}</Text>)}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.secondaryTextSubtitle}>
                            Technical Skills
                        </Text>
                        <Text>
                            {SkillSet.map((item, index) => `${item.Skill}${(SkillSet.length === index + 1) ? "" : ", "}`)}
                        </Text>
                    </View>
                </Page>
            </Document>
        );

        return (
            <div className="resume-container">
                <div className="resume-document">
                    <PDFViewer className="resume-document--pdf-view">
                        <ResumeDocument />
                    </PDFViewer>
                </div>
                <div className="resume-form">
                    <h3 className="resume-form_title">Form Your Resume</h3>
                    <div className="resume-form_main">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;