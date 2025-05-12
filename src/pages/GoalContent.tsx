import React from 'react';
import { useTranslation } from 'react-i18next';

const GoalContent: React.FC = () => {
    const { t, i18n } = useTranslation();

  return (
    <section id="content">
        <div className="container">
            <div className="row">
                <h2><strong>{t('goalsContent.title')}</strong></h2>
                <br />
                <div className="col-lg-4  col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('goalsContent.title1')}</h3>
                            <p>{t('goalsContent.description1')} </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('goalsContent.title2')}</h3>
                            <p>{t('goalsContent.description2')} </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('goalsContent.title3')}</h3>
                            <p>{t('goalsContent.description3')}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row pad-top-botm">
                <div className="col-lg-4  col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('goalsContent.title4')}</h3>
                            <p>{t('goalsContent.description4')} </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('goalsContent.title5')}</h3>
                            <p>{t('goalsContent.description5')} </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('goalsContent.title6')}</h3>
                            <p>{t('goalsContent.description6')}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default GoalContent;
