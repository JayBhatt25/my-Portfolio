
import React from 'react'
import './certifications.scss'
import '../shared/animated-titles.scss'
import AwsDevCert from '../../images/aws-cert-dev.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Certifications() {
    const items = [
        {   
            id:1,
            certImg: AwsDevCert,
            certName: 'I am now a AWS Developer Associate Certified Professional! 🚀',
            desc: [
            'Here are a few key takeaways from my certification journey:',
            '🌟 Continuous Learning: The world of cloud computing is ever-evolving, and this certification is just one step in my ongoing learning journey.',
            '🤝 Networking: I\'ve had the privilege of connecting with amazing professionals in the AWS community. Networking has been an invaluable part of this journey.',
            '🔗 Building for the Cloud: With this certification, I\'m better equipped to design, build, and deploy applications on AWS. I look forward to applying this knowledge in real-world projects.',
            '🌐 Next Steps: Now that I\'m certified, I\'m excited to take on new challenges and contribute to innovative cloud solutions.',
            'If you\'re considering pursuing this certification or have any questions about the AWS Developer Associate journey, feel free to reach out. I\'m always here to help and share insights.'
        ],
            certLink: 'https://www.credly.com/badges/4d6d2174-9f25-4fc9-bf77-797aa682f78c/public_url'
        }
    ]
    return(
        <div className="certifications">
            <div className="fade-in">
                <h1 className="cert_title animated-title certifications-title">Certifications</h1>
            </div>
            <div className="fade-in cert-container">
                <div className="cert-item">
                    <img src={items[0].certImg} alt='aws developer certificate'></img>
                    <div className="cert-item-right">
                        <h2>{items[0].certName}</h2>
                        {items[0].desc.map((item, i) => (
                            <p key={item.id}>{item}</p>
                        ))}
                        <a href={items[0].certLink} className="certLink-btn" target="_blank" rel="noreferrer">View Badge <span className="openinnewIcon"><OpenInNewIcon /></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}