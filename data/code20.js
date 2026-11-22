window.CODE_DATA.push(
// ===== SIGNALISATION =====
{id:'z001',theme:'signalisation',img:'lim90',q:"Sur route à 2 voies séparées par un terre-plein central, la limite est :",qa:"على طريق بمسارين يفصل بينهما جدول مركزي، الحد:",opts:[
 {f:"80 km/h",a:"80كم/س"},
 {f:"90 km/h",a:"90كم/س"},
 {f:"110 km/h",a:"110كم/س"}],
ok:[2],exp:"Les routes à 2x2 voies séparées par un terre-plein central sont limitées à 110 km/h par temps sec (voies express).",expa:"الطرق 2x2 ذات الفاصل المركزي محدودة بـ110كم/س طقساً جافاً (طرق سريعة)."},
{id:'z002',theme:'signalisation',img:'feu_rouge',q:"Au feu rouge, tourner à droite :",qa:"عند الضوء الأحمر، الانعطاف يميناً:",opts:[
 {f:"Toujours autorisé",a:"مسموح دائماً"},
 {f:"Interdit sauf flèche jaune clignotante l'autorisant",a:"ممنوع إلا بسهم أصفر وامض يسمح به"},
 {f:"Autorisé si personne",a:"مسموح إن لا أحد"}],
ok:[1],exp:"Au feu rouge, l'arrêt est obligatoire ; tourner à droite n'est permis que si une flèche jaune clignotante l'autorise (en cédant le passage).",expa:"عند الأحمر التوقف إجباري؛ الانعطاف يميناً مسموح فقط بسهم أصفر وامض (مع إعطاء الأولوية)."},
{id:'z003',theme:'signalisation',img:'finpriorite',q:"Après ce panneau, aux carrefours suivants :",qa:"بعد هذه اللوحة، عند التقاطعات التالية:",opts:[
 {f:"Vous restez prioritaire",a:"تبقى صاحب أولوية"},
 {f:"La priorité à droite s'applique sauf autre signalisation",a:"تسري أولوية اليمين إلا بإشارة أخرى"},
 {f:"Tout le monde cède",a:"الجميع يعطي"}],
ok:[1],exp:"La fin de route prioritaire rétablit la règle de priorité à droite aux carrefours suivants sauf si d'autres panneaux imposent autre chose.",expa:"نهاية أولوية الطريق تعيد قاعدة أولوية اليمين في التقاطعات التالية إلا إذا أمرت لوحات بغير ذلك."},
{id:'z004',theme:'signalisation',img:'autoroute',q:"Sur autoroute, il est interdit de :",qa:"على الأوتوروت، يُمنع:",opts:[
 {f:"Dépasser",a:"التجاوز"},
 {f:"Faire demi-tour et marche arrière",a:"الدوران والرجوع للخلف"},
 {f:"Rouler à 110",a:"السير بـ110"}],
ok:[1],exp:"Sur autoroute : interdiction de faire demi-tour, de la marche arrière, de stationner (hors BAU) et les piétons/tracteurs sont interdits.",expa:"على الأوتوروت: ممنوع الدوران والرجوع والوقوف (خارج مسار الطوارئ) ومرور المشاة والجرارات."},
{id:'z005',theme:'signalisation',img:'route_glissante',q:"Ce panneau 'risque de dérapage' vous invite à :",qa:"لوحة 'خطر الانزلاق' تدعوك لـ:",opts:[
 {f:"Freiner fort",a:"الفرملة بقوة"},
 {f:"Réduire l'allure et conduire en douceur",a:"تخفيف السرعة والقيادة بنعومة"},
 {f:"Accélérer",a:"التسارع"}],
ok:[1],exp:"Le panneau 'chaussée glissante' avertit d'un risque de dérapage : vitesse réduite, gestes souples, distances allongées.",expa:"لوحة 'الطريق الزلق' تحذّر من خطر انزلاق: سرعة منخفضة وحركات ناعمة ومسافات ممدودة."},
{id:'z006',theme:'signalisation',img:'voiebus',q:"Une voie marquée 'BUS' avec une ligne discontinue à votre droite :",qa:"مسار مكتوب 'BUS' مع خط متقطع على يمينك:",opts:[
 {f:"Interdit d'y entrer",a:"ممنوع الدخول"},
 {f:"La ligne discontinue peut autoriser l'entrée ponctuelle",a:"الخط المتقطع قد يسمح بدخول مؤقت"},
 {f:"C'est un parking",a:"هو موقف"}],
ok:[1],exp:"La ligne discontinue à droite d'une voie bus permet parfois de l'emprunter ponctuellement (tourner, accéder à une propriété) si la signalisation le prévoit.",expa:"الخط المتقطع يمين مسار الحافلات قد يسمح باستخدامه مؤقتاً (انعطاف، دخول ملكية) إذا نصت الإشارات."},
{id:'z007',theme:'signalisation',img:'retrecit',q:"Ce panneau signale un rétrécissement :",qa:"هذه اللوحة تُنبّه بتضيّق:",opts:[
 {f:"Toujours par la gauche",a:"دائماً من اليسار"},
 {f:"Des deux côtés ou du côté indiqué",a:"من الجانبين أو الجانب المشار إليه"},
 {f:"Uniquement par la droite",a:"فقط من اليمين"}],
ok:[1],exp:"Le dessin du panneau indique le côté du rétrécissement (à droite, à gauche ou des deux côtés) ; adaptez votre trajectoire en conséquence.",expa:"رسم اللوحة يحدد جهة التضيّق (يمين، يسار، أو الجانبان)؛ عدّل مسارك تبعاً."},
{id:'z008',theme:'signalisation',img:'croisementdifficile',q:"À un croisement difficile, qui passe en premier ?",qa:"عند ملاقاة صعبة، من يمر أولاً؟",opts:[
 {f:"Celui qui monte",a:"الصاعد"},
 {f:"Celui dont la manœuvre est la plus facile laisse passer",a:"من مناورته أسهل يترك المرور"},
 {f:"Le camion",a:"الشاحنة"}],
ok:[1],exp:"Le code impose de faciliter le croisement : celui qui peut s'arrêter/reculer le plus facilement cède le passage (près d'un évasement, côte, etc.).",expa:"القانون يفرض تسهيل الملاقاة: من يستطيع التوقف/الرجوع بسهولة أكبر يترك المرور."},
{id:'z009',theme:'signalisation',img:'poids',q:"Ce panneau '7,5 t' concerne :",qa:"لوحة '7.5 طن' تخص:",opts:[
 {f:"La hauteur",a:"الارتفاع"},
 {f:"Le PTAC du véhicule",a:"الوزن الإجمالي للمركبة"},
 {f:"La longueur",a:"الطول"}],
ok:[1],exp:"Le panneau de limitation de tonnage concerne le PTAC (poids total autorisé en charge) du véhicule : vérifiez votre carte grise.",expa:"لوحة تحديد الحمولة تخص الوزن الإجمالي المرخص للمركبة: تحقق من بطاقتك الرمادية."},
{id:'z010',theme:'signalisation',img:'enfants',q:"Ce panneau associé à un panonceau 'école' :",qa:"هذه اللوحة مع لوحة 'مدرسة':",opts:[
 {f:"Zone piétonne",a:"منطقة مشاة"},
 {f:"Présence fréquente d'enfants, ralentir",a:"وجود متكرر لأطفال، خفّف السرعة"},
 {f:"Interdiction",a:"منع"}],
ok:[1],exp:"Le panneau enfants + panonceau école renforce l'avertissement : ralentissez fortement, enfants imprévisibles.",expa:"لوحة الأطفال + لوحة مدرسة تعزز التحذير: خفّف السرعة كثيراً، أطفال غير متوقعين."},
{id:'z011',theme:'signalisation',img:'travaux',q:"La signalisation jaune de chantier :",qa:"الإشارات الصفراء للورشة:",opts:[
 {f:"Est indicative",a:"استرشادية"},
 {f:"Prime sur la signalisation permanente",a:"تتغلب على الإشارات الدائمة"},
 {f:"Est optionnelle",a:"اختيارية"}],
ok:[1],exp:"La signalisation temporaire jaune (panneaux, marquage) s'impose sur la permanente : respectez-la jusqu'à sa fin officielle.",expa:"الإشارات المؤقتة الصفراء (لوحات، علامات) تغلب على الدائمة: احترمها حتى نهايتها الرسمية."},
{id:'z012',theme:'signalisation',img:'tunnel',q:"Dans un tunnel, en cas d'incendie du véhicule :",qa:"في النفق، عند حريق في المركبة:",opts:[
 {f:"Sortir du tunnel en roulant",a:"الخروج من النفق سيراً"},
 {f:"S'arrêter, évacuer vers les issues de secours indiquées",a:"التوقف والإخلاء نحو مخارج الطوارئ المعلنة"},
 {f:"Attendre dans la voiture",a:"الانتظار في السيارة"}],
ok:[1],exp:"En cas d'incendie en tunnel : arrêtez-vous, coupez le moteur, évacuez rapidement vers les issues de secours signalées par les panneaux verts.",expa:"عند حريق في نفق: توقف، أطفئ المحرك، أخلِ بسرعة نحو مخارج الطوارئ المعلنة باللوحات الخضراء."},
// ===== PRIORITES =====
{id:'z013',theme:'priorites',img:'prio_droite',q:"Un tracteur arrive de votre droite sur un chemin de terre :",qa:"جرار يصل من يمينك على طريق ترابي:",opts:[
 {f:"Il n'a pas priorité",a:"لا أولوية له"},
 {f:"Vous lui cédez le passage",a:"تعطيه الأولوية"},
 {f:"Il doit s'arrêter",a:"يجب أن يتوقف"}],
ok:[1],exp:"Sortir d'un chemin de terre ou d'une propriété impose de céder le passage à tous les usagers ; mais s'il arrive sur une route normale à droite, vous lui cédez.",expa:"الخروج من طريق ترابي أو ملكية يُلزم بإعطاء الأولوية للجميع؛ لكن إن وصل لطريق عادي من يمينك تعطيه."},
{id:'z014',theme:'priorites',img:'cedez_line',q:"La ligne de triangles au sol sans panneau :",qa:"خط مثلثات على الأرض بلا لوحة:",opts:[
 {f:"Est indicative, pas de cession",a:"استرشادية، لا تسليم"},
 {f:"Marque le point où céder le passage",a:"تحدد نقطة إعطاء الأولوية"},
 {f:"Un parking",a:"موقف"}],
ok:[1],exp:"La ligne de triangles doubles (au sol) matérialise l'endroit où céder le passage ; elle s'applique même sans panneau.",expa:"خط المثلثات المزدوجة يحدد موضع إعطاء الأولوية؛ يسري حتى بدون لوحة."},
{id:'z015',theme:'priorites',img:'feux',q:"À un carrefour, le feu est vert pour vous mais un piéton traverse :",qa:"عند تقاطع، الضوء أخضر لك لكن مشاة يعبر:",opts:[
 {f:"Vous passez",a:"تمر"},
 {f:"Vous cédez le passage au piéton",a:"تعطي الأولوية للمشاة"},
 {f:"Vous klaxonnez",a:"تنفّر"}],
ok:[1],exp:"Même au vert, vous devez céder le passage aux piétons engagés sur la chaussée où vous entrez ou traversez.",expa:"حتى مع الأخضر يجب إعطاء الأولوية للمشاة العابرين على الطريق الذي تدخله أو تعبره."},
{id:'z016',theme:'priorites',img:'gyrophare',q:"Les véhicules prioritaires sont :",qa:"المركبات ذات الأولوية هي:",opts:[
 {f:"Toutes les voitures",a:"كل السيارات"},
 {f:"Police, pompiers, SAMU en intervention signalée (gyrophare + sirène)",a:"شرطة وإطفاء وإسعاف بتدخل معلن (أضواء + صفارة)"},
 {f:"Les taxis",a:"التاكسيات"}],
ok:[1],exp:"Seuls les véhicules d'intérêt général en intervention (gyrophare + avertisseur sonore) bénéficient de la priorité de passage.",expa:"فقط مركبات المصلحة العامة في تدخل (أضواء + منفّر) تتمتع بأولوية المرور."},
{id:'z017',theme:'priorites',img:'stop',q:"Au STOP, vous devez vous arrêter :",qa:"عند STOP يجب التوقف:",opts:[
 {f:"Au niveau du panneau",a:"عند مستوى اللوحة"},
 {f:"À la ligne d'arrêt ou à la limite de la chaussée croisée",a:"عند خط التوقف أو حد الطريق المتقاطع"},
 {f:"Où vous voulez",a:"أينما تريد"}],
ok:[1],exp:"L'arrêt au STOP se fait à la ligne d'arrêt blanche ou, à défaut, à la limite de la chaussée croisée pour voir et être vu.",expa:"التوقف عند STOP يكون عند خط التوقف الأبيض أو حد الطريق المتقاطع لترى وتُرى."},
{id:'z018',theme:'priorites',img:'agent',q:"Un agent vous fait signe d'avancer alors que le feu est rouge :",qa:"شرطي يشير لك بالتقدم والضوء أحمر:",opts:[
 {f:"Vous attendez le vert",a:"تنتظر الأخضر"},
 {f:"Vous avancez : l'agent prime sur le feu",a:"تتقدم: الشرطي يتغلب على الضوء"},
 {f:"Vous restez",a:"تبقى"}],
ok:[1],exp:"Les ordres des agents priment sur tous les autres signaux (feux, panneaux, marquage) : suivez leur gestuelle.",expa:"أوامر الشرطة تتغلب على كل الإشارات الأخرى (أضواء، لوحات، علامات): اتبع إشاراتهم."},
{id:'z019',theme:'priorites',img:'turn_left',q:"En tournant à gauche, vous devez aussi céder :",qa:"عند الانعطاف يساراً يجب أيضاً إعطاء الأولوية لـ:",opts:[
 {f:"Les véhicules tournant à droite venant en face",a:"المركبات المنعطفة يميناً القادمة من الأمام"},
 {f:"Personne",a:"لا أحد"},
 {f:"Les piétons",a:"المشاة"}],
ok:[2],exp:"En tournant à gauche, cédez le passage aux usagers venant en face (tout droit ou tournant à droite) ET aux piétons traversant la rue où vous entrez.",expa:"عند الانعطاف يساراً أعطِ الأولوية للقادمين من الأمام (مستقيماً أو منعطفاً يميناً) وللمشاة العابرين الشارع المدخل."},
{id:'z020',theme:'priorites',img:'priorite',q:"Vous êtes sur une route non prioritaire ; le panneau jaune barré indique :",qa:"أنت على طريق غير أولوية؛ المعين الأصفر المشطوب يشير:",opts:[
 {f:"Route prioritaire",a:"طريق أولوية"},
 {f:"Route non prioritaire",a:"طريق غير أولوية"},
 {f:"Zone dangereuse",a:"منطقة خطيرة"}],
ok:[1],exp:"Le losange jaune barré d'un trait noir confirme que vous circulez sur une route non prioritaire : les usagers des autres routes peuvent avoir priorité.",expa:"المعين الأصفر المشطوب بخط أسود يؤكد أنك على طريق غير أولوية: مستخدمو الطرق الأخرى قد تكون لهم الأولوية."},
{id:'z021',theme:'priorites',img:'giratoire',q:"Pour entrer dans un giratoire, vous devez :",qa:"للدخول في دوّار يجب:",opts:[
 {f:"Mettre le clignotant à gauche",a:"وضع إشارة اليسار"},
 {f:"Céder le passage aux usagers dans l'anneau puis signaler votre sortie",a:"إعطاء الأولوية للموجودين في الحلقة ثم الإشارة لمخرجك"},
 {f:"Entrer directement",a:"الدخول مباشرة"}],
ok:[1],exp:"À l'entrée : cédez le passage aux usagers engagés (venant de votre gauche), puis dans l'anneau signalez votre sortie par le clignotant droit.",expa:"عند الدخول: أعطِ الأولوية للموجودين (من يسارك)، ثم داخل الحلقة أشر لمخرجك بإشارة اليمين."},
{id:'z022',theme:'priorites',img:'passagepieton',q:"Un cycliste traverse sur le passage piéton en roulant :",qa:"دراج يعبر ممر المشاة راكباً:",opts:[
 {f:"Il est prioritaire comme un piéton",a:"له أولوية كمشاة"},
 {f:"Il doit descendre pour être piéton et prioritaire",a:"يجب أن ينزل ليصبح مشاة وصاحب أولوية"},
 {f:"Vous pouvez passer",a:"يمكنك المرور"}],
ok:[1],exp:"Un cycliste roulant n'est pas un piéton : il doit mettre pied à terre pour bénéficier de la priorité du passage piéton ; prudence quand même.",expa:"الدراج الراكب ليس مشاة: يجب أن ينزل ليستفيد من أولوية ممر المشاة؛ مع ذلك كن حذراً."},
// ===== CIRCULATION =====
{id:'z023',theme:'circulation',img:'lim130',q:"Sur autoroute, un jeune conducteur ne peut pas dépasser :",qa:"على الأوتوروت، السائق الجديد لا يستطيع تجاوز:",opts:[
 {f:"130 km/h",a:"130كم/س"},
 {f:"110 km/h",a:"110كم/س"},
 {f:"90 km/h",a:"90كم/س"}],
ok:[1],exp:"En période probatoire, la limite sur autoroute est 110 km/h (et non 130) ; sur voies express 100 km/h, routes 80 km/h.",expa:"في الفترة التجريبية، حد الأوتوروت 110كم/س (لا 130)؛ على السريعة 100، وعلى الطرق 80."},
{id:'z024',theme:'circulation',img:'depassement',q:"Il est interdit de dépasser :",qa:"يُمنع التجاوز:",opts:[
 {f:"Sur les lignes continues, avant un passage piéton, dans les virages sans visibilité",a:"على الخطوط المتصلة وقبل ممر مشاة وفي المنحنيات بلا رؤية"},
 {f:"Jamais",a:"أبداً"},
 {f:"Toujours autorisé",a:"مسموح دائماً"}],
ok:[0],exp:"Le dépassement est interdit : sur ligne continue, juste avant et sur un passage piéton, dans les virages et côtes sans visibilité, aux passages à niveau.",expa:"التجاوز ممنوع: على خط متصل وقبل وعلى ممر مشاة وفي المنحنيات والتلال بلا رؤية وعند ممرات القطار."},
{id:'z025',theme:'circulation',img:'feu_rouge',q:"Un feu rouge avec une flèche jaune clignotante vers la droite signifie :",qa:"ضوء أحمر مع سهم أصفر وامض يميناً يعني:",opts:[
 {f:"Stop",a:"توقف"},
 {f:"Vous pouvez tourner à droite en cédant le passage",a:"يمكنك الانعطاف يميناً مع إعطاء الأولوية"},
 {f:"Interdiction",a:"منع"}],
ok:[1],exp:"La flèche jaune clignotante permet de tourner à droite au feu rouge en cédant le passage aux usagers engagés (piétons, véhicules).",expa:"السهم الأصفر الوامض يسمح بالانعطاف يميناً عند الأحمر مع إعطاء الأولوية للمشغولين (مشاة، مركبات)."},
{id:'z026',theme:'circulation',img:'nuit_feux',q:"Pour signaler un dépassement la nuit :",qa:"للإشارة لتجاوز ليلاً:",opts:[
 {f:"Klaxon",a:"تنفير"},
 {f:"Appels de phares (feux de route/croisement)",a:"ومضات أضواء (طريق/التقاء)"},
 {f:"Clignotant gauche",a:"إشارة يسار"}],
ok:[1],exp:"La nuit, un appel de phares (alternance route/croisement) avertit le véhicule que vous dépassez ; le klaxon est interdit en agglomération.",expa:"ليلاً، ومضة أضواء (تناوب طريق/التقاء) تحذّر المركبة التي تتجاوزها؛ التنفير ممنوع في المدينة."},
{id:'z027',theme:'circulation',img:'angle_mort',q:"L'angle mort disparaît avec :",qa:"النقطة العمياء تختفي بـ:",opts:[
 {f:"Les rétroviseurs",a:"المرايا"},
 {f:"Un coup d'œil par-dessus l'épaule + rétroviseurs bien réglés",a:"نظرة فوق الكتف + مرايا مضبوطة جيداً"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"Les rétroviseurs bien réglés réduisent l'angle mort mais ne le suppriment pas : le coup d'œil par-dessus l'épaule reste indispensable.",expa:"المرايا المضبوطة تقلل النقطة العمياء لكن لا تلغيها: النظرة فوق الكتف لا غنى عنها."},
{id:'z028',theme:'circulation',img:'pluie',q:"Par forte pluie, l'aquaplaning se produit surtout :",qa:"في المطر الغزير، يحدث التزحلق المائي خاصة:",opts:[
 {f:"À basse vitesse",a:"بسرعة منخفضة"},
 {f:"À haute vitesse avec pneus usés",a:"بسرعة عالية مع إطارات متآكلة"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"L'aquaplaning survient quand le pneu ne chasse plus l'eau : risque maximal à haute vitesse et avec des pneus à sculpture insuffisante.",expa:"التزحلق المائي يحدث حين لا يصرف الإطار الماء: الخطر الأقصى بسرعة عالية وإطارات نحت ناقص."},
{id:'z029',theme:'circulation',img:'embouteillage',q:"En bouchon, la marche arrière :",qa:"في الازدحام، الرجوع للخلف:",opts:[
 {f:"Autorisée pour changer de file",a:"مسموحة لتغيير الصف"},
 {f:"Interdite sur autoroute",a:"ممنوعة على الأوتوروت"},
 {f:"Recommandée",a:"مستحسنة"}],
ok:[1],exp:"Sur autoroute et voies rapides, la marche arrière et le demi-tour sont interdits ; en bouchon, restez dans la file en attendant.",expa:"على الأوتوروت والطرق السريعة، الرجوع والدوران ممنوعان؛ في الازدحام ابقَ في الصف منتظراً."},
{id:'z030',theme:'circulation',img:'position_droite',q:"La circulation à gauche n'est autorisée que :",qa:"السير على اليسار مسموح فقط:",opts:[
 {f:"Pour dépasser ou si la signalisation l'impose",a:"للتجاوز أو إذا أمرت الإشارات"},
 {f:"Jamais",a:"أبداً"},
 {f:"Toujours",a:"دائماً"}],
ok:[0],exp:"La règle est de rouler à droite ; la voie de gauche n'est utilisée que pour dépasser, tourner à gauche ou sur signalisation spéciale.",expa:"القاعدة السير يميناً؛ المسار الأيسر يُستخدم فقط للتجاوز أو الانعطاف يساراً أو بإشارة خاصة."},
{id:'z031',theme:'circulation',img:'voies_rondpoint',q:"Dans un giratoire, pour prendre la 3e sortie (demi-tour) :",qa:"في دوّار لأخذ المخرج الثالث (دوران):",opts:[
 {f:"Voie de droite",a:"المسار الأيمن"},
 {f:"Voie intérieure puis se rabattre avant de sortir",a:"المسار الداخلي ثم الانزياح قبل الخروج"},
 {f:"Arrêt complet",a:"توقف كامل"}],
ok:[1],exp:"Pour un demi-tour ou une sortie lointaine : entrez sur la voie intérieure, puis rabattez-vous sur l'extérieur avant de sortir, clignotant à droite.",expa:"للدوران أو مخرج بعيد: ادخل المسار الداخلي ثم انزح للخارجي قبل الخروج، بإشارة يمين."},
{id:'z032',theme:'circulation',img:'bretelle',q:"Sur la bretelle de sortie, la vitesse :",qa:"على مسار الخروج، السرعة:",opts:[
 {f:"Reste à 130",a:"تبقى 130"},
 {f:"Doit être réduite progressivement (souvent 50-70)",a:"يجب تخفيضها تدريجياً (غالباً 50-70)"},
 {f:"Augmentée",a:"مُزاد"}],
ok:[1],exp:"La voie de décélération permet de réduire progressivement votre vitesse ; la bretelle a souvent une limite basse (50-70 km/h) et des virages serrés.",expa:"مسار التباطؤ يتيح تخفيضاً تدريجياً؛ للمخرج غالباً حد منخفض (50-70كم/س) ومنحنيات ضيقة."},
{id:'z033',theme:'circulation',img:'route_glissante',q:"En cas de pluie après une longue période sèche :",qa:"في مطر بعد فترة جفاف طويلة:",opts:[
 {f:"La route est sûre",a:"الطريق آمن"},
 {f:"La chaussée est très glissante (poussières + eau)",a:"الطريق زلق جداً (غبار + ماء)"},
 {f:"Rouler vite",a:"القيادة بسرعة"}],
ok:[1],exp:"Les premières pluies après sécheresse rendent la chaussée très glissante (mélange poussière-huile-eau) : prudence accrue.",expa:"أولى الأمطار بعد الجفاف تجعل الطريق زلقاً جداً (خليط غبار-زيت-ماء): حذر متزايد."},
{id:'z034',theme:'circulation',img:'limiteur',q:"Le limiteur de vitesse se débloque :",qa:"محدد السرعة يُلغى:",opts:[
 {f:"Jamais",a:"أبداً"},
 {f:"Par pression forte sur l'accélérateur ou en le désactivant",a:"بدعسة قوية على المسرع أو بتعطيله"},
 {f:"En freinant",a:"بالفرملة"}],
ok:[1],exp:"Le limiteur peut être dépassé par une pression forte sur l'accélérateur (dépassement d'urgence) ou désactivé manuellement.",expa:"المحدد يمكن تجاوزه بدعسة قوية على المسرع (تجاوز طارئ) أو تعطيله يدوياً."},
// ===== STATIONNEMENT =====
{id:'z035',theme:'stationnement',img:'stationinterdit',q:"L'arrêt bref devant ce panneau 'stationnement interdit' :",qa:"التوقف القصير أمام لوحة 'منع وقوف':",opts:[
 {f:"Interdit",a:"ممنوع"},
 {f:"Autorisé (seul le stationnement est interdit)",a:"مسموح (الوقوف فقط ممنوع)"},
 {f:"5 min",a:"5 دقائق"}],
ok:[1],exp:"La simple barre n'interdit que le stationnement ; l'arrêt bref (descente de passager, livraison) reste autorisé.",expa:"الخط الواحد يمنع الوقوف فقط؛ التوقف القصير (نزول راكب، تسليم) يبقى مسموحاً."},
{id:'z036',theme:'stationnement',img:'zone_bleue',q:"Le stationnement en zone bleue est limité généralement à :",qa:"الوقوف بالمنطقة الزرقاء محدود عموماً بـ:",opts:[
 {f:"Illimité",a:"غير محدود"},
 {f:"1h30 en journée",a:"ساعة ونصف نهاراً"},
 {f:"24h",a:"24 ساعة"}],
ok:[1],exp:"La zone bleue autorise un stationnement gratuit mais limité (généralement 1h30 en journée) avec disque de stationnement.",expa:"المنطقة الزرقاء تسمح بوقوف مجاني محدود (عادة ساعة ونصف نهاراً) بقرص توقيت."},
{id:'z037',theme:'stationnement',img:'cote_montee',q:"En montée, le véhicule recule vers :",qa:"في صعود، المركبة تتدحرج نحو:",opts:[
 {f:"Le trottoir",a:"الرصيف"},
 {f:"La chaussée",a:"الطريق"},
 {f:"Nulle part",a:"لا مكان"}],
ok:[1],exp:"En montée, si les roues sont braquées vers la chaussée, l'arrière du véhicule vient bloquer contre le trottoir en cas de recul.",expa:"في الصعود، إن وجّهت العجلات نحو الطريق، يصطدم مؤخر المركبة بالرصيف عند التدحرج."},
{id:'z038',theme:'stationnement',img:'horodateur',q:"Le ticket de stationnement doit être placé :",qa:"تذكرة الوقوف توضع:",opts:[
 {f:"Dans le portefeuille",a:"في المحفظة"},
 {f:"Lisible de l'extérieur, derrière le pare-brise",a:"مقروءة من الخارج خلف الزجاج الأمامي"},
 {f:"Sous un essuie-glace arrière",a:"تحت مساحة خلفية"}],
ok:[1],exp:"Le ticket doit être visible de l'extérieur, placé derrière le pare-brise, pour prouver le paiement lors du contrôle.",expa:"التذكرة يجب أن تكون مرئية من الخارج خلف الزجاج الأمامي لإثبات الدفع عند التفتيش."},
{id:'z039',theme:'stationnement',img:'parking',q:"Stationner devant une entrée de garage :",qa:"الوقوف أمام مدخل مرآب:",opts:[
 {f:"Autorisé",a:"مسموح"},
 {f:"Interdit (accès des propriétaires)",a:"ممنوع (دخول الملاك)"},
 {f:"Toléré",a:"مسموح"}],
ok:[1],exp:"Stationner devant une entrée carrossable (garage, portail) est un stationnement gênant : interdit et passible de fourrière.",expa:"الوقوف أمام مدخل قابل للدخول (مرآب، بوابة) وقوف معيق: ممنوع وقد يُسحب."},
{id:'z040',theme:'stationnement',img:'passagepieton',q:"Stationner à moins de 5 m avant un passage piéton :",qa:"الوقوف على بعد أقل من 5م قبل ممر مشاة:",opts:[
 {f:"Autorisé",a:"مسموح"},
 {f:"Interdit car cela masque la visibilité des piétons",a:"ممنوع لأنه يحجب رؤية المشاة"},
 {f:"Toléré la nuit",a:"مسموح ليلاً"}],
ok:[1],exp:"Stationner à moins de 5 m avant un passage piéton est un stationnement dangereux : il empêche de voir les piétons s'engager.",expa:"الوقوف على بعد <5م قبل ممر مشاة وقوف خطير: يمنع رؤية المشاة البادئين."},
{id:'z041',theme:'stationnement',img:'arretinterdit',q:"Un arrêt de 30 secondes pour déposer un passager devant ce panneau :",qa:"توقف 30 ثانية لإنزال راكب أمام هذه اللوحة:",opts:[
 {f:"Autorisé",a:"مسموح"},
 {f:"Interdit (arrêt ET stationnement interdits)",a:"ممنوع (التوقف والوقوف ممنوعان)"},
 {f:"Toléré",a:"مسموح"}],
ok:[1],exp:"Le panneau à double barre interdit l'arrêt même très bref : aucun arrêt n'est toléré, sauf urgence.",expa:"اللوحة بخطين تمنع التوقف حتى القصير: لا توقف مسموح إلا للطوارئ."},
{id:'z042',theme:'stationnement',img:'trottoir',q:"Stationner avec 2 roues sur le trottoir :",qa:"الوقوف بعجلتين على الرصيف:",opts:[
 {f:"Toujours autorisé",a:"مسموح دائماً"},
 {f:"Autorisé seulement si le marquage ou le panneau le prévoit",a:"مسموح فقط إذا نصت العلامات أو اللوحة على ذلك"},
 {f:"Interdit",a:"ممنوع"}],
ok:[1],exp:"Le stationnement partiel sur trottoir n'est permis que si un panneau ou un marquage spécifique l'autorise ; sinon, c'est une infraction.",expa:"الوقوف الجزئي على الرصيف مسموح فقط إذا سمحت لوحة أو علامة محددة به؛ وإلا فمخالفة."},
// ===== VEHICULE =====
{id:'z043',theme:'vehicule',img:'voyant_abs',q:"L'ABS (antiblocage) permet :",qa:"نظام ABS يسمح بـ:",opts:[
 {f:"Freiner plus fort",a:"فرملة أقوى"},
 {f:"Garder le contrôle directionnel en freinage d'urgence",a:"الحفاظ على السيطرة الاتجاهية عند فرملة طارئة"},
 {f:"Accélérer",a:"التسارع"}],
ok:[1],exp:"L'ABS empêche le blocage des roues en freinage fort : vous conservez la capacité de diriger le véhicule pour éviter l'obstacle.",expa:"ABS يمنع انغلاق العجلات عند الفرملة القوية: تحتفظ بقدرة توجيه المركبة لتجنب العائق."},
{id:'z044',theme:'vehicule',img:'pneu',q:"Une crevaison lente peut être détectée par :",qa:"ثقب بطيء قد يُكشف عبر:",opts:[
 {f:"Le témoin TPMS ou un comportement anormal",a:"مؤشر TPMS أو سلوك غير طبيعي"},
 {f:"La radio",a:"الراديو"},
 {f:"Rien",a:"لا شيء"}],
ok:[0],exp:"Le témoin de pression (TPMS) alerte d'une perte de pression ; une direction qui tire ou des vibrations signalent aussi une crevaison.",expa:"مؤشر الضغط ينبه لفقدان ضغط؛ توجيه يسحب أو اهتزازات تنبئ أيضاً بثقب."},
{id:'z045',theme:'vehicule',img:'capot',q:"La batterie se recharge :",qa:"البطارية تُشحن:",opts:[
 {f:"En roulant via l'alternateur",a:"أثناء السير عبر المولّد"},
 {f:"À la maison",a:"في المنزل"},
 {f:"Jamais",a:"أبداً"}],
ok:[0],exp:"L'alternateur recharge la batterie quand le moteur tourne ; les courts trajets répétés la déchargent progressivement.",expa:"المولّد يشحن البطارية عند دوران المحرك؛ الرحلات القصيرة المتكررة تُفرغها تدريجياً."},
{id:'z046',theme:'vehicule',img:'controle_technique',q:"Si le contrôle technique révèle une contre-visite :",qa:"إذا كشف الفحص التقني عن مضادة:",opts:[
 {f:"Vous pouvez rouler librement",a:"يمكنك السير بحرية"},
 {f:"Vous devez réparer et repasser dans les 2 mois",a:"يجب الإصلاح والعودة خلال شهرين"},
 {f:"C'est fichu",a:"انتهى"}],
ok:[1],exp:"La contre-visite impose des réparations dans un délai de 2 mois ; le véhicule peut rouler pendant ce délai mais doit être représenté.",expa:"المضادة تُلزم بإصلاحات خلال شهرين؛ يمكن السير خلال المدة لكن يجب إعادة العرض."},
{id:'z047',theme:'vehicule',img:'carte_grise',q:"La carte grise mentionne :",qa:"البطاقة الرمادية تذكر:",opts:[
 {f:"Seulement la couleur",a:"اللون فقط"},
 {f:"Propriétaire, numéro VIN, PTAC, puissance",a:"المالك ورقم الهيكل والوزن الإجمالي والقوة"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"Le certificat d'immatriculation contient : identité du titulaire, numéro VIN, PTAC (F2), puissance (P6), date de 1re mise en circulation.",expa:"شهادة التسجيل تحتوي: هوية المالك، رقم الهيكل، الوزن الإجمالي (F2)، القوة (P6)، تاريخ أول تسجيل."},
{id:'z048',theme:'vehicule',img:'lave_glace',q:"En hiver, pour éviter le gel du lave-glace :",qa:"شتاءً، لتجنب تجمد سائل الغسّال:",opts:[
 {f:"Utiliser de l'eau pure",a:"استخدام ماء نقي"},
 {f:"Utiliser un produit antigel adapté",a:"استخدام منتج مضاد تجمد"},
 {f:"Ne rien mettre",a:"لا شيء"}],
ok:[1],exp:"En hiver, utilisez un lave-glace antigel pour éviter le gel du réservoir et des gicleurs.",expa:"شتاءً استخدم سائل غسّال مضاد تجمد لتجنب تجميد الخزان والفوهات."},
{id:'z049',theme:'vehicule',img:'voyant_moteur',q:"Un témoin moteur clignotant indique :",qa:"مؤشر محرك وامض يدل على:",opts:[
 {f:"Un problème grave nécessitant un arrêt rapide",a:"مشكلة خطيرة تستوجب توقفاً سريعاً"},
 {f:"Tout va bien",a:"كل شيء جيد"},
 {f:"Une révision",a:"مراجعة"}],
ok:[0],exp:"Le voyant moteur clignotant signale une défaillance grave pouvant endommager le catalyseur : arrêtez-vous rapidement et faites diagnostiquer.",expa:"مؤشر المحرك الوامض يعني عطلاً خطيراً قد يتلف المحفز: توقف بسرعة وافحص."},
{id:'z050',theme:'vehicule',img:'frein_main',q:"Le frein de parking électrique :",qa:"فرامل الوقوف الكهربائية:",opts:[
 {f:"N'existe pas",a:"غير موجودة"},
 {f:"S'active par un bouton et se désactive au démarrage",a:"تُفعّل بزر وتُلغى عند الانطلاق"},
 {f:"Est moins sûre",a:"أقل أماناً"}],
ok:[1],exp:"Le frein de parking électrique s'active par un bouton et se désengage automatiquement au démarrage ; il remplace le levier classique.",expa:"فرامل الوقوف الكهربائية تُفعّل بزر وتُفك تلقائياً عند الانطلاق؛ تحل محل الرافعة التقليدية."},
{id:'z051',theme:'vehicule',img:'checklist',q:"La pression des pneus se contrôle :",qa:"ضغط الإطارات يُفحص:",opts:[
 {f:"Quand on veut",a:"متى أردت"},
 {f:"À froid, au moins 1 fois par mois et avant long trajet",a:"بارداً، مرة شهرياً على الأقل وقبل رحلة طويلة"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"La pression se vérifie à froid (ou < 3 km) : sous-gonflage = surconsommation, usure, éclatement ; surgonflage = mauvaise adhérence.",expa:"الضغط يُفحص بارداً (أو <3كم): نقص النفخ = استهلاك وتآكل وانفجار؛ زيادة = تماسك سيئ."},
{id:'z052',theme:'vehicule',img:'boite_auto',q:"Sur une boîte automatique, 'P' signifie :",qa:"على علبة أوتوماتيكية، 'P' تعني:",opts:[
 {f:"Parking (blocage de la transmission)",a:"وقوف (قفل النقل)"},
 {f:"Puissance",a:"قوة"},
 {f:"Point mort",a:"محايد"}],
ok:[0],exp:"La position P (Park) bloque la transmission pour le stationnement ; elle se combine avec le frein de parking.",expa:"وضع P (Park) يقفل النقل للوقوف؛ يُستخدم مع الفرامل اليدوية."},
// ===== SECURITE =====
{id:'z053',theme:'securite',img:'alcool',q:"Un jeune conducteur (permis probatoire) et l'alcool :",qa:"السائق الجديد (رخصة تجريبية) والكحول:",opts:[
 {f:"0,5 g/l comme tous",a:"0.5غ/ل كالجميع"},
 {f:"0,2 g/l (tolérance quasi nulle)",a:"0.2غ/ل (شبه صفر)"},
 {f:"1 g/l",a:"1غ/ل"}],
ok:[1],exp:"Pour les conducteurs probatoires, le taux maximal est 0,2 g/l (soit zéro verre en pratique) ; au-delà, c'est une infraction grave.",expa:"لأصحاب الرخص التجريبية الحد الأقصى 0.2غ/ل (عملياً صفر كأس)؛ فوقه مخالفة خطيرة."},
{id:'z054',theme:'securite',img:'accident_scene',q:"Sur un accident avec blessé, les secours à appeler :",qa:"عند حادث بجريح، المساعدة للاتصال:",opts:[
 {f:"15 ou 112 (SAMU)",a:"15 أو 112 (إسعاف)"},
 {f:"17 (police)",a:"17 (شرطة)"},
 {f:"18 (pompiers)",a:"18 (إطفاء)"},
 {f:"Toutes ces réponses selon le cas",a:"كل هذه حسب الحالة"}],
ok:[3],exp:"15 SAMU pour les urgences médicales, 18 pompiers (désincarcération, feu), 17 police si besoin ; le 112 fonctionne partout.",expa:"15 إسعاف للطوارئ الطبية، 18 إطفاء (تحرير محاصرين، نار)، 17 شرطة عند الحاجة؛ 112 يعمل دائماً."},
{id:'z055',theme:'securite',img:'distance_frein',q:"La distance de réaction (avant de freiner) est d'environ :",qa:"مسافة الاستجابة (قبل الفرملة) حوالي:",opts:[
 {f:"1 seconde",a:"ثانية"},
 {f:"0,1 seconde",a:"0.1 ثانية"},
 {f:"5 secondes",a:"5 ثوانٍ"}],
ok:[0],exp:"Le temps de réaction moyen est ~1 seconde ; à 90 km/h, cela fait ~25 m parcourus avant même de freiner.",expa:"زمن الاستجابة الوسطي ~ثانية؛ بـ90كم/س يعني ~25م مقطوعة قبل الفرملة حتى."},
{id:'z056',theme:'securite',img:'fatigue',q:"Si vous vous sentez somnolent en conduisant :",qa:"إذا شعرت بنعاس أثناء القيادة:",opts:[
 {f:"Ouvrir la fenêtre et continuer",a:"افتح النافذة وأكمل"},
 {f:"Vous arrêter et dormir 15-20 minutes",a:"توقف ونم 15-20 دقيقة"},
 {f:"Boire un café et continuer",a:"اشرب قهوة وأكمل"}],
ok:[1],exp:"La seule solution efficace contre la somnolence est de s'arrêter et dormir 15-20 minutes ; le café ne fait que retarder les signes.",expa:"الحل الوحيد الفعال ضد النعاس هو التوقف والنوم 15-20 دقيقة؛ القهوة فقط تؤجل العلامات."},
{id:'z057',theme:'securite',img:'siege_enfant',q:"Un rehausseur est nécessaire jusqu'à :",qa:"المعزز ضروري حتى:",opts:[
 {f:"6 ans",a:"6 سنوات"},
 {f:"Environ 10 ans ou 1,50 m",a:"~10 سنوات أو 1.50م"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"Le rehausseur positionne la ceinture correctement sur l'épaule et le bassin ; il est nécessaire jusqu'à ce que l'enfant atteigne ~1,50 m.",expa:"المعزز يضبط الحزام على الكتف والحوض؛ ضروري حتى بلوغ الطفل ~1.50م."},
{id:'z058',theme:'securite',img:'triangle_prev',q:"Sur autoroute, poser le triangle :",qa:"على الأوتوروت، وضع المثلث:",opts:[
 {f:"Obligatoire",a:"إجباري"},
 {f:"Déconseillé (trop dangereux de marcher sur la BAU)",a:"غير مستحسن (خطير جداً المشي على مسار الطوارئ)"},
 {f:"Interdit",a:"ممنوع"}],
ok:[1],exp:"Sur autoroute, sortir poser le triangle est déconseillé car trop dangereux ; restez à l'abri derrière la glissière et alertez depuis la borne SOS.",expa:"على الأوتوروت وضع المثلث غير مستحسن لخطورته؛ ابقَ محتمياً خلف الحاجز وأنذر من عمود SOS."},
{id:'z059',theme:'securite',img:'telephone',q:"L'usage du téléphone au volant est interdit :",qa:"استخدام الهاتف أثناء القيادة ممنوع:",opts:[
 {f:"Seulement SMS",a:"فقط رسائل"},
 {f:"Tenu en main, avec oreillette ou casque audio",a:"باليد أو بسماعة أذن أو كاسك"},
 {f:"Autorisé",a:"مسموح"}],
ok:[1],exp:"Le téléphone tenu en main, l'oreillette et le casque audio sont interdits ; seul le système mains libres intégré au véhicule est toléré.",expa:"الهاتف باليد والسماعة والكاسك ممنوعة؛ النظام المدمج دون يدين فقط مسموح."},
{id:'z060',theme:'securite',img:'derapage',q:"En cas de sous-virage (la voiture n'obéit pas en virage) :",qa:"عند نقص التوجيه (السيارة لا تستجيب في المنعطف):",opts:[
 {f:"Accélérer",a:"التسارع"},
 {f:"Lever le pied de l'accélérateur et réduire la vitesse en douceur",a:"رفع القدم عن المسرع وتخفيض السرعة بلطف"},
 {f:"Freiner à fond",a:"الفرملة بأقصى قوة"}],
ok:[1],exp:"Le sous-virage se corrige en levant le pied de l'accélérateur pour rétablir l'adhérence, sans braquer ni freiner brutalement.",expa:"نقص التوجيه يُصحّح برفع القدم عن المسرع لاستعادة التماسك دون توجيه أو فرملة عنيفة."},
{id:'z061',theme:'securite',img:'airbag',q:"L'airbag frontal :",qa:"الوسادة الهوائية الأمامية:",opts:[
 {f:"Remplace la ceinture",a:"تحل محل الحزام"},
 {f:"Protège en complément de la ceinture",a:"تحمي مكمّلة للحزام"},
 {f:"Est inutile",a:"بلا جدوى"}],
ok:[1],exp:"L'airbag est un complément de la ceinture ; sans ceinture, il peut même être dangereux au déploiement.",expa:"الوسادة مكمّلة للحزام؛ بدون حزام قد تكون خطيرة عند الانفتاح."},
{id:'z062',theme:'securite',img:'gilet',q:"Le gilet de haute visibilité est obligatoire :",qa:"سترة الرؤية العالية إجبارية:",opts:[
 {f:"Dans toutes les voitures",a:"في كل السيارات"},
 {f:"Uniquement sur autoroute",a:"فقط على الأوتوروت"},
 {f:"Optionnelle",a:"اختيارية"}],
ok:[0],exp:"Chaque véhicule doit avoir un gilet de haute visibilité à portée de main (habitacle) pour le conducteur en cas d'arrêt d'urgence.",expa:"كل مركبة يجب أن تحوي سترة رؤية في متناول اليد (مقصورة) للسائق عند توقف طارئ."},
// ===== USAGERS =====
{id:'z063',theme:'usagers',img:'pietons',q:"Un piéton traverse alors que le bonhomme est rouge :",qa:"مشاة يعبر ورجل الضوء أحمر:",opts:[
 {f:"Vous avez priorité absolue",a:"لك أولوية مطلقة"},
 {f:"Vous devez vous arrêter pour éviter l'accident",a:"يجب التوقف لتجنب حادث"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"Même en tort, le piéton reste vulnérable : la priorité n'exonère jamais d'éviter l'accident — arrêtez-vous.",expa:"حتى لو مخطئاً، المشاة ضعيف: الأولوية لا تعفي من تجنب الحادث — توقف."},
{id:'z064',theme:'usagers',img:'passage_velo',q:"Un cycliste sur la voie, vous ne pouvez pas dépasser en gardant 1 m :",qa:"دراج على المسار، لا تستطيع تجاوزه بمتر:",opts:[
 {f:"Dépasser quand même",a:"التجاوز رغم ذلك"},
 {f:"Rester derrière jusqu'à pouvoir dépasser en sécurité",a:"البقاء خلفه حتى الإمكان بأمان"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"Si la largeur ne permet pas de dépasser en gardant la distance réglementaire (1 m ville / 1,50 m route), restez derrière le cycliste.",expa:"إن لم يسمح العرض بتجاوز بالمسافة النظامية (1م مدينة/1.50م طريق)، ابقَ خلف الدراج."},
{id:'z065',theme:'usagers',img:'moto',q:"Un motard vous double par la droite en bouchon :",qa:"دراج ناري يتجاوزك من اليمين في الازدحام:",opts:[
 {f:"C'est interdit formellement",a:"ممنوع رسمياً"},
 {f:"C'est toléré dans les conditions de circulation inter-files",a:"مسموح في شروط السير بين الصفوف"},
 {f:"Vous le bloquez",a:"تسدّ عليه"}],
ok:[1],exp:"La circulation inter-files des deux-roues est tolérée/expérimentale sous conditions ; restez stable sur votre voie et contrôlez vos rétroviseurs.",expa:"السير بين الصفوف للعجلتين مسموح/تجريبي بشروط؛ ابقَ ثابتاً في مسارك وافحص مراياك."},
{id:'z066',theme:'usagers',img:'trottinette',q:"L'âge minimum pour conduire une trottinette électrique :",qa:"السن الأدنى لقيادة سكوتر كهربائي:",opts:[
 {f:"8 ans",a:"8 سنوات"},
 {f:"12 ans",a:"12 سنة"},
 {f:"18 ans",a:"18 سنة"}],
ok:[1],exp:"Depuis 2019, l'âge minimum est 12 ans ; le port du casque est obligatoire pour les moins de 12 ans et recommandé pour tous.",expa:"منذ 2019 السن الأدنى 12 سنة؛ الخوذة إجبارية لمن دون 12 ومستحسنة للجميع."},
{id:'z067',theme:'usagers',img:'zone_rencontre',q:"Une 'zone de rencontre' est :",qa:"'منطقة اللقاء' هي:",opts:[
 {f:"Une aire de repos",a:"منطقة استراحة"},
 {f:"Un espace où piétons et cyclistes ont priorité, limité à 20 km/h",a:"حيّز للمشاة والدراجين لهم الأولوية، محدود بـ20كم/س"},
 {f:"Un parking",a:"موقف"}],
ok:[1],exp:"La zone de rencontre est un espace urbain partagé où piétons et cyclistes ont priorité ; vitesse limitée à 20 km/h.",expa:"منطقة اللقاء حيّز حضري مشترك للمشاة والدراجين لهم الأولوية؛ السرعة بحد أقصى 20كم/س."},
{id:'z068',theme:'usagers',img:'enfants',q:"Derrière un bus scolaire à l'arrêt :",qa:"خلف حافلة مدرسية متوقفة:",opts:[
 {f:"Passer vite",a:"المرور بسرعة"},
 {f:"Ralentir fortement, enfants imprévisibles",a:"تخفيف شديد، أطفال غير متوقعين"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"Le bus scolaire masque les enfants qui peuvent surgir de devant ou de derrière ; ralentissez fortement et soyez prêt à vous arrêter.",expa:"الحافلة المدرسية تحجب الأطفال الظاهرين أمامها أو خلفها؛ خفّف كثيراً وكن مستعداً للتوقف."},
{id:'z069',theme:'usagers',img:'bus_arret',q:"Pour doubler un bus à l'arrêt en ville :",qa:"لتجاوز حافلة متوقفة في المدينة:",opts:[
 {f:"Le frôler",a:"الاقتراب منها"},
 {f:"Ralentir et passer en surveillant l'avant du bus",a:"التخفيف والمرور مع مراقبة مقدمها"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"En dépassant un bus à l'arrêt : ralentissez, surveillez l'espace devant le bus (piétons qui surgissent) et laissez une distance latérale.",expa:"عند تجاوز حافلة متوقفة: خفّف السرعة، راقب الفراغ أمامها (مشاة ظاهرون) واترك مسافة جانبية."},
{id:'z070',theme:'usagers',img:'agressif',q:"Si on vous insulte depuis un autre véhicule :",qa:"إذا شُتمت من مركبة أخرى:",opts:[
 {f:"Répondre",a:"الرد"},
 {f:"Ignorer, rester calme et poursuivre votre route",a:"التجاهل والهدوء وإكمال طريقك"},
 {f:"Descendre discuter",a:"النزول للنقاش"}],
ok:[1],exp:"Face à l'agressivité : ignorez, ne répondez pas, ne descendez pas ; si la menace persiste, mettez-vous à l'abri et appelez le 17.",expa:"أمام العدوانية: تجاهل، لا ترد، لا تنزل؛ إن استمر التهديد تحصّن واتصل بـ17."},
{id:'z071',theme:'usagers',img:'usagers_vulnerables',q:"Les usagers les plus vulnérables sont :",qa:"أكثر المستخدمين ضعفاً:",opts:[
 {f:"Les camions",a:"الشاحنات"},
 {f:"Les piétons et les cyclistes",a:"المشاة والدراجون"},
 {f:"Les SUV",a:"سيارات الدفع الرباعي"}],
ok:[1],exp:"Piétons et cyclistes n'ont aucune protection physique : ils représentent la part la plus vulnérable en cas d'accident.",expa:"المشاة والدراجون بلا حماية بدنية: يمثلون الفئة الأضعف عند حادث."},
{id:'z072',theme:'usagers',img:'rue_etroite',q:"Une rue en sens unique avec un cycliste devant :",qa:"شارع باتجاه واحد مع دراج أمامك:",opts:[
 {f:"Le dépasser en le poussant",a:"تجاوزه دافعاً"},
 {f:"Rester derrière à distance jusqu'à pouvoir passer en sécurité",a:"البقاء خلفه بمسافة حتى الإمكان بأمان"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"Si la rue est étroite, restez derrière le cycliste à distance ; ne dépassez que si vous pouvez garder au moins 1 m de distance latérale.",expa:"إن كان الشارع ضيقاً ابقَ خلف الدراج بمسافة؛ تجاوز فقط إن أمكن الحفاظ على متر جانبي على الأقل."},
// ===== CONDUCTEUR =====
{id:'z073',theme:'conducteur',img:'permis_a',q:"Le permis probatoire a un capital de :",qa:"الرخصة التجريبية رصيدها:",opts:[
 {f:"12 points",a:"12 نقطة"},
 {f:"6 points",a:"6 نقاط"},
 {f:"20 points",a:"20 نقطة"}],
ok:[1],exp:"Le permis probatoire dispose de 6 points (au lieu de 12) ; il passe à 12 après la période sans infraction.",expa:"الرخصة التجريبية رصيدها 6 نقاط (بدل 12)؛ تصبح 12 بعد الفترة بلا مخالفة."},
{id:'z074',theme:'conducteur',img:'permis_suspendu',q:"L'annulation du permis signifie :",qa:"إبطال الرخصة يعني:",opts:[
 {f:"Une suspension temporaire",a:"تعليق مؤقت"},
 {f:"Une invalidation définitive (re-passer le permis)",a:"إبطال نهائي (إعادة اجتياز الرخصة)"},
 {f:"Un avertissement",a:"تحذير"}],
ok:[1],exp:"L'annulation est définitive : après le délai d'interdiction de repasser le permis, il faut repasser l'examen complet (code + conduite).",expa:"الإبطال نهائي: بعد مدة منع إعادة الاجتياز، يجب اجتياز الامتحان كاملاً (نظرية + عملية)."},
{id:'z075',theme:'conducteur',img:'documents',q:"L'absence d'assurance en roulant est :",qa:"غياب التأمين أثناء السير هو:",opts:[
 {f:"Une simple infraction",a:"مجرد مخالفة"},
 {f:"Un délit",a:"جنحة"},
 {f:"Autorisé",a:"مسموح"}],
ok:[1],exp:"Conduire sans assurance est un délit : amende (jusqu'à 3 750 €), suspension/annulation du permis, confiscation du véhicule, et fonds de garantie à rembourser.",expa:"القيادة بلا تأمين جنحة: غرامة (حتى 3750€)، تعليق/إبطال الرخصة، مصادرة المركبة، ورد صندوق الضمان."},
{id:'z076',theme:'conducteur',img:'permis_b',q:"Avec le permis B, vous pouvez tracter une remorque :",qa:"برخصة B يمكنك سحب مقطورة:",opts:[
 {f:"De n'importe quel poids",a:"بأي وزن"},
 {f:"Jusqu'à 750 kg PTAC (ou plus si total ≤ 3,5 t)",a:"حتى 750كغ (أو أكثر إن كان المجموع ≤3.5طن)"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"Le permis B autorise une remorque de 750 kg PTAC max ; au-delà, l'ensemble véhicule+remorque doit rester ≤ 3,5 t ou nécessiter B96/BE.",expa:"رخصة B تسمح بمقطورة 750كغ وزناً إجمالياً كحد أقصى؛ فوقه يجب أن يبقى المجموع ≤3.5طن أو يتطلب B96/BE."},
{id:'z077',theme:'conducteur',img:'examen',q:"L'épreuve pratique dure environ :",qa:"الاختبار العملي يدوم تقريباً:",opts:[
 {f:"15 minutes",a:"15 دقيقة"},
 {f:"32 minutes",a:"32 دقيقة"},
 {f:"1 heure",a:"ساعة"}],
ok:[1],exp:"L'épreuve pratique du permis B dure environ 32 minutes (conduite + manœuvres + questions).",expa:"اختبار رخصة B العملي يدوم ~32 دقيقة (قيادة + مناورات + أسئلة)."},
{id:'z078',theme:'conducteur',img:'permis17',q:"Conduire seul à 17 ans avec le permis B :",qa:"القيادة منفرداً بعمر 17 برخصة B:",opts:[
 {f:"Impossible",a:"مستحيل"},
 {f:"Possible depuis 2024",a:"ممكن منذ 2024"},
 {f:"Toujours 18 ans",a:"دائماً 18"}],
ok:[1],exp:"Depuis le 1er janvier 2024, le permis B peut être obtenu dès 17 ans pour conduire seul en France (conditions identiques).",expa:"منذ 1 كانون الثاني 2024 يمكن الحصول على رخصة B من 17 سنة للقيادة منفرداً بفرنسا (شروط مماثلة)."},
{id:'z079',theme:'conducteur',img:'assurance',q:"Le bonus-malus (coefficient de réduction majoration) :",qa:"البونس-مالوس (معامل التخفيض والزيادة):",opts:[
 {f:"Récompense la conduite sans accident",a:"يكافئ القيادة بلا حوادث"},
 {f:"Punit toujours",a:"يعاقب دائماً"},
 {f:"N'existe pas",a:"غير موجود"}],
ok:[0],exp:"Le bonus-malus réduit la prime d'assurance pour les bons conducteurs (bonus jusqu'à -50 %) et l'augmente après des accidents responsables (malus).",expa:"البونس-مالوس يخفض قسط التأمين للسائقين الجيدين (حتى -50%) ويزيده بعد الحوادث المسؤولة (مالوس)."},
{id:'z080',theme:'conducteur',img:'permis_points',q:"Un excès de vitesse de +30 km/h retire :",qa:"تجاوز السرعة بـ+30كم/س يسحب:",opts:[
 {f:"1 point",a:"نقطة"},
 {f:"3 points",a:"3 نقاط"},
 {f:"6 points",a:"6 نقاط"}],
ok:[1],exp:"L'excès de vitesse entre +30 et +39 km/h retire 3 points ; +40/+49 = 4 points ; ≥+50 = 6 points.",expa:"تجاوز السرعة بين +30 و+39كم/س يسحب 3 نقاط؛ +40/+49 = 4؛ ≥+50 = 6."},
{id:'z081',theme:'conducteur',img:'permis_international',q:"En Europe (UE/EEE), votre permis français :",qa:"في أوروبا (الاتحاد)، رخصتك الفرنسية:",opts:[
 {f:"N'est pas valable",a:"غير صالحة"},
 {f:"Est valable sans permis international",a:"صالحة بلا رخصة دولية"},
 {f:"Doit être échangée",a:"يجب استبدالها"}],
ok:[1],exp:"Le permis français est reconnu dans toute l'UE/EEE ; le permis international n'est utile que pour conduire dans les pays hors UE.",expa:"الرخصة الفرنسية معترف بها في كل الاتحاد/المنطقة الاقتصادية؛ الدولية تفيد فقط خارج الاتحاد."},
{id:'z082',theme:'conducteur',img:'maison_adresse',q:"Le changement d'adresse est obligatoire dans :",qa:"تغيير العنوان إجباري خلال:",opts:[
 {f:"1 mois",a:"شهر"},
 {f:"3 mois",a:"3 أشهر"},
 {f:"1 an",a:"سنة"}],
ok:[0],exp:"Le changement d'adresse sur le certificat d'immatriculation est obligatoire dans le mois suivant le déménagement.",expa:"تغيير العنوان على شهادة التسجيل إجباري خلال شهر من الانتقال."},
// ===== ENVIRONNEMENT =====
{id:'z083',theme:'environnement',img:'eco_feuille',q:"La conduite anticipée consiste à :",qa:"القيادة المتوقعة تعني:",opts:[
 {f:"Regarder loin et anticiper les ralentissements",a:"النظر بعيداً وتوقع التباطؤات"},
 {f:"Freiner fort",a:"الفرملة بقوة"},
 {f:"Accélérer",a:"التسارع"}],
ok:[0],exp:"Anticiper = regarder loin devant, lever le pied tôt plutôt que freiner fort, garder le cap pour fluidifier et économiser.",expa:"التوقع = النظر بعيداً أمام، رفع القدم مبكراً بدل الفرملة القوية، الثبات للسلاسة والتوفير."},
{id:'z084',theme:'environnement',img:'start_stop',q:"Le Start & Stop économise surtout en :",qa:"Start & Stop يوفر خاصة في:",opts:[
 {f:"Autoroute",a:"أوتوروت"},
 {f:"Ville (arrêts fréquents)",a:"المدينة (توقفات متكررة)"},
 {f:"Montagne",a:"الجبل"}],
ok:[1],exp:"Le Start & Stop est le plus efficace en ville où les arrêts sont fréquents (feux, bouchons, stops) : il coupe le moteur inutilement tournant.",expa:"Start & Stop أنجع في المدينة حيث التوقفات متكررة (أضواء، ازدحام، وقف): يطفئ المحرك الدائر بلا فائدة."},
{id:'z085',theme:'environnement',img:'covoiturage',q:"Une voiture avec 4 personnes en covoiturage :",qa:"سيارة بـ4 أشخاص مشاركة:",opts:[
 {f:"Émet autant que 4 voitures",a:"تنبعث بقدر 4 سيارات"},
 {f:"Divise les émissions par personne",a:"تقسم الانبعاثات للشخص"},
 {f:"Pollue plus",a:"تلوث أكثر"}],
ok:[1],exp:"Le covoiturage mutualise le trajet : moins de voitures, émissions par personne réduites et frais partagés.",expa:"المشاركة تتشارك الرحلة: سيارات أقل وانبعاثات أقل للشخص وتكاليف مقسمة."},
{id:'z086',theme:'environnement',img:'filtre_air',q:"Un entretien régulier comprend :",qa:"الصيانة المنتظمة تشمل:",opts:[
 {f:"Filtre à air, bougies, huile, pneus",a:"فلتر هواء وشمعات وزيت وإطارات"},
 {f:"Lavage uniquement",a:"غسيل فقط"},
 {f:"Rien",a:"لا شيء"}],
ok:[0],exp:"L'entretien régulier (filtres, huile, bougies, pression des pneus) garantit consommation optimale, sécurité et durée de vie du véhicule.",expa:"الصيانة المنتظمة (فلاتر، زيت، شمعات، ضغط إطارات) تضمن استهلاكاً أمثلاً وسلامة وعمراً للمركبة."},
{id:'z087',theme:'environnement',img:'frein_moteur',q:"Descendre en roue libre (point mort) :",qa:"النزول على محايد:",opts:[
 {f:"Économise du carburant",a:"يوفر وقوداً"},
 {f:"Est dangereux (perte du frein moteur, usure des freins)",a:"خطير (فقدان فرامل المحرك، تآكل الفرامل)"},
 {f:"Recommandé",a:"مستحسن"}],
ok:[1],exp:"Rouler au point mort fait perdre le frein moteur : freins de service sollicités en continu qui surchauffent — utilisez plutôt un rapport engagé.",expa:"السير على محايد يفقد فرامل المحرك: الفرامل الرئيسية مجهدة باستمرار تسخن — استخدم ترساً مركباً بدلاً منه."},
{id:'z088',theme:'environnement',img:'bruit',q:"Le bruit moteur augmente principalement avec :",qa:"ضجيج المحرك يزداد أساساً مع:",opts:[
 {f:"La vitesse et le régime moteur",a:"السرعة ودورات المحرك"},
 {f:"La couleur",a:"اللون"},
 {f:"Le climat",a:"المناخ"}],
ok:[0],exp:"Le bruit moteur dépend du régime et de la vitesse ; une conduite à bas régime et vitesse modérée limite la pollution sonore.",expa:"ضجيج المحرك يعتمد على الدورات والسرعة؛ قيادة بدورات منخفضة وسرعة معتدلة تحد التلوث الضوضائي."},
// ===== SECOURS =====
{id:'z089',theme:'secours',img:'accident_scene',q:"Sur un accident, ne pas s'arrêter pour porter assistance est :",qa:"عند حادث، عدم التوقف للمساعدة هو:",opts:[
 {f:"Un droit",a:"حق"},
 {f:"Une non-assistance à personne en danger (délit)",a:"عدم إغاثة شخص في خطر (جنحة)"},
 {f:"Recommandé",a:"مستحسن"}],
ok:[1],exp:"La non-assistance à personne en danger est un délit : vous devez vous arrêter, protéger et alerter dans la limite de vos moyens.",expa:"عدم إغاثة شخص في خطر جنحة: يجب التوقف والحماية والإنذار ضمن إمكاناتك."},
{id:'z090',theme:'secours',img:'tel_urgence',q:"Le 112 fonctionne :",qa:"112 يعمل:",opts:[
 {f:"Seulement en France",a:"فقط في فرنسا"},
 {f:"Dans toute l'Union européenne, gratuit",a:"في كل الاتحاد الأوروبي، مجاناً"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"Le 112 est le numéro d'urgence européen, gratuit, joignable dans tous les pays de l'UE depuis n'importe quel téléphone.",expa:"112 رقم الطوارئ الأوروبي مجاني، يمكن الاتصال به من أي هاتف في كل دول الاتحاد."},
{id:'z091',theme:'secours',img:'compression',q:"Un garrot ne se pose que :",qa:"الرباط لا يوضع إلا:",opts:[
 {f:"Toujours",a:"دائماً"},
 {f:"En dernier recours sur un membre si la compression échoue",a:"كحل أخير على طرف إن فشل الضغط"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"Le garrot est une mesure exceptionnelle sur un membre, quand la compression directe ne suffit pas ; noter l'heure de pose.",expa:"الرباط إجراء استثنائي على طرف عندما لا يكفي الضغط المباشر؛ سجّل وقت وضعه."},
{id:'z092',theme:'secours',img:'pls',q:"La PLS se fait sur :",qa:"وضعية الأمان تُنفذ على:",opts:[
 {f:"Le dos",a:"الظهر"},
 {f:"Le côté",a:"الجنب"},
 {f:"Le ventre",a:"البطن"}],
ok:[1],exp:"La PLS met la victime inconsciente mais respirante sur le côté (latéral de sécurité) : les voies aériennes restent dégagées.",expa:"وضعية الأمان تضع الضحية الفاقدة الوعي المتنفسة على جنبها (جانب أمان): يبقى مجرى الهواء مفتوحاً."},
{id:'z093',theme:'secours',img:'massage',q:"Le massage cardiaque se fait :",qa:"تدليك القلب يُجرى:",opts:[
 {f:"Sur le ventre",a:"على البطن"},
 {f:"Au centre de la poitrine, bras tendus",a:"وسط الصدر بذراعين مستقيمتين"},
 {f:"Sur la tête",a:"على الرأس"}],
ok:[1],exp:"Positionnez le talon d'une main au centre de la poitrine (entre les seins), l'autre main par-dessus, bras tendus, et comprimez 5-6 cm de profondeur.",expa:"ضع كعب يد وسط الصدر (بين الثديين)، اليد الأخرى فوقها، ذراعان مستقيمتان، واضغط بعمق 5-6سم."},
{id:'z094',theme:'secours',img:'incendie',q:"En cas d'incendie dans un tunnel, vous devez :",qa:"عند حريق في نفق يجب:",opts:[
 {f:"Attendre dans la voiture",a:"الانتظار في السيارة"},
 {f:"Évacuer immédiatement vers les issues de secours",a:"الإخلاء فوراً نحو مخارج الطوارئ"},
 {f:"Continuer",a:"الاستمرار"}],
ok:[1],exp:"En cas d'incendie en tunnel : évacuez immédiatement vers les issues de secours signalées par les panneaux verts lumineux, sans attendre.",expa:"عند حريق في نفق: أخلِ فوراً نحو مخارج الطوارئ المعلنة باللوحات الخضراء المضيئة، بلا انتظار."}
);
