window.CODE_DATA.push(
// ===== SIGNALISATION =====
{id:'x001',theme:'signalisation',img:'sensinterdit',q:"Ce panneau signifie :",qa:"هذه اللوحة تعني:",opts:[
 {f:"Accès interdit à tous les véhicules dans ce sens",a:"منع دخول كل المركبات بهذا الاتجاه"},
 {f:"Sens unique",a:"اتجاه واحد"},
 {f:"Stationnement interdit",a:"منع الوقوف"}],
ok:[0],exp:"Le panneau 'sens interdit' (rond rouge, barre blanche) interdit l'accès à tout véhicule dans ce sens de circulation.",expa:"لوحة 'منع الاتجاه' (دائرة حمراء بخط أبيض) تمنع دخول كل المركبات بهذا الاتجاه."},
{id:'x002',theme:'signalisation',img:'accesinterdit',q:"Ce panneau interdit :",qa:"هذه اللوحة تمنع:",opts:[
 {f:"L'accès aux véhicules dans les deux sens",a:"الدخول للمركبات من كلا الاتجاهين"},
 {f:"Le stationnement",a:"الوقوف"},
 {f:"Le dépassement",a:"التجاوز"}],
ok:[0],exp:"Le panneau 'interdiction d'accès' (rond blanc bord rouge) interdit l'accès à tous les véhicules dans les deux sens de circulation.",expa:"لوحة 'منع الدخول' (دائرة بيضاء بحواف حمراء) تمنع دخول كل المركبات من الاتجاهين."},
{id:'x003',theme:'signalisation',img:'depassementinterdit',q:"Ce panneau signale :",qa:"هذه اللوحة تُشير إلى:",opts:[
 {f:"Interdiction de dépasser les véhicules à moteur à deux roues",a:"منع تجاوز الدراجات النارية"},
 {f:"Interdiction de dépasser les véhicules de plus de 3,5 t",a:"منع تجاوز مركبات فوق 3.5 طن"},
 {f:"Interdiction de dépasser",a:"منع التجاوز"}],
ok:[2],exp:"Ce panneau interdit de dépasser les véhicules à moteur (sauf deux-roues et cyclomoteurs sans side-car).",expa:"هذه اللوحة تمنع تجاوز المركبات ذات المحرك (عدا الدراجات والدراجات النارية الصغيرة)."},
{id:'x004',theme:'signalisation',img:'feu_orange',q:"Au feu orange fixe, vous devez :",qa:"عند الضوء البرتقالي الثابت يجب:",opts:[
 {f:"Accélérer pour passer",a:"التسارع للمرور"},
 {f:"Vous arrêter, sauf si vous ne pouvez plus le faire en sécurité",a:"التوقف، إلا إن لم تعد قادراً بأمان"},
 {f:"Passer car il est vert",a:"المرور لأنه أخضر"}],
ok:[1],exp:"Le feu jaune fixe impose l'arrêt, sauf si le véhicule est trop engagé pour s'arrêter en sécurité.",expa:"الضوء الأصفر الثابت يُلزم بالتوقف، إلا إذا كانت المركبة متقدمة جداً للتوقف بأمان."},
{id:'x005',theme:'signalisation',img:'lim30',q:"Dans une zone 30, la vitesse maximale est :",qa:"في منطقة 30، السرعة القصوى هي:",opts:[
 {f:"20 km/h",a:"20كم/س"},
 {f:"30 km/h",a:"30كم/س"},
 {f:"50 km/h",a:"50كم/س"}],
ok:[1],exp:"La zone 30 limite la vitesse à 30 km/h pour apaiser la circulation et protéger les usagers vulnérables.",expa:"منطقة 30 تحد السرعة بـ30كم/س لتهدئة المرور وحماية المستخدمين الضعفاء."},
{id:'x006',theme:'signalisation',img:'virage',q:"Ce panneau annonce :",qa:"هذه اللوحة تُعلن عن:",opts:[
 {f:"Un virage dangereux",a:"منعطف خطير"},
 {f:"Une route sinueuse interdite",a:"طريق متعرج ممنوع"},
 {f:"Un rond-point",a:"دوّار"}],
ok:[0],exp:"Le panneau 'virage' avertit d'une courbe dangereuse : réduisez la vitesse et serrez à droite avant d'entrer dans le virage.",expa:"لوحة 'المنعطف' تحذّر من منحنى خطير: خفّف السرعة والزم اليمين قبل الدخول."},
{id:'x007',theme:'signalisation',img:'voieferree',q:"À un passage à niveau sans barrières, si un train approche :",qa:"عند ممر قطار بلا حواجز، إذا اقترب قطار:",opts:[
 {f:"Passer vite avant le train",a:"المرور بسرعة قبل القطار"},
 {f:"S'arrêter impérativement",a:"التوقف إجبارياً"},
 {f:"Klaxonner et passer",a:"التنفير والمرور"}],
ok:[1],exp:"Aux passages à niveau, le train est toujours prioritaire : arrêtez-vous dès l'annonce (feux clignotants rouges, sonnerie, barrières).",expa:"عند ممرات القطار، القطار دائماً له الأولوية: توقف فور الإعلان (أضواء حمراء وامضة، جرس، حواجز)."},
{id:'x008',theme:'signalisation',img:'sensinterdit_poids',q:"Ce panneau interdit l'accès :",qa:"هذه اللوحة تمنع دخول:",opts:[
 {f:"Tous les véhicules",a:"كل المركبات"},
 {f:"Aux véhicules de plus de la masse indiquée",a:"المركبات فوق الكتلة المكتوبة"},
 {f:"Aux piétons",a:"المشاة"}],
ok:[1],exp:"Le panneau avec un camion et un tonnage interdit l'accès aux véhicules dont le PTAC dépasse la valeur indiquée.",expa:"اللوحة مع شاحنة وحمولة تمنع دخول المركبات التي يتجاوز وزنها القيمة المكتوبة."},
{id:'x009',theme:'signalisation',img:'obligation_droite',q:"Ce panneau vous oblige à :",qa:"هذه اللوحة تُلزمك بـ:",opts:[
 {f:"Tourner à droite",a:"الانعطاف يميناً"},
 {f:"Aller tout droit",a:"السير مستقيماً"},
 {f:"Contourner par la droite",a:"التجاوز من اليمين"}],
ok:[0],exp:"Le panneau rond bleu avec flèche à droite impose d'obliquer à droite à l'intersection suivante.",expa:"اللوحة الزرقاء بسهم يمين تُلزم بالانعطاف يميناً عند التقاطع التالي."},
{id:'x010',theme:'signalisation',img:'obligation_toutdroit',q:"Ce panneau vous oblige à :",qa:"هذه اللوحة تُلزمك بـ:",opts:[
 {f:"Aller tout droit",a:"السير مستقيماً"},
 {f:"Tourner à gauche",a:"الانعطاف يساراً"},
 {f:"Faire demi-tour",a:"الدوران للخلف"}],
ok:[0],exp:"Le panneau rond bleu avec flèche vers le haut impose de continuer tout droit.",expa:"اللوحة الزرقاء بسهم للأعلى تُلزم بالاستمرار مستقيماً."},
{id:'x011',theme:'signalisation',img:'pietons',q:"Ce panneau indique une zone :",qa:"هذه اللوحة تشير إلى منطقة:",opts:[
 {f:"Interdite aux piétons",a:"ممنوعة على المشاة"},
 {f:"Réservée aux piétons (zone piétonne)",a:"مخصصة للمشاة (منطقة مشاة)"},
 {f:"De passage obligé",a:"عبور إجباري"}],
ok:[1],exp:"Le panneau 'zone piétonne' signale un espace réservé aux piétons où la circulation motorisée est interdite ou très limitée.",expa:"لوحة 'منطقة مشاة' تدل على حيّز مخصص للمشاة حيث المرور الآلي ممنوع أو محدود جداً."},
{id:'x012',theme:'signalisation',img:'croisementdifficile',q:"Ce panneau vous informe de :",qa:"هذه اللوحة تُعلمك بـ:",opts:[
 {f:"Un rétrécissement où le croisement est difficile",a:"تضيّق يصعب فيه التلاقي"},
 {f:"Une priorité à droite",a:"أولوية يمين"},
 {f:"Une route à sens unique",a:"طريق باتجاه واحد"}],
ok:[0],exp:"Le panneau 'croisement difficile' signale un tronçon où croiser un autre véhicule est malaisé ; adaptez votre vitesse et soyez prêt à céder le passage.",expa:"لوحة 'التلاقي الصعب' تُنبّه لمقطع يصعب فيه ملاقاة مركبة أخرى؛ عدّل سرعتك وكن مستعداً لإعطاء الأولوية."},
// ===== PRIORITES =====
{id:'x013',theme:'priorites',img:'priorite',q:"Sur une route prioritaire, aux carrefours :",qa:"على طريق ذات أولوية، عند التقاطعات:",opts:[
 {f:"Vous cédez toujours le passage",a:"تعطي الأولوية دائماً"},
 {f:"Les usagers des routes secondaires vous cèdent le passage",a:"مستخدمو الطرق الفرعية يعطونك الأولوية"},
 {f:"Tout le monde passe en même temps",a:"الجميع يمر معاً"}],
ok:[1],exp:"Sur une route à caractère prioritaire (losange jaune), les usagers venant des routes secondaires doivent vous céder le passage.",expa:"على طريق ذات أولوية (معين أصفر)، القادمون من الطرق الفرعية يجب أن يعطوك الأولوية."},
{id:'x014',theme:'priorites',img:'stop_line',q:"La ligne d'arrêt au sol (STOP) vous oblige à :",qa:"خط التوقف على الأرض (STOP) يُلزمك بـ:",opts:[
 {f:"Ralentir sans arrêter",a:"التخفيف بلا توقف"},
 {f:"Un arrêt complet même si la voie est libre",a:"توقف كامل حتى لو كان المسار خالياً"},
 {f:"Céder le passage uniquement aux camions",a:"إعطاء الأولوية للشاحنات فقط"}],
ok:[1],exp:"Le marquage STOP au sol impose un arrêt complet à la ligne avant de céder le passage, même si aucun véhicule n'arrive.",expa:"علامة STOP على الأرض تُلزم بتوقف كامل عند الخط قبل إعطاء الأولوية، حتى بدون مركبات قادمة."},
{id:'x015',theme:'priorites',img:'feux',q:"Si le feu est éteint ou clignotant jaune, la priorité :",qa:"إذا كان الضوء مطفأً أو أصفر وامض، الأولوية:",opts:[
 {f:"Est au plus rapide",a:"للأسرع"},
 {f:"Se règle par la signalisation ou la priorité à droite",a:"تُحسم بالإشارات أو قاعدة يمين"},
 {f:"Disparaît, on passe librement",a:"تلغى، نمر بحرية"}],
ok:[1],exp:"En cas de feux éteints ou de jaune clignotant, ce sont les panneaux de priorité (ou à défaut la priorité à droite) qui s'appliquent.",expa:"عند انطفاء الأضواء أو الوميض الأصفر، تُطبّق لوحات الأولوية (أو قاعدة اليمين عند غيابها)."},
{id:'x016',theme:'priorites',img:'prio_droite',q:"Un cycliste arrive de votre droite à un carrefour :",qa:"دراج يصل من يمينك عند تقاطع:",opts:[
 {f:"Vous êtes prioritaire car il est lent",a:"أنت صاحب أولوية لأنه بطيء"},
 {f:"Vous lui cédez le passage",a:"تعطيه الأولوية"},
 {f:"Il doit s'arrêter",a:"يجب أن يتوقف"}],
ok:[1],exp:"La priorité à droite s'applique à tous les usagers, y compris les cyclistes et les deux-roues.",expa:"قاعدة أولوية اليمين تطبق على كل المستخدمين بمن فيهم الدراجون وذوو العجلتين."},
{id:'x017',theme:'priorites',img:'turn_left',q:"En tournant à gauche sur une chaussée verte, les usagers venant en face :",qa:"عند الانعطاف يساراً، المستخدمون القادمون من الأمام:",opts:[
 {f:"Doivent tous s'arrêter",a:"يجب أن يتوقفوا جميعاً"},
 {f:"Sont prioritaires s'ils vont tout droit",a:"أصحاب أولوية إن كانوا مستمرين مستقيماً"},
 {f:"Vous cèdent toujours",a:"يعطونك الأولوية دائماً"}],
ok:[1],exp:"Celui qui tourne à gauche change de direction : il doit céder le passage aux véhicules venant en face allant tout droit.",expa:"من ينعطف يساراً يغيّر اتجاهه: يجب أن يعطي الأولوية للقادمين من الأمام المستمرين."},
{id:'x018',theme:'priorites',img:'agent',q:"Les ordres d'un agent de circulation :",qa:"أوامر شرطي المرور:",opts:[
 {f:"Ont moins de valeur que les panneaux",a:"أقل قيمة من اللوحات"},
 {f:"Priment sur tous les signaux et panneaux",a:"تتغلب على كل الإشارات واللوحات"},
 {f:"Sont indicatifs",a:"استرشادية"}],
ok:[1],exp:"Hiérarchie des signaux : 1) ordres des agents, 2) feux, 3) signalisation temporaire, 4) panneaux, 5) règles générales.",expa:"ترتيب الإشارات: 1) أوامر الشرطة، 2) الأضواء، 3) الإشارات المؤقتة، 4) اللوحات، 5) القواعد العامة."},
{id:'x019',theme:'priorites',img:'giratoire',q:"Dans un giratoire, qui est prioritaire ?",qa:"داخل دوّار، من صاحب الأولوية؟",opts:[
 {f:"Ceux qui entrent",a:"الداخلون"},
 {f:"Ceux déjà engagés dans l'anneau",a:"الموجودون داخل الحلقة"},
 {f:"Les piétons uniquement",a:"المشاة فقط"}],
ok:[1],exp:"Dans un carrefour giratoire, les usagers déjà engagés dans l'anneau sont prioritaires ; cédez-leur le passage avant d'entrer.",expa:"في الدوّار، الموجودون داخل الحلقة أصحاب الأولوية؛ أعطِهم الأولوية قبل الدخول."},
{id:'x020',theme:'priorites',img:'sortie_propriete',q:"Un véhicule sortant d'une propriété privée :",qa:"مركبة تخرج من ملكية خاصة:",opts:[
 {f:"Est prioritaire",a:"لها الأولوية"},
 {f:"Doit céder le passage à tous les usagers",a:"يجب أن تعطي الأولوية لكل المستخدمين"},
 {f:"Peut sortir sans regarder",a:"تخرج دون نظر"}],
ok:[1],exp:"Sortir d'une propriété, d'un chemin de terre ou d'une aire de service impose de céder le passage à tous les usagers de la voie publique.",expa:"الخروج من ملكية أو طريق ترابي أو محطة خدمة يُلزم بإعطاء الأولوية لكل مستخدمي الطريق العام."},
{id:'x021',theme:'priorites',img:'pente_croisement',q:"En côte, pour croiser un véhicule lourd :",qa:"في صعود، لملاقاة مركبة ثقيلة:",opts:[
 {f:"C'est toujours celui qui descend qui cède",a:"دائماً النازل يعطي الأولوية"},
 {f:"Celui qui peut s'arrêter et repartir le plus facilement cède le passage",a:"من يستطيع التوقف والانطلاق بسهولة يعطي الأولوية"},
 {f:"Le plus rapide passe",a:"الأسرع يمر"}],
ok:[1],exp:"En montée étroite, la priorité va à celui qui a la manœuvre la plus facile ; souvent le véhicule descendant recule car il repart en marche arrière plus aisément.",expa:"في الصعود الضيق، الأولوية لمن لديه المناورة الأسهل؛ غالباً النازل يرجع لأن انطلاقه بالرجوع أسهل."},
{id:'x022',theme:'priorites',img:'passagepieton',q:"Un piéton attend au bord d'un passage piéton :",qa:"مشاة ينتظر عند حافة ممر مشاة:",opts:[
 {f:"Je continue, il n'est pas encore engagé",a:"أكمل، لم يبدأ العبور بعد"},
 {f:"Je dois m'arrêter pour le laisser traverser",a:"يجب أن أتوقف لأتركه يعبر"},
 {f:"Je klaxonne",a:"أنفّر"}],
ok:[1],exp:"Depuis 2010, il faut céder le passage à tout piéton 's'engageant régulièrement' dans la traversée — y compris celui qui montre clairement l'intention de traverser.",expa:"منذ 2010 يجب إعطاء الأولوية لأي مشاة 'يبدأ العبور بانتظام' — بمن فيهم من يُظهر نية واضحة للعبور."},
// ===== CIRCULATION =====
{id:'x023',theme:'circulation',img:'lim110',q:"Sur autoroute par temps sec, la vitesse maximale est :",qa:"على الأوتوروت بطقس جاف، السرعة القصوى:",opts:[
 {f:"110 km/h",a:"110كم/س"},
 {f:"130 km/h",a:"130كم/س"},
 {f:"90 km/h",a:"90كم/س"}],
ok:[1],exp:"Sur autoroute : 130 km/h par temps sec, 110 km/h par temps de pluie, 50 km/h par visibilité inférieure à 50 m (brouillard).",expa:"على الأوتوروت: 130كم/س جافاً، 110كم/س في المطر، 50كم/س برؤية أقل من 50م (ضباب)."},
{id:'x024',theme:'circulation',img:'pluie',q:"Par temps de pluie sur autoroute, la vitesse est limitée à :",qa:"في المطر على الأوتوروت، السرعة محدودة بـ:",opts:[
 {f:"130 km/h",a:"130كم/س"},
 {f:"110 km/h",a:"110كم/س"},
 {f:"80 km/h",a:"80كم/س"}],
ok:[1],exp:"Par temps de pluie : 110 km/h sur autoroute, 80 km/h sur voie express et route à 2 voies séparées (au lieu de 110/90/80).",expa:"في المطر: 110كم/س على الأوتوروت و80كم/س على الطرق السريعة والمزدوجة (بدل 110/90/80)."},
{id:'x025',theme:'circulation',img:'lim80',q:"Sur une route à 2 voies sans séparateur central, la limite est :",qa:"على طريق بمسارين بلا فاصل مركزي، الحد هو:",opts:[
 {f:"80 km/h",a:"80كم/س"},
 {f:"90 km/h",a:"90كم/س"},
 {f:"110 km/h",a:"110كم/س"}],
ok:[0],exp:"Depuis juillet 2018, la limite sur les routes à double sens sans séparateur central est de 80 km/h (sauf exceptions signalées à 90).",expa:"منذ تموز 2018، الحد على الطرق ذات الاتجاهين بلا فاصل مركزي هو 80كم/س (باستثناءات معلنة 90)."},
{id:'x026',theme:'circulation',img:'depassement_droite',q:"Le dépassement par la droite est autorisé :",qa:"التجاوز من اليمين مسموح:",opts:[
 {f:"Jamais",a:"أبداً"},
 {f:"Uniquement si la voie de gauche est encombrée ou pour un véhicule tournant à gauche",a:"فقط إذا كان المسار الأيسر مزدحماً أو لمركبة تنعطف يساراً"},
 {f:"Sur autoroute",a:"على الأوتوروت"}],
ok:[1],exp:"Dépasser par la droite n'est permis que dans des cas précis : voie de gauche bloquée, véhicule qui tourne à gauche, ou sur voie de ralentissement.",expa:"التجاوز من اليمين مسموح فقط في حالات محددة: المسار الأيسر مسدود، مركبة تنعطف يساراً، أو على مسار تباطؤ."},
{id:'x027',theme:'circulation',img:'embouteillage',q:"Dans un embouteillage sur autoroute, il faut :",qa:"في ازدحام على الأوتوروت يجب:",opts:[
 {f:"Utiliser la BAU pour avancer",a:"استخدام مسار التوقف للتقدم"},
 {f:"Garder sa voie et rester patient",a:"البقاء في المسار والصبر"},
 {f:"Faire demi-tour",a:"الدوران للخلف"}],
ok:[1],exp:"Dans un bouchon : restez sur votre voie, ne prenez jamais la BAU (réservée aux urgences), allumez les warnings si le ralentissement est soudain.",expa:"في الازدحام: ابقَ في مسارك، لا تستخدم مسار التوقف أبداً (للطوارئ)، وشغّل أضواء الخطر عند تباطؤ مفاجئ."},
{id:'x028',theme:'circulation',img:'klaxon',q:"En agglomération, le klaxon est autorisé :",qa:"في المنطقة المأهولة، التنفير مسموح:",opts:[
 {f:"Pour saluer",a:"للتحية"},
 {f:"Uniquement pour avertir d'un danger immédiat",a:"فقط للتحذير من خطر فوري"},
 {f:"Pour presser le véhicule devant",a:"لإسراع المركبة الأمامية"}],
ok:[1],exp:"En agglomération, l'usage de l'avertisseur sonore est interdit sauf danger immédiat ; hors agglomération, on avertit avant un dépassement si nécessaire.",expa:"في المدينة، استخدام المنفّر ممنوع إلا لخطر فوري؛ خارجها يُحذَّر قبل التجاوز إن لزم."},
{id:'x029',theme:'circulation',img:'nuit_feux',q:"Pour croiser un autre véhicule la nuit, il faut :",qa:"لملاقاة مركبة أخرى ليلاً يجب:",opts:[
 {f:"Garder les feux de route",a:"الإبقاء على أضواء الطريق"},
 {f:"Passer en feux de croisement pour ne pas éblouir",a:"التحول لأضواء الالتقاء لتجنب الإبهار"},
 {f:"Éteindre tous les feux",a:"إطفاء كل الأضواء"}],
ok:[1],exp:"Basculez en feux de croisement dès qu'un usager arrive en face ou précède : les feux de route éblouissent et sont dangereux.",expa:"حوّل لأضواء الالتقاء فور قدوم مستخدم مقابل أو أمامك: أضواء الطريق تعمي وهي خطيرة."},
{id:'x030',theme:'circulation',img:'neige',q:"Sur route enneigée, il est conseillé de :",qa:"على طريق مثلج يُنصح بـ:",opts:[
 {f:"Rouler normalement",a:"القيادة عادياً"},
 {f:"Équiper le véhicule (pneus neige/chaînes si requis) et adapter l'allure",a:"تجهيز المركبة (إطارات شتوية/سلاسل إن لزم) وتعديل السرعة"},
 {f:"Freiner fort à chaque virage",a:"الفرملة بقوة عند كل منعطف"}],
ok:[1],exp:"Sur neige : équipez-vous (obligation hivernale dans certaines zones : pneus neige ou chaînes), allure réduite, gestes souples, distances allongées.",expa:"على الثلج: جهّز نفسك (إلزام شتوي في بعض المناطق: إطارات شتوية أو سلاسل)، سرعة منخفضة، حركات ناعمة، مسافات أطول."},
{id:'x031',theme:'circulation',img:'bande_arret',q:"Sur la bande d'arrêt d'urgence, après une panne :",qa:"على مسار التوقف الطارئ بعد عطل:",opts:[
 {f:"Restez dans le véhicule",a:"ابقَ في المركبة"},
 {f:"Évacuez par le côté opposé à la circulation et mettez-vous derrière la glissière",a:"أخلِ من الجهة البعيدة عن السير وتحصّن خلف الحاجز"},
 {f:"Faites des réparations",a:"أجرِ إصلاحات"}],
ok:[1],exp:"Sur BAU : gilet, feux de détresse, sortie par le côté passager droit, mise à l'abri derrière la glissière et appel depuis une borne SOS.",expa:"على مسار التوقف: سترة، أضواء خطر، خروج من الجهة اليمنى، تحصّن خلف الحاجز واتصل من عمود SOS."},
{id:'x032',theme:'circulation',img:'bretelle',q:"Sur une bretelle d'insertion d'autoroute :",qa:"على مسار إدخال الأوتوروت:",opts:[
 {f:"Vous êtes prioritaire",a:"أنت صاحب أولوية"},
 {f:"Accélérez pour vous insérer au niveau de la circulation",a:"تسارع للاندماج بمستوى حركة السير"},
 {f:"Arrêtez-vous toujours",a:"توقف دائماً"}],
ok:[1],exp:"Sur la voie d'accélération : augmentez votre vitesse pour vous insérer à l'allure du trafic, clignotant à gauche, en cédant le passage aux usagers déjà sur l'autoroute.",expa:"على مسار التسارع: زد سرعتك للاندماج بسرعة المرور، إشارة يسار، مع إعطاء الأولوية للموجودين على الأوتوروت."},
{id:'x033',theme:'circulation',img:'ligne_continue',q:"Vous pouvez franchir une ligne continue pour :",qa:"يمكنك تجاوز خط متصل لـ:",opts:[
 {f:"Dépasser un cycliste",a:"تجاوز دراج"},
 {f:"Dépasser un véhicule lent",a:"تجاوز مركبة بطيئة"},
 {f:"Éviter un obstacle fixe ou en cas d'arrêt d'urgence",a:"تجنب عائق ثابت أو عند توقف طارئ"}],
ok:[2],exp:"La ligne continue ne peut être franchie que pour éviter un obstacle immobile, un arrêt d'urgence ou pour rejoindre/quitter une propriété ; jamais pour un dépassement classique.",expa:"الخط المتصل لا يُجتاز إلا لتجنب عائق ثابت أو توقف طارئ أو للوصول/مغادرة ملكية؛ أبداً للتجاوز العادي."},
{id:'x034',theme:'circulation',img:'voiebus',q:"Vous pouvez emprunter une voie réservée aux bus :",qa:"يمكنك سلوك مسار مخصص للحافلات:",opts:[
 {f:"Quand vous voulez",a:"متى أردت"},
 {f:"Jamais, sauf si le marquage l'autorise ponctuellement",a:"أبداً، إلا إذا سمحت العلامات مؤقتاً"},
 {f:"La nuit",a:"ليلاً"}],
ok:[1],exp:"Une voie 'BUS' est interdite aux autres véhicules sauf indication contraire (panonceau autorisant taxis, vélos, covoiturage ou horaires limités).",expa:"مسار 'BUS' ممنوع على الآخرين إلا بلوحة تسمح (تاكسي، دراجات، مشاركة، أو أوقات محدودة)."},
// ===== STATIONNEMENT =====
{id:'x035',theme:'stationnement',img:'stationinterdit',q:"Ce panneau interdit :",qa:"هذه اللوحة تمنع:",opts:[
 {f:"L'arrêt et le stationnement",a:"التوقف والوقوف"},
 {f:"Le stationnement seul",a:"الوقوف فقط"},
 {f:"Le passage",a:"المرور"}],
ok:[1],exp:"Le panneau à simple barre oblique interdit le stationnement mais autorise l'arrêt bref ; le panneau à double barre interdit l'arrêt ET le stationnement.",expa:"اللوحة بخط مائل واحد تمنع الوقوف لكن تسمح بالتوقف القصير؛ اللوحة بخطين تمنع التوقف والوقوف."},
{id:'x036',theme:'stationnement',img:'horloge_arret',q:"Ce panneau indique :",qa:"هذه اللوحة تشير إلى:",opts:[
 {f:"Un arrêt obligatoire pour tous",a:"توقف إجباري للجميع"},
 {f:"Un stationnement limité dans le temps avec disque",a:"وقوف محدد زمنياً مع قرص"},
 {f:"Une horloge publique",a:"ساعة عامة"}],
ok:[1],exp:"Le panneau bleu avec une horloge signale un stationnement à durée limitée soumis à l'usage du disque de stationnement.",expa:"اللوحة الزرقاء مع ساعة تدل على وقوف محدود المدة يتطلب قرص التوقيت."},
{id:'x037',theme:'stationnement',img:'cote_montee',q:"En stationnant en montée, les roues avant doivent être braquées :",qa:"عند الوقوف في صعود، يجب توجيه العجلات الأمامية:",opts:[
 {f:"Vers le trottoir",a:"نحو الرصيف"},
 {f:"Vers la chaussée",a:"نحو الطريق"},
 {f:"Tout droit",a:"مستقيماً"}],
ok:[1],exp:"En montée, braquez les roues vers l'extérieur (vers la chaussée) : en cas de recul, l'arrière du véhicule vient buter contre le trottoir.",expa:"في الصعود وجّه العجلات للخارج (نحو الطريق): عند التدحرج يصطدم مؤخر المركبة بالرصيف."},
{id:'x038',theme:'stationnement',img:'garage',q:"Sortir d'un garage ou d'un parking privé :",qa:"الخروج من مرآب أو موقف خاص:",opts:[
 {f:"Vous êtes prioritaire",a:"أنت صاحب أولوية"},
 {f:"Vous devez céder le passage à tous les usagers",a:"يجب إعطاء الأولوية لكل المستخدمين"},
 {f:"Vous klaxonnez pour sortir",a:"تنفّر للخروج"}],
ok:[1],exp:"Sortir d'une propriété privée ou d'un parking impose de céder le passage à tous les usagers circulant sur la voie publique, piétons compris.",expa:"الخروج من ملكية خاصة أو موقف يُلزم بإعطاء الأولوية لكل مستخدمي الطريق العام بمن فيهم المشاة."},
{id:'x039',theme:'stationnement',img:'fourriere',q:"Votre voiture a été mise en fourrière ; pour la récupérer :",qa:"سيارتك سُحبت للمتحف؛ لاستردادها:",opts:[
 {f:"Il faut payer les frais et présenter des justificatifs",a:"يجب دفع الرسوم وتقديم المستندات"},
 {f:"Il suffit de venir avec la clé",a:"يكفي الحضور بالمفتاح"},
 {f:"C'est impossible",a:"مستحيل"}],
ok:[0],exp:"La restitution exige le paiement des frais de fourrière et la présentation de justificatifs (identité, carte grise, permis, assurance).",expa:"الاسترداد يتطلب دفع رسوم المتحف وتقديم المستندات (هوية، رمادية، رخصة، تأمين)."},
{id:'x040',theme:'stationnement',img:'zone_bleue',q:"En zone bleue, si vous n'apposez pas le disque :",qa:"في المنطقة الزرقاء، إن لم تضع القرص:",opts:[
 {f:"Rien ne se passe",a:"لا يحدث شيء"},
 {f:"Vous risquez une amende",a:"تخاطر بغرامة"},
 {f:"Votre voiture est remorquée",a:"تُسحب سيارتك"}],
ok:[1],exp:"Stationner en zone bleue sans disque apparent constitue une infraction de stationnement, verbalisable.",expa:"الوقوف بمنطقة زرقاء بدون قرص ظاهر مخالفة تستوجب غرامة."},
{id:'x041',theme:'stationnement',img:'passagepieton',q:"Stationner sur un passage piéton :",qa:"الوقوف على ممر مشاة:",opts:[
 {f:"Est toléré 5 minutes",a:"مسموح 5 دقائق"},
 {f:"Est interdit et très dangereux pour les piétons",a:"ممنوع وخطير جداً على المشاة"},
 {f:"Est autorisé la nuit",a:"مسموح ليلاً"}],
ok:[1],exp:"Stationner sur un passage piéton est un stationnement dangereux : il oblige les piétons à contourner sur la chaussée et masque la visibilité.",expa:"الوقوف على ممر مشاة وقوف خطير: يُجبر المشاة على الالتفاف في الطريق ويحجب الرؤية."},
{id:'x042',theme:'stationnement',img:'trottoir',q:"Un stationnement sur le trottoir peut être autorisé :",qa:"الوقوف على الرصيف قد يكون مسموحاً:",opts:[
 {f:"Jamais",a:"أبداً"},
 {f:"Si un panneau ou un marquage spécifique l'autorise",a:"إذا سمحت لوحة أو علامة محددة به"},
 {f:"Pour les SUV uniquement",a:"للسيارات الرباعية فقط"}],
ok:[1],exp:"Le stationnement sur trottoir est interdit par principe mais certains panneaux d'indication ou marquages l'autorisent partiellement (2 roues sur le trottoir).",expa:"الوقوف على الرصيف ممنوع مبدئياً لكن بعض اللوحات أو العلامات تسمح به جزئياً (عجلتان على الرصيف)."},
{id:'x043',theme:'stationnement',img:'horodateur',q:"Le ticket de l'horodateur doit être :",qa:"تذكرة العداد يجب أن:",opts:[
 {f:"Gardée dans la poche",a:"تُحفظ في الجيب"},
 {f:"Placée lisiblement derrière le pare-brise",a:"توضع مقروءة خلف الزجاج الأمامي"},
 {f:"Jetée",a:"تُرمى"}],
ok:[1],exp:"Le ticket de stationnement doit être visible de l'extérieur, placé derrière le pare-brise, pour prouver le paiement lors d'un contrôle.",expa:"تذكرة الوقوف يجب أن تكون مرئية من الخارج خلف الزجاج الأمامي لإثبات الدفع عند التفتيش."},
// ===== VEHICULE =====
{id:'x044',theme:'vehicule',img:'voyant_moteur',q:"Le témoin orange moteur allumé en permanence indique :",qa:"مؤشر المحرك البرتقالي المضاء باستمرار يدل على:",opts:[
 {f:"Une anomalie à faire diagnostiquer",a:"عطل يستوجب فحصاً"},
 {f:"Que tout va bien",a:"أن كل شيء جيد"},
 {f:"Le plein à faire",a:"ضرورة التزود بالوقود"}],
ok:[0],exp:"Le voyant moteur (check engine) orange allumé signale une anomalie (pollution, injection...) : faites diagnostiquer rapidement sans forcément vous arrêter immédiatement.",expa:"مؤشر المحرك البرتقالي المضاء يعني عطلاً (تلوث، حقن...): افحصه بسرعة دون توقف فوري بالضرورة."},
{id:'x045',theme:'vehicule',img:'pneu',q:"Le témoin de pression des pneus allumé signifie :",qa:"مؤشر ضغط الإطارات المضاء يعني:",opts:[
 {f:"Pneus parfaitement gonflés",a:"إطارات ممتلئة تماماً"},
 {f:"Sous-gonflage ou crevaison en cours",a:"نقص نفخ أو ثقب حاصل"},
 {f:"Changer d'huile",a:"تغيير الزيت"}],
ok:[1],exp:"Le voyant TPMS signale une pression insuffisante ou une crevaison : vérifiez et regonflez rapidement, un pneu sous-gonflé surchauffe et peut éclater.",expa:"مؤشر TPMS ينبه لضغط ناقص أو ثقب: افحص واملأ بسرعة؛ الإطار المنخفض يسخن وقد ينفجر."},
{id:'x046',theme:'vehicule',img:'frein_main',q:"Le frein de parking (frein à main) doit être serré :",qa:"الفرامل اليدوية (فرامل الوقوف) يجب شدّها:",opts:[
 {f:"Uniquement en côte",a:"فقط في الصعود"},
 {f:"À chaque stationnement",a:"عند كل وقوف"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"Serrez toujours le frein de parking en stationnement pour immobiliser le véhicule ; en côte, c'est indispensable, complété par le braquage des roues.",expa:"شدّ الفرامل اليدوية دائماً عند الوقوف لتثبيت المركبة؛ في الصعود ضروري مع توجيه العجلات."},
{id:'x047',theme:'vehicule',img:'capot',q:"Le niveau de liquide de refroidissement se vérifie :",qa:"مستوى سائل التبريد يُفحص:",opts:[
 {f:"Moteur chaud en ouvrant le bouchon",a:"محرك ساخن بفتح الغطاء"},
 {f:"Moteur froid sur sol plat",a:"محرك بارد على أرض مستوية"},
 {f:"En roulant",a:"أثناء السير"}],
ok:[1],exp:"Vérifiez le liquide de refroidissement à froid (danger de brûlure à chaud), niveau entre MIN et MAX du vase d'expansion.",expa:"افحص سائل التبريد بارداً (خطر حرق وهو ساخن)، المستوى بين MIN وMAX في وعاء التمدد."},
{id:'x048',theme:'vehicule',img:'documents',q:"L'attestation d'assurance (carte verte) prouve :",qa:"شهادة التأمين (البطاقة الخضراء) تثبت:",opts:[
 {f:"Le contrôle technique",a:"الفحص التقني"},
 {f:"Que le véhicule est assuré",a:"أن المركبة مؤمّنة"},
 {f:"La propriété",a:"الملكية"}],
ok:[1],exp:"L'attestation d'assurance (carte verte) justifie la couverture en responsabilité civile du véhicule ; elle doit être présentée lors des contrôles.",expa:"شهادة التأمين (الخضراء) تثبت تغطية المسؤولية المدنية للمركبة؛ يجب عرضها عند التفتيش."},
{id:'x049',theme:'vehicule',img:'regulateur',q:"Le régulateur de vitesse sert à :",qa:"منظم السرعة يُستخدم لـ:",opts:[
 {f:"Freiner automatiquement",a:"الفرملة تلقائياً"},
 {f:"Maintenir une vitesse constante sans appuyer sur l'accélérateur",a:"الحفاظ على سرعة ثابتة دون الدعس على المسرع"},
 {f:"Empêcher de dépasser une vitesse",a:"منع تجاوز سرعة"}],
ok:[1],exp:"Le régulateur maintient la vitesse choisie ; le limiteur empêche de dépasser une vitesse plafond ; ni l'un ni l'autre ne remplace la vigilance.",expa:"المنظم يحافظ على السرعة المختارة؛ المحدد يمنع تجاوز سقف؛ لا أحدهما يغني عن الانتباه."},
{id:'x050',theme:'vehicule',img:'limiteur',q:"Le limiteur de vitesse :",qa:"محدد السرعة:",opts:[
 {f:"Maintient une vitesse constante",a:"يحافظ على سرعة ثابتة"},
 {f:"Empêche de dépasser une vitesse programmée",a:"يمنع تجاوز سرعة مبرمجة"},
 {f:"Freine la voiture",a:"يفرمل السيارة"}],
ok:[1],exp:"Le limiteur bloque les dépassements de la vitesse réglée (sauf forte pression sur l'accélérateur) ; utile pour respecter les limitations.",expa:"المحدد يمنع تجاوز السرعة المضبوطة (إلا بدعسة قوية على المسرع)؛ مفيد لاحترام الحدود."},
{id:'x051',theme:'vehicule',img:'thermometre',q:"Avant d'ouvrir le bouchon du radiateur :",qa:"قبل فتح غطاء المبرد:",opts:[
 {f:"Attendre le refroidissement complet du moteur",a:"انتظار تبريد المحرك كلياً"},
 {f:"L'ouvrir moteur chaud",a:"فتحه وهو ساخن"},
 {f:"L'ouvrir en roulant",a:"فتحه أثناء السير"}],
ok:[0],exp:"N'ouvrez jamais le bouchon à chaud : le liquide sous pression peut jaillir et brûler gravement ; attendez le refroidissement complet.",expa:"لا تفتح الغطاء وهو ساخن أبداً: السائل المضغوط قد يندفع ويحرق بشدة؛ انتظر التبريد الكامل."},
{id:'x052',theme:'vehicule',img:'checklist',q:"Avant un long trajet, vérifiez :",qa:"قبل رحلة طويلة تحقق من:",opts:[
 {f:"La couleur de la voiture",a:"لون السيارة"},
 {f:"Pneus, niveaux, feux, documents et itinéraire",a:"الإطارات والمستويات والأضواء والوثائق والمسار"},
 {f:"Rien, c'est inutile",a:"لا شيء، غير ضروري"}],
ok:[1],exp:"Checklist départ : pression et usure des pneus, niveaux (huile, liquide de refroidissement, lave-glace), éclairage, documents à bord et itinéraire préparé.",expa:"قائمة الانطلاق: ضغط وتآكل الإطارات، المستويات (زيت، تبريد، غسّال)، الإنارة، الوثائق والمسار المحضّر."},
{id:'x053',theme:'vehicule',img:'airbag',q:"Un enfant en siège dos à la route à l'avant :",qa:"طفل في مقعد باتجاه الخلف في الأمام:",opts:[
 {f:"C'est toujours autorisé",a:"مسموح دائماً"},
 {f:"Interdit sauf airbag passager désactivé",a:"ممنوع إلا بوسادة هوائية معطّلة"},
 {f:"Recommandé",a:"مستحسن"}],
ok:[1],exp:"Un siège enfant dos à la route ne peut être installé à l'avant que si l'airbag passager est désactivé ; sinon le déploiement le blesserait mortellement.",expa:"مقعد طفل باتجاه الخلف لا يُركّب في الأمام إلا إذا عُطّلت وسادة الراكب؛ وإلا فإن انفتاحها قد يقتله."},
// ===== SECURITE =====
{id:'x054',theme:'securite',img:'siege_enfant',q:"Le siège enfant doit être choisi selon :",qa:"مقعد الطفل يُختار حسب:",opts:[
 {f:"La couleur",a:"اللون"},
 {f:"La taille et le poids de l'enfant (norme i-Size/R129)",a:"طول ووزن الطفل (معيار i-Size/R129)"},
 {f:"Le prix",a:"السعر"}],
ok:[1],exp:"Les sièges enfant se choisissent selon la taille/poids de l'enfant ; la norme i-Size impose le dos à la route jusqu'à 15 mois minimum.",expa:"مقاعد الأطفال تُختار حسب الطول/الوزن؛ معيار i-Size يفرض اتجاه الخلف حتى 15 شهراً على الأقل."},
{id:'x055',theme:'securite',img:'accident_scene',q:"Après un accident sans blessé :",qa:"بعد حادث بلا جرحى:",opts:[
 {f:"Remplir un constat amiable ou appeler la police si désaccord",a:"ملء محضر ودي أو استدعاء الشرطة عند خلاف"},
 {f:"Partir immédiatement",a:"المغادرة فوراً"},
 {f:"Se disputer sur place",a:"الجدال في المكان"}],
ok:[0],exp:"En cas de dommage matériel seul : constat amiable rempli et signé par les deux conducteurs ; en cas de désaccord ou blessé, appelez les forces de l'ordre.",expa:"عند ضرر مادي فقط: محضر ودي يُملأ ويوقّع من السائقين؛ عند خلاف أو إصابة اتصل بالشرطة."},
{id:'x056',theme:'securite',img:'derapage',q:"En cas de dérapage sur sol mouillé, il faut :",qa:"عند انزلاق على أرض مبللة يجب:",opts:[
 {f:"Braquer dans le sens du dérapage et lever le pied de l'accélérateur",a:"التوجيه باتجاه الانزلاق ورفع القدم عن المسرع"},
 {f:"Freiner à fond",a:"الفرملة بأقصى قوة"},
 {f:"Accélérer",a:"التسارع"}],
ok:[0],exp:"En dérapage : levez le pied de l'accélérateur, ne freinez pas, contre-braquez doucement dans le sens du dérapage pour reprendre le contrôle.",expa:"عند الانزلاق: ارفع قدمك عن المسرع، لا تفرمل، وجّه بلطف باتجاه الانزلاق لاستعادة السيطرة."},
{id:'x057',theme:'securite',img:'fatigue',q:"Les premiers signes de fatigue au volant sont :",qa:"أول علامات التعب أثناء القيادة:",opts:[
 {f:"Bâillements, paupières lourdes, difficultés de concentration",a:"تثاؤب وجفون ثقيلة وصعوبة تركيز"},
 {f:"Soif",a:"عطش"},
 {f:"Aucun signe",a:"لا علامات"}],
ok:[0],exp:"Bâillements répétés, paupières lourdes, vision qui se trouble, raideurs : ce sont des signaux d'alerte — arrêtez-vous et faites une pause ou dormez 20 minutes.",expa:"تثاؤب متكرر وجفون ثقيلة ورؤية ضبابية وتيبّس: إشارات إنذار — توقف وخذ استراحة أو نم 20 دقيقة."},
{id:'x058',theme:'securite',img:'telephone',q:"L'usage du téléphone au volant multiplie le risque d'accident par :",qa:"استخدام الهاتف أثناء القيادة يضاعف خطر الحادث بـ:",opts:[
 {f:"2",a:"2"},
 {f:"3 (et jusqu'à 23 en écrivant un SMS)",a:"3 (وحتى 23 عند كتابة رسالة)"},
 {f:"0,5",a:"0.5"}],
ok:[1],exp:"Téléphoner multiplie par 3 le risque d'accident ; lire/écrire un SMS le multiplie jusqu'à 23 fois — le téléphone tenu en main est interdit.",expa:"التحدث يضاعف الخطر 3 مرات؛ قراءة/كتابة رسالة حتى 23 مرة — الهاتف باليد ممنوع."},
{id:'x059',theme:'securite',img:'alcool',q:"L'alcool au volant provoque :",qa:"الكحول أثناء القيادة يسبب:",opts:[
 {f:"Une meilleure vigilance",a:"يقظة أفضل"},
 {f:"Allongement du temps de réaction, champ visuel réduit, prise de risque",a:"إطالة زمن الاستجابة وتضيّق مجال الرؤية ومجازفة"},
 {f:"Rien",a:"لا شيء"}],
ok:[1],exp:"L'alcool allonge le temps de réaction, rétrécit le champ visuel, altère le jugement et augmente la prise de risque — c'est la 1re cause de mortalité routière.",expa:"الكحول يطيل زمن الاستجابة ويضيّق مجال الرؤية ويشوّه الحكم ويزيد المجازفة — أول سبب للوفيات على الطرق."},
{id:'x060',theme:'securite',img:'feux_detresse',q:"Les feux de détresse doivent être allumés :",qa:"أضواء الخطر يجب تشغيلها:",opts:[
 {f:"Pour remercier",a:"للشكر"},
 {f:"En cas d'immobilisation d'urgence ou de danger immédiat",a:"عند توقف طارئ أو خطر فوري"},
 {f:"En stationnement gênant pour 'justifier'",a:"لتبرير وقوف معيق"}],
ok:[1],exp:"Les warnings signalent un arrêt exceptionnel, une panne ou un ralentissement brutal ; ils ne se substituent pas à un stationnement réglementaire.",expa:"أضواء الخطر تشير لتوقف استثنائي أو عطل أو تباطؤ مفاجئ؛ لا تحل محل وقوف نظامي."},
{id:'x061',theme:'securite',img:'ceinture',q:"La ceinture de sécurité réduit le risque de décès en cas de choc d'environ :",qa:"حزام الأمان يقلل خطر الوفاة عند تصادم بنحو:",opts:[
 {f:"10 %",a:"10%"},
 {f:"50 %",a:"50%"},
 {f:"0 %",a:"0%"}],
ok:[1],exp:"La ceinture de sécurité divise environ par deux le risque de mortalité en cas d'accident ; elle est obligatoire pour tous les occupants.",expa:"الحزام يقلّص خطر الوفاة للنصف تقريباً عند حادث؛ إجباري لكل الركاب."},
{id:'x062',theme:'securite',img:'angle_mort',q:"Pour limiter l'angle mort, il faut :",qa:"لتقليل النقطة العمياء يجب:",opts:[
 {f:"Rien",a:"لا شيء"},
 {f:"Régler correctement les rétroviseurs et contrôler par-dessus l'épaule",a:"ضبط المرايا صحيحاً والنظر فوق الكتف"},
 {f:"Conduire vite",a:"القيادة بسرعة"}],
ok:[1],exp:"Réglez les rétroviseurs pour couvrir au maximum les flancs, puis effectuez un bref coup d'œil par-dessus l'épaule avant tout changement de direction.",expa:"اضبط المرايا لتغطية الجوانب أكثر ما يمكن، ثم ألقِ نظرة قصيرة فوق الكتف قبل كل تغيير اتجاه."},
{id:'x063',theme:'securite',img:'distance_frein',q:"La distance d'arrêt totale = ",qa:"مسافة التوقف الكلية =",opts:[
 {f:"Distance de freinage seule",a:"مسافة الفرملة فقط"},
 {f:"Distance de réaction + distance de freinage",a:"مسافة الاستجابة + مسافة الفرملة"},
 {f:"Vitesse",a:"السرعة"}],
ok:[1],exp:"La distance d'arrêt = distance parcourue pendant le temps de réaction (≈1s) + distance de freinage ; elle augmente fortement avec la vitesse.",expa:"مسافة التوقف = المسافة المقطوعة أثناء زمن الاستجابة (~ثانية) + مسافة الفرملة؛ تزداد بشدة مع السرعة."},
// ===== USAGERS =====
{id:'x064',theme:'usagers',img:'pietons',q:"Le piéton :",qa:"المشاة:",opts:[
 {f:"Doit toujours traverser hors des passages",a:"يعبر دائماً خارج الممرات"},
 {f:"Doit emprunter les passages piétons s'il y en a à moins de 50 m",a:"يجب استخدام ممرات المشاة إن وُجدت على بعد أقل من 50م"},
 {f:"N'a aucune règle",a:"لا قواعد له"}],
ok:[1],exp:"Le piéton doit emprunter les passages prévus s'ils existent à moins de 50 m ; le conducteur doit néanmoins rester vigilant partout.",expa:"على المشاة استخدام الممرات المخصصة إن وُجدت على بعد أقل من 50م؛ وعلى السائق الانتباه في كل الأحوال."},
{id:'x065',theme:'usagers',img:'passage_velo',q:"Un cycliste arrive de la gauche sur une piste cyclable traversant la route :",qa:"دراج يصل من اليسار على مسار دراجات يعبر الطريق:",opts:[
 {f:"Il est prioritaire si le marquage le prévoit",a:"له الأولوية إذا نصت العلامات على ذلك"},
 {f:"Il doit toujours s'arrêter",a:"يجب أن يتوقف دائماً"},
 {f:"Vous pouvez l'ignorer",a:"يمكن تجاهله"}],
ok:[0],exp:"Aux traversées de pistes cyclables, la priorité dépend du marquage (cédez-le-passage cycliste ou automobile) ; dans le doute, cédez le passage.",expa:"عند عبور مسارات الدراجات، الأولوية حسب العلامات (إعطاء أولوية للدراج أو للسيارة)؛ عند الشك أعطِ الأولوية."},
{id:'x066',theme:'usagers',img:'trottinette',q:"La vitesse maximale d'une trottinette électrique sur voie publique est :",qa:"السرعة القصوى لسكوتر كهربائي على الطريق العام:",opts:[
 {f:"25 km/h",a:"25كم/س"},
 {f:"45 km/h",a:"45كم/س"},
 {f:"15 km/h",a:"15كم/س"}],
ok:[0],exp:"Les EDPM (trottinettes électriques) sont limités à 25 km/h par la réglementation ; bridés d'origine sur les modèles homologués.",expa:"السكوترات الكهربائية محدودة بـ25كم/س نظاماً؛ مقيدة أصلاً في الموديلات المصادق عليها."},
{id:'x067',theme:'usagers',img:'zone_rencontre',q:"En zone de rencontre, les piétons :",qa:"في منطقة اللقاء، المشاة:",opts:[
 {f:"Doivent rester sur le trottoir",a:"يجب البقاء على الرصيف"},
 {f:"Peuvent circuler sur la chaussée et sont prioritaires",a:"يمكنهم السير على الطريق ولهم الأولوية"},
 {f:"Sont interdits",a:"ممنوعون"}],
ok:[1],exp:"La zone de rencontre autorise les piétons et cyclistes à circuler sur la chaussée ; ils sont prioritaires sur les véhicules à moteur limités à 20 km/h.",expa:"منطقة اللقاء تسمح للمشاة والدراجين بالسير على الطريق؛ لهم الأولوية على المركبات الآلية المحدودة بـ20كم/س."},
{id:'x068',theme:'usagers',img:'moto',q:"Face à un motard, la règle essentielle est :",qa:"أمام دراج ناري، القاعدة الأساسية:",opts:[
 {f:"Il est toujours prioritaire",a:"دائماً له الأولوية"},
 {f:"Contrôler les angles morts et doubler la vigilance",a:"فحص النقاط العمياء ومضاعفة الانتباه"},
 {f:"L'ignorer",a:"تجاهله"}],
ok:[1],exp:"Les deux-roues sont vulnérables et peu visibles : contrôlez systématiquement l'angle mort avant de tourner ou changer de file, et respectez les distances.",expa:"الدراجات ضعيفة وقليلة الرؤية: افحص النقطة العمياء دائماً قبل الانعطاف أو تغيير المسار واحترم المسافات."},
{id:'x069',theme:'usagers',img:'bus_arret',q:"Un bus quitte son arrêt ; vous devez :",qa:"حافلة تغادر محطتها؛ يجب:",opts:[
 {f:"L'empêcher de repartir",a:"منعها من الانطلاق"},
 {f:"Faciliter sa réinsertion si possible",a:"تسهيل إعادة اندماجها إن أمكن"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"En agglomération, il est courtois et sûr de faciliter la réinsertion des bus qui quittent leur arrêt ; surtout, méfiez-vous des piétons surgissant de devant.",expa:"في المدينة، من اللباقة والأمان تسهيل عودة الحافلات المغادرة؛ والأهم الحذر من المشاة الظاهرين أمامها."},
{id:'x070',theme:'usagers',img:'enfants',q:"Près d'une école à l'heure des sorties :",qa:"قرب مدرسة في وقت الخروج:",opts:[
 {f:"Rouler vite",a:"القيادة بسرعة"},
 {f:"Ralentir fortement et redoubler de vigilance",a:"التخفيف بشدة ومضاعفة الانتباه"},
 {f:"Klaxonner",a:"التنفير"}],
ok:[1],exp:"Aux abords des écoles, les enfants sont imprévisibles : réduisez fortement l'allure, anticipez tout surgissement et soyez prêt à vous arrêter.",expa:"قرب المدارس، الأطفال غير متوقعون: خفّف السرعة كثيراً وتوقع أي ظهور وكن مستعداً للتوقف."},
{id:'x071',theme:'usagers',img:'usagers_vulnerables',q:"En cas de dépassement d'un cycliste hors agglomération, la distance latérale minimale est :",qa:"عند تجاوز دراج خارج المنطقة المأهولة، المسافة الجانبية الدنيا:",opts:[
 {f:"50 cm",a:"50سم"},
 {f:"1,50 m",a:"1.50م"},
 {f:"10 cm",a:"10سم"}],
ok:[1],exp:"Pour dépasser un cycliste ou un piéton : 1 m en agglomération, 1,50 m hors agglomération — ralentissez et décalez-vous franchement.",expa:"لتجاوز دراج أو مشاة: متر في المدينة، 1.50م خارجها — خفّف السرعة وابتعد بوضوح."},
{id:'x072',theme:'usagers',img:'canne_blanche',q:"Un piéton à canne blanche hésite à un carrefour ; vous devez :",qa:"مشاة بعصا بيضاء متردد عند تقاطع؛ يجب:",opts:[
 {f:"Le dépasser",a:"تجاوزه"},
 {f:"Vous arrêter pour le laisser traverser en sécurité",a:"التوقف ليُكمل العبور بأمان"},
 {f:"Klaxonner pour qu'il traverse",a:"التنفير ليعبر"}],
ok:[1],exp:"La canne blanche signale une personne aveugle ou malvoyante : arrêtez-vous et laissez-la traverser ; évitez de klaxonner qui pourrait l'effrayer.",expa:"العصا البيضاء تدل على كفيف أو ضعيف البصر: توقف ودعه يعبر؛ تجنب التنفير الذي قد يخيفه."},
{id:'x073',theme:'usagers',img:'agressif',q:"Un conducteur vous insulte ou vous menace ; la bonne réaction :",qa:"سائق يشتمك أو يهددك؛ الرد الصحيح:",opts:[
 {f:"Répondre et descendre pour discuter",a:"الرد والنزول للنقاش"},
 {f:"Rester dans le véhicule, ne pas répondre, appeler les secours si nécessaire",a:"البقاء في المركبة، عدم الرد، واستدعاء المساعدة إن لزم"},
 {f:"Accélérer pour le semer dangereusement",a:"التسارع الخطير للهروب"}],
ok:[1],exp:"Face à l'agressivité : restez dans le véhicule, ne répondez pas aux provocations, mettez-vous à l'abri et appelez le 17 si la menace persiste.",expa:"أمام العدوانية: ابقَ في المركبة، لا ترد على الاستفزاز، تحصّن واتصل بـ17 إن استمر التهديد."},
// ===== CONDUCTEUR =====
{id:'x074',theme:'conducteur',img:'permis17',q:"En France, on peut conduire seul dès :",qa:"في فرنسا يمكن القيادة منفرداً من سن:",opts:[
 {f:"16 ans",a:"16 سنة"},
 {f:"17 ans (avec condition)",a:"17 سنة (بشرط)"},
 {f:"21 ans",a:"21 سنة"}],
ok:[1],exp:"Depuis 2024, le permis B peut être obtenu dès 17 ans, permettant de conduire seul (conditions d'apprentissage identiques).",expa:"منذ 2024 يمكن الحصول على رخصة B من 17 سنة للقيادة منفرداً (شروط تعلم مماثلة)."},
{id:'x075',theme:'conducteur',img:'permis_points',q:"Un conducteur probatoire récupère ses 12 points :",qa:"صاحب الرخصة التجريبية يستعيد 12 نقطة:",opts:[
 {f:"Dès le permis obtenu",a:"فور الحصول على الرخصة"},
 {f:"Après la période probatoire sans infraction",a:"بعد الفترة التجريبية بلا مخالفة"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"Le jeune conducteur dispose de 6 points pendant la période probatoire (3 ans, ou 2 avec AAC) ; il récupère 12 points à son terme s'il n'a commis aucune infraction.",expa:"السائق الجديد لديه 6 نقاط أثناء الفترة التجريبية (3 سنوات أو 2 مع AAC)؛ يستعيد 12 نقطة عند انتهائها إن لم يرتكب مخالفة."},
{id:'x076',theme:'conducteur',img:'permis_suspendu',q:"Conduire malgré une suspension de permis :",qa:"القيادة رغم تعليق الرخصة:",opts:[
 {f:"Est toléré pour le travail",a:"مسموح للعمل"},
 {f:"Est un délit passible de peines lourdes",a:"جنحة تستوجب عقوبات ثقيلة"},
 {f:"Est autorisé",a:"مسموح"}],
ok:[1],exp:"Conduire en dépit d'une suspension ou annulation est un délit : risque de prison, amende, confiscation du véhicule et aggravation des sanctions.",expa:"القيادة رغم تعليق أو إبطال الرخصة جنحة: خطر سجن وغرامة ومصادرة المركبة وتشديد العقوبات."},
{id:'x077',theme:'conducteur',img:'permis_international',q:"Le permis de conduire international :",qa:"رخصة القيادة الدولية:",opts:[
 {f:"Remplace le permis national",a:"تحل محل الوطنية"},
 {f:"Complète le permis national pour conduire à l'étranger hors UE",a:"تُكمل الوطنية للقيادة بالخارج خارج الاتحاد الأوروبي"},
 {f:"Est un autre permis",a:"رخصة أخرى"}],
ok:[1],exp:"Le permis international est une traduction officielle qui complète le permis national pour conduire dans les pays hors UE ; il ne se substitue pas à lui.",expa:"الرخصة الدولية ترجمة رسمية تُكمل الوطنية للقيادة خارج الاتحاد؛ لا تحل محلها."},
{id:'x078',theme:'conducteur',img:'documents',q:"En cas de vol ou perte de la carte grise :",qa:"عند سرقة أو فقدان البطاقة الرمادية:",opts:[
 {f:"Continuer sans",a:"الاستمرار بدونها"},
 {f:"Faire une déclaration et demander un duplicata",a:"تقديم بلاغ وطلب نسخة بديلة"},
 {f:"Vendre la voiture",a:"بيع السيارة"}],
ok:[1],exp:"En cas de perte ou vol : déclarez-le (gendarmerie/police pour le vol) puis demandez un duplicata en ligne sur le site de l'ANTS.",expa:"عند الفقدان أو السرقة: قدّم بلاغاً (شرطة/درك للسرقة) ثم اطلب نسخة عبر موقع ANTS."},
{id:'x079',theme:'conducteur',img:'examen',q:"La validité du code (ETG) pour passer la conduite est de :",qa:"صلاحية الكود (ETG) لاجتياز القيادة هي:",opts:[
 {f:"1 an",a:"سنة"},
 {f:"5 ans",a:"5 سنوات"},
 {f:"À vie",a:"مدى الحياة"}],
ok:[1],exp:"L'épreuve théorique est valable 5 ans ; dans ce délai, vous pouvez présenter l'épreuve pratique (5 échecs maximum).",expa:"اختبار النظرية صالح 5 سنوات؛ خلالها يمكنك تقديم الاختبار العملي (أقصى 5 محاولات فاشلة)."},
{id:'x080',theme:'conducteur',img:'aac',q:"La conduite accompagnée permet :",qa:"القيادة المصحوبة تسمح بـ:",opts:[
 {f:"Conduire seul",a:"القيادة منفرداً"},
 {f:"Apprendre à conduire avec un accompagnateur avant le permis",a:"تعلم القيادة مع مرافق قبل الرخصة"},
 {f:"Sauter l'examen",a:"تخطي الامتحان"}],
ok:[1],exp:"L'AAC permet d'acquérir de l'expérience dès 15 ans avec un accompagnateur expérimenté ; elle améliore la sécurité et réduit la période probatoire.",expa:"AAC يتيح اكتساب خبرة من 15 سنة مع مرافق خبير؛ يحسّن السلامة ويقلّص الفترة التجريبية."},
{id:'x081',theme:'conducteur',img:'permis_b',q:"Avec le permis B, le PTAC maximal de la voiture est :",qa:"برخصة B، الوزن الأقصى للسيارة:",opts:[
 {f:"3,5 tonnes",a:"3.5 طن"},
 {f:"7,5 tonnes",a:"7.5 طن"},
 {f:"2 tonnes",a:"2 طن"}],
ok:[0],exp:"Le permis B autorise les véhicules dont le PTAC n'excède pas 3,5 tonnes et 9 places assises maximum (conducteur compris).",expa:"رخصة B تسمح بمركبات لا يتجاوز وزنها 3.5 طن و9 مقاعد جالسة كحد أقصى (مع السائق)."},
{id:'x082',theme:'conducteur',img:'drogue',q:"Après consommation de cannabis, le délai avant de conduire :",qa:"بعد تعاطي القنب، المدة قبل القيادة:",opts:[
 {f:"Quelques heures suffisent",a:"بضع ساعات تكفي"},
 {f:"Plusieurs jours (la substance est détectable longtemps)",a:"عدة أيام (المادة تبقى قابلة للكشف طويلاً)"},
 {f:"Aucun",a:"لا شيء"}],
ok:[1],exp:"Le cannabis reste détectable plusieurs jours ; conduire sous son emprise est un délit grave — il faut attendre très longtemps avant de conduire.",expa:"القنب يبقى قابلاً للكشف أياماً؛ القيادة تحت تأثيره جنحة خطيرة — يجب الانتظار طويلاً قبل القيادة."},
// ===== ENVIRONNEMENT =====
{id:'x083',theme:'environnement',img:'eco_feuille',q:"Une conduite anticipée permet d'économiser jusqu'à :",qa:"القيادة المتوقعة توفر حتى:",opts:[
 {f:"0 %",a:"0%"},
 {f:"10 à 40 % de carburant",a:"10-40% وقود"},
 {f:"100 %",a:"100%"}],
ok:[1],exp:"L'éco-conduite (anticipation, conduite souple, rapports hauts) permet d'économiser 10 à 40 % de carburant selon le trajet.",expa:"القيادة الاقتصادية (توقع، نعومة، تروس عالية) توفر 10-40% وقود حسب الرحلة."},
{id:'x084',theme:'environnement',img:'start_stop',q:"Pour réduire la consommation en ville :",qa:"لتقليل الاستهلاك في المدينة:",opts:[
 {f:"Accélérer fort entre deux feux",a:"التسارع بقوة بين ضوءين"},
 {f:"Anticiper les feux et ralentir en douceur",a:"توقع الأضواء والتباطؤ بلطف"},
 {f:"Rouler au point mort",a:"السير على محايد"}],
ok:[1],exp:"En ville : anticipez les feux (levez le pied pour arriver au vert), évitez les à-coups et le point mort qui augmente la consommation et use les freins.",expa:"في المدينة: توقع الأضواء (ارفع قدمك لتصل على الأخضر)، تجنب الحركات المفاجئة والمحايد الذي يزيد الاستهلاك ويؤكل الفرامل."},
{id:'x085',theme:'environnement',img:'covoiturage',q:"Les avantages du covoiturage :",qa:"مزايا المشاركة في السيارة:",opts:[
 {f:"Plus de voitures sur la route",a:"سيارات أكثر على الطريق"},
 {f:"Moins d'émissions, de frais et d'embouteillages",a:"انبعاثات وتكاليف وازدحامات أقل"},
 {f:"Plus de pollution",a:"تلوث أكثر"}],
ok:[1],exp:"Le covoiturage réduit le nombre de véhicules en circulation : moins de CO2, moins d'embouteillages et partage des frais.",expa:"المشاركة تقلل عدد المركبات: CO2 أقل وازدحام أقل وتقاسم التكاليف."},
{id:'x086',theme:'environnement',img:'filtre_air',q:"L'entretien régulier du véhicule :",qa:"الصيانة المنتظمة للمركبة:",opts:[
 {f:"Augmente la pollution",a:"تزيد التلوث"},
 {f:"Réduit la consommation et les émissions polluantes",a:"تقلل الاستهلاك والانبعاثات"},
 {f:"N'a pas d'impact",a:"لا تأثير"}],
ok:[1],exp:"Un véhicule bien entretenu (filtres, bougies, pression des pneus) consomme moins et pollue moins ; le contrôle technique aide à repérer les dérives.",expa:"المركبة المصانة جيداً (فلاتر، شمعات، ضغط إطارات) تستهلك وتلوث أقل؛ الفحص التقني يساعد على رصد الانحرافات."},
{id:'x087',theme:'environnement',img:'frein_moteur',q:"En descente, pour préserver les freins :",qa:"في النزول، للحفاظ على الفرامل:",opts:[
 {f:"Freiner fort en continu",a:"الفرملة بقوة باستمرار"},
 {f:"Utiliser le frein moteur en rétrogradant",a:"استخدام فرامل المحرك بتخفيض التروس"},
 {f:"Éteindre le moteur",a:"إطفاء المحرك"}],
ok:[1],exp:"En descente, rétrogradez pour utiliser le frein moteur : cela préserve les freins de service qui surchaufferaient en usage continu.",expa:"في النزول خفّف التروس لاستخدام فرامل المحرك: يحفظ الفرامل الرئيسية التي تسخن بالاستخدام المتواصل."},
{id:'x088',theme:'environnement',img:'clim',q:"Pour limiter la surconsommation de climatisation :",qa:"لتقليل استهلاك التكييف الزائد:",opts:[
 {f:"La laisser toujours au maximum",a:"تركها دائماً على الأقصى"},
 {f:"L'utiliser avec modération et aérer quand possible",a:"استخدامها باعتدال والتهوية عند الإمكان"},
 {f:"Rouler fenêtres ouvertes sur autoroute",a:"القيادة بنوافذ مفتوحة على الأوتوروت"}],
ok:[1],exp:"Modérez la clim (écart ≤ 5-8°C avec l'extérieur) ; à basse vitesse, préférez l'aération ; sur autoroute, les fenêtres ouvertes consomment plus que la clim.",expa:"اعتدل في التكييف (فرق ≤5-8° مع الخارج)؛ بسرعة منخفضة فضّل التهوية؛ على الأوتوروت النوافذ المفتوحة تستهلك أكثر من التكييف."},
// ===== SECOURS =====
{id:'x089',theme:'secours',img:'accident_scene',q:"Les trois étapes de la conduite à tenir sur un accident :",qa:"خطوات التصرف الثلاث عند حادث:",opts:[
 {f:"Fuir - Ignorer - Partir",a:"هروب - تجاهل - مغادرة"},
 {f:"Protéger - Alerter - Secourir",a:"حماية - إنذار - إسعاف"},
 {f:"Regarder - Photographier - Partir",a:"مشاهدة - تصوير - مغادرة"}],
ok:[1],exp:"Sur un accident : Protéger la zone, Alerter les secours (15/18/112), Secourir dans la limite de vos moyens sans vous mettre en danger.",expa:"عند حادث: احمِ المنطقة، أنذر المساعدة (15/18/112)، أسعف ضمن إمكاناتك دون تعريض نفسك للخطر."},
{id:'x090',theme:'secours',img:'tel_urgence',q:"En France, le numéro des pompiers est :",qa:"في فرنسا، رقم الإطفاء هو:",opts:[
 {f:"15",a:"15"},
 {f:"17",a:"17"},
 {f:"18",a:"18"}],
ok:[2],exp:"15 SAMU (urgences médicales), 17 Police/Gendarmerie, 18 Pompiers ; le 112 fonctionne partout en Europe.",expa:"15 إسعاف طبي، 17 شرطة/درك، 18 إطفاء؛ 112 يعمل في كل أوروبا."},
{id:'x091',theme:'secours',img:'pls',q:"Une victime inconsciente qui respire doit être mise en :",qa:"ضحية فاقدة الوعي لكنها تتنفس يجب وضعها في:",opts:[
 {f:"Position assise",a:"وضعية جلوس"},
 {f:"Position latérale de sécurité",a:"وضعية الأمان الجانبية"},
 {f:"Position debout",a:"وضعية وقوف"}],
ok:[1],exp:"La PLS (position latérale de sécurité) met la victime sur le côté, voies aériennes dégagées, pour éviter l'étouffement par la langue ou les vomissements.",expa:"وضعية الأمان الجانبية تضع الضحية على جنبها بمجرى هواء مفتوح لتجنب الاختناق باللسان أو القيء."},
{id:'x092',theme:'secours',img:'massage',q:"Le rythme du massage cardiaque est de :",qa:"إيقاع تدليك القلب هو:",opts:[
 {f:"60 compressions/min",a:"60 ضغطة/دقيقة"},
 {f:"100-120 compressions/min",a:"100-120 ضغطة/دقيقة"},
 {f:"200 compressions/min",a:"200 ضغطة/دقيقة"}],
ok:[1],exp:"Le massage cardiaque se fait au centre de la poitrine, bras tendus, à raison de 100 à 120 compressions par minute, en profondeur de 5-6 cm.",expa:"تدليك القلب يُجرى وسط الصدر بذراعين مستقيمتين بمعدل 100-120 ضغطة/دقيقة بعمق 5-6سم."},
{id:'x093',theme:'secours',img:'brulure',q:"Une brûlure grave (visage, mains, grandes surfaces) nécessite :",qa:"حرق خطير (وجه، يدان، مساحات واسعة) يستوجب:",opts:[
 {f:"De l'eau chaude",a:"ماء ساخن"},
 {f:"Une alerte médicale immédiate et un refroidissement à l'eau",a:"إنذاراً طبياً فورياً وتبريداً بالماء"},
 {f:"De la crème grasse",a:"كريماً دهنياً"}],
ok:[1],exp:"Toute brûlure étendue ou sur zone sensible (visage, mains, articulations) est grave : alertez les secours et refroidissez à l'eau froide.",expa:"أي حرق ممتد أو بمنطقة حساسة (وجه، يدان، مفاصل) خطير: أنذر المساعدة وبرّد بماء بارد."},
{id:'x094',theme:'secours',img:'incendie',q:"Sur un incendie naissant de véhicule, l'extincteur s'utilise :",qa:"عند حريق مبدئي في مركبة، الطفاية تُستخدم:",opts:[
 {f:"En visant le haut des flammes",a:"بتوجيهه لأعلى اللهب"},
 {f:"À la base des flammes, de près et en balayant",a:"على قاعدة اللهب من قريب مع مسح"},
 {f:"Jamais",a:"أبداً"}],
ok:[1],exp:"Dirigez le jet à la base des flammes, de près, en balayant ; n'ouvrez le capot qu'en entrouvert pour ne pas attiser le feu par l'air.",expa:"وجّه الرش لقاعدة اللهب من قريب مع مسح؛ افتح الغطاء بفتحة صغيرة فقط لتجنب تأجيج النار بالهواء."}
);
