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
						<li>Panayotova, R., Bontchev, B. (2026) <a href="https://journals.azbuki.bg/mathinfo/adapting-the-behavior-of-virtual-characters-in-educational-video-games/view" target="_blank">Adapting the Behavior of Virtual Characters within Educational Video Games</a>, Mathematics and Informatics, ISSN:1310-2230, eISSN:1314-8532,  Vol. 69, No. 4, 2026, https://doi.org/10.53656/math2026-4-6-abv, pp. 454–472, 2026 (IF=0.3/Q4-Education & Educ. Res./2025) </li>
                        	<li>...</li>

                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.conference_publications')}</h2>
                    <ol>
									<li>Ivanov H., Bontchev, B. (2026)  <a href="https://doi.org/10.1007/978-3-032-32029-2_18" target="_blank">Dynamic Difficulty Adjustment in Educational Video Games</a>. In: Rocha, A., Adeli, H., Moreira, F. (eds) Recent Trends and Challenges in Information Systems and Technologies. WorldCIST 2026. Lecture Notes in Networks and Systems, Vol. 2091, Springer, Cham., ISSN:2367-3370, ISBN: 978-3-032-32028-5, pp. 215–226, https://doi.org/10.1007/978-3-032-32029-2_18, WoS, SJR=0.166/Q4-Comp. Sc./2025</li>
                                    <li>Bontchev, B., Terzieva, V., Vassileva, D. (2025) <a href="https://motivate-bg.online/pdf/motivate/abstracts/TheEye-tracking-basedAdaptationForPersonalizedGame-basedLearningWithinIntelligentEducationalEnvironments.pdf" target="_blank">The Eye-tracking-based Adaptation for Personalized Game-based Learning within Intelligent Educational Environments</a>, Proc. of 51st Int. Conf. “Applications of Mathematics in Engineering and Economics” (AMEE’2025), Sozopol, Bulgaria, June 7-13, 2025, to appear in: AIP Conference Proceedings, ISSN: 0094243X, 15517616, (SJR=0.153/2024).</li>
                                    <li>Bontchev, B., Vassileva, D., Avramov, V., Manchev, D. (2025) <a href="https://doi.org/10.1007/978-3-032-10731-2_21" target="_blank">Towards Educational Video Games with Enhanced Virtual Players</a>, Proc. of 20th Iberian Conf. on Information Systems and Technologies (CISTI'2025), June 16-20, 2025, Lisbon, Portugal, https://www.cisti.eu/, Lecture Notes in Networks and Systems, Vol. 1718, Springer, ISSN 2367-3389, 2367-3370, Ed. J. Kacprzyk, Print ISBN 978-3-032-10730-5, Online ISBN 978-3-032-10731-2, 2026, pp. 232–244. https://doi.org/10.1007/978-3-032-10731-2_21 (SJR=0.166/Q4(Comp. Networks &amp; Comm./2024)).</li>
                                    <li>Terzieva, V., Paunova-Hubenova, E., Bontchev, B.  (2025) <a href="https://doi.org/10.1007/978-3-032-15743-0_19" target="_blank">Personalization of Learning Resources for STEM Education</a>, In: Durães, D., Caron, AC., Karkalas, S., Nakayama, M., Lancia, L., Kubincová, Z. (eds.) Methodologies and Intelligent Systems for Technology Enhanced Learning, Workshops - 15th International Conference. MIS4TEL 2025. LNNS, 1799, Springer, Cham, 2026, ISBN:978-3-032-15742-3 (print) 978-3-032-15743-0 (online), ISSN:2367-3370 e-ISSN 2367-3389,  https://doi.org/10.1007/978-3-032-15743-0_19, pp. 222-233 (SJR=0.166/Q4(Comp. Networks &amp; Comm./2024)).</li>
                                    <li>Terzieva, V. <a href="https://link.springer.com/chapter/10.1007/978-3-032-15743-0_21" target="_blank">Personalized Educational Maze Game – A Case Study</a>. In: Durães, D., Caron, AC., Karkalas, S., Nakayama, M., Lancia, L., Kubincová, Z. (eds.) Methodologies and Intelligent Systems for Technology Enhanced Learning, Workshops - 15th International Conference. MIS4TEL 2025. LNNS, 1799, Springer, Cham, 2026, ISBN:978-3-032-15742-3 (print) 978-3-032-15743-0 (online), ISSN:2367-3370 e-ISSN 2367-3389, DOI:https://doi.org/10.1007/978-3-032-15743-0_21, pp.246-258. https://doi.org/10.1007/978-3-032-15743-0_21 (WoS, SJR=0.166) </li>
                                    <li>Ivanov, S., Nikolova, N., Yordanov, B., Bontchev, B. (2025) <a href="https://ieeexplore.ieee.org/document/11233282" target="_blank">Key Characteristics of Video Games for STEM Education - a Literature Review</a>, Proc. Of International Conference on Cybersecurity and AI-Based Systems (Cyber-AI 2025), IEEE, 1–4 September 2025, Varna, Bulgaria, IEEEXplore - DBLP, pp. 248-255, doi: 10.1109/Cyber-AI66431.2025.11233282, https://ieeexplore.ieee.org/document/11233282 (Scopus).</li>
                                    <li>Bontchev, B., Tsolova, S., Vassileva, D. (2025) <a href="https://ieeexplore.ieee.org/document/11214670" target="_blank">A Serious Game for Teaching Entrepreneurship and Strategic Management</a>, Proc. of 20th Jubilee Conf. on Computer Science and Intelligence Systems-FedCSIS 2025, https://2025.fedcsis.org/, IEEE #66292; Krakow, Poland, 14-17 September, 2025, ISSN: 2300-5963, Annals of Computer Science and Information Systems (ACSIS), Vol. 43, https://annals-csis.org/Volume_43/,  https://ieeexplore.ieee.org/document/11214670, pp. 489–497, DOI: 10.15439/2025F6951 (Scopus).</li>
                                    <li>Bontchev, B., Terzieva, V., Paunova, E., Dankov, Y., Vassileva, D. (2025) <a href="https://motivate-bg.online/pdf/motivate/abstracts/TechnologicalApproachesForAdaptationAndPersonalizationInEducationalVideoGames.pdf" target="_blank">Technological approaches for adaptation and personalization in educational video games</a>, Proc. of 28th International Conference on Interactive Collaborative Learning (ICL‘2025), 01-04 Oct 2025 Budapest, Hungary; In: Auer, M.E., Toth, P. (eds.) Innovation via Collaborative Learning in Engineering Education. ICL 2025, Lecture Notes in Networks and Systems, vol. 1849. Springer, Cham., pp. 3-16. https://doi.org/10.1007/978-3-032-18891-5_1 (WoS, SJR=0.165/Q4(Comp. Networks & Comm./2025)).</li>
                                    <li>Dankov, Y., Bontchev, B., Terzieva, V., Dimov, A. (2025) <a href="https://motivate-bg.online/pdf/motivate/abstracts/PlatformsAndToolsForEducationalVideoGames.pdf" target="_blank">Platforms and tools for creation of educational video games – a literature review</a>, Proc. of 28th International Conference on Interactive Collaborative Learning (ICL‘2025), 01-04 Oct 2025 Budapest, Hungary; In: Auer, M.E., Toth, P. (eds) Innovation via Collaborative Learning in Engineering Education. ICL 2025, Lecture Notes in Networks and Systems, vol. 1849. Springer, Cham., pp. 17-28. https://doi.org/10.1007/978-3-032-18891-5_2 (WoS, SJR=0.165/Q4(Comp. Networks & Comm./2025)).</li><li>Terzieva, V., B. Bontchev, Y. Dankov and A. Dimov (2025) <a href="https://ieeexplore.ieee.org/document/11300509" target="_blank">Evaluation of Video Games for STEM Education</a>, 2025 International Conference on Big Data, Knowledge and Control Systems Engineering (BdKCSE), Bankya, Bulgaria, 2025, IEEEXplore - DBLP, pp. 1-6, doi: 10.1109/BdKCSE67969.2025.11300509 (Scopus).</li>
                    </ol>
                    <hr/>
                    <ol>
                    	In print:
                    	<li>Dankov, A., Bontchev, B., Terzieva, V., Paunova, E., Dimov, A. (2026) Modelling of Educational Role-Playing Games, Proc. of 11th Int. Conf. on Information and Communication Technology for Intelligent Systems (ICTIS’2026), April 9-11, 2026, Bangkok, Thailand, LNNS, Springer, eISSN:2367-3389, ISSN:2367-3370 (in print, to appear November 14, 2026; WoS, SJR=0.165/Q4(Comp. Networks & Comm./2025)</li>
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
                        <li><a href="./presentations/motivate/Eye-tracking-based adaptation  20250602.pptx" target="_blank">"Eye-tracking-based adaptation for personalized game-based learning within intelligent educational environments"</a>, AMEE’2025, Sozopol, Bulgaria, June 7-13, 2025 </li>
                        <li><a href="./presentations/motivate/Towards Educational Video Games with Enhanced Virtual Players CISTI 20250618.pptx" target="_blank">"Towards Educational Video Games with Enhanced Virtual Players"</a>, CISTI’2025, Lisbon, Portugal, June 16-19, 2025</li>
                        <li><a href="./presentations/motivate/Personalization of Learning Resources for STEM Education_IEETeL'25.pptx" target="_blank">"Personalization of Learning Resources for STEM Education"</a>, IEETEL, Lille, France, June 25-27, 2025 </li>
                        <li><a href="./presentations/motivate/Personalized Educational Maze Game – A Case Study Terzieva_IEETeL'25 pptx.pdf" target="_blank">"Personalized Educational Maze Game – A Case Study"</a>, 15th International Conference on MIS4TEL, Lille, France, June 25-27, 2025 </li>
                        <li><a href="./presentations/motivate/Key Characteristics of Educational Video Games for STEM Education CYBER-AI'25.pptx" target="_blank">"Key Characteristics of Educational Video Games for STEM Education — A Literature Review"</a>, Cyber-AI’2025, Varna, Bulgaria, September 1-4, 2025 </li>
                        <li><a href="./presentations/motivate/A_Serious_Game_for_Teaching_Entrepreneurship_FedCSIS_20250914-long.pptx" target="_blank">"A Serious Game for Teaching Entrepreneurship and Strategic Management"</a>, FedCSIS 20th Conf. on CS and Intelligence Systems, Krakow, Poland, September 14, 2025</li>
                        <li><a href="./presentations/motivate/Platforms and Tools ICL 20250925.pptx" target="_blank">"Platforms and Tools for Educational Video Games – А Literature Review"</a>, 28th Int. Conf. on Interactive Collaborative Learning, Budapest, Hungary, October 01-03, 2025 </li>
                        <li><a href="./presentations/motivate/Technological Approaches for Adaptation and Personalization in Educational.pptx" target="_blank">"Technological Approaches for Adaptation and Personalization in Educational Video Games"</a>, 28th Int. Conf. on Interactive Collaborative Learning, Budapest, Hungary, October 01-03, 2025 </li>
                        <li><a href="./presentations/motivate/Enhanced Video Games for STEM Education.pptx" target="_blank">"Enhanced Video Games for STEM Education"</a>, 7th Int. Scientific Conf. "Innovative STEM Education“, Veliko Tarnovo, Bulgaria, October 06, 2025</li>
                        <li><a href="./presentations/motivate/Evaluation of Video Games for STEM Education__BdKCSE19.11.25.pptx" target="_blank">"Evaluation of Video Games for STEM Education"</a>, 9th IEEE “Big Data, Knowledge and Control Systems Engineering” Conference BdKCSE’2025, Bankya, Bulgaria, 06–07 November 2025</li>
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
        </div>
    </section>

  );
};

export default ResultsContent;
