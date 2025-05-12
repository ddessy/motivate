import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();
    
  return (
    <div className="footer">
	   <div id="footer-sec">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4" id="about-ftr">
						<i className="fa fa-building fa-2x"></i>
						<span>MOTIVATE</span>
						<p><a href="http://motivate-bg.online/qdPM/">{t('footerContent.system')}</a></p>
					</div>
					<div className="col-lg-4 col-md-4">
						<i className="fa fa-paper-plane-o fa-2x"></i>
						<span>{t('footerContent.blog')}</span>
						<div id="blog-footer-div">
							<div className="media">
								<div className="media-body">
									<span className="media-heading"><a href="http://apogee.blog.bg/technology/2018/02/28/apogee-project-presentation-and-web-site.1596308">MOTIVATE: {t('footerContent.project_presentation')}</a></span>
									<small className="muted">{t('footerContent.last_modified')} 15.02.2025</small>
									
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-4">
						<i className="fa fa-sliders fa-2x"></i>
						<span>{t('footerContent.contact')}</span><br/>
						{t('footerContent.phone')}: (+359) 2 971 04 00<br/>
						{t('footerContent.email')}: bbontchev@fmi.uni-sofia.bg
						<br/>
						<a href="http://bg.linkedin.com/in/bbontchev/" title="LinkedIn"><img src="assets/img/icons/Linkedin-Icon.png" alt="LinkedIn"/></a>
						<a href="https://www.slideshare.net/BoyanBontchev/online-generation-of-smart-adaptive-video-games-for-education-apogee/" title="SlideShare"><img src="assets/img/icons/Slideshare-Icon.png" alt="SlideShare"/></a>
						<a href="https://youtu.be/mI9NwiZOrB0" type="YouTube"><img src="assets/img/icons/YouTube-Icon.png" alt="YouTube"/></a>
						<a href="http://apogee.blog.bg/technology/2018/02/28/apogee-project-presentation-and-web-site.1596308" type="Blog"><img src="assets/img/icons/Blogger-Icon.png" alt="Blog"/></a>
					</div>
				</div>
			</div>
		</div>
		<div id="footser-end">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<center>2024-2025 {t('footerContent.rights_reserved')} | <a href="www.motivate-bg.online" target="_blank" style={{color:"#fff"}}>www.motivate-bg.online</a></center>
					</div>
				</div>

			</div>
		</div>
	</div>
  );
};

export default Footer;
