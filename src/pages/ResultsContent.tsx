import React from 'react';
import { useTranslation } from 'react-i18next';

const ResultsContent: React.FC = () => {
    const { t, i18n } = useTranslation();

  return (
    	<section id="content">
        <div className="container">
            <div className="row " id="publications">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.journal_publications')}</h2>
                    <ol>
						<li>{t('resultsContent.to_appear')}</li>

                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.conference_publications')}</h2>
                    <ol>
									<li>Bontchev, B., Terzieva, V., Vassileva, D. (2025) <a href="./pdf/motivate/abstracts/TheEye-tracking-basedAdaptationForPersonalizedGame-basedLearningWithinIntelligentEducationalEnvironments.pdf"  target="_blank">The Eye-tracking-based Adaptation for Personalized Game-based Learning within Intelligent Educational Environments</a>, Proc. of 51st Int. Conf. “Applications of Mathematics in Engineering and Economics” (AMEE’2025), Sozopol, Bulgaria, June 7-13, 2025, to appear in: AIP Conference Proceedings, ISSN: 0094243X, 15517616, (SJR=0.153/2024).</li>
									<li>Bontchev, B., Vassileva, D., Avramov, V., Manchev, D. (2025) <a href="https://doi.org/10.1007/978-3-032-10731-2_21"  target="_blank">Towards Educational Video Games with Enhanced Virtual Players</a>, Proc. of 20th Iberian Conf. on Information Systems and Technologies (CISTI'2025), June 16-20, 2025, Lisbon, Portugal, https://www.cisti.eu/, Lecture Notes in Networks and Systems, Vol. 1718, Springer, ISSN 2367-3389, 2367-3370, Ed. J. Kacprzyk, Print ISBN 978-3-032-10730-5, Online ISBN 978-3-032-10731-2, 2026, pp. 232–244. https://doi.org/10.1007/978-3-032-10731-2_21 (SJR=0.166/Q4(Comp. Networks & Comm./2024)).</li>
									<li>Terzieva, V., Paunova-Hubenova, E., Bontchev, B.  (2025) <a href="https://doi.org/10.1007/978-3-032-15743-0_19"  target="_blank">Personalization of Learning Resources for STEM Education</a>, Proc. of 15th Int. Conf. on Methodologies and Intelligent Systems for Technology Enhanced Learning (MIS4TEL'25), Workshop on Interactive Environments and Emerging Technologies for eLearning (IEETeL), Lille, France, June 25-27, 2025, https://mis4tel-conference.net/tracks/workshops/ieetel.  In: Durães, D., Caron, AC., Karkalas, S., Nakayama, M., Lancia, L., Kubincová, Z. (eds) Methodologies and Intelligent Systems for Technology Enhanced Learning, Workshops - 15th International Conference MIS4TEL 2025. Lecture Notes in Networks and Systems, vol 1799, Springer, ISSN:2367-3389 (print), 2367-3370 (online), Ed. J. Kacprzyk, 2026, https://doi.org/10.1007/978-3-032-15743-0_19, pp. 222-233 SJR=0.166/Q4(Comp. Networks & Comm./2024).</li>
									<li>Ivanov, S., Nikolova, N., Yordanov, B., Bontchev, B. (2025) <a href="https://ieeexplore.ieee.org/document/11233282"  target="_blank">Key Characteristics of Video Games for STEM Education - a Literature Review</a>, Proc. Of International Conference on Cybersecurity and AI-Based Systems (Cyber-AI 2025), IEEE, 1–4 September 2025, Varna, Bulgaria, IEEEXplore - DBLP, pp. 248-255, doi: 10.1109/Cyber-AI66431.2025.11233282, https://ieeexplore.ieee.org/document/11233282.</li>
									<li>Bontchev, B., Tsolova, S., Vassileva, D. (2025) <a href="https://ieeexplore.ieee.org/document/11214670"  target="_blank">A Serious Game for Teaching Entrepreneurship and Strategic Management</a>, Proc. of 20th Jubilee Conf. on Computer Science and Intelligence Systems-FedCSIS 2025, https://2025.fedcsis.org/, IEEE #66292; Krakow, Poland, 14-17 September, 2025, ISSN: 2300-5963, Annals of Computer Science and Information Systems (ACSIS), Vol. 43, https://annals-csis.org/Volume_43/,  https://ieeexplore.ieee.org/document/11214670, pp. 489–497, DOI: 10.15439/2025F6951.</li>
									<li>Bontchev, B., Terzieva, V., Paunova, E., Dankov, Y., Vassileva, D. (2025) <a href="./pdf/motivate/abstracts/TechnologicalApproachesForAdaptationAndPersonalizationInEducationalVideoGames.pdf"  target="_blank">Technological approaches for adaptation and personalization in educational video games</a>, Proc. of 28th International Conference on Interactive Collaborative Learning (ICL‘2025), 01-04 Oct 2025 Budapest, Hungary.</li>
									<li>Dankov, Y., Bontchev, B., Terzieva, V., Dimov, A. (2025) <a href="./pdf/motivate/abstracts/PlatformsAndToolsForEducationalVideoGames.pdf"  target="_blank">Platforms and tools for creation of educational video games – a literature review</a>, Proc. of 28th International Conference on Interactive Collaborative Learning (ICL‘2025), 01-04 Oct 2025 Budapest, Hungary.</li>
									<li>V. Terzieva, B. Bontchev, Y. Dankov and A. Dimov (2025) <a href="https://ieeexplore.ieee.org/document/11300509"  target="_blank">Evaluation of Video Games for STEM Education</a>, 2025 International Conference on Big Data, Knowledge and Control Systems Engineering (BdKCSE), Bankya, Bulgaria, 2025, IEEEXplore - DBLP, pp. 1-6, doi: 10.1109/BdKCSE67969.2025.11300509.</li>
                    </ol>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.theses')}</h2>
                    <ol>
                        <li>{t('resultsContent.to_appear')}</li>

                    </ol>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.dissertations')}</h2>
                    <ol>
                        <li>{t('resultsContent.to_appear')}</li>

                    </ol>
                </div>
            </div>

            <div className="row " id="presentations">
                <div className="col-lg-12 col-md-12" >
                    <h2 >{t('resultsContent.presentations')}</h2>
                    <ul>
						 <li><a href="./presentations/motivate/A_Serious_Game_for_Teaching_Entrepreneurship_FedCSIS_20250914-long.pptx" target="_blank">"A Serious Game for Teaching Entrepreneurship and Strategic Management"</a>, FedCSIS 20th Conf. on CS and Intelligence Systems, Krakow, Poland, September 14, 2025</li>
						 <li><a href="./presentations/motivate/Evaluation of Video Games for STEM Education__BdKCSE19.11.25.pptx" target="_blank">"Evaluation of Video Games for STEM Education"</a>, 9th IEEE “Big Data, Knowledge and Control Systems Engineering” Conference BdKCSE’2025, Bankya, Bulgaria, 06–07 November 2025</li>
						 <li><a href="./presentations/motivate/Eye-tracking-based adaptation  20250602.pptx" target="_blank">"Eye-tracking-based adaptation for personalized game-based learning within intelligent educational environments"</a>, AMEE’2025, Sozopol, Bulgaria, June 7-13, 2025 </li>
						 <li><a href="./presentations/motivate/Key Characteristics of Educational Video Games for STEM Education CYBER-AI'25.pptx" target="_blank">"Key Characteristics of Educational Video Games for STEM Education — A Literature Review"</a>, Cyber-AI’2025, Varna, Bulgaria, September 1-4, 2025 </li>
						 <li><a href="./presentations/motivate/Personalization of Learning Resources for STEM Education_IEETeL'25.pptx" target="_blank">"Personalization of Learning Resources for STEM Education"</a>, IEETEL, Lille, France, June 25-27, 2025 </li>
						 <li><a href="./presentations/motivate/Personalized Educational Maze Game – A Case Study Terzieva_IEETeL'25 pptx.pdf" target="_blank">"Personalized Educational Maze Game – A Case Study"</a>, 15th International Conference on MIS4TEL, Lille, France, June 25-27, 2025 </li>
						 <li><a href="./presentations/motivate/Platforms and Tools ICL 20250925.pptx" target="_blank">"Platforms and Tools for Educational Video Games – А Literature Review"</a>, 28th Int. Conf. on Interactive Collaborative Learning, Budapest, Hungary, October 01-03, 2025 </li>
						 <li><a href="./presentations/motivate/Technological Approaches for Adaptation and Personalization in Educational.pptx" target="_blank">"Technological Approaches for Adaptation and Personalization in Educational Video Games"</a>, 28th Int. Conf. on Interactive Collaborative Learning, Budapest, Hungary, October 01-03, 2025 </li>
						 <li><a href="./presentations/motivate/Towards Educational Video Games with Enhanced Virtual Players CISTI 20250618.pptx" target="_blank">"Towards Educational Video Games with Enhanced Virtual Players"</a>, CISTI’2025, Lisbon, Portugal, June 16-19, 2025</li>
						 <li><a href="./presentations/motivate/Enhanced Video Games for STEM Education.pptx" target="_blank">"Enhanced Video Games for STEM Education"</a>, 7th Int. Scientific Conf. "Innovative STEM Education“, Veliko Tarnovo, Bulgaria, October 06, 2025</li>
                    </ul>
                </div>
            </div>

             <div className="row" id="video">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.videos')}</h2>
                    <ol>
                        <li>{t('resultsContent.to_appear')}</li>

                    </ol>
                </div>
            </div>

            <div className="row" id="results">
                <div className="col-lg-12 col-md-12">
                    { i18n.language === 'bg' ? 
                    (
                        <>
                    <h2>{t('resultsContent.public_results')}</h2>
                    <p><b>Публични резултати, получени по Първи етап на проекта (Декември 2017 - Май 2019).</b></p>
                    <em><p>Легенда</p>
                    <small>Тип: Д - Доклад, П - Публикация, С - Събитие, ДР - Друго, СС - Софтуерна система</small><br/>
                    <small>Достъп: П – публичен, В – вътрешен, О – ограничен до заинтересованите лица</small><br/></em>

                    <table className="tg">
                      <tr>
                        <th className="tg-ai0l">Резултат</th>
                        <th className="tg-ai0l">РП</th>
                        <th className="tg-ai0l">Месец</th>
                        <th className="tg-ai0l">Тип</th>
                        <th className="tg-ai0l">Достъп</th>
                        <th className="tg-ai0l">Брой</th>
                      </tr>
                      <tr>
                        <td className="tg-us36"><a href="./pdf/APOGEE-D1.1 version1.0.pdf" target="_blank"> Сравнителни анализи в областите на адаптивни видеоигри, ориентирани към играча, <br/>интелигентни агенти за образователни цели, платформи за изграждане на игри, и <br/>методи и техники за обучение, базирано на игри </a></td>
                        <td className="tg-c3ow">РП1</td>
                        <td className="tg-c3ow">04</td>
                        <td className="tg-c3ow">Д</td>
                        <td className="tg-c3ow">П</td>
                        <td className="tg-c3ow">1</td>
                      </tr>
                      <tr>
                        <td className="tg-us36"><a href="./pdf/APOGEE-D1.2 version1.0.pdf" target="_blank"> Анализ на потребностите на целевите потребители на образователни видеоигри</a></td>
                        <td className="tg-c3ow">РП1</td>
                        <td className="tg-c3ow">06</td>
                        <td className="tg-c3ow">Д</td>
                        <td className="tg-c3ow">П</td>
                        <td className="tg-c3ow">1</td>
                      </tr>
                      <tr>
                        <td className="tg-us36"><a href="./pdf/APOGEE-D1.3 version1.0.pdf" target="_blank"> Анализ на нуждите на целевите потребители на платформи за изграждане на образователни<br/>видеоигри</a></td>
                        <td className="tg-c3ow">РП1</td>
                        <td className="tg-c3ow">08</td>
                        <td className="tg-c3ow">Д</td>
                        <td className="tg-c3ow">П</td>
                        <td className="tg-c3ow">1</td>
                      </tr>
                      <tr>
                        <td className="tg-us36"><a href="./pdf/APOGEE-D2.1 version1.0.pdf" target="_blank"> Декларативен модел на образователни игри-лабиринти със семантично структуриране на игрово и<br/>учебно съдържание</a></td>
                        <td className="tg-c3ow">РП2</td>
                        <td className="tg-c3ow">15</td>
                        <td className="tg-c3ow">Д</td>
                        <td className="tg-c3ow">П</td>
                        <td className="tg-c3ow">1</td>
                      </tr>
                      <tr>
                        <td className="tg-us36"><a href="./pdf/APOGEE-D2.2 version1.0.pdf" target="_blank"> Модел на игрови процес и взаимодействие на играчите във видеоигри за образование</a></td>
                        <td className="tg-c3ow">РП2</td>
                        <td className="tg-c3ow">16</td>
                        <td className="tg-c3ow">Д</td>
                        <td className="tg-c3ow">П</td>
                        <td className="tg-c3ow">1</td>
                      </tr>
                      <tr>
                        <td className="tg-us36"><a href="./pdf/APOGEE-D2.3 version1.0.pdf" target="_blank"> Проактивни сценарии за игрово обучение и дидактически задачи</a></td>
                        <td className="tg-c3ow">РП2</td>
                        <td className="tg-c3ow">16</td>
                        <td className="tg-c3ow">Д</td>
                        <td className="tg-c3ow">П</td>
                        <td className="tg-c3ow">1</td>
                      </tr>
                      <tr>
                        <td className="tg-us36">Подробен план за разпространение на резултатите</td>
                        <td className="tg-c3ow">РП7</td>
                        <td className="tg-c3ow">03</td>
                        <td className="tg-c3ow">Д</td>
                        <td className="tg-c3ow">О</td>
                        <td className="tg-c3ow">1</td>
                      </tr>
                      <tr>
                        <td className="tg-us36">Уеб сайт на проекта, лого и брошура (на <a href="pdf/APOGEE-leaflet-EN.pdf" target="_blank">англ.</a>  и <a href="pdf/APOGEE-leaflet-BG.pdf" target="_blank">бълг.</a> език)</td>
                        <td className="tg-c3ow">РП7</td>
                        <td className="tg-c3ow">06</td>
                        <td className="tg-c3ow">ДР</td>
                        <td className="tg-c3ow">П</td>
                        <td className="tg-c3ow">1/1/1</td>
                      </tr>
                      <tr>
                        <td className="tg-us36">Подробен план за управление на проекта</td>
                        <td className="tg-c3ow">РП8</td>
                        <td className="tg-c3ow">01</td>
                        <td className="tg-c3ow">Д</td>
                        <td className="tg-c3ow">В</td>
                        <td className="tg-c3ow">1</td>
                      </tr>
                    </table>
                    </>)
                    : 
                    (<>
                        <h2 id="results">PUBLIC RESULTS</h2>
                        <p><b>Public results (in Bulgarian) received under the First stage of the project (December 2017 - May 2019).</b></p>
                        <em><p>Legend</p>
                        <small>Type: R = Report, A = Publication, E = Events, O = Other, S = Software application</small><br/>
                        <small>Access: P – Public, I – Internal, L – Limited to the project stakeholders</small><br/></em>
                        <table className="tg">
                            <tr>
                              <th className="tg-ai0l">Result</th>
                              <th className="tg-ai0l">WP</th>
                              <th className="tg-ai0l">Month</th>
                              <th className="tg-ai0l">Type</th>
                              <th className="tg-ai0l">Access</th>
                              <th className="tg-ai0l">Qty</th>
                            </tr>
                            <tr>
                              <td className="tg-us36"><a href="./pdf/APOGEE-D1.1 version1.0.pdf" target="_blank"> Comparative analyses of SOTA in adaptive player-centric video games<br/> with intelligent agents for education purposes, game construction platforms, <br/>and methods and techniques of gaming based learning</a></td>
                              <td className="tg-c3ow">WP1</td>
                              <td className="tg-c3ow">04</td>
                              <td className="tg-c3ow">R</td>
                              <td className="tg-c3ow">P</td>
                              <td className="tg-c3ow">1</td>
                            </tr>
                            <tr>
                              <td className="tg-us36"><a href="./pdf/APOGEE-D1.2 version1.0.pdf" target="_blank"> Analysis of needs of target users of educational video games</a></td>
                              <td className="tg-c3ow">WP1</td>
                              <td className="tg-c3ow">06</td>
                              <td className="tg-c3ow">R</td>
                              <td className="tg-c3ow">P</td>
                              <td className="tg-c3ow">1</td>
                            </tr>
                            <tr>
                              <td className="tg-us36"><a href="./pdf/APOGEE-D1.3 version1.0.pdf" target="_blank"> Analysis of needs of target users of platforms for construction<br/> of educational video games</a></td>
                              <td className="tg-c3ow">WP1</td>
                              <td className="tg-c3ow">08</td>
                              <td className="tg-c3ow">R</td>
                              <td className="tg-c3ow">P</td>
                              <td className="tg-c3ow">1</td>
                            </tr>
                            <tr>
                              <td className="tg-us36"><a href="./pdf/APOGEE-D2.1 version1.0.pdf" target="_blank"> Declarative model of educational maze games with semantic <br/>structuring of game and didactic content</a></td>
                              <td className="tg-c3ow">WP2</td>
                              <td className="tg-c3ow">15</td>
                              <td className="tg-c3ow">R</td>
                              <td className="tg-c3ow">P</td>
                              <td className="tg-c3ow">1</td>
                            </tr>
                            <tr>
                              <td className="tg-us36"><a href="./pdf/APOGEE-D2.2 version1.0.pdf" target="_blank"> Model of gameplay and players interactions in video games for education</a></td>
                              <td className="tg-c3ow">WP2</td>
                              <td className="tg-c3ow">16</td>
                              <td className="tg-c3ow">R</td>
                              <td className="tg-c3ow">P</td>
                              <td className="tg-c3ow">1</td>
                            </tr>
                            <tr>
                              <td className="tg-us36"><a href="./pdf/APOGEE-D2.3 version1.0.pdf" target="_blank"> Proactive GBL scenarios and game didactic tasks</a></td>
                              <td className="tg-c3ow">WP2</td>
                              <td className="tg-c3ow">16</td>
                              <td className="tg-c3ow">R</td>
                              <td className="tg-c3ow">P</td>
                              <td className="tg-c3ow">1</td>
                            </tr>
                            <tr>
                              <td className="tg-us36">Detailed Dissemination Plan (DDP)</td>
                              <td className="tg-c3ow">WP7</td>
                              <td className="tg-c3ow">03</td>
                              <td className="tg-c3ow">R</td>
                              <td className="tg-c3ow">L</td>
                              <td className="tg-c3ow">1</td>
                            </tr>
                            <tr>
                              <td className="tg-us36">Project Web site (with links to any e-resource incl. archives of reports and results), logo and leaflet - in <a href="pdf/APOGEE-leaflet-EN.pdf" target="_blank">English</a>  and <a href="pdf/APOGEE-leaflet-BG.pdf" target="_blank">Bulgarian</a> language.</td>
                              <td className="tg-c3ow">WP7</td>
                              <td className="tg-c3ow">06</td>
                              <td className="tg-c3ow">O</td>
                              <td className="tg-c3ow">P</td>
                              <td className="tg-c3ow">1/1/1</td>
                            </tr>
                            <tr>
                              <td className="tg-us36">Detailed project management plan (PMP)</td>
                              <td className="tg-c3ow">WP8</td>
                              <td className="tg-c3ow">01</td>
                              <td className="tg-c3ow">R</td>
                              <td className="tg-c3ow">I</td>
                              <td className="tg-c3ow">1</td>
                            </tr>
                          </table>
                    </>
                    )
                }
                </div>
            </div>
        </div>
    </section>

  );
};

export default ResultsContent;
