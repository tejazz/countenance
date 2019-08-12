import React, { Fragment } from 'react';
import { Document, Page, View, Text, StyleSheet, Link } from '@react-pdf/renderer';

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

export const ResumeDocument = (props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.headText}>
                    {props.PortfolioData.FullName}
                </Text>
                <Text style={styles.secondaryTextSubtitle}>
                    {props.PortfolioData.Designation}
                </Text>
                <Text style={styles.secondaryText}>
                    Email: {props.PortfolioData.Email}
                </Text>
                <Text style={styles.secondaryText}>
                    Mobile: {props.PortfolioData.Contact.slice(0, 2).map((item) => `${item} `)}
                </Text>
                <Link style={styles.secondaryTextLink}>
                    {props.PortfolioData.Website}
                </Link>
            </View>
            <View style={styles.section}>
                <Text style={styles.secondaryTextSubtitle}>
                    Work Experience
            </Text>
                {props.PortfolioData.WorkExperience.map((item, index) => (
                    <Fragment key={index}>
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
                {props.PortfolioData.SideProjects.map((item, index) => (
                    <Fragment key={index}>
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
                {(props.PortfolioData.ShowPostGraduation) ? (
                    <Fragment>
                        <Text>
                            {props.PortfolioData.Education[0].Name}
                        </Text>
                        <Text style={styles.subTextTitle}>
                            <Text>
                                {props.PortfolioData.Education[0].Degree}
                            </Text>
                            <Text style={styles.subTextDuration}>
                                {`  ${props.PortfolioData.Education[0].Session}`}
                            </Text>
                        </Text>
                        <Text style={styles.subTextTitle}>
                            CGPA: {props.PortfolioData.Education[0].CGPA}
                        </Text>
                    </Fragment>
                ) : null}
                <Text>
                    {props.PortfolioData.Education[1].Name}
                </Text>
                <Text style={styles.subTextTitle}>
                    <Text>
                        {props.PortfolioData.Education[1].Degree}
                    </Text>
                    <Text style={styles.subTextDuration}>
                        {`  ${props.PortfolioData.Education[1].Session}`}
                    </Text>
                </Text>
                <Text style={styles.subTextTitle}>
                    CGPA: {props.PortfolioData.Education[1].CGPA}
                </Text>
            </View>
            {(props.PortfolioData.ShowCertification) ? (
                <View style={styles.section}>
                    <Text style={styles.secondaryTextSubtitle}>
                        Certifications
                 </Text>
                    {props.PortfolioData.Certifications.map((item, index) => (
                        <Fragment key={index}>
                            <Text style={styles.subTextTitle}>
                                <Text>
                                    {item.CertificateName}
                                </Text>
                                <Text style={styles.subTextDuration}>
                                    {item.CertificateDuration}
                                </Text>
                            </Text>
                            <Text style={styles.subTextDescription}>
                                {item.CertificateDescription}
                            </Text>
                        </Fragment>
                    ))}
                </View>
            ) : null}
            <View style={styles.section}>
                <Text style={styles.secondaryTextSubtitle}>
                    Highlights
            </Text>
                <Text>{props.PortfolioData.Highlights}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.secondaryTextSubtitle}>
                    Skill Set
            </Text>
                <Text>
                    {props.PortfolioData.SkillSet}
                </Text>
            </View>
        </Page>
    </Document>
);