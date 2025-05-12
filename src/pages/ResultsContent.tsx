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
						<li>Terzieva, V., Bontchev, B., Dankov, Y., Paunova-Hubenova, E. <a href="https://doi.org/10.3390/su14116794"  target="_blank">How to Tailor Educational Maze Games: The Student’s Preferences</a>, Sustainability, 2022, 14(11), 6794; https://doi.org/10.3390/su14116794 (WoS IF: 3.251/Q1/2020, SJR=0.66/Q1/2021).</li>
						<li>Bontchev, B., Antonova, A., Terzieva, V., Dankov, A. <a href="https://www.mdpi.com/2071-1050/14/1/7"  target="_blank">“Let Us Save Venice”—An Educational Online Maze Game for Climate Resilience</a>, Sustainability, 2022, 14(1), 7, https://doi.org/10.3390/su14010007 (WoS IF: 3.251/Q1/2020, SJR=0.66/Q1/2021), pp.1-23.</li>
						<li>Dankov, Y., Antonova, A., Terzieva, V,  Bontchev, B. <a href="http://ijpam.eu/en/index.php/ijdea/article/view/5956/252"  target="_blank">Applying user-centered design for a climate resilience video game</a>, International Journal of Differential Equations and Applications, Vol. 20, No. 2 (2021), ISSN (Print): 1311-2872; ISSN (Online): 1314-6084;  (SJR=0.1/Q4/2020), pp. 147-156.</li>
						
						<li>Bontchev, B., Terzieva, V., Paunova-Hubenova, E. (2020) <a href="https://www.emerald.com/insight/content/doi/10.1108/ITSE-05-2020-0069/full/html"  target="_blank"> Personalization of Serious Games for Learning</a>, Interactive Technology and Smart Education, Emerald, ISSN: 1741-5659, 18 (1), pp. 50-68, DOI: https://doi.org/10.1108/ITSE-05-2020-0069 (IF=1.982/2020; SJR: 0.51, Q2/2020).</li>
						<li>Bontchev, B., Naydenov, I., Adamov, I. (2019) <a href="http://spisanie-nauka.bg/arhiv/2-2019.pdf" target="_blank"> A study on methods for adaptation of video games</a>, NAUKA Journal, SAI, ISSN: 2603-3623, Vol. XXIX, No. 2, pp. 62-66 (in Bulgarian). </li>
                        <li>Vassileva, D., Penchev, N. (2019) <a href="https://www.iaras.org/iaras/home/caijels/an-online-metadata-driven-editor-for-rich-maze-video-games-for-education" target="_blank">An Online Metadata-Driven Editor for Rich Maze Video Games for Education</a>, International Journal of Education and Learning Systems, IARAS, ISSN: 2367-8933, Volume 4, 2019, pp.7-13.</li>
                        <li>Antonova, A., Bontchev, B. (2019)  <a href="https://www.iaras.org/iaras/home/caijels/designing-scenarios-for-personalized-learning-enabling-teachers-to-apply-educational-video-games-in-class" target="_blank">Designing Scenarios for Personalized Learning: Enabling Teachers to Apply Educational Video Games in Class</a>, International Journal of Education and Learning Systems, IARAS, ISSN: 2367-8933, Volume 4, 2019, pp.20-26.</li>
						<li>Bontchev, B., Vassileva, D., Aleksieva-Petrova, A., Petrov, M. (2018, August) Playing styles based on experiential learning theory, Computers in Human Behavior, Elsevier, ISSN: 0747-5632, No. 85, pp.319-328, https://doi.org/10.1016/j.chb.2018.04.009 <a href="https://doi.org/10.1016/j.chb.2018.04.009" target="_blank">https://doi.org/10.1016/j.chb.2018.04.009</a> (IF=6.14/2018, SJR=1.711/2018). </li>
                        <li>Bontchev, B., Georgieva, O. (2018, May) Playing style recognition through an adaptive video game, Computers in Human Behavior, Elsevier, ISSN: 0747-5632, Vol. 82, pp.136-147, <a href="https://doi.org/10.1016/j.chb.2017.12.040" target="_blank">https://doi.org/10.1016/j.chb.2017.12.040</a> (IF=6.14/2018, SJR=1.711/2018).</li>
						<li>Bontchev, B., Panayotova, R. (2017) <a href="https://www.researchgate.net/publication/333118847_Serdica_Journal_of_Computing_TOWARDS_AUTOMATIC_GENERATION_OF_SERIOUS_MAZE_GAMES_FOR_EDUCATION" target="_blank"> Towards automatic generation of serious maze games for education</a>, Serdica J. of Computing, ISSN: 1312-6555, Vol. 11, No. 3, pp.249–278. </li>
						
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.conference_publications')}</h2>
                    <ol>
									<li>Paunova-Hubenova, E., Dankov, Y., Terzieva, V., Vassileva, D., Bontchev, B., Antonova, A. (2022) <a href=""  target="_blank">Ready to play – a comparison of four educational maze games</a>, Proc. of NIDS’22, Athens, Greece, 2022, September, Springer, Frontiers in Artificial Intelligence and Applications (FAIA) book series, ISSN (Online) 1535-6698 (in print) (IF=0.484/2021/2022; SJR=0.26, Q4/2021).</li>
									<li>Antonova, A., Bontchev, B., Dankov, Y. (2022) <a href="http://www.compsystech.org/index.php?cmd=dPage&pid=cp"  target="_blank">How University Students in "Informatics and Computer Sciences" would like to Use Video Games for Learning</a>, Proc. of Int. Conf. Computer Systems and Technologies (CompSysTech’22), 2022, June, ACM, Rousse, Bulgaria (<a href="./pdf/best paper award compsystech22.jpg"  target="_blank">best paper award</a>, in print) (SJR=0.23/2021).</li>
									<li>Dankov, Y. (2021) <a href="https://dl.acm.org/doi/10.1145/3494885.3494952"  target="_blank">A Functional Model of a Designer of Educational Maze Game</a>, ACM Int. Conf. Proc. Series, vol: Proc. of ACM 4th Int. Conf. on Computer Science and Software Engineering (CSSE 2021), ACM Digital Library, Singapore, 2021, ISBN:978-1-4503-9067-5, pp. 356-361,  doi:https://dl.acm.org/doi/10.1145/3494885.3494952 (SJR=0.232/2021).</li>
									<li>Naydenov, I., Adamov, I. (2021) <a href="https://ieeexplore.ieee.org/document/9627305"  target="_blank">Clustering of non-annotated data</a>, Proc. of 7th IEEE International Conference “Big Data, Knowledge and Control Systems Engineering” (BdKCSE'2021), pp. 1-6, DOI: https://doi.org/10.1109/BdKCSE53180.2021.9627305.</li>
									<li>Bontchev, B., Naydenov, I., Adamov, I. <a href="https://ieeexplore.ieee.org/document/9639656"  target="_blank">Controlling Adaptation in Affective Serious Games</a>, Int. IEEE Conf. "Automatics and Informatics 2021" (ICAI'21), 30 September-2 October 2021, Varna, Bulgaria, ISBN: 978-1-6654-2661-9, IEEE, 2021, pp. 159-162, (SCOPUS) DOI: https://doi.org/10.1109/.</li>	
									<li>Dankov, Y., Bontchev, B., Antonova, A. <a href="http://doi.org/10.54941/ahfe1001168"  target="_blank">Gaming and Learning Analytics for Educational Video Games</a>, 4th Int. Conf. on Human Systems Engineering and Design: Future Trends and Applications (IHSED 2021), Dubrovnik, Croatia, September 23-25, Advances in Intelligent Systems and Computing, Springer, ISSN: 2194-5357, ISBN: 978-1-7923-8987-0, Vol. 21, 2021, DOI: http://doi.org/10.54941/ahfe1001168 (SJR=0.184/Q3/2019).</li>
									<li>Dankov, Y., Antonova, A., Bontchev, B. <a href="https://link.springer.com/chapter/10.1007/978-3-030-85540-6_37"  target="_blank">Adopting User-Centered Design to Identify Assessment Metrics for Adaptive Video Games for Education</a>, 5th Int. Conf. on Human Interaction and Emerging Technologies (IHIET 2021), Paris, France, August 27-29, Advances in Intelligent Systems and Computing, Springer, ISSN: 2194-5357, ISBN: 978-3-030-85539-0, 2021; Lecture Notes in Networks and System, Vol. 319, ISSN: 2367-3370, 2022, pp. 289-297, DOI: 10.1007/978-3-030-74009-2 (SJR=0.184/Q3/2019).</li>
									
									<li>Bontchev, B., Dankov, Y., Vassileva, D. and Kovachev, M.   <a href="https://www.springer.com/series/11156"  target="_blank">Software Instruments for Analysis and Visualization of Game-Based Learning Data</a>, Proc. of 12th Int. Conf. on Applied Human Factors and Ergonomics (AHFE 2021), Manhattan, New York, USA, July 25-29, 2021, Advances in Intelligent Systems and Computing, Edited by Ahram, T.Z., Karwowski, W., and Kalra, J., LNNS, volume 271, Springer, ISSN: 21945357, 2021, pp.395-402 (SJR=0.184/Q3/2019).</li>
									<li>Y. Dankov, Bontchev, B. <a href="https://doi.org/10.1007/978-3-030-74009-2_54"  target="_blank">Designing Software Instruments for Analysis and Visualization of Data relevant to Playing Educational Video Games</a>, in: Advances in Intelligent Systems and Computing, Volume 1378, T. Ahram et al. (Eds.): Human Interaction, Emerging Technologies and Future Applications IV, Proc. of IHIET-AI 2021, Strassbourg, France, April 28-30, Springer, ISSN 2194-5357, ISSN 2194-5365 (electronic), ISBN 978-3-030-73270-7, pp. 422–429, 2021. https://doi.org/10.1007/978-3-030-74009-2_54 (SJR=0.18/Q3/2019).</li>
									<li>Y. Dankov, Bontchev, B. <a href="https://doi.org/10.1007/978-3-030-74009-2_53"  target="_blank">Software Instruments for Management of the Design of Educational Video Games</a>, in: Advances in Intelligent Systems and Computing, Volume 1378, T. Ahram et al. (Eds.): Human Interaction, Emerging Technologies and Future Applications IV, Proc. of IHIET-AI 2021, Strasbourg, France, April 28-30, Springer, ISSN 2194-5357, ISSN 2194-5365 (electronic), ISBN 978-3-030-73270-7, pp. 414–421, 2021. https://doi.org/10.1007/978-3-030-74009-2_53 (SJR=0.18/Q3/2019).</li>
									<li>Antonova, A., Bontchev, B., Gourova, E. (2020) <a href="https://www.academia.edu/44694138/Knowledge_management_approaches_about_smart_services_for_designing_adaptable_and_personalised_video_games"  target="_blank"> Knowledge management approaches about smart services for designing adaptable and personalised video games</a>, Proc. of 21st European Conference on Knowledge Management (ECKM 2020), 2-4 December, 2020, ISBN: 978-1-912764-81-5, ISSN: 2048-8963, pp.65-72 (SJR=0.15/2019, WoS).</li>
									<li>Bontchev, B., Antonova, A., Dankov, Y. (2020, July)<a href="https://www.researchgate.net/publication/345005936_Educational_Video_Game_Design_Using_Personalized_Learning_Scenarios"  target="_blank"> Educational Video Game Design Using Personalized Learning Scenarios</a>, Proc. of 20th Int. Conf. Computational Science and Its Applications – ICCSA 2020, Cagliari, Italy, July 1–4, 2020, Part VI, LNCS, No. 12254, ISSN:0302-9743, Springer, pp.829-845. https://doi.org/10.1007/978-3-030-58817-5 (SJR=0.43/Q2/2019, WoS).</li>
									<li>Dankov, Y., Bontchev, B. (2020, June)<a href="https://doi.org/10.1145/3407982.3408010"  target="_blank"> Towards a Taxonomy of Instruments for Facilitated Design and Evaluation of Video Games for Education</a>, Proc. of CompSysTech'20, June 19–20, 2020, Ruse, Bulgaria, ACM Digital Library, ISBN: 978-1-4503-7768-3, pp.285–292. https://doi.org/10.1145/3407982.3408010 (best paper award) (SJR=0.17/2018).</li>
									<li>Terzieva, V., Paunova-Hubenova, E., Bontchev, B. (2019) <a href="https://www.researchgate.net/publication/343234001_Personalization_of_Educational_Video_Games_in_APOGEE"  target="_blank">Personalization of Educational Video Games in APOGEE</a>, Chapter in: Brooks A., Brooks E. (eds) Interactivity, Game Creation, Design, Learning, and Innovation - 8th EAI International Conference: ArtsIT, Interactivity & Game Creation. Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering, Vol. 328, Springer, Cham., pp 477-487. https://doi.org/10.1007/978-3-030-53294-9_34 (SJR=0.151/Q4/2019).</li>
                        			<li>Antonova, A., Dankov, Y., Bontchev, B. (2019, October) <a href="https://dl.acm.org/doi/abs/10.1145/3351556.3351574"  target="_blank"> Smart Services for Managing the Design of Personalized Educational Video Games</a>, Proc. of 9th Balkan Conference in Informatics (BCI'2019), Sofia, Bulgaria, ACM International Conference Proceeding Series, ISBN: 978-1-4503-7193-3, pp. 1-8 (SJR=0.169/2018), https://doi.org/10.1145/3351556.3351574 (best paper award).</li>
                        			<li>Bontchev, B., Vassileva, D., Dankov, Y. (2019, July) <a href="https://www.scitepress.org/Papers/2019/79304/79304.pdf" target="_blank"> The APOGEE Software Platform for Construction of Rich Maze Video Games for Education</a>, Proc. of 14th International Conference on Software Technologies (ICSOFT'2019), Ed. Marten van Sinderen, Leszek Maciaszek, INSTICC, Prague, Czech Republic, 26-28 July, 2019, ISSN: 2184-2833, ISBN: 978-989-758-379-7, pp.491-498 (SJR=0.138/2018).</li>
                        			<li>Vassileva, D. (2019, July) <a href="./pdf/EDULEARN2019 Vassileva 1117.pdf" target="_blank">Measuring and mitigating racial prejudices by means of serious video games</a>, Proc. of 11th annual Int. Conf. on Education and New Learning Techn. (EDULEARN19), ISBN: 978-84-09-12031-4, Palma de Mallorca, Spain, pp.7080-7090.</li>
                        			<li>Antonova, A., Bontchev, B. (2019, July) <a href="./pdf/EDULEAN2019 Antonova Bontchev 658.pdf" target="_blank">Exploring puzzle-based learning for building effective and motivational maze video games for education</a>, Proc. of 11th annual Int. Conf. on Education and New Learning Techn. (EDULEARN19), ISBN: 978-84-09-12031-4, Palma de Mallorca, Spain, pp.2425-2434.</li>
                        			<li>Terzieva, V. (2019, July) <a href="./pdf/EDULEARN2019 Terzieva 1686.pdf" target="_blank">Game-based teaching in history – case study in Bulgarian schools</a>, Proc. of 11th annual Int. Conf. on Education and New Learning Techn. (EDULEARN19), ISBN: 978-84-09-12031-4, Palma de Mallorca, Spain, pp.7036-7044.</li>
                        			<li>Terzieva, V. (2019, July) <a href="./pdf/EDULEARN2019 Terzieva 1694.pdf" target="_blank">Personalisation in educational games – a case study</a>, Proc. of 11th annual Int. Conf. on Education and New Learning Techn. (EDULEARN19), ISBN: 978-84-09-12031-4, Palma de Mallorca, Spain, pp. 7080-7090, doi: 10.21125/edulearn.2019.1694.</li>
                        			<li>Paunova-Hubenova, E. (2019, March) Didactic mini video games – students’ and teachers’ point of view, Proc. of Int. Conf. on Innovations in Science and Education, Prague, Czech Republic, Vol. 7, DOI: 10.12955/cbup.v7.1388, (WoS) pp. 552-558 <a href="https://ojs.journals.cz/index.php/CBUIC/article/view/1417" target="_blank">(https://ojs.journals.cz/index.php/CBUIC/article/view/1417)</a>.</li>
                        			<li>Bontchev, B. (2019, March) Rich еducational video mazes as a visual environment for game-based learning. Proc. of Int. Conf. on Innovations in Science and Education, Prague, Czech Republic, Vol. 7, DOI: 10.12955/cbup.v7.1388, (WoS) pp. 380-386 <a href="https://ojs.journals.cz/index.php/CBUIC/article/view/1388/" target="_blank">(https://ojs.journals.cz/index.php/CBUIC/article/view/1388/)</a>.</li>
                        			<li>Paunova-Hubenova, E. (2019, March) <a href="https://library.iated.org/view/PAUNOVAHUBENOVA2019ARE" target="_blank">Are the school teachers ready to start using smart adaptive video games for education?</a>, Proc. of the 13th International Technology, Education and Development Conference (INTED2019), Valencia, Spain, ISBN: 978-84-09-08619-1, ISSN: 2340-1079, doi:10.21125/inted.2019.1294, pp.5191-5199.</li>
                        			<li>Naydenov, I., Adamov, I. (2019, March) <a href="https://library.iated.org/view/NAYDENOV2019ADA" target="_blank">Adaptive video games based on cognitive abilities and skills of the player</a>, Proc. of the 13th International Technology, Education and Development Conference (INTED2019), Valencia, Spain, ISBN: 978-84-09-08619-1, ISSN: 2340-1079, doi:10.21125/inted.2019.2448, pp.9845-9853.</li>
									<li>Terzieva, V. (2018, November) <a href="https://library.iated.org/view/TERZIEVA2018POT" target="_blank">The potential of educational maze games for teaching in primary schools</a>, Proc. of the 11th annual International Conference of Education, Research and Innovation (ICERI2018), 12th-14th November, 2018, Seville, Spain, ISSN: 2340-1095, DOI: 10.21125/iceri.2018.1542, pp.2480-2489.</li>
									<li>Terzieva, V., Paunova-Hubenova, E., Bontchev, B. (2018, October) <a href="https://www.researchgate.net/publication/329318999_Identifying_the_User_Needs_of_Educational_Video_Games_in_Bulgarian_Schools" target="_blank"> Identifying the User Needs of Educational Video Games in Bulgarian Schools</a>, Proc. of the 12th European Conference on Game-Based Learning (ECGBL 2018), ISBN: 978-1-911218-99-9, ACPI, Sophia Antipolis, France, pp.687-695 (SJR=0.154/2018).</li>
                        			<li>Terzieva, V., Paunova, E., Bontchev, B., Vassileva, D. (2018, July) <a href="https://www.researchgate.net/publication/326716889_TEACHERS_NEED_PLATFORMS_FOR_CONSTRUCTION_OF_EDUCATIONAL_VIDEO_GAMES" target="_blank"> Teachers Need Platforms for Construction of Educational Video Games</a>, Proc. of the 10th Annual Int. Conf. on Education and New Learning Technologies (EDULEARN2018), IATED, Palma de Mallorca, Spain, ISBN: 978-84-09-02709-5, doi: 10.21125/edulearn.2018.1922, pp.8260-8270.</li>
                        			<li>Paneva-Marinova, D., Rousseva, M., Pavlov, R., Luchev, D. (2018, July) <a href="https://library.iated.org/view/PANEVAMARINOVA2018ANC" target="_blank"> The ancient Thracian civilization and modern youth convergence by serious games</a>, Proc. of the 10th Annual Int. Conf. on Education and New Learning Technologies (EDULEARN2018), IATED, Palma de Mallorca, Spain, ISBN: 978-84-09-02709-5, doi: 10.21125/edulearn.2018.1922, pp.8260-8270.</li>
                        			<li>Bontchev, B., Vassileva, D. (2018, July) <a href="https://www.researchgate.net/publication/326713568_DYNAMIC_GAME_ADAPTATION_BASED_ON_DETECTION_OF_BEHAVIORAL_PATTERNS_IN_THE_PLAYER_LEARNING_CURVE" target="_blank"> Dynamic game adaptation based on detection of behavioral patterns in the player learning curve</a>, Proc. of the 10th Annual Int. Conf. on Education and New Learning Technologies (EDULEARN2018), IATED, Palma de Mallorca, Spain, ISBN: 978-84-09-02709-5, doi: 10.21125/edulearn.2018.1905, pp.8182-8191. </li>
									<li>Терзиева, В. (2018) <a href="http://www.adis.org/ERIS_conference/2018/sbornik-ERIS.2018.pdf" target="_blank"> Видео игри за обучение в училище</a>, Единадесета конференция "Образованието и изследванията в информационното общество", Пловдив, 1-2 юни.</li>
									<li>Bontchev, B., Vassileva, D., Ivanov, D. (2018, April) <a href="https://www.researchgate.net/publication/324597055_PLAYER-CENTRIC_ADAPTATION_OF_A_CAR_DRIVING_VIDEO_GAME" target="_blank">Player-centric adaptation of a car driving video game</a>, Proc. of e-Society’18 Int. Conf., IADIS, 14-16 April, Lisbon, Portugal, ISBN: 978-989-8533-75-3, pp.193-200.</li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.patents')}</h2>
                    <ol>
						<li>Бончев, Б., Василева, Д., Иванов, Д. <a href="./pdf/polezen model 02-zayavlenie 20220526.pdf" target="_blank">Електронно устройство за оценяване на индивидуална емоционална възбуда</a>, заявка номер BG/U/22/5532 за Свидетелство за полезен модел, подадена на 26.05.2022г. в Патентното ведомство на Р България (в процес на оценяване)</li>
						<li>Иванов, Д., Бончев, Б., Василева, Д. <a href="./pdf/polezen model 01-svidetelstvo 20190919.jpg" target="_blank">Електронно устройство за измерване на кожна проводимост</a>, Свидетелство за полезен модел, Патентно ведомство на Р България, рег. номер 3234 U1, 19.09.2019г.</li>
					</ol>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.theses')}</h2>
                    <ol>
						<li>Ковачев, М. (2022, март)<a href="./pdf/Diplomna-Martin Kovachev FN26219.pdf" target="_blank"> Софтуерна платформа за анализ и визуализация на резултати от видео игри за обучение</a>, дипломна работа, ФМИ-СУ "Св. Кл. Охридски".</li>
						<li>Асенов, И. (2022, март)<a href="./pdf/Diplomna-Ivan Asenov FN25925.pdf" target="_blank"> Изследване на проблемите при проектирането на ММО видео игри</a>, дипломна работа, ФМИ-СУ "Св. Кл. Охридски".</li>
						<li>Пенчев, Н. (2019, октомври)<a href="./pdf/Diplomna-Nikolay Penchev FN25838.pdf" target="_blank"> Онлайн XSD-базиран редактор за създаване на видео игри-лабиринти за обучение</a>, дипломна работа, ФМИ-СУ "Св. Кл. Охридски" (незащитена).</li>
						<li>Адамов, И. (2018, октомври)<a href="./pdf/Diplomna-Ilko Adamov FN25394.pdf" target="_blank"> Изследване на методи за адаптиране на видео игри за стрелци от първо лице спрямо кривата на учене на  играча</a>, дипломна работа, ФМИ-СУ "Св. Кл. Охридски".</li>
						<li>Найденов, И. (2018, октомври)<a href="./pdf/Diplomna_Ivan_Naydenov FN25393.pdf" target="_blank"> Изследване на методи за адаптиране на симулаторни видео игри спрямо кривата на учене на играча</a>, дипломна работа, ФМИ-СУ "Св. Кл. Охридски".</li>
					</ol>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.dissertations')}</h2>
                    <ul>
						<li>Данков, Я. (2022, юли)<a href="https://www.uni-sofia.bg/index.php/bul/universitet_t/fakulteti/fakultet_po_matematika_i_informatika2/specialnosti/doktoranti/pridobivane_na_obrazovatelna_i_nauchna_stepen_doktor/predstoyaschi_zaschiti/yavor_ivanov_dankov_fakultet_po_matematika_i_informatika" target="_blank"> Инструменти за управление и оценка при ориентиран към потребителя подход на проектирането на видео игри за обучение</a>, дисертация за присъждане на ОНС „доктор” в професионално направление 4.6. Информатика и компютърни науки, докторска програма „Компютърни науки“, ФМИ-СУ "Св. Кл. Охридски".</li>
					</ul>
                </div>
            </div>

            <div className="row " id="presentations">
                <div className="col-lg-12 col-md-12" >
                    <h2 >{t('resultsContent.presentations')}</h2>
                    <ul>
						 <li><a href="https://www.slideshare.net/bbontchev/ss-252077797" target="_blank">"Генериране на сериозни видео игри-лабиринти"</a>,  Семинар на кат. Софтуерни технологии, ФМИ – СУ „Св. Кл. Охридски“, Кладница, 09.06.2021г.</li>
						 <li><a href="https://www.slideshare.net/bbontchev/ss-250294274" target="_blank">"Учебни видео игри и стилове на учене и на играене"</a>,  Европейска нощ на учените 2021, 25-26 септември, София, България.</li>
						 <li><a href="https://www.slideshare.net/bbontchev/controlling-adaptation-in-affective-serious-games" target="_blank">„Controlling Adaptation in Affective Serious Games“</a>,  International IEEE Conference "Automatics and Informatics 2021" (ICAI'21), 30 September-2 October 2021, Varna, Bulgaria.</li>
						 <li><a href="https://www.slideshare.net/bbontchev/ss-252077720" target="_blank">„Генериране на сериозни видео игри с математически задачи“</a>, Годишен семинар по алгебра и геометрия, ФМИ – СУ „Св. Кл. Охридски“, Стрелча, 17.11.2021г.</li>  
						 <li><a href="https://www.fni.bg/?q=node/938" target="_blank">„Седмица на бенефициентите на ФНИ“ - представяне на резултати от изпълнение на проекти, финансирани от ФНИ към МОН</a>, 4 юли 2019г., София, 10:35-10:50 часа, <a href="https://www.slideshare.net/bbontchev/127-15122017" target="_blank">Pезултати от изпълнение на проект АПОГЕЙ (Олга Георгиева  и  Боян Бончев)</a></li>  
						<li><a href="https://www.researchgate.net/publication/333867678_Personalizacia_i_adaptacia_v_obrazovatelni_video_igri_ot_tip_pzel" target="_blank">Персонализация и адаптация в образователни видеоигри от тип пъзел</a>, доклад по покана на <a href="http://adis.org/ERIS_conference/2019/index-bg.html" target="_blank">12 национална конференция с международно участие „Образованието и изследванията в информационното общество”</a>, Пловдив, 30-31 май 2019г.</li>
						<li><a href="https://www.slideshare.net/bbontchev/towards-an-automatized-construction-of-personalizable-video-games-for-education" target="_blank">Towards an Automatized Construction of Personalizable Video Games for Education</a>, invited plenary lecture at the <a href="http://wseas.org/wseas/cms.action?id=19934" target="_blank">15th International Conference on EDUCATIONAL TECHNOLOGIES (EDUTE'19)</a>, Rome, Italy, May 25-27, 2019.</li>
						<li><a href="https://www.slideshare.net/BoyanBontchev/apogee-145905819" target="_blank">APOGEE: иновативна платформа за изграждане на интелигентни адаптивни видео игри за обучение</a>, представена на <a href="https://events.ictmedia.bg/event/92#schedule" target="_blank"> 14 Национална конференция по Е-образование</a>, 25 октомври, 2018г., София.</li>
						<li><a href="https://www.slideshare.net/BoyanBontchev/online-generation-of-smart-adaptive-video-games-for-education-apogee/" target="_blank">APOGEE - smArt adaPtive videO GamEs for Education: a game generation platform</a>, project presentation in English, March 2018.</li>
                        <li><a href="https://www.slideshare.net/BoyanBontchev/apogee-smart-adaptive-video-games-for-education/" target="_blank">APOGEE - smArt adaPtive videO GamEs for Education: ГЕНЕРИРАНЕ НА АДАПТИВНИ ОБРАЗОВАТЕЛНИ ИГРИ</a>, представяне на проекта, март 2018г., София.</li>
						<li><a href="https://www.slideshare.net/BoyanBontchev/generation-of-educational-3d-maze-games-for-carpet-handicraft-in-bulgaria" target="_blank">Generation of Educational 3D Maze Games for Carpet Handicraft in Bulgaria</a>, invited talk at DIPP’2017, Bourgas, Bulgaria, Sep 9, 2017.</li>
					</ul>
                </div>
            </div>

             <div className="row" id="video">
                <div className="col-lg-12 col-md-12">
                    <h2>{t('resultsContent.videos')}</h2>
                    <ul>
						<li><a href="https://youtu.be/YiBI2K9hC88" target="_blank">“Let Us Save Venice” - an educational maze video game (in English) intending to educate viewers on the effects of climate change, especially as it relates to sea-level rise and cultural heritage resilience</a> (generated by means the APOGEE platform)</li>
						<li><a href="https://www.youtube.com/watch?v=QI5bplmxxZo" target="_blank">"Наследството на Вълчан войвода"</a>, oбразователна видео игра, генерирана с платформата АПОГЕЙ (in Bulgarian)</li>
						<li><a href="https://youtu.be/mI9NwiZOrB0" target="_blank">Asenevci (an educational video game generated by means the APOGEE platform)</a> (subtitles in English)</li>
                        <li><a href="https://www.youtube.com/watch?v=VeknQLnD4Eg" target="_blank">Изследване на методи за адаптиране на видео игри за стрелци от първо лице спрямо кривата на учене на  играча</a></li>
                        <li><a href="https://www.youtube.com/watch?v=pa_kBCfMkiw" target="_blank">Изследване на методи за адаптиране на симулаторни видео игри спрямо кривата на учене на играча</a></li>
                        <li><a href="https://www.youtube.com/watch?v=ZLH4F6gq9Gs" target="_blank">Educational 3D Maze Games for Carpet Handicraft in Bulgaria</a></li>
					</ul>
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
