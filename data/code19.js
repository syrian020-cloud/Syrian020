window.CODE_DATA.push(
// ===== SIGNALISATION =====
{id:'y001',theme:'signalisation',img:'feux',q:"Un feu jaune clignotant signifie :",qa:"ضوء أصفر وامض يعني:",opts:[
 {f:"Arrêt obligatoire",a:"توقف إجباري"},
 {f:"Danger : ralentir et respecter la signalisation de priorité",a:"خطر: خفّف السرعة واحترم إشارات الأولوية"},
 {f:"Passage libre",a:"مرور حر"}],
ok:[1],exp:"Le feu jaune clignotant indique un carrefour dangereux : ralentissez et appliquez les règles de priorité (panneaux ou priorité à droite).",expa:"الضوء الأصفر الوامض يشير لتقاطع خطير: خفّف السرعة وطبّق قواعد الأولوية (لوحات أو أولوية يمين)."},
{id:'y002',theme:'signalisation',img:'lim50',q:"En agglomération, sauf indication contraire, la vitesse est limitée à :",qa:"في المنطقة المأهولة، ما لم يُذكر خلافه، السرعة محدودة بـ:",opts:[
 {f:"30 km/h",a:"30كم/س"},
 {f:"50 km/h",a:"50كم/س"},
 {f:"70 km/h",a:"70كم/س"}],
ok:[1],exp:"En agglomération, la limite générale est 50 km/h ; des zones 30 ou 20 existent dans les quartiers résidentiels.",expa:"في المناطق المأهولة، الحد العام 50كم/س؛ ومناطق 30 أو 20 موجودة في الأحياء السكنية."},
{id:'y003',theme:'signalisation',img:'finlim50',q:"Ce panneau signifie :",qa:"هذه اللوحة تعني:",opts:[
 {f:"Début de limitation à 50",a:"بداية حد 50"},
 {f:"Fin de limitation à 50 km/h",a:"نهاية حد 50كم/س"},
 {f:"Zone interdite",a:"منطقة ممنوعة"}],
ok:[1],exp:"Le panneau rond blanc barré de noir avec le chiffre 50 marque la fin de la limitation à 50 km/h : repassez à la limite générale de la route.",expa:"اللوحة البيضاء المشطوبة بأسود مع الرقم 50 تُنهي حد 50كم/س: عد للحد العام للطريق."},
{id:'y004',theme:'signalisation',img:'danger',q:"Un panneau triangulaire bord rouge indique toujours :",qa:"لوحة مثلثة بحواف حمراء تدل دائماً على:",opts:[
 {f:"Une interdiction",a:"منع"},
 {f:"Un danger",a:"خطر"},
 {f:"Une obligation",a:"إلزام"}],
ok:[1],exp:"Les panneaux triangulaires à bord rouge sont des panneaux de danger (avertissement) ; les ronds bleus sont des obligations ; les ronds bord rouge sont des interdictions.",expa:"اللوحات المثلثة بحواف حمراء لوحات تحذير؛ الدائرية الزرقاء إلزامات؛ الدائرية بحواف حمراء ممنوعات."},
{id:'y005',theme:'signalisation',img:'obligation_gauche',q:"Ce panneau vous oblige à :",qa:"هذه اللوحة تُلزمك بـ:",opts:[
 {f:"Tourner à gauche",a:"الانعطاف يساراً"},
 {f:"Contourner par la gauche",a:"التجاوز من اليسار"},
 {f:"Aller tout droit",a:"السير مستقيماً"}],
ok:[0],exp:"Le panneau rond bleu avec flèche à gauche impose d'obliquer à gauche à l'intersection.",expa:"اللوحة الزرقاء بسهم يسار تُلزم بالانعطاف يساراً عند التقاطع."},
{id:'y006',theme:'signalisation',img:'passagepieton',q:"Ce panneau signale :",qa:"هذه اللوحة تُشير إلى:",opts:[
 {f:"Un passage pour piétons",a:"ممر مشاة"},
 {f:"Une zone piétonne",a:"منطقة مشاة"},
 {f:"Une école",a:"مدرسة"}],
ok:[0],exp:"Le panneau carré bleu avec le piéton sur les bandes signale un passage piéton ; il vous invite à la prudence.",expa:"اللوحة الزرقاء المربعة مع مشاة على الخطوط تدل على ممر مشاة؛ تدعو للحذر."},
{id:'y007',theme:'signalisation',img:'pente',q:"Un panneau indiquant '10%' signale :",qa:"لوحة تشير إلى '10%' تعني:",opts:[
 {f:"Une pente de 10 mètres",a:"منحدر 10 أمتار"},
 {f:"Une déclivité de 10 %",a:"انحدار 10%"},
 {f:"10 km de montée",a:"10 كم صعود"}],
ok:[1],exp:"Le pourcentage indique la déclivité (montée ou descente selon le sens du dessin) : 10 % = 10 m de dénivelé pour 100 m parcourus.",expa:"النسبة تشير لنسبة الانحدار (صعود أو نزول حسب الرسم): 10% = 10م ارتفاع لكل 100م سيراً."},
{id:'y008',theme:'signalisation',img:'arretinterdit',q:"Sur ce panneau, une flèche indique souvent :",qa:"على هذه اللوحة، سهم يدل غالباً على:",opts:[
 {f:"La direction de l'interdiction",a:"اتجاه المنع"},
 {f:"Une zone où l'interdiction s'applique dans le sens de la flèche",a:"منطقة يسري فيها المنع باتجاه السهم"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"Les flèches sur les panneaux d'interdiction de stationnement/arrêt précisent l'étendue de la zone concernée (avant/après le panneau).",expa:"الأسهم على لوحات منع الوقوف/التوقف تحدد امتداد المنطقة المعنية (قبل/بعد اللوحة)."},
{id:'y009',theme:'signalisation',img:'sensunique',q:"Dans une rue à sens unique, vous pouvez :",qa:"في شارع باتجاه واحد يمكنك:",opts:[
 {f:"Faire demi-tour",a:"الدوران للخلف"},
 {f:"Circuler uniquement dans le sens de la flèche",a:"السير فقط باتجاه السهم"},
 {f:"Stationner n'importe où",a:"الوقوف في أي مكان"}],
ok:[1],exp:"En sens unique, la circulation se fait exclusivement dans le sens indiqué ; le demi-tour y est interdit.",expa:"في الاتجاه الواحد، السير حصرياً باتجاه السهم؛ الدوران للخلف ممنوع."},
{id:'y010',theme:'signalisation',img:'travaux',q:"La signalisation temporaire de chantier est de couleur :",qa:"إشارات الورشة المؤقتة لونها:",opts:[
 {f:"Bleu",a:"أزرق"},
 {f:"Jaune",a:"أصفر"},
 {f:"Vert",a:"أخضر"}],
ok:[1],exp:"La signalisation temporaire (travaux, accidents) est jaune ; elle prime sur la signalisation permanente en cas de contradiction.",expa:"الإشارات المؤقتة (أشغال، حوادث) صفراء؛ تتغلب على الدائمة عند التعارض."},
{id:'y011',theme:'signalisation',img:'voieferree',q:"Aux passages à niveau à barrières automatiques, quand le feu rouge clignote :",qa:"عند ممرات القطار بحواجز آلية، عند وميض الأحمر:",opts:[
 {f:"Passer vite",a:"المرور بسرعة"},
 {f:"S'arrêter obligatoirement",a:"التوقف إجبارياً"},
 {f:"Contourner les barrières",a:"تجاوز الحواجز"}],
ok:[1],exp:"Feux rouges clignotants + sonnerie + barrières qui descendent = arrêt absolu ; contourner les barrières est extrêmement dangereux et sévèrement sanctionné.",expa:"أضواء حمراء وامضة + جرس + حواجز نازلة = توقف مطلق؛ تجاوز الحواجز خطير جداً ومعاقَب بشدة."},
{id:'y012',theme:'signalisation',img:'hauteur',q:"Pour un véhicule de 3,80 m de haut, ce panneau '3,5 m' :",qa:"لمركبة ارتفاعها 3.80م، لوحة '3.5م':",opts:[
 {f:"Permet le passage",a:"تسمح بالمرور"},
 {f:"Interdit le passage",a:"تمنع المرور"},
 {f:"Est indicative",a:"استرشادية"}],
ok:[1],exp:"Si votre gabarit dépasse la hauteur indiquée, le passage est interdit : vous risquez de coincer sous le pont ou d'endommager l'ouvrage.",expa:"إذا تجاوز ارتفاعك القيمة المكتوبة فالمرور ممنوع: تخاطر بالاحتجاز تحت الجسر أو إتلاف المنشأة."},
// ===== PRIORITES =====
{id:'y013',theme:'priorites',img:'prio_droite_gauche',q:"À un carrefour en T sans signalisation, le véhicule venant de la gauche :",qa:"عند تقاطع T بلا إشارات، المركبة القادمة من اليسار:",opts:[
 {f:"Est prioritaire",a:"لها الأولوية"},
 {f:"Doit céder le passage",a:"يجب إعطاء الأولوية"},
 {f:"Passe toujours en premier",a:"تمر أولاً دائماً"}],
ok:[1],exp:"En carrefour en T sans signalisation, la priorité à droite s'applique : le véhicule venant de votre gauche vous cède le passage, et vous cédez à celui venant de votre droite.",expa:"عند تقاطع T بلا إشارات تطبق أولوية اليمين: القادم من يسارك يعطيك الأولوية، وأنت تعطي للقادم من يمينك."},
{id:'y014',theme:'priorites',img:'cedez',q:"Le panneau 'Cédez le passage' vous impose :",qa:"لوحة 'أعطِ الأولوية' تُلزمك بـ:",opts:[
 {f:"Un arrêt systématique",a:"توقف دائم"},
 {f:"De laisser passer les usagers de la route croisée",a:"ترك مستخدمي الطريق المتقاطع يمرون"},
 {f:"De klaxonner",a:"التنفير"}],
ok:[1],exp:"Le 'cédez le passage' impose de laisser passer ; l'arrêt n'est obligatoire que si la circulation l'exige (contrairement au STOP).",expa:"'أعطِ الأولوية' يُلزم بالترك؛ التوقف إجباري فقط إذا لزم (عكس STOP)."},
{id:'y015',theme:'priorites',img:'gyrophare',q:"Une ambulance en gyrophare veut passer ; sur autoroute, la bonne réaction :",qa:"إسعاف بأضواء يريد المرور؛ على الأوتوروت، رد الفعل الصحيح:",opts:[
 {f:"Accélérer devant elle",a:"التسارع أمامها"},
 {f:"Vous ranger à droite pour libérer le passage",a:"الانزياح يميناً لفتح الطريق"},
 {f:"Freiner brusquement",a:"الفرملة المفاجئة"}],
ok:[1],exp:"Sur autoroute, rangez-vous progressivement à droite sans à-coups pour dégager la voie ; ne freinez jamais brusquement.",expa:"على الأوتوروت، انزح تدريجياً يميناً دون حركات مفاجئة لفتح المسار؛ لا تفرمل فجأة أبداً."},
{id:'y016',theme:'priorites',img:'priorite',q:"Sur une route prioritaire, à un carrefour avec feu tricolore :",qa:"على طريق أولوية، عند تقاطع بأضواء ثلاثية:",opts:[
 {f:"La route prioritaire prime sur le feu",a:"أولوية الطريق تتغلب على الضوء"},
 {f:"Le feu tricolore prime sur le panneau prioritaire",a:"الضوء الثلاثي يتغلب على لوحة الأولوية"},
 {f:"Les deux s'annulent",a:"كلاهما يلغي الآخر"}],
ok:[1],exp:"Hiérarchie : les feux tricolores priment sur les panneaux de priorité ; le losange n'indique que le caractère de la route, pas le passage au feu.",expa:"الترتيب: الأضواء الثلاثية تتغلب على لوحات الأولوية؛ المعين يصف طبيعة الطريق فقط لا المرور عند الضوء."},
{id:'y017',theme:'priorites',img:'turn_left',q:"Vous tournez à gauche ; un piéton traverse la rue où vous entrez :",qa:"تنعطف يساراً؛ مشاة يعبر الشارع الذي تدخله:",opts:[
 {f:"Vous êtes prioritaire",a:"أنت صاحب أولوية"},
 {f:"Vous cédez le passage au piéton",a:"تعطي الأولوية للمشاة"},
 {f:"Vous klaxonnez",a:"تنفّر"}],
ok:[1],exp:"En changeant de direction, vous devez céder le passage aux piétons engagés sur la chaussée où vous vous engagez.",expa:"عند تغيير الاتجاه يجب إعطاء الأولوية للمشاة العابرين للطريق الذي تدخله."},
{id:'y018',theme:'priorites',img:'tram',q:"Un tramway et une voiture arrivent en même temps à un carrefour :",qa:"ترام وسيارة يصلان معاً عند تقاطع:",opts:[
 {f:"La voiture est prioritaire",a:"السيارة لها الأولوية"},
 {f:"Le tramway est prioritaire",a:"الترام له الأولوية"},
 {f:"Celui de droite",a:"صاحب اليمين"}],
ok:[1],exp:"Le tramway bénéficie d'une priorité de passage sur sa voie réservée, sauf signalisation spécifique contraire.",expa:"الترام يتمتع بأولوية على مساره المخصص إلا بإشارة مخالفة."},
{id:'y019',theme:'priorites',img:'feu_orange',q:"Le feu passe au jaune alors que vous êtes juste avant le carrefour :",qa:"يتحول الضوء للأصفر وأنت قبل التقاطع مباشرة:",opts:[
 {f:"Accélérer pour passer",a:"التسارع للمرور"},
 {f:"S'arrêter si cela peut se faire en sécurité",a:"التوقف إن أمكن بأمان"},
 {f:"Passer quoi qu'il arrive",a:"المرور مهما كان"}],
ok:[1],exp:"Au jaune fixe, arrêtez-vous si vous le pouvez sans danger ; si un véhicule vous suit de près ou si l'arrêt est impossible sans risque, poursuivez prudemment.",expa:"عند الأصفر الثابت توقف إن أمكن دون خطر؛ إن كانت مركبة خلفك قريبة أو التوقف مستحيل بأمان فأكمل بحذر."},
{id:'y020',theme:'priorites',img:'sortie_propriete',q:"En sortant d'un parking, vous croisez un cycliste sur la voie :",qa:"عند الخروج من موقف، تلاقي دراجاً على الطريق:",opts:[
 {f:"Vous êtes prioritaire",a:"أنت صاحب أولوية"},
 {f:"Vous lui cédez le passage",a:"تعطيه الأولوية"},
 {f:"Il doit s'écarter",a:"يجب أن يبتعد"}],
ok:[1],exp:"Sortir d'un parking ou d'une propriété impose de céder le passage à tous les usagers, cyclistes compris.",expa:"الخروج من موقف أو ملكية يُلزم بإعطاء الأولوية لكل المستخدمين بمن فيهم الدراجون."},
{id:'y021',theme:'priorites',img:'pente_croisement',q:"En montée étroite, si un véhicule descend en face :",qa:"في صعود ضيق، إذا نزلت مركبة قبالتك:",opts:[
 {f:"Vous êtes toujours prioritaire",a:"أنت دائماً صاحب أولوية"},
 {f:"Celui qui a la manœuvre la plus facile cède le passage",a:"من لديه المناورة الأسهل يعطي الأولوية"},
 {f:"Vous passez toujours en premier",a:"تمر أولاً دائماً"}],
ok:[1],exp:"Le code ne fixe pas de règle absolue : la priorité va à celui dont la manœuvre est la plus facile (proximité d'un évasement, possibilité de reculer).",expa:"القانون لا يضع قاعدة مطلقة: الأولوية لمن مناورته أسهل (قرب توسّع، إمكانية رجوع)."},
{id:'y022',theme:'priorites',img:'passagepieton',q:"Un piéton traverse hors passage, à plus de 50 m d'un passage :",qa:"مشاة يعبر خارج الممر على بعد أكثر من 50م من ممر:",opts:[
 {f:"Il est en tort, vous n'avez rien à faire",a:"هو مخطئ، لا شيء عليك"},
 {f:"Vous devez rester vigilant et céder le passage si nécessaire pour éviter l'accident",a:"يجب الانتباه وإعطاء الأولوية إن لزم لتجنب حادث"},
 {f:"Klaxonner et passer",a:"التنفير والمرور"}],
ok:[1],exp:"Même en tort, le piéton reste vulnérable : la priorité n'exonère jamais d'éviter l'accident — ralentissez et laissez passer si nécessaire.",expa:"حتى لو مخطئاً، المشاة ضعيف: الأولوية لا تعفي من تجنب الحادث — خفّف السرعة واتركه يمر إن لزم."},
// ===== CIRCULATION =====
{id:'y023',theme:'circulation',img:'distance_2s',q:"Sur autoroute à 130 km/h, la distance de sécurité en secondes :",qa:"على الأوتوروت بـ130كم/س، مسافة الأمان بالثواني:",opts:[
 {f:"1 seconde",a:"ثانية"},
 {f:"2 secondes minimum",a:"ثانيتان كحد أدنى"},
 {f:"30 mètres",a:"30م"}],
ok:[1],exp:"La règle des 2 secondes s'applique à toutes les vitesses ; à 130 km/h, cela représente environ 72 m — augmentez-la par mauvais temps.",expa:"قاعدة الثانيتين تطبق على كل السرعات؛ بـ130كم/س تمثل ~72م — زدها بطقس سيئ."},
{id:'y024',theme:'circulation',img:'depassement',q:"Avant de dépasser un véhicule, le premier réflexe :",qa:"قبل تجاوز مركبة، أول رد فعل:",opts:[
 {f:"Klaxonner",a:"التنفير"},
 {f:"Vérifier que le dépassement est possible et sûr (visibilité, signalisation, vitesse)",a:"التحقق من إمكانية وأمان التجاوز (رؤية، إشارات، سرعة)"},
 {f:"Accélérer",a:"التسارع"}],
ok:[1],exp:"Un dépassement n'est sûr que si la visibilité est suffisante, la signalisation l'autorise, la distance est libre et votre vitesse permet de revenir vite.",expa:"التجاوز آمن فقط برؤية كافية وإشارة تسمح ومسافة خالية وسرعة تتيح العودة بسرعة."},
{id:'y025',theme:'circulation',img:'brouillard',q:"Par brouillard épais sur autoroute, la vitesse maximale est :",qa:"في ضباب كثيف على الأوتوروت، السرعة القصوى:",opts:[
 {f:"50 km/h si visibilité < 50 m",a:"50كم/س إن كانت الرؤية <50م"},
 {f:"110 km/h",a:"110كم/س"},
 {f:"130 km/h",a:"130كم/س"}],
ok:[0],exp:"Par visibilité inférieure à 50 m (brouillard dense), la vitesse est limitée à 50 km/h sur toutes les routes, autoroute comprise.",expa:"برؤية أقل من 50م (ضباب كثيف)، السرعة محدودة بـ50كم/س على كل الطرق بما فيها الأوتوروت."},
{id:'y026',theme:'circulation',img:'nuit_feux',q:"La nuit sur route non éclairée sans véhicule en face, utilisez :",qa:"ليلاً على طريق غير مضاء بلا مركبة قبالتك، استخدم:",opts:[
 {f:"Feux de position",a:"أضواء الوضع"},
 {f:"Feux de route",a:"أضواء الطريق العالية"},
 {f:"Feux de croisement",a:"أضواء الالتقاء"}],
ok:[1],exp:"Hors agglomération non éclairée, les feux de route sont recommandés pour voir plus loin ; repassez en croisement dès qu'un usager approche.",expa:"خارج المناطق غير المضاءة، أضواء الطريق مستحسنة لرؤية أبعد؛ عد للالتقاء فور اقتراب مستخدم."},
{id:'y027',theme:'circulation',img:'voies_rondpoint',q:"Sur un giratoire à 2 voies, pour aller tout droit :",qa:"في دوّار بمسارين، للاستمرار مستقيماً:",opts:[
 {f:"Voie de gauche",a:"المسار الأيسر"},
 {f:"Voie de droite en sortant par la droite",a:"المسار الأيمن والخروج من اليمين"},
 {f:"N'importe",a:"أي منهما"}],
ok:[1],exp:"Pour aller tout droit : placez-vous à droite avant d'entrer, restez sur la voie extérieure et sortez par la voie de droite avec clignotant.",expa:"للاستمرار مستقيماً: انزل يميناً قبل الدخول، ابقَ في المسار الخارجي واخرج باليمين مع الإشارة."},
{id:'y028',theme:'circulation',img:'sortie_autoroute',q:"Pour sortir de l'autoroute :",qa:"للخروج من الأوتوروت:",opts:[
 {f:"Freiner fort sur la voie de gauche",a:"الفرملة بقوة على المسار الأيسر"},
 {f:"Se placer sur la voie de droite puis sur la bretelle de sortie en réduisant progressivement",a:"الانتقال للمسار الأيمن ثم مسار الخروج مع تخفيض تدريجي"},
 {f:"Sortir depuis n'importe quelle voie",a:"الخروج من أي مسار"}],
ok:[1],exp:"Annoncez votre intention (clignotant), placez-vous à droite puis empruntez la voie de décélération pour réduire votre vitesse avant la bretelle.",expa:"أعلن نيتك (إشارة)، انتقل يميناً ثم اسلك مسار التباطؤ لتخفيض سرعتك قبل مخرج الانعطاف."},
{id:'y029',theme:'circulation',img:'embouteillage',q:"En cas de ralentissement soudain sur autoroute :",qa:"عند تباطؤ مفاجئ على الأوتوروت:",opts:[
 {f:"Accélérer",a:"التسارع"},
 {f:"Allumer les feux de détresse pour avertir les suivants",a:"تشغيل أضواء الخطر لتنبيه التالين"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"Devant un ralentissement brutal ou un bouchon, allumez les warnings pour prévenir les véhicules qui suivent, puis éteignez-les une fois la file stabilisée.",expa:"أمام تباطؤ مفاجئ أو ازدحام، شغّل أضواء الخطر لتنبيه من خلفك، ثم أطفئها عند استقرار الصف."},
{id:'y030',theme:'circulation',img:'klaxon',q:"Hors agglomération, le klaxon avant un dépassement :",qa:"خارج المنطقة المأهولة، التنفير قبل التجاوز:",opts:[
 {f:"Interdit",a:"ممنوع"},
 {f:"Recommandé pour signaler votre présence",a:"مستحسن للإشارة لوجودك"},
 {f:"Obligatoire",a:"إجباري"}],
ok:[1],exp:"Hors agglomération, un bref avertissement sonore ou lumineux est recommandé avant de dépasser pour signaler votre présence au véhicule précédant.",expa:"خارج المدينة، تحذير صوتي أو ضوئي قصير مستحسن قبل التجاوز للإشارة لوجودك للمركبة الأمامية."},
{id:'y031',theme:'circulation',img:'route_glissante',q:"Sur route verglacée, la technique est :",qa:"على طريق متجمد، التقنية:",opts:[
 {f:"Freinage fort et direction franche",a:"فرملة قوية وتوجيه حازم"},
 {f:"Toutes les commandes en douceur et distance allongée",a:"كل التحكمات بنعومة ومسافة ممدودة"},
 {f:"Rouler vite pour passer",a:"القيادة بسرعة للعبور"}],
ok:[1],exp:"Sur verglas : gestes très souples (accélérateur, frein, volant), vitesse très réduite, distances très allongées, utiliser le frein moteur.",expa:"على الجليد: حركات ناعمة جداً (مسرع، فرامل، مقود)، سرعة منخفضة جداً، مسافات ممدودة جداً، استخدم فرامل المحرك."},
{id:'y032',theme:'circulation',img:'bretelle',q:"En vous insérant sur l'autoroute, vous devez :",qa:"عند اندماجك في الأوتوروت يجب:",opts:[
 {f:"Vous arrêter en fin de voie d'accélération",a:"التوقف بنهاية مسار التسارع"},
 {f:"Céder le passage aux véhicules déjà sur l'autoroute",a:"إعطاء الأولوية للمركبات الموجودة على الأوتوروت"},
 {f:"Être prioritaire",a:"كونك صاحب أولوية"}],
ok:[1],exp:"En entrant sur une autoroute ou une voie rapide, vous n'êtes pas prioritaire : cédez le passage en vous insérant à l'allure du trafic.",expa:"عند الدخول لطريق سريع، لست صاحب أولوية: أعطِ الأولوية بالاندماج بسرعة المرور."},
{id:'y033',theme:'circulation',img:'position_droite',q:"Sur une route à 3 voies ou plus dans votre sens, la voie normale est :",qa:"على طريق بـ3 مسارات أو أكثر باتجاهك، المسار الطبيعي:",opts:[
 {f:"La voie de gauche",a:"المسار الأيسر"},
 {f:"La voie la plus à droite",a:"المسار الأيمن الأقصى"},
 {f:"La voie du milieu",a:"المسار الأوسط"}],
ok:[1],exp:"La règle est de circuler sur la voie la plus à droite ; les voies de gauche sont réservées aux dépassements.",expa:"القاعدة السير على المسار الأيمن الأقصى؛ المسارات اليسرى مخصصة للتجاوز."},
{id:'y034',theme:'circulation',img:'tunnel',q:"Dans un tunnel, la distance de sécurité est :",qa:"في النفق، مسافة الأمان:",opts:[
 {f:"Réduite",a:"منخفضة"},
 {f:"Augmentée (2 bandes de la ligne de rive minimum)",a:"ممدودة (شريطان من خط الحافة كحد أدنى)"},
 {f:"Inchangée",a:"غير متغيرة"}],
ok:[1],exp:"Dans un tunnel, laissez un espace correspondant à au moins 2 traits de la ligne de rive (≈ 78 m à 90 km/h) pour éviter les carambolages.",expa:"في النفق اترك مسافة تعادل شريطين على الأقل من خط الحافة (~78م بـ90كم/س) لتجنب التصادم المتسلسل."},
// ===== STATIONNEMENT =====
{id:'y035',theme:'stationnement',img:'arretinterdit',q:"L'arrêt bref est-il permis devant ce panneau ?",qa:"هل التوقف القصير مسموح أمام هذه اللوحة؟",opts:[
 {f:"Oui",a:"نعم"},
 {f:"Non, arrêt et stationnement interdits",a:"لا، التوقف والوقوف ممنوعان"},
 {f:"Seulement 5 minutes",a:"فقط 5 دقائق"}],
ok:[1],exp:"Le panneau à double barre rouge interdit à la fois l'arrêt (même bref) et le stationnement.",expa:"اللوحة بخطين أحمرين تمنع التوقف (حتى القصير) والوقوف معاً."},
{id:'y036',theme:'stationnement',img:'parking',q:"Ce panneau avec 'P' et un panonceau 'payant' signifie :",qa:"هذه اللوحة مع 'P' ولوحة 'مدفوع' تعني:",opts:[
 {f:"Parking gratuit",a:"موقف مجاني"},
 {f:"Stationnement payant",a:"وقوف مدفوع"},
 {f:"Interdiction",a:"منع"}],
ok:[1],exp:"Le panneau P assorti du panonceau 'payant' ou 'horodateur' indique un stationnement payant à l'horodateur ou par ticket.",expa:"لوحة P مع لوحة 'مدفوع' أو 'عداد' تدل على وقوف مدفوع بالعداد أو التذكرة."},
{id:'y037',theme:'stationnement',img:'cote_descente',q:"En stationnement en descente, il faut aussi :",qa:"عند الوقوف في نزول يجب أيضاً:",opts:[
 {f:"Laisser le point mort",a:"ترك المحايد"},
 {f:"Passer une vitesse (marche arrière) ou 'P' en automatique",a:"وضع ترس (رجوع) أو 'P' في الأوتوماتيك"},
 {f:"Retirer le frein à main",a:"فك الفرامل اليدوية"}],
ok:[1],exp:"En descente : roues braquées vers le trottoir + frein de parking + vitesse enclenchée (marche arrière en boîte manuelle, 'P' en automatique).",expa:"في النزول: عجلات موجهة للرصيف + فرامل يدوية + ترس مركب (رجوع يدوي، 'P' أوتوماتيك)."},
{id:'y038',theme:'stationnement',img:'handicape',q:"Stationner sans carte sur une place handicapé :",qa:"الوقوف بلا بطاقة على موقف معاق:",opts:[
 {f:"Est toléré 5 min",a:"مسموح 5 دقائق"},
 {f:"Est une infraction passible d'amende et de fourrière",a:"مخالفة تستوجب غرامة وسحب للمتحف"},
 {f:"Est autorisé la nuit",a:"مسموح ليلاً"}],
ok:[1],exp:"Stationner sur une place GIG/GIC sans carte de stationnement est une infraction grave (amende forfaitaire majorée + mise en fourrière possible).",expa:"الوقوف على موقف GIG/GIC بلا بطاقة مخالفة خطيرة (غرامة كبرى + سحب محتمل)."},
{id:'y039',theme:'stationnement',img:'creneau',q:"Le créneau se fait :",qa:"الموقف الموازي يُنجز:",opts:[
 {f:"En marche avant",a:"بالأمام"},
 {f:"En marche arrière en braquant",a:"بالرجوع مع التوجيه"},
 {f:"En ligne droite",a:"بخط مستقيم"}],
ok:[1],exp:"Le créneau se réalise en marche arrière : parallèle au véhicule avant, braquage à droite puis contre-braquage pour s'insérer.",expa:"الموقف الموازي يُنجز بالرجوع: موازياً للمركبة الأمامية، توجيه يمين ثم عكسه للاندماج."},
{id:'y040',theme:'stationnement',img:'double_file',q:"La double file est un stationnement :",qa:"الصف المزدوج وقوف:",opts:[
 {f:"Gênant interdit",a:"معيق ممنوع"},
 {f:"Toléré",a:"مسموح"},
 {f:"Gratuit",a:"مجاني"}],
ok:[0],exp:"La double file est un stationnement gênant, verbalisable : elle gêne la circulation et peut être verbalisée même pour un bref arrêt.",expa:"الصف المزدوج وقوف معيق يستوجب غرامة: يعيق المرور وقد يُخالف حتى للتوقف القصير."},
{id:'y041',theme:'stationnement',img:'horloge_arret',q:"Le disque de stationnement se règle sur :",qa:"قرص التوقيت يُضبط على:",opts:[
 {f:"L'heure de départ",a:"وقت المغادرة"},
 {f:"L'heure d'arrivée",a:"وقت الوصول"},
 {f:"N'importe quelle heure",a:"أي وقت"}],
ok:[1],exp:"Le disque doit indiquer l'heure d'arrivée (arrondie au quart d'heure supérieur) pour permettre le contrôle de la durée autorisée.",expa:"القرص يُضبط على وقت الوصول (مقرباً للربع ساعة الأعلى) للتحقق من المدة المسموحة."},
{id:'y042',theme:'stationnement',img:'panneau_masque',q:"Un panneau 'interdiction de stationner' masqué par un véhicule :",qa:"لوحة 'منع وقوف' محجوبة بمركبة:",opts:[
 {f:"Ne s'applique pas",a:"لا تسري"},
 {f:"S'applique toujours",a:"تبقى سارية"},
 {f:"N'existe pas",a:"غير موجودة"}],
ok:[1],exp:"La signalisation s'applique même partiellement masquée ; le conducteur doit rester attentif et respecter les règles générales de stationnement.",expa:"الإشارات تسري حتى لو محجوبة جزئياً؛ على السائق الانتباه واحترام قواعد الوقوف العامة."},
// ===== VEHICULE =====
{id:'y043',theme:'vehicule',img:'voyant_huile',q:"Le témoin d'huile qui s'allume en roulant :",qa:"مؤشر الزيت المضاء أثناء السير:",opts:[
 {f:"Continuer jusqu'au prochain garage",a:"الاستمرار لأقرب مرآب"},
 {f:"S'arrêter rapidement et couper le moteur",a:"التوقف بسرعة وإطفاء المحرك"},
 {f:"Accélérer",a:"التسارع"}],
ok:[1],exp:"Le voyant d'huile allumé en roulant signale un manque de pression d'huile : arrêtez-vous rapidement en lieu sûr et coupez le moteur pour éviter la casse.",expa:"مؤشر الزيت المضاء أثناء السير يعني نقص ضغط: توقف بسرعة في مكان آمن وأطفئ المحرك لتجنب التلف."},
{id:'y044',theme:'vehicule',img:'pneu',q:"L'usure des pneus se vérifie par :",qa:"تآكل الإطارات يُفحص عبر:",opts:[
 {f:"Le bruit",a:"الصوت"},
 {f:"Le témoin d'usure (1,6 mm minimum de sculpture)",a:"مؤشر التآكل (1.6مم حد أدنى للنحت)"},
 {f:"La couleur",a:"اللون"}],
ok:[1],exp:"Les pneus doivent avoir au moins 1,6 mm de sculpture (témoins intégrés) ; en dessous, l'adhérence sur sol mouillé chute fortement.",expa:"الإطارات تحتاج 1.6مم نحتاً كحد أدنى (مؤشرات مدمجة)؛ دونها ينخفض التماسك على الرطب بشدة."},
{id:'y045',theme:'vehicule',img:'voyant_batterie',q:"Le témoin de batterie qui reste allumé indique :",qa:"مؤشر البطارية الباقي مضاءً يدل على:",opts:[
 {f:"Une charge correcte",a:"شحن صحيح"},
 {f:"Un défaut de charge (alternateur, courroie)",a:"عطل شحن (مولّد، سير)"},
 {f:"Des phares allumés",a:"أضواء مشتعلة"}],
ok:[1],exp:"Le voyant batterie allumé en roulant signale que la batterie ne se recharge plus (alternateur, courroie) : arrêtez-vous avant la panne totale.",expa:"مؤشر البطارية المضاء أثناء السير يعني عدم شحنها (مولّد، سير): توقف قبل النفاد الكامل."},
{id:'y046',theme:'vehicule',img:'controle_technique',q:"Rouler avec un contrôle technique en retard expose à :",qa:"القيادة بفحص تقني متأخر تعرضك لـ:",opts:[
 {f:"Rien",a:"لا شيء"},
 {f:"Une amende et l'immobilisation du véhicule",a:"غرامة وتوقيف المركبة"},
 {f:"Un avertissement",a:"تحذير"}],
ok:[1],exp:"Rouler sans CT valide est verbalisable (amende forfaitaire) et le véhicule peut être immobilisé jusqu'à mise en conformité.",expa:"القيادة بلا فحص صالح مخالفة (غرامة) وقد توقف المركبة حتى التصحيح."},
{id:'y047',theme:'vehicule',img:'capot',q:"Le liquide de frein se contrôle :",qa:"سائل الفرامل يُفحص:",opts:[
 {f:"Jamais",a:"أبداً"},
 {f:"Régulièrement entre MIN et MAX",a:"بانتظام بين MIN وMAX"},
 {f:"Une fois par an",a:"مرة بالسنة"}],
ok:[1],exp:"Le niveau de liquide de frein doit rester entre MIN et MAX ; une baisse anormale signale une fuite ou des plaquettes usées — faites vérifier.",expa:"مستوى سائل الفرامل يجب أن يبقى بين MIN وMAX؛ انخفاض غير طبيعي يعني تسريباً أو بطانات متآكلة — افحصه."},
{id:'y048',theme:'vehicule',img:'lave_glace',q:"Le lave-glace sert à :",qa:"سائل غسّال الزجاج يُستخدم لـ:",opts:[
 {f:"Nettoyer le pare-brise en roulant",a:"تنظيف الزجاج أثناء السير"},
 {f:"Refroidir le moteur",a:"تبريد المحرك"},
 {f:"Laver la carrosserie",a:"غسل الهيكل"}],
ok:[0],exp:"Le lave-glace (avec essuie-glaces) maintient la visibilité ; utilisez un produit antigel en hiver.",expa:"سائل الغسّال (مع المساحات) يحافظ على الرؤية؛ استخدم مضاداً للتجمد شتاءً."},
{id:'y049',theme:'vehicule',img:'thermometre',q:"Une température moteur excessive peut provenir :",qa:"حرارة محرك زائدة قد تنشأ من:",opts:[
 {f:"Niveau de liquide de refroidissement insuffisant",a:"نقص سائل التبريد"},
 {f:"Pneus dégonflés",a:"إطارات منخفضة"},
 {f:"Essuie-glaces",a:"مساحات"}],
ok:[0],exp:"La surchauffe vient souvent d'un manque de liquide de refroidissement, d'une courroie cassée ou d'un problème de pompe/ventilateur.",expa:"السخونة الزائدة تنشأ غالباً من نقص سائل التبريد أو سير مقطوع أو مشكلة مضخة/مروحة."},
{id:'y050',theme:'vehicule',img:'carte_grise',q:"Après un changement de propriétaire, la carte grise doit être refaite :",qa:"بعد تغيير المالك، البطاقة الرمادية يجب تجديدها:",opts:[
 {f:"Dans le mois",a:"خلال شهر"},
 {f:"Dans les 6 mois",a:"خلال 6 أشهر"},
 {f:"Jamais",a:"أبداً"}],
ok:[0],exp:"Le nouveau propriétaire a un mois pour faire établir le certificat d'immatriculation à son nom après l'achat.",expa:"على المالك الجديد شهر لإصدار شهادة التسجيل باسمه بعد الشراء."},
{id:'y051',theme:'vehicule',img:'voyant_frein',q:"Un témoin de frein allumé en permanence peut indiquer :",qa:"مؤشر فرامل مضاء باستمرار قد يدل على:",opts:[
 {f:"Plaquettes usées ou niveau de liquide bas",a:"بطانات متآكلة أو مستوى سائل منخفض"},
 {f:"Pneus",a:"إطارات"},
 {f:"Radio",a:"راديو"}],
ok:[0],exp:"Un voyant de frein allumé signale une usure des plaquettes, un niveau de liquide insuffisant ou un problème de circuit — faites vérifier immédiatement.",expa:"مؤشر فرامل مضاء يعني بطانات متآكلة أو سائل ناقص أو مشكلة دائرة — افحص فوراً."},
{id:'y052',theme:'vehicule',img:'documents',q:"Les documents à présenter en cas de contrôle routier :",qa:"الوثائق المطلوبة عند تفتيش الطريق:",opts:[
 {f:"Seulement le permis",a:"الرخصة فقط"},
 {f:"Permis, carte grise, attestation d'assurance",a:"الرخصة والرمادية وشهادة التأمين"},
 {f:"Un justificatif de domicile",a:"إثبات سكن"}],
ok:[1],exp:"En contrôle routier : permis de conduire, certificat d'immatriculation (carte grise) et attestation d'assurance sont obligatoires.",expa:"عند تفتيش الطريق: رخصة القيادة وشهادة التسجيل وشهادة التأمين إجبارية."},
// ===== SECURITE =====
{id:'y053',theme:'securite',img:'ceinture',q:"Une femme enceinte :",qa:"المرأة الحامل:",opts:[
 {f:"Est dispensée de ceinture",a:"معفاة من الحزام"},
 {f:"Doit porter la ceinture correctement positionnée",a:"يجب ربط الحزام بوضع صحيح"},
 {f:"Ne peut pas conduire",a:"لا تستطيع القيادة"}],
ok:[1],exp:"La femme enceinte doit porter la ceinture : la sangle abdominale basse sur le bassin (pas sur le ventre) et la diagonale entre les seins.",expa:"على الحامل ربط الحزام: الجزء السفلي منخفضاً على الحوض (ليس على البطن) والقطرية بين الثديين."},
{id:'y054',theme:'securite',img:'siege_enfant',q:"Un enfant doit voyager dos à la route jusqu'à :",qa:"الطفل يجب أن يسافر باتجاه الخلف حتى:",opts:[
 {f:"6 mois",a:"6 أشهر"},
 {f:"15 mois minimum (recommandé 4 ans)",a:"15 شهراً كحد أدنى (مستحسن 4 سنوات)"},
 {f:"10 ans",a:"10 سنوات"}],
ok:[1],exp:"La norme i-Size impose le dos à la route jusqu'à 15 mois minimum ; les experts recommandent de le prolonger jusqu'à 4 ans pour la sécurité.",expa:"معيار i-Size يفرض اتجاه الخلف حتى 15 شهراً كحد أدنى؛ الخبراء يوصون بتمديده لـ4 سنوات للسلامة."},
{id:'y055',theme:'securite',img:'gilet',q:"Le gilet de haute visibilité doit être :",qa:"سترة الرؤية العالية يجب أن:",opts:[
 {f:"Restée dans le coffre",a:"تبقى في الصندوق"},
 {f:"À portée de main dans l'habitacle",a:"في متناول اليد داخل المقصورة"},
 {f:"Optionnelle",a:"اختيارية"}],
ok:[1],exp:"Le gilet doit être accessible dans l'habitacle pour l'enfiler avant de descendre ; le triangle est dans le coffre.",expa:"السترة يجب أن تكون متاحة داخل المقصورة لارتدائها قبل النزول؛ المثلث في الصندوق."},
{id:'y056',theme:'securite',img:'accident_scene',q:"En découvrant un accident, vous devez d'abord :",qa:"عند اكتشاف حادث يجب أولاً:",opts:[
 {f:"Secourir immédiatement",a:"الإسعاف فوراً"},
 {f:"Protéger la zone pour éviter un suraccident",a:"حماية المنطقة لتجنب حادث لاحق"},
 {f:"Appeler",a:"الاتصال"}],
ok:[1],exp:"La première étape est 'protéger' : sécurisez la zone (feux de détresse, triangle, gilet) pour éviter un suraccident avant d'alerter et secourir.",expa:"الخطوة الأولى 'الحماية': أمّن المنطقة (أضواء خطر، مثلث، سترة) لتجنب حادث تالٍ قبل الإنذار والإسعاف."},
{id:'y057',theme:'securite',img:'alcool',q:"Boire un café ou prendre une douche froide après avoir bu :",qa:"شرب قهوة أو أخذ دش بارد بعد الشرب:",opts:[
 {f:"Fait baisser l'alcoolémie",a:"يخفض نسبة الكحول"},
 {f:"N'accélère pas l'élimination de l'alcool",a:"لا يسرّع التخلص من الكحول"},
 {f:"Annule l'alcool",a:"يلغي الكحول"}],
ok:[1],exp:"Rien n'accélère l'élimination de l'alcool (ni café, ni douche, ni sucre) : seul le temps la réduit (~0,10 à 0,15 g/l par heure).",expa:"لا شيء يسرّع التخلص من الكحول (لا قهوة ولا دش ولا سكر): الوقت وحده يخفضها (~0.10-0.15غ/ل بالساعة)."},
{id:'y058',theme:'securite',img:'derapage',q:"Pour éviter l'aquaplaning :",qa:"لتجنب التزحلق المائي:",opts:[
 {f:"Rouler vite",a:"القيادة بسرعة"},
 {f:"Réduire la vitesse par temps de pluie et vérifier les pneus",a:"تخفيف السرعة في المطر وفحص الإطارات"},
 {f:"Freiner fort",a:"الفرملة بقوة"}],
ok:[1],exp:"L'aquaplaning survient quand l'eau ne s'évacue plus : vitesse modérée par forte pluie, pneus en bon état (sculpture suffisante) pour l'éviter.",expa:"التزحلق المائي يحدث حين لا يُصرف الماء: سرعة معتدلة في المطر الغزير وإطارات سليمة (نحت كافٍ) لتجنبه."},
{id:'y059',theme:'securite',img:'pause_cafe',q:"La pause recommandée en long trajet est toutes les :",qa:"الاستراحة الموصى بها في الرحلة الطويلة كل:",opts:[
 {f:"4 heures",a:"4 ساعات"},
 {f:"2 heures",a:"ساعتين"},
 {f:"6 heures",a:"6 ساعات"}],
ok:[1],exp:"Faites une pause de 15 à 20 minutes toutes les 2 heures (ou 100-200 km) pour lutter contre la fatigue.",expa:"خذ استراحة 15-20 دقيقة كل ساعتين (أو 100-200كم) لمكافحة التعب."},
{id:'y060',theme:'securite',img:'angle_mort',q:"Avant de tourner à droite, le dernier contrôle :",qa:"قبل الانعطاف يميناً، آخر فحص:",opts:[
 {f:"Rétroviseur intérieur",a:"المرآة الداخلية"},
 {f:"Angle mort droit (cycliste, piéton)",a:"النقطة العمياء اليمنى (دراج، مشاة)"},
 {f:"Compteur",a:"العداد"}],
ok:[1],exp:"Avant de tourner à droite : rétroviseur + angle mort droit pour repérer un cycliste ou piéton masqué, souvent victime de ce type d'accident.",expa:"قبل الانعطاف يميناً: مرآة + نقطة عمياء يمنى لرصد دراج أو مشاة مخفي، غالباً ضحية هذا النوع من الحوادث."},
{id:'y061',theme:'securite',img:'fatigue',q:"La conduite de nuit augmente le risque de somnolence car :",qa:"القيادة الليلية تزيد خطر النعاس لأن:",opts:[
 {f:"Il fait noir",a:"الجو مظلم"},
 {f:"Le corps est programmé pour dormir (rythme circadien)",a:"الجسم مبرمج للنوم (إيقاع يومي)"},
 {f:"Il n'y a pas de circulation",a:"لا يوجد مرور"}],
ok:[1],exp:"Le rythme circadien rend la nuit (surtout 2h-6h) plus propice à l'endormissement ; la vigilance baisse et les micro-sommeils sont fréquents.",expa:"الإيقاع اليومي يجعل الليل (خاصة 2-6ص) أكثر ملاءمة للنعاس؛ اليقظة تنخفض والنعاسات القصيرة شائعة."},
{id:'y062',theme:'securite',img:'feux_detresse',q:"Sur la bande d'arrêt d'urgence, il faut aussi :",qa:"على مسار التوقف الطارئ يجب أيضاً:",opts:[
 {f:"Éteindre les feux",a:"إطفاء الأضواء"},
 {f:"Allumer feux de détresse et feux de position",a:"تشغيل أضواء الخطر وأضواء الوضع"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"En immobilisation d'urgence : feux de détresse + feux de position (de nuit) pour signaler le véhicule, puis gilet avant de descendre.",expa:"عند التوقف الطارئ: أضواء خطر + أضواء وضع (ليلاً) للإشارة للمركبة، ثم سترة قبل النزول."},
{id:'y063',theme:'securite',img:'ceinture',q:"Le non-port de la ceinture est sanctionné par :",qa:"عدم ربط الحزام يُعاقب بـ:",opts:[
 {f:"Rien",a:"لا شيء"},
 {f:"Amende forfaitaire et retrait de 3 points",a:"غرامة وسحب 3 نقاط"},
 {f:"Prison",a:"سجن"}],
ok:[1],exp:"Le non-port de la ceinture est une infraction de 4e classe : amende forfaitaire de 135 € et retrait de 3 points.",expa:"عدم ربط الحزام مخالفة من الدرجة الرابعة: غرامة 135€ وسحب 3 نقاط."},
// ===== USAGERS =====
{id:'y064',theme:'usagers',img:'moto',q:"Les motards circulant entre les files en bouchon :",qa:"الدراجون الناريون السائرون بين الصفوف في الازدحام:",opts:[
 {f:"C'est toujours interdit",a:"ممنوع دائماً"},
 {f:"C'est toléré dans certaines conditions expérimentales",a:"مسموح في شروط تجريبية معينة"},
 {f:"C'est la règle",a:"هي القاعدة"}],
ok:[1],exp:"La circulation inter-files est autorisée à titre expérimental dans certains départements sous conditions (vitesse limitée, voies dédiées) ; restez vigilant.",expa:"السير بين الصفوف مسموح تجريبياً في بعض الأقسام بشروط (سرعة محدودة، مسارات مخصصة)؛ ابقَ منتبهاً."},
{id:'y065',theme:'usagers',img:'passage_velo',q:"En tournant à droite sur une piste cyclable continue :",qa:"عند الانعطاف يميناً على مسار دراجات متصل:",opts:[
 {f:"Vous êtes prioritaire",a:"أنت صاحب أولوية"},
 {f:"Vous cédez le passage aux cyclistes",a:"تعطي الأولوية للدراجين"},
 {f:"Vous passez",a:"تمر"}],
ok:[1],exp:"Pour tourner à droite en traversant une piste cyclable, cédez le passage aux cyclistes qui la suivent.",expa:"للانعطاف يميناً عبر مسار دراجات، أعطِ الأولوية للدراجين المستمرين عليه."},
{id:'y066',theme:'usagers',img:'trottinette',q:"Une trottinette électrique sur le trottoir :",qa:"سكوتر كهربائي على الرصيف:",opts:[
 {f:"Toujours autorisé",a:"مسموح دائماً"},
 {f:"Interdit sauf autorisation locale à allure de pas",a:"ممنوع إلا بإذن محلي بخطى المشي"},
 {f:"Obligatoire",a:"إجباري"}],
ok:[1],exp:"Les trottoirs sont réservés aux piétons ; les EDPM n'y sont admis que si le maire l'autorise, à l'allure du pas (6 km/h max).",expa:"الأرصفة مخصصة للمشاة؛ السكوترات لا تُقبل إلا بإذن البلدية بخطى المشي (6كم/س قصوى)."},
{id:'y067',theme:'usagers',img:'groupe_enfants',q:"Un groupe scolaire encadré traverse :",qa:"مجموعة مدرسية بمرافقة تعبر:",opts:[
 {f:"Vous passez entre le groupe",a:"تمر بين المجموعة"},
 {f:"Vous vous arrêtez pour laisser passer tout le groupe",a:"تتوقف لتمرير المجموعة كلها"},
 {f:"Vous klaxonnez",a:"تنفّر"}],
ok:[1],exp:"Face à un groupe d'enfants encadré, arrêtez-vous et laissez passer l'ensemble — ne coupez jamais le groupe.",expa:"أمام مجموعة أطفال بمرافقة، توقف ودع الكل يمر — لا تقطع المجموعة أبداً."},
{id:'y068',theme:'usagers',img:'bus_arret',q:"Derrière un bus à l'arrêt, méfiez-vous :",qa:"خلف حافلة متوقفة، احذر:",opts:[
 {f:"Des piétons qui traversent devant le bus",a:"المشاة العابرين أمام الحافلة"},
 {f:"De la pluie",a:"المطر"},
 {f:"Du vent",a:"الريح"}],
ok:[0],exp:"Le bus masque la vue : des piétons (souvent des enfants ou des voyageurs pressés) peuvent surgir de devant — ralentissez et laissez un espace.",expa:"الحافلة تحجب الرؤية: مشاة (غالباً أطفال أو مسافرون مستعجلون) قد يظهرون أمامها — خفّف السرعة واترك مسافة."},
{id:'y069',theme:'usagers',img:'enfant_cache',q:"Un enfant peut surgir entre deux voitures ; pour l'éviter :",qa:"قد يظهر طفل بين سيارتين؛ لتجنبه:",opts:[
 {f:"Rouler vite",a:"القيادة بسرعة"},
 {f:"Ralentir et regarder sous et entre les véhicules",a:"التخفيف والنظر تحت وبين المركبات"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"Près des véhicules en stationnement ou des obstacles, ralentissez et surveillez les espaces : un enfant peut surgir sans prévenir.",expa:"قرب المركبات المتوقفة أو العوائق، خفّف السرعة وراقب الفراغات: طفل قد يظهر دون إنذار."},
{id:'y070',theme:'usagers',img:'usagers_vulnerables',q:"Un piéton âgé traverse lentement :",qa:"مشاة مسن يعبر ببطء:",opts:[
 {f:"Klaxonner pour le presser",a:"التنفير ليُسرع"},
 {f:"Rester patient et le laisser finir sa traversée",a:"الصبر وتركه يُكمل عبوره"},
 {f:"Le frôler",a:"الاقتراب منه"}],
ok:[1],exp:"Les personnes âgées traversent lentement : patience, pas de klaxon, laissez-leur le temps de finir leur traversée en sécurité.",expa:"المسنون يعبرون ببطء: صبر، بلا تنفير، اتركهم يُكملون عبورهم بأمان."},
{id:'y071',theme:'usagers',img:'rue_etroite',q:"Dans une rue très étroite derrière un cycliste :",qa:"في شارع ضيق جداً خلف دراج:",opts:[
 {f:"Le dépasser en le frôlant",a:"تجاوزه قريباً منه"},
 {f:"Rester derrière jusqu'à pouvoir dépasser à 1 m",a:"البقاء خلفه حتى التمكن من تجاوزه بمتر"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"Si la rue est trop étroite pour dépasser à distance réglementaire (1 m en ville), restez derrière le cycliste en sécurité jusqu'à pouvoir passer.",expa:"إن كان الشارع ضيقاً جداً للتجاوز بالمسافة النظامية (متر بالمدينة)، ابقَ خلف الدراج بأمان حتى الإمكان."},
{id:'y072',theme:'usagers',img:'zone_rencontre',q:"En zone de rencontre, un véhicule peut :",qa:"في منطقة اللقاء، يمكن للمركبة:",opts:[
 {f:"Dépasser les piétons librement",a:"تجاوز المشاة بحرية"},
 {f:"Circuler à 20 km/h max en respectant la priorité des piétons",a:"السير بـ20كم/س قصوى مع احترام أولوية المشاة"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"La zone de rencontre limite à 20 km/h ; piétons et cyclistes ont la priorité et peuvent occuper la chaussée.",expa:"منطقة اللقاء تحد بـ20كم/س؛ للمشاة والدراجين الأولوية وقد يشغلون الطريق."},
{id:'y073',theme:'usagers',img:'canne_blanche',q:"La canne blanche à bande rouge indique :",qa:"العصا البيضاء ذات الشريط الأحمر تدل على:",opts:[
 {f:"Un guide",a:"مرشد"},
 {f:"Une personne aveugle ou malvoyante",a:"شخص كفيف أو ضعيف البصر"},
 {f:"Un bâton de marche",a:"عصا مشي"}],
ok:[1],exp:"La canne blanche signale une personne aveugle ou malvoyante : cédez-lui le passage et offrez votre aide si nécessaire.",expa:"العصا البيضاء تدل على كفيف أو ضعيف بصر: أعطِه الأولوية واعرض مساعدتك إن لزم."},
// ===== CONDUCTEUR =====
{id:'y074',theme:'conducteur',img:'permis_points',q:"Un excès de vitesse de +50 km/h entraîne :",qa:"تجاوز السرعة بـ+50كم/س يؤدي إلى:",opts:[
 {f:"Une simple amende",a:"مجرد غرامة"},
 {f:"Suspension du permis, amende lourde et retrait de 6 points",a:"تعليق الرخصة وغرامة ثقيلة وسحب 6 نقاط"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"L'excès de vitesse ≥ 50 km/h est un délit : forte amende, suspension possible, retrait de 6 points et stage de sensibilisation.",expa:"تجاوز السرعة ≥50كم/س جنحة: غرامة كبيرة وتعليق محتمل وسحب 6 نقاط ودورة توعية."},
{id:'y075',theme:'conducteur',img:'permis_suspendu',q:"Une suspension de permis peut être demandée :",qa:"تعليق الرخصة قد يُطلب:",opts:[
 {f:"Par le conducteur",a:"من السائق"},
 {f:"Par le préfet ou le juge après une infraction grave",a:"من المحافظ أو القاضي بعد مخالفة خطيرة"},
 {f:"Automatiquement à 60 ans",a:"تلقائياً عند 60 سنة"}],
ok:[1],exp:"La suspension est prononcée par le préfet (administrative) ou le juge (judiciaire) après des infractions graves (alcool, excès de vitesse, délit de fuite...).",expa:"التعليق يصدر من المحافظ (إداري) أو القاضي (قضائي) بعد مخالفات خطيرة (كحول، سرعة، هروب...)."},
{id:'y076',theme:'conducteur',img:'permis_a',q:"Pendant la période probatoire, la vitesse sur autoroute est limitée à :",qa:"أثناء الفترة التجريبية، السرعة على الأوتوروت محدودة بـ:",opts:[
 {f:"130 km/h",a:"130كم/س"},
 {f:"110 km/h",a:"110كم/س"},
 {f:"90 km/h",a:"90كم/س"}],
ok:[1],exp:"Les conducteurs probatoires ont des vitesses réduites : 110 km/h sur autoroute (au lieu de 130), 100 sur voies express, 80 sur routes.",expa:"أصحاب الرخص التجريبية لهم سرعات مخفضة: 110كم/س على الأوتوروت (بدل 130)، 100 على السريعة، 80 على الطرق."},
{id:'y077',theme:'conducteur',img:'documents',q:"La vignette verte d'assurance doit être :",qa:"ملصق التأمين الأخضر يجب أن:",opts:[
 {f:"Restée au garage",a:"يبقى في المرآب"},
 {f:"Apposée visiblement sur le pare-brise",a:"يلصق ظاهراً على الزجاج الأمامي"},
 {f:"Perdue",a:"مفقود"}],
ok:[1],exp:"La vignette d'assurance doit être apposée sur le pare-brise (ou le cadre pour les deux-roues) et l'attestation conservée à bord.",expa:"ملصق التأمين يجب أن يُلصق على الزجاج الأمامي (أو الهيكل للعجلتين) والشهادة تُحفظ في المركبة."},
{id:'y078',theme:'conducteur',img:'assurance',q:"L'assurance 'tous risques' couvre :",qa:"تأمين 'كل المخاطر' يغطي:",opts:[
 {f:"Seulement les tiers",a:"الغير فقط"},
 {f:"Les tiers + les dommages à votre véhicule",a:"الغير + أضرار مركبتك"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"L'assurance au tiers couvre uniquement les dommages causés aux autres ; la 'tous risques' ajoute les dommages à votre propre véhicule.",expa:"التأمين على الغير يغطي فقط أضرار الآخرين؛ 'كل المخاطر' يضيف أضرار مركبتك الخاصة."},
{id:'y079',theme:'conducteur',img:'examen',q:"À l'épreuve pratique, l'examinateur évalue :",qa:"في الاختبار العملي، الفاحص يقيّم:",opts:[
 {f:"La vitesse",a:"السرعة"},
 {f:"Votre capacité à conduire en sécurité et en autonomie",a:"قدرتك على القيادة بأمان واستقلالية"},
 {f:"Votre voiture",a:"سيارتك"}],
ok:[1],exp:"L'épreuve pratique vérifie votre capacité à circuler en sécurité, respecter le code, analyser les situations et conduire de manière autonome (~32 min).",expa:"الاختبار العملي يتحقق من قدرتك على السير بأمان واحترام القواعد وتحليل المواقف والقيادة باستقلالية (~32 دقيقة)."},
{id:'y080',theme:'conducteur',img:'permis_b',q:"Le permis B autorise la conduite de :",qa:"رخصة B تسمح بقيادة:",opts:[
 {f:"Poids lourds",a:"شاحنات"},
 {f:"Voitures particulières, camionnettes ≤ 3,5 t, 9 places max",a:"سيارات خاصة وفانات ≤3.5طن، 9 مقاعد قصوى"},
 {f:"Motos",a:"دراجات"}],
ok:[1],exp:"Le permis B couvre les voitures particulières et les utilitaires légers jusqu'à 3,5 t PTAC et 9 places.",expa:"رخصة B تغطي السيارات الخاصة والمركبات الخفيفة حتى 3.5طن وزن إجمالي و9 مقاعد."},
{id:'y081',theme:'conducteur',img:'medicament',q:"Un médicament avec pictogramme 'niveau 3' :",qa:"دواء برمز 'مستوى 3':",opts:[
 {f:"Sans danger",a:"بلا خطر"},
 {f:"Interdit de conduire (danger important)",a:"يمنع القيادة (خطر كبير)"},
 {f:"Autorisé",a:"مسموح"}],
ok:[1],exp:"Les pictogrammes médicaments vont de 1 (soyez prudent) à 3 (ne conduisez pas) ; le niveau 3 interdit la conduite.",expa:"رموز الأدوية من 1 (كن حذراً) إلى 3 (لا تقُد)؛ المستوى 3 يمنع القيادة."},
{id:'y082',theme:'conducteur',img:'maison_adresse',q:"Le changement d'adresse sur la carte grise se fait :",qa:"تغيير العنوان على البطاقة الرمادية يتم:",opts:[
 {f:"En préfecture",a:"في المحافظة"},
 {f:"En ligne sur le site de l'ANTS",a:"عبر موقع ANTS"},
 {f:"Par téléphone",a:"بالهاتف"}],
ok:[1],exp:"Toutes les démarches carte grise (changement d'adresse, duplicata, cession) se font en ligne sur le site de l'ANTS (Agence Nationale des Titres Sécurisés).",expa:"كل إجراءات الرمادية (عنوان، نسخة، تنازل) تتم عبر موقع ANTS (الوكالة الوطنية للوثائق الآمنة)."},
// ===== ENVIRONNEMENT =====
{id:'y083',theme:'environnement',img:'eco_feuille',q:"Passer les rapports tôt (vers 2000-2500 tr/min) :",qa:"تبديل التروس مبكراً (~2000-2500د/د):",opts:[
 {f:"Augmente la consommation",a:"يزيد الاستهلاك"},
 {f:"Réduit la consommation",a:"يقلل الاستهلاك"},
 {f:"Abîme le moteur",a:"يؤذي المحرك"}],
ok:[1],exp:"Monter les rapports à bas régime (sous-régime) réduit la consommation et le bruit ; évitez de tirer les rapports.",expa:"رفع التروس بسرعة منخفضة (دون إجهاد) يقلل الاستهلاك والضجيج؛ تجنب شد التروس."},
{id:'y084',theme:'environnement',img:'coffre',q:"La surcharge du véhicule :",qa:"التحميل الزائد للمركبة:",opts:[
 {f:"Améliore la tenue de route",a:"يحسّن الثبات"},
 {f:"Augmente la consommation et la distance de freinage",a:"يزيد الاستهلاك ومسافة الفرملة"},
 {f:"N'a pas d'effet",a:"لا تأثير"}],
ok:[1],exp:"La surcharge (poids ou coffre de toit) augmente la consommation, la distance de freinage et dégrade la tenue de route ; respectez la charge utile.",expa:"التحميل الزائد (وزن أو صندوق سقف) يزيد الاستهلاك ومسافة الفرملة ويضر بالثبات؛ احترم الحمولة الصالحة."},
{id:'y085',theme:'environnement',img:'start_stop',q:"Le Start & Stop coupe le moteur :",qa:"Start & Stop يطفئ المحرك:",opts:[
 {f:"Jamais",a:"أبداً"},
 {f:"Automatiquement à l'arrêt (feu, stop, embouteillage)",a:"تلقائياً عند التوقف (ضوء، وقف، ازدحام)"},
 {f:"En roulant",a:"أثناء السير"}],
ok:[1],exp:"Le Start & Stop éteint le moteur aux arrêts et le redémarre instantanément pour économiser le carburant en ville.",expa:"Start & Stop يطفئ المحرك عند التوقفات ويعيده فوراً لتوفير الوقود في المدينة."},
{id:'y086',theme:'environnement',img:'bruit',q:"Un pot d'échappement défectueux :",qa:"عادم معطّل:",opts:[
 {f:"Améliore le son",a:"يحسّن الصوت"},
 {f:"Augmente le bruit et la pollution",a:"يزيد الضجيج والتلوث"},
 {f:"Sans effet",a:"بلا تأثير"}],
ok:[1],exp:"Un pot percé ou défectueux augmente la pollution sonore et les émissions ; il doit être réparé rapidement et peut faire échouer le CT.",expa:"العادم المثقوب أو المعطّل يزيد التلوث الضوضائي والانبعاثات؛ يجب إصلاحه بسرعة وقد يرسب الفحص."},
{id:'y087',theme:'environnement',img:'zfe',q:"La vignette Crit'Air classe les véhicules selon :",qa:"ملصق Crit'Air يصنف المركبات حسب:",opts:[
 {f:"Leur couleur",a:"لونها"},
 {f:"Leur niveau d'émissions polluantes",a:"مستوى انبعاثاتها الملوثة"},
 {f:"Leur prix",a:"سعرها"}],
ok:[1],exp:"La vignette Crit'Air (0 électrique à 5 diesel ancien) classe les véhicules selon leurs émissions ; elle conditionne l'accès aux ZFE.",expa:"ملصق Crit'Air (0 كهربائي إلى 5 ديزل قديم) يصنف المركبات حسب انبعاثاتها؛ يحدد الدخول لمناطق ZFE."},
{id:'y088',theme:'environnement',img:'ralenti',q:"Laissez tourner le moteur à l'arrêt :",qa:"ترك المحرك يعمل أثناء التوقف:",opts:[
 {f:"C'est écologique",a:"بيئي"},
 {f:"C'est interdit et gaspille du carburant",a:"ممنوع ويهدر الوقود"},
 {f:"Obligatoire",a:"إجباري"}],
ok:[1],exp:"Le moteur qui tourne à l'arrêt est interdit (arrêté municipal) et gaspille du carburant ; coupez-le dès que l'arrêt dépasse ~30 secondes.",expa:"تشغيل المحرك أثناء التوقف ممنوع (قرار بلدي) ويهدر الوقود؛ أطفئه فور تجاوز التوقف ~30 ثانية."},
// ===== SECOURS =====
{id:'y089',theme:'secours',img:'accident_scene',q:"Ne pas s'arrêter sur un accident constitue :",qa:"عدم التوقف عند حادث يشكل:",opts:[
 {f:"Une bonne décision",a:"قراراً جيداً"},
 {f:"Un délit de fuite",a:"جنحة هروب"},
 {f:"Un droit",a:"حقاً"}],
ok:[1],exp:"Ne pas porter assistance à personne en danger et quitter les lieux d'un accident est un délit de fuite (peines sévères : prison, amende, retrait de permis).",expa:"عدم مساعدة شخص في خطر ومغادرة مكان الحادث جنحة هروب (عقوبات شديدة: سجن، غرامة، سحب رخصة)."},
{id:'y090',theme:'secours',img:'tel_urgence',q:"Lors d'un appel aux secours, il faut :",qa:"عند الاتصال بالمساعدة يجب:",opts:[
 {f:"Raccrocher vite",a:"إنهاء المكالمة بسرعة"},
 {f:"Donner le lieu précis, le nombre de victimes et leur état",a:"إعطاء الموقع الدقيق وعدد الضحايا وحالتهم"},
 {f:"Crier",a:"الصراخ"}],
ok:[1],exp:"Lors de l'alerte : restez calme, précisez le lieu exact (panneau kilométrique), le nombre de victimes, leur état apparent, et ne raccrochez qu'à la demande du régulateur.",expa:"عند الإنذار: ابقَ هادئاً، حدد المكان بدقة (لوحة كيلومترية)، عدد الضحايا وحالتهم الظاهرة، ولا تنهَ إلا بطلب المنظم."},
{id:'y091',theme:'secours',img:'compression',q:"Pour comprimer une plaie, utilisez :",qa:"لضغط الجرح استخدم:",opts:[
 {f:"La main nue",a:"اليد المجردة"},
 {f:"Un linge propre ou un mouchoir, idéalement en vous protégeant",a:"قماشاً نظيفاً أو منديلاً، محمياً مثالياً"},
 {f:"La terre",a:"التراب"}],
ok:[1],exp:"Comprimez la plaie avec un linge propre (compresses, mouchoir) en protégeant vos mains (gants, sac plastique) pour éviter tout contact avec le sang.",expa:"اضغط الجرح بقماش نظيف (شاش، منديل) مع حماية يديك (قفازات، كيس بلاستيكي) لتجنب ملامسة الدم."},
{id:'y092',theme:'secours',img:'pls',q:"Avant de placer une victime en PLS, vérifiez :",qa:"قبل وضع الضحية في وضعية الأمان تحقق:",opts:[
 {f:"Qu'elle respire",a:"أنها تتنفس"},
 {f:"Qu'elle parle",a:"أنها تتكلم"},
 {f:"Son âge",a:"عمرها"}],
ok:[0],exp:"La PLS est réservée aux victimes inconscientes qui respirent ; si elle ne respire pas, commencez le massage cardiaque après l'alerte.",expa:"وضعية الأمان مخصصة للضحايا فاقدي الوعي المتنفسين؛ إن لم تتنفس ابدأ تدليك القلب بعد الإنذار."},
{id:'y093',theme:'secours',img:'dae',q:"Le DAE se trouve souvent :",qa:"جهاز الصدمات يوجد غالباً في:",opts:[
 {f:"Les pharmacies uniquement",a:"الصيدليات فقط"},
 {f:"Les lieux publics (gares, stades, centres commerciaux)",a:"الأماكن العامة (محطات، ملاعب، مراكز تجارية)"},
 {f:"Nulle part",a:"لا مكان"}],
ok:[1],exp:"Les DAE sont installés dans les lieux publics recevant du public ; ils guident vocalement l'utilisateur pas à pas.",expa:"أجهزة الصدمات مركبة في الأماكن العامة؛ توجّه المستخدم صوتياً خطوة بخطوة."},
{id:'y094',theme:'secours',img:'malaise',q:"Une personne s'effondre devant vous ; premier réflexe :",qa:"شخص ينهار أمامك؛ أول رد فعل:",opts:[
 {f:"La secouer",a:"هزّه"},
 {f:"Vérifier s'il réagit et appeler à l'aide",a:"التحقق من استجابته وطلب المساعدة"},
 {f:"Le laisser",a:"تركه"}],
ok:[1],exp:"Vérifiez la réaction (parlez-lui, stimulez) ; si pas de réaction, alertez et vérifiez la respiration pour orienter les gestes (PLS ou massage).",expa:"تحقق من الاستجابة (كلمه، حفّزه)؛ إن لا استجابة، أنذر وتحقق من التنفس لتوجيه الإسعاف (وضعية أمان أو تدليك)."}
);
