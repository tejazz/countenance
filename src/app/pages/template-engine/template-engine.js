import React, { Component } from 'react';
import './template-engine.scss';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TemplateOne from './templates/template-one';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import TemplateTwo from './templates/template-two';

class TemplateEngine extends Component {

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

    render() {
        console.log(this.props.location);

        // sort work experience in descending order
        let sortedWorkExperience = this.props.mainJsonData.ExpertisePage.WorkExperience.sort((curr, next) => {
            let currTime = new Date(curr.From);
            let nextTime = new Date(next.From);
            return nextTime - currTime;
        });

        // company lists
        // more than three experiences
        let companyLists = sortedWorkExperience.slice(3, sortedWorkExperience.length).map((item, index) => (`${item.Company}` + ((index === (sortedWorkExperience.length - 4)) ? '' : ', ')));

        // enlist all certifications
        let allCertifications = this.props.mainJsonData.Certifications.map((item, index) => (`${item.CertificateName}` + ((index === (this.props.mainJsonData.Certifications.length - 1)) ? '' : ', ')));

        // get contact details
        let contact = this.props.mainJsonData.ContactPage.Mobile.slice(0, 2).map((item, index) => item);

        // get workable link
        let website = (this.props.mainJsonData.HomePage.WorkLinks.LinkedIn.trim()) ? this.props.mainJsonData.HomePage.WorkLinks.LinkedIn : this.props.mainJsonData.HomePage.WorkLinks.GitHub;

        let renderTemplate;

        switch (this.props.location.state.templateType) {
            case 'template1':
                renderTemplate = <TemplateOne
                    companyLists={companyLists}
                    allCertifications={allCertifications}
                    sortedWorkExperience={sortedWorkExperience}
                    mainJsonData={this.props.mainJsonData}
                    contactInfo={contact.join(', ')}
                    website={website}
                />;
                break;
            case 'template2':
                renderTemplate = <TemplateTwo
                    companyLists={companyLists}
                    allCertifications={allCertifications}
                    sortedWorkExperience={sortedWorkExperience}
                    mainJsonData={this.props.mainJsonData}
                    contactInfo={contact.join(', ')}
                    website={website}
                />;
                break;
            default:
                renderTemplate = <TemplateOne
                    companyLists={companyLists}
                    allCertifications={allCertifications}
                    sortedWorkExperience={sortedWorkExperience}
                    mainJsonData={this.props.mainJsonData}
                    contactInfo={contact.join(', ')}
                    website={website}
                />;
                break;
        };

        return (
            <div>
                <Download
                    className='download-btn'
                    onClick={() => this.printTemplate()}
                />
                {renderTemplate}
            </div>
        );
    }
}

export default TemplateEngine;