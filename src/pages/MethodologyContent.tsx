import React from 'react';
import { useTranslation } from 'react-i18next';

const MethodologyContent: React.FC = () => {
    const { t, i18n } = useTranslation();
    
  return (
        <section id="content">
        <div className="container">
            <div className="row ">
                <div className="col-lg-12 col-md-12">
                    <h2><strong>{t('methodologyContent.title')}</strong> </h2>
                    <p>{t('methodologyContent.intro')}</p>
                    <ol>
                        <li>{t('methodologyContent.phase1')}</li>
                        <li>
                            {t('methodologyContent.phase2')}
							<br/>
							{t('methodologyContent.phase2_goals')} 
							<ol>
							    <li>{t('methodologyContent.pashe2.1')}</li>
								<li>{t('methodologyContent.phase2.2')}</li>
							</ol>
                        </li>
                        <li>
                            {t('methodologyContent.phase3')}
							<ol>
							    <li>{t('methodologyContent.phase3.1')}</li>
								<li>{t('methodologyContent.phase3.2')}</li>
							</ol>
                        </li>
                        <li>
                            {t('methodologyContent.phase4')}
                        </li>
                        <li>
                            {t('methodologyContent.phase5')}</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
  );
};

export default MethodologyContent;
