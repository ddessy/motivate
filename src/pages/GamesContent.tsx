import React from 'react';
import { useTranslation } from 'react-i18next';

const GamesContent: React.FC = () => {
    const { t, i18n } = useTranslation();

  return (
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2 id="seminars">{t('gamesContent.title')}</h2>
            <p>
              {t('gamesContent.howToPlay.label')} - {' '}
              <a href="./video/howtoplay.mp4" style={{ color: '#FFA500' }}>
                {t('gamesContent.howToPlay.video')}
              </a>{' '}
              и{' '}
              <a href="./howtoplay.html" style={{ color: '#FFA500' }}>
                {t('gamesContent.howToPlay.webpage')}
              </a>
            </p>
            
            {/* 
              Преди да започнете да играете, помогнете ни да разберем какви образователни видео игри предпочитате - 
              попълнете тази <a href="https://forms.gle/4yV1Ck4k3ZhSNwiL6" style="color: #FFA500">
              Анкета за предпочитани образователни видео игри.</a>
            */}
            
            <h3>{t('gamesContent.asenevtsi.title')}</h3>
            <a href="./assets/games/Asenevtsi_08/index.html">
              <img 
                src="./assets/img/Asenevci.jpg" 
                height={250} 
                width={500} 
                style={{
                   /* border: '2px solid', */ 
                  margin: '2px 10px',
                  float: 'left'
                }} 
                title="Асеневци" 
                alt="Асеневци" 
              />
            </a>
            <div className="general-subhead">
              <p>
                {t('gamesContent.asenevtsi.description1')}<br />
                {t('gamesContent.asenevtsi.description2')}
                <a href="./pdf/Asenevtsi_Introduction.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#FFA500' }}>
                  {t('here')}
                </a>. 
                {t('gamesContent.asenevtsi.controls1')}
                <b>{t('gamesContent.asenevtsi.controls2')}</b>
              </p>
              <p>
                {t('gamesContent.asenevtsi.universalVersion')}
                <a href="./assets/games/Asenevtsi-easy-build/index.html" style={{ color: '#FFA500' }}>
                  {t('here')}
                </a>, 
                {t('gamesContent.asenevtsi.personalizedVersion')}
                <a href="./assets/games/Asenevtsi-diff-build/index.html" style={{ color: '#FFA500' }}>
                  {t('here')}
                </a>
                 {t('gamesContent.asenevtsi.personalizationVersionExpl')}
              </p>
              <p>{t('gamesContent.asenevtsi.tracking')}</p>
              <p>
                {t('gamesContent.asenevtsi.evaluationSurvey')}
                <a href="https://forms.gle/gCS3kkZ1D1QG2udJA" style={{ color: '#FFA500' }}>
                  {t('gamesContent.asenevtsi.survey1')}
                </a>, 
                {t('gamesContent.asenevtsi.evaluationSurvey2')}<br />
                {t('gamesContent.asenevtsi.comparisonSurvey')}
                <a href="https://forms.gle/Z8FxKFXk1iFHFc8S9" style={{ color: '#FFA500' }}>
                  {t('gamesContent.asenevtsi.survey2')}
                </a>, 
                {t('gamesContent.asenevtsi.comparisonSurvey2')}<br />
                {t('gamesContent.asenevtsi.thanks')}
              </p>
            </div>
          </div>
          
          <hr />
          
          <h3>{t('gamesContent.valchanVoyvoda.title')}</h3>
          <a href="https://apogee.online/assets/games/ValchanVoyvoda_08/">
            <img 
              src="./assets/img/vv_game.jpg" 
              height={250} 
              width={500} 
              style={{
                 /* border: '2px solid', */ 
                margin: '2px 10px',
                float: 'left'
              }} 
              title="Наследството на Вълчан Войвода" 
              alt="Наследството на Вълчан Войвода" 
            />
          </a>
          <div className="general-subhead">
            <p>
              {t('gamesContent.valchanVoyvoda.description1')}  {' '}
              <a href="https://www.nasledstvo.bg/" style={{ color: '#FFA500' }}>
                {t('gamesContent.valchanVoyvoda.description2')} 
              </a> 
              {t('gamesContent.valchanVoyvoda.description3')} 
              <br />
              {t('gamesContent.valchanVoyvoda.rooms')} 
              <br />
              {t('gamesContent.valchanVoyvoda.playHere1')} {' '}
              <a href="https://apogee.online/assets/games/ValchanVoyvoda_08/" style={{ color: '#FFA500' }}>
                {t('here')}
              </a>{' '}
              {t('gamesContent.valchanVoyvoda.playHere2')}
            </p>
          </div>
          
          <hr />
          
          <div style={{ textAlign: 'center' }}>
            {t('gamesContent.footer.goodLuck')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesContent;