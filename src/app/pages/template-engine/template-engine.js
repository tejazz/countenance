import React, { Component } from 'react';
import './template-engine.scss';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TemplateOne from './templates/template-one';
import { ReactComponent as Download } from '../../assets/images/download.svg';

class TemplateEngine extends Component {

    printTemplate = () => {
        const input = document.getElementById("main-document");

        html2canvas(input, {
            scale: 2
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "mm", "a4");

                let width = pdf.internal.pageSize.getWidth();
                let height = pdf.internal.pageSize.getHeight();

                pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                pdf.save("countenance-resume.pdf");
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
                renderTemplate = (<div>Template 2</div>);
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