import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/img/logoMotivateTransparant.png';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const switchLanguage = () => {
        const newLang = i18n.language === 'bg' ? 'en' : 'bg';
        i18n.changeLanguage(newLang);
    };

  return (
    <>
      <div className="navbar navbar-default navbar-fixed-top menu-back">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="navbar-brand-logo" alt="Logo" />
            </Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link to="/">{t('home')} <i className="fa fa-bars"></i></Link>
              </li>

              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" role="button">{t('about')} <i className="fa fa-folder-open-o"></i></Link>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li><Link to="/goals"><i className="fa fa-edit"></i>{t('goals')}</Link></li>
                  <li><Link to="/methodology"><i className="fa fa-road"></i>{t('methodology')}</Link></li>
                  <li><Link to="/workpackages"><i className="fa fa-tasks"></i>{t('workpackages')}</Link></li>
                  <li><HashLink to="/workpackages#team"><i className="fa fa-group"></i>{t('team')}</HashLink></li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="/results">{t('results')} <i className="fa fa-folder-open-o"></i></Link>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li><HashLink to="/results#publications"><i className="fa fa-file-pdf-o"></i>{t('publications')}</HashLink></li>
                  <li><HashLink to="/results#presentations"><i className="fa fa-file-powerpoint-o"></i>{t('presentations')}</HashLink></li>
                  <li><HashLink to="/results#video"><i className="fa fa-video-camera"></i>{t('video')}</HashLink></li>
                  <li><HashLink to="/results#results"><i className="fa fa-bar-chart"></i>{t('reported_results')}</HashLink></li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="/news">{t('news')} <i className="fa fa-folder-open-o"></i></Link>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li><HashLink to="/news#surveys"><i className="fa fa-bar-chart"></i>{t('surveys')}</HashLink></li>
                  <li><HashLink to="/news#seminars"><i className="fa fa-group"></i>{t('seminars')}</HashLink></li>
                  <li><HashLink to="/news#conferences"><i className="fa fa-book"></i>{t('conferences')}</HashLink></li>
                  <li><HashLink to="/news#events"><i className="fa fa-calendar"></i>{t('events')}</HashLink></li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="/games">{t('games')} <i className="fa fa-bars"></i></Link>
              </li>

              <li className="dropdown">
                <Link to="/contacts">{t('contact')} <i className="fa fa-bars"></i></Link>
              </li>

              <li className="dropdown">
                <a href="javascript:void(0)" onClick={switchLanguage}>
                  <img src={i18n.language === 'bg' ? "/assets/img/flagEN.gif" : "/assets/img/flagBG.gif"} alt="Lang" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="welocme-note">
        <div className="welcome-div"></div>
      </div>
    </>
  );
};

export default Header;
