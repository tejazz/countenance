import React, { Fragment } from 'react';
import { Document, Page, View, Text, StyleSheet, PDFViewer, Link } from '@react-pdf/renderer';

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

class PDFView extends React.Component {
    constructor(props) {
        super(props);

        if (props.location.state === undefined) {
            props.history.push(`/${localStorage.getItem('currentRoute')}`);
        }
    }
    
    render() {
        // check to ensure undefined document data
        // prevents rendering of page
        if (this.props.location.state === undefined) {
            return(<div>Document data is undefined</div>);
        }

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
            Certifications,
            SideProjects,
            ShowCertification,
            ShowPostGraduation
        } = this.props.location.state.PortfolioData;

        let ResumeDocument = () => (
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
                        {(ShowPostGraduation) ? (
                            <Fragment>
                                <Text>
                                    {Education[0].Name}
                                </Text>
                                <Text style={styles.subTextTitle}>
                                    <Text>
                                        {Education[0].Degree}
                                    </Text>
                                    <Text style={styles.subTextDuration}>
                                        {`  ${Education[0].Session}`}
                                    </Text>
                                </Text>
                                <Text style={styles.subTextTitle}>
                                    CGPA: {Education[0].CGPA}
                                </Text>
                            </Fragment>
                        ) : null}
                        <Text>
                            {Education[1].Name}
                        </Text>
                        <Text style={styles.subTextTitle}>
                            <Text>
                                {Education[1].Degree}
                            </Text>
                            <Text style={styles.subTextDuration}>
                                {`  ${Education[1].Session}`}
                            </Text>
                        </Text>
                        <Text style={styles.subTextTitle}>
                            CGPA: {Education[1].CGPA}
                        </Text>
                    </View>
                    {(ShowCertification) ? (
                        <View style={styles.section}>
                            <Text style={styles.secondaryTextSubtitle}>
                                Certifications
                             </Text>
                            <Text>{Certifications}</Text>
                        </View>
                    ) : null}
                    <View style={styles.section}>
                        <Text style={styles.secondaryTextSubtitle}>
                            Highlights
                        </Text>
                        <Text>{Highlights}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.secondaryTextSubtitle}>
                            Skill Set
                        </Text>
                        <Text>
                            {SkillSet}
                        </Text>
                    </View>
                </Page>
            </Document>
        );

        return (
            <PDFViewer style={{ width: "100%", height: "100%" }}>
                <ResumeDocument />
            </PDFViewer>
        );
    }
};

export default PDFView;