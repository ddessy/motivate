import React from 'react';
import { useTranslation } from 'react-i18next';

const PartnersContent: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
        <section id="content">
        <div className="container">
            <div className="row">
                <h1>{t('workpackagesContent.title')}</h1>
				<br/>
                <h2><strong>{t('workpackagesContent.wp')} 1</strong></h2>
                <br />
                <div className="col-lg-4  col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 1.1 </h3>
                            <p>{t('workpackagesContent.wp1.1.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp1.1.result')}</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 1.2</h3>
                            <p>{t('workpackagesContent.wp1.2.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp1.2.result')}</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 1.3</h3>
                            <p>{t('workpackagesContent.wp1.3.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp1.3.result')}
</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row pad-top-botm">
                <h2><strong>{t('workpackagesContent.wp')} 2</strong></h2>
                <br />
                <div className="col-lg-4  col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 2.1 </h3>
                            <p>{t('workpackagesContent.wp2.1.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp2.1.result')}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 2.2</h3>
                            <p>{t('workpackagesContent.wp2.2.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp2.2.result')}</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 2.3</h3>
                            <p>{t('workpackagesContent.wp2.3.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp2.3.result')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pad-top-botm">
                <h2><strong>{t('workpackagesContent.wp')} 3</strong></h2>
                <br />
                <div className="col-lg-4  col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 3.1 </h3>
                            <p>
                                {t('workpackagesContent.wp3.1.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp3.1.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 3.2</h3>
                            <p>
                                {t('workpackagesContent.wp3.2.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp3.2.result')}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 3.3</h3>
                            <p>
                                {t('workpackagesContent.wp3.3.action')} <br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp3.3.result')} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pad-top-botm">
                <h2><strong>{t('workpackagesContent.wp')} 4</strong></h2>
                <br />
                <div className="col-lg-4  col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 4.1 </h3>
                            <p>
                                {t('workpackagesContent.wp4.1.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp4.1.result')} 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 4.2</h3>
                            <p>
                                {t('workpackagesContent.wp4.2.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp4.2.result')} 
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 4.3</h3>
                            <p>
                                {t('workpackagesContent.wp4.3.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp4.3.result')} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pad-top-botm">
                <h2><strong>{t('workpackagesContent.wp')} 5</strong></h2>
                <br />
                <div className="col-lg-3  col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 5.1 </h3>
                            <p>
                                {t('workpackagesContent.wp5.1.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp5.1.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 5.2</h3>
                            <p>
                                {t('workpackagesContent.wp5.2.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp5.2.result')}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 5.3</h3>
                            <p>
                                {t('workpackagesContent.wp5.3.action')} <br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp5.3.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 5.4</h3>
                            <p>
                                {t('workpackagesContent.wp5.4.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp5.4.result')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pad-top-botm">
                <h2><strong>{t('workpackagesContent.wp')} 6</strong></h2>
                <br />
                <div className="col-lg-3  col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 6.1 </h3>
                            <p>
                                {t('workpackagesContent.wp6.1.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp6.1.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 6.2</h3>
                            <p>
                                {t('workpackagesContent.wp6.2.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp6.2.result')}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 6.3</h3>
                            <p>
                                {t('workpackagesContent.wp6.3.action')} <br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp6.3.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 6.4</h3>
                            <p>
                                {t('workpackagesContent.wp6.4.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp6.4.action')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pad-top-botm">
                <h2><strong>{t('workpackagesContent.wp')} 7</strong></h2>
                <br />
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>

                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 7.1 </h3>
                            <p>
                                {t('workpackagesContent.wp7.1.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp7.1.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 7.2</h3>
                            <p>
                                {t('workpackagesContent.wp7.2.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp7.2.result')}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 7.3</h3>
                            <p>
                                {t('workpackagesContent.wp7.3.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp7.3.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 7.4</h3>
                            <p>
                                {t('workpackagesContent.wp7.4.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp7.4.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 7.5</h3>
                            <p>
                                {t('workpackagesContent.wp7.5.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp7.5.result')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 7.6</h3>
                            <p>
                                {t('workpackagesContent.wp7.6.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp7.6.action')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 7.7</h3>
                            <p>
                                {t('workpackagesContent.wp7.7.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp7.7.result')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pad-top-botm">
                <h2><strong>{t('workpackagesContent.wp')} 8</strong></h2>
                <br />
				<div className="col-lg-3  col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 8.1 </h3>
                            <p>
                                {t('workpackagesContent.wp8.1.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> -
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 8.2</h3>
                            <p>
                                {t('workpackagesContent.wp8.2.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp8.2.result')}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 8.3</h3>
                            <p>
                                {t('workpackagesContent.wp8.3.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> {t('workpackagesContent.wp8.3.result')}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="media">
                        <div className="pull-left">
                            <i className="fa fa-paperclip fa-4x rotate-icon"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="media-heading">{t('workpackagesContent.action')} 8.4</h3>
                            <p>
                                {t('workpackagesContent.wp8.4.action')}<br />
                                <strong>{t('workpackagesContent.expected_result')}:</strong> -
                            </p>
                        </div>
                    </div>
                </div>
            </div>

			<div className="row " id="team">
                <div className="col-lg-12 col-md-12">
                    <h1>{t('workpackagesContent.team')}</h1>
                    <ol>
                    { i18n.language === 'bg' ? 
                    (
                        <>
						                <li>проф. д-р Боян Паскалев Бончев (ръководител)</li>
						                <li>доц. д-р Николина Илиева Николова</li>
						                <li>доц. д-р Александър Димов Димов</li>
						                <li>доц. д-р Елена Николаева Паунова-Хубенова</li>
						                <li>гл. ас. д-р Явор Иванов Данков</li>
						                <li>гл. ас. д-р Албена Емилова Антонова</li>
						                <li>гл. ас. д-р Валентина Тодорова Терзиева–Богойчева</li>
						                <li>д-р Десислава Дакова Василева</li>
						                <li>ас. Станислав Господинов Иванов</li>
						                <li>докт. Иван Илков Найденов</li>
						                <li>докт. Илко Захариев Адамов</li>
						                <li>Борислав Недков Йорданов</li>
                        </>
                     )
                     :
                     (
                         <>
                             <li>Prof. Dr. Boyan Paskalev Bontchev (project manager)</li>
                             <li>Assoc. Prof. Dr. Nikolina Ilieva Nikolova</li>
                             <li>Assoc. Prof. Dr. Alexander Dimov Dimov</li>
                             <li>Assoc. Prof. Dr. Elena Nikolaeva Paunova-Hubenova</li>
                             <li>Ch. Assistant Prof. Dr. Yavor Ivanov Dankov</li>
                             <li>Ch. Assistant Prof. Dr. Albena Emilova Antonova</li>
                             <li>Ch. Assistant Prof. Dr. Valentina Todorova Terzieva-Bogoycheva</li>
                             <li>Dr. Dessislava Dakova Vassileva</li>
                             <li>Assistant Stanislav Gospodinov Ivanov</li>
                             <li>Doctoral student Ivan Ilkov Naydenov</li>
                             <li>Doctoral student Ilko Zahariev Adamov</li>
                             <li>Borislav Nedkov Yordanov</li>
                         </>
                     )
                    }
					          </ol>
                </div>
            </div>
			
        </div>
    </section>

  );
};

export default PartnersContent;
