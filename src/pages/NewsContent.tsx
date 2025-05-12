import React from 'react';
import { useTranslation } from 'react-i18next';

const NewsContent: React.FC = () => {
    const { t, i18n } = useTranslation();
    
  return (
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <br />
            <h2 id="surveys">{t('newsContent.surveys.title')}</h2>
            <ul>
              <li>
                <a
                  href="https://forms.gle/spY8Co8wsJnfbib17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('newsContent.surveys.student_learning_styles')}
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/forms/j7XxwDpKDZb9uZdm1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('newsContent.surveys.student_game_usage')}
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/forms/jlB0zgWiLHpsF4z02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('newsContent.surveys.teacher_game_creation')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2 id="seminars"> {t('newsContent.seminars.title')}</h2>
            <ul>
              <li>
                {t('newsContent.seminars.twinec_report')}, 
                <a href="http://www.math.bas.bg/vt/inis/twin/"> {t('newsContent.seminars.twinec_website')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-12 col-md-12">
            <h2 id="conferences">{t('newsContent.conferences.title')}</h2>
            <ul>
              <li>
                {t('newsContent.planning')}
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2 id="events">{t('newsContent.events.title')}</h2>
            <ul>
              <li>
                {t('newsContent.planning')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsContent;