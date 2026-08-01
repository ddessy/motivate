import React from 'react';
import { useTranslation } from 'react-i18next';

interface Step { title: string; text: string; }
interface Control { keys: string[]; action: string; }
interface MetaItem { label: string; value: string; }

interface GameDef {
  id: number;
  iconClass: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  goalKey: string;
  scoringKey: string;
  metaKey: string;
  stepsKey: string;
  controlsKey: string;
  tipKey: string;
  gameUrl: string;
  screenshots: string[]; // paths to screenshots - fill in with actual paths
}

const gameDefs: GameDef[] = [
  {
    id: 53,
    iconClass: 'fa fa-crosshairs',
    titleKey: 'studentGamesContent.title53',
    subtitleKey: 'studentGamesContent.subtitle53',
    descriptionKey: 'studentGamesContent.desc53',
    goalKey: 'studentGamesContent.goal53',
    scoringKey: 'studentGamesContent.scoring53',
    metaKey: 'studentGamesContent.meta53',
    stepsKey: 'studentGamesContent.steps53',
    controlsKey: 'studentGamesContent.controls53',
    tipKey: 'studentGamesContent.tip53',
    gameUrl: '/studentgames/shootergame/',
    screenshots: [
      './assets/img/studentgames/game53_1.jpg',
      './assets/img/studentgames/game53_2.jpg',
      './assets/img/studentgames/game53_3.jpg',
    ],
  },
  {
    id: 54,
    iconClass: 'fa fa-cubes',
    titleKey: 'studentGamesContent.title54',
    subtitleKey: 'studentGamesContent.subtitle54',
    descriptionKey: 'studentGamesContent.desc54',
    goalKey: 'studentGamesContent.goal54',
    scoringKey: 'studentGamesContent.scoring54',
    metaKey: 'studentGamesContent.meta54',
    stepsKey: 'studentGamesContent.steps54',
    controlsKey: 'studentGamesContent.controls54',
    tipKey: 'studentGamesContent.tip54',
    gameUrl: '/studentgames/solidsort/',
    screenshots: [
      './assets/img/studentgames/game54_1.jpg',
      './assets/img/studentgames/game54_2.jpg',
      './assets/img/studentgames/game54_3.jpg',
    ],
  },
  {
    id: 55,
    iconClass: 'fa fa-th',
    titleKey: 'studentGamesContent.title55',
    subtitleKey: 'studentGamesContent.subtitle55',
    descriptionKey: 'studentGamesContent.desc55',
    goalKey: 'studentGamesContent.goal55',
    scoringKey: 'studentGamesContent.scoring55',
    metaKey: 'studentGamesContent.meta55',
    stepsKey: 'studentGamesContent.steps55',
    controlsKey: 'studentGamesContent.controls55',
    tipKey: 'studentGamesContent.tip55',
    gameUrl: '/studentgames/puzzle/',
    screenshots: [
      './assets/img/studentgames/game55_1.jpg',
      './assets/img/studentgames/game55_2.jpg',
      './assets/img/studentgames/game55_3.jpg',
    ],
  },
  {
    id: 56,
    iconClass: 'fa fa-tag',
    titleKey: 'studentGamesContent.title56',
    subtitleKey: 'studentGamesContent.subtitle56',
    descriptionKey: 'studentGamesContent.desc56',
    goalKey: 'studentGamesContent.goal56',
    scoringKey: 'studentGamesContent.scoring56',
    metaKey: 'studentGamesContent.meta56',
    stepsKey: 'studentGamesContent.steps56',
    controlsKey: 'studentGamesContent.controls56',
    tipKey: 'studentGamesContent.tip56',
    gameUrl: '/studentgames/annotationgame/',
    screenshots: [
      './assets/img/studentgames/game56_1.jpg',
      './assets/img/studentgames/game56_2.jpg',
      './assets/img/studentgames/game56_3.jpg',
    ],
  },
];

const StudentGamesContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">

            <h2 id="student-games">
              <strong>{t('studentGamesContent.title')}</strong>
            </h2>
            <p>{t('studentGamesContent.intro')}</p>

            {/* ── Quick navigation ── */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '16px 0 24px' }}>
              {gameDefs.map((game) => (
                <a
                  key={game.id}
                  href={`#game-${game.id}`}
                  style={{
                    padding: '6px 16px',
                    borderRadius: 3,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: 'none',
                    background: '#1F5794',
                    color: '#fff',
                    border: '1px solid #1F5794',
                  }}
                >
                  {t(game.titleKey)}
                </a>
              ))}
            </div>

            <hr />

            {gameDefs.map((game, idx) => {
              const meta     = t(game.metaKey,     { returnObjects: true }) as MetaItem[];
              const steps    = t(game.stepsKey,    { returnObjects: true }) as Step[];
              const controls = t(game.controlsKey, { returnObjects: true }) as Control[];

              return (
                <div key={game.id} id={`game-${game.id}`}>

                  {/* ── Header ── */}
                  <div>
                    <p style={{ color: '#FB9351', fontWeight: 700, marginBottom: 2, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Тема № {game.id}
                    </p>
                    <h3 style={{ marginTop: 0 }}>
                      {t(game.titleKey)}
                    </h3>
                    <p className="text-muted" style={{ marginTop: -6 }}>{t(game.subtitleKey)}</p>
                  </div>

                  {/* ── Screenshots ── */}
                  <div className="row" style={{ marginBottom: 16 }}>
                    {game.screenshots.map((src, i) => (
                      <div key={i} className="col-lg-4 col-md-4 col-sm-4">
                        <img
                          src={src}
                          alt={`Screenshot ${i + 1}`}
                          style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 4, border: '1px solid #ddd' }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* ── Description (no grey background) ── */}
                  <p>{t(game.descriptionKey)}</p>
                  <p><strong>{t('studentGamesContent.labelGoal')}</strong> {t(game.goalKey)}</p>
                  <p><strong>{t('studentGamesContent.labelScoring')}</strong> {t(game.scoringKey)}</p>

                  {/* ── Meta row ── */}
                  <div className="row" style={{ marginTop: 10, marginBottom: 10, paddingTop: 10, borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
                    {Array.isArray(meta) && meta.map((m) => (
                      <div key={m.label} className="col-lg-3 col-md-3 col-sm-6" style={{ marginBottom: 8 }}>
                        <small style={{ textTransform: 'uppercase', color: '#aaa', fontSize: 10, fontWeight: 700 }}>{m.label}</small><br />
                        <strong style={{ color: '#1F5794', fontSize: 13 }}>{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* ── Play button ── */}
                  <p>
                    <a href={game.gameUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-play"></i>&nbsp;{t('studentGamesContent.playButton')}
                    </a>
                  </p>

                  {/* ── Steps ── */}
                  <h4 style={{ color: '#FB9351', marginTop: 20, marginBottom: 10 }}>
                    <i className="fa fa-list-ol"></i>&nbsp;{t('studentGamesContent.labelSteps')}
                  </h4>
                  <div className="row">
                    {Array.isArray(steps) && steps.map((step, i) => (
                      <div key={i} className="col-lg-6 col-md-6" style={{ marginBottom: 12 }}>
                        <div className="media">
                          <div className="pull-left">
                            <span style={{
                              display: 'inline-block', width: 26, height: 26,
                              borderRadius: '50%', background: '#1F5794', color: '#fff',
                              textAlign: 'center', lineHeight: '26px', fontSize: 12,
                              fontWeight: 700, marginRight: 8, marginTop: 2,
                            }}>{i + 1}</span>
                          </div>
                          <div className="media-body">
                            <strong>{step.title}</strong>
                            <p style={{ fontSize: 13, color: '#666', margin: 0 }}>{step.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ── Controls ── */}
                  <h4 style={{ color: '#FB9351', marginTop: 16, marginBottom: 10 }}>
                    <i className="fa fa-keyboard-o"></i>&nbsp;{t('studentGamesContent.labelControls')}
                  </h4>
                  <div style={{ border: '1px solid #ddd', borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
                    {Array.isArray(controls) && controls.map((ctrl, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 16px',
                        borderBottom: i < controls.length - 1 ? '1px solid #eee' : 'none',
                        background: i % 2 === 0 ? '#fff' : '#fafafa',
                      }}>
                        <div style={{ width: '40%', display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                          {ctrl.keys.map((k) => (
                            <kbd key={k} style={{
                              background: '#f5f5f5',
                              border: '1px solid #ccc',
                              borderBottomWidth: 2,
                              borderRadius: 4,
                              padding: '2px 8px',
                              fontSize: 12,
                              fontFamily: 'monospace',
                              color: '#333',
                              whiteSpace: 'nowrap',
                            }}>{k}</kbd>
                          ))}
                        </div>
                        <div style={{ fontSize: 13, color: '#333' }}>{ctrl.action}</div>
                      </div>
                    ))}
                  </div>

                  {/* ── Tip ── */}
                  <div className="alert alert-warning" style={{ fontSize: 13 }}>
                    <i className="fa fa-lightbulb-o"></i>&nbsp;{t(game.tipKey)}
                  </div>

                  {idx < gameDefs.length - 1 && <hr />}
                </div>
              );
            })}

            <hr />

            {/* ── Footer ── */}
            <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 10 }}>
              <strong>{t('gamesContent.footer.goodLuck')}</strong>
            </div>
            <div style={{ textAlign: 'center', color: '#888', fontSize: 13 }}>
              <i className="fa fa-wrench"></i>&nbsp;{t('studentGamesContent.integratedBy')}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentGamesContent;