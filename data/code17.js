window.CODE_DATA.push(
// ===== SIGNALISATION =====
{id:'m001',theme:'signalisation',img:'danger',q:"Ce panneau de danger vous informe :",qa:"لوحة الخطر هذه تُعلمك بـ:",opts:[
 {f:"D'un danger particulier précis",a:"خطر محدد ومعروف"},
 {f:"D'un danger dont la nature n'est pas précisée",a:"خطر غير محدد طبيعته"},
 {f:"D'une interdiction",a:"منع"}],
ok:[1],exp:"Le panneau 'autres dangers' (triangle avec point d'exclamation) signale un danger non représenté par un panneau spécifique.",expa:"لوحة 'أخطار أخرى' (مثلث مع علامة تعجب) تُحذّر من خطر غير مذكور في لوحة مخصصة."},
{id:'m002',theme:'signalisation',img:'hauteur',q:"Ce panneau indique :",qa:"هذه اللوحة تشير إلى:",opts:[
 {f:"Une interdiction aux véhicules de plus de 3,5 tonnes",a:"منع المركبات فوق 3.5 طن"},
 {f:"Une limitation de hauteur",a:"تحديد للارتفاع"},
 {f:"Un tunnel obligatoire",a:"نفق إجباري"}],
ok:[1],exp:"Le panneau avec les flèches verticales interdit le passage aux véhicules dont la hauteur dépasse la valeur indiquée.",expa:"لوحة الأسهم العمودية تمنع مرور المركبات التي يتجاوز ارتفاعها القيمة المكتوبة."},
{id:'m003',theme:'signalisation',img:'poids',q:"Ce panneau interdit l'accès :",qa:"هذه اللوحة تمنع دخول:",opts:[
 {f:"Aux véhicules de plus de 3,5 m de haut",a:"المركبات أعلى من 3.5 م"},
 {f:"Aux véhicules dont le poids total dépasse la limite indiquée",a:"المركبات التي يتجاوز وزنها الإجمالي الحد المكتوب"},
 {f:"Aux camions uniquement la nuit",a:"الشاحنات ليلاً فقط"}],
ok:[1],exp:"Le panneau rond avec un camion indique une limitation de poids (PTAC) en tonnes.",expa:"اللوحة الدائرية مع شاحنة تُحدد وزناً أقصى مسموحاً بالأطنان."},
{id:'m004',theme:'signalisation',img:'fininterdictions',q:"Ce panneau signifie :",qa:"هذه اللوحة تعني:",opts:[
 {f:"Début de toutes les interdictions",a:"بداية كل المنع"},
 {f:"Fin de toutes les interdictions locales",a:"نهاية كل الممنوعات المحلية"},
 {f:"Fin de limitation de vitesse uniquement",a:"نهاية تحديد السرعة فقط"}],
ok:[1],exp:"Le panneau barré de traits obliques avec 'FIN DE...' ou sans texte marque la fin des interdictions signalées dans la zone.",expa:"اللوحة المشطوبة بخطوط مائلة تُنهي الممنوعات المعلنة في المنطقة."},
{id:'m005',theme:'signalisation',img:'cassis',q:"Ce panneau vous avertit de :",qa:"هذه اللوحة تحذّرك من:",opts:[
 {f:"Une descente dangereuse",a:"منحدر خطير"},
 {f:"Un cassis ou dos-d'âne",a:"مطب أو حدبة"},
 {f:"Un virage",a:"منعطف"}],
ok:[1],exp:"Le panneau 'cassis' signale une déformation de la chaussée (creux ou bosse) pouvant endommager le véhicule.",expa:"لوحة 'المطب' تُحذّر من تشوّه في الطريق (حفرة أو حدبة) قد يتلف المركبة."},
{id:'m006',theme:'signalisation',img:'tunnel',q:"À l'approche de ce panneau, vous devez :",qa:"عند اقترابك من هذه اللوحة يجب:",opts:[
 {f:"Éteindre les feux",a:"إطفاء الأضواء"},
 {f:"Allumer les feux de croisement et retirer les lunettes de soleil",a:"تشغيل أضواء الوضع/الالتقاء وخلع النظارة الشمسية"},
 {f:"Accélérer",a:"التسارع"}],
ok:[1],exp:"Dans un tunnel, les feux de croisement sont obligatoires et il faut respecter une distance de sécurité plus grande.",expa:"في النفق، أضواء الالتقاء إجبارية ويجب زيادة مسافة الأمان."},
{id:'m007',theme:'signalisation',img:'voiebus',q:"Cette voie est réservée :",qa:"هذا المسار مخصص لـ:",opts:[
 {f:"Tous les véhicules",a:"كل المركبات"},
 {f:"Aux autobus (et parfois taxis et vélos si indiqué)",a:"الحافلات (وأحياناً التاكسي والدراجات إن ذُكر)"},
 {f:"Aux camions",a:"الشاحنات"}],
ok:[1],exp:"Une voie marquée 'BUS' est réservée aux transports en commun ; d'autres usagers peuvent y être admis si le panneau le précise.",expa:"المسار المكتوب عليه BUS مخصص للنقل العام؛ وقد يُسمح لآخرين إن نصت اللوحة."},
{id:'m008',theme:'signalisation',img:'finpriorite',q:"Ce panneau indique :",qa:"هذه اللوحة تشير إلى:",opts:[
 {f:"Le début d'une route prioritaire",a:"بداية طريق ذات أولوية"},
 {f:"La fin d'une route à priorité",a:"نهاية طريق ذات أولوية"},
 {f:"Une route sans issue",a:"طريق مسدود"}],
ok:[1],exp:"Le losange jaune barré marque la fin du caractère prioritaire de la route : la priorité à droite s'applique à nouveau sauf signalisation contraire.",expa:"المعين الأصفر المشطوب ينهي أولوية الطريق؛ تعود قاعدة أولوية اليمين ما لم تُشر إشارات مخالفة."},
{id:'m009',theme:'signalisation',img:'nonpriorite',q:"Ce panneau signifie :",qa:"هذه اللوحة تعني:",opts:[
 {f:"Route prioritaire",a:"طريق ذات أولوية"},
 {f:"Route non prioritaire",a:"طريق غير ذات أولوية"},
 {f:"Sens interdit",a:"منع اتجاه"}],
ok:[1],exp:"Le losange jaune barré d'une croix noire indique que la route que vous empruntez n'est pas prioritaire.",expa:"المعين الأصفر المشطوب بخط أسود يعني أن الطريق الذي تسير فيه غير ذي أولوية."},
{id:'m010',theme:'signalisation',img:'verglas',q:"Ce panneau signale un risque de :",qa:"هذه اللوحة تُحذّر من خطر:",opts:[
 {f:"Pluie",a:"مطر"},
 {f:"Verglas ou neige",a:"جليد أو ثلج"},
 {f:"Brouillard",a:"ضباب"}],
ok:[1],exp:"Ce panneau avertit d'une chaussée sujette au verglas : réduire la vitesse et éviter les freinages brusques.",expa:"تُحذّر من طريق معرّض للجليد: خفّف السرعة وتجنّب الفرملة المفاجئة."},
{id:'m011',theme:'signalisation',img:'retrecit',q:"Ce panneau vous informe de :",qa:"هذه اللوحة تُعلمك بـ:",opts:[
 {f:"Un rétrécissement de la chaussée",a:"تضيّق في الطريق"},
 {f:"Une fin de voie",a:"نهاية مسار"},
 {f:"Un sens unique",a:"اتجاه واحد"}],
ok:[0],exp:"Le panneau 'rétrécissement' signale que la chaussée devient plus étroite d'un côté ou des deux ; cédez le passage aux véhicules venant en face si nécessaire.",expa:"لوحة 'التضيّق' تُنبّه لضيق الطريق من جهة أو الجهتين؛ أعطِ الأولوية للقادمين عند الحاجة."},
{id:'m012',theme:'signalisation',img:'giratoire',q:"Ce panneau signale :",qa:"هذه اللوحة تُشير إلى:",opts:[
 {f:"Un carrefour giratoire où vous êtes prioritaire",a:"دوّار تكون فيه صاحب الأولوية"},
 {f:"Un carrefour giratoire où vous devez céder le passage",a:"دوّار يجب فيه إعطاء الأولوية"},
 {f:"Un parking circulaire",a:"موقف دائري"}],
ok:[1],exp:"Au carrefour giratoire, les usagers engagés dans l'anneau sont prioritaires ; cédez le passage à gauche avant d'entrer.",expa:"في الدوّار، من هم داخله لهم الأولوية؛ أعطِ الأولوية للقادمين من اليسار قبل الدخول."},
{id:'m013',theme:'signalisation',img:'giratoire_obl',q:"Ce panneau vous oblige à :",qa:"هذه اللوحة تُلزمك بـ:",opts:[
 {f:"Contourner l'obstacle par la droite",a:"تجاوز العائق من اليمين"},
 {f:"Tourner à droite",a:"الانعطاف يميناً"},
 {f:"Faire demi-tour",a:"الدوران للخلف"}],
ok:[0],exp:"Le panneau rond bleu avec flèches circulaires impose de contourner l'obstacle central par la droite (carrefour giratoire obligatoire).",expa:"اللوحة الزرقاء بأسهم دائرية تُلزم بتجاوز الجزيرة المركزية من اليمين (دوّار إجباري)."},
{id:'m014',theme:'signalisation',img:'sensunique',q:"Ce panneau indique :",qa:"هذه اللوحة تشير إلى:",opts:[
 {f:"Une voie à sens unique",a:"طريق باتجاه واحد"},
 {f:"Un sens interdit",a:"منع اتجاه"},
 {f:"Une autoroute",a:"طريق سريع"}],
ok:[0],exp:"Le panneau rectangulaire bleu avec flèche indique une voie à sens unique : la circulation se fait uniquement dans le sens de la flèche.",expa:"اللوحة الزرقاء المستطيلة بسهم تعني طريقاً باتجاه واحد: السير فقط باتجاه السهم."},
{id:'m015',theme:'signalisation',img:'autoroute',q:"Ce panneau annonce :",qa:"هذه اللوحة تُعلن عن:",opts:[
 {f:"Une route express",a:"طريق سريع عادي"},
 {f:"Une autoroute",a:"أوتوروت (طريق سريع)"},
 {f:"Une fin de limitation",a:"نهاية تحديد"}],
ok:[1],exp:"Le panneau autoroute (fond bleu, silhouette d'autoroute) marque l'entrée d'une autoroute : règles particulières (130 km/h, pas de demi-tour, pas de marche arrière).",expa:"لوحة الأوتوروت (أزرق مع جسر) تعني دخول طريقاً سريعاً بقواعد خاصة: 130 كم/س، ممنوع الدوران والرجوع."},
{id:'m016',theme:'signalisation',img:'parking',q:"Ce panneau indique :",qa:"هذه اللوحة تشير إلى:",opts:[
 {f:"Une aire de stationnement",a:"موقف سيارات"},
 {f:"Un arrêt obligatoire",a:"وقفة إجبارية"},
 {f:"Une zone piétonne",a:"منطقة مشاة"}],
ok:[0],exp:"Le panneau 'P' bleu signale un parc de stationnement ; des panonceaux peuvent préciser les conditions (payant, réservé, etc.).",expa:"لوحة 'P' الزرقاء تدل على موقف؛ لوحات إضافية قد توضح الشروط (مدفوع، مخصص...)."},
{id:'m017',theme:'signalisation',img:'enfants',q:"Ce panneau vous avertit de la présence fréquente :",qa:"هذه اللوحة تحذّر من وجود متكرر لـ:",opts:[
 {f:"Piétons âgés",a:"مشاة مسنين"},
 {f:"Enfants",a:"أطفال"},
 {f:"Cyclistes",a:"دراجين"}],
ok:[1],exp:"Le panneau 'enfants' signale un lieu fréquenté par des enfants (école, terrain de jeu) : ralentissez et redoublez de vigilance.",expa:"لوحة 'الأطفال' تُنبّه لمكان يرتاده أطفال (مدرسة، ملعب): خفّف السرعة وانتبه كثيراً."},
{id:'m018',theme:'signalisation',img:'animaux',q:"Ce panneau signale le passage possible :",qa:"هذه اللوحة تُحذّر من احتمال عبور:",opts:[
 {f:"Animaux domestiques",a:"حيوانات أليفة"},
 {f:"Animaux sauvages",a:"حيوانات برية"},
 {f:"Piétons",a:"مشاة"}],
ok:[1],exp:"Le panneau avec un cerf signale la traversée possible d'animaux sauvages ; le panneau avec une vache concerne les animaux domestiques.",expa:"اللوحة مع غزال تُحذّر من عبور حيوانات برية؛ اللوحة مع بقرة تخص الحيوانات الأليفة."},
{id:'m019',theme:'signalisation',img:'travaux',q:"Ce panneau vous informe de :",qa:"هذه اللوحة تُعلمك بـ:",opts:[
 {f:"Travaux sur la chaussée",a:"أشغال على الطريق"},
 {f:"Un danger de chute de pierres",a:"خطر تساقط حجارة"},
 {f:"Une zone industrielle",a:"منطقة صناعية"}],
ok:[0],exp:"Le panneau 'travaux' annonce un chantier : ralentissez, suivez la signalisation temporaire (jaune) qui prime sur la permanente.",expa:"لوحة 'الأشغال' تُنبّه لورشة: خفّف السرعة واتبع الإشارات المؤقتة (الصفراء) التي تتغلب على الدائمة."},
{id:'m020',theme:'signalisation',img:'pente',q:"Ce panneau signale :",qa:"هذه اللوحة تُشير إلى:",opts:[
 {f:"Une montée",a:"صعود"},
 {f:"Une descente dangereuse",a:"نزول خطير"},
 {f:"Une bosse",a:"حدبة"}],
ok:[1],exp:"Le panneau avec un pourcentage indique une descente dangereuse (ou montée si la pente monte) : utilisez le frein moteur.",expa:"اللوحة مع نسبة مئوية تُنبّه لنزول خطير (أو صعود حسب الاتجاه): استعمل فرامل المحرك."},
// ===== PRIORITES =====
{id:'m021',theme:'priorites',img:'prio_droite',q:"À ce carrefour sans signalisation, vous devez :",qa:"عند هذا التقاطع بلا إشارات يجب:",opts:[
 {f:"Passer en premier",a:"المرور أولاً"},
 {f:"Céder le passage à droite",a:"إعطاء الأولوية لليمين"},
 {f:"Céder le passage à gauche",a:"إعطاء الأولوية لليسار"}],
ok:[1],exp:"En l'absence de signalisation, la règle est la priorité à droite : cédez le passage aux usagers venant de votre droite.",expa:"بدون إشارات تطبق قاعدة أولوية اليمين: أعطِ الأولوية للقادمين من يمينك."},
{id:'m022',theme:'priorites',img:'prio_droite_gauche',q:"Deux véhicules arrivent en même temps à un carrefour ; celui qui doit passer en premier est :",qa:"مركبتان تصلان معاً؛ من يمر أولاً:",opts:[
 {f:"Celui qui va tout droit",a:"من يسير مستقيماً"},
 {f:"Celui qui vient de la droite de l'autre",a:"القادم من يمين الآخر"},
 {f:"Le plus rapide",a:"الأسرع"}],
ok:[1],exp:"À égalité, c'est l'usager venant de la droite de l'autre qui est prioritaire.",expa:"عند التساوي، الأولوية للقادم من يمين الآخر."},
{id:'m023',theme:'priorites',img:'cedez',q:"Face à ce panneau, vous devez :",qa:"أمام هذه اللوحة يجب:",opts:[
 {f:"Marquer un arrêt obligatoire",a:"التوقف إجبارياً"},
 {f:"Céder le passage sans arrêt obligatoire",a:"إعطاء الأولوية بدون توقف إجباري"},
 {f:"Accélérer",a:"التسارع"}],
ok:[1],exp:"'Cédez le passage' impose de laisser passer les usagers de la route croisée ; l'arrêt n'est obligatoire que si la circulation l'exige.",expa:"'أعطِ الأولوية' يُلزم بترك مستخدمي الطريق المتقاطع يمرون؛ التوقف إجباري فقط إذا لزم."},
{id:'m024',theme:'priorites',img:'stop',q:"Au panneau STOP, vous devez :",qa:"عند لوحة STOP يجب:",opts:[
 {f:"Ralentir seulement",a:"التخفيف فقط"},
 {f:"Marquer un arrêt complet à la limite de la chaussée croisée",a:"التوقف الكامل عند حد الطريق المتقاطع"},
 {f:"Céder le passage uniquement aux piétons",a:"إعطاء الأولوية للمشاة فقط"}],
ok:[1],exp:"Le panneau STOP impose un arrêt obligatoire, même si la voie est libre : arrêtez-vous à la ligne d'arrêt ou à la limite de la chaussée.",expa:"لوحة STOP تُلزم بالتوقف الكامل حتى لو كان الطريق فارغاً: توقّف عند خط التوقف أو حد الطريق."},
{id:'m025',theme:'priorites',img:'passagepieton',q:"Vous abordez un passage piéton ; un piéton s'engage :",qa:"تقترب من ممر مشاة؛ مشاة يبدأ العبور:",opts:[
 {f:"Je klaxonne pour qu'il attende",a:"أنفّر حتى ينتظر"},
 {f:"Je m'arrête pour le laisser passer",a:"أتوقف لأتركه يمر"},
 {f:"Je passe s'il n'est pas encore sur ma voie",a:"أمر إن لم يصل مساري بعد"}],
ok:[1],exp:"Le conducteur doit céder le passage à tout piéton s'engageant régulièrement dans la traversée de la chaussée.",expa:"يجب على السائق إعطاء الأولوية لأي مشاة بدأ العبور بانتظام."},
{id:'m026',theme:'priorites',img:'gyrophare',q:"Un véhicule d'intervention arrive avec gyrophare et sirène ; vous devez :",qa:"مركبة تدخل بأضواء وصفارة تقترب؛ يجب:",opts:[
 {f:"Continuer normalement",a:"الاستمرار عادياً"},
 {f:"Faciliter son passage",a:"تسهيل مرورها"},
 {f:"Lui couper la route pour le laisser doubler",a:"قطع الطريق عليها"}],
ok:[1],exp:"Il faut faciliter le passage des véhicules d'intérêt général prioritaires (ambulance, pompier, police) signalés par gyrophare et avertisseur sonore.",expa:"يجب تسهيل مرور مركبات الطوارئ المميزة (إسعاف، إطفاء، شرطة) المعلنة بأضواء وصفارة."},
{id:'m027',theme:'priorites',img:'turn_left',q:"En tournant à gauche à un carrefour, vous devez céder le passage :",qa:"عند الانعطاف يساراً يجب إعطاء الأولوية لـ:",opts:[
 {f:"Personne",a:"لا أحد"},
 {f:"Aux véhicules venant en face qui vont tout droit",a:"القادمين من الأمام المستمرين مستقيماً"},
 {f:"Aux véhicules derrière vous",a:"المركبات خلفك"}],
ok:[1],exp:"Celui qui change de direction (tourne à gauche) doit céder le passage aux usagers venant en sens inverse allant tout droit ou tournant à droite.",expa:"من يغيّر اتجاهه (ينعطف يساراً) يجب أن يعطي الأولوية للقادمين من الأمام المستمرين أو المنعطفين يميناً."},
{id:'m028',theme:'priorites',img:'priorite',q:"Ce panneau vous indique :",qa:"هذه اللوحة تُعلمك بـ:",opts:[
 {f:"Que vous êtes sur une route prioritaire",a:"أنك على طريق ذات أولوية"},
 {f:"Que vous devez céder le passage",a:"أنك يجب أن تعطي الأولوية"},
 {f:"Une fin de route prioritaire",a:"نهاية طريق أولوية"}],
ok:[0],exp:"Le losange jaune indique que vous êtes sur une route à caractère prioritaire : les usagers des routes secondaires doivent vous céder le passage.",expa:"المعين الأصفر يعني أنك على طريق ذات أولوية: مستخدمو الطرق الفرعية يجب أن يعطوك الأولوية."},
{id:'m029',theme:'priorites',img:'agent',q:"Un agent de circulation lève le bras ; vous devez :",qa:"شرطي مرور يرفع ذراعه؛ يجب:",opts:[
 {f:"Continuer",a:"الاستمرار"},
 {f:"Vous arrêter",a:"التوقف"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"Les ordres des agents de circulation priment sur tous les autres signaux : bras levé = arrêt obligatoire.",expa:"أوامر شرطي المرور تتغلب على كل الإشارات: الذراع المرفوعة = توقف إجباري."},
{id:'m030',theme:'priorites',img:'cedez_line',q:"La ligne de cédez-le-passage (triangles) vous oblige à :",qa:"خط 'أعطِ الأولوية' (مثلثات) يُلزمك بـ:",opts:[
 {f:"Marquer un arrêt systématique",a:"توقف دائم"},
 {f:"Céder le passage aux usagers de la route croisée",a:"إعطاء الأولوية لمستخدمي الطريق المتقاطع"},
 {f:"Rien, elle est indicative",a:"لا شيء، استرشادية فقط"}],
ok:[1],exp:"La ligne de triangles blancs au sol matérialise l'endroit où vous devez céder le passage ; arrêt non obligatoire si la voie est libre.",expa:"خط المثلثات البيضاء يُحدد مكان إعطاء الأولوية؛ التوقف غير إجباري إن كان الطريق فارغاً."},
// ===== CIRCULATION =====
{id:'m031',theme:'circulation',img:'distance_2s',q:"En règle générale, la distance de sécurité correspond à :",qa:"قاعدة عامة، مسافة الأمان تساوي:",opts:[
 {f:"1 seconde",a:"ثانية واحدة"},
 {f:"2 secondes",a:"ثانيتين"},
 {f:"10 mètres",a:"10 أمتار"}],
ok:[1],exp:"Laissez au moins 2 secondes d'intervalle avec le véhicule qui vous précède (repère fixe : quand il passe un point, comptez 'un crocodile, deux crocodiles').",expa:"اترك ثانيتين على الأقل مع المركبة الأمامية (علامة ثابتة: عندما تمر بنقطة، عدّ 'تمساح، تمساحان')."},
{id:'m032',theme:'circulation',img:'depassement',q:"Pour dépasser un véhicule, vous devez vérifier :",qa:"لتجاوز مركبة يجب التحقق من:",opts:[
 {f:"Rétroviseur intérieur seulement",a:"المرآة الداخلية فقط"},
 {f:"Rétroviseurs intérieur et extérieur + angle mort",a:"المرايا الداخلية والخارجية + النقطة العمياء"},
 {f:"Compteur de vitesse",a:"عداد السرعة"}],
ok:[1],exp:"Avant tout dépassement : contrôlez les rétroviseurs, vérifiez l'angle mort, signalez votre intention et assurez-vous d'avoir la visibilité nécessaire.",expa:"قبل كل تجاوز: افحص المرايا، تحقق من النقطة العمياء، وأشر إلى نيتك وتأكد من الرؤية الكافية."},
{id:'m033',theme:'circulation',img:'angle_mort',q:"L'angle mort est :",qa:"النقطة العمياء هي:",opts:[
 {f:"La zone éclairée par les phares",a:"المنطقة المضاءة بالمصابيح"},
 {f:"La zone non visible dans les rétroviseurs",a:"المنطقة غير المرئية في المرايا"},
 {f:"L'espace devant le capot",a:"الحيّز أمام غطاء المحرك"}],
ok:[1],exp:"L'angle mort est la zone que ni le regard direct ni les rétroviseurs ne couvrent : un rapide coup d'œil par-dessus l'épaule est indispensable avant de changer de file.",expa:"النقطة العمياء هي المنطقة التي لا تغطيها النظرة المباشرة ولا المرايا: نظرة سريعة فوق الكتف ضرورية قبل تغيير المسار."},
{id:'m034',theme:'circulation',img:'position_droite',q:"Sur une route à double sens, vous devez circuler :",qa:"على طريق باتجاهين يجب السير:",opts:[
 {f:"Au milieu de la chaussée",a:"وسط الطريق"},
 {f:"À droite",a:"على اليمين"},
 {f:"À gauche",a:"على اليسار"}],
ok:[1],exp:"En France, on circule à droite ; la gauche n'est utilisée que pour les dépassements ou si la signalisation l'impose.",expa:"في فرنسا السير على اليمين؛ اليسار يُستخدم للتجاوز فقط أو إذا أمرت الإشارات."},
{id:'m035',theme:'circulation',img:'voies_rondpoint',q:"Dans un carrefour giratoire, pour sortir, vous devez :",qa:"داخل دوّار، للخروج يجب:",opts:[
 {f:"Mettre le clignotant à droite et vous placer sur la voie de droite",a:"وضع إشارة اليمين والانتقال للمسار الأيمن"},
 {f:"Sortir depuis n'importe quelle voie",a:"الخروج من أي مسار"},
 {f:"S'arrêter dans l'anneau",a:"التوقف داخل الدوّار"}],
ok:[0],exp:"Pour sortir d'un giratoire : signalez avec le clignotant droit dès la sortie précédente et rabattez-vous progressivement sur la voie de droite.",expa:"للخروج من دوّار: أشر بإشارة اليمين من المخرج السابق وانتقل تدريجياً للمسار الأيمن."},
{id:'m036',theme:'circulation',img:'ligne_continue',q:"Une ligne blanche continue au sol signifie :",qa:"خط أبيض متصل على الطريق يعني:",opts:[
 {f:"Vous pouvez la franchir pour dépasser",a:"يمكن تجاوزه للسبق"},
 {f:"Interdiction de la franchir ou de la chevaucher",a:"منع تجاوزه أو السير عليه"},
 {f:"Une zone de stationnement",a:"منطقة وقوف"}],
ok:[1],exp:"La ligne continue interdit de la franchir ou de la chevaucher (dépassement interdit) sauf pour éviter un obstacle fixe ou un arrêt d'urgence.",expa:"الخط المتصل يمنع تجاوزه أو السير عليه (منع التجاوز) إلا لتجنّب عائق ثابت أو توقف طارئ."},
{id:'m037',theme:'circulation',img:'feux_detresse',q:"Vous utilisez les feux de détresse :",qa:"تستخدم أضواء الخطر:",opts:[
 {f:"Pour remercier un autre conducteur",a:"لشكر سائق آخر"},
 {f:"En cas d'immobilisation d'urgence ou de panne",a:"عند توقف طارئ أو عطل"},
 {f:"Pour signaler un excès de vitesse",a:"للإشارة لتجاوز السرعة"}],
ok:[1],exp:"Les feux de détresse (warnings) signalent une immobilisation exceptionnelle, un danger ou un ralentissement brutal ; ils ne doivent pas être utilisés en remerciement.",expa:"أضواء الخطر تُستخدم عند توقف استثنائي أو خطر أو تباطؤ مفاجئ؛ لا تُستخدم للشكر."},
{id:'m038',theme:'circulation',img:'brouillard',q:"Par brouillard dense, vous allumez :",qa:"في الضباب الكثيف تشغّل:",opts:[
 {f:"Les feux de route",a:"أضواء الطريق العالية"},
 {f:"Les feux de croisement et feux de brouillard",a:"أضواء الالتقاء وأضواء الضباب"},
 {f:"Seulement les feux de position",a:"أضواء الوضع فقط"}],
ok:[1],exp:"Par brouillard : feux de croisement + feux de brouillard avant et arrière ; les feux de route sont interdits car ils éblouissent en réflexion.",expa:"في الضباب: أضواء الالتقاء + أضواء الضباب الأمامية والخلفية؛ أضواء الطريق ممنوعة لأنها تعمي بالانعكاس."},
{id:'m039',theme:'circulation',img:'nuit_feux',q:"La nuit, en agglomération éclairée, vous circulez :",qa:"ليلاً في منطقة مضاءة تسير بـ:",opts:[
 {f:"Feux de route",a:"أضواء الطريق العالية"},
 {f:"Feux de croisement",a:"أضواء الالتقاء"},
 {f:"Feux de position seuls",a:"أضواء الوضع فقط"}],
ok:[1],exp:"En agglomération éclairée, les feux de croisement suffisent ; les feux de route ne sont utilisés que hors agglomération sur route non éclairée et sans usager en face.",expa:"في المناطق المضاءة تكفي أضواء الالتقاء؛ أضواء الطريق تُستخدم خارج المناطق المأهولة على طريق غير مضاء وبلا قادم."},
{id:'m040',theme:'circulation',img:'route_glissante',q:"Sur chaussée glissante, il faut :",qa:"على طريق زلق يجب:",opts:[
 {f:"Freiner brusquement",a:"الفرملة بقوة"},
 {f:"Réduire l'allure et éviter les à-coups",a:"تخفيف السرعة وتجنب الحركات المفاجئة"},
 {f:"Accélérer pour garder l'adhérence",a:"التسارع للحفاظ على التماسك"}],
ok:[1],exp:"Sur chaussée glissante : allure modérée, distances allongées, gestes souples (accélération, freinage, direction) pour conserver l'adhérence.",expa:"على طريق زلق: سرعة معتدلة، مسافات أطول، وحركات ناعمة (تسارع، فرملة، توجيه) للحفاظ على التماسك."},
// ===== STATIONNEMENT =====
{id:'m041',theme:'stationnement',img:'zone_bleue',q:"En zone bleue, le stationnement :",qa:"في المنطقة الزرقاء، الوقوف:",opts:[
 {f:"Est toujours interdit",a:"ممنوع دائماً"},
 {f:"Est autorisé avec disque de stationnement",a:"مسموح مع قرص التوقيت"},
 {f:"Est illimité",a:"غير محدود"}],
ok:[1],exp:"La zone bleue permet un stationnement temporaire gratuit à condition d'apposer le disque de stationnement visible derrière le pare-brise.",expa:"المنطقة الزرقاء تسمح بوقوف مؤقت مجاني بشرط وضع قرص التوقيت ظاهراً خلف الزجاج الأمامي."},
{id:'m042',theme:'stationnement',img:'arretinterdit',q:"Ce panneau signifie :",qa:"هذه اللوحة تعني:",opts:[
 {f:"Stationnement interdit",a:"منع الوقوف"},
 {f:"Arrêt et stationnement interdits",a:"منع التوقف والوقوف"},
 {f:"Stationnement autorisé",a:"وقوف مسموح"}],
ok:[1],exp:"Le panneau rond rayé d'une croix rouge interdit l'arrêt (même bref) ET le stationnement ; le panneau à simple barre n'interdit que le stationnement.",expa:"اللوحة الدائرية المشطوبة بصليب أحمر تمنع التوقف (حتى القصير) والوقوف؛ اللوحة بخط واحد تمنع الوقوف فقط."},
{id:'m043',theme:'stationnement',img:'creneau',q:"Pour réussir un créneau, il faut :",qa:"لإنجاز موقف موازي يجب:",opts:[
 {f:"Se garer en marche avant",a:"الوقوف بالأمام"},
 {f:"Se placer parallèlement au véhicule avant puis reculer en braquant",a:"الوقوف موازياً للمركبة الأمامية ثم الرجوع مع التوجيه"},
 {f:"Reculer droit sans braquer",a:"الرجوع مستقيماً بدون توجيه"}],
ok:[1],exp:"Le créneau se fait en marche arrière : placez-vous à côté du véhicule avant, braquez à droite en reculant, contre-braquez pour vous aligner.",expa:"الموقف الموازي يُنجز بالرجوع: ضع نفسك بجانب المركبة الأمامية، وجّه يميناً أثناء الرجوع، ثم عكس الاتجاه للاستقامة."},
{id:'m044',theme:'stationnement',img:'fourriere',q:"Un véhicule mal stationné peut être :",qa:"مركبة متوقفة بشكل خاطئ قد:",opts:[
 {f:"Reçoit seulement une contravention",a:"تتلقى مخالفة فقط"},
 {f:"Mis en fourrière",a:"تُسحب للمتحف"},
 {f:"Rien ne se passe",a:"لا شيء يحدث"}],
ok:[1],exp:"Tout stationnement gênant ou dangereux peut entraîner une amende et la mise en fourrière du véhicule aux frais du propriétaire.",expa:"كل وقوف معيق أو خطير قد يسبب غرامة وسحب المركبة للمتحف على حساب المالك."},
{id:'m045',theme:'stationnement',img:'cote_descente',q:"En descente, on serre le frein à main et on braque les roues :",qa:"عند النزول، نشد الفرامل اليدوية ونوّجه العجلات:",opts:[
 {f:"Vers le trottoir",a:"نحو الرصيف"},
 {f:"Vers la chaussée",a:"نحو الطريق"},
 {f:"Tout droit",a:"مستقيماً"}],
ok:[0],exp:"En stationnement en descente, braquez les roues vers le trottoir (le trottoir bloque la descente en cas de recul) et serrez le frein de stationnement.",expa:"عند الوقوف في نزول وجّه العجلات نحو الرصيف (الرصيف يمنع التدحرج) وشد الفرامل اليدوية."},
{id:'m046',theme:'stationnement',img:'horodateur',q:"L'horodateur sert à :",qa:"جهاز العداد يُستخدم لـ:",opts:[
 {f:"Payer le stationnement",a:"دفع رسوم الوقوف"},
 {f:"Mesurer le temps de conduite",a:"قياس مدة القيادة"},
 {f:"Stationner gratuitement",a:"الوقوف مجاناً"}],
ok:[0],exp:"L'horodateur est le parcmètre : il délivre un ticket payant à placer visiblement derrière le pare-brise pour la durée choisie.",expa:"العداد هو جهاز الدفع: يُصدر تذكرة مدفوعة توضع ظاهرة خلف الزجاج الأمامي للمدة المختارة."},
{id:'m047',theme:'stationnement',img:'handicape',q:"Cette place de stationnement est réservée :",qa:"هذا الموقف مخصص لـ:",opts:[
 {f:"Tout le monde",a:"الجميع"},
 {f:"Aux personnes à mobilité réduite avec carte",a:"ذوي الإعاقة الحركية مع بطاقة"},
 {f:"Aux taxis",a:"التاكسيات"}],
ok:[1],exp:"Les places GIG/GIC sont réservées aux titulaires de la carte de stationnement pour personnes handicapées ; stationner sans carte est une infraction.",expa:"مواقف GIG/GIC مخصصة لحاملي بطاقة إعاقة؛ الوقوف بدونها مخالفة."},
{id:'m048',theme:'stationnement',img:'passagepieton',q:"Il est interdit de stationner :",qa:"يُمنع الوقوف:",opts:[
 {f:"Sur les trottoirs uniquement",a:"على الأرصفة فقط"},
 {f:"À moins de 5 mètres avant un passage piéton",a:"على بعد أقل من 5 أمتار قبل ممر مشاة"},
 {f:"Dans les parkings payants",a:"في المواقف المدفوعة"}],
ok:[1],exp:"Le stationnement est interdit sur les passages piétons et à moins de 5 m en amont, car il gêne la visibilité des piétons et des conducteurs.",expa:"يُمنع الوقوف على ممرات المشاة وعلى بعد أقل من 5م قبلها لأنه يحجب الرؤية."},
{id:'m049',theme:'stationnement',img:'double_file',q:"La double file est :",qa:"الوقوف بصف مزدوج هو:",opts:[
 {f:"Toujours autorisé pour 5 minutes",a:"مسموح دائماً 5 دقائق"},
 {f:"Un arrêt ou stationnement gênant, généralement interdit",a:"توقف/وقوف معيق، ممنوع عموماً"},
 {f:"Autorisé la nuit",a:"مسموح ليلاً"}],
ok:[1],exp:"Stationner en double file gêne la circulation et est interdit (sauf très brefs arrêts dans certaines agglomérations, ce qui reste une infraction si cela gêne).",expa:"الوقوف بصف مزدوج يعيق المرور وهو ممنوع (حتى التوقفات القصيرة تبقى مخالفة إذا أعاقت)."},
{id:'m050',theme:'stationnement',img:'trottoir',q:"Le stationnement sur le trottoir :",qa:"الوقوف على الرصيف:",opts:[
 {f:"Est toujours autorisé",a:"مسموح دائماً"},
 {f:"Est interdit sauf signalisation l'autorisant",a:"ممنوع إلا بإشارة تسمح به"},
 {f:"Est réservé aux motos",a:"مخصص للدراجات فقط"}],
ok:[1],exp:"Le stationnement sur trottoir est interdit par principe (il gêne les piétons) sauf si une signalisation spécifique l'autorise (panneau ou marquage).",expa:"الوقوف على الرصيف ممنوع مبدئياً (يعيق المشاة) إلا بإشارة محددة تسمح به."},
// ===== VEHICULE =====
{id:'m051',theme:'vehicule',img:'voyant_huile',q:"Ce témoin rouge allumé signifie :",qa:"هذا المؤشر الأحمر المضاء يعني:",opts:[
 {f:"Niveau d'huile moteur insuffisant ou pression faible",a:"نقص زيت المحرك أو ضغط ضعيف"},
 {f:"Température normale",a:"حرارة طبيعية"},
 {f:"Frein à main serré",a:"فرامل يدوية مشدودة"}],
ok:[0],exp:"Le témoin d'huile (bidon d'huile) rouge allumé en roulant indique un manque de pression d'huile : arrêtez-vous rapidement pour éviter la casse moteur.",expa:"مؤشر الزيت (علبة زيت) الأحمر المضاء أثناء السير يعني نقص ضغط الزيت: توقف بسرعة لتجنب تلف المحرك."},
{id:'m052',theme:'vehicule',img:'voyant_batterie',q:"Ce témoin signale :",qa:"هذا المؤشر يُنبّه إلى:",opts:[
 {f:"Un problème de charge de la batterie",a:"مشكلة في شحن البطارية"},
 {f:"Les feux allumés",a:"الأضواء مشتعلة"},
 {f:"Le moteur chaud",a:"المحرك ساخن"}],
ok:[0],exp:"Le témoin de batterie allumé en roulant indique un défaut de charge (alternateur, courroie) : la batterie ne se recharge plus.",expa:"مؤشر البطارية المضاء أثناء السير يعني عطل شحن (مولّد، سير): البطارية لا تُشحن."},
{id:'m053',theme:'vehicule',img:'voyant_frein',q:"Ce témoin peut indiquer :",qa:"هذا المؤشر قد يدل على:",opts:[
 {f:"Frein de parking serré ou niveau de liquide de frein bas",a:"فرامل يدوية مشدودة أو نقص سائل الفرامل"},
 {f:"Ceinture non attachée",a:"حزام غير مربوط"},
 {f:"Portière ouverte",a:"باب مفتوح"}],
ok:[0],exp:"Le témoin de freinage (cercle avec point d'exclamation) signale le frein de parking serré ou un niveau de liquide de frein insuffisant : danger, ne roulez pas.",expa:"مؤشر الفرامل (دائرة مع تعجب) يعني فرامل يدوية مشدودة أو نقص سائل فرامل: خطر، لا تسِر."},
{id:'m054',theme:'vehicule',img:'voyant_abs',q:"Le témoin ABS sert à signaler :",qa:"مؤشر ABS يُستخدم للإشارة إلى:",opts:[
 {f:"Que l'ABS fonctionne",a:"أن ABS يعمل"},
 {f:"Une anomalie du système de freinage antiblocage",a:"عطل في نظام الفرامل المانع للانغلاق"},
 {f:"Une roue crevée",a:"عجلة مثقوبة"}],
ok:[1],exp:"Le voyant ABS s'allume au démarrage puis s'éteint ; s'il reste allumé, le système antiblocage est défaillant mais le freinage classique reste possible.",expa:"مؤشر ABS يشتعل عند التشغيل ثم ينطفئ؛ إن بقي مضاءً فالنظام معطّل لكن الفرملة العادية تبقى ممكنة."},
{id:'m055',theme:'vehicule',img:'pneu',q:"La pression des pneus se vérifie :",qa:"ضغط الإطارات يُفحص:",opts:[
 {f:"Pneus chauds après un long trajet",a:"إطارات ساخنة بعد رحلة طويلة"},
 {f:"Pneus froids, régulièrement",a:"إطارات باردة، بانتظام"},
 {f:"Une fois par an",a:"مرة في السنة"}],
ok:[1],exp:"Vérifiez la pression à froid (ou après moins de 2-3 km) au moins une fois par mois et avant les longs trajets, y compris la roue de secours.",expa:"افحص الضغط بارداً (أو بعد أقل من 2-3كم) شهرياً على الأقل وقبل الرحلات الطويلة، بما فيها العجلة الاحتياطية."},
{id:'m056',theme:'vehicule',img:'controle_technique',q:"Le contrôle technique d'une voiture particulière est obligatoire :",qa:"الفحص التقني للسيارة الخاصة إجباري:",opts:[
 {f:"Tous les ans",a:"كل سنة"},
 {f:"Tous les 2 ans après la 4e année",a:"كل سنتين بعد السنة الرابعة"},
 {f:"Tous les 5 ans",a:"كل 5 سنوات"}],
ok:[1],exp:"Premier contrôle technique dans les 6 mois précédant le 4e anniversaire de la 1re mise en circulation, puis tous les 2 ans.",expa:"أول فحص تقني خلال 6 أشهر قبل الذكرى الرابعة لأول تسجيل، ثم كل سنتين."},
{id:'m057',theme:'vehicule',img:'lave_glace',q:"En cas de neige ou de givre sur le pare-brise, avant de démarrer :",qa:"عند وجود ثلج أو صقيع على الزجاج الأمامي، قبل الانطلاق:",opts:[
 {f:"Démarrer et attendre que ça fonde",a:"انطلق وانتظر الذوبان"},
 {f:"Dégivrer entièrement le pare-brise et les vitres",a:"إزالة الجليد كلياً من الزجاج والنوافذ"},
 {f:"Verser de l'eau chaude",a:"صب ماء ساخن"}],
ok:[1],exp:"Il est interdit de conduire avec une visibilité réduite : grattez le givre (grattoir, liquide dégivrant) et ne versez jamais d'eau chaude (risque de fissure).",expa:"يُمنع القيادة برؤية منقوصة: اكشط الجليد (مكشطة، سائل إذابة) ولا تصب ماءً ساخناً أبداً (خطر التشقق)."},
{id:'m058',theme:'vehicule',img:'capot',q:"Pour vérifier le niveau d'huile moteur, on lit la jauge :",qa:"لفحص مستوى زيت المحرك نقرأ المقياس:",opts:[
 {f:"Moteur chaud après 30 min de route",a:"محرك ساخن بعد 30 دقيقة سير"},
 {f:"Moteur arrêté, à froid, sur sol plat",a:"محرك متوقف، بارد، على أرض مستوية"},
 {f:"En roulant",a:"أثناء السير"}],
ok:[1],exp:"Le niveau d'huile se contrôle à froid, véhicule sur sol horizontal, moteur arrêté depuis quelques minutes, avec la jauge essuyée puis replongée.",expa:"مستوى الزيت يُفحص بارداً، مركبة على أرض مستوية، محرك متوقف منذ دقائق، بمسح المقياس وإعادة غمسه."},
{id:'m059',theme:'vehicule',img:'airbag',q:"L'airbag se déclenche :",qa:"الوسادة الهوائية تنفتح:",opts:[
 {f:"À chaque freinage",a:"عند كل فرملة"},
 {f:"En cas de choc violent, en complément de la ceinture",a:"عند تصادم عنيف، مكملة للحزام"},
 {f:"Quand on dépasse 130 km/h",a:"عند تجاوز 130كم/س"}],
ok:[1],exp:"L'airbag se déploie lors d'un choc frontal ou latéral violent ; il protège en complément de la ceinture de sécurité, jamais à sa place.",expa:"الوسادة الهوائية تنفتح عند تصادم أمامي أو جانبي عنيف؛ تحمي كمكمّل للحزام لا بديلاً عنه."},
{id:'m060',theme:'vehicule',img:'carte_grise',q:"La carte grise (certificat d'immatriculation) doit être :",qa:"البطاقة الرمادية (شهادة التسجيل) يجب أن:",opts:[
 {f:"Restée à la maison",a:"تبقى في المنزل"},
 {f:"Présentée lors d'un contrôle",a:"تُعرض عند التفتيش"},
 {f:"Envoyée à l'assurance",a:"تُرسل للتأمين"}],
ok:[1],exp:"La carte grise, l'attestation d'assurance et le permis de conduire doivent être présentés lors d'un contrôle des forces de l'ordre.",expa:"البطاقة الرمادية وشهادة التأمين ورخصة القيادة يجب عرضها عند تفتيش الشرطة."},
// ===== SECURITE =====
{id:'m061',theme:'securite',img:'ceinture',q:"Le port de la ceinture de sécurité est obligatoire :",qa:"ربط حزام الأمان إجباري:",opts:[
 {f:"Seulement sur autoroute",a:"على الأوتوروت فقط"},
 {f:"Pour le conducteur et tous les passagers, avant et arrière",a:"للسائق وكل الركاب، أماماً وخلفاً"},
 {f:"Seulement pour le conducteur",a:"للسائق فقط"}],
ok:[1],exp:"La ceinture est obligatoire pour tous les occupants, avant comme arrière, sur tous les trajets ; le conducteur est responsable des mineurs.",expa:"الحزام إجباري لكل الركاب أماماً وخلفاً في كل الرحلات؛ السائق مسؤول عن القاصرين."},
{id:'m062',theme:'securite',img:'siege_enfant',q:"Un enfant de moins de 10 ans doit :",qa:"طفل أقل من 10 سنوات يجب أن:",opts:[
 {f:"S'asseoir à l'avant",a:"يجلس في الأمام"},
 {f:"Être installé à l'arrière dans un dispositif de retenue adapté",a:"يجلس في الخلف في مقعد أمان مناسب"},
 {f:"Rester debout",a:"يبقى واقفاً"}],
ok:[1],exp:"Les enfants de moins de 10 ans doivent voyager à l'arrière dans un siège enfant homologué adapté à leur taille et leur poids.",expa:"الأطفال دون 10 سنوات يجب أن يسافروا في الخلف بمقعد أمان مصادق مناسب لطولهم ووزنهم."},
{id:'m063',theme:'securite',img:'gilet',q:"En cas d'arrêt d'urgence sur l'autoroute, avant de descendre :",qa:"عند توقف طارئ على الأوتوروت، قبل النزول:",opts:[
 {f:"Enfiler le gilet de haute visibilité",a:"ارتداء سترة الرؤية العالية"},
 {f:"Allumer la radio",a:"تشغيل الراديو"},
 {f:"Sortir par la portière gauche",a:"الخروج من الباب الأيسر"}],
ok:[0],exp:"Avant de quitter le véhicule sur la bande d'arrêt d'urgence : enfilez le gilet de haute visibilité, sortez par le côté opposé à la circulation et mettez-vous à l'abri derrière la glissière.",expa:"قبل مغادرة المركبة على مسار التوقف: ارتدِ سترة الرؤية، اخرج من الجهة البعيدة عن السير وتحصّن خلف الحاجز."},
{id:'m064',theme:'securite',img:'triangle_prev',q:"Le triangle de présignalisation se place :",qa:"مثلث التحذير يوضع:",opts:[
 {f:"Juste derrière le véhicule",a:"مباشرة خلف المركبة"},
 {f:"À environ 30 m ou plus avant le véhicule en panne",a:"حوالي 30م أو أكثر قبل المركبة المعطلة"},
 {f:"Sur le toit",a:"على السقف"}],
ok:[1],exp:"Placez le triangle à environ 30 m ou plus du véhicule (hors autoroute où il est déconseillé de le poser) pour alerter les autres usagers.",expa:"ضع المثلث على بعد ~30م أو أكثر من المركبة (على الأوتوروت لا يُنصح بوضعه) لتنبيه الآخرين."},
{id:'m065',theme:'securite',img:'alcool',q:"Le taux d'alcoolémie maximal autorisé pour un conducteur confirmé est :",qa:"الحد الأقصى للكحول المسموح للسائق العادي هو:",opts:[
 {f:"0,8 g/l",a:"0.8 غ/ل"},
 {f:"0,5 g/l",a:"0.5 غ/ل"},
 {f:"0,2 g/l",a:"0.2 غ/ل"}],
ok:[1],exp:"Le taux maximal est de 0,5 g/l de sang (0,25 mg/l d'air expiré) pour un conducteur confirmé ; 0,2 g/l pour un jeune conducteur (permis probatoire).",expa:"الحد الأقصى 0.5غ/ل دم (0.25ملغ/ل هواء زفير) للسائق العادي؛ 0.2غ/ل لصاحب الرخصة التجريبية."},
{id:'m066',theme:'securite',img:'fatigue',q:"La fatigue au volant :",qa:"التعب أثناء القيادة:",opts:[
 {f:"N'est pas dangereux",a:"ليس خطيراً"},
 {f:"Augmente le temps de réaction et le risque d'endormissement",a:"يزيد زمن الاستجابة وخطر النعاس"},
 {f:"Améliore l'attention",a:"يحسّن التركيز"}],
ok:[1],exp:"La fatigue allonge le temps de réaction, réduit la vigilance et peut provoquer des micro-sommeils : faites une pause toutes les 2 heures.",expa:"التعب يطيل زمن الاستجابة ويقلل اليقظة وقد يسبب نعاسات قصيرة: خذ استراحة كل ساعتين."},
{id:'m067',theme:'securite',img:'telephone',q:"Téléphoner en conduisant :",qa:"التحدث بالهاتف أثناء القيادة:",opts:[
 {f:"Est autorisé avec oreillette",a:"مسموح مع سماعة"},
 {f:"Est interdit, même avec kit mains libres ou oreillette",a:"ممنوع حتى مع السماعات"},
 {f:"Est autorisé en agglomération",a:"مسموح في المدينة"}],
ok:[1],exp:"L'usage du téléphone tenu en main est interdit ; les oreillettes et casques sont également interdits depuis 2015 (seul le système intégré au véhicule est toléré).",expa:"استخدام الهاتف باليد ممنوع؛ السماعات والأذنيات ممنوعة منذ 2015 (النظام المدمج في المركبة فقط مسموح)."},
{id:'m068',theme:'securite',img:'distance_frein',q:"La distance de freinage dépend surtout :",qa:"مسافة الفرملة تعتمد أساساً على:",opts:[
 {f:"De la couleur du véhicule",a:"لون المركبة"},
 {f:"De la vitesse, de l'état de la route et des freins/pneus",a:"السرعة وحالة الطريق والفرامل/الإطارات"},
 {f:"Du modèle de voiture",a:"موديل السيارة"}],
ok:[1],exp:"La distance de freinage augmente avec le carré de la vitesse ; elle est allongée par la pluie, le verglas et l'usure des freins et pneus.",expa:"مسافة الفرملة تزداد مع مربع السرعة؛ وتطول مع المطر والجليد وتآكل الفرامل والإطارات."},
{id:'m069',theme:'securite',img:'derapage',q:"En cas d'aquaplaning, il faut :",qa:"عند التزحلق المائي يجب:",opts:[
 {f:"Freiner à fond",a:"الفرملة بأقصى قوة"},
 {f:"Lever le pied de l'accélérateur et garder le cap",a:"رفع القدم عن مسرع والحفاظ على الاتجاه"},
 {f:"Accélérer",a:"التسارع"}],
ok:[1],exp:"En aquaplaning, les pneus perdent le contact avec la route : ne freinez pas, levez le pied de l'accélérateur, tenez fermement le volant sans braquer.",expa:"عند التزحلق المائي تفقد الإطارات الاتصال بالطريق: لا تفرمل، ارفع قدمك عن المسرع وأمسك المقود بثبات بدون توجيه."},
{id:'m070',theme:'securite',img:'pause_cafe',q:"Sur un long trajet, il est conseillé de :",qa:"في رحلة طويلة يُنصح بـ:",opts:[
 {f:"Conduire sans pause pour arriver vite",a:"القيادة بلا استراحة للوصول بسرعة"},
 {f:"Faire une pause de 15-20 min toutes les 2 heures",a:"أخذ استراحة 15-20 دقيقة كل ساعتين"},
 {f:"Boire de l'alcool pour se détendre",a:"شرب كحول للاسترخاء"}],
ok:[1],exp:"Pour lutter contre la fatigue, faites une pause de 15 à 20 minutes toutes les 2 heures ou dès les premiers signes de somnolence.",expa:"لمكافحة التعب خذ استراحة 15-20 دقيقة كل ساعتين أو عند أول علامة نعاس."},
// ===== USAGERS =====
{id:'m071',theme:'usagers',img:'trottinette',q:"Les trottinettes électriques doivent circuler :",qa:"السكوترات الكهربائية يجب أن تسير:",opts:[
 {f:"Sur le trottoir",a:"على الرصيف"},
 {f:"Sur les pistes/bandes cyclables ou la chaussée à 25 km/h max",a:"على مسارات الدراجات أو الطريق بحد أقصى 25كم/س"},
 {f:"N'importe où",a:"في أي مكان"}],
ok:[1],exp:"Les EDPM (trottinettes) circulent sur les pistes cyclables en priorité, ou sur la chaussée ; vitesse max 25 km/h ; interdites sur trottoir sauf autorisation locale.",expa:"السكوترات تسير على مسارات الدراجات أولاً أو على الطريق؛ السرعة القصوى 25كم/س؛ ممنوعة على الرصيف إلا بإذن محلي."},
{id:'m072',theme:'usagers',img:'moto',q:"Pour bien voir un motard qui circule, vous devez :",qa:"لرؤية دراج ناري جيداً يجب:",opts:[
 {f:"Compter uniquement sur les rétroviseurs",a:"الاعتماد على المرايا فقط"},
 {f:"Contrôler les angles morts, ils sont plus difficiles à repérer",a:"فحص النقاط العمياء، هم أصعب على الرصد"},
 {f:"Ignorer, ils sont prioritaires",a:"تجاهلهم، هم أصحاب الأولوية"}],
ok:[1],exp:"Les deux-roues sont petits et rapides, souvent dans l'angle mort : contrôlez systématiquement vos angles morts avant de changer de file ou de tourner.",expa:"الدراجات صغيرة وسريعة وغالباً في النقطة العمياء: افحصها دائماً قبل تغيير المسار أو الانعطاف."},
{id:'m073',theme:'usagers',img:'groupe_enfants',q:"Un groupe d'enfants traverse ; vous devez :",qa:"مجموعة أطفال تعبر؛ يجب:",opts:[
 {f:"Klaxonner pour qu'ils se dépêchent",a:"التنفير ليُسرعوا"},
 {f:"Vous arrêter et rester patient et vigilant",a:"التوقف والصبر والانتباه"},
 {f:"Passer entre eux",a:"المرور بينهم"}],
ok:[1],exp:"Face à un groupe d'enfants : arrêtez-vous, laissez-les passer en sécurité, redoublez de vigilance car un enfant peut surgir ou revenir en arrière.",expa:"أمام مجموعة أطفال: توقف واتركهم يعبرون بأمان وانتبه لأن طفلاً قد يظهر أو يعود."},
{id:'m074',theme:'usagers',img:'canne_blanche',q:"Un piéton avec une canne blanche est :",qa:"مشاة بعصا بيضاء هو:",opts:[
 {f:"Un touriste",a:"سائح"},
 {f:"Une personne aveugle ou malvoyante prioritaire",a:"شخص كفيف أو ضعيف البصر له الأولوية"},
 {f:"Un randonneur",a:"متنزه"}],
ok:[1],exp:"La canne blanche signale un piéton aveugle ou malvoyant : cédez-lui le passage et faites attention, il ne vous voit pas.",expa:"العصا البيضاء تدل على مشاة كفيف أو ضعيف البصر: أعطِه الأولوية وانتبه لأنه لا يراك."},
{id:'m075',theme:'usagers',img:'zone_rencontre',q:"Dans une zone de rencontre, la vitesse est limitée à :",qa:"في منطقة اللقاء السرعة محدودة بـ:",opts:[
 {f:"30 km/h",a:"30كم/س"},
 {f:"20 km/h",a:"20كم/س"},
 {f:"50 km/h",a:"50كم/س"}],
ok:[1],exp:"En zone de rencontre, piétons et cyclistes sont prioritaires et peuvent circuler sur la chaussée ; vitesse limitée à 20 km/h.",expa:"في منطقة اللقاء، المشاة والدراجون أصحاب الأولوية وقد يسيرون على الطريق؛ السرعة بحد أقصى 20كم/س."},
{id:'m076',theme:'usagers',img:'bus_arret',q:"Vous dépassez un bus à l'arrêt ; attention :",qa:"تتجاوز حافلة متوقفة؛ انتبه:",opts:[
 {f:"Les piétons peuvent surgir devant ou derrière le bus",a:"قد يظهر مشاة أمام أو خلف الحافلة"},
 {f:"Le bus est toujours prioritaire pour redémarrer",a:"الحافلة دائماً لها الأولوية للانطلاق"},
 {f:"Rien de particulier",a:"لا شيء خاص"}],
ok:[0],exp:"En dépassant un bus à l'arrêt, méfiez-vous des piétons qui peuvent surgir de devant ou de derrière ; ralentissez et passez en laissant un espace.",expa:"عند تجاوز حافلة متوقفة احذر المشاة الذين قد يظهرون أمامها أو خلفها؛ خفّف السرعة ومرّ تاركاً مسافة."},
{id:'m077',theme:'usagers',img:'passage_velo',q:"Ce panneau signale :",qa:"هذه اللوحة تُشير إلى:",opts:[
 {f:"Un passage de cyclistes",a:"ممر دراجين"},
 {f:"Une zone piétonne",a:"منطقة مشاة"},
 {f:"Une fin de piste cyclable",a:"نهاية مسار دراجات"}],
ok:[0],exp:"Le panneau 'cyclistes' avertit d'un lieu fréquenté par des cyclistes ou d'un croisement de piste cyclable : redoublez de vigilance.",expa:"لوحة 'الدراجون' تحذّر من مكان يرتاده دراجون أو تقاطع مسار دراجات: انتبه كثيراً."},
{id:'m078',theme:'usagers',img:'enfant_cache',q:"Vous roulez près de voitures en stationnement ; le danger principal est :",qa:"تسير قرب سيارات متوقفة؛ الخطر الرئيسي هو:",opts:[
 {f:"Les portières qui s'ouvrent ou un piéton qui surgit entre les véhicules",a:"أبواب تُفتح أو مشاة يظهر بين المركبات"},
 {f:"Le soleil",a:"الشمس"},
 {f:"Rien",a:"لا شيء"}],
ok:[0],exp:"Près des véhicules en stationnement : méfiez-vous des portières qui s'ouvrent et des piétons (surtout enfants) qui surgissent entre les voitures.",expa:"قرب المركبات المتوقفة: احذر الأبواب المفتوحة والمشاة (خاصة الأطفال) الذين يظهرون بين السيارات."},
{id:'m079',theme:'usagers',img:'usagers_vulnerables',q:"Les usagers vulnérables sont :",qa:"مستخدمو الطريق الضعفاء هم:",opts:[
 {f:"Les camions",a:"الشاحنات"},
 {f:"Piétons, cyclistes, motards, personnes à mobilité réduite",a:"المشاة والدراجون والدراجون الناريون وذوو الإعاقة"},
 {f:"Les SUV",a:"سيارات الدفع الرباعي"}],
ok:[1],exp:"Les usagers vulnérables regroupent les piétons, cyclistes, conducteurs de deux-roues et personnes à mobilité réduite : ils nécessitent une attention particulière.",expa:"المستخدمون الضعفاء يشملون المشاة والدراجين وذوي العجلتين وذوي الإعاقة: يحتاجون انتباهاً خاصاً."},
{id:'m080',theme:'usagers',img:'agressif',q:"Face à un conducteur agressif ou provocateur, la bonne réaction est :",qa:"أمام سائق عدواني أو مستفز، الرد الصحيح هو:",opts:[
 {f:"Répondre par des gestes",a:"الرد بإشارات"},
 {f:"Rester calme, ne pas répondre et le laisser passer",a:"البقاء هادئاً، عدم الرد وتركه يمر"},
 {f:"Accélérer pour le semer",a:"التسارع لإبعاده"}],
ok:[1],exp:"Face à l'agressivité : restez calme, ne répondez pas aux provocations, laissez de la distance et si nécessaire arrêtez-vous en lieu sûr ou appelez les secours.",expa:"أمام العدوانية: ابقَ هادئاً، لا ترد على الاستفزاز، اترك مسافة، وإن لزم توقف في مكان آمن أو اتصل بالمساعدة."},
// ===== CONDUCTEUR =====
{id:'m081',theme:'conducteur',img:'permis_b',q:"Le permis B permet de conduire :",qa:"رخصة B تسمح بقيادة:",opts:[
 {f:"Une moto",a:"دراجة نارية"},
 {f:"Un véhicule de moins de 3,5 tonnes PTAC, max 9 places",a:"مركبة أقل من 3.5 طن، حد أقصى 9 مقاعد"},
 {f:"Un camion",a:"شاحنة"}],
ok:[1],exp:"Le permis B autorise la conduite des voitures particulières (PTAC ≤ 3,5 t, max 9 places assises dont le conducteur) et certains véhicules légers.",expa:"رخصة B تسمح بقيادة السيارات الخاصة (وزن ≤3.5طن، حد أقصى 9 مقاعد مع السائق) وبعض المركبات الخفيفة."},
{id:'m082',theme:'conducteur',img:'permis_a',q:"Le permis probatoire (jeune conducteur) dure :",qa:"الرخصة التجريبية (السائق الجديد) تدوم:",opts:[
 {f:"1 an",a:"سنة"},
 {f:"3 ans (2 ans avec conduite accompagnée)",a:"3 سنوات (سنتان مع القيادة المصحوبة)"},
 {f:"5 ans",a:"5 سنوات"}],
ok:[1],exp:"La période probatoire est de 3 ans, réduite à 2 ans pour ceux qui ont fait l'apprentissage anticipé (conduite accompagnée) ; plafond 6 points.",expa:"الفترة التجريبية 3 سنوات، تُخفّض لسنتين لمن خضع للقيادة المصحوبة؛ بحد أقصى 6 نقاط."},
{id:'m083',theme:'conducteur',img:'permis_points',q:"Le permis à points français compte initialement :",qa:"رخصة النقاط الفرنسية تبدأ بـ:",opts:[
 {f:"20 points",a:"20 نقطة"},
 {f:"12 points",a:"12 نقطة"},
 {f:"6 points",a:"6 نقاط"}],
ok:[1],exp:"Le permis de conduire comporte 12 points ; les infractions entraînent un retrait de points ; à 0 point, le permis est invalidé.",expa:"رخصة القيادة تبدأ بـ12 نقطة؛ المخالفات تسحب نقاطاً؛ عند صفر نقطة تُبطل الرخصة."},
{id:'m084',theme:'conducteur',img:'permis_suspendu',q:"La suspension du permis signifie :",qa:"تعليق الرخصة يعني:",opts:[
 {f:"Une invalidation définitive",a:"إبطال دائم"},
 {f:"Une interdiction temporaire de conduire",a:"منع مؤقت من القيادة"},
 {f:"Un simple avertissement",a:"مجرد تحذير"}],
ok:[1],exp:"La suspension interdit temporairement de conduire (durée variable selon l'infraction) ; à son terme, le permis peut être récupéré.",expa:"التعليق يمنع القيادة مؤقتاً (مدة تختلف حسب المخالفة)؛ عند انتهائها يمكن استرداد الرخصة."},
{id:'m085',theme:'conducteur',img:'drogue',q:"Conduire sous l'emprise de stupéfiants :",qa:"القيادة تحت تأثير المخدرات:",opts:[
 {f:"Est toléré en petite quantité",a:"مسموح بكمية صغيرة"},
 {f:"Est un délit grave (jusqu'à 2 ans de prison et 4500€ d'amende)",a:"جنحة خطيرة (حتى سنتان سجن و4500€ غرامة)"},
 {f:"Est autorisé si on se sent bien",a:"مسموح إذا شعرت بخير"}],
ok:[1],exp:"Conduire après usage de stupéfiants est un délit : peines lourdes (prison, amende, suspension/annulation du permis, retrait de points).",expa:"القيادة بعد تعاطي مخدرات جنحة: عقوبات ثقيلة (سجن، غرامة، تعليق/إبطال الرخصة، سحب نقاط)."},
{id:'m086',theme:'conducteur',img:'medicament',q:"Avant de prendre le volant sous traitement médical :",qa:"قبل القيادة تحت علاج طبي:",opts:[
 {f:"Conduire normalement",a:"قد عادياً"},
 {f:"Lire la notice/pictogramme et demander l'avis du médecin ou pharmacien",a:"اقرأ النشرة/الرمز واستشر الطبيب أو الصيدلي"},
 {f:"Doubler la dose",a:"ضاعف الجرعة"}],
ok:[1],exp:"Certains médicaments provoquent somnolence ou baisse de vigilance (pictogrammes de niveau 1 à 3) : vérifiez la compatibilité avec la conduite.",expa:"بعض الأدوية تسبب نعاساً أو نقص يقظة (رموز من مستوى 1-3): تحقق من توافقها مع القيادة."},
{id:'m087',theme:'conducteur',img:'assurance',q:"L'assurance responsabilité civile (au tiers) est :",qa:"تأمين المسؤولية المدنية (للغير) هو:",opts:[
 {f:"Optionnel",a:"اختياري"},
 {f:"Obligatoire pour tout véhicule terrestre à moteur",a:"إجباري لكل مركبة برية بمحرك"},
 {f:"Inutile en ville",a:"غير ضروري في المدينة"}],
ok:[1],exp:"L'assurance responsabilité civile est obligatoire ; elle couvre les dommages causés aux tiers ; conduire sans assurance est un délit.",expa:"تأمين المسؤولية المدنية إجباري؛ يغطي الأضرار الملحقة بالغير؛ القيادة بدونه جنحة."},
{id:'m088',theme:'conducteur',img:'documents',q:"Lors d'un contrôle, vous devez présenter :",qa:"عند التفتيش يجب تقديم:",opts:[
 {f:"Seulement le permis",a:"الرخصة فقط"},
 {f:"Permis, carte grise et attestation d'assurance",a:"الرخصة والبطاقة الرمادية وشهادة التأمين"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"Les documents obligatoires : permis de conduire, certificat d'immatriculation (carte grise) et attestation d'assurance ; le non-présentation est verbalisable.",expa:"الوثائق الإجبارية: رخصة قيادة، شهادة تسجيل (رمادية)، وشهادة تأمين؛ عدم تقديمها مخالفة."},
{id:'m089',theme:'conducteur',img:'maison_adresse',q:"Après un déménagement, vous devez changer l'adresse sur la carte grise :",qa:"بعد الانتقال يجب تغيير العنوان على البطاقة الرمادية:",opts:[
 {f:"Dans un délai d'un mois",a:"خلال شهر"},
 {f:"Dans les 6 mois",a:"خلال 6 أشهر"},
 {f:"Jamais, ce n'est pas obligatoire",a:"أبداً، ليست إجبارية"}],
ok:[0],exp:"Le changement d'adresse sur le certificat d'immatriculation est obligatoire dans le mois suivant le déménagement ; il se fait en ligne gratuitement.",expa:"تغيير العنوان على شهادة التسجيل إجباري خلال شهر من الانتقال؛ يتم مجاناً عبر الإنترنت."},
{id:'m090',theme:'conducteur',img:'vente',q:"Lors de la vente d'un véhicule d'occasion, le vendeur doit remettre :",qa:"عند بيع مركبة مستعملة، البائع يجب أن يسلّم:",opts:[
 {f:"La carte grise barrée, le certificat de situation administrative et le procès-verbal de contrôle technique",a:"الرمادية المشطوبة وشهادة الوضع الإداري ومحضر الفحص التقني"},
 {f:"Uniquement les clés",a:"المفاتيح فقط"},
 {f:"Rien",a:"لا شيء"}],
ok:[0],exp:"Documents obligatoires à la vente : carte grise barrée, certificat de cession, certificat de situation administrative (non-gage) et CT de moins de 6 mois si >4 ans.",expa:"وثائق إجبارية عند البيع: رمادية مشطوبة، شهادة تنازل، شهادة وضع إداري (عدم رهن)، وفحص تقني <6 أشهر إن تجاوزت 4 سنوات."},
// ===== ENVIRONNEMENT =====
{id:'m091',theme:'environnement',img:'eco_feuille',q:"L'éco-conduite permet :",qa:"القيادة الاقتصادية تسمح بـ:",opts:[
 {f:"Rouler plus vite",a:"القيادة أسرع"},
 {f:"Réduire la consommation et les émissions de CO2",a:"تخفيض الاستهلاك وانبعاثات CO2"},
 {f:"Augmenter le bruit",a:"زيادة الضجيج"}],
ok:[1],exp:"L'éco-conduite (anticipation, rapports hauts, vitesse stable, clim modérée) réduit la consommation de carburant et les émissions polluantes.",expa:"القيادة الاقتصادية (توقع، تروس عالية، سرعة ثابتة، تكييف معتدل) تقلل استهلاك الوقود والانبعاثات."},
{id:'m092',theme:'environnement',img:'ralenti',q:"Pour consommer moins, il est conseillé de :",qa:"لاستهلاك أقل يُنصح بـ:",opts:[
 {f:"Laisser le moteur tourner longtemps à l'arrêt",a:"ترك المحرك يعمل طويلاً أثناء التوقف"},
 {f:"Couper le moteur lors des arrêts prolongés",a:"إطفاء المحرك عند التوقفات المطولة"},
 {f:"Accélérer fort à chaque démarrage",a:"التسارع بقوة عند كل انطلاق"}],
ok:[1],exp:"Couper le moteur lors des arrêts de plus de 30 secondes à 1 minute économise du carburant et limite la pollution sonore et atmosphérique.",expa:"إطفاء المحرك عند التوقفات فوق 30-60 ثانية يوفر الوقود ويقلل الضجيج والتلوث."},
{id:'m093',theme:'environnement',img:'frein_moteur',q:"Le frein moteur consiste à :",qa:"فرامل المحرك تعني:",opts:[
 {f:"Utiliser le frein à main",a:"استخدام الفرامل اليدوية"},
 {f:"Ralentir en rétrogradant au lieu de freiner",a:"التباطؤ بتخفيض التروس بدلاً من الفرملة"},
 {f:"Éteindre le moteur en roulant",a:"إطفاء المحرك أثناء السير"}],
ok:[1],exp:"Rétrograder ou lever le pied de l'accélérateur fait ralentir le véhicule par le moteur : moins d'usure des freins et consommation nulle en décélération.",expa:"تخفيض التروس أو رفع القدم عن المسرع يبطئ المركبة بالمحرك: تآكل أقل للفرامل واستهلاك صفري عند التباطؤ."},
{id:'m094',theme:'environnement',img:'covoiturage',q:"Le covoiturage consiste à :",qa:"المشاركة في السيارة تعني:",opts:[
 {f:"Conduire à plusieurs le même véhicule",a:"قيادة نفس المركبة بعدة أشخاص"},
 {f:"Louer une voiture",a:"استئجار سيارة"},
 {f:"Prendre le bus",a:"ركوب الحافلة"}],
ok:[0],exp:"Le covoiturage consiste à partager son véhicule avec d'autres passagers : moins de voitures sur la route, moins de pollution et de coûts.",expa:"المشاركة تعني تقاسم المركبة مع ركاب آخرين: سيارات أقل على الطريق وتلوث وكلفة أقل."},
{id:'m095',theme:'environnement',img:'clim',q:"La climatisation, en usage permanent, augmente la consommation d'environ :",qa:"التكييف المستمر يزيد الاستهلاك بحوالي:",opts:[
 {f:"0 %",a:"0%"},
 {f:"5 à 20 %",a:"5-20%"},
 {f:"50 %",a:"50%"}],
ok:[1],exp:"La climatisation augmente la consommation de 5 à 20 % selon l'usage ; utilisez-la avec modération et préférez l'aération à basse vitesse.",expa:"التكييف يزيد الاستهلاك 5-20% حسب الاستخدام؛ استعمله باعتدال وافضّل التهوية بسرعة منخفضة."},
{id:'m096',theme:'environnement',img:'coffre',q:"Pour réduire la consommation, il vaut mieux :",qa:"لتقليل الاستهلاك الأفضل:",opts:[
 {f:"Laisser un coffre de toit vide en permanence",a:"ترك صندوق سقف فارغ دائماً"},
 {f:"Retirer les barres de toit et le coffre inutiles",a:"إزالة قضبان السقف والصندوق غير الضروريين"},
 {f:"Rouler fenêtres ouvertes sur autoroute",a:"القيادة بنوافذ مفتوحة على الأوتوروت"}],
ok:[1],exp:"Coffre de toit et barres dégradent l'aérodynamisme (surconsommation jusqu'à 20 %) ; retirez-les quand ils ne servent pas.",expa:"صندوق السقف والقضبان يضران بالديناميكية الهوائية (استهلاك زائد حتى 20%)؛ أزلهما عند عدم الحاجة."},
{id:'m097',theme:'environnement',img:'filtre_air',q:"Un filtre à air encrassé :",qa:"فلتر هواء متسخ:",opts:[
 {f:"Améliore les performances",a:"يحسّن الأداء"},
 {f:"Augmente la consommation et la pollution",a:"يزيد الاستهلاك والتلوث"},
 {f:"N'a aucun effet",a:"لا تأثير"}],
ok:[1],exp:"Un filtre à air sale réduit l'arrivée d'air au moteur : surconsommation, perte de puissance et émissions polluantes accrues ; à remplacer selon le carnet.",expa:"فلتر الهواء المتسخ يقلل وصول الهواء للمحرك: استهلاك زائد وضعف قوة وانبعاثات أكثر؛ استبدله حسب الجدول."},
{id:'m098',theme:'environnement',img:'start_stop',q:"Le système Start & Stop sert à :",qa:"نظام Start & Stop يُستخدم لـ:",opts:[
 {f:"Démarrer plus vite",a:"الانطلاق أسرع"},
 {f:"Couper automatiquement le moteur à l'arrêt pour économiser du carburant",a:"إطفاء المحرك تلقائياً عند التوقف لتوفير الوقود"},
 {f:"Garer la voiture",a:"إيقاف السيارة"}],
ok:[1],exp:"Le Start & Stop coupe le moteur lorsque le véhicule est à l'arrêt et le redémarre instantanément au débrayage ou à la libération du frein.",expa:"Start & Stop يطفئ المحرك عند توقف المركبة ويعيد تشغيله فوراً عند الدعس على القابض أو رفع الفرامل."},
{id:'m099',theme:'environnement',img:'bruit',q:"Pour limiter la pollution sonore, il faut :",qa:"لتقليل التلوث الضوضائي يجب:",opts:[
 {f:"Klaxonner souvent",a:"التنفير كثيراً"},
 {f:"Éviter les accélérations brusques et le klaxon abusif",a:"تجنب التسارع المفاجئ والتنفير الزائد"},
 {f:"Rouler fenêtres ouvertes avec musique forte",a:"القيادة بنوافذ مفتوحة وموسيقى عالية"}],
ok:[1],exp:"La pollution sonore se limite par une conduite souple, un klaxon réservé aux dangers immédiats, et un entretien du pot d'échappement.",expa:"التلوث الضوضائي يُحدّ بقيادة ناعمة وتنفير مخصص للخطر الفوري وصيانة العادم."},
{id:'m100',theme:'environnement',img:'zfe',q:"Une Zone à Faibles Émissions (ZFE) est :",qa:"منطقة الانبعاثات المنخفضة هي:",opts:[
 {f:"Une zone gratuite",a:"منطقة مجانية"},
 {f:"Une zone où l'accès est restreint selon la vignette Crit'Air du véhicule",a:"منطقة يقيد الدخول فيها حسب ملصق Crit'Air"},
 {f:"Une zone piétonne",a:"منطقة مشاة"}],
ok:[1],exp:"Les ZFE limitent la circulation des véhicules les plus polluants selon leur vignette Crit'Air (0 à 5) affichée sur le pare-brise.",expa:"مناطق ZFE تحد مرور المركبات الأكثر تلويثاً حسب ملصق Crit'Air (0-5) المعروض على الزجاج الأمامي."},
// ===== SECOURS =====
{id:'m101',theme:'secours',img:'accident_scene',q:"Sur un accident, la première chose à faire est :",qa:"عند حادث، أول ما يجب فعله هو:",opts:[
 {f:"Donner à boire aux blessés",a:"إعطاء الماء للجرحى"},
 {f:"Protéger la zone (feux de détresse, triangle)",a:"حماية المنطقة (أضواء خطر، مثلث)"},
 {f:"Déplacer les blessés",a:"نقل الجرحى"}],
ok:[1],exp:"Protéger-Alerter-Secourir : sécurisez d'abord la zone (feux de détresse, triangle, gilet) avant d'alerter et de porter secours.",expa:"احمِ-أنذر-أسعف: أمّن المنطقة أولاً (أضواء خطر، مثلث، سترة) قبل الإنذار والإسعاف."},
{id:'m102',theme:'secours',img:'tel_urgence',q:"Le numéro d'urgence européen unique est :",qa:"رقم الطوارئ الأوروبي الموحد هو:",opts:[
 {f:"15",a:"15"},
 {f:"17",a:"17"},
 {f:"112",a:"112"}],
ok:[2],exp:"Le 112 est le numéro d'urgence européen (appel gratuit) ; en France : 15 SAMU, 17 police, 18 pompiers.",expa:"112 هو رقم الطوارئ الأوروبي (مجاني)؛ في فرنسا: 15 إسعاف، 17 شرطة، 18 إطفاء."},
{id:'m103',theme:'secours',img:'pls',q:"La position latérale de sécurité (PLS) sert à :",qa:"وضعية الأمان الجانبية تُستخدم لـ:",opts:[
 {f:"Faire dormir la victime",a:"إنوم الضحية"},
 {f:"Maintenir les voies aériennes dégagées chez une victime inconsciente qui respire",a:"إبقاء مجرى الهواء مفتوحاً لضحية فاقدة الوعي لكنها تتنفس"},
 {f:"Arrêter une hémorragie",a:"إيقاف نزيف"}],
ok:[1],exp:"La PLS place la victime inconsciente mais respirante sur le côté pour éviter l'étouffement par la langue ou les vomissements.",expa:"وضعية الأمان الجانبية تضع الضحية الفاقدة للوعي لكنها تتنفس على جنبها لتجنب الاختناق باللسان أو القيء."},
{id:'m104',theme:'secours',img:'compression',q:"Pour arrêter une hémorragie externe importante :",qa:"لإيقاف نزيف خارجي شديد:",opts:[
 {f:"Poser un garrot systématiquement",a:"وضع رباط دائماً"},
 {f:"Comprimer fermement la plaie avec un linge propre",a:"الضغط بقوة على الجرح بقطعة قماش نظيفة"},
 {f:"Laisser saigner",a:"ترك النزيف"}],
ok:[1],exp:"Comprimez la plaie fortement avec un linge propre (ou la main gantée) ; le garrot n'est qu'en dernier recours sur membre si la compression échoue.",expa:"اضغط بقوة على الجرح بقماش نظيف (أو يد مُغطاة)؛ الرباط فقط كحل أخير على الطرف إن فشل الضغط."},
{id:'m105',theme:'secours',img:'massage',q:"Une victime ne respire pas ; après l'alerte, vous devez :",qa:"ضحية لا تتنفس؛ بعد الإنذار يجب:",opts:[
 {f:"Attendre les secours sans rien faire",a:"انتظار المساعدة بلا فعل"},
 {f:"Commencer le massage cardiaque (100-120 compressions/min)",a:"بدء تدليك القلب (100-120 ضغطة/دقيقة)"},
 {f:"Lui donner à boire",a:"إعطاءها ماء"}],
ok:[1],exp:"En arrêt cardiaque : alertez puis massez au centre de la poitrine, bras tendus, 100-120 compressions par minute, en relais si possible.",expa:"عند توقف القلب: أنذر ثم دلّك في وسط الصدر بذراعين مستقيمتين، 100-120 ضغطة بالدقيقة، بالتناوب إن أمكن."},
{id:'m106',theme:'secours',img:'dae',q:"Le défibrillateur automatisé externe (DAE) :",qa:"جهاز الصدمات الخارجي الآلي:",opts:[
 {f:"Est réservé aux médecins",a:"للأطباء فقط"},
 {f:"Peut être utilisé par tout témoin, il guide vocalement",a:"يمكن لأي شاهد استخدامه، يوجّه صوتياً"},
 {f:"N'existe qu'à l'hôpital",a:"موجود فقط في المستشفى"}],
ok:[1],exp:"Le DAE est utilisable par tous : il analyse le rythme et guide vocalement les gestes ; continuez le massage en parallèle.",expa:"جهاز الصدمات متاح للجميع: يحلل الإيقاع ويوجّه صوتياً؛ واصل التدليك بالتوازي."},
{id:'m107',theme:'secours',img:'brulure',q:"En cas de brûlure légère, il faut :",qa:"عند حرق خفيف يجب:",opts:[
 {f:"Mettre du beurre",a:"وضع زبدة"},
 {f:"Refroidir à l'eau froide courante 5 à 15 minutes",a:"تبريده بماء جارٍ بارد 5-15 دقيقة"},
 {f:"Percer les cloques",a:"ثقب الفقاعات"}],
ok:[1],exp:"Refroidissez la brûlure à l'eau froide courante 5 à 15 minutes ; jamais de corps gras ni de perçage de cloques ; consultez selon la gravité.",expa:"برّد الحرق بماء جارٍ بارد 5-15 دقيقة؛ لا مواد دهنية ولا ثقب فقاعات؛ استشر حسب الخطورة."},
{id:'m108',theme:'secours',img:'incendie',q:"En cas d'incendie du véhicule :",qa:"عند حريق في المركبة:",opts:[
 {f:"Ouvrir le capot en grand",a:"فتح غطاء المحرك بالكامل"},
 {f:"Évacuer les occupants, alerter et éteindre si possible sans se mettre en danger",a:"إخلاء الركاب والإنذار وإطفاء إن أمكن دون خطر"},
 {f:"Continuer à rouler",a:"الاستمرار بالسير"}],
ok:[1],exp:"Faites évacuer les occupants, alertez les secours, et n'attaquez le feu que s'il débute (extincteur, sans ouvrir le capot en grand pour ne pas attiser les flammes).",expa:"أخلِ الركاب وأنذر المساعدة، ولا تهاجم النار إلا إن بدأت (طفاية، دون فتح الغطاء بالكامل لتجنب تأجيج اللهب)."},
{id:'m109',theme:'secours',img:'saip',q:"Le réseau SAIP (alerte population) diffuse :",qa:"شبكة SAIP (إنذار السكان) تبث:",opts:[
 {f:"De la musique",a:"موسيقى"},
 {f:"Une alerte en cas d'événement grave (attentat, catastrophe)",a:"إنذاراً عند حدث خطير (اعتداء، كارثة)"},
 {f:"La météo",a:"الطقس"}],
ok:[1],exp:"SAIP est le système d'alerte de la population en cas d'événement grave : signal sonore spécifique + informations de conduite à tenir.",expa:"SAIP نظام إنذار السكان عند حدث خطير: إشارة صوتية خاصة + تعليمات للسلوك."},
{id:'m110',theme:'secours',img:'malaise',q:"Une victime se plaint d'un malaise ; vous devez :",qa:"ضحية تشتكي من توعك؛ يجب:",opts:[
 {f:"La laisser repartir",a:"تركها تغادر"},
 {f:"La mettre au repos, interroger et alerter si nécessaire",a:"إراحتها والاستفسار والإنذار إن لزم"},
 {f:"Lui donner de l'alcool",a:"إعطاءها كحولاً"}],
ok:[1],exp:"En cas de malaise : faites reposer la victime, interrogez-la sur ses symptômes et ses antécédents, et alertez si l'état est sérieux ou s'aggrave.",expa:"عند التوعك: أرِح الضحية واسأل عن أعراضها وسوابقها، وأنذر إن كان الوضع خطيراً أو يسوء."},
// ===== QUESTIONS MIXTES SUPPLÉMENTAIRES =====
{id:'m111',theme:'signalisation',img:'feu_vert',q:"Au feu vert, vous pouvez passer si :",qa:"عند الضوء الأخضر يمكنك المرور إذا:",opts:[
 {f:"Toujours, même si le carrefour est encombré",a:"دائماً حتى لو التقاطع مزدحم"},
 {f:"La voie est dégagée pour ne pas bloquer le carrefour",a:"المسار خالٍ لعدم سد التقاطع"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"Même au feu vert, ne vous engagez que si vous êtes sûr de ne pas rester bloqué au milieu du carrefour (encombrement).",expa:"حتى مع الضوء الأخضر لا تدخل إلا إن تأكدت من عدم البقاء عالقاً وسط التقاطع (ازدحام)."},
{id:'m112',theme:'circulation',img:'sortie_autoroute',q:"Sur autoroute, la bande d'arrêt d'urgence sert :",qa:"على الأوتوروت، مسار التوقف الطارئ يُستخدم لـ:",opts:[
 {f:"Dépasser par la droite",a:"التجاوز من اليمين"},
 {f:"Uniquement en cas de panne ou d'urgence",a:"فقط عند عطل أو طارئ"},
 {f:"Stationner pour se reposer",a:"الوقوف للراحة"}],
ok:[1],exp:"La BAU est réservée aux arrêts d'urgence (panne, malaise) ; l'utiliser pour circuler ou se reposer est interdit et dangereux.",expa:"مسار التوقف مخصص للطوارئ (عطل، توعك)؛ استخدامه للسير أو الراحة ممنوع وخطير."},
{id:'m113',theme:'vehicule',img:'thermometre',q:"Si le témoin de température moteur reste allumé :",qa:"إذا بقي مؤشر حرارة المحرك مضاءً:",opts:[
 {f:"Continuer jusqu'à destination",a:"الاستمرار حتى الوجهة"},
 {f:"Arrêter le véhicule et le moteur pour éviter la surchauffe",a:"إيقاف المركبة والمحرك لتجنب السخونة الزائدة"},
 {f:"Accélérer pour refroidir",a:"التسارع للتبريد"}],
ok:[1],exp:"Un moteur en surchauffe peut casser : arrêtez-vous, coupez le moteur, laissez refroidir avant d'ouvrir le bouchon du radiateur (jamais à chaud).",expa:"المحرك الساخن قد يتلف: توقف وأطفئ المحرك ودعه يبرد قبل فتح غطاء المبرد (أبداً وهو ساخن)."},
{id:'m114',theme:'securite',img:'pluie',q:"Sous la pluie, la distance d'arrêt :",qa:"تحت المطر، مسافة التوقف:",opts:[
 {f:"Diminue",a:"تقل"},
 {f:"Augmente, il faut allonger les distances de sécurité",a:"تزداد، يجب إطالة مسافات الأمان"},
 {f:"Reste identique",a:"تبقى نفسها"}],
ok:[1],exp:"Sur route mouillée, l'adhérence diminue : la distance de freinage s'allonge ; réduisez la vitesse et augmentez les distances de sécurité.",expa:"على طريق مبلل ينقص التماسك: مسافة الفرملة تطول؛ خفّف السرعة وزد مسافات الأمان."},
{id:'m115',theme:'conducteur',img:'examen',q:"L'épreuve théorique générale (code) comporte :",qa:"اختبار النظرية العامة (الكود) يحتوي:",opts:[
 {f:"20 questions, 15 bonnes réponses pour réussir",a:"20 سؤالاً، 15 صحيحة للنجاح"},
 {f:"40 questions, 35 bonnes réponses pour réussir",a:"40 سؤالاً، 35 صحيحة للنجاح"},
 {f:"60 questions, 50 bonnes réponses",a:"60 سؤالاً، 50 صحيحة"}],
ok:[1],exp:"L'ETG compte 40 questions à choix multiple ; il faut au moins 35 bonnes réponses (maximum 5 fautes) pour être reçu.",expa:"اختبار ETG فيه 40 سؤال اختيار متعدد؛ تحتاج 35 إجابة صحيحة على الأقل (أقصى 5 أخطاء) للنجاح."},
{id:'m116',theme:'conducteur',img:'aac',q:"La conduite accompagnée (AAC) est possible dès :",qa:"القيادة المصحوبة ممكنة من سن:",opts:[
 {f:"15 ans",a:"15 سنة"},
 {f:"16 ans",a:"16 سنة"},
 {f:"18 ans",a:"18 سنة"}],
ok:[0],exp:"L'apprentissage anticipé de la conduite est possible dès 15 ans, avec un accompagnateur ; elle réduit la période probatoire à 2 ans.",expa:"التعلم المبكر للقيادة ممكن من 15 سنة مع مرافق؛ يخفّض الفترة التجريبية لسنتين."},
{id:'m117',theme:'priorites',img:'tram',q:"Le tramway circulant sur voie réservée :",qa:"الترام على مسار مخصص:",opts:[
 {f:"Doit céder le passage aux voitures",a:"يجب أن يعطي الأولوية للسيارات"},
 {f:"Est prioritaire, sauf signalisation contraire",a:"له الأولوية إلا بإشارة مخالفة"},
 {f:"Ne peut pas traverser les carrefours",a:"لا يستطيع عبور التقاطعات"}],
ok:[1],exp:"Le tramway est prioritaire sur sa voie réservée ; méfiez-vous de son silence et de sa longueur de freinage importante.",expa:"الترام له الأولوية على مساره؛ احذر صمته وطول مسافة فرملته."},
{id:'m118',theme:'circulation',img:'rue_etroite',q:"Dans une rue étroite, pour croiser un véhicule :",qa:"في شارع ضيق، لملاقاة مركبة:",opts:[
 {f:"Accélérer pour passer vite",a:"التسارع للمرور بسرعة"},
 {f:"Céder le passage ou reculer si nécessaire, selon la facilité",a:"إعطاء الأولوية أو الرجوع إن لزم حسب الأسهل"},
 {f:"Klaxonner pour qu'il recule",a:"التنفير ليرجع"}],
ok:[1],exp:"En croisement difficile, c'est à celui qui a la manœuvre la plus facile de laisser passer ; la priorité revient souvent à celui qui monte ou qui a le moins à reculer.",expa:"عند الملاقاة الصعبة، من لديه المناورة الأسهل يترك الآخر يمر؛ الأولوية غالباً للصاعد أو الأقل رجوعاً."},
{id:'m119',theme:'stationnement',img:'panneau_masque',q:"Un panneau de stationnement masqué par du feuillage :",qa:"لوحة وقوف محجوبة بأوراق:",opts:[
 {f:"S'applique quand même",a:"تبقى سارية"},
 {f:"Ne s'applique plus car non visible",a:"لا تسري لأنها غير مرئية"},
 {f:"N'existe pas",a:"غير موجودة"}],
ok:[0],exp:"La signalisation s'applique même si elle est partiellement masquée ; le conducteur doit rester attentif et respecter les règles générales en cas de doute.",expa:"الإشارات تبقى سارية حتى لو حُجبت جزئياً؛ على السائق الانتباه واحترام القواعد العامة عند الشك."},
{id:'m120',theme:'secours',img:'panneau_km',q:"Sur autoroute, pour localiser votre position lors d'un appel d'urgence :",qa:"على الأوتوروت، لتحديد موقعك عند مكالمة طوارئ:",opts:[
 {f:"Décrire le paysage",a:"وصف المنظر"},
 {f:"Relever le panneau kilométrique et le sens de circulation",a:"قراءة اللوحة الكيلومترية واتجاه السير"},
 {f:"Donner votre adresse",a:"إعطاء عنوانك"}],
ok:[1],exp:"Sur autoroute, les bornes et panneaux kilométriques indiquent votre position précise ; communiquez le numéro et le sens de circulation aux secours.",expa:"على الأوتوروت، الأعمدة واللوحات الكيلومترية تحدد موقعك بدقة؛ أخبر المساعدة بالرقم واتجاه السير."}
);
