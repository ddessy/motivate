import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/img/logoMotivateTransparant.png';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const switchLanguage = () => {
        const newLang = i18n.language === 'bg' ? 'en' : 'bg';
        i18n.changeLanguage(newLang);
    };

    const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="navbar navbar-default navbar-fixed-top menu-back">
        <div className="container">
          <div className="navbar-header">

            {/* ── Hamburger бутон за мобилен ── */}
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link className="navbar-brand" to="/" onClick={closeMenu}>
              <img src={logo} className="navbar-brand-logo" alt="Logo" />
            </Link>
          </div>

          {/* ── Nav collapse — показва се при отворено меню ── */}
          <div className={`navbar-collapse${menuOpen ? '' : ' collapse'}`} id="main-navbar">
            <ul className="nav navbar-nav navbar-right">

              <li className="dropdown">
                <Link to="/" onClick={closeMenu}>{t('home')} <i className="fa fa-bars"></i></Link>
              </li>

              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" role="button">{t('about')} <i className="fa fa-folder-open-o"></i></Link>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li><Link to="/goals" onClick={closeMenu}><i className="fa fa-edit"></i>{t('goals')}</Link></li>
                  <li><Link to="/methodology" onClick={closeMenu}><i className="fa fa-road"></i>{t('methodology')}</Link></li>
                  <li><Link to="/workpackages" onClick={closeMenu}><i className="fa fa-tasks"></i>{t('workpackages')}</Link></li>
                  <li><HashLink to="/workpackages#team" onClick={closeMenu}><i className="fa fa-group"></i>{t('team')}</HashLink></li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="/results" onClick={closeMenu}>{t('results')} <i className="fa fa-folder-open-o"></i></Link>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li><HashLink to="/results#publications" onClick={closeMenu}><i className="fa fa-file-pdf-o"></i>{t('publications')}</HashLink></li>
                  <li><HashLink to="/results#presentations" onClick={closeMenu}><i className="fa fa-file-powerpoint-o"></i>{t('presentations')}</HashLink></li>
                  <li><HashLink to="/results#video" onClick={closeMenu}><i className="fa fa-video-camera"></i>{t('video')}</HashLink></li>
                  <li><HashLink to="/results#results" onClick={closeMenu}><i className="fa fa-bar-chart"></i>{t('reported_results')}</HashLink></li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="/news" onClick={closeMenu}>{t('news')} <i className="fa fa-folder-open-o"></i></Link>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li><HashLink to="/news#surveys" onClick={closeMenu}><i className="fa fa-bar-chart"></i>{t('surveys')}</HashLink></li>
                  <li><HashLink to="/news#seminars" onClick={closeMenu}><i className="fa fa-group"></i>{t('seminars')}</HashLink></li>
                  <li><HashLink to="/news#conferences" onClick={closeMenu}><i className="fa fa-book"></i>{t('conferences')}</HashLink></li>
                  <li><HashLink to="/news#events" onClick={closeMenu}><i className="fa fa-calendar"></i>{t('events')}</HashLink></li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="javascript:void(0)" className="dropdown-toggle" role="button">
                  {t('games')} <i className="fa fa-folder-open-o"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li>
                    <Link to="/games" onClick={closeMenu}>
                      <i className="fa fa-gamepad"></i>{t('gamesMenu.apogee')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/studentgames" onClick={closeMenu}>
                      <i className="fa fa-graduation-cap"></i>{t('gamesMenu.student')}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="/contacts" onClick={closeMenu}>{t('contact')} <i className="fa fa-bars"></i></Link>
              </li>

              <li className="dropdown">
                <a href="javascript:void(0)" onClick={() => { switchLanguage(); closeMenu(); }}>
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