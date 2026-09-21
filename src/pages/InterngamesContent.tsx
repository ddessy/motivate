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
  screenshots: string[];
}

const gameDefs: GameDef[] = [
  {
    id: 57,
    iconClass: 'fa fa-user-md',
    titleKey: 'internGamesContent.title57',
    subtitleKey: 'internGamesContent.subtitle57',
    descriptionKey: 'internGamesContent.desc57',
    goalKey: 'internGamesContent.goal57',
    scoringKey: 'internGamesContent.scoring57',
    metaKey: 'internGamesContent.meta57',
    stepsKey: 'internGamesContent.steps57',
    controlsKey: 'internGamesContent.controls57',
    tipKey: 'internGamesContent.tip57',
    gameUrl: '/studentgames/doktorznanie/',
    screenshots: [
      './assets/img/interngames/game57_1.jpg',
      './assets/img/interngames/game57_2.jpg',
      './assets/img/interngames/game57_3.jpg',
    ],
  },
  {
    id: 58,
    iconClass: 'fa fa-shield',
    titleKey: 'internGamesContent.title58',
    subtitleKey: 'internGamesContent.subtitle58',
    descriptionKey: 'internGamesContent.desc58',
    goalKey: 'internGamesContent.goal58',
    scoringKey: 'internGamesContent.scoring58',
    metaKey: 'internGamesContent.meta58',
    stepsKey: 'internGamesContent.steps58',
    controlsKey: 'internGamesContent.controls58',
    tipKey: 'internGamesContent.tip58',
    gameUrl: '/studentgames/imunenzashtitnik/',
    screenshots: [
      './assets/img/interngames/game58_1.jpg',
      './assets/img/interngames/game58_2.jpg',
      './assets/img/interngames/game58_3.jpg',
    ],
  },
];

const InternGamesContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">

            <h2 id="student-games">
              <strong>{t('internGamesContent.title')}</strong>
            </h2>
            <p>{t('internGamesContent.intro')}</p>

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

                  {/* ── Description ── */}
                  <p>{t(game.descriptionKey)}</p>
                  <p><strong>{t('internGamesContent.labelGoal')}</strong> {t(game.goalKey)}</p>
                  <p><strong>{t('internGamesContent.labelScoring')}</strong> {t(game.scoringKey)}</p>

                  {/* ── Meta 2×2 ── */}
                  <div style={{ marginTop: 10, marginBottom: 10, paddingTop: 10, borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', paddingBottom: 10 }}>
                    <div className="row" style={{ marginBottom: 8 }}>
                      {Array.isArray(meta) && meta.slice(0, 2).map((m) => (
                        <div key={m.label} className="col-lg-6 col-md-6 col-sm-6" style={{ marginBottom: 4 }}>
                          <small style={{ textTransform: 'uppercase', color: '#aaa', fontSize: 10, fontWeight: 700 }}>{m.label}</small><br />
                          <strong style={{ color: '#1F5794', fontSize: 13 }}>{m.value}</strong>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      {Array.isArray(meta) && meta.slice(2, 4).map((m) => (
                        <div key={m.label} className="col-lg-6 col-md-6 col-sm-6">
                          <small style={{ textTransform: 'uppercase', color: '#aaa', fontSize: 10, fontWeight: 700 }}>{m.label}</small><br />
                          <strong style={{ color: '#1F5794', fontSize: 13 }}>{m.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Play button ── */}
                  <p>
                    <a href={game.gameUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-play"></i>&nbsp;{t('internGamesContent.playButton')}
                    </a>
                  </p>

                  {/* ── Steps ── */}
                  <h4 style={{ color: '#FB9351', marginTop: 20, marginBottom: 10 }}>
                    <i className="fa fa-list-ol"></i>&nbsp;{t('internGamesContent.labelSteps')}
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
                    <i className="fa fa-keyboard-o"></i>&nbsp;{t('internGamesContent.labelControls')}
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
              <i className="fa fa-wrench"></i>&nbsp;{t('internGamesContent.integratedBy')}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InternGamesContent;