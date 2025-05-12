import React from 'react';
import { useTranslation } from 'react-i18next';


const ContactsContent: React.FC = () => {
    const { t, i18n } = useTranslation();

  return (
        <section id="content">
        <div className="container">
            <div className="row ">
                <div className="col-lg-12 col-md-12" style={{height:"58vh"}}>
                    <h2><strong>{t('contactsContent.title')}</strong> </h2>
                    <p><br />
			<i><b>{t('contactsContent.project.label')}:</b></i><br /><br />
			{t('contactsContent.project.email')}<br /><br />
			<i><b>{t('contactsContent.leader.title')}:</b></i><br /><br />
                        {t('contactsContent.leader.name')}, {t('contactsContent.leader.department')}<br />
			{t('contactsContent.leader.faculty')} <br />
			{t('contactsContent.leader.university')} <br />
                        {t('contactsContent.leader.address.street')}<br />
                        {t('contactsContent.leader.address.block')}<br />
                        {t('contactsContent.leader.address.city')}<br /><br /><br />
                        {t('contactsContent.leader.phone')}<br />
                        {t('contactsContent.leader.email')}<br />
                        {t('contactsContent.leader.skype')}<br />
                        {t('contactsContent.leader.linkedin')}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactsContent;