import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeContent: React.FC = () => {
    const { t, i18n } = useTranslation();

  return (
        <section id="content">
        <div className="container">
            <div className="row ">
			    <h3><b style={{color: "#1F5794", textAlign: 'center'}}>{t('homeContent.title')}</b></h3>
                <div className="col-lg-3 col-md-3  col-sm-3">
                    <i  className="fa fa-desktop fa-5x  icon-round  faa-ring"></i>
                    <h5><strong>{t('homeContent.personalization')}</strong> </h5>
                    <p>
                        {t('homeContent.personalization_desc')}
                    </p>
                </div>
                <div className="col-lg-3 col-md-3  col-sm-3">
                    <i className="fa fa-paper-plane-o  fa-5x icon-round  faa-pulse"></i>
                    <h5><strong>{t('homeContent.dynamic_adaptation')}</strong> </h5>
                    <p>
                        {t('homeContent.dynamic_adaptation_desc')}
                    </p>
                </div>
                <div className="col-lg-3 col-md-3  col-sm-3">
                    <i className="fa fa-bullhorn  fa-5x icon-round faa-horizontal"></i>
                    <h5><strong>{t('homeContent.validation')}</strong></h5>
                    <p>
                        {t('homeContent.validation_desc')}
                    </p>
                </div>

                <div className="col-lg-3 col-md-3  col-sm-3">
                    <i className="fa fa-globe  fa-5x icon-round faa-horizontal"></i>
                    <h5><strong>{t('homeContent.related_projects')}</strong></h5>
                    <ul>
						<li><a href="http://shapesproject.eu/" target="_blank">SHAPES
						</a></li><li><a href="https://summit.uni-sofia.bg/" target="_blank">SUMMIT
						</a></li><li><a href="./apogee/index.html" target="_blank">APOGEE
						</a></li><li><a href="https://www.ecreha.org/" target="_blank">e-Creha
						</a></li><li><a href="https://www.nasledstvo.bg/" target="_blank">НАСЛЕДСТВО'BG
					    </a></li>
				    </ul>
                </div>

            </div>
            
            <div className="col-lg-6 col-md-6">
                <h2>{t('homeContent.goal_title')}</h2>
                <p>{t('homeContent.goal_desc')}</p>
				<p>{t('homeContent.funding')}</p>
                <a href="about.html" className="btn btn-primary" type="button"> {t('homeContent.learn_more')}</a>
                <br />
                <br />
            </div>

            <div className="col-lg-6 col-md-6">
                <h2 id="surveys" style={{color: "#FB9351"}}>{t('homeContent.surveys')}</h2>
                <ul>
                    <li><a href="https://forms.gle/spY8Co8wsJnfbib17" target="_blank">{t('homeContent.survey_1')}</a></li>
                    <li><a href="https://goo.gl/forms/j7XxwDpKDZb9uZdm1" target="_blank">{t('homeContent.survey_2')}</a></li>
                    <li><a href="https://goo.gl/forms/jlB0zgWiLHpsF4z02" target="_blank">{t('homeContent.survey_3')}</a></li>
                </ul>
                <br />
                <br />
            </div>
        </div>
        
    </section>   

  );
};

export default HomeContent;
