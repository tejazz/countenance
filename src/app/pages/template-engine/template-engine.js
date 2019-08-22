import React, { Component } from 'react';
import './template-engine.scss';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import { ReactComponent as EditForm } from '../../assets/images/edit-form.svg';
import { ReactComponent as Close } from '../../assets/images/exit.svg';
import TemplateOne from './templates/template-one';
import TemplateTwo from './templates/template-two';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

class TemplateEngine extends Component {
    constructor(props) {
        super(props);

        let { mainJsonData } = props;

        this.state = {
            resumeTemplateJson: {
                FullName: mainJsonData.HomePage.FullName,
                Description: mainJsonData.HomePage.BannerDescription,
                Title: mainJsonData.HomePage.BannerTitle,
                Address: mainJsonData.ContactPage.Address,
                DisplayImage: mainJsonData.HomePage.DisplayImage,
                Contact: mainJsonData.ContactPage.Mobile,
                Email: mainJsonData.ContactPage.Email,
                Highlights: mainJsonData.Highlights,
                Education: mainJsonData.Education,
                SkillSet: mainJsonData.ExpertisePage.SkillSet,
                WorkLinks: mainJsonData.HomePage.WorkLinks,
                Certifications: mainJsonData.Certifications,
                WorkExperience: mainJsonData.ExpertisePage.WorkExperience,
            },
            displayEditor: false
        };
    }

    printTemplate = () => {
        const input = document.getElementById("main-document");

        let isMobile = (navigator.userAgent.indexOf('Android') || navigator.userAgent.indexOf('iPhone'));

        html2canvas(input)
            .then((canvas) => {
                const imgData = (isMobile) ? canvas.toDataURL('image/jpeg') : canvas.toDataURL('image/png');

                const pdf = new jsPDF("p", "mm", "a4", true);

                let width = pdf.internal.pageSize.getWidth();
                let height = pdf.internal.pageSize.getHeight();
                let imgFormat = (isMobile) ? 'JPEG' : 'PNG';

                pdf.addImage(imgData, imgFormat, 0, 0, width, height, '', 'FAST');

                pdf.save('countenance-resume.pdf');
            });
    }

    modifyExistingJsonData = (newJson) => {
        let mainJson = Object.assign({}, this.props.mainJsonData);

        mainJson.HomePage.FullName = newJson.FullName;
        mainJson.HomePage.BannerDescription = newJson.Description;
        mainJson.HomePage.BannerTitle = newJson.Title;
        mainJson.HomePage.DisplayImage = newJson.DisplayImage;
        mainJson.ContactPage.Mobile = newJson.Contact;
        mainJson.ContactPage.Address = newJson.Address;
        mainJson.ContactPage.Email = newJson.Email;
        mainJson.Highlights = newJson.Highlights;
        mainJson.SkillSet = newJson.SkillSet;
        mainJson.HomePage.WorkLinks = newJson.WorkLinks;
        mainJson.Certifications = newJson.WorkLinks;
        mainJson.ExpertisePage.WorkExperience = newJson.WorkExperience;

        this.setState({
            resumeTemplateJson: newJson
        });

        // this.props.modifyMainJsonData(mainJson);
    }

    render() {
        console.log(this.state.resumeTemplateJson);

        // sort work experience in descending order
        let sortedWorkExperience = this.state.resumeTemplateJson.WorkExperience.sort((curr, next) => {
            let currTime = new Date(curr.From);
            let nextTime = new Date(next.From);
            return nextTime - currTime;
        });

        // company lists
        // more than three experiences
        let companyLists = sortedWorkExperience.slice(3, sortedWorkExperience.length).map((item, index) => (`${item.Company}` + ((index === (sortedWorkExperience.length - 4)) ? '' : ', ')));

        // enlist all certifications
        let allCertifications = this.state.resumeTemplateJson.Certifications.map((item, index) => (`${item.CertificateName}` + ((index === (this.state.resumeTemplateJson.Certifications.length - 1)) ? '' : ', ')));

        // get contact details
        let contact = this.state.resumeTemplateJson.Contact.slice(0, 2).map((item, index) => item);

        // get workable link
        let website = (this.state.resumeTemplateJson.WorkLinks.LinkedIn.trim()) ? this.state.resumeTemplateJson.WorkLinks.LinkedIn : this.state.resumeTemplateJson.WorkLinks.GitHub;

        let renderTemplate;

        switch (this.props.location.state.templateType) {
            case 'template1':
                renderTemplate = <TemplateOne
                    companyLists={companyLists}
                    allCertifications={allCertifications}
                    sortedWorkExperience={sortedWorkExperience}
                    mainJsonData={this.state.resumeTemplateJson}
                    contactInfo={contact.join(', ')}
                    website={website}
                />;
                break;
            case 'template2':
                renderTemplate = <TemplateTwo
                    companyLists={companyLists}
                    allCertifications={allCertifications}
                    sortedWorkExperience={sortedWorkExperience}
                    mainJsonData={this.state.resumeTemplateJson}
                    contactInfo={contact.join(', ')}
                    website={website}
                />;
                break;
            default:
                renderTemplate = <TemplateOne
                    companyLists={companyLists}
                    allCertifications={allCertifications}
                    sortedWorkExperience={sortedWorkExperience}
                    mainJsonData={this.state.resumeTemplateJson}
                    contactInfo={contact.join(', ')}
                    website={website}
                />;
                break;
        };

        return (
            <div className="template-container">
                <Download
                    className='download-btn'
                    onClick={() => this.printTemplate()}
                    style={{ backgroundColor: this.props.secondaryColor }}
                />
                <EditForm
                    className='edit-btn'
                    onClick={() => this.setState({ ...this.state, displayEditor: true })}
                    style={{ backgroundColor: this.props.secondaryColor }}
                />

                <div
                    className="template-form"
                    style={(this.state.displayEditor) ? { left: 0, backgroundColor: this.props.secondaryColor } : { left: "100%", backgroundColor: this.props.secondaryColor  }}
                >
                    <h3 className="template-form--text">Edit Your Resume Here</h3>
                    <p className="template-form--text">The JSON data is the data which is reflected upon the portfolio and the resume. For images, I would suggest you upload the images on a free hosting site and share the link here.<br/><b>Note:</b> The fields correspond to the templates in question. Make changes accordingly.</p>
                    <Close
                        className='close-btn' 
                        onClick={() => this.setState({ ...this.state, displayEditor: false })}
                    />
                    {/* add close form button here */}
                    <Editor
                        value={this.state.resumeTemplateJson}
                        onChange={this.modifyExistingJsonData}
                        className="resume editor"
                    />
                </div>

                {renderTemplate}
            </div>
        );
    }
}

export default TemplateEngine;