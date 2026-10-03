// Administrative centres phrasebook — trilingual (fr / ar / en) phrase sets
// organised per centre, then per section. Add new centres to CENTRES_DATA.
window.CENTRES_DATA = [
  {
    id: 'croix-rouge',
    icon: '🏥',
    name: { ar: 'الصليب الأحمر — الدوميسيلياسيون', en: 'Croix-Rouge — Domiciliation', fr: 'Croix-Rouge — Domiciliation' },
    desc: {
      ar: 'فتح عنوان بريدي (domiciliation) لدى الصليب الأحمر واستلام البريد',
      en: 'Setting up a mailing address (domiciliation) at Croix-Rouge and collecting mail',
      fr: 'Ouvrir une domiciliation à la Croix-Rouge et récupérer son courrier'
    },
    sections: [
      {
        icon: '🏢',
        title: { ar: 'فتح عنوان domiciliation', en: 'Opening a domiciliation address', fr: 'Ouvrir une domiciliation' },
        phrases: [
          { fr: 'Bonjour, je voudrais faire une domiciliation, s’il vous plaît.', ar: 'مرحبا، بدي أعمل دوميسيلياسيون، لو سمحت.', en: 'Hello, I would like to set up a mailing address, please.' },
          { fr: 'Bonjour. Bien sûr. Vous avez rendez-vous ?', ar: 'مرحبا. أكيد. عندك موعد؟', en: 'Hello. Of course. Do you have an appointment?' },
          { fr: 'Non, je n’ai pas de rendez-vous.', ar: 'لا، ما عندي موعد.', en: 'No, I don’t have an appointment.' },
          { fr: 'Vous êtes déjà domicilié chez nous ?', ar: 'إنت مسجّل عندنا من قبل؟', en: 'Are you already registered with us?' },
          { fr: 'Non, je viens pour la première fois.', ar: 'لا، جايي لأول مرة.', en: 'No, I’m here for the first time.' },
          { fr: 'Je voudrais ouvrir une domiciliation chez vous.', ar: 'بدي افتح دوميسيلياسيون عندكم.', en: 'I would like to set up a domiciliation with you.' },
          { fr: 'Comment ça fonctionne ?', ar: 'كيف بتشتغل القصة؟', en: 'How does it work?' },
          { fr: 'Quelles sont les conditions ?', ar: 'شو الشروط؟', en: 'What are the requirements?' },
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدّمها؟', en: 'What documents do I need to provide?' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'الوثائق المطلوبة', en: 'Required documents', fr: 'Les documents requis' },
        phrases: [
          { fr: 'Vous avez une pièce d’identité ?', ar: 'معك وثيقة هوية؟', en: 'Do you have an ID?' },
          { fr: 'Oui, voici ma pièce d’identité.', ar: 'إي، هاي هويتي.', en: 'Yes, here is my ID.' },
          { fr: 'Vous avez d’autres documents ?', ar: 'معك أوراق تانية؟', en: 'Do you have any other documents?' },
          { fr: 'Oui, j’ai apporté mes documents.', ar: 'إي، جبت أوراقي.', en: 'Yes, I brought my documents.' },
          { fr: 'Il faut remplir ce formulaire.', ar: 'لازم تعبي هالاستمارة.', en: 'You need to fill out this form.' },
          { fr: 'Je dois remplir tout le formulaire ?', ar: 'لازم عبي الاستمارة كلها؟', en: 'Do I need to fill out the whole form?' },
          { fr: 'Oui, s’il vous plaît.', ar: 'إي، لو سمحت.', en: 'Yes, please.' },
          { fr: 'Je dois signer ici ?', ar: 'لازم وقّع هون؟', en: 'Do I need to sign here?' },
          { fr: 'Oui, c’est ça.', ar: 'إي، هيك.', en: 'Yes, that’s right.' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'السؤال عن وضع السكن', en: 'Questions about housing', fr: 'Questions sur le logement' },
        phrases: [
          { fr: 'Où est-ce que vous habitez actuellement ?', ar: 'وين ساكن حالياً؟', en: 'Where are you currently living?' },
          { fr: 'Je n’ai pas d’adresse stable actuellement.', ar: 'حالياً ما عندي عنوان ثابت.', en: 'I don’t currently have a stable address.' },
          { fr: 'Vous êtes hébergé chez quelqu’un ?', ar: 'حدا مستضيفك؟', en: 'Are you staying with someone?' },
          { fr: 'Non, je n’ai pas d’hébergement stable.', ar: 'لا، ما عندي سكن ثابت.', en: 'No, I don’t have stable accommodation.' },
          { fr: 'Pourquoi vous demandez une domiciliation ?', ar: 'ليش بدك دوميسيلياسيون؟', en: 'Why are you requesting a domiciliation?' },
          { fr: 'J’ai besoin d’une adresse pour recevoir mon courrier.', ar: 'بحتاج عنوان حتى استلم بريدي.', en: 'I need an address to receive my mail.' }
        ]
      },
      {
        icon: '📬',
        title: { ar: 'استخدام عنوان الدوميسيلياسيون', en: 'Using the domiciliation address', fr: 'Utiliser l’adresse de domiciliation' },
        phrases: [
          { fr: 'Je peux recevoir mon courrier ici ?', ar: 'فيني استلم بريدي هون؟', en: 'Can I receive my mail here?' },
          { fr: 'Je peux recevoir mes lettres ici ?', ar: 'فيني استلم رسائلي هون؟', en: 'Can I receive my letters here?' },
          { fr: 'Est-ce que je peux recevoir des courriers administratifs ?', ar: 'فيني استلم البريد الإداري هون؟', en: 'Can I receive administrative mail here?' },
          { fr: 'Je peux utiliser cette adresse pour mes démarches administratives ?', ar: 'فيني استخدم هالعنوان لمعاملاتي الإدارية؟', en: 'Can I use this address for my administrative procedures?' },
          { fr: 'Oui, vous pouvez utiliser cette adresse pour recevoir votre courrier.', ar: 'إي، فيك تستخدم هالعنوان لاستلام بريدك.', en: 'Yes, you can use this address to receive your mail.' },
          { fr: 'Quelle adresse dois-je donner exactement ?', ar: 'شو العنوان بالضبط اللي لازم أعطيه؟', en: 'What exact address should I give?' },
          { fr: 'Je dois mettre mon nom et prénom sur le courrier ?', ar: 'لازم حط اسمي وكنيتي عالبريد؟', en: 'Do I need to put my first and last name on the mail?' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'شهادة الدوميسيلياسيون', en: 'The domiciliation certificate', fr: 'L’attestation de domiciliation' },
        phrases: [
          { fr: 'Vous allez me donner une attestation de domiciliation ?', ar: 'رح تعطوني شهادة الدوميسيلياسيون؟', en: 'Will you give me a domiciliation certificate?' },
          { fr: 'Voici votre attestation de domiciliation.', ar: 'هاي شهادة الدوميسيلياسيون تبعك.', en: 'Here is your domiciliation certificate.' },
          { fr: 'Merci.', ar: 'شكراً.', en: 'Thank you.' },
          { fr: 'Ma domiciliation est-elle acceptée ?', ar: 'تمت الموافقة على الدوميسيلياسيون تبعي؟', en: 'Has my domiciliation been approved?' },
          { fr: 'Votre domiciliation est acceptée.', ar: 'تمت الموافقة على الدوميسيلياسيون تبعك.', en: 'Your domiciliation has been approved.' },
          { fr: 'Quand est-ce que je peux commencer à recevoir mon courrier ?', ar: 'إمتى فيني بلّش استلم بريدي؟', en: 'When can I start receiving my mail?' },
          { fr: 'Vous pouvez commencer dès maintenant.', ar: 'فيك تبلّش من هلق.', en: 'You can start from now.' }
        ]
      },
      {
        icon: '📮',
        title: { ar: 'عندما تعود لاستلام البريد', en: 'Coming back to collect mail', fr: 'Revenir chercher le courrier' },
        phrases: [
          { fr: 'Bonjour, je viens récupérer mon courrier.', ar: 'مرحبا، جئت استلم بريدي.', en: 'Hello, I’m here to collect my mail.' },
          { fr: 'Bonjour. Vous avez votre carte de domiciliation ?', ar: 'مرحبا. معك بطاقة الدوميسيلياسيون؟', en: 'Hello. Do you have your domiciliation card?' },
          { fr: 'Oui, la voici.', ar: 'إي، هاي هي.', en: 'Yes, here it is.' },
          { fr: 'Est-ce que j’ai reçu du courrier ?', ar: 'وصلني شي بريد؟', en: 'Have I received any mail?' },
          { fr: 'Est-ce que vous avez du courrier à mon nom ?', ar: 'عندكم بريد باسمي؟', en: 'Do you have any mail in my name?' },
          { fr: 'Vous avez reçu quelque chose pour moi ?', ar: 'وصلكن شي إلي؟', en: 'Have you received anything for me?' },
          { fr: 'J’ai reçu une lettre ?', ar: 'وصلتني رسالة؟', en: 'Did I receive a letter?' }
        ]
      },
      {
        icon: '📩',
        title: { ar: 'إذا كان هناك بريد', en: 'If there is mail', fr: 'S’il y a du courrier' },
        phrases: [
          { fr: 'Oui, vous avez du courrier.', ar: 'إي، عندك بريد.', en: 'Yes, you have some mail.' },
          { fr: 'Vous avez reçu une lettre.', ar: 'وصلتك رسالة.', en: 'You received a letter.' },
          { fr: 'Vous avez plusieurs courriers.', ar: 'عندك كذا رسالة.', en: 'You have several pieces of mail.' },
          { fr: 'C’est un courrier administratif.', ar: 'هاد بريد إداري.', en: 'It’s administrative mail.' },
          { fr: 'C’est une lettre importante.', ar: 'هاي رسالة مهمة.', en: 'It’s an important letter.' },
          { fr: 'Voilà votre courrier.', ar: 'تفضل، هاد بريدك.', en: 'Here is your mail.' }
        ]
      },
      {
        icon: '✍️',
        title: { ar: 'التوقيع والاستلام', en: 'Signing and collecting', fr: 'Signer et récupérer' },
        phrases: [
          { fr: 'Je dois signer ?', ar: 'لازم وقّع؟', en: 'Do I need to sign?' },
          { fr: 'Où dois-je signer ?', ar: 'وين لازم وقّع؟', en: 'Where do I need to sign?' },
          { fr: 'Je signe ici ?', ar: 'وقّع هون؟', en: 'Do I sign here?' },
          { fr: 'Oui, signez ici, s’il vous plaît.', ar: 'إي، وقّع هون لو سمحت.', en: 'Yes, please sign here.' },
          { fr: 'Je peux récupérer mon courrier ?', ar: 'فيني استلم بريدي؟', en: 'Can I collect my mail?' },
          { fr: 'Oui, bien sûr.', ar: 'إي، أكيد.', en: 'Yes, of course.' },
          { fr: 'Merci, je l’ai bien reçu.', ar: 'شكراً، استلمته.', en: 'Thank you, I received it.' }
        ]
      },
      {
        icon: '❌',
        title: { ar: 'إذا لم يصل أي بريد', en: 'If no mail arrived', fr: 'Si aucun courrier n’est arrivé' },
        phrases: [
          { fr: 'Je voudrais vérifier si j’ai reçu du courrier.', ar: 'بدي أتأكد إذا وصلني بريد.', en: 'I’d like to check if I’ve received any mail.' },
          { fr: 'Je suis désolé, vous n’avez rien reçu.', ar: 'آسف، ما وصلك شي.', en: 'I’m sorry, you haven’t received anything.' },
          { fr: 'D’accord, je reviendrai plus tard.', ar: 'تمام، برجع بعدين.', en: 'Okay, I’ll come back later.' },
          { fr: 'Je peux revenir demain ?', ar: 'فيني أرجع بكرا؟', en: 'Can I come back tomorrow?' },
          { fr: 'Oui, bien sûr.', ar: 'إي، أكيد.', en: 'Yes, of course.' }
        ]
      },
      {
        icon: '📦',
        title: { ar: 'إذا كانت رسالة مسجلة', en: 'If it is a registered letter', fr: 'Si c’est un recommandé' },
        phrases: [
          { fr: 'J’ai un recommandé ?', ar: 'عندي رسالة مسجّلة؟', en: 'Do I have a registered letter?' },
          { fr: 'Oui, vous avez un recommandé.', ar: 'إي، عندك رسالة مسجّلة.', en: 'Yes, you have a registered letter.' },
          { fr: 'Je dois signer pour la récupérer ?', ar: 'لازم وقّع حتى استلمها؟', en: 'Do I need to sign to collect it?' },
          { fr: 'Oui, il faut signer.', ar: 'إي، لازم توقّع.', en: 'Yes, you need to sign.' }
        ]
      },
      {
        icon: '👋',
        title: { ar: 'في النهاية', en: 'At the end', fr: 'Pour finir' },
        phrases: [
          { fr: 'Merci beaucoup.', ar: 'شكراً كتير.', en: 'Thank you very much.' },
          { fr: 'Merci pour votre aide.', ar: 'شكراً لمساعدتكم.', en: 'Thank you for your help.' },
          { fr: 'Bonne journée.', ar: 'نهارك سعيد.', en: 'Have a nice day.' },
          { fr: 'Merci, vous aussi.', ar: 'شكراً، وإنت كمان.', en: 'Thank you, you too.' },
          { fr: 'Au revoir.', ar: 'مع السلامة.', en: 'Goodbye.' }
        ]
      }
    ]
  },
  {
    id: 'spada-guda',
    icon: '🛂',
    name: { ar: 'SPADA / GUDA — طلب اللجوء', en: 'SPADA / GUDA — Asylum application', fr: 'SPADA / GUDA — Demande d’asile' },
    desc: {
      ar: 'تقديم طلب اللجوء في فرنسا من الوصول إلى SPADA / GUDA حتى استلام الوثائق',
      en: 'Applying for asylum in France, from arrival at SPADA / GUDA to receiving documents',
      fr: 'Faire une demande d’asile en France, de l’arrivée à la SPADA / au GUDA jusqu’aux documents'
    },
    sections: [
      {
        icon: '🛂',
        title: { ar: 'بداية طلب اللجوء', en: 'Starting the asylum application', fr: 'Début de la demande d’asile' },
        phrases: [
          { fr: 'Bonjour, je voudrais demander l’asile en France.', ar: 'مرحبا، بدي قدّم طلب لجوء بفرنسا.', en: 'Hello, I would like to apply for asylum in France.' },
          { fr: 'Je souhaite faire une demande d’asile.', ar: 'بدي قدّم طلب لجوء.', en: 'I would like to apply for asylum.' },
          { fr: 'C’est la première fois que je demande l’asile en France.', ar: 'هاي أول مرة بقدّم فيها طلب لجوء بفرنسا.', en: 'This is the first time I’m applying for asylum in France.' },
          { fr: 'Je voudrais savoir où je dois aller.', ar: 'بدي أعرف لوين لازم روح.', en: 'I would like to know where I need to go.' }
        ]
      },
      {
        icon: '📝',
        title: { ar: 'التسجيل والأسئلة الأولى', en: 'Registration and first questions', fr: 'Enregistrement et premières questions' },
        phrases: [
          { fr: 'Vous avez un rendez-vous ?', ar: 'عندك موعد؟', en: 'Do you have an appointment?' },
          { fr: 'Oui, j’ai rendez-vous aujourd’hui.', ar: 'إي، عندي موعد اليوم.', en: 'Yes, I have an appointment today.' },
          { fr: 'Non, je n’ai pas encore de rendez-vous.', ar: 'لا، لسا ما عندي موعد.', en: 'No, I don’t have an appointment yet.' },
          { fr: 'Vous avez votre passeport ?', ar: 'معك جواز سفرك؟', en: 'Do you have your passport?' },
          { fr: 'Oui, voici mon passeport.', ar: 'إي، هاد جواز سفري.', en: 'Yes, here is my passport.' },
          { fr: 'Vous avez d’autres documents ?', ar: 'معك أوراق تانية؟', en: 'Do you have any other documents?' },
          { fr: 'Oui, voici mes documents.', ar: 'إي، هاي أوراقي.', en: 'Yes, here are my documents.' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'الترجمة', en: 'Interpretation', fr: 'L’interprétation' },
        phrases: [
          { fr: 'Vous avez besoin d’un interprète ?', ar: 'بدك مترجم؟', en: 'Do you need an interpreter?' },
          { fr: 'Oui, j’ai besoin d’un interprète en arabe.', ar: 'إي، بحتاج مترجم عربي.', en: 'Yes, I need an Arabic interpreter.' },
          { fr: 'Je parle un peu français, mais j’ai besoin d’un interprète pour bien comprendre.', ar: 'بحكي فرنسي شوي، بس بحتاج مترجم مشان أفهم منيح.', en: 'I speak a little French, but I need an interpreter to understand properly.' },
          { fr: 'Je n’ai pas bien compris. Pouvez-vous répéter, s’il vous plaît ?', ar: 'ما فهمت منيح، فيك تعيد لو سمحت؟', en: 'I didn’t understand well. Could you repeat, please?' },
          { fr: 'Pouvez-vous parler plus lentement, s’il vous plaît ?', ar: 'فيك تحكي أبطأ شوي، لو سمحت؟', en: 'Could you speak more slowly, please?' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'السكن والعنوان', en: 'Housing and address', fr: 'Logement et adresse' },
        phrases: [
          { fr: 'Où habitez-vous actuellement ?', ar: 'وين ساكن حالياً؟', en: 'Where are you currently living?' },
          { fr: 'Je suis hébergé chez quelqu’un.', ar: 'أنا مستضاف عند حدا.', en: 'I’m staying with someone.' },
          { fr: 'Je n’ai pas de logement stable.', ar: 'ما عندي سكن ثابت.', en: 'I don’t have stable accommodation.' },
          { fr: 'Je suis domicilié à la Croix-Rouge.', ar: 'أنا عامل دوميسيلياسيون عند الصليب الأحمر.', en: 'I have a mailing address with the Red Cross.' },
          { fr: 'Voici mon attestation de domiciliation.', ar: 'هاي شهادة الدوميسيلياسيون تبعي.', en: 'Here is my domiciliation certificate.' }
        ]
      },
      {
        icon: '👨‍👩‍👧',
        title: { ar: 'معلومات شخصية', en: 'Personal information', fr: 'Informations personnelles' },
        phrases: [
          { fr: 'Quelle est votre nationalité ?', ar: 'شو جنسيتك؟', en: 'What is your nationality?' },
          { fr: 'Je suis syrien.', ar: 'أنا سوري.', en: 'I’m Syrian.' },
          { fr: 'Où êtes-vous né ?', ar: 'وين مولود؟', en: 'Where were you born?' },
          { fr: 'Je suis né en Syrie.', ar: 'أنا مولود بسوريا.', en: 'I was born in Syria.' },
          { fr: 'Quelle est votre date de naissance ?', ar: 'شو تاريخ ميلادك؟', en: 'What is your date of birth?' },
          { fr: 'Êtes-vous marié ?', ar: 'إنت متزوج؟', en: 'Are you married?' },
          { fr: 'Avez-vous des enfants ?', ar: 'عندك أولاد؟', en: 'Do you have children?' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'الوثائق', en: 'Documents', fr: 'Les documents' },
        phrases: [
          { fr: 'Voici mon passeport.', ar: 'هاد جواز سفري.', en: 'Here is my passport.' },
          { fr: 'Voici ma carte d’identité.', ar: 'هاي هويتي.', en: 'Here is my ID card.' },
          { fr: 'Voici tous les documents que j’ai.', ar: 'هاي كل الأوراق اللي معي.', en: 'Here are all the documents I have.' },
          { fr: 'Il manque un document ?', ar: 'ناقص شي ورقة؟', en: 'Is any document missing?' },
          { fr: 'Je peux fournir d’autres documents plus tard ?', ar: 'فيني قدّم أوراق إضافية بعدين؟', en: 'Can I provide additional documents later?' }
        ]
      },
      {
        icon: '📬',
        title: { ar: 'بعد التسجيل', en: 'After registration', fr: 'Après l’enregistrement' },
        phrases: [
          { fr: 'Quand vais-je recevoir mes documents ?', ar: 'إمتى رح استلم أوراقي؟', en: 'When will I receive my documents?' },
          { fr: 'Où vais-je recevoir mon courrier ?', ar: 'وين رح استلم بريدي؟', en: 'Where will I receive my mail?' },
          { fr: 'Je dois venir chercher mon courrier ici ?', ar: 'لازم إجي لهون آخد بريدي؟', en: 'Do I need to come here to collect my mail?' },
          { fr: 'Est-ce que je dois signaler tout changement d’adresse ?', ar: 'لازم خبركم إذا تغيّر عنواني؟', en: 'Do I need to report any change of address?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'عبارات مهمة جداً إذا لغتك الفرنسية ضعيفة', en: 'Essential phrases if your French is weak', fr: 'Phrases essentielles si votre français est faible' },
        phrases: [
          { fr: 'Je ne comprends pas bien le français.', ar: 'ما بفهم فرنسي منيح.', en: 'I don’t understand French well.' },
          { fr: 'Je préfère avoir un interprète en arabe.', ar: 'بفضّل يكون معي مترجم عربي.', en: 'I prefer to have an Arabic interpreter.' },
          { fr: 'Pouvez-vous répéter, s’il vous plaît ?', ar: 'فيك تعيد لو سمحت؟', en: 'Could you repeat, please?' },
          { fr: 'Pouvez-vous parler plus lentement ?', ar: 'فيك تحكي أبطأ شوي؟', en: 'Could you speak more slowly?' },
          { fr: 'Je voudrais être sûr d’avoir bien compris.', ar: 'بدي أتأكد إني فهمت منيح.', en: 'I want to make sure I understood correctly.' },
          { fr: 'Est-ce que je dois signer ce document ?', ar: 'لازم وقّع على هالورقة؟', en: 'Do I need to sign this document?' }
        ]
      },
      {
        icon: '🖐️',
        title: { ar: 'أخذ البصمات في GUDA', en: 'Fingerprinting at the GUDA', fr: 'La prise d’empreintes au GUDA' },
        phrases: [
          { fr: 'Nous allons prendre vos empreintes digitales.', ar: 'رح ناخد بصمات أصابعك.', en: 'We are going to take your fingerprints.' },
          { fr: 'D’accord.', ar: 'تمام.', en: 'Okay.' },
          { fr: 'Posez vos doigts ici, s’il vous plaît.', ar: 'حط أصابعك هون لو سمحت.', en: 'Put your fingers here, please.' },
          { fr: 'Je dois mettre tous mes doigts ?', ar: 'لازم حط كل أصابعي؟', en: 'Do I need to put all my fingers?' },
          { fr: 'Oui, comme ça.', ar: 'إي، هيك.', en: 'Yes, like this.' }
        ]
      },
      {
        icon: '✈️',
        title: { ar: 'السؤال عن طريق الوصول إلى فرنسا', en: 'Questions about your journey to France', fr: 'Questions sur le parcours jusqu’en France' },
        phrases: [
          { fr: 'Par quel pays êtes-vous arrivé en France ?', ar: 'عن طريق أي بلد وصلت على فرنسا؟', en: 'Through which country did you enter France?' },
          { fr: 'Comment êtes-vous arrivé en France ?', ar: 'كيف وصلت على فرنسا؟', en: 'How did you arrive in France?' },
          { fr: 'Quels pays avez-vous traversés ?', ar: 'شو الدول اللي مريت فيها؟', en: 'Which countries did you travel through?' },
          { fr: 'Je vais vous expliquer mon parcours.', ar: 'رح اشرحلكم طريق سفري.', en: 'I’ll explain my journey.' },
          { fr: 'Je ne me souviens pas de toutes les dates.', ar: 'ما بتذكر كل التواريخ.', en: 'I don’t remember all the dates.' }
        ]
      },
      {
        icon: '📋',
        title: { ar: 'إذا طلبوا منك ملء استمارة', en: 'If they ask you to fill out a form', fr: 'Si l’on vous demande de remplir un formulaire' },
        phrases: [
          { fr: 'Vous devez remplir ce formulaire.', ar: 'لازم تعبي هالاستمارة.', en: 'You need to fill out this form.' },
          { fr: 'Je dois remplir cette partie aussi ?', ar: 'لازم عبي هالجزء كمان؟', en: 'Do I need to fill out this part too?' },
          { fr: 'Je ne comprends pas cette question.', ar: 'ما فهمت هالسؤال.', en: 'I don’t understand this question.' },
          { fr: 'Pouvez-vous m’expliquer, s’il vous plaît ?', ar: 'فيك تشرحلي لو سمحت؟', en: 'Could you explain it to me, please?' }
        ]
      }
    ]
  },
  {
    id: 'ofpra',
    icon: '⚖️',
    name: { ar: 'OFPRA — مقابلة اللجوء', en: 'OFPRA — Asylum interview', fr: 'OFPRA — Entretien de demande d’asile' },
    desc: {
      ar: 'مقابلة اللجوء مع OFPRA: الأسئلة الشائعة ثم المقابلة الكاملة سؤال وجواب — استبدل الأجوبة بين [ ] بوضعك الحقيقي',
      en: 'The OFPRA asylum interview: common questions then the full Q&A — replace [ ] placeholders with your real answers',
      fr: 'L’entretien OFPRA : questions fréquentes puis entretien complet questions-réponses — remplacez les [ ] par votre vraie situation'
    },
    sections: [
      {
        icon: '👋',
        title: { ar: 'بداية المقابلة', en: 'Start of the interview', fr: 'Début de l’entretien' },
        phrases: [
          { fr: 'Bonjour. Comment allez-vous ?', ar: 'مرحبا، كيفك؟', en: 'Hello. How are you?' },
          { fr: 'Bonjour. Je vais bien, merci.', ar: 'مرحبا، أنا منيح، شكراً.', en: 'Hello. I’m fine, thank you.' },
          { fr: 'Vous avez bien compris que l’entretien est confidentiel ?', ar: 'فهمت إنو المقابلة سرّية؟', en: 'Did you understand that the interview is confidential?' },
          { fr: 'Oui, j’ai compris.', ar: 'إي، فهمت.', en: 'Yes, I understood.' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'الهوية والمعلومات الشخصية', en: 'Identity and personal information', fr: 'Identité et informations personnelles' },
        phrases: [
          { fr: 'Pouvez-vous me confirmer votre nom et votre prénom ?', ar: 'فيك تأكدلي اسمك وكنيتك؟', en: 'Can you confirm your first and last name?' },
          { fr: 'Je m’appelle Mohammad Haj Mohammad.', ar: 'اسمي محمد حاج محمد.', en: 'My name is Mohammad Haj Mohammad.' },
          { fr: 'Quelle est votre date de naissance ?', ar: 'شو تاريخ ميلادك؟', en: 'What is your date of birth?' },
          { fr: 'Où êtes-vous né ?', ar: 'وين مولود؟', en: 'Where were you born?' },
          { fr: 'Quelle est votre nationalité ?', ar: 'شو جنسيتك؟', en: 'What is your nationality?' },
          { fr: 'Je suis de nationalité syrienne.', ar: 'أنا سوري الجنسية.', en: 'I am Syrian.' },
          { fr: 'Quelle est votre situation familiale ?', ar: 'شو وضعك العائلي؟', en: 'What is your family situation?' },
          { fr: 'Êtes-vous marié ?', ar: 'إنت متزوج؟', en: 'Are you married?' },
          { fr: 'Avez-vous des enfants ?', ar: 'عندك أولاد؟', en: 'Do you have children?' }
        ]
      },
      {
        icon: '🎓',
        title: { ar: 'الدراسة والعمل', en: 'Studies and work', fr: 'Études et travail' },
        phrases: [
          { fr: 'Quel est votre niveau d’études ?', ar: 'لشو وصلت بالدراسة؟', en: 'What is your level of education?' },
          { fr: 'Qu’est-ce que vous faisiez en Syrie ?', ar: 'شو كنت تشتغل بسوريا؟', en: 'What did you do in Syria?' },
          { fr: 'Quel était votre métier ?', ar: 'شو كانت مهنتك؟', en: 'What was your occupation?' },
          { fr: 'Est-ce que vous travailliez avant de quitter la Syrie ?', ar: 'كنت تشتغل قبل ما تطلع من سوريا؟', en: 'Were you working before leaving Syria?' }
        ]
      },
      {
        icon: '👨‍👩‍👧',
        title: { ar: 'عن العائلة', en: 'About your family', fr: 'À propos de la famille' },
        phrases: [
          { fr: 'Où se trouve votre famille actuellement ?', ar: 'وين عيلتك هلق؟', en: 'Where is your family currently?' },
          { fr: 'Est-ce que votre famille est toujours en Syrie ?', ar: 'عيلتك لسا بسوريا؟', en: 'Is your family still in Syria?' },
          { fr: 'Avez-vous de la famille en Europe ?', ar: 'عندك عيلة بأوروبا؟', en: 'Do you have family in Europe?' }
        ]
      },
      {
        icon: '✈️',
        title: { ar: 'طريق الوصول إلى فرنسا', en: 'Your journey to France', fr: 'Le parcours jusqu’en France' },
        phrases: [
          { fr: 'Quand avez-vous quitté la Syrie ?', ar: 'إمتى تركت سوريا؟', en: 'When did you leave Syria?' },
          { fr: 'Comment avez-vous quitté la Syrie ?', ar: 'كيف طلعت من سوريا؟', en: 'How did you leave Syria?' },
          { fr: 'Quels pays avez-vous traversés ?', ar: 'شو الدول اللي مريت فيها؟', en: 'Which countries did you travel through?' },
          { fr: 'Comment êtes-vous arrivé en France ?', ar: 'كيف وصلت على فرنسا؟', en: 'How did you arrive in France?' },
          { fr: 'Combien de temps êtes-vous resté dans ces pays ?', ar: 'قديش ضليت بهالدول؟', en: 'How long did you stay in those countries?' },
          { fr: 'Avez-vous demandé l’asile dans un autre pays ?', ar: 'قدمت لجوء بدولة تانية؟', en: 'Did you apply for asylum in another country?' },
          { fr: 'Je ne me souviens pas exactement de la date.', ar: 'ما بتذكر التاريخ بالضبط.', en: 'I don’t remember the exact date.' },
          { fr: 'Je ne veux pas vous donner une fausse information. Je ne me souviens pas exactement.', ar: 'ما بدي أعطي معلومة غلط، ما بتذكر بالضبط.', en: 'I don’t want to give you incorrect information. I don’t remember exactly.' }
        ]
      },
      {
        icon: '❗',
        title: { ar: 'السبب الأساسي للجوء', en: 'The main reason for asylum', fr: 'Le motif principal de la demande d’asile' },
        phrases: [
          { fr: 'Pourquoi avez-vous quitté la Syrie ?', ar: 'ليش تركت سوريا؟', en: 'Why did you leave Syria?' },
          { fr: 'Pourquoi ne pouvez-vous pas retourner en Syrie ?', ar: 'ليش ما فيك ترجع على سوريا؟', en: 'Why can’t you return to Syria?' },
          { fr: 'Qu’est-ce que vous craignez en cas de retour ?', ar: 'شو بتخاف يصير معك إذا رجعت؟', en: 'What are you afraid might happen if you return?' },
          { fr: 'Pouvez-vous m’expliquer ce qui vous est arrivé ?', ar: 'فيك تشرحلي شو صار معك؟', en: 'Can you explain what happened to you?' },
          { fr: 'Quand les problèmes ont-ils commencé ?', ar: 'إمتى بلشت المشاكل؟', en: 'When did the problems start?' },
          { fr: 'Où cela s’est-il passé ?', ar: 'وين صار هالشي؟', en: 'Where did this happen?' },
          { fr: 'Qui était impliqué ?', ar: 'مين كان متورط بالموضوع؟', en: 'Who was involved?' },
          { fr: 'Est-ce que vous avez été menacé ?', ar: 'حدا هددك؟', en: 'Were you threatened?' },
          { fr: 'Avez-vous subi des violences ?', ar: 'تعرضت لعنف؟', en: 'Did you suffer violence?' },
          { fr: 'Avez-vous reçu des menaces directement ?', ar: 'وصلتك تهديدات بشكل مباشر؟', en: 'Did you receive direct threats?' },
          { fr: 'Pourquoi n’avez-vous pas demandé la protection des autorités ?', ar: 'ليش ما طلبت حماية من السلطات ببلدك؟', en: 'Why didn’t you ask the authorities in your country for protection?' }
        ]
      },
      {
        icon: '🔎',
        title: { ar: 'إذا سألك عن تفاصيل حادثة معينة', en: 'If asked about a specific incident', fr: 'S’il vous interroge sur un incident précis' },
        phrases: [
          { fr: 'Pouvez-vous raconter ce qui s’est passé ce jour-là ?', ar: 'فيك تحكيلي شو صار بهداك اليوم؟', en: 'Can you tell me what happened that day?' },
          { fr: 'Qui était présent ?', ar: 'مين كان موجود؟', en: 'Who was present?' },
          { fr: 'À quel endroit cela s’est-il passé ?', ar: 'وين صار هالشي؟', en: 'Where did this happen?' },
          { fr: 'Que s’est-il passé ensuite ?', ar: 'وشو صار بعدين؟', en: 'What happened afterwards?' },
          { fr: 'Comment avez-vous réagi ?', ar: 'كيف كان رد فعلك؟', en: 'How did you react?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'إذا لم تفهم المترجم أو السؤال', en: 'If you don’t understand the interpreter or the question', fr: 'Si vous ne comprenez pas l’interprète ou la question' },
        phrases: [
          { fr: 'Je n’ai pas bien compris la question.', ar: 'ما فهمت السؤال منيح.', en: 'I didn’t understand the question well.' },
          { fr: 'Pouvez-vous répéter, s’il vous plaît ?', ar: 'فيك تعيد لو سمحت؟', en: 'Could you repeat, please?' },
          { fr: 'Pouvez-vous parler plus lentement, s’il vous plaît ?', ar: 'فيك تحكي أبطأ شوي لو سمحت؟', en: 'Could you speak more slowly, please?' },
          { fr: 'Je pense qu’il y a une erreur dans la traduction.', ar: 'بعتقد في غلط بالترجمة.', en: 'I think there is a mistake in the translation.' },
          { fr: 'Ce n’est pas exactement ce que j’ai dit.', ar: 'هاد مو بالضبط اللي قلتو.', en: 'That is not exactly what I said.' },
          { fr: 'Je voudrais corriger ce que je viens de dire.', ar: 'بدي صحح الشي اللي قلته هلأ.', en: 'I would like to correct what I just said.' }
        ]
      },
      {
        icon: '🤔',
        title: { ar: 'إذا لم تتذكر', en: 'If you don’t remember', fr: 'Si vous ne vous souvenez pas' },
        phrases: [
          { fr: 'Je ne me souviens pas exactement.', ar: 'ما بتذكر بالضبط.', en: 'I don’t remember exactly.' },
          { fr: 'Je ne connais pas la date exacte.', ar: 'ما بعرف التاريخ بالضبط.', en: 'I don’t know the exact date.' },
          { fr: 'Je peux vous donner une approximation, mais je ne suis pas sûr.', ar: 'فيني أعطيك تقريباً، بس مو متأكد.', en: 'I can give you an approximate date, but I’m not sure.' }
        ]
      },
      {
        icon: '🏁',
        title: { ar: 'في نهاية المقابلة', en: 'At the end of the interview', fr: 'À la fin de l’entretien' },
        phrases: [
          { fr: 'Est-ce que vous avez quelque chose à ajouter ?', ar: 'في شي تاني بدك تضيفه؟', en: 'Is there anything else you would like to add?' },
          { fr: 'Oui, je voudrais ajouter quelque chose d’important.', ar: 'إي، بدي أضيف شغلة مهمة.', en: 'Yes, I would like to add something important.' },
          { fr: 'Non, je pense que j’ai tout expliqué.', ar: 'لا، بعتقد شرحت كل شي.', en: 'No, I think I have explained everything.' },
          { fr: 'Est-ce que vous avez bien compris mes réponses ?', ar: 'فهمت أجوبتي منيح؟', en: 'Did you understand my answers correctly?' },
          { fr: 'Merci pour votre temps.', ar: 'شكراً لوقتكم.', en: 'Thank you for your time.' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'الهوية — سؤال وجواب', en: 'Identity — Q&A', fr: 'Identité — questions-réponses' },
        phrases: [
          { fr: 'Comment vous appelez-vous ?', ar: 'شو اسمك؟', en: 'What is your name?' },
          { fr: 'Je m’appelle Mohammad Haj Mohammad.', ar: 'اسمي محمد حاج محمد.', en: 'My name is Mohammad Haj Mohammad.' },
          { fr: 'Quelle est votre date de naissance ?', ar: 'شو تاريخ ميلادك؟', en: 'What is your date of birth?' },
          { fr: 'Je suis né le [date].', ar: 'أنا مولود بـ [التاريخ].', en: 'I was born on [date].' },
          { fr: 'Où êtes-vous né ?', ar: 'وين مولود؟', en: 'Where were you born?' },
          { fr: 'Je suis né à Hama, en Syrie.', ar: 'أنا مولود بحماة، بسوريا.', en: 'I was born in Hama, Syria.' },
          { fr: 'Quelle est votre nationalité ?', ar: 'شو جنسيتك؟', en: 'What is your nationality?' },
          { fr: 'Je suis de nationalité syrienne.', ar: 'أنا سوري الجنسية.', en: 'I am Syrian.' }
        ]
      },
      {
        icon: '👨‍👩‍👧',
        title: { ar: 'العائلة', en: 'Family', fr: 'La famille' },
        phrases: [
          { fr: 'Êtes-vous marié ?', ar: 'إنت متزوج؟', en: 'Are you married?' },
          { fr: 'Oui, je suis marié.', ar: 'إي، أنا متزوج.', en: 'Yes, I am married.' },
          { fr: 'Non, je ne suis pas marié.', ar: 'لا، أنا مو متزوج.', en: 'No, I’m not married.' },
          { fr: 'Avez-vous des enfants ?', ar: 'عندك أولاد؟', en: 'Do you have children?' },
          { fr: 'Oui, j’ai [nombre] enfant(s).', ar: 'إي، عندي [العدد] أولاد.', en: 'Yes, I have [number] children.' },
          { fr: 'Non, je n’ai pas d’enfants.', ar: 'لا، ما عندي أولاد.', en: 'No, I don’t have children.' },
          { fr: 'Où se trouve votre famille actuellement ?', ar: 'وين عيلتك هلق؟', en: 'Where is your family currently?' },
          { fr: 'Ma famille se trouve en Syrie.', ar: 'عيلتي موجودة بسوريا.', en: 'My family is in Syria.' }
        ]
      },
      {
        icon: '🎓',
        title: { ar: 'الدراسة والعمل', en: 'Studies and work', fr: 'Études et travail' },
        phrases: [
          { fr: 'Quel est votre niveau d’études ?', ar: 'لشو وصلت بالدراسة؟', en: 'What is your level of education?' },
          { fr: 'J’ai étudié à l’université pendant quatre ans.', ar: 'درست بالجامعة أربع سنين.', en: 'I studied at university for four years.' },
          { fr: 'Qu’est-ce que vous faisiez en Syrie ?', ar: 'شو كنت تعمل بسوريا؟', en: 'What did you do in Syria?' },
          { fr: 'J’étais étudiant / Je travaillais comme [métier].', ar: 'كنت طالب / كنت اشتغل كـ [المهنة].', en: 'I was a student / I worked as a [job].' },
          { fr: 'Est-ce que vous travailliez avant de quitter la Syrie ?', ar: 'كنت تشتغل قبل ما تطلع من سوريا؟', en: 'Were you working before leaving Syria?' },
          { fr: 'Oui, je travaillais comme [métier].', ar: 'إي، كنت اشتغل كـ [المهنة].', en: 'Yes, I worked as a [job].' }
        ]
      },
      {
        icon: '🚪',
        title: { ar: 'مغادرة سوريا', en: 'Leaving Syria', fr: 'Le départ de la Syrie' },
        phrases: [
          { fr: 'Quand avez-vous quitté la Syrie ?', ar: 'إمتى تركت سوريا؟', en: 'When did you leave Syria?' },
          { fr: 'J’ai quitté la Syrie en [année].', ar: 'تركت سوريا بسنة [السنة].', en: 'I left Syria in [year].' },
          { fr: 'Pourquoi avez-vous quitté la Syrie ?', ar: 'ليش تركت سوريا؟', en: 'Why did you leave Syria?' },
          { fr: 'J’ai quitté la Syrie parce que ma situation était devenue difficile et je ne me sentais plus en sécurité.', ar: 'تركت سوريا لأن وضعي صار صعب وما عدت حس حالي بأمان.', en: 'I left Syria because my situation had become difficult and I no longer felt safe.' }
        ]
      },
      {
        icon: '😨',
        title: { ar: 'الخوف من العودة', en: 'Fear of returning', fr: 'La crainte du retour' },
        phrases: [
          { fr: 'Pourquoi ne pouvez-vous pas retourner en Syrie ?', ar: 'ليش ما فيك ترجع على سوريا؟', en: 'Why can’t you return to Syria?' },
          { fr: 'Je crains pour ma sécurité si je retourne en Syrie.', ar: 'بخاف على سلامتي إذا رجعت على سوريا.', en: 'I fear for my safety if I return to Syria.' },
          { fr: 'Qu’est-ce que vous craignez exactement ?', ar: 'شو بالضبط اللي بتخاف منو؟', en: 'What exactly are you afraid of?' },
          { fr: 'Je crains [expliquer votre situation réelle].', ar: 'بخاف من [اشرح وضعك الحقيقي].', en: 'I fear [explain your real situation].' },
          { fr: 'Est-ce que vous avez été menacé ?', ar: 'حدا هددك؟', en: 'Were you threatened?' },
          { fr: 'Oui, j’ai reçu des menaces.', ar: 'إي، وصلتني تهديدات.', en: 'Yes, I received threats.' },
          { fr: 'Non, je n’ai pas reçu de menaces directes.', ar: 'لا، ما وصلتني تهديدات مباشرة.', en: 'No, I did not receive direct threats.' }
        ]
      },
      {
        icon: '🔎',
        title: { ar: 'تفاصيل الحادثة', en: 'Details of the incident', fr: 'Les détails de l’incident' },
        phrases: [
          { fr: 'Pouvez-vous me raconter ce qui s’est passé ?', ar: 'فيك تحكيلي شو صار؟', en: 'Can you tell me what happened?' },
          { fr: 'Oui. Je vais vous expliquer ce qui s’est passé.', ar: 'إي، رح اشرحلك شو صار.', en: 'Yes. I’ll explain what happened.' },
          { fr: 'Quand cela s’est-il passé ?', ar: 'إمتى صار هالشي؟', en: 'When did this happen?' },
          { fr: 'Cela s’est passé en [mois/année].', ar: 'صار هالشي بـ [الشهر/السنة].', en: 'It happened in [month/year].' },
          { fr: 'Où cela s’est-il passé ?', ar: 'وين صار هالشي؟', en: 'Where did this happen?' },
          { fr: 'Cela s’est passé à [lieu].', ar: 'صار هالشي بـ [المكان].', en: 'It happened in [place].' },
          { fr: 'Qui était présent ?', ar: 'مين كان موجود؟', en: 'Who was present?' },
          { fr: 'Il y avait [personnes].', ar: 'كان في [الأشخاص].', en: 'There were [people].' },
          { fr: 'Que s’est-il passé ensuite ?', ar: 'وشو صار بعدين؟', en: 'What happened afterwards?' },
          { fr: 'Ensuite, je suis parti / je suis rentré chez moi / j’ai demandé de l’aide.', ar: 'بعدين رحت / رجعت عالبيت / طلبت مساعدة.', en: 'Afterwards, I left / went home / asked for help.' }
        ]
      },
      {
        icon: '🚓',
        title: { ar: 'إذا سألك عن الشرطة أو السلطات', en: 'If asked about the police or authorities', fr: 'S’il vous interroge sur la police ou les autorités' },
        phrases: [
          { fr: 'Avez-vous signalé les faits à la police ?', ar: 'خبرت الشرطة باللي صار؟', en: 'Did you report what happened to the police?' },
          { fr: 'Oui, j’ai signalé les faits à la police.', ar: 'إي، خبرت الشرطة باللي صار.', en: 'Yes, I reported what happened to the police.' },
          { fr: 'Non, je n’ai pas signalé les faits à la police.', ar: 'لا، ما خبرت الشرطة.', en: 'No, I did not report what happened to the police.' },
          { fr: 'Pourquoi n’avez-vous pas demandé la protection des autorités ?', ar: 'ليش ما طلبت حماية من السلطات؟', en: 'Why didn’t you ask the authorities for protection?' },
          { fr: 'Je ne pensais pas pouvoir obtenir une protection suffisante.', ar: 'ما كنت مفكر إني رح أقدر أحصل على حماية كافية.', en: 'I did not think I could obtain sufficient protection.' }
        ]
      },
      {
        icon: '✈️',
        title: { ar: 'طريق السفر إلى فرنسا', en: 'Your journey to France', fr: 'Le voyage jusqu’en France' },
        phrases: [
          { fr: 'Comment êtes-vous arrivé en France ?', ar: 'كيف وصلت على فرنسا؟', en: 'How did you arrive in France?' },
          { fr: 'Je suis arrivé en France après être passé par [pays].', ar: 'وصلت على فرنسا بعد ما مريت عبر [الدولة].', en: 'I arrived in France after passing through [country].' },
          { fr: 'Quels pays avez-vous traversés ?', ar: 'شو الدول اللي مريت فيها؟', en: 'Which countries did you pass through?' },
          { fr: 'Je suis passé par [pays], puis je suis arrivé en France.', ar: 'مريت عبر [الدولة] وبعدين وصلت على فرنسا.', en: 'I passed through [country], then I arrived in France.' },
          { fr: 'Avez-vous demandé l’asile dans un autre pays ?', ar: 'قدمت لجوء بدولة تانية؟', en: 'Did you apply for asylum in another country?' },
          { fr: 'Non, je n’ai pas demandé l’asile dans un autre pays.', ar: 'لا، ما قدمت لجوء بدولة تانية.', en: 'No, I did not apply for asylum in another country.' }
        ]
      },
      {
        icon: '🖐️',
        title: { ar: 'البصمات', en: 'Fingerprints', fr: 'Les empreintes' },
        phrases: [
          { fr: 'Avez-vous déjà donné vos empreintes digitales dans un autre pays européen ?', ar: 'أخدوا بصماتك قبل بدولة أوروبية تانية؟', en: 'Have your fingerprints already been taken in another European country?' },
          { fr: 'Oui, mes empreintes ont été prises en [pays].', ar: 'إي، أخدوا بصماتي بـ [الدولة].', en: 'Yes, my fingerprints were taken in [country].' },
          { fr: 'Non, mes empreintes n’ont pas été prises dans un autre pays européen.', ar: 'لا، ما أخدوا بصماتي بدولة أوروبية تانية.', en: 'No, my fingerprints were not taken in another European country.' }
        ]
      },
      {
        icon: '🇫🇷',
        title: { ar: 'فرنسا', en: 'France', fr: 'La France' },
        phrases: [
          { fr: 'Pourquoi êtes-vous venu en France ?', ar: 'ليش جيت على فرنسا؟', en: 'Why did you come to France?' },
          { fr: 'Je suis venu en France pour demander la protection et déposer ma demande d’asile.', ar: 'جيت على فرنسا مشان أطلب الحماية وقدّم طلب اللجوء.', en: 'I came to France to seek protection and apply for asylum.' },
          { fr: 'Depuis quand êtes-vous en France ?', ar: 'من إمتى إنت بفرنسا؟', en: 'How long have you been in France?' },
          { fr: 'Je suis en France depuis [date/période].', ar: 'أنا بفرنسا من [التاريخ/الفترة].', en: 'I have been in France since [date/period].' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'السكن', en: 'Housing', fr: 'Le logement' },
        phrases: [
          { fr: 'Où habitez-vous actuellement ?', ar: 'وين ساكن هلق؟', en: 'Where do you currently live?' },
          { fr: 'Je suis hébergé chez quelqu’un.', ar: 'أنا مستضاف عند حدا.', en: 'I’m staying with someone.' },
          { fr: 'Je n’ai pas de logement stable.', ar: 'ما عندي سكن ثابت.', en: 'I don’t have stable accommodation.' },
          { fr: 'Avez-vous une adresse où recevoir votre courrier ?', ar: 'عندك عنوان تستلم عليه بريدك؟', en: 'Do you have an address where you can receive your mail?' },
          { fr: 'Oui, je suis domicilié à la Croix-Rouge.', ar: 'إي، عندي دوميسيلياسيون عند الصليب الأحمر.', en: 'Yes, I have a mailing address with the Red Cross.' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'المترجم', en: 'The interpreter', fr: 'L’interprète' },
        phrases: [
          { fr: 'Vous comprenez bien l’interprète ?', ar: 'عم تفهم المترجم منيح؟', en: 'Do you understand the interpreter well?' },
          { fr: 'Oui, je comprends bien.', ar: 'إي، عم أفهم منيح.', en: 'Yes, I understand well.' },
          { fr: 'Avez-vous besoin que je répète la question ?', ar: 'بدك إني أعيد السؤال؟', en: 'Do you need me to repeat the question?' },
          { fr: 'Oui, s’il vous plaît.', ar: 'إي، لو سمحت.', en: 'Yes, please.' },
          { fr: 'Vous avez compris la traduction ?', ar: 'فهمت الترجمة؟', en: 'Did you understand the translation?' },
          { fr: 'Je n’ai pas bien compris. Pouvez-vous répéter ?', ar: 'ما فهمت منيح، فيك تعيد؟', en: 'I didn’t understand well. Could you repeat?' }
        ]
      },
      {
        icon: '🤔',
        title: { ar: 'إذا لم تتذكر', en: 'If you don’t remember', fr: 'Si vous ne vous souvenez pas' },
        phrases: [
          { fr: 'Vous vous souvenez de la date exacte ?', ar: 'بتتذكر التاريخ بالضبط؟', en: 'Do you remember the exact date?' },
          { fr: 'Je ne me souviens pas exactement de la date.', ar: 'ما بتذكر التاريخ بالضبط.', en: 'I don’t remember the exact date.' },
          { fr: 'Vous êtes sûr de cette information ?', ar: 'متأكد من هالمعلومة؟', en: 'Are you sure about this information?' },
          { fr: 'Je ne suis pas complètement sûr, mais c’est approximativement à cette période.', ar: 'مو متأكد مية بالمية، بس تقريباً بهالفترة.', en: 'I’m not completely sure, but it was approximately around that time.' }
        ]
      },
      {
        icon: '🏁',
        title: { ar: 'في نهاية المقابلة', en: 'At the end of the interview', fr: 'À la fin de l’entretien' },
        phrases: [
          { fr: 'Avez-vous quelque chose à ajouter ?', ar: 'عندك شي تاني بدك تضيفه؟', en: 'Is there anything else you would like to add?' },
          { fr: 'Oui, je voudrais ajouter quelque chose d’important.', ar: 'إي، بدي أضيف شغلة مهمة.', en: 'Yes, I would like to add something important.' },
          { fr: 'Non, je pense que j’ai expliqué tout ce qui était important.', ar: 'لا، بعتقد شرحت كل الأشياء المهمة.', en: 'No, I think I have explained everything important.' },
          { fr: 'Avez-vous bien compris toutes les questions ?', ar: 'فهمت كل الأسئلة منيح؟', en: 'Did you understand all the questions?' },
          { fr: 'Oui, j’ai bien compris.', ar: 'إي، فهمت منيح.', en: 'Yes, I understood well.' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'المعلومات الشخصية — مثال كامل', en: 'Personal information — full example', fr: 'Informations personnelles — exemple complet' },
        phrases: [
          { fr: 'Comment vous appelez-vous ?', ar: 'شو اسمك؟', en: 'What is your name?' },
          { fr: 'Je m’appelle Mohammad Haj.', ar: 'اسمي محمد حاج.', en: 'My name is Mohammad Haj.' },
          { fr: 'Quelle est votre date de naissance ?', ar: 'شو تاريخ ميلادك؟', en: 'What is your date of birth?' },
          { fr: 'Je suis né le 15 juillet 1989.', ar: 'أنا مولود بـ 15 تموز 1989.', en: 'I was born on July 15, 1989.' },
          { fr: 'Où êtes-vous né ?', ar: 'وين مولود؟', en: 'Where were you born?' },
          { fr: 'Je suis né à Hama, en Syrie.', ar: 'أنا مولود بحماة، بسوريا.', en: 'I was born in Hama, Syria.' },
          { fr: 'Quelle est votre nationalité ?', ar: 'شو جنسيتك؟', en: 'What is your nationality?' },
          { fr: 'Je suis Syrien.', ar: 'أنا سوري.', en: 'I am Syrian.' },
          { fr: 'Quelle est votre situation familiale ?', ar: 'شو وضعك العائلي؟', en: 'What is your family situation?' },
          { fr: 'Je suis célibataire.', ar: 'أنا عازب.', en: 'I am single.' },
          { fr: 'Avez-vous des enfants ?', ar: 'عندك أولاد؟', en: 'Do you have children?' },
          { fr: 'Non, je n’ai pas d’enfants.', ar: 'لا، ما عندي أولاد.', en: 'No, I don’t have children.' }
        ]
      },
      {
        icon: '🎓',
        title: { ar: 'الدراسة والعمل — مثال كامل', en: 'Studies and work — full example', fr: 'Études et travail — exemple complet' },
        phrases: [
          { fr: 'Quel est votre niveau d’études ?', ar: 'لشو وصلت بالدراسة؟', en: 'What is your level of education?' },
          { fr: 'J’ai étudié la littérature anglaise en Syrie et j’ai obtenu mon diplôme.', ar: 'درست الأدب الإنكليزي بسوريا وتخرجت.', en: 'I studied English literature in Syria and graduated.' },
          { fr: 'Quel était votre métier en Syrie ?', ar: 'شو كانت مهنتك بسوريا؟', en: 'What was your occupation in Syria?' },
          { fr: 'J’étais professeur d’anglais en Syrie.', ar: 'كنت مدرس لغة إنكليزية بسوريا.', en: 'I was an English teacher in Syria.' }
        ]
      },
      {
        icon: '🚪',
        title: { ar: 'مغادرة سوريا — الخدمة العسكرية', en: 'Leaving Syria — military service', fr: 'Le départ de la Syrie — service militaire' },
        phrases: [
          { fr: 'Quand avez-vous quitté la Syrie ?', ar: 'إمتى تركت سوريا؟', en: 'When did you leave Syria?' },
          { fr: 'J’ai quitté la Syrie en 2017.', ar: 'تركت سوريا سنة 2017.', en: 'I left Syria in 2017.' },
          { fr: 'Pourquoi avez-vous quitté la Syrie ?', ar: 'ليش تركت سوريا؟', en: 'Why did you leave Syria?' },
          { fr: 'J’ai quitté la Syrie parce que je voulais éviter le service militaire.', ar: 'تركت سوريا لأني كنت بدي أتجنب الخدمة العسكرية.', en: 'I left Syria because I wanted to avoid military service.' },
          { fr: 'Avez-vous reçu une convocation pour le service militaire ?', ar: 'وصلك استدعاء للخدمة العسكرية؟', en: 'Did you receive a summons for military service?' },
          { fr: 'Oui, j’ai reçu une convocation pour le service militaire.', ar: 'إي، وصلني استدعاء للخدمة العسكرية.', en: 'Yes, I received a summons for military service.' },
          { fr: 'Quand avez-vous reçu cette convocation ?', ar: 'إمتى وصلك هالاستدعاء؟', en: 'When did you receive this summons?' },
          { fr: 'J’ai reçu la convocation un mois avant de quitter la Syrie.', ar: 'وصلني الاستدعاء قبل شهر من ما تركت سوريا.', en: 'I received the summons one month before leaving Syria.' },
          { fr: 'Pourquoi ne vouliez-vous pas faire votre service militaire ?', ar: 'ليش ما كنت بدك تعمل الخدمة العسكرية؟', en: 'Why didn’t you want to do your military service?' },
          { fr: 'Je ne voulais pas faire mon service militaire parce que je n’aime pas la guerre.', ar: 'ما كنت بدي أعمل الخدمة العسكرية لأني ما بحب الحروب.', en: 'I didn’t want to do my military service because I don’t like wars.' }
        ]
      },
      {
        icon: '❓',
        title: { ar: 'أسئلة متابعة محتملة', en: 'Possible follow-up questions', fr: 'Questions de suivi possibles' },
        phrases: [
          { fr: 'Que s’est-il passé après avoir reçu la convocation ?', ar: 'شو صار بعد ما وصلك الاستدعاء؟', en: 'What happened after you received the summons?' },
          { fr: 'Après avoir reçu la convocation, j’ai décidé de quitter la Syrie.', ar: 'بعد ما وصلني الاستدعاء، قررت أترك سوريا.', en: 'After receiving the summons, I decided to leave Syria.' },
          { fr: 'Pourquoi êtes-vous parti précisément à ce moment-là ?', ar: 'ليش طلعت بهداك الوقت تحديداً؟', en: 'Why did you leave at that particular time?' },
          { fr: 'Je suis parti à ce moment-là parce que j’avais reçu la convocation militaire.', ar: 'طلعت بهداك الوقت لأني كنت استلمت استدعاء للخدمة العسكرية.', en: 'I left at that time because I had received a military summons.' },
          { fr: 'Aviez-vous déjà effectué votre service militaire ?', ar: 'كنت عامل الخدمة العسكرية من قبل؟', en: 'Had you already completed your military service?' },
          { fr: 'Non, je n’avais pas encore effectué mon service militaire.', ar: 'لا، ما كنت عامل الخدمة العسكرية من قبل.', en: 'No, I had not yet completed my military service.' }
        ]
      },
      {
        icon: '🔁',
        title: { ar: 'العودة إلى سوريا — الخوف من العودة', en: 'Returning to Syria — fear of return', fr: 'Le retour en Syrie — la crainte du retour' },
        phrases: [
          { fr: 'Pourquoi ne pouvez-vous pas retourner en Syrie ?', ar: 'ليش ما فيك ترجع على سوريا؟', en: 'Why can’t you return to Syria?' },
          { fr: 'Je crains de retourner en Syrie à cause de ma situation liée au service militaire.', ar: 'بخاف أرجع على سوريا بسبب وضعي المتعلق بالخدمة العسكرية.', en: 'I am afraid to return to Syria because of my situation related to military service.' },
          { fr: 'Que craignez-vous en cas de retour en Syrie ?', ar: 'شو بتخاف يصير إذا رجعت على سوريا؟', en: 'What do you fear if you return to Syria?' },
          { fr: 'Je crains d’avoir des problèmes à cause de mon refus de faire le service militaire.', ar: 'بخاف تصير معي مشاكل بسبب رفضي للخدمة العسكرية.', en: 'I fear having problems because I refused to do military service.' }
        ]
      },
      {
        icon: '🪖',
        title: { ar: 'الخدمة العسكرية — أسئلة وأجوبة مفصلة', en: 'Military service — detailed Q&A', fr: 'Le service militaire — questions-réponses détaillées' },
        phrases: [
          { fr: 'Avez-vous effectué votre service militaire en Syrie ?', ar: 'هل أديت الخدمة العسكرية بسوريا؟', en: 'Did you complete your military service in Syria?' },
          { fr: 'Non, je n’ai pas effectué mon service militaire en Syrie.', ar: 'لا، أنا ما أديت الخدمة العسكرية بسوريا.', en: 'No, I did not complete my military service in Syria.' },
          { fr: 'Avez-vous reçu une convocation pour le service militaire ?', ar: 'هل وصلتك دعوة للخدمة العسكرية؟', en: 'Did you receive a summons for military service?' },
          { fr: 'Oui, j’ai reçu une convocation pour le service militaire.', ar: 'إي، وصلتني دعوة للخدمة العسكرية.', en: 'Yes, I received a summons for military service.' },
          { fr: 'Quand avez-vous reçu cette convocation ?', ar: 'إيمت وصلتك هالدعوة؟', en: 'When did you receive this summons?' },
          { fr: 'J’ai reçu la convocation environ un mois avant de quitter la Syrie.', ar: 'وصلتني الدعوة تقريبًا قبل ما أترك سوريا بشهر.', en: 'I received the summons about one month before leaving Syria.' },
          { fr: 'Pourquoi ne vouliez-vous pas faire votre service militaire ?', ar: 'ليش ما كنت بدك تعمل الخدمة العسكرية؟', en: 'Why did you not want to do your military service?' },
          { fr: 'Je ne voulais pas faire mon service militaire parce que je n’aime pas la guerre.', ar: 'ما كنت بدي أعمل الخدمة العسكرية لأني ما بحب الحرب.', en: 'I did not want to do my military service because I do not like war.' },
          { fr: 'Que s’est-il passé après avoir reçu la convocation ?', ar: 'شو صار بعد ما وصلتلك الدعوة؟', en: 'What happened after you received the summons?' },
          { fr: 'Après avoir reçu la convocation, j’ai décidé de quitter la Syrie parce que je voulais éviter le service militaire.', ar: 'بعد ما وصلتني الدعوة، قررت أترك سوريا لأني كنت بدي أتجنب الخدمة العسكرية.', en: 'After receiving the summons, I decided to leave Syria because I wanted to avoid military service.' },
          { fr: 'Pourquoi avez-vous quitté la Syrie à ce moment-là ?', ar: 'ليش تركت سوريا بهداك الوقت؟', en: 'Why did you leave Syria at that time?' },
          { fr: 'J’ai quitté la Syrie à ce moment-là parce que j’avais reçu une convocation pour le service militaire.', ar: 'تركت سوريا بهداك الوقت لأنه وصلتني دعوة للخدمة العسكرية.', en: 'I left Syria at that time because I had received a summons for military service.' },
          { fr: 'Est-ce que la convocation a été une raison de votre départ ?', ar: 'هل كانت الدعوة سبب بخروجك؟', en: 'Was the summons a reason for your departure?' },
          { fr: 'Oui, la convocation pour le service militaire a été une raison importante de mon départ de Syrie.', ar: 'إي، دعوة الخدمة العسكرية كانت سبب مهم بخروجي من سوريا.', en: 'Yes, the military service summons was an important reason for my departure from Syria.' },
          { fr: 'Aviez-vous peur de faire votre service militaire ?', ar: 'كنت خايف من أداء الخدمة العسكرية؟', en: 'Were you afraid of doing your military service?' },
          { fr: 'Oui, j’avais peur de devoir participer à la guerre et aux combats.', ar: 'إي، كنت خايف إني اضطر شارك بالحرب والقتال.', en: 'Yes, I was afraid that I would have to participate in the war and fighting.' },
          { fr: 'Pourquoi ne vouliez-vous pas participer aux combats ?', ar: 'ليش ما كنت بدك تشارك بالقتال؟', en: 'Why did you not want to participate in fighting?' },
          { fr: 'Je ne voulais pas participer aux combats parce que je n’aime pas la guerre et que je ne voulais pas combattre.', ar: 'ما كنت بدي شارك بالقتال لأني ما بحب الحرب وما كنت بدي قاتل.', en: 'I did not want to participate in fighting because I do not like war and I did not want to fight.' },
          { fr: 'Avez-vous refusé officiellement de faire votre service militaire ?', ar: 'هل رفضت رسميًا أداء الخدمة العسكرية؟', en: 'Did you officially refuse to do your military service?' },
          { fr: 'Je n’ai pas fait de déclaration officielle de refus. J’ai quitté la Syrie parce que je voulais éviter le service militaire.', ar: 'أنا ما قدمت رفض رسمي. تركت سوريا لأني كنت بدي أتجنب الخدمة العسكرية.', en: 'I did not make an official declaration of refusal. I left Syria because I wanted to avoid military service.' },
          { fr: 'Pourquoi n’avez-vous pas fait votre service militaire ?', ar: 'ليش ما أديت الخدمة العسكرية؟', en: 'Why did you not do your military service?' },
          { fr: 'Je n’ai pas fait mon service militaire parce que je voulais éviter de participer à la guerre et aux combats.', ar: 'ما أديت الخدمة العسكرية لأني كنت بدي أتجنب المشاركة بالحرب والقتال.', en: 'I did not do my military service because I wanted to avoid participating in war and fighting.' },
          { fr: 'Qu’avez-vous fait après avoir reçu la convocation ?', ar: 'شو عملت بعد ما استلمت الدعوة؟', en: 'What did you do after receiving the summons?' },
          { fr: 'Après avoir reçu la convocation, j’ai décidé de quitter la Syrie.', ar: 'بعد ما استلمت الدعوة، قررت أترك سوريا.', en: 'After receiving the summons, I decided to leave Syria.' },
          { fr: 'Combien de temps après la convocation avez-vous quitté la Syrie ?', ar: 'بعد قديش من استلام الدعوة تركت سوريا؟', en: 'How long after receiving the summons did you leave Syria?' },
          { fr: 'J’ai quitté la Syrie environ un mois après avoir reçu la convocation.', ar: 'تركت سوريا تقريبًا بعد شهر من استلام الدعوة.', en: 'I left Syria about one month after receiving the summons.' },
          { fr: 'Pourquoi avez-vous décidé de partir ?', ar: 'ليش قررت تترك؟', en: 'Why did you decide to leave?' },
          { fr: 'J’ai décidé de partir parce que je voulais éviter le service militaire et que je ne voulais pas participer à la guerre.', ar: 'قررت أترك لأني كنت بدي أتجنب الخدمة العسكرية وما كنت بدي شارك بالحرب.', en: 'I decided to leave because I wanted to avoid military service and I did not want to participate in the war.' },
          { fr: 'Êtes-vous parti à cause de cette convocation ?', ar: 'هل تركت بسبب هالدعوة؟', en: 'Did you leave because of this summons?' },
          { fr: 'Oui, cette convocation a joué un rôle important dans ma décision de quitter la Syrie.', ar: 'إي، هالدعوة كان إلها دور مهم بقراري إني أترك سوريا.', en: 'Yes, this summons played an important role in my decision to leave Syria.' },
          { fr: 'Que craignez-vous si vous retournez en Syrie ?', ar: 'شو بتخاف يصير معك إذا رجعت على سوريا؟', en: 'What do you fear if you return to Syria?' },
          { fr: 'Je crains d’avoir des problèmes en raison de ma situation concernant le service militaire.', ar: 'بخاف يصير معي مشاكل بسبب وضعي المتعلق بالخدمة العسكرية.', en: 'I fear having problems because of my situation concerning military service.' },
          { fr: 'Pourquoi ne pouvez-vous pas retourner en Syrie ?', ar: 'ليش ما فيك ترجع على سوريا؟', en: 'Why can’t you return to Syria?' },
          { fr: 'Je crains les conséquences de ma situation concernant le service militaire après avoir quitté la Syrie.', ar: 'بخاف من عواقب وضعي المتعلق بالخدمة العسكرية بعد ما تركت سوريا.', en: 'I fear the consequences of my situation concerning military service after leaving Syria.' },
          { fr: 'Étiez-vous déjà militaire avant de recevoir la convocation ?', ar: 'هل كنت عسكري من قبل ما توصلك الدعوة؟', en: 'Were you already a soldier before receiving the summons?' },
          { fr: 'Non, je n’avais pas encore effectué mon service militaire.', ar: 'لا، ما كنت لسا أديت الخدمة العسكرية.', en: 'No, I had not yet completed my military service.' },
          { fr: 'Avez-vous été recherché après votre départ de Syrie ?', ar: 'هل تم البحث عنك بعد ما تركت سوريا؟', en: 'Were you searched for after leaving Syria?' },
          { fr: 'Avez-vous reçu une deuxième convocation ?', ar: 'هل وصلتك دعوة ثانية؟', en: 'Did you receive a second summons?' },
          { fr: 'Non, je n’ai pas reçu de deuxième convocation.', ar: 'لا، ما وصلتني دعوة ثانية.', en: 'No, I did not receive a second summons.' },
          { fr: 'Avez-vous essayé d’obtenir une exemption du service militaire ?', ar: 'هل حاولت تحصل على إعفاء من الخدمة العسكرية؟', en: 'Did you try to obtain an exemption from military service?' },
          { fr: 'Êtes-vous allé à l’endroit indiqué sur la convocation ?', ar: 'هل رحت عالمكان المكتوب بالدعوة؟', en: 'Did you go to the place indicated on the summons?' },
          { fr: 'Où avez-vous reçu la convocation ?', ar: 'وين استلمت الدعوة؟', en: 'Where did you receive the summons?' },
          { fr: 'Qui vous a remis la convocation ?', ar: 'مين سلّمك الدعوة؟', en: 'Who gave you the summons?' },
          { fr: 'Quelle était la date indiquée sur la convocation ?', ar: 'شو كان التاريخ المكتوب على الدعوة؟', en: 'What date was written on the summons?' },
          { fr: 'Où deviez-vous vous présenter ?', ar: 'لوين كان لازم تروح؟', en: 'Where were you supposed to report?' },
          { fr: 'À quelle date deviez-vous vous présenter ?', ar: 'بأي تاريخ كان لازم تروح؟', en: 'On what date were you supposed to report?' },
          { fr: 'Qu’avez-vous fait lorsque vous avez compris que vous deviez faire votre service militaire ?', ar: 'شو عملت لما عرفت إنو لازم عليك تعمل الخدمة العسكرية؟', en: 'What did you do when you understood that you had to do your military service?' },
          { fr: 'J’ai décidé de quitter la Syrie parce que je voulais éviter le service militaire.', ar: 'قررت أترك سوريا لأني كنت بدي أتجنب الخدمة العسكرية.', en: 'I decided to leave Syria because I wanted to avoid military service.' },
          { fr: 'Pourquoi avez-vous attendu environ un mois avant de quitter la Syrie ?', ar: 'ليش نطرت تقريبًا شهر قبل ما تترك سوريا؟', en: 'Why did you wait about one month before leaving Syria?' },
          { fr: 'Après avoir reçu la convocation, j’ai préparé mon départ et j’ai quitté la Syrie environ un mois plus tard.', ar: 'بعد ما وصلتني الدعوة، حضرت لخروجي وتركت سوريا تقريبًا بعد شهر.', en: 'After receiving the summons, I prepared to leave and left Syria about one month later.' },
          { fr: 'Quelle était votre principale raison pour éviter le service militaire ?', ar: 'شو كان السبب الأساسي اللي خلاك تتجنب الخدمة العسكرية؟', en: 'What was your main reason for avoiding military service?' },
          { fr: 'Ma principale raison était que je n’aime pas la guerre et que je ne voulais pas participer aux combats.', ar: 'السبب الأساسي كان إني ما بحب الحرب وما كنت بدي شارك بالقتال.', en: 'My main reason was that I do not like war and I did not want to participate in fighting.' }
        ]
      },
      {
        icon: '✈️',
        title: { ar: 'طريق الخروج من سوريا — لبنان، البرازيل، غويانا', en: 'The journey out of Syria — Lebanon, Brazil, French Guiana', fr: 'Le parcours depuis la Syrie — Liban, Brésil, Guyane' },
        phrases: [
          { fr: 'Comment avez-vous quitté la Syrie ?', ar: 'كيف طلعت من سوريا؟', en: 'How did you leave Syria?' },
          { fr: 'Je suis parti de Syrie pour aller au Liban.', ar: 'طلعت من سوريا ورحت على لبنان.', en: 'I left Syria and went to Lebanon.' },
          { fr: 'Dans quel pays êtes-vous allé après avoir quitté la Syrie ?', ar: 'على أي بلد رحت بعد ما طلعت من سوريا؟', en: 'Which country did you go to after leaving Syria?' },
          { fr: 'Je suis allé au Liban.', ar: 'رحت على لبنان.', en: 'I went to Lebanon.' },
          { fr: 'Pourquoi êtes-vous allé au Liban ?', ar: 'ليش رحت على لبنان؟', en: 'Why did you go to Lebanon?' },
          { fr: 'Je suis allé au Liban après avoir quitté la Syrie.', ar: 'رحت على لبنان بعد ما طلعت من سوريا.', en: 'I went to Lebanon after leaving Syria.' },
          { fr: 'Comment avez-vous quitté le Liban ?', ar: 'كيف طلعت من لبنان؟', en: 'How did you leave Lebanon?' },
          { fr: 'J’ai obtenu un visa humanitaire pour le Brésil, puis je suis parti du Liban pour aller au Brésil.', ar: 'حصلت على فيزا إنسانية للبرازيل، وبعدها طلعت من لبنان ورحت على البرازيل.', en: 'I obtained a humanitarian visa for Brazil, and then I left Lebanon and went to Brazil.' },
          { fr: 'Quel type de visa avez-vous obtenu pour le Brésil ?', ar: 'شو نوع الفيزا اللي حصلت عليها للبرازيل؟', en: 'What type of visa did you obtain for Brazil?' },
          { fr: 'J’ai obtenu un visa humanitaire pour le Brésil.', ar: 'حصلت على فيزا إنسانية للبرازيل.', en: 'I obtained a humanitarian visa for Brazil.' },
          { fr: 'Êtes-vous allé au Brésil ?', ar: 'هل رحت على البرازيل؟', en: 'Did you go to Brazil?' },
          { fr: 'Oui, je suis allé au Brésil avec mon visa humanitaire.', ar: 'إي، رحت على البرازيل عن طريق الفيزا الإنسانية.', en: 'Yes, I went to Brazil with my humanitarian visa.' },
          { fr: 'Comment êtes-vous arrivé en Guyane française ?', ar: 'كيف وصلت لغويانا الفرنسية؟', en: 'How did you arrive in French Guiana?' },
          { fr: 'Je suis entré en Guyane française depuis le Brésil.', ar: 'دخلت غويانا الفرنسية من البرازيل.', en: 'I entered French Guiana from Brazil.' },
          { fr: 'Pourquoi êtes-vous allé en Guyane française ?', ar: 'ليش رحت على غويانا الفرنسية؟', en: 'Why did you go to French Guiana?' },
          { fr: 'Je suis allé en Guyane française et j’y ai demandé l’asile.', ar: 'رحت على غويانا الفرنسية وهناك طلبت اللجوء.', en: 'I went to French Guiana and requested asylum there.' },
          { fr: 'Avez-vous demandé l’asile en Guyane française ?', ar: 'هل طلبت اللجوء بغويانا الفرنسية؟', en: 'Did you apply for asylum in French Guiana?' },
          { fr: 'Oui, j’ai demandé l’asile en Guyane française.', ar: 'إي، طلبت اللجوء بغويانا الفرنسية.', en: 'Yes, I applied for asylum in French Guiana.' },
          { fr: 'Quel a été votre itinéraire depuis la Syrie ?', ar: 'شو كان طريق سفرك من سوريا؟', en: 'What was your route from Syria?' },
          { fr: 'Je suis parti de Syrie, puis je suis allé au Liban. Ensuite, j’ai obtenu un visa humanitaire pour le Brésil. Après être arrivé au Brésil, je suis entré en Guyane française et j’y ai demandé l’asile.', ar: 'طلعت من سوريا، وبعدها رحت على لبنان. بعدين حصلت على فيزا إنسانية للبرازيل. وبعد ما وصلت للبرازيل، دخلت غويانا الفرنسية وهناك طلبت اللجوء.', en: 'I left Syria and went to Lebanon. Then I obtained a humanitarian visa for Brazil. After arriving in Brazil, I entered French Guiana and applied for asylum there.' }
        ]
      },
      {
        icon: '❗',
        title: { ar: 'سؤال مهم جداً: اللجوء بالبرازيل', en: 'Very important question: asylum in Brazil', fr: 'Question très importante : l’asile au Brésil' },
        phrases: [
          { fr: 'Avez-vous demandé l’asile au Brésil ?', ar: 'هل طلبت اللجوء بالبرازيل؟', en: 'Did you apply for asylum in Brazil?' }
        ]
      }
    ]
  },
  {
    id: 'banque',
    icon: '🏦',
    name: { ar: 'البنك — فتح حساب', en: 'The bank — opening an account', fr: 'La banque — ouvrir un compte' },
    desc: {
      ar: 'فتح حساب بنكي كطالب لجوء: الوثائق، البطاقة، الرسوم، وماذا تفعل عند الرفض',
      en: 'Opening a bank account as an asylum seeker: documents, card, fees, and what to do if refused',
      fr: 'Ouvrir un compte bancaire en tant que demandeur d’asile : documents, carte, frais et que faire en cas de refus'
    },
    sections: [
      {
        icon: '🏦',
        title: { ar: 'عند الدخول إلى البنك', en: 'Entering the bank', fr: 'En entrant à la banque' },
        phrases: [
          { fr: 'Bonjour, je voudrais ouvrir un compte bancaire, s’il vous plaît.', ar: 'مرحبا، بدي افتح حساب بنكي لو سمحت.', en: 'Hello, I would like to open a bank account, please.' },
          { fr: 'Je suis demandeur d’asile en France et je suis domicilié à la Croix-Rouge.', ar: 'أنا طالب لجوء بفرنسا وعندي دوميسيلياسيون عند الصليب الأحمر.', en: 'I am an asylum seeker in France and I have a domiciliation address with the Red Cross.' },
          { fr: 'Je voudrais savoir si je peux ouvrir un compte chez vous.', ar: 'بدي أعرف إذا فيني افتح حساب عندكم.', en: 'I would like to know if I can open an account with you.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'عن الوثائق', en: 'About the documents', fr: 'À propos des documents' },
        phrases: [
          { fr: 'Quels documents dois-je fournir pour ouvrir le compte ?', ar: 'شو الأوراق اللي لازم قدمها لفتح الحساب؟', en: 'What documents do I need to provide to open the account?' },
          { fr: 'J’ai mon document d’identité avec moi.', ar: 'معي وثيقة هويتي.', en: 'I have my identity document with me.' },
          { fr: 'J’ai aussi mon attestation de domiciliation de la Croix-Rouge.', ar: 'معي كمان إثبات الدوميصيلياسيون من الصليب الأحمر.', en: 'I also have my Red Cross proof of domiciliation.' },
          { fr: 'Est-ce que cette attestation de domiciliation est acceptée comme justificatif de domicile ?', ar: 'هل هالإثبات من الصليب الأحمر مقبول كإثبات سكن؟', en: 'Is this Red Cross document accepted as proof of address?' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'إذا سألوك عن وضعك', en: 'If they ask about your status', fr: 'S’ils vous demandent votre statut' },
        phrases: [
          { fr: 'Quel est votre statut en France ?', ar: 'شو وضعك القانوني بفرنسا؟', en: 'What is your status in France?' },
          { fr: 'Je suis demandeur d’asile.', ar: 'أنا طالب لجوء.', en: 'I am an asylum seeker.' },
          { fr: 'Avez-vous un titre de séjour ?', ar: 'معك بطاقة إقامة؟', en: 'Do you have a residence permit?' },
          { fr: 'Je n’ai pas encore de titre de séjour. Je suis demandeur d’asile.', ar: 'لسا ما عندي بطاقة إقامة، أنا طالب لجوء.', en: 'I do not have a residence permit yet. I am an asylum seeker.' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'عن البطاقة', en: 'About the card', fr: 'À propos de la carte' },
        phrases: [
          { fr: 'Est-ce que je peux avoir une carte bancaire ?', ar: 'فيني آخد بطاقة بنكية؟', en: 'Can I get a bank card?' },
          { fr: 'Est-ce que je peux utiliser la carte pour retirer de l’argent ?', ar: 'فيني استخدم البطاقة لسحب المصاري؟', en: 'Can I use the card to withdraw money?' },
          { fr: 'Est-ce que je peux faire des virements avec ce compte ?', ar: 'فيني أعمل تحويلات من هالحساب؟', en: 'Can I make transfers with this account?' },
          { fr: 'Est-ce que je peux recevoir mon salaire sur ce compte ?', ar: 'فيني استلم راتبي على هالحساب؟', en: 'Can I receive my salary into this account?' }
        ]
      },
      {
        icon: '💰',
        title: { ar: 'عن الرسوم', en: 'About the fees', fr: 'À propos des frais' },
        phrases: [
          { fr: 'Quels sont les frais mensuels du compte ?', ar: 'قديش الرسوم الشهرية للحساب؟', en: 'What are the monthly account fees?' },
          { fr: 'Est-ce que la carte bancaire est payante ?', ar: 'هل البطاقة البنكية عليها رسوم؟', en: 'Is the bank card charged?' },
          { fr: 'Y a-t-il des frais pour les retraits ?', ar: 'في رسوم على سحب المصاري؟', en: 'Are there fees for withdrawals?' }
        ]
      },
      {
        icon: '❌',
        title: { ar: 'إذا رفضوا فتح الحساب', en: 'If they refuse to open the account', fr: 'S’ils refusent d’ouvrir le compte' },
        phrases: [
          { fr: 'Pourquoi vous ne pouvez pas ouvrir mon compte ?', ar: 'ليش ما فيكم تفتحوا حسابي؟', en: 'Why can’t you open my account?' },
          { fr: 'Est-ce que vous pouvez m’expliquer la raison, s’il vous plaît ?', ar: 'فيكم تشرحولي السبب لو سمحت؟', en: 'Could you explain the reason to me, please?' },
          { fr: 'Pouvez-vous me donner un document écrit avec la raison du refus ?', ar: 'فيكم تعطوني ورقة مكتوب فيها سبب الرفض؟', en: 'Could you give me a written document stating the reason for the refusal?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'إذا لم تفهم الموظف', en: 'If you don’t understand the employee', fr: 'Si vous ne comprenez pas l’employé' },
        phrases: [
          { fr: 'Excusez-moi, je ne parle pas très bien français. Pouvez-vous parler plus lentement, s’il vous plaît ?', ar: 'عذرًا، أنا ما بحكي فرنسي منيح. فيك تحكي أبطأ لو سمحت؟', en: 'Excuse me, I don’t speak French very well. Could you speak more slowly, please?' },
          { fr: 'Pouvez-vous répéter, s’il vous plaît ?', ar: 'فيك تعيد لو سمحت؟', en: 'Could you repeat, please?' },
          { fr: 'Pouvez-vous me l’écrire, s’il vous plaît ?', ar: 'فيك تكتبلي ياها لو سمحت؟', en: 'Could you write it down for me, please?' }
        ]
      },
      {
        icon: '📱',
        title: { ar: 'في نهاية فتح الحساب', en: 'After opening the account', fr: 'Après l’ouverture du compte' },
        phrases: [
          { fr: 'Quand est-ce que je recevrai ma carte bancaire ?', ar: 'إيمت رح توصلني البطاقة البنكية؟', en: 'When will I receive my bank card?' },
          { fr: 'Comment vais-je recevoir mon code PIN ?', ar: 'كيف رح استلم الرقم السري للبطاقة؟', en: 'How will I receive my PIN?' },
          { fr: 'Est-ce que je peux utiliser l’application bancaire ?', ar: 'فيني استخدم تطبيق البنك؟', en: 'Can I use the banking app?' },
          { fr: 'Comment puis-je consulter mon solde ?', ar: 'كيف فيني شوف رصيد حسابي؟', en: 'How can I check my account balance?' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'الموظف يطلب وثيقة هوية', en: 'The employee asks for ID', fr: 'L’employé demande une pièce d’identité' },
        phrases: [
          { fr: 'Vous avez une pièce d’identité ?', ar: 'معك وثيقة هوية؟', en: 'Do you have an identity document?' },
          { fr: 'Oui, voici mon document d’identité.', ar: 'إي، تفضل هاي وثيقة هويتي.', en: 'Yes, here is my identity document.' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'يطلب إثبات السكن', en: 'They ask for proof of address', fr: 'Il demande un justificatif de domicile' },
        phrases: [
          { fr: 'Vous avez un justificatif de domicile ?', ar: 'معك إثبات سكن؟', en: 'Do you have proof of address?' },
          { fr: 'Oui, j’ai une attestation de domiciliation de la Croix-Rouge.', ar: 'إي، معي إثبات دوميسيلياسيون من الصليب الأحمر.', en: 'Yes, I have a domiciliation certificate from the Red Cross.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'الموظف يقول إن وثيقة ناقصة', en: 'The employee says a document is missing', fr: 'L’employé dit qu’un document manque' },
        phrases: [
          { fr: 'Il me manque un document ?', ar: 'ناقصني شي ورقة؟', en: 'Am I missing a document?' },
          { fr: 'Quel document dois-je apporter ?', ar: 'شو الورقة اللي لازم جيبها؟', en: 'What document do I need to bring?' },
          { fr: 'Pouvez-vous me donner la liste des documents nécessaires, s’il vous plaît ?', ar: 'فيك تعطيني قائمة الأوراق المطلوبة لو سمحت؟', en: 'Could you give me the list of required documents, please?' }
        ]
      },
      {
        icon: '❌',
        title: { ar: 'البنك يرفض فتح الحساب — اطلب ورقة الرفض', en: 'The bank refuses — ask for written refusal', fr: 'La banque refuse — demandez le refus écrit' },
        phrases: [
          { fr: 'Nous ne pouvons pas ouvrir votre compte.', ar: 'ما فينا نفتحلك الحساب.', en: 'We cannot open your account.' },
          { fr: 'Pouvez-vous me donner le refus par écrit, s’il vous plaît ?', ar: 'فيكم تعطوني الرفض خطيًا لو سمحت؟', en: 'Could you give me the refusal in writing, please?' },
          { fr: 'Pouvez-vous me donner une attestation de refus d’ouverture de compte, s’il vous plaît ?', ar: 'فيكم تعطوني ورقة تثبت رفض فتح الحساب لو سمحت؟', en: 'Could you give me a document confirming the refusal to open the account, please?' }
        ]
      },
      {
        icon: '🏦',
        title: { ar: 'البنك يطلب منك حسابًا سابقًا', en: 'The bank asks about a previous account', fr: 'La banque demande un compte précédent' },
        phrases: [
          { fr: 'Avez-vous déjà un compte bancaire en France ?', ar: 'عندك حساب بنكي من قبل بفرنسا؟', en: 'Do you already have a bank account in France?' },
          { fr: 'Non, je n’ai pas de compte bancaire en France.', ar: 'لا، ما عندي حساب بنكي بفرنسا.', en: 'No, I don’t have a bank account in France.' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'يسألون عن مصدر الأموال', en: 'They ask about the source of funds', fr: 'Ils demandent la source des revenus' },
        phrases: [
          { fr: 'Quelle est votre source de revenus ?', ar: 'شو مصدر دخلك؟', en: 'What is your source of income?' },
          { fr: 'Je travaille actuellement.', ar: 'أنا حاليًا بشتغل.', en: 'I am currently working.' },
          { fr: 'Je n’ai pas de revenus professionnels actuellement.', ar: 'حاليًا ما عندي دخل من العمل.', en: 'I currently don’t have employment income.' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'البطاقة لم تصل', en: 'The card hasn’t arrived', fr: 'La carte n’est pas arrivée' },
        phrases: [
          { fr: 'Je n’ai pas encore reçu ma carte bancaire.', ar: 'لسا ما وصلتني البطاقة البنكية.', en: 'I haven’t received my bank card yet.' },
          { fr: 'Pouvez-vous vérifier où en est l’envoi de ma carte ?', ar: 'فيكم تتأكدوا وين صار إرسال بطاقتي؟', en: 'Could you check the status of my card delivery?' }
        ]
      },
      {
        icon: '🔢',
        title: { ar: 'نسيت الرقم السري', en: 'Forgot the PIN', fr: 'Code PIN oublié' },
        phrases: [
          { fr: 'J’ai oublié mon code de carte bancaire.', ar: 'نسيت الرقم السري تبع البطاقة.', en: 'I forgot my bank card PIN.' },
          { fr: 'Comment puis-je le récupérer ou le modifier ?', ar: 'كيف فيني استرجعه أو غيّره؟', en: 'How can I retrieve or change it?' }
        ]
      },
      {
        icon: '📱',
        title: { ar: 'مشكلة تطبيق البنك', en: 'Banking app problems', fr: 'Problèmes avec l’application' },
        phrases: [
          { fr: 'Je n’arrive pas à me connecter à l’application.', ar: 'ما عم أقدر فوت على تطبيق البنك.', en: 'I can’t log into the banking app.' },
          { fr: 'Mon code ne fonctionne pas.', ar: 'الكود تبعي ما عم يشتغل.', en: 'My code isn’t working.' }
        ]
      },
      {
        icon: '💸',
        title: { ar: 'تحويل مالي لا يعمل', en: 'A transfer doesn’t work', fr: 'Un virement ne fonctionne pas' },
        phrases: [
          { fr: 'Je n’arrive pas à faire un virement.', ar: 'ما عم أقدر أعمل تحويل.', en: 'I can’t make a transfer.' },
          { fr: 'Pouvez-vous m’expliquer comment faire un virement ?', ar: 'فيك تشرحلي كيف أعمل تحويل؟', en: 'Can you explain how to make a transfer?' }
        ]
      },
      {
        icon: '🔒',
        title: { ar: 'الحساب أو البطاقة محظورة', en: 'Blocked account or card', fr: 'Compte ou carte bloqué' },
        phrases: [
          { fr: 'Ma carte est bloquée.', ar: 'بطاقتي انحظرت.', en: 'My card is blocked.' },
          { fr: 'Mon compte est bloqué. Pouvez-vous m’expliquer pourquoi ?', ar: 'حسابي محظور، فيكم تشرحولي ليش؟', en: 'My account is blocked. Could you explain why?' }
        ]
      },
      {
        icon: '💰',
        title: { ar: 'سحب من الصراف', en: 'Withdrawing at the ATM', fr: 'Retrait au distributeur' },
        phrases: [
          { fr: 'Je n’arrive pas à retirer de l’argent.', ar: 'ما عم أقدر اسحب مصاري.', en: 'I can’t withdraw money.' },
          { fr: 'Le distributeur a refusé ma carte.', ar: 'الصراف رفض بطاقتي.', en: 'The ATM declined my card.' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'لا تفهم الموظف — عبارات أخرى', en: 'You don’t understand the employee — more phrases', fr: 'Vous ne comprenez pas l’employé — autres phrases' },
        phrases: [
          { fr: 'Je parle français, mais je ne comprends pas très bien. Pouvez-vous parler plus lentement ?', ar: 'بحكي فرنسي، بس ما عم أفهم منيح. فيك تحكي أبطأ؟', en: 'I speak French, but I don’t understand very well. Could you speak more slowly?' },
          { fr: 'Pouvez-vous répéter, s’il vous plaît ?', ar: 'فيك تعيد لو سمحت؟', en: 'Could you repeat, please?' },
          { fr: 'Pouvez-vous me l’écrire, s’il vous plaît ?', ar: 'فيك تكتبلي ياها لو سمحت؟', en: 'Could you write it down for me, please?' }
        ]
      },
      {
        icon: '🏛️',
        title: { ar: 'Droit au compte — في البنك', en: 'Droit au compte — at the bank', fr: 'Droit au compte — à la banque' },
        phrases: [
          { fr: 'Bonjour, je voudrais ouvrir un compte bancaire, s’il vous plaît.', ar: 'مرحبا، بدي افتح حساب بنكي، لو سمحت.', en: 'Hello, I would like to open a bank account, please.' },
          { fr: 'Je suis demandeur d’asile en France et je suis domicilié à la Croix-Rouge.', ar: 'أنا طالب لجوء بفرنسا وعندي توطين عند الصليب الأحمر.', en: 'I am an asylum seeker in France and I am domiciled with the Red Cross.' },
          { fr: 'J’ai mon attestation de demande d’asile et mon attestation de domiciliation.', ar: 'معي إثبات طلب اللجوء وإثبات التوطين.', en: 'I have my asylum application certificate and my proof of domiciliation.' },
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم أقدّمها؟', en: 'What documents do I need to provide?' },
          { fr: 'Voici mon document d’identité.', ar: 'هاي وثيقة هويتي.', en: 'Here is my identity document.' },
          { fr: 'Voici mon attestation de demande d’asile.', ar: 'هاي وثيقة طلب اللجوء تبعي.', en: 'Here is my asylum application certificate.' },
          { fr: 'Et voici mon attestation de domiciliation de la Croix-Rouge.', ar: 'وهاي ورقة التوطين من الصليب الأحمر.', en: 'And here is my Red Cross domiciliation certificate.' },
          { fr: 'Malheureusement, nous ne pouvons pas ouvrir un compte pour vous.', ar: 'للأسف، ما فينا نفتحلك حساب.', en: 'Unfortunately, we cannot open an account for you.' },
          { fr: 'D’accord. Est-ce que vous pouvez me donner une attestation de refus d’ouverture de compte, s’il vous plaît ?', ar: 'طيب، فيكم تعطوني ورقة تثبت رفض فتح الحساب، لو سمحت؟', en: 'Okay. Could you give me a document confirming the refusal to open the account, please?' },
          { fr: 'J’en ai besoin pour faire une demande de droit au compte auprès de la Banque de France.', ar: 'بحتاجها حتى قدّم طلب حق فتح حساب لدى بنك فرنسا.', en: 'I need it to apply for the right to an account with the Banque de France.' }
        ]
      },
      {
        icon: '🏛️',
        title: { ar: 'Droit au compte — عند Banque de France', en: 'Droit au compte — at the Banque de France', fr: 'Droit au compte — à la Banque de France' },
        phrases: [
          { fr: 'Bonjour, je voudrais faire une demande de droit au compte.', ar: 'مرحبا، بدي قدّم طلب حق فتح حساب بنكي.', en: 'Hello, I would like to apply for the right to an account.' },
          { fr: 'Une banque a refusé de m’ouvrir un compte.', ar: 'بنك رفض يفتحلي حساب.', en: 'A bank refused to open an account for me.' },
          { fr: 'Voici l’attestation de refus de la banque.', ar: 'هاي ورقة رفض البنك.', en: 'Here is the bank’s refusal document.' },
          { fr: 'Je suis demandeur d’asile et je suis domicilié à la Croix-Rouge.', ar: 'أنا طالب لجوء وعندي توطين عند الصليب الأحمر.', en: 'I am an asylum seeker and I am domiciled with the Red Cross.' },
          { fr: 'Voici mon attestation de demande d’asile et mon attestation de domiciliation.', ar: 'هاي وثيقة طلب اللجوء وهاي وثيقة التوطين.', en: 'Here is my asylum application certificate and my domiciliation certificate.' },
          { fr: 'Avez-vous déjà un compte bancaire en France ?', ar: 'عندك حساب بنكي حاليًا بفرنسا؟', en: 'Do you already have a bank account in France?' },
          { fr: 'Non, je n’ai pas de compte bancaire en France.', ar: 'لا، ما عندي حساب بنكي بفرنسا.', en: 'No, I don’t have a bank account in France.' },
          { fr: 'Quelle est votre situation en France ?', ar: 'شو وضعك بفرنسا؟', en: 'What is your situation in France?' },
          { fr: 'Je suis demandeur d’asile.', ar: 'أنا طالب لجوء.', en: 'I am an asylum seeker.' },
          { fr: 'Où êtes-vous domicilié ?', ar: 'وين عندك توطين؟', en: 'Where are you domiciled?' },
          { fr: 'Je suis domicilié à la Croix-Rouge.', ar: 'عندي توطين عند الصليب الأحمر.', en: 'I am domiciled with the Red Cross.' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'Droit au compte — بعد تعيين البنك', en: 'Droit au compte — after the bank is assigned', fr: 'Droit au compte — après la désignation de la banque' },
        phrases: [
          { fr: 'Est-ce que le compte aura un RIB ?', ar: 'هل الحساب رح يكون إلو RIB؟', en: 'Will the account have a RIB?' },
          { fr: 'Est-ce que je pourrai recevoir mon salaire sur ce compte ?', ar: 'فيني استلم راتبي على هالحساب؟', en: 'Can I receive my salary into this account?' },
          { fr: 'Est-ce que je pourrai recevoir des virements sur ce compte ?', ar: 'فيني استقبل تحويلات على هالحساب؟', en: 'Can I receive transfers into this account?' },
          { fr: 'Est-ce que j’aurai une carte bancaire ?', ar: 'رح يكون عندي بطاقة بنكية؟', en: 'Will I have a bank card?' },
          { fr: 'Quels services bancaires sont inclus ?', ar: 'شو الخدمات البنكية اللي بتكون متوفرة؟', en: 'What banking services are included?' },
          { fr: 'Je voudrais simplement savoir quelles sont les démarches pour bénéficier du droit au compte.', ar: 'بدي بس أعرف شو الإجراءات حتى استفيد من حق فتح الحساب.', en: 'I would simply like to know what the steps are to benefit from the right to an account.' }
        ]
      }
    ]
  },
  {
    id: 'apres-asile',
    icon: '📨',
    name: { ar: 'بعد قبول اللجوء — استلام الوثائق', en: 'After asylum is granted — receiving documents', fr: 'Après l’acceptation de l’asile — recevoir les documents' },
    desc: {
      ar: 'من استلام ظرف قرار OFPRA حتى شهادة الميلاد واستخدامها بالمحافظة وCPAM وCAF والبنك',
      en: 'From receiving the OFPRA decision envelope to the birth certificate and using it at the prefecture, CPAM, CAF and the bank',
      fr: 'De la réception de la décision de l’OFPRA jusqu’à l’acte de naissance et son utilisation à la préfecture, la CPAM, la CAF et la banque'
    },
    sections: [
      {
        icon: '📨',
        title: { ar: 'عند الاستقبال وانتظار الموظف', en: 'At reception, waiting for the officer', fr: 'À l’accueil, en attendant l’agent' },
        phrases: [
          { fr: 'Bonjour, je viens pour récupérer mon document.', ar: 'مرحبا، أنا جاي حتى استلم الوثيقة تبعي.', en: 'Hello, I’m here to collect my document.' },
          { fr: 'J’ai reçu un message me demandant de venir.', ar: 'وصلتني رسالة تطلب مني أجي.', en: 'I received a message asking me to come.' },
          { fr: 'Je dois attendre quelqu’un ?', ar: 'لازم استنى حدا؟', en: 'Do I have to wait for someone?' },
          { fr: 'Oui, vous devez attendre un agent.', ar: 'إي، لازم تستنى موظف.', en: 'Yes, you need to wait for an officer.' },
          { fr: 'D’accord, je vais attendre ici.', ar: 'طيب، رح استنى هون.', en: 'Okay, I’ll wait here.' }
        ]
      },
      {
        icon: '👨‍💼',
        title: { ar: 'عندما يأتي الموظف ومعه الظرف', en: 'When the officer arrives with the envelope', fr: 'Quand l’agent arrive avec l’enveloppe' },
        phrases: [
          { fr: 'Bonjour, vous êtes Monsieur Haj Mohammad ?', ar: 'مرحبا، حضرتك السيد حاج محمد؟', en: 'Hello, are you Mr. Haj Mohammad?' },
          { fr: 'Oui, c’est moi.', ar: 'إي، أنا.', en: 'Yes, that’s me.' },
          { fr: 'Je vous apporte ce courrier.', ar: 'جبتلك هالظرف / هالرسالة.', en: 'I brought you this letter.' },
          { fr: 'Merci beaucoup.', ar: 'شكرًا كتير.', en: 'Thank you very much.' },
          { fr: 'Est-ce que je dois signer quelque chose ?', ar: 'لازم وقّع على شي؟', en: 'Do I need to sign anything?' },
          { fr: 'Oui, veuillez signer ici, s’il vous plaît.', ar: 'إي، لو سمحت وقّع هون.', en: 'Yes, please sign here.' },
          { fr: 'Est-ce que je peux ouvrir l’enveloppe maintenant ?', ar: 'فيني افتح الظرف هلأ؟', en: 'Can I open the envelope now?' },
          { fr: 'Est-ce que vous pouvez m’expliquer ce document, s’il vous plaît ?', ar: 'فيك تشرحلي هالوثيقة، لو سمحت؟', en: 'Could you explain this document to me, please?' },
          { fr: 'Je parle français, mais je ne comprends pas tout.', ar: 'أنا بحكي فرنسي، بس ما بفهم كل شي.', en: 'I speak French, but I don’t understand everything.' },
          { fr: 'Pouvez-vous parler plus lentement, s’il vous plaît ?', ar: 'فيك تحكي أبطأ شوي، لو سمحت؟', en: 'Could you speak more slowly, please?' },
          { fr: 'Qu’est-ce que je dois faire maintenant ?', ar: 'شو لازم أعمل هلأ؟', en: 'What do I need to do now?' }
        ]
      },
      {
        icon: '✉️',
        title: { ar: 'فتح الظرف', en: 'Opening the envelope', fr: 'Ouvrir l’enveloppe' },
        phrases: [
          { fr: 'Je peux ouvrir l’enveloppe maintenant ?', ar: 'فيني افتح الظرف هلأ؟', en: 'Can I open the envelope now?' },
          { fr: 'Oui, vous pouvez l’ouvrir.', ar: 'إي، فيك تفتحه.', en: 'Yes, you can open it.' },
          { fr: 'Qu’est-ce que c’est comme document ?', ar: 'شو هالوثيقة؟', en: 'What document is this?' },
          { fr: 'C’est la décision concernant votre demande d’asile.', ar: 'هاد القرار المتعلق بطلب اللجوء تبعك.', en: 'This is the decision concerning your asylum application.' },
          { fr: 'Est-ce que ma demande d’asile a été acceptée ?', ar: 'هل تم قبول طلب اللجوء تبعي؟', en: 'Has my asylum application been accepted?' },
          { fr: 'Oui, votre demande a été acceptée.', ar: 'إي، تم قبول طلبك.', en: 'Yes, your application has been accepted.' },
          { fr: 'Je suis très soulagé. Merci beaucoup.', ar: 'أنا ارتحت كتير. شكرًا كتير.', en: 'I’m very relieved. Thank you very much.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'إذا وجدت عدة أوراق داخل الظرف', en: 'If the envelope contains several documents', fr: 'S’il y a plusieurs documents dans l’enveloppe' },
        phrases: [
          { fr: 'Il y a plusieurs documents dans l’enveloppe.', ar: 'في عدة أوراق جوّا الظرف.', en: 'There are several documents in the envelope.' },
          { fr: 'Pouvez-vous me dire à quoi servent ces documents ?', ar: 'فيك تخبرني شو وظيفة هالأوراق؟', en: 'Could you tell me what these documents are for?' },
          { fr: 'Est-ce que je dois conserver tous ces documents ?', ar: 'لازم احتفظ بكل هالأوراق؟', en: 'Do I need to keep all these documents?' },
          { fr: 'Oui, gardez-les précieusement.', ar: 'إي، خليهُن عندك وحافظ عليهن منيح.', en: 'Yes, keep them carefully.' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'السؤال عن بطاقة الإقامة', en: 'Asking about the residence permit', fr: 'Questions sur le titre de séjour' },
        phrases: [
          { fr: 'Est-ce que je dois maintenant demander un titre de séjour ?', ar: 'هلأ لازم قدّم على بطاقة الإقامة؟', en: 'Do I now need to apply for a residence permit?' },
          { fr: 'Quand est-ce que je pourrai recevoir mon titre de séjour ?', ar: 'إمتى ممكن استلم بطاقة الإقامة تبعي؟', en: 'When will I be able to receive my residence permit?' },
          { fr: 'Est-ce que je dois prendre rendez-vous ?', ar: 'لازم آخد موعد؟', en: 'Do I need to make an appointment?' },
          { fr: 'Où est-ce que je dois faire cette démarche ?', ar: 'وين لازم أعمل هالإجراء؟', en: 'Where do I need to do this procedure?' },
          { fr: 'Quand est-ce que je recevrai ma carte de séjour ?', ar: 'إمتى رح استلم بطاقة الإقامة؟', en: 'When will I receive my residence permit?' },
          { fr: 'Est-ce que je dois faire une démarche auprès de la préfecture ?', ar: 'لازم أعمل إجراء عند المحافظة؟', en: 'Do I need to complete a procedure with the prefecture?' }
        ]
      },
      {
        icon: '🧾',
        title: { ar: 'إذا أعطاك الموظف تعليمات', en: 'If the officer gives you instructions', fr: 'Si l’agent vous donne des instructions' },
        phrases: [
          { fr: 'Vous devez suivre les instructions indiquées dans le document.', ar: 'لازم تتبع التعليمات المكتوبة بالوثيقة.', en: 'You need to follow the instructions indicated in the document.' },
          { fr: 'D’accord. Est-ce que vous pouvez me montrer où je dois faire la démarche ?', ar: 'طيب، فيك تفرجيني وين لازم أعمل الإجراء؟', en: 'Okay. Could you show me where I need to complete the procedure?' },
          { fr: 'Est-ce qu’il y a une date limite ?', ar: 'في مهلة أو آخر موعد؟', en: 'Is there a deadline?' },
          { fr: 'Qu’est-ce que je dois faire en premier ?', ar: 'شو أول شي لازم أعمله؟', en: 'What do I need to do first?' }
        ]
      },
      {
        icon: '👋',
        title: { ar: 'قبل أن تغادر', en: 'Before leaving', fr: 'Avant de partir' },
        phrases: [
          { fr: 'Est-ce que j’ai besoin d’autres documents ?', ar: 'بحتاج أوراق تانية؟', en: 'Do I need any other documents?' },
          { fr: 'Est-ce que tout est terminé pour aujourd’hui ?', ar: 'يعني خلص كل شي لليوم؟', en: 'Is everything finished for today?' },
          { fr: 'Merci pour votre aide. Bonne journée.', ar: 'شكرًا على مساعدتك. نهارك سعيد.', en: 'Thank you for your help. Have a nice day.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'قرار OFPRA', en: 'The OFPRA decision', fr: 'La décision de l’OFPRA' },
        phrases: [
          { fr: 'Voici la décision de l’OFPRA.', ar: 'هاي قرار الأوفبرا.', en: 'This is the OFPRA decision.' },
          { fr: 'C’est la décision de l’OFPRA.', ar: 'هاد قرار الأوفبرا.', en: 'This is the OFPRA decision.' },
          { fr: 'Est-ce que c’est la décision qui confirme que je suis protégé ?', ar: 'هاد القرار اللي بيأكد إني حصلت على الحماية؟', en: 'Is this the decision confirming that I have been granted protection?' },
          { fr: 'Est-ce que cela signifie que je suis reconnu réfugié ?', ar: 'يعني هاد إنو تم الاعتراف فيني كلاجئ؟', en: 'Does this mean that I have been recognized as a refugee?' }
        ]
      },
      {
        icon: '✈️',
        title: { ar: 'وثيقة السفر', en: 'The travel document', fr: 'Le titre de voyage' },
        phrases: [
          { fr: 'Est-ce que je peux demander un titre de voyage ?', ar: 'فيني أطلب وثيقة سفر؟', en: 'Can I apply for a travel document?' },
          { fr: 'Est-ce que le titre de voyage est obligatoire ?', ar: 'وثيقة السفر إجبارية؟', en: 'Is the travel document mandatory?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'جمل مهمة جداً مع الموظف', en: 'Very important phrases with the officer', fr: 'Phrases très importantes avec l’agent' },
        phrases: [
          { fr: 'Pouvez-vous m’expliquer tous les documents, s’il vous plaît ?', ar: 'فيك تشرحلي كل الأوراق، لو سمحت؟', en: 'Could you explain all the documents to me, please?' },
          { fr: 'Qu’est-ce que je dois faire maintenant ?', ar: 'شو لازم أعمل هلأ؟', en: 'What do I need to do now?' },
          { fr: 'Est-ce qu’il y a une démarche que je dois faire rapidement ?', ar: 'في إجراء لازم أعمله بسرعة؟', en: 'Is there any procedure I need to complete quickly?' },
          { fr: 'Est-ce que je dois garder l’original ?', ar: 'لازم احتفظ بالأصل؟', en: 'Do I need to keep the original?' },
          { fr: 'Pouvez-vous me dire quels documents je dois conserver ?', ar: 'فيك تخبرني أي أوراق لازم حافظ عليها؟', en: 'Could you tell me which documents I need to keep?' }
        ]
      },
      {
        icon: '🎂',
        title: { ar: 'استلام شهادة الميلاد', en: 'Receiving the birth certificate', fr: 'Réception de l’acte de naissance' },
        phrases: [
          { fr: 'J’ai reçu mon acte de naissance.', ar: 'استلمت شهادة ميلادي.', en: 'I received my birth certificate.' },
          { fr: 'Est-ce que c’est mon acte de naissance ?', ar: 'هاي شهادة ميلادي؟', en: 'Is this my birth certificate?' },
          { fr: 'C’est mon acte de naissance établi par l’OFPRA ?', ar: 'هاي شهادة ميلادي اللي أعدّها الأوفبرا؟', en: 'Is this my birth certificate issued by OFPRA?' },
          { fr: 'Est-ce que c’est une copie intégrale de mon acte de naissance ?', ar: 'هاي نسخة كاملة عن شهادة ميلادي؟', en: 'Is this a full copy of my birth certificate?' },
          { fr: 'Est-ce que c’est un document original ?', ar: 'هاي وثيقة أصلية؟', en: 'Is this an original document?' }
        ]
      },
      {
        icon: '🔎',
        title: { ar: 'التأكد من المعلومات', en: 'Checking the information', fr: 'Vérifier les informations' },
        phrases: [
          { fr: 'Je voudrais vérifier les informations.', ar: 'بدي أتأكد من المعلومات.', en: 'I would like to check the information.' },
          { fr: 'Mon nom est-il correctement écrit ?', ar: 'اسمي مكتوب بشكل صحيح؟', en: 'Is my name written correctly?' },
          { fr: 'Ma date de naissance est-elle correcte ?', ar: 'تاريخ ميلادي صحيح؟', en: 'Is my date of birth correct?' },
          { fr: 'Mon lieu de naissance est-il correct ?', ar: 'مكان ولادتي صحيح؟', en: 'Is my place of birth correct?' },
          { fr: 'Ma nationalité est-elle indiquée sur le document ?', ar: 'جنسيتي مذكورة بالوثيقة؟', en: 'Is my nationality indicated on the document?' }
        ]
      },
      {
        icon: '❗',
        title: { ar: 'إذا وجدت خطأ', en: 'If you find an error', fr: 'Si vous trouvez une erreur' },
        phrases: [
          { fr: 'Il y a une erreur sur mon acte de naissance.', ar: 'في خطأ بشهادة ميلادي.', en: 'There is an error on my birth certificate.' },
          { fr: 'Mon nom est mal écrit.', ar: 'اسمي مكتوب غلط.', en: 'My name is written incorrectly.' },
          { fr: 'Ma date de naissance est incorrecte.', ar: 'تاريخ ميلادي غير صحيح.', en: 'My date of birth is incorrect.' },
          { fr: 'Comment puis-je faire corriger cette erreur ?', ar: 'كيف فيني صحح هالخطأ؟', en: 'How can I have this error corrected?' },
          { fr: 'À qui dois-je m’adresser ?', ar: 'لمين لازم راجع؟', en: 'Who should I contact?' }
        ]
      },
      {
        icon: '📑',
        title: { ar: 'طلب نسخة', en: 'Requesting a copy', fr: 'Demander une copie' },
        phrases: [
          { fr: 'J’ai besoin d’une copie de mon acte de naissance.', ar: 'بحتاج نسخة عن شهادة ميلادي.', en: 'I need a copy of my birth certificate.' },
          { fr: 'Comment puis-je obtenir une nouvelle copie ?', ar: 'كيف فيني أحصل على نسخة جديدة؟', en: 'How can I get a new copy?' },
          { fr: 'Est-ce que je peux demander plusieurs copies ?', ar: 'فيني أطلب عدة نسخ؟', en: 'Can I request several copies?' },
          { fr: 'Est-ce que cette copie est valable pour la préfecture ?', ar: 'هالنسخة مقبولة عند المحافظة؟', en: 'Is this copy valid for the prefecture?' }
        ]
      },
      {
        icon: '🏛️',
        title: { ar: 'استخدامها في الإجراءات', en: 'Using it in procedures', fr: 'L’utiliser dans les démarches' },
        phrases: [
          { fr: 'J’ai besoin de mon acte de naissance pour une démarche administrative.', ar: 'بحتاج شهادة ميلادي لإجراء إداري.', en: 'I need my birth certificate for an administrative procedure.' },
          { fr: 'On me demande mon acte de naissance pour mon dossier.', ar: 'طلبوا مني شهادة ميلادي لملفي.', en: 'They are asking me for my birth certificate for my file.' },
          { fr: 'Est-ce que je dois envoyer l’original ou une copie ?', ar: 'لازم ابعت الأصل ولا نسخة؟', en: 'Do I need to send the original or a copy?' },
          { fr: 'Est-ce que je peux utiliser ce document pour ouvrir un compte bancaire ?', ar: 'فيني استخدم هالوثيقة لفتح حساب بنكي؟', en: 'Can I use this document to open a bank account?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'إذا ما فهمت الموظف — شهادة الميلاد', en: 'If you don’t understand — birth certificate', fr: 'Si vous ne comprenez pas — acte de naissance' },
        phrases: [
          { fr: 'Je ne comprends pas bien ce document.', ar: 'ما فهمت هالوثيقة منيح.', en: 'I don’t really understand this document.' },
          { fr: 'Pouvez-vous m’expliquer ce document, s’il vous plaît ?', ar: 'فيك تشرحلي هالوثيقة، لو سمحت؟', en: 'Could you explain this document to me, please?' },
          { fr: 'Pouvez-vous me dire ce que je dois faire maintenant ?', ar: 'فيك تخبرني شو لازم أعمل هلأ؟', en: 'Could you tell me what I need to do now?' },
          { fr: 'Est-ce que je dois conserver ce document ?', ar: 'لازم حافظ على هالوثيقة؟', en: 'Do I need to keep this document?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم 5 عبارات', en: 'The 5 most important phrases', fr: 'Les 5 phrases les plus importantes' },
        phrases: [
          { fr: 'Voici mon acte de naissance.', ar: 'هاي شهادة ميلادي.', en: 'Here is my birth certificate.' },
          { fr: 'Je voudrais vérifier les informations.', ar: 'بدي أتأكد من المعلومات.', en: 'I would like to check the information.' },
          { fr: 'Il y a une erreur sur mon acte de naissance.', ar: 'في خطأ بشهادة ميلادي.', en: 'There is an error on my birth certificate.' },
          { fr: 'Comment puis-je faire corriger cette erreur ?', ar: 'كيف فيني صحح هالخطأ؟', en: 'How can I have this error corrected?' },
          { fr: 'Est-ce que je dois conserver ce document ?', ar: 'لازم حافظ على هالوثيقة؟', en: 'Do I need to keep this document?' }
        ]
      },
      {
        icon: '📬',
        title: { ar: 'عندما تصل شهادة الميلاد بالبريد', en: 'When the birth certificate arrives by mail', fr: 'Quand l’acte de naissance arrive par courrier' },
        phrases: [
          { fr: 'J’ai reçu un courrier de l’OFPRA concernant mon état civil.', ar: 'وصلتني رسالة من الأوفبرا بخصوص الأحوال المدنية تبعي.', en: 'I received a letter from OFPRA concerning my civil status.' },
          { fr: 'Il y a plusieurs documents dans l’enveloppe.', ar: 'في عدة أوراق بالظرف.', en: 'There are several documents in the envelope.' },
          { fr: 'Est-ce que je dois signer quelque chose ?', ar: 'لازم وقّع على شي؟', en: 'Do I need to sign anything?' },
          { fr: 'Est-ce que je dois répondre à cette lettre ?', ar: 'لازم رد على هالرسالة؟', en: 'Do I need to reply to this letter?' },
          { fr: 'Est-ce qu’il y a une date limite ?', ar: 'في مهلة محددة؟', en: 'Is there a deadline?' }
        ]
      },
      {
        icon: '👤',
        title: { ar: 'إذا كانت معلومات الأهل موجودة', en: 'If parents’ information is included', fr: 'Si les informations des parents figurent' },
        phrases: [
          { fr: 'Les noms de mes parents sont-ils indiqués ?', ar: 'أسماء أهلي مذكورة؟', en: 'Are my parents’ names indicated?' },
          { fr: 'Le nom de mon père est-il correct ?', ar: 'اسم أبي صحيح؟', en: 'Is my father’s name correct?' },
          { fr: 'Le nom de ma mère est-il correct ?', ar: 'اسم أمي صحيح؟', en: 'Is my mother’s name correct?' },
          { fr: 'Les informations sur mes parents sont-elles correctes ?', ar: 'معلومات أهلي صحيحة؟', en: 'Is the information about my parents correct?' }
        ]
      },
      {
        icon: '📝',
        title: { ar: 'إذا كان الاسم مكتوبًا بطريقة مختلفة', en: 'If the name is written differently', fr: 'Si le nom est écrit différemment' },
        phrases: [
          { fr: 'Mon nom est écrit différemment sur ce document.', ar: 'اسمي مكتوب بطريقة مختلفة بهالوثيقة.', en: 'My name is written differently on this document.' },
          { fr: 'Est-ce que cela peut poser un problème ?', ar: 'ممكن هالشي يعمل مشكلة؟', en: 'Could this cause a problem?' },
          { fr: 'Mon prénom est-il correctement indiqué ?', ar: 'اسمي الأول مكتوب بشكل صحيح؟', en: 'Is my first name correctly indicated?' },
          { fr: 'Mon nom de famille est-il correctement indiqué ?', ar: 'اسم العائلة مكتوب بشكل صحيح؟', en: 'Is my surname correctly indicated?' }
        ]
      },
      {
        icon: '🏛️',
        title: { ar: 'عند المحافظة — Préfecture', en: 'At the prefecture', fr: 'À la préfecture' },
        phrases: [
          { fr: 'On me demande un acte de naissance pour mon dossier.', ar: 'طلبوا مني شهادة ميلاد لملفي.', en: 'They are asking me for a birth certificate for my application.' },
          { fr: 'Voici l’acte de naissance établi par l’OFPRA.', ar: 'هاي شهادة الميلاد اللي أعدّها الأوفبرا.', en: 'Here is the birth certificate issued by OFPRA.' },
          { fr: 'Est-ce que ce document suffit pour mon dossier ?', ar: 'هالوثيقة بتكفي لملفي؟', en: 'Is this document enough for my application?' },
          { fr: 'Avez-vous besoin d’une copie ou de l’original ?', ar: 'بدكم نسخة ولا الأصل؟', en: 'Do you need a copy or the original?' }
        ]
      },
      {
        icon: '🏥',
        title: { ar: 'عند CPAM', en: 'At CPAM', fr: 'À la CPAM' },
        phrases: [
          { fr: 'La CPAM me demande un acte de naissance.', ar: 'الـCPAM طلبت مني شهادة ميلاد.', en: 'CPAM is asking me for a birth certificate.' },
          { fr: 'Est-ce que je dois envoyer une copie ?', ar: 'لازم ابعت نسخة؟', en: 'Do I need to send a copy?' },
          { fr: 'Est-ce que je peux envoyer ce document en ligne ?', ar: 'فيني ابعت هالوثيقة أونلاين؟', en: 'Can I send this document online?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'عند CAF', en: 'At CAF', fr: 'À la CAF' },
        phrases: [
          { fr: 'La CAF me demande mon acte de naissance.', ar: 'الـCAF طلبت مني شهادة ميلادي.', en: 'CAF is asking me for my birth certificate.' },
          { fr: 'Est-ce que cette copie est acceptée ?', ar: 'هالنسخة مقبولة؟', en: 'Is this copy accepted?' },
          { fr: 'Est-ce que je dois fournir une traduction ?', ar: 'لازم أقدّم ترجمة؟', en: 'Do I need to provide a translation?' }
        ]
      },
      {
        icon: '📱',
        title: { ar: 'إذا طلبوا منك إرسالها إلكترونيًا', en: 'If they ask you to send it electronically', fr: 'Si l’on vous demande de l’envoyer en ligne' },
        phrases: [
          { fr: 'Comment puis-je envoyer mon acte de naissance ?', ar: 'كيف فيني ابعت شهادة ميلادي؟', en: 'How can I send my birth certificate?' },
          { fr: 'Est-ce que je peux l’envoyer par e-mail ?', ar: 'فيني ابعتها بالإيميل؟', en: 'Can I send it by email?' },
          { fr: 'Est-ce que je dois scanner le document ?', ar: 'لازم أعمل سكان للوثيقة؟', en: 'Do I need to scan the document?' },
          { fr: 'Est-ce qu’une photo du document suffit ?', ar: 'صورة عن الوثيقة بتكفي؟', en: 'Is a photo of the document enough?' }
        ]
      },
      {
        icon: '📂',
        title: { ar: 'حفظ الوثيقة', en: 'Keeping the document', fr: 'Conserver le document' },
        phrases: [
          { fr: 'Je vais garder l’original et faire des copies.', ar: 'رح حافظ على الأصل وأعمل نسخ.', en: 'I’ll keep the original and make copies.' },
          { fr: 'Je préfère garder l’original avec moi.', ar: 'بفضّل خلي الأصل معي.', en: 'I prefer to keep the original with me.' },
          { fr: 'Est-ce que vous pouvez me rendre l’original, s’il vous plaît ?', ar: 'فيكم ترجعولي الأصل، لو سمحت؟', en: 'Could you return the original to me, please?' }
        ]
      },
      {
        icon: '🔴',
        title: { ar: 'إذا ضاعت شهادة الميلاد', en: 'If the birth certificate is lost', fr: 'Si l’acte de naissance est perdu' },
        phrases: [
          { fr: 'J’ai perdu mon acte de naissance.', ar: 'ضيّعت شهادة ميلادي.', en: 'I lost my birth certificate.' },
          { fr: 'Comment puis-je obtenir une nouvelle copie ?', ar: 'كيف فيني أحصل على نسخة جديدة؟', en: 'How can I get a new copy?' },
          { fr: 'Est-ce que je dois contacter l’OFPRA ?', ar: 'لازم أتواصل مع الأوفبرا؟', en: 'Do I need to contact OFPRA?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'عبارات مهمة جداً — شهادة الميلاد', en: 'Very important phrases — birth certificate', fr: 'Phrases très importantes — acte de naissance' },
        phrases: [
          { fr: 'Mon acte de naissance a été établi par l’OFPRA.', ar: 'شهادة ميلادي تم إعدادها من قبل الأوفبرا.', en: 'My birth certificate was issued by OFPRA.' },
          { fr: 'Je voudrais une copie récente de mon acte de naissance.', ar: 'بدي نسخة حديثة من شهادة ميلادي.', en: 'I would like a recent copy of my birth certificate.' },
          { fr: 'Pouvez-vous vérifier si mon acte de naissance est à jour ?', ar: 'فيك تتأكد إذا شهادة ميلادي محدثة؟', en: 'Could you check whether my birth certificate is up to date?' },
          { fr: 'Je voudrais savoir si ce document est suffisant pour ma démarche.', ar: 'بدي أعرف إذا هالوثيقة بتكفي للإجراء تبعي.', en: 'I would like to know if this document is sufficient for my procedure.' }
        ]
      }
    ]
  },
  {
    id: 'prefecture',
    icon: '🏛️',
    name: { ar: 'المحافظة — Préfecture', en: 'The prefecture — Préfecture', fr: 'La préfecture' },
    desc: {
      ar: 'من تسليم الأوراق بعد قبول اللجوء حتى بطاقة المقيم، الطابع الضريبي، وتجديد الإقامة',
      en: 'From submitting documents after asylum is granted to the resident card, the tax stamp, and permit renewal',
      fr: 'Du dépôt des documents après l’asile jusqu’à la carte de résident, le timbre fiscal et le renouvellement'
    },
    sections: [
      {
        icon: '🏛️',
        title: { ar: 'عند الاستقبال', en: 'At reception', fr: 'À l’accueil' },
        phrases: [
          { fr: 'Bonjour, j’ai rendez-vous pour une démarche concernant mon titre de séjour.', ar: 'مرحبا، عندي موعد بخصوص إجراء متعلق ببطاقة إقامتي.', en: 'Hello, I have an appointment for a procedure concerning my residence permit.' },
          { fr: 'Voici ma convocation.', ar: 'هاي ورقة الموعد تبعي.', en: 'Here is my appointment notice.' },
          { fr: 'Je suis reconnu réfugié.', ar: 'تم الاعتراف فيني كلاجئ.', en: 'I have been recognized as a refugee.' },
          { fr: 'Voici la décision de l’OFPRA.', ar: 'هاي قرار الأوفبرا.', en: 'Here is the OFPRA decision.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'الموظف يطلب الوثائق', en: 'The officer asks for documents', fr: 'L’agent demande les documents' },
        phrases: [
          { fr: 'Pouvez-vous me donner vos documents, s’il vous plaît ?', ar: 'فيك تعطيني أوراقك، لو سمحت؟', en: 'Could you give me your documents, please?' },
          { fr: 'Oui, bien sûr. Les voici.', ar: 'إي طبعًا، تفضل هاي هني.', en: 'Yes, of course. Here they are.' },
          { fr: 'Vous avez votre passeport ?', ar: 'معك جواز سفرك؟', en: 'Do you have your passport?' },
          { fr: 'J’ai mon document d’identité.', ar: 'معي وثيقة هويتي.', en: 'I have my identity document.' },
          { fr: 'Voici mon attestation de demande d’asile.', ar: 'هاي وثيقة طلب اللجوء تبعي.', en: 'Here is my asylum application certificate.' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'الموظف يتأكد من معلوماتك', en: 'The officer checks your details', fr: 'L’agent vérifie vos informations' },
        phrases: [
          { fr: 'Pouvez-vous me confirmer votre nom et votre prénom ?', ar: 'فيك تأكدلي اسمك واسمك الأول؟', en: 'Can you confirm your surname and first name?' },
          { fr: 'Je m’appelle Mohammad Haj.', ar: 'اسمي محمد حاج.', en: 'My name is Mohammad Haj.' },
          { fr: 'Quelle est votre date de naissance ?', ar: 'شو تاريخ ميلادك؟', en: 'What is your date of birth?' },
          { fr: 'Je suis né le 15 juillet 1989.', ar: 'انولدت بـ15 تموز 1989.', en: 'I was born on July 15, 1989.' },
          { fr: 'Quel est votre lieu de naissance ?', ar: 'وين مكان ولادتك؟', en: 'What is your place of birth?' },
          { fr: 'Je suis né à Hama, en Syrie.', ar: 'انولدت بحماة، بسوريا.', en: 'I was born in Hama, Syria.' }
        ]
      },
      {
        icon: '🎂',
        title: { ar: 'الحديث عن شهادة الميلاد', en: 'Talking about the birth certificate', fr: 'À propos de l’acte de naissance' },
        phrases: [
          { fr: 'Vous avez reçu votre acte de naissance de l’OFPRA ?', ar: 'استلمت شهادة ميلادك من الأوفبرا؟', en: 'Have you received your birth certificate from OFPRA?' },
          { fr: 'Oui, je l’ai reçu.', ar: 'إي، استلمتها.', en: 'Yes, I received it.' },
          { fr: 'Non, je ne l’ai pas encore reçu.', ar: 'لا، لسا ما استلمتها.', en: 'No, I haven’t received it yet.' },
          { fr: 'J’ai seulement la décision de l’OFPRA.', ar: 'معي بس قرار الأوفبرا.', en: 'I only have the OFPRA decision.' },
          { fr: 'Je vais vérifier les informations sur votre acte de naissance.', ar: 'رح أتأكد من المعلومات الموجودة بشهادة ميلادك.', en: 'I’m going to check the information on your birth certificate.' },
          { fr: 'Votre nom est correct ?', ar: 'اسمك صحيح؟', en: 'Is your name correct?' },
          { fr: 'Oui, tout est correct.', ar: 'إي، كلشي صحيح.', en: 'Yes, everything is correct.' },
          { fr: 'Il y a une erreur sur mon nom.', ar: 'في خطأ باسمي.', en: 'There is an error in my name.' },
          { fr: 'Que dois-je faire pour corriger cette erreur ?', ar: 'شو لازم أعمل حتى صحح هالخطأ؟', en: 'What do I need to do to correct this error?' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'بطاقة الإقامة', en: 'The residence permit', fr: 'Le titre de séjour' },
        phrases: [
          { fr: 'Nous allons enregistrer votre demande de titre de séjour.', ar: 'رح نسجل طلب بطاقة إقامتك.', en: 'We are going to register your residence permit application.' },
          { fr: 'Est-ce que je vais recevoir une carte de résident de dix ans ?', ar: 'رح استلم بطاقة مقيم لمدة عشر سنين؟', en: 'Will I receive a ten-year resident card?' },
          { fr: 'Oui, vous êtes reconnu réfugié.', ar: 'إي، أنت معترف فيك كلاجئ.', en: 'Yes, you have been recognized as a refugee.' }
        ]
      },
      {
        icon: '🖐️',
        title: { ar: 'الصورة والبصمات', en: 'Photo and fingerprints', fr: 'Photo et empreintes' },
        phrases: [
          { fr: 'Nous allons prendre vos empreintes.', ar: 'رح ناخد بصماتك.', en: 'We are going to take your fingerprints.' },
          { fr: 'D’accord.', ar: 'طيب.', en: 'Okay.' },
          { fr: 'Regardez l’appareil photo, s’il vous plaît.', ar: 'تطلع بالكاميرا، لو سمحت.', en: 'Look at the camera, please.' },
          { fr: 'Est-ce que je dois enlever mes lunettes ?', ar: 'لازم شيل نظاراتي؟', en: 'Do I need to remove my glasses?' }
        ]
      },
      {
        icon: '📋',
        title: { ar: 'الموظف يعطيك ورقة', en: 'The officer gives you a document', fr: 'L’agent vous remet un document' },
        phrases: [
          { fr: 'Voici le document qui confirme votre démarche.', ar: 'هاي الوثيقة اللي بتأكد إنك عملت الإجراء.', en: 'Here is the document confirming your procedure.' },
          { fr: 'Est-ce que je dois garder ce document ?', ar: 'لازم حافظ على هالوثيقة؟', en: 'Do I need to keep this document?' },
          { fr: 'Oui, gardez-le.', ar: 'إي، حافظ عليه.', en: 'Yes, keep it.' }
        ]
      },
      {
        icon: '📅',
        title: { ar: 'السؤال عن موعد استلام البطاقة', en: 'Asking when to collect the card', fr: 'Demander quand récupérer la carte' },
        phrases: [
          { fr: 'Quand est-ce que je pourrai récupérer ma carte ?', ar: 'إمتى فيني استلم بطاقتي؟', en: 'When will I be able to collect my card?' },
          { fr: 'Est-ce que je recevrai un SMS ou un courrier ?', ar: 'رح توصلني رسالة SMS أو رسالة بالبريد؟', en: 'Will I receive a text message or a letter?' },
          { fr: 'Comment saurai-je que ma carte est prête ?', ar: 'كيف رح أعرف إنو بطاقتي صارت جاهزة؟', en: 'How will I know that my card is ready?' },
          { fr: 'Vous recevrez une convocation pour récupérer votre carte.', ar: 'رح توصلك دعوة/موعد حتى تستلم البطاقة.', en: 'You will receive an appointment notice to collect your card.' },
          { fr: 'D’accord. Est-ce que je dois prendre rendez-vous ?', ar: 'طيب، لازم آخد موعد؟', en: 'Okay. Do I need to make an appointment?' },
          { fr: 'Est-ce que je dois apporter mon passeport ?', ar: 'لازم جيب جواز سفري؟', en: 'Do I need to bring my passport?' }
        ]
      },
      {
        icon: '✈️',
        title: { ar: 'إذا أردت وثيقة سفر', en: 'If you want a travel document', fr: 'Si vous voulez un titre de voyage' },
        phrases: [
          { fr: 'Je voudrais aussi demander un titre de voyage.', ar: 'بدي كمان أطلب وثيقة سفر.', en: 'I would also like to apply for a travel document.' },
          { fr: 'Est-ce que je peux faire cette demande maintenant ?', ar: 'فيني أعمل هالطلب هلأ؟', en: 'Can I make this application now?' },
          { fr: 'Quelles sont les démarches pour obtenir un titre de voyage ?', ar: 'شو الإجراءات للحصول على وثيقة سفر؟', en: 'What are the steps to obtain a travel document?' }
        ]
      },
      {
        icon: '👋',
        title: { ar: 'قبل ما تطلع', en: 'Before you leave', fr: 'Avant de partir' },
        phrases: [
          { fr: 'Est-ce que j’ai d’autres démarches à faire ?', ar: 'في إجراءات تانية لازم أعملها؟', en: 'Are there any other procedures I need to complete?' },
          { fr: 'Est-ce que je dois faire quelque chose auprès de l’OFPRA ?', ar: 'لازم أعمل شي عند الأوفبرا؟', en: 'Do I need to do anything with OFPRA?' },
          { fr: 'Est-ce que je dois garder tous ces documents ?', ar: 'لازم حافظ على كل هالأوراق؟', en: 'Do I need to keep all these documents?' },
          { fr: 'Pouvez-vous me dire ce que je dois faire ensuite ?', ar: 'فيك تخبرني شو لازم أعمل بعدين؟', en: 'Could you tell me what I need to do next?' },
          { fr: 'Merci beaucoup pour votre aide.', ar: 'شكرًا كتير على مساعدتك.', en: 'Thank you very much for your help.' },
          { fr: 'Bonne journée.', ar: 'نهارك سعيد.', en: 'Have a nice day.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'نسخة كاملة أو مستخرج (copie intégrale / extrait)', en: 'Full copy or extract (copie intégrale / extrait)', fr: 'Copie intégrale ou extrait' },
        phrases: [
          { fr: 'Je voudrais une copie intégrale de mon acte de naissance.', ar: 'بدي نسخة كاملة عن شهادة ميلادي.', en: 'I would like a full copy of my birth certificate.' },
          { fr: 'Je voudrais un extrait de mon acte de naissance.', ar: 'بدي مستخرج من شهادة ميلادي.', en: 'I would like an extract from my birth certificate.' },
          { fr: 'Vous avez besoin d’une copie intégrale ou d’un extrait ?', ar: 'بدكم نسخة كاملة ولا مستخرج؟', en: 'Do you need a full copy or an extract?' },
          { fr: 'Je ne sais pas. Quel document dois-je fournir ?', ar: 'ما بعرف. أي وثيقة لازم قدّم؟', en: 'I don’t know. Which document do I need to provide?' }
        ]
      },
      {
        icon: '✉️',
        title: { ar: 'الطوابع البريدية', en: 'Postage stamps', fr: 'Les timbres postaux' },
        phrases: [
          { fr: 'Je voudrais acheter des timbres, s’il vous plaît.', ar: 'بدي اشتري طوابع، لو سمحت.', en: 'I’d like to buy some stamps, please.' },
          { fr: 'Vous avez des timbres pour une lettre ?', ar: 'عندكم طوابع للرسائل؟', en: 'Do you have stamps for a letter?' },
          { fr: 'Combien coûte un timbre ?', ar: 'قديش سعر الطابع؟', en: 'How much does a stamp cost?' },
          { fr: 'Je voudrais un timbre pour une lettre en France.', ar: 'بدي طابع لرسالة داخل فرنسا.', en: 'I’d like a stamp for a letter within France.' },
          { fr: 'Je voudrais envoyer cette lettre.', ar: 'بدي ابعت هالرسالة.', en: 'I’d like to send this letter.' },
          { fr: 'Quel timbre dois-je mettre ?', ar: 'أي طابع لازم حط؟', en: 'Which stamp should I put on it?' },
          { fr: 'Est-ce que ce timbre suffit ?', ar: 'هالطابع بيكفي؟', en: 'Is this stamp enough?' },
          { fr: 'Je voudrais un timbre prioritaire.', ar: 'بدي طابع لإرسال سريع/أولوية.', en: 'I’d like a priority stamp.' },
          { fr: 'Je voudrais un timbre pour l’étranger.', ar: 'بدي طابع لإرسال رسالة للخارج.', en: 'I’d like a stamp for sending a letter abroad.' },
          { fr: 'Vous pouvez me dire où je dois mettre le timbre ?', ar: 'فيك تقلي وين لازم حط الطابع؟', en: 'Can you tell me where I should put the stamp?' },
          { fr: 'Est-ce que je peux acheter des timbres ici ?', ar: 'فيني اشتري طوابع من هون؟', en: 'Can I buy stamps here?' }
        ]
      },
      {
        icon: '🪙',
        title: { ar: 'الطابع الضريبي — timbre fiscal', en: 'The tax stamp — timbre fiscal', fr: 'Le timbre fiscal' },
        phrases: [
          { fr: 'Je dois acheter un timbre fiscal pour mon titre de séjour.', ar: 'لازم اشتري طابع ضريبي لبطاقة الإقامة.', en: 'I need to buy a tax stamp for my residence permit.' },
          { fr: 'Où est-ce que je peux acheter un timbre fiscal ?', ar: 'وين فيني اشتري طابع ضريبي؟', en: 'Where can I buy a tax stamp?' },
          { fr: 'Combien coûte le timbre fiscal ?', ar: 'قديش قيمة الطابع الضريبي؟', en: 'How much is the tax stamp?' },
          { fr: 'Est-ce que je peux acheter le timbre fiscal en ligne ?', ar: 'فيني اشتري الطابع الضريبي أونلاين؟', en: 'Can I buy the tax stamp online?' },
          { fr: 'J’ai acheté le timbre fiscal.', ar: 'اشتريت الطابع الضريبي.', en: 'I bought the tax stamp.' },
          { fr: 'Voici mon timbre fiscal.', ar: 'هاد هو الطابع الضريبي تبعي.', en: 'Here is my tax stamp.' },
          { fr: 'Est-ce que je dois payer le timbre fiscal maintenant ?', ar: 'لازم ادفع الطابع الضريبي هلق؟', en: 'Do I have to pay the tax stamp now?' }
        ]
      },
      {
        icon: '🔁',
        title: { ar: 'تجديد الإقامة — عند الدخول', en: 'Permit renewal — on arrival', fr: 'Renouvellement — à l’entrée' },
        phrases: [
          { fr: 'Bonjour, j’ai rendez-vous pour le renouvellement de mon titre de séjour.', ar: 'مرحبا، عندي موعد لتجديد بطاقة الإقامة.', en: 'Hello, I have an appointment to renew my residence permit.' },
          { fr: 'Voici ma convocation.', ar: 'هاي ورقة الموعد تبعي.', en: 'Here is my appointment notice.' },
          { fr: 'Vous avez votre titre de séjour actuel ?', ar: 'معك بطاقة إقامتك الحالية؟', en: 'Do you have your current residence permit?' },
          { fr: 'Oui, voici ma carte de séjour.', ar: 'إي، هاي بطاقة إقامتي.', en: 'Yes, here is my residence permit.' }
        ]
      },
      {
        icon: '🔁',
        title: { ar: 'تجديد الإقامة — التحقق من المعلومات', en: 'Permit renewal — checking details', fr: 'Renouvellement — vérification' },
        phrases: [
          { fr: 'Pouvez-vous confirmer votre nom et votre prénom ?', ar: 'فيك تأكدلي اسمك وكنيتك؟', en: 'Can you confirm your first and last name?' },
          { fr: 'Je m’appelle Mohammad Haj.', ar: 'اسمي محمد حاج.', en: 'My name is Mohammad Haj.' },
          { fr: 'Quelle est votre date de naissance ?', ar: 'شو تاريخ ميلادك؟', en: 'What is your date of birth?' },
          { fr: 'Je suis né le 15 juillet 1989.', ar: 'أنا مولود بـ15 تموز 1989.', en: 'I was born on July 15, 1989.' },
          { fr: 'Quelle est votre adresse actuelle ?', ar: 'شو عنوانك الحالي؟', en: 'What is your current address?' },
          { fr: 'J’ai changé d’adresse récemment.', ar: 'غيّرت عنواني مؤخراً.', en: 'I recently changed my address.' }
        ]
      },
      {
        icon: '🔁',
        title: { ar: 'تجديد الإقامة — الوثائق', en: 'Permit renewal — documents', fr: 'Renouvellement — documents' },
        phrases: [
          { fr: 'Vous avez votre passeport ?', ar: 'معك جواز سفرك؟', en: 'Do you have your passport?' },
          { fr: 'Oui, voici mon passeport.', ar: 'إي، هاد جواز سفري.', en: 'Yes, here is my passport.' },
          { fr: 'Vous avez un justificatif de domicile ?', ar: 'معك إثبات سكن؟', en: 'Do you have proof of address?' },
          { fr: 'Oui, voici mon justificatif de domicile.', ar: 'إي، هاد إثبات السكن.', en: 'Yes, here is my proof of address.' },
          { fr: 'Vous avez votre acte de naissance ?', ar: 'معك شهادة الميلاد؟', en: 'Do you have your birth certificate?' },
          { fr: 'Oui, voici mon acte de naissance.', ar: 'إي، هاي شهادة ميلادي.', en: 'Yes, here is my birth certificate.' },
          { fr: 'Vous avez vos photos d’identité ?', ar: 'معك صور شخصية؟', en: 'Do you have your ID photos?' },
          { fr: 'Oui, les voici.', ar: 'إي، هاي هني.', en: 'Yes, here they are.' },
          { fr: 'Nous allons prendre vos empreintes.', ar: 'رح ناخد بصماتك.', en: 'We’re going to take your fingerprints.' },
          { fr: 'Regardez l’appareil photo, s’il vous plaît.', ar: 'تطلع بالكاميرا لو سمحت.', en: 'Please look at the camera.' },
          { fr: 'Est-ce que votre adresse a changé ?', ar: 'هل تغيّر عنوانك؟', en: 'Has your address changed?' },
          { fr: 'Oui, mon adresse a changé.', ar: 'إي، عنواني تغيّر.', en: 'Yes, my address has changed.' },
          { fr: 'Je suis actuellement domicilié à la Croix-Rouge.', ar: 'حالياً أنا مسجّل عنواني عند الصليب الأحمر.', en: 'I am currently domiciled with the Red Cross.' }
        ]
      },
      {
        icon: '🔁',
        title: { ar: 'تجديد الإقامة — الدفع وعدم الفهم', en: 'Permit renewal — payment and comprehension', fr: 'Renouvellement — paiement et compréhension' },
        phrases: [
          { fr: 'Est-ce que je dois acheter un timbre fiscal ?', ar: 'لازم اشتري طابع ضريبي؟', en: 'Do I need to buy a tax stamp?' },
          { fr: 'Combien dois-je payer ?', ar: 'قديش لازم ادفع؟', en: 'How much do I have to pay?' },
          { fr: 'J’ai déjà acheté le timbre fiscal.', ar: 'أنا اشتريت الطابع الضريبي من قبل.', en: 'I have already bought the tax stamp.' },
          { fr: 'Voici le justificatif du timbre fiscal.', ar: 'هاد إثبات دفع الطابع الضريبي.', en: 'Here is the tax-stamp payment receipt.' },
          { fr: 'Je parle français, mais je ne comprends pas très bien.', ar: 'بحكي فرنسي، بس ما بفهم منيح.', en: 'I speak French, but I don’t understand very well.' },
          { fr: 'Pouvez-vous parler plus lentement, s’il vous plaît ?', ar: 'فيك تحكي أبطأ شوي لو سمحت؟', en: 'Could you speak more slowly, please?' },
          { fr: 'Pouvez-vous répéter, s’il vous plaît ?', ar: 'فيك تعيد لو سمحت؟', en: 'Could you repeat, please?' },
          { fr: 'Pouvez-vous me l’écrire, s’il vous plaît ?', ar: 'فيك تكتبلي ياها لو سمحت؟', en: 'Could you write it down for me, please?' }
        ]
      },
      {
        icon: '🔁',
        title: { ar: 'تجديد الإقامة — في نهاية الموعد', en: 'Permit renewal — end of the appointment', fr: 'Renouvellement — fin du rendez-vous' },
        phrases: [
          { fr: 'Est-ce que mon dossier est complet ?', ar: 'ملفي كامل؟', en: 'Is my application complete?' },
          { fr: 'Est-ce qu’il manque un document ?', ar: 'ناقص شي ورقة؟', en: 'Is any document missing?' },
          { fr: 'Quand est-ce que je recevrai ma nouvelle carte ?', ar: 'إمتى رح استلم بطاقتي الجديدة؟', en: 'When will I receive my new card?' },
          { fr: 'Comment saurai-je que ma carte est prête ?', ar: 'كيف رح أعرف إنو البطاقة صارت جاهزة؟', en: 'How will I know that my card is ready?' },
          { fr: 'Est-ce que je recevrai un SMS ou un courrier ?', ar: 'رح يوصلني SMS ولا رسالة بالبريد؟', en: 'Will I receive a text message or a letter?' },
          { fr: 'Est-ce que je dois prendre un autre rendez-vous ?', ar: 'لازم آخد موعد تاني؟', en: 'Do I need to make another appointment?' },
          { fr: 'Merci beaucoup. Bonne journée.', ar: 'شكراً كتير، نهارك سعيد.', en: 'Thank you very much. Have a nice day.' }
        ]
      },
      {
        icon: '🏛️',
        title: { ar: 'مواقف متكررة — عند الاستقبال', en: 'Recurring situations — at reception', fr: 'Situations fréquentes — à l’accueil' },
        phrases: [
          { fr: 'Bonjour, vous avez rendez-vous ?', ar: 'مرحبا، عندك موعد؟', en: 'Hello, do you have an appointment?' },
          { fr: 'Oui, j’ai rendez-vous pour renouveler mon titre de séjour.', ar: 'إي، عندي موعد لتجديد بطاقة الإقامة.', en: 'Yes, I have an appointment to renew my residence permit.' },
          { fr: 'Votre convocation, s’il vous plaît.', ar: 'ورقة الموعد لو سمحت.', en: 'Your appointment notice, please.' },
          { fr: 'La voici.', ar: 'هاي هي.', en: 'Here it is.' }
        ]
      },
      {
        icon: '⏰',
        title: { ar: 'مواقف متكررة — الوصول متأخراً', en: 'Recurring situations — arriving late', fr: 'Situations fréquentes — arriver en retard' },
        phrases: [
          { fr: 'Vous êtes en retard.', ar: 'إنت متأخر.', en: 'You’re late.' },
          { fr: 'Je suis désolé, j’ai eu un problème de transport.', ar: 'آسف، صار معي مشكلة بالمواصلات.', en: 'I’m sorry, I had a transportation problem.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'مواقف متكررة — نسيان وثيقة', en: 'Recurring situations — a missing document', fr: 'Situations fréquentes — un document manquant' },
        phrases: [
          { fr: 'Il vous manque un document.', ar: 'ناقصك ورقة.', en: 'You’re missing a document.' },
          { fr: 'Quel document me manque-t-il ?', ar: 'أي ورقة ناقصة؟', en: 'Which document am I missing?' },
          { fr: 'Est-ce que je peux vous l’envoyer plus tard ?', ar: 'فيني ابعتلك ياها بعدين؟', en: 'Can I send it to you later?' },
          { fr: 'Votre dossier n’est pas complet.', ar: 'ملفك مو كامل.', en: 'Your application is incomplete.' },
          { fr: 'Qu’est-ce qui manque dans mon dossier ?', ar: 'شو ناقص بملفي؟', en: 'What is missing from my application?' },
          { fr: 'Est-ce que je dois prendre un autre rendez-vous ?', ar: 'لازم آخد موعد تاني؟', en: 'Do I need another appointment?' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'مواقف متكررة — تغيير العنوان', en: 'Recurring situations — change of address', fr: 'Situations fréquentes — changement d’adresse' },
        phrases: [
          { fr: 'Vous avez changé d’adresse ?', ar: 'غيّرت عنوانك؟', en: 'Have you changed your address?' },
          { fr: 'Oui, j’ai changé d’adresse.', ar: 'إي، غيّرت عنواني.', en: 'Yes, I changed my address.' },
          { fr: 'Voici mon justificatif de domicile.', ar: 'هاد إثبات السكن تبعي.', en: 'Here is my proof of address.' }
        ]
      },
      {
        icon: '⚠️',
        title: { ar: 'مواقف متكررة — مشكلة بالاسم أو تاريخ الميلاد', en: 'Recurring situations — name or birth-date error', fr: 'Situations fréquentes — erreur de nom ou de date' },
        phrases: [
          { fr: 'Vérifiez vos informations, s’il vous plaît.', ar: 'تأكد من معلوماتك لو سمحت.', en: 'Please check your information.' },
          { fr: 'Il y a une erreur sur mon nom.', ar: 'في خطأ باسمي.', en: 'There is an error in my name.' },
          { fr: 'Ma date de naissance est incorrecte.', ar: 'تاريخ ميلادي غلط.', en: 'My date of birth is incorrect.' },
          { fr: 'Comment puis-je faire corriger cette erreur ?', ar: 'كيف فيني صحح هالخطأ؟', en: 'How can I correct this error?' }
        ]
      },
      {
        icon: '🖐️',
        title: { ar: 'مواقف متكررة — البصمات والصورة', en: 'Recurring situations — fingerprints and photo', fr: 'Situations fréquentes — empreintes et photo' },
        phrases: [
          { fr: 'Nous allons prendre vos empreintes.', ar: 'رح ناخد بصماتك.', en: 'We’re going to take your fingerprints.' },
          { fr: 'Posez votre doigt ici, s’il vous plaît.', ar: 'حط إصبعك هون لو سمحت.', en: 'Put your finger here, please.' },
          { fr: 'Regardez l’appareil photo.', ar: 'تطلع بالكاميرا.', en: 'Look at the camera.' }
        ]
      },
      {
        icon: '✍️',
        title: { ar: 'مواقف متكررة — طلب التوقيع', en: 'Recurring situations — signing', fr: 'Situations fréquentes — la signature' },
        phrases: [
          { fr: 'Vous devez signer ici.', ar: 'لازم توقّع هون.', en: 'You need to sign here.' },
          { fr: 'Où dois-je signer ?', ar: 'وين لازم وقّع؟', en: 'Where do I need to sign?' },
          { fr: 'Est-ce que je dois signer ici ?', ar: 'لازم وقّع هون؟', en: 'Do I need to sign here?' }
        ]
      },
      {
        icon: '🪙',
        title: { ar: 'مواقف متكررة — طلب الطابع الضريبي', en: 'Recurring situations — the tax stamp', fr: 'Situations fréquentes — le timbre fiscal' },
        phrases: [
          { fr: 'Vous devez fournir un timbre fiscal.', ar: 'لازم تقدم طابع ضريبي.', en: 'You need to provide a tax stamp.' },
          { fr: 'Combien dois-je payer ?', ar: 'قديش لازم ادفع؟', en: 'How much do I have to pay?' },
          { fr: 'Voici mon timbre fiscal.', ar: 'هاد الطابع الضريبي تبعي.', en: 'Here is my tax stamp.' }
        ]
      },
      {
        icon: '⏳',
        title: { ar: 'مواقف متكررة — البطاقة ليست جاهزة', en: 'Recurring situations — the card isn’t ready', fr: 'Situations fréquentes — la carte n’est pas prête' },
        phrases: [
          { fr: 'Votre carte n’est pas encore prête.', ar: 'بطاقتك لسا مو جاهزة.', en: 'Your card isn’t ready yet.' },
          { fr: 'Comment saurai-je quand elle sera prête ?', ar: 'كيف رح أعرف وقت تصير جاهزة؟', en: 'How will I know when it’s ready?' },
          { fr: 'Vous recevrez un SMS.', ar: 'رح يوصلك SMS.', en: 'You’ll receive a text message.' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'مواقف متكررة — استلام بطاقة الإقامة', en: 'Recurring situations — collecting the permit', fr: 'Situations fréquentes — récupérer le titre de séjour' },
        phrases: [
          { fr: 'Je viens récupérer mon titre de séjour.', ar: 'جاي استلم بطاقة إقامتي.', en: 'I’m here to collect my residence permit.' },
          { fr: 'Votre pièce d’identité, s’il vous plaît.', ar: 'وثيقة هويتك لو سمحت.', en: 'Your ID, please.' },
          { fr: 'Voici ma pièce d’identité.', ar: 'هاي وثيقة هويتي.', en: 'Here is my ID.' },
          { fr: 'Signez ici, s’il vous plaît.', ar: 'وقّع هون لو سمحت.', en: 'Please sign here.' },
          { fr: 'Voici votre titre de séjour.', ar: 'هاي بطاقة إقامتك.', en: 'Here is your residence permit.' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'مواقف متكررة — إذا ما فهمت الموظف', en: 'Recurring situations — if you don’t understand', fr: 'Situations fréquentes — si vous ne comprenez pas' },
        phrases: [
          { fr: 'Je n’ai pas bien compris.', ar: 'ما فهمت منيح.', en: 'I didn’t understand well.' },
          { fr: 'Pouvez-vous répéter, s’il vous plaît ?', ar: 'فيك تعيد لو سمحت؟', en: 'Could you repeat, please?' },
          { fr: 'Pouvez-vous parler plus lentement ?', ar: 'فيك تحكي أبطأ شوي؟', en: 'Could you speak more slowly?' },
          { fr: 'Pouvez-vous me montrer où je dois signer ?', ar: 'فيك تفرجيني وين لازم وقّع؟', en: 'Could you show me where I need to sign?' },
          { fr: 'Pouvez-vous me l’écrire, s’il vous plaît ?', ar: 'فيك تكتبلي ياها لو سمحت؟', en: 'Could you write it down for me, please?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم 5 جمل للمحافظة', en: 'Top 5 phrases for the prefecture', fr: 'Top 5 des phrases pour la préfecture' },
        phrases: [
          { fr: 'J’ai rendez-vous pour mon titre de séjour.', ar: 'عندي موعد بخصوص بطاقة إقامتي.', en: 'I have an appointment for my residence permit.' },
          { fr: 'Voici ma convocation.', ar: 'هاي ورقة الموعد.', en: 'Here is my appointment notice.' },
          { fr: 'Est-ce que mon dossier est complet ?', ar: 'هل ملفي كامل؟', en: 'Is my application complete?' },
          { fr: 'Qu’est-ce qui manque ?', ar: 'شو الناقص؟', en: 'What is missing?' },
          { fr: 'Pouvez-vous parler plus lentement, s’il vous plaît ?', ar: 'فيك تحكي أبطأ شوي لو سمحت؟', en: 'Could you speak more slowly, please?' }
        ]
      }
    ]
  },
  {
    id: 'caf',
    icon: '🤝',
    name: { ar: 'CAF — المساعدات والإعانات', en: 'CAF — benefits and allowances', fr: 'La CAF — aides et prestations' },
    desc: {
      ar: 'فتح الملف، مساعدة السكن، RSA، Prime d’activité، التصريح الفصلي، تغيير العنوان والحساب البنكي',
      en: 'Opening a file, housing assistance, RSA, Prime d’activité, quarterly declarations, address and bank changes',
      fr: 'Ouverture de dossier, aide au logement, RSA, Prime d’activité, déclaration trimestrielle, changements d’adresse et de RIB'
    },
    sections: [
      {
        icon: '🏢',
        title: { ar: 'عند الدخول إلى CAF', en: 'Entering CAF', fr: 'En entrant à la Caf' },
        phrases: [
          { fr: 'Bonjour, j’ai rendez-vous avec la Caf.', ar: 'مرحبا، عندي موعد مع الكاف.', en: 'Hello, I have an appointment with CAF.' },
          { fr: 'Je viens pour faire une démarche auprès de la Caf.', ar: 'جاي أعمل معاملة عند الكاف.', en: 'I’m here to complete a procedure with CAF.' },
          { fr: 'Voici ma convocation.', ar: 'هاي ورقة الموعد.', en: 'Here is my appointment notice.' },
          { fr: 'Je voudrais avoir des informations sur mes droits.', ar: 'بدي معلومات عن حقوقي والمساعدات اللي ممكن آخدها.', en: 'I’d like information about the benefits I may be entitled to.' }
        ]
      },
      {
        icon: '👤',
        title: { ar: 'إنشاء حساب CAF', en: 'Creating a CAF account', fr: 'Créer un compte Caf' },
        phrases: [
          { fr: 'Je voudrais créer un compte Caf.', ar: 'بدي أعمل حساب CAF.', en: 'I’d like to create a CAF account.' },
          { fr: 'Comment puis-je créer mon compte ?', ar: 'كيف فيني أعمل حسابي؟', en: 'How can I create my account?' },
          { fr: 'Je n’arrive pas à créer mon compte.', ar: 'ما عم اقدر أعمل حساب.', en: 'I can’t create my account.' },
          { fr: 'Je n’arrive pas à me connecter à mon compte.', ar: 'ما عم اقدر فوت على حسابي.', en: 'I can’t log into my account.' },
          { fr: 'J’ai oublié mon mot de passe.', ar: 'نسيت كلمة السر.', en: 'I forgot my password.' },
          { fr: 'Je n’ai pas reçu le code de connexion.', ar: 'ما وصلني كود الدخول.', en: 'I didn’t receive the login code.' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'مساعدة السكن — Aide au logement', en: 'Housing assistance — Aide au logement', fr: 'Aide au logement' },
        phrases: [
          { fr: 'Je voudrais faire une demande d’aide au logement.', ar: 'بدي قدم على مساعدة السكن.', en: 'I’d like to apply for housing assistance.' },
          { fr: 'Est-ce que j’ai droit à une aide au logement ?', ar: 'إلي حق بمساعدة للسكن؟', en: 'Am I eligible for housing assistance?' },
          { fr: 'Je suis locataire.', ar: 'أنا مستأجر.', en: 'I’m a tenant.' },
          { fr: 'Voici mon contrat de location.', ar: 'هاد عقد الإيجار تبعي.', en: 'Here is my rental agreement.' },
          { fr: 'Voici ma quittance de loyer.', ar: 'هاي وصل الإيجار.', en: 'Here is my rent receipt.' },
          { fr: 'Voici mon justificatif de domicile.', ar: 'هاد إثبات السكن.', en: 'Here is my proof of address.' },
          { fr: 'Mon loyer est de 628 euros par mois.', ar: 'إيجاري 628 يورو بالشهر.', en: 'My rent is 628 euros per month.' },
          { fr: 'Je ne reçois plus d’aide au logement.', ar: 'ما عاد عم آخد مساعدة سكن.', en: 'I’m no longer receiving housing assistance.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'إذا طلبوا وثائق', en: 'If they ask for documents', fr: 'Si on demande des documents' },
        phrases: [
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدمها؟', en: 'What documents do I need to provide?' },
          { fr: 'Est-ce qu’il manque un document ?', ar: 'في شي ورقة ناقصة؟', en: 'Is any document missing?' },
          { fr: 'Je peux vous envoyer le document en ligne ?', ar: 'فيني ابعتلكم الورقة أونلاين؟', en: 'Can I send you the document online?' },
          { fr: 'Je viens de déposer le document sur mon compte Caf.', ar: 'هلأ رفعت الورقة على حسابي بالـCAF.', en: 'I just uploaded the document to my CAF account.' },
          { fr: 'Pouvez-vous me confirmer que vous avez reçu le document ?', ar: 'فيكم تأكدولي إنكم استلمتوا الورقة؟', en: 'Can you confirm that you received the document?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — نظرة عامة', en: 'RSA — overview', fr: 'RSA — aperçu' },
        phrases: [
          { fr: 'Je voudrais savoir si je peux bénéficier du RSA.', ar: 'بدي أعرف إذا إلي حق بالـRSA.', en: 'I’d like to know if I’m eligible for RSA.' },
          { fr: 'Je voudrais faire une demande de RSA.', ar: 'بدي قدم على RSA.', en: 'I’d like to apply for RSA.' },
          { fr: 'Pourquoi mon RSA a-t-il été arrêté ?', ar: 'ليش توقف الـRSA تبعي؟', en: 'Why was my RSA stopped?' },
          { fr: 'Je ne reçois plus le RSA.', ar: 'ما عاد عم آخد RSA.', en: 'I’m no longer receiving RSA.' },
          { fr: 'Est-ce que je peux refaire une demande de RSA ?', ar: 'فيني قدم طلب RSA من جديد؟', en: 'Can I apply for RSA again?' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — نظرة عامة', en: 'Prime d’activité — overview', fr: 'Prime d’activité — aperçu' },
        phrases: [
          { fr: 'Je voudrais savoir si j’ai droit à la Prime d’activité.', ar: 'بدي أعرف إذا إلي حق بالـPrime d’activité.', en: 'I’d like to know if I’m eligible for the activity bonus.' },
          { fr: 'Je travaille actuellement.', ar: 'أنا حالياً عم اشتغل.', en: 'I’m currently working.' },
          { fr: 'Voici mes bulletins de salaire.', ar: 'هاي كشوفات راتبي.', en: 'Here are my payslips.' },
          { fr: 'Comment déclarer mon salaire ?', ar: 'كيف لازم صرّح عن راتبي؟', en: 'How do I declare my salary?' },
          { fr: 'Quel montant dois-je déclarer ?', ar: 'أي مبلغ لازم صرّح عنه؟', en: 'Which amount should I declare?' },
          { fr: 'Est-ce que je dois déclarer le montant net social ?', ar: 'لازم صرّح عن الـmontant net social؟', en: 'Do I need to declare the net social amount?' }
        ]
      },
      {
        icon: '🔄',
        title: { ar: 'التصريح كل 3 أشهر', en: 'The quarterly declaration', fr: 'La déclaration trimestrielle' },
        phrases: [
          { fr: 'Je dois faire ma déclaration trimestrielle.', ar: 'لازم أعمل التصريح كل 3 أشهر.', en: 'I need to complete my quarterly declaration.' },
          { fr: 'Quand dois-je faire ma déclaration ?', ar: 'إمتى لازم أعمل التصريح؟', en: 'When do I need to make my declaration?' },
          { fr: 'J’ai oublié de faire ma déclaration trimestrielle.', ar: 'نسيت أعمل التصريح الفصلي.', en: 'I forgot to complete my quarterly declaration.' },
          { fr: 'Ma déclaration est préremplie.', ar: 'التصريح تبعي معبّى مسبقاً.', en: 'My declaration is pre-filled.' },
          { fr: 'Je voudrais vérifier les montants préremplis.', ar: 'بدي أتأكد من المبالغ المعبّاية مسبقاً.', en: 'I’d like to check the pre-filled amounts.' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'تغيير الحساب البنكي', en: 'Changing bank details', fr: 'Changer de RIB' },
        phrases: [
          { fr: 'Je voudrais changer mes coordonnées bancaires.', ar: 'بدي غيّر معلومات حسابي البنكي.', en: 'I’d like to change my bank details.' },
          { fr: 'Voici mon nouveau RIB.', ar: 'هاد الـRIB الجديد تبعي.', en: 'Here are my new bank account details.' },
          { fr: 'Sur quel compte allez-vous verser mes prestations ?', ar: 'على أي حساب رح تحولوا المساعدات؟', en: 'Which account will you pay my benefits into?' }
        ]
      },
      {
        icon: '📍',
        title: { ar: 'تغيير العنوان والانتقال', en: 'Changing address and moving', fr: 'Changement d’adresse et déménagement' },
        phrases: [
          { fr: 'Je viens de changer d’adresse.', ar: 'أنا غيرت عنواني مؤخراً.', en: 'I recently changed my address.' },
          { fr: 'Je voudrais déclarer mon changement d’adresse.', ar: 'بدي صرّح عن تغيير عنواني.', en: 'I’d like to report my change of address.' },
          { fr: 'Je suis actuellement domicilié à la Croix-Rouge.', ar: 'حالياً أنا عامل توطين/دوميسيلياسيون عند الصليب الأحمر.', en: 'I’m currently domiciled with the Red Cross.' },
          { fr: 'Est-ce que l’attestation de domiciliation de la Croix-Rouge est acceptée ?', ar: 'شهادة التوطين من الصليب الأحمر مقبولة؟', en: 'Is the Red Cross domiciliation certificate accepted?' },
          { fr: 'Je viens de déménager.', ar: 'أنا نقلت بيت جديد.', en: 'I’ve just moved.' },
          { fr: 'Je dois déclarer mon nouveau logement.', ar: 'لازم صرّح عن السكن الجديد.', en: 'I need to declare my new accommodation.' },
          { fr: 'Mon nouveau loyer est de … euros.', ar: 'إيجاري الجديد … يورو.', en: 'My new rent is … euros.' },
          { fr: 'Est-ce que mon aide au logement va changer ?', ar: 'هل مساعدة السكن رح تتغير؟', en: 'Will my housing assistance change?' }
        ]
      },
      {
        icon: '⏳',
        title: { ar: 'إذا تأخرت المعاملة أو لم يصل الدفع', en: 'If the application is delayed or payment missing', fr: 'Si le dossier traîne ou le paiement manque' },
        phrases: [
          { fr: 'Mon dossier est toujours en cours de traitement.', ar: 'ملفي لسا قيد المعالجة.', en: 'My application is still being processed.' },
          { fr: 'Depuis combien de temps mon dossier est-il en cours de traitement ?', ar: 'من إمتى وملفي قيد المعالجة؟', en: 'How long has my application been under review?' },
          { fr: 'Est-ce que vous pouvez vérifier l’état de mon dossier ?', ar: 'فيكم تتأكدوا من وضع ملفي؟', en: 'Can you check the status of my application?' },
          { fr: 'Je n’ai pas encore reçu de réponse.', ar: 'لسا ما وصلني جواب.', en: 'I haven’t received an answer yet.' },
          { fr: 'Est-ce qu’il manque quelque chose à mon dossier ?', ar: 'في شي ناقص بملفي؟', en: 'Is anything missing from my application?' },
          { fr: 'Je n’ai pas reçu mon paiement.', ar: 'ما وصلني الدفع.', en: 'I haven’t received my payment.' },
          { fr: 'Je n’ai pas reçu mon allocation ce mois-ci.', ar: 'ما وصلتني المساعدة هالشهر.', en: 'I haven’t received my benefit this month.' },
          { fr: 'Pouvez-vous vérifier mon dossier ?', ar: 'فيكم تتأكدوا من ملفي؟', en: 'Can you check my file?' },
          { fr: 'Quand vais-je recevoir le paiement ?', ar: 'إمتى رح يوصلني الدفع؟', en: 'When will I receive the payment?' }
        ]
      },
      {
        icon: '📱',
        title: { ar: 'رسالة من CAF وشهادات Attestation', en: 'Messages from CAF and certificates', fr: 'Courriers de la Caf et attestations' },
        phrases: [
          { fr: 'J’ai reçu un message de la Caf.', ar: 'وصلتني رسالة من الكاف.', en: 'I received a message from CAF.' },
          { fr: 'Je ne comprends pas ce message.', ar: 'ما فهمت هالرسالة.', en: 'I don’t understand this message.' },
          { fr: 'Pouvez-vous m’expliquer ce que je dois faire ?', ar: 'فيكم تشرحولي شو لازم أعمل؟', en: 'Can you explain what I need to do?' },
          { fr: 'Est-ce que je dois répondre à ce message ?', ar: 'لازم رد على هالرسالة؟', en: 'Do I need to reply to this message?' },
          { fr: 'Je voudrais télécharger une attestation.', ar: 'بدي نزّل شهادة من CAF.', en: 'I’d like to download a certificate.' },
          { fr: 'J’ai besoin d’une attestation de paiement.', ar: 'بدي شهادة تثبت الدفعات.', en: 'I need a payment certificate.' },
          { fr: 'J’ai besoin d’une attestation de quotient familial.', ar: 'بدي شهادة الـquotient familial.', en: 'I need a family quotient certificate.' },
          { fr: 'J’ai besoin d’une attestation pour mon dossier.', ar: 'بدي شهادة لملفي.', en: 'I need a certificate for my application.' }
        ]
      },
      {
        icon: '🛑',
        title: { ar: 'إذا توقف ملفك', en: 'If your file is suspended', fr: 'Si votre dossier est suspendu' },
        phrases: [
          { fr: 'Mon dossier a été suspendu.', ar: 'ملفي توقف.', en: 'My application has been suspended.' },
          { fr: 'Pourquoi mes prestations ont-elles été suspendues ?', ar: 'ليش توقفت مساعداتي؟', en: 'Why have my benefits been suspended?' },
          { fr: 'Que dois-je faire pour rétablir mes droits ?', ar: 'شو لازم أعمل ليرجعوا حقوقي؟', en: 'What do I need to do to restore my benefits?' }
        ]
      },
      {
        icon: '📞',
        title: { ar: 'الاتصال بالـCAF', en: 'Calling CAF', fr: 'Appeler la Caf' },
        phrases: [
          { fr: 'Bonjour, j’appelle concernant mon dossier Caf.', ar: 'مرحبا، عم اتصل بخصوص ملفي بالـCAF.', en: 'Hello, I’m calling about my CAF file.' },
          { fr: 'Je voudrais parler à quelqu’un concernant mon dossier.', ar: 'بدي احكي مع حدا بخصوص ملفي.', en: 'I’d like to speak to someone about my file.' },
          { fr: 'Pouvez-vous vérifier mon dossier, s’il vous plaît ?', ar: 'فيكم تتأكدوا من ملفي لو سمحت؟', en: 'Could you check my file, please?' },
          { fr: 'Je parle français, mais je ne comprends pas très bien.', ar: 'بحكي فرنسي، بس ما بفهم منيح.', en: 'I speak French, but I don’t understand very well.' },
          { fr: 'Pouvez-vous parler plus lentement, s’il vous plaît ?', ar: 'فيك تحكي أبطأ شوي لو سمحت؟', en: 'Could you speak more slowly, please?' },
          { fr: 'Pouvez-vous répéter, s’il vous plaît ?', ar: 'فيك تعيد لو سمحت؟', en: 'Could you repeat, please?' },
          { fr: 'Pouvez-vous me l’écrire, s’il vous plaît ?', ar: 'فيك تكتبلي ياها لو سمحت؟', en: 'Could you write it down for me, please?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم كلمات CAF', en: 'Key CAF vocabulary', fr: 'Vocabulaire clé de la Caf' },
        phrases: [
          { fr: 'CAF', ar: 'الكاف / صندوق المخصصات العائلية', en: 'Family Allowance Fund' },
          { fr: 'allocataire', ar: 'مستفيد من CAF', en: 'benefit recipient' },
          { fr: 'prestation', ar: 'مساعدة / إعانة', en: 'benefit' },
          { fr: 'aide au logement', ar: 'مساعدة السكن', en: 'housing assistance' },
          { fr: 'APL', ar: 'مساعدة السكن APL', en: 'housing benefit' },
          { fr: 'ALS', ar: 'مساعدة السكن ALS', en: 'housing allowance' },
          { fr: 'RSA', ar: 'دخل التضامن النشط', en: 'minimum-income benefit' },
          { fr: 'Prime d’activité', ar: 'منحة/مكافأة النشاط', en: 'activity bonus' },
          { fr: 'déclaration trimestrielle', ar: 'تصريح كل 3 أشهر', en: 'quarterly declaration' },
          { fr: 'ressources', ar: 'الموارد / الدخل', en: 'income / resources' },
          { fr: 'montant net social', ar: 'المبلغ الصافي الاجتماعي', en: 'net social amount' },
          { fr: 'dossier', ar: 'الملف', en: 'application / file' },
          { fr: 'justificatif', ar: 'إثبات / وثيقة', en: 'supporting document' },
          { fr: 'attestation', ar: 'شهادة / إثبات', en: 'certificate' },
          { fr: 'versement', ar: 'الدفعة / التحويل', en: 'payment' },
          { fr: 'droits', ar: 'الاستحقاقات / الحقوق', en: 'entitlements' },
          { fr: 'suspendu', ar: 'متوقف', en: 'suspended' },
          { fr: 'en cours de traitement', ar: 'قيد المعالجة', en: 'being processed' },
          { fr: 'RIB', ar: 'معلومات الحساب البنكي', en: 'bank details' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — هل إلي حق', en: 'RSA — am I eligible', fr: 'RSA — ai-je droit' },
        phrases: [
          { fr: 'Est-ce que j’ai droit au RSA ?', ar: 'إلي حق بالـRSA؟', en: 'Am I entitled to RSA?' },
          { fr: 'Je voudrais savoir si je peux bénéficier du RSA.', ar: 'بدي أعرف إذا فيني استفيد من الـRSA.', en: 'I’d like to know if I can receive RSA.' },
          { fr: 'Quelles sont les conditions pour bénéficier du RSA ?', ar: 'شو شروط الحصول على RSA؟', en: 'What are the conditions for receiving RSA?' },
          { fr: 'Est-ce que ma situation me permet de bénéficier du RSA ?', ar: 'وضعي بيسمحلي آخد RSA؟', en: 'Does my situation make me eligible for RSA?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — تقديم الطلب', en: 'RSA — applying', fr: 'RSA — faire la demande' },
        phrases: [
          { fr: 'Je voudrais faire une demande de RSA.', ar: 'بدي قدّم طلب RSA.', en: 'I’d like to apply for RSA.' },
          { fr: 'Comment puis-je faire une demande de RSA ?', ar: 'كيف فيني قدّم على RSA؟', en: 'How can I apply for RSA?' },
          { fr: 'Est-ce que je peux faire la demande en ligne ?', ar: 'فيني قدّم الطلب أونلاين؟', en: 'Can I apply online?' },
          { fr: 'Je n’arrive pas à faire ma demande en ligne.', ar: 'ما عم اقدر قدّم الطلب أونلاين.', en: 'I can’t complete my application online.' },
          { fr: 'Je suis déjà allocataire.', ar: 'أنا أصلاً مستفيد من CAF.', en: 'I’m already a CAF beneficiary.' },
          { fr: 'J’ai déjà un compte Caf.', ar: 'عندي حساب CAF من قبل.', en: 'I already have a CAF account.' },
          { fr: 'Je voudrais ajouter une demande de RSA à mon dossier.', ar: 'بدي أضيف طلب RSA على ملفي.', en: 'I’d like to add an RSA application to my file.' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — الوثائق والدخل', en: 'RSA — documents and income', fr: 'RSA — documents et revenus' },
        phrases: [
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدمها؟', en: 'What documents do I need to provide?' },
          { fr: 'Est-ce qu’il manque un document ?', ar: 'في شي ورقة ناقصة؟', en: 'Is any document missing?' },
          { fr: 'Voici mes documents.', ar: 'هاي أوراقي.', en: 'Here are my documents.' },
          { fr: 'Je peux envoyer les documents en ligne ?', ar: 'فيني ابعت الأوراق أونلاين؟', en: 'Can I send the documents online?' },
          { fr: 'J’ai envoyé les documents sur mon compte Caf.', ar: 'بعت الأوراق على حسابي بالـCAF.', en: 'I sent the documents through my CAF account.' },
          { fr: 'Quels revenus dois-je déclarer ?', ar: 'أي دخل لازم صرّح عنه؟', en: 'Which income do I need to declare?' },
          { fr: 'Je dois déclarer mon salaire ?', ar: 'لازم صرّح عن راتبي؟', en: 'Do I have to declare my salary?' },
          { fr: 'Je travaille actuellement.', ar: 'أنا حالياً عم اشتغل.', en: 'I’m currently working.' },
          { fr: 'J’ai un petit salaire.', ar: 'راتبي قليل.', en: 'I have a low income.' },
          { fr: 'Est-ce que je peux avoir le RSA même si je travaille ?', ar: 'فيني آخد RSA حتى لو عم اشتغل؟', en: 'Can I receive RSA even if I work?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — انتهاء عقد العمل والـARE', en: 'RSA — contract ended and ARE', fr: 'RSA — fin de contrat et ARE' },
        phrases: [
          { fr: 'Mon contrat de travail est terminé.', ar: 'عقد عملي انتهى.', en: 'My employment contract has ended.' },
          { fr: 'Mon contrat se termine bientôt.', ar: 'عقدي رح ينتهي قريب.', en: 'My contract is ending soon.' },
          { fr: 'Je n’ai plus de revenus professionnels.', ar: 'ما عاد عندي دخل من العمل.', en: 'I no longer have employment income.' },
          { fr: 'Je voudrais savoir si je peux demander le RSA maintenant.', ar: 'بدي أعرف إذا فيني قدّم على RSA هلق.', en: 'I’d like to know if I can apply for RSA now.' },
          { fr: 'Est-ce que mes droits peuvent être réexaminés après la fin de mon contrat ?', ar: 'ممكن يعيدوا دراسة استحقاقي بعد انتهاء عقدي؟', en: 'Can my eligibility be reassessed after my contract ends?' },
          { fr: 'Je perçois des allocations chômage.', ar: 'عم آخد تعويض بطالة.', en: 'I receive unemployment benefits.' },
          { fr: 'Est-ce que je peux bénéficier du RSA en plus de l’ARE ?', ar: 'فيني آخد RSA بالإضافة لتعويض البطالة؟', en: 'Can I receive RSA in addition to unemployment benefits?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — التصريح وmontant net social', en: 'RSA — declaration and net social amount', fr: 'RSA — déclaration et montant net social' },
        phrases: [
          { fr: 'Je dois faire ma déclaration trimestrielle.', ar: 'لازم أعمل التصريح كل 3 أشهر.', en: 'I have to complete my quarterly declaration.' },
          { fr: 'Quand dois-je faire ma déclaration trimestrielle ?', ar: 'إمتى لازم أعمل التصريح كل 3 أشهر؟', en: 'When do I have to complete my quarterly declaration?' },
          { fr: 'J’ai oublié de faire ma déclaration trimestrielle.', ar: 'نسيت أعمل التصريح الفصلي.', en: 'I forgot to complete my quarterly declaration.' },
          { fr: 'Je voudrais vérifier ma déclaration.', ar: 'بدي أتأكد من التصريح تبعي.', en: 'I’d like to check my declaration.' },
          { fr: 'Qu’est-ce que le montant net social ?', ar: 'شو يعني montant net social؟', en: 'What does “montant net social” mean?' },
          { fr: 'Quel montant dois-je déclarer sur ma déclaration ?', ar: 'أي مبلغ لازم حط بالتصريح؟', en: 'Which amount should I enter on my declaration?' },
          { fr: 'Je voudrais vérifier le montant prérempli.', ar: 'بدي أتأكد من المبلغ المعبّى مسبقاً.', en: 'I’d like to check the pre-filled amount.' },
          { fr: 'Le montant prérempli est incorrect.', ar: 'المبلغ المعبّى مسبقاً غلط.', en: 'The pre-filled amount is incorrect.' },
          { fr: 'Je voudrais modifier le montant.', ar: 'بدي عدّل المبلغ.', en: 'I’d like to change the amount.' },
          { fr: 'J’ai un justificatif.', ar: 'عندي إثبات.', en: 'I have supporting documentation.' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — السكن وعلاقته بالمبلغ', en: 'RSA — housing and the amount', fr: 'RSA — logement et montant' },
        phrases: [
          { fr: 'Vous êtes locataire ?', ar: 'إنت مستأجر؟', en: 'Are you a tenant?' },
          { fr: 'Oui, je suis locataire.', ar: 'إي، أنا مستأجر.', en: 'Yes, I’m a tenant.' },
          { fr: 'Vous payez combien de loyer ?', ar: 'قديش بتدفع إيجار؟', en: 'How much rent do you pay?' },
          { fr: 'Je paie … euros de loyer par mois.', ar: 'بدفع … يورو إيجار بالشهر.', en: 'I pay … euros in rent per month.' },
          { fr: 'Je reçois une aide au logement.', ar: 'عم آخد مساعدة سكن.', en: 'I receive housing assistance.' },
          { fr: 'Est-ce que l’aide au logement réduit mon RSA ?', ar: 'مساعدة السكن بتخفّض الـRSA تبعي؟', en: 'Does housing assistance reduce my RSA?' },
          { fr: 'Comment mon aide au logement est-elle prise en compte pour le RSA ?', ar: 'كيف بينحسب دعم السكن ضمن RSA؟', en: 'How is my housing assistance taken into account for RSA?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — التوقف وغياب الدفع', en: 'RSA — suspension and missing payment', fr: 'RSA — suspension et paiement manquant' },
        phrases: [
          { fr: 'Mon RSA a été suspendu.', ar: 'الـRSA تبعي توقف.', en: 'My RSA has been suspended.' },
          { fr: 'Pourquoi mon RSA a-t-il été suspendu ?', ar: 'ليش توقف الـRSA تبعي؟', en: 'Why was my RSA suspended?' },
          { fr: 'Je voudrais savoir pourquoi mon paiement a été suspendu.', ar: 'بدي أعرف ليش توقف الدفع.', en: 'I’d like to know why the payment was suspended.' },
          { fr: 'Que dois-je faire pour rétablir mes droits ?', ar: 'شو لازم أعمل ليرجعوا حقوقي؟', en: 'What do I need to do to restore my benefits?' },
          { fr: 'Je n’ai pas reçu mon RSA.', ar: 'ما وصلني الـRSA.', en: 'I haven’t received my RSA payment.' },
          { fr: 'Je n’ai pas reçu mon paiement ce mois-ci.', ar: 'ما وصلني الدفع هالشهر.', en: 'I haven’t received my payment this month.' },
          { fr: 'Pouvez-vous vérifier mon dossier, s’il vous plaît ?', ar: 'فيكم تتأكدوا من ملفي لو سمحت؟', en: 'Could you check my file, please?' },
          { fr: 'Quand vais-je recevoir mon paiement ?', ar: 'إمتى رح يوصلني الدفع؟', en: 'When will I receive my payment?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — تغيير الحساب والعنوان والانتقال', en: 'RSA — changing bank, address, moving', fr: 'RSA — changement de RIB, d’adresse, déménagement' },
        phrases: [
          { fr: 'Je voudrais changer mon RIB.', ar: 'بدي غيّر الـRIB تبعي.', en: 'I’d like to change my bank details.' },
          { fr: 'Voici mon nouveau RIB.', ar: 'هاد الـRIB الجديد تبعي.', en: 'Here are my new bank details.' },
          { fr: 'Est-ce que le prochain paiement sera versé sur ce compte ?', ar: 'الدفعة الجاية رح تنزل على هالحساب؟', en: 'Will the next payment be paid into this account?' },
          { fr: 'J’ai changé d’adresse.', ar: 'غيرت عنواني.', en: 'I changed my address.' },
          { fr: 'Je voudrais déclarer mon changement d’adresse.', ar: 'بدي صرّح عن تغيير عنواني.', en: 'I’d like to report my change of address.' },
          { fr: 'Je suis domicilié à la Croix-Rouge.', ar: 'أنا عامل domiciliation عند الصليب الأحمر.', en: 'I’m domiciled with the Red Cross.' },
          { fr: 'Voici mon attestation de domiciliation.', ar: 'هاي شهادة التوطين تبعي.', en: 'Here is my domiciliation certificate.' },
          { fr: 'Je viens de déménager.', ar: 'هلأ نقلت بيت.', en: 'I’ve just moved.' },
          { fr: 'Je dois déclarer mon nouveau logement.', ar: 'لازم صرّح عن بيتي الجديد.', en: 'I need to declare my new accommodation.' },
          { fr: 'Est-ce que mon RSA va changer après mon déménagement ?', ar: 'هل الـRSA رح يتغير بعد نقلي؟', en: 'Will my RSA change after I move?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — الملف قيد المعالجة والمقابلة', en: 'RSA — pending file and the interview', fr: 'RSA — dossier en cours et rendez-vous' },
        phrases: [
          { fr: 'Mon dossier est en cours de traitement.', ar: 'ملفي قيد المعالجة.', en: 'My application is being processed.' },
          { fr: 'Depuis combien de temps mon dossier est-il en cours de traitement ?', ar: 'من إمتى وملفي قيد المعالجة؟', en: 'How long has my application been under review?' },
          { fr: 'Est-ce qu’il manque quelque chose à mon dossier ?', ar: 'في شي ناقص بملفي؟', en: 'Is anything missing from my application?' },
          { fr: 'Quand est-ce que j’aurai une réponse ?', ar: 'إمتى رح يوصلني جواب؟', en: 'When will I get an answer?' },
          { fr: 'Bonjour, j’ai rendez-vous concernant mon dossier RSA.', ar: 'مرحبا، عندي موعد بخصوص ملف الـRSA تبعي.', en: 'Hello, I have an appointment regarding my RSA application.' },
          { fr: 'Je voudrais faire le point sur mon dossier.', ar: 'بدي شوف وين وصل ملفي.', en: 'I’d like to review the status of my file.' },
          { fr: 'Pouvez-vous m’expliquer ma situation ?', ar: 'فيكم تشرحولي وضعي؟', en: 'Can you explain my situation to me?' },
          { fr: 'Est-ce que mes droits sont ouverts ?', ar: 'حقوقي/استحقاقي مفتوح؟', en: 'Are my benefits active?' },
          { fr: 'Quel est le montant de mon RSA ?', ar: 'قديش مبلغ الـRSA تبعي؟', en: 'How much is my RSA?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — الالتزامات والمرافقة (accompagnement)', en: 'RSA — obligations and support', fr: 'RSA — obligations et accompagnement' },
        phrases: [
          { fr: 'Quel accompagnement dois-je suivre ?', ar: 'شو نوع المتابعة اللي لازم أعملها؟', en: 'What support program do I need to follow?' },
          { fr: 'Avec quel organisme dois-je prendre rendez-vous ?', ar: 'مع أي مؤسسة لازم آخد موعد؟', en: 'Which organization do I need to make an appointment with?' },
          { fr: 'Est-ce que je dois m’inscrire à France Travail ?', ar: 'لازم سجّل بـFrance Travail؟', en: 'Do I need to register with France Travail?' },
          { fr: 'Quelles sont mes obligations ?', ar: 'شو التزاماتي؟', en: 'What are my obligations?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — إذا كنت لاجئاً أو طالب لجوء', en: 'RSA — if you are a refugee or asylum seeker', fr: 'RSA — réfugié ou demandeur d’asile' },
        phrases: [
          { fr: 'Je suis reconnu réfugié.', ar: 'أنا معترف فيني كلاجئ.', en: 'I have been recognized as a refugee.' },
          { fr: 'J’ai obtenu la protection subsidiaire.', ar: 'حصلت على الحماية الفرعية.', en: 'I have been granted subsidiary protection.' },
          { fr: 'Voici ma décision de l’OFPRA.', ar: 'هاي قراري من OFPRA.', en: 'Here is my OFPRA decision.' },
          { fr: 'Voici mon titre de séjour.', ar: 'هاي بطاقة إقامتي.', en: 'Here is my residence permit.' },
          { fr: 'Est-ce que je peux faire une demande de RSA avec mon nouveau statut ?', ar: 'فيني قدّم على RSA بعد ما تغير وضعي؟', en: 'Can I apply for RSA with my new status?' },
          { fr: 'Je suis demandeur d’asile. Est-ce que j’ai droit au RSA ?', ar: 'أنا طالب لجوء، إلي حق بالـRSA؟', en: 'I’m an asylum seeker. Am I entitled to RSA?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'RSA — أهم الأسئلة اللي تسألها للموظف', en: 'RSA — key questions to ask the officer', fr: 'RSA — questions clés à poser' },
        phrases: [
          { fr: 'Est-ce que j’ai droit au RSA ?', ar: 'إلي حق بالـRSA؟', en: 'Am I entitled to RSA?' },
          { fr: 'Quel serait le montant de mon RSA ?', ar: 'قديش ممكن يكون مبلغ الـRSA تبعي؟', en: 'How much could my RSA be?' },
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق المطلوبة؟', en: 'Which documents do I need to provide?' },
          { fr: 'Est-ce que mon dossier est complet ?', ar: 'ملفي كامل؟', en: 'Is my application complete?' },
          { fr: 'Est-ce qu’il manque un document ?', ar: 'في ورقة ناقصة؟', en: 'Is any document missing?' },
          { fr: 'Quand vais-je recevoir une réponse ?', ar: 'إمتى رح يوصلني جواب؟', en: 'When will I get an answer?' },
          { fr: 'Quand vais-je recevoir le premier paiement ?', ar: 'إمتى رح توصل أول دفعة؟', en: 'When will the first payment arrive?' },
          { fr: 'Pourquoi mon RSA a-t-il été suspendu ?', ar: 'ليش توقف الـRSA؟', en: 'Why was my RSA suspended?' },
          { fr: 'Que dois-je faire maintenant ?', ar: 'شو لازم أعمل هلق؟', en: 'What do I need to do now?' },
          { fr: 'Quelles sont mes obligations ?', ar: 'شو التزاماتي؟', en: 'What are my obligations?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'كلمات RSA لازم تحفظها', en: 'Key RSA vocabulary', fr: 'Vocabulaire clé du RSA' },
        phrases: [
          { fr: 'RSA', ar: 'دخل التضامن النشط', en: 'Active Solidarity Income' },
          { fr: 'demande de RSA', ar: 'طلب RSA', en: 'RSA application' },
          { fr: 'bénéficiaire', ar: 'مستفيد', en: 'beneficiary' },
          { fr: 'ressources', ar: 'الموارد / الدخل', en: 'resources / income' },
          { fr: 'revenus', ar: 'المداخيل', en: 'income' },
          { fr: 'déclaration trimestrielle', ar: 'التصريح كل 3 أشهر', en: 'quarterly declaration' },
          { fr: 'montant net social', ar: 'المبلغ الصافي الاجتماعي', en: 'net social amount' },
          { fr: 'versement', ar: 'الدفعة', en: 'payment' },
          { fr: 'droit ouvert', ar: 'الاستحقاق مفتوح', en: 'entitlement active' },
          { fr: 'suspendu', ar: 'متوقف', en: 'suspended' },
          { fr: 'en cours de traitement', ar: 'قيد المعالجة', en: 'being processed' },
          { fr: 'justificatif', ar: 'إثبات', en: 'supporting document' },
          { fr: 'RIB', ar: 'معلومات الحساب البنكي', en: 'bank details' },
          { fr: 'accompagnement', ar: 'مرافقة/متابعة', en: 'support' },
          { fr: 'insertion professionnelle', ar: 'الإدماج المهني', en: 'employment integration' },
          { fr: 'changement de situation', ar: 'تغيير في الوضع', en: 'change of circumstances' },
          { fr: 'déclarer', ar: 'يصرّح', en: 'to declare' },
          { fr: 'réexaminer', ar: 'يعيد دراسة الملف', en: 'to reassess' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'كيف تقول "أنا أتلقى الـRSA"', en: 'How to say “I receive RSA”', fr: 'Dire « je perçois le RSA »' },
        phrases: [
          { fr: 'Je perçois le RSA.', ar: 'أنا أتلقى الـRSA.', en: 'I receive RSA.' },
          { fr: 'Je bénéficie du RSA.', ar: 'أنا مستفيد من الـRSA.', en: 'I receive RSA / I benefit from RSA.' },
          { fr: 'Je perçois actuellement le RSA.', ar: 'أنا حالياً عم أتلقى الـRSA.', en: 'I currently receive RSA.' },
          { fr: 'Je touche le RSA.', ar: 'أنا عم آخد RSA.', en: 'I receive RSA.' },
          { fr: 'Je touche le RSA actuellement.', ar: 'حالياً أنا عم آخد RSA.', en: 'I’m currently receiving RSA.' },
          { fr: 'Je ne touche pas le RSA.', ar: 'أنا ما عم آخد RSA.', en: 'I don’t receive RSA.' },
          { fr: 'Je ne touche plus le RSA.', ar: 'ما عاد عم آخد RSA.', en: 'I no longer receive RSA.' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — الاستفسار', en: 'Prime d’activité — asking', fr: 'Prime d’activité — demande' },
        phrases: [
          { fr: 'Je voudrais savoir si j’ai droit à la Prime d’activité.', ar: 'بدي أعرف إذا إلي حق بمكافأة النشاط.', en: 'I’d like to know if I’m eligible for the activity bonus.' },
          { fr: 'Je voudrais faire une demande de Prime d’activité.', ar: 'بدي قدّم طلب مكافأة النشاط.', en: 'I’d like to apply for the activity bonus.' },
          { fr: 'Comment faire une demande de Prime d’activité ?', ar: 'كيف فيني قدّم على مكافأة النشاط؟', en: 'How can I apply for the activity bonus?' },
          { fr: 'Est-ce que je peux bénéficier de la Prime d’activité si je travaille ?', ar: 'فيني استفيد من مكافأة النشاط إذا عم اشتغل؟', en: 'Can I receive the activity bonus if I work?' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — عن العمل', en: 'Prime d’activité — about work', fr: 'Prime d’activité — le travail' },
        phrases: [
          { fr: 'Vous travaillez actuellement ?', ar: 'إنت حالياً عم تشتغل؟', en: 'Are you currently working?' },
          { fr: 'Oui, je travaille actuellement.', ar: 'إي، أنا حالياً عم اشتغل.', en: 'Yes, I’m currently working.' },
          { fr: 'Quel est votre emploi ?', ar: 'شو شغلك؟', en: 'What is your job?' },
          { fr: 'Je travaille dans la préparation de commandes.', ar: 'أنا بشتغل بتحضير الطلبات.', en: 'I work in order preparation.' },
          { fr: 'Je travaille dans le conditionnement.', ar: 'أنا بشتغل بالتوضيب والتغليف.', en: 'I work in packaging.' },
          { fr: 'Vous travaillez à temps plein ou à temps partiel ?', ar: 'بتشتغل دوام كامل ولا جزئي؟', en: 'Do you work full-time or part-time?' },
          { fr: 'Je travaille à temps plein.', ar: 'بشتغل دوام كامل.', en: 'I work full-time.' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — الراتب', en: 'Prime d’activité — salary', fr: 'Prime d’activité — le salaire' },
        phrases: [
          { fr: 'Combien gagnez-vous par mois ?', ar: 'قديش راتبك بالشهر؟', en: 'How much do you earn per month?' },
          { fr: 'Je gagne environ … euros par mois.', ar: 'باخد تقريباً … يورو بالشهر.', en: 'I earn about … euros per month.' },
          { fr: 'Quel montant dois-je déclarer ?', ar: 'أي مبلغ لازم صرّح عنه؟', en: 'What amount do I need to declare?' },
          { fr: 'Je dois déclarer le montant net social ?', ar: 'لازم صرّح عن الـ montant net social؟', en: 'Do I need to declare the net social amount?' },
          { fr: 'Où puis-je trouver le montant net social ?', ar: 'وين فيني لاقي مبلغ الـmontant net social؟', en: 'Where can I find the net social amount?' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — التصريح وتغيّر الراتب', en: 'Prime d’activité — declaration and salary change', fr: 'Prime d’activité — déclaration et changement de salaire' },
        phrases: [
          { fr: 'Je dois faire ma déclaration trimestrielle.', ar: 'لازم أعمل التصريح كل 3 أشهر.', en: 'I have to complete my quarterly declaration.' },
          { fr: 'Quand dois-je faire ma déclaration ?', ar: 'إمتى لازم أعمل التصريح؟', en: 'When do I need to complete my declaration?' },
          { fr: 'Je n’arrive pas à faire ma déclaration en ligne.', ar: 'ما عم اقدر أعمل التصريح أونلاين.', en: 'I can’t complete my declaration online.' },
          { fr: 'Pouvez-vous m’aider à faire ma déclaration ?', ar: 'فيكم تساعدوني أعمل التصريح؟', en: 'Can you help me complete my declaration?' },
          { fr: 'Mon salaire a changé.', ar: 'راتبي تغيّر.', en: 'My salary has changed.' },
          { fr: 'Mon salaire a augmenté.', ar: 'راتبي زاد.', en: 'My salary increased.' },
          { fr: 'Mon salaire a diminué.', ar: 'راتبي نقص.', en: 'My salary decreased.' },
          { fr: 'J’ai changé d’emploi.', ar: 'غيّرت شغلي.', en: 'I changed jobs.' },
          { fr: 'Mon contrat de travail se termine bientôt.', ar: 'عقد عملي رح ينتهي قريب.', en: 'My employment contract is ending soon.' },
          { fr: 'Mon contrat de travail est terminé.', ar: 'عقد عملي انتهى.', en: 'My employment contract has ended.' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — ما عاد عندك عمل', en: 'Prime d’activité — no longer working', fr: 'Prime d’activité — plus d’emploi' },
        phrases: [
          { fr: 'Je ne travaille plus.', ar: 'ما عاد عم اشتغل.', en: 'I’m no longer working.' },
          { fr: 'Je n’ai plus de revenus professionnels.', ar: 'ما عاد عندي دخل من العمل.', en: 'I no longer have employment income.' },
          { fr: 'Est-ce que je dois signaler la fin de mon contrat ?', ar: 'لازم خبّر CAF إنو عقدي انتهى؟', en: 'Do I need to report that my contract has ended?' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — المبلغ والتوقف', en: 'Prime d’activité — amount and suspension', fr: 'Prime d’activité — montant et suspension' },
        phrases: [
          { fr: 'Quel sera le montant de ma Prime d’activité ?', ar: 'قديش رح يكون مبلغ مكافأة النشاط تبعي؟', en: 'How much will my activity bonus be?' },
          { fr: 'Pourquoi le montant a changé ?', ar: 'ليش المبلغ تغيّر؟', en: 'Why did the amount change?' },
          { fr: 'Pourquoi je ne reçois plus la Prime d’activité ?', ar: 'ليش ما عاد عم آخد مكافأة النشاط؟', en: 'Why am I no longer receiving the activity bonus?' },
          { fr: 'Ma Prime d’activité a été suspendue.', ar: 'مكافأة النشاط تبعي توقفت.', en: 'My activity bonus has been suspended.' },
          { fr: 'Je n’ai pas reçu mon paiement.', ar: 'ما وصلني الدفع.', en: 'I haven’t received my payment.' },
          { fr: 'Quand vais-je recevoir mon paiement ?', ar: 'إمتى رح يوصلني المبلغ؟', en: 'When will I receive my payment?' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — مع الـRSA', en: 'Prime d’activité — with RSA', fr: 'Prime d’activité — avec le RSA' },
        phrases: [
          { fr: 'Je touche le RSA. Est-ce que je peux aussi bénéficier de la Prime d’activité ?', ar: 'أنا عم آخد RSA، فيني كمان استفيد من مكافأة النشاط؟', en: 'I receive RSA. Can I also receive the activity bonus?' },
          { fr: 'Je ne touche plus le RSA.', ar: 'ما عاد عم آخد RSA.', en: 'I no longer receive RSA.' },
          { fr: 'Je touche uniquement la Prime d’activité.', ar: 'أنا عم آخد بس مكافأة النشاط.', en: 'I only receive the activity bonus.' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — السكن والعنوان والمعالجة', en: 'Prime d’activité — housing, address, processing', fr: 'Prime d’activité — logement, adresse, traitement' },
        phrases: [
          { fr: 'Vous êtes locataire ?', ar: 'إنت مستأجر؟', en: 'Are you a tenant?' },
          { fr: 'Oui, je suis locataire.', ar: 'إي، أنا مستأجر.', en: 'Yes, I’m a tenant.' },
          { fr: 'Combien payez-vous de loyer ?', ar: 'قديش بتدفع إيجار؟', en: 'How much rent do you pay?' },
          { fr: 'Je paie … euros de loyer par mois.', ar: 'بدفع … يورو إيجار بالشهر.', en: 'I pay … euros in rent per month.' },
          { fr: 'Je reçois une aide au logement.', ar: 'عم آخد مساعدة سكن.', en: 'I receive housing assistance.' },
          { fr: 'J’ai changé d’adresse.', ar: 'غيّرت عنواني.', en: 'I changed my address.' },
          { fr: 'Je voudrais déclarer mon changement d’adresse.', ar: 'بدي صرّح عن تغيير عنواني.', en: 'I’d like to report my change of address.' },
          { fr: 'Je suis domicilié à la Croix-Rouge.', ar: 'أنا عامل domiciliation عند الصليب الأحمر.', en: 'I’m domiciled with the Red Cross.' },
          { fr: 'Voici mon attestation de domiciliation.', ar: 'هاي شهادة التوطين تبعي.', en: 'Here is my domiciliation certificate.' },
          { fr: 'Ma demande est en cours de traitement.', ar: 'طلبي قيد المعالجة.', en: 'My application is being processed.' },
          { fr: 'Depuis combien de temps mon dossier est-il en cours de traitement ?', ar: 'من إمتى وملفي قيد المعالجة؟', en: 'How long has my application been under review?' },
          { fr: 'Est-ce qu’il manque un document ?', ar: 'في ورقة ناقصة؟', en: 'Is any document missing?' },
          { fr: 'Pouvez-vous vérifier mon dossier, s’il vous plaît ?', ar: 'فيكم تتأكدوا من ملفي لو سمحتوا؟', en: 'Could you check my file, please?' },
          { fr: 'Quand est-ce que j’aurai une réponse ?', ar: 'إمتى رح يوصلني جواب؟', en: 'When will I get an answer?' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'Prime d’activité — جمل مهمة عند CAF', en: 'Prime d’activité — key phrases at CAF', fr: 'Prime d’activité — phrases clés à la Caf' },
        phrases: [
          { fr: 'Je voudrais faire le point sur mon dossier.', ar: 'بدي أعرف وين وصل ملفي.', en: 'I’d like to review the status of my file.' },
          { fr: 'Je voudrais vérifier mes droits.', ar: 'بدي أتأكد من استحقاقاتي.', en: 'I’d like to check my benefits.' },
          { fr: 'Est-ce que mes droits sont ouverts ?', ar: 'استحقاقي مفتوح؟', en: 'Are my benefits active?' },
          { fr: 'Est-ce que mon dossier est à jour ?', ar: 'ملفي محدّث؟', en: 'Is my file up to date?' },
          { fr: 'Est-ce que vous avez besoin d’un justificatif ?', ar: 'بدكم أي إثبات أو ورقة؟', en: 'Do you need any supporting document?' },
          { fr: 'Voici mon justificatif.', ar: 'هاد الإثبات تبعي.', en: 'Here is my supporting document.' },
          { fr: 'Je voudrais savoir pourquoi ma Prime d’activité a changé.', ar: 'بدي أعرف ليش مكافأة النشاط تبعي تغيّرت.', en: 'I’d like to know why my activity bonus changed.' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم 5 عبارات للـCAF', en: 'Top 5 CAF phrases', fr: 'Top 5 des phrases pour la Caf' },
        phrases: [
          { fr: 'Je voudrais faire une demande de Prime d’activité.', ar: 'بدي قدّم على مكافأة النشاط.', en: 'I’d like to apply for the activity bonus.' },
          { fr: 'Je touche le RSA.', ar: 'أنا عم آخد RSA.', en: 'I receive RSA.' },
          { fr: 'Je ne touche plus le RSA.', ar: 'ما عاد عم آخد RSA.', en: 'I no longer receive RSA.' },
          { fr: 'Je travaille actuellement.', ar: 'أنا حالياً عم اشتغل.', en: 'I’m currently working.' },
          { fr: 'Pouvez-vous vérifier mon dossier, s’il vous plaît ?', ar: 'فيكم تتأكدوا من ملفي لو سمحتوا؟', en: 'Could you check my file, please?' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'APL — السؤال عن الاستحقاق', en: 'APL — asking about eligibility', fr: 'APL — demander l’éligibilité' },
        phrases: [
          { fr: 'Je voudrais savoir si j’ai droit à l’APL.', ar: 'بدي أعرف إذا إلي حق بالـAPL.', en: 'I’d like to know if I’m eligible for APL.' },
          { fr: 'Est-ce que je peux bénéficier de l’APL ?', ar: 'فيني استفيد من الـAPL؟', en: 'Can I receive APL?' },
          { fr: 'Je voudrais faire une demande d’aide au logement.', ar: 'بدي قدّم طلب مساعدة سكن.', en: 'I’d like to apply for housing assistance.' },
          { fr: 'Comment faire une demande d’APL ?', ar: 'كيف فيني قدّم على APL؟', en: 'How can I apply for APL?' },
          { fr: 'Je voudrais faire une simulation pour l’APL.', ar: 'بدي أعمل حساب تقريبي للـAPL.', en: 'I’d like to do an APL simulation.' }
        ]
      },
      {
        icon: '📝',
        title: { ar: 'APL — تقديم الطلب', en: 'APL — applying', fr: 'APL — faire la demande' },
        phrases: [
          { fr: 'Je viens de signer mon bail.', ar: 'هلأ وقّعت عقد الإيجار.', en: 'I’ve just signed my lease.' },
          { fr: 'Est-ce que je peux faire ma demande maintenant ?', ar: 'فيني قدّم الطلب هلق؟', en: 'Can I apply now?' },
          { fr: 'J’ai déjà fait ma demande en ligne.', ar: 'أنا قدّمت الطلب أونلاين من قبل.', en: 'I’ve already applied online.' },
          { fr: 'Je n’arrive pas à faire ma demande en ligne.', ar: 'ما عم اقدر قدّم الطلب أونلاين.', en: 'I can’t complete my application online.' },
          { fr: 'Pouvez-vous m’aider à faire ma demande ?', ar: 'فيكم تساعدوني بتقديم الطلب؟', en: 'Can you help me with my application?' }
        ]
      },
      {
        icon: '🏢',
        title: { ar: 'APL — عن نوع السكن', en: 'APL — type of accommodation', fr: 'APL — le type de logement' },
        phrases: [
          { fr: 'Est-ce que mon logement ouvre droit à l’APL ?', ar: 'هالبيت بيحقلي عليه APL؟', en: 'Is my accommodation eligible for APL?' },
          { fr: 'Est-ce que le logement est conventionné ?', ar: 'هالبيت عليه conventionné؟', en: 'Is the accommodation conventioned?' },
          { fr: 'Le logement est-il conventionné APL ?', ar: 'السكن مسجّل كـسكن conventionné للـAPL؟', en: 'Is the accommodation APL-conventioned?' },
          { fr: 'C’est un logement social.', ar: 'هاد سكن اجتماعي.', en: 'It’s social housing.' },
          { fr: 'Je suis locataire.', ar: 'أنا مستأجر.', en: 'I’m a tenant.' },
          { fr: 'Je suis en colocation.', ar: 'أنا ساكن بالمشاركة.', en: 'I’m in shared accommodation.' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'APL — عن الإيجار', en: 'APL — about the rent', fr: 'APL — le loyer' },
        phrases: [
          { fr: 'Combien de loyer dois-je déclarer ?', ar: 'قديش من الإيجار لازم صرّح؟', en: 'How much rent do I need to declare?' },
          { fr: 'Mon loyer est de 600 euros par mois.', ar: 'إيجاري 600 يورو بالشهر.', en: 'My rent is 600 euros per month.' },
          { fr: 'Est-ce que les charges sont comprises dans le loyer ?', ar: 'المصاريف/الcharges داخلة بالإيجار؟', en: 'Are the charges included in the rent?' },
          { fr: 'Mon loyer a augmenté.', ar: 'إيجاري زاد.', en: 'My rent has increased.' },
          { fr: 'Mon loyer a changé.', ar: 'إيجاري تغيّر.', en: 'My rent has changed.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'APL — الأوراق المطلوبة', en: 'APL — required documents', fr: 'APL — documents requis' },
        phrases: [
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدّمها؟', en: 'What documents do I need to provide?' },
          { fr: 'Vous avez besoin de mon bail ?', ar: 'بدكم عقد الإيجار تبعي؟', en: 'Do you need my lease?' },
          { fr: 'Voici mon contrat de location.', ar: 'هاد عقد الإيجار تبعي.', en: 'Here is my rental agreement.' },
          { fr: 'Voici mon attestation de loyer.', ar: 'هاي شهادة الإيجار تبعي.', en: 'Here is my rent certificate.' },
          { fr: 'Voici mon RIB.', ar: 'هاد الـRIB تبعي.', en: 'Here are my bank details.' },
          { fr: 'Est-ce qu’il manque un document ?', ar: 'في ورقة ناقصة؟', en: 'Is any document missing?' }
        ]
      },
      {
        icon: '👤',
        title: { ar: 'APL — إذا سألوك عن وضعك', en: 'APL — questions about your situation', fr: 'APL — votre situation' },
        phrases: [
          { fr: 'Vous vivez seul ?', ar: 'إنت ساكن لحالك؟', en: 'Do you live alone?' },
          { fr: 'Oui, je vis seul.', ar: 'إي، ساكن لحالي.', en: 'Yes, I live alone.' },
          { fr: 'Vous êtes célibataire ?', ar: 'إنت أعزب؟', en: 'Are you single?' },
          { fr: 'Oui, je suis célibataire.', ar: 'إي، أنا أعزب.', en: 'Yes, I’m single.' },
          { fr: 'Vous avez des enfants ?', ar: 'عندك أولاد؟', en: 'Do you have children?' },
          { fr: 'Non, je n’ai pas d’enfants.', ar: 'لا، ما عندي أولاد.', en: 'No, I don’t have children.' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'APL — العمل والدخل', en: 'APL — work and income', fr: 'APL — travail et revenus' },
        phrases: [
          { fr: 'Vous travaillez actuellement ?', ar: 'إنت حالياً عم تشتغل؟', en: 'Are you currently working?' },
          { fr: 'Oui, je travaille actuellement.', ar: 'إي، حالياً عم اشتغل.', en: 'Yes, I’m currently working.' },
          { fr: 'Je travaille dans la préparation de commandes.', ar: 'بشتغل بتحضير الطلبات.', en: 'I work in order preparation.' },
          { fr: 'Quels sont vos revenus ?', ar: 'شو دخلك؟', en: 'What is your income?' },
          { fr: 'Mes revenus ont changé.', ar: 'دخلي تغيّر.', en: 'My income has changed.' },
          { fr: 'J’ai perdu mon emploi.', ar: 'خسرت شغلي.', en: 'I lost my job.' },
          { fr: 'Mon contrat de travail est terminé.', ar: 'عقد عملي انتهى.', en: 'My employment contract has ended.' }
        ]
      },
      {
        icon: '📊',
        title: { ar: 'APL — لماذا تغيّر المبلغ', en: 'APL — why the amount changed', fr: 'APL — pourquoi le montant a changé' },
        phrases: [
          { fr: 'Pourquoi le montant de mon APL a changé ?', ar: 'ليش مبلغ الـAPL تبعي تغيّر؟', en: 'Why did my APL amount change?' },
          { fr: 'Pourquoi mon APL a diminué ?', ar: 'ليش الـAPL تبعي نقصت؟', en: 'Why did my APL decrease?' },
          { fr: 'Pourquoi je ne reçois plus d’aide au logement ?', ar: 'ليش ما عاد عم آخد مساعدة سكن؟', en: 'Why am I no longer receiving housing assistance?' },
          { fr: 'Pouvez-vous m’expliquer le calcul de mon APL ?', ar: 'فيكم تشرحولي كيف انحسبت الـAPL تبعي؟', en: 'Could you explain how my APL was calculated?' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'APL — كيف تُدفع', en: 'APL — how it is paid', fr: 'APL — comment elle est versée' },
        phrases: [
          { fr: 'À qui est versée l’APL ?', ar: 'لمين بيندفع الـAPL؟', en: 'Who is the APL paid to?' },
          { fr: 'Est-ce que l’APL est versée directement au propriétaire ?', ar: 'الـAPL بتروح مباشرة للمالك؟', en: 'Is the APL paid directly to the landlord?' },
          { fr: 'Est-ce que l’APL est déduite de mon loyer ?', ar: 'الـAPL بتنخصم من الإيجار؟', en: 'Is the APL deducted from my rent?' }
        ]
      },
      {
        icon: '📅',
        title: { ar: 'APL — متى تبدأ', en: 'APL — when it starts', fr: 'APL — quand elle commence' },
        phrases: [
          { fr: 'Quand mes droits à l’APL commencent-ils ?', ar: 'إمتى بيبلش استحقاقي للـAPL؟', en: 'When does my APL entitlement start?' },
          { fr: 'Quand vais-je recevoir mon premier paiement ?', ar: 'إمتى رح يوصلني أول دفع؟', en: 'When will I receive my first payment?' },
          { fr: 'J’ai emménagé le …', ar: 'أنا سكنت بالبيت بتاريخ …', en: 'I moved in on …' },
          { fr: 'J’ai fait ma demande dès mon entrée dans le logement.', ar: 'قدّمت الطلب من وقت ما دخلت على البيت.', en: 'I applied as soon as I moved in.' }
        ]
      },
      {
        icon: '🏚️',
        title: { ar: 'APL — الانتقال وترك البيت', en: 'APL — moving and leaving', fr: 'APL — déménagement et départ' },
        phrases: [
          { fr: 'Je vais déménager.', ar: 'رح انقل بيت.', en: 'I’m going to move.' },
          { fr: 'Je viens de déménager.', ar: 'هلأ نقلت بيت.', en: 'I’ve just moved.' },
          { fr: 'Je change de logement.', ar: 'عم غيّر السكن.', en: 'I’m changing accommodation.' },
          { fr: 'Je voudrais déclarer mon changement d’adresse.', ar: 'بدي صرّح عن تغيير عنواني.', en: 'I’d like to report my change of address.' },
          { fr: 'Est-ce que je dois faire une nouvelle demande d’aide au logement ?', ar: 'لازم أعمل طلب جديد لمساعدة السكن؟', en: 'Do I need to make a new housing assistance application?' },
          { fr: 'Je quitte mon logement.', ar: 'أنا تارك البيت.', en: 'I’m leaving my accommodation.' },
          { fr: 'Je vais quitter mon logement le …', ar: 'رح اترك البيت بتاريخ …', en: 'I’m leaving my accommodation on …' },
          { fr: 'Est-ce que je dois signaler mon départ à la CAF ?', ar: 'لازم خبر CAF إني تركت البيت؟', en: 'Do I need to report my move-out to CAF?' },
          { fr: 'Je voudrais signaler mon déménagement.', ar: 'بدي بلّغ عن نقل السكن.', en: 'I’d like to report my move.' }
        ]
      },
      {
        icon: '🔴',
        title: { ar: 'APL — إذا توقفت', en: 'APL — if it is suspended', fr: 'APL — si elle est suspendue' },
        phrases: [
          { fr: 'Mon aide au logement a été suspendue.', ar: 'مساعدة السكن تبعي توقفت.', en: 'My housing assistance has been suspended.' },
          { fr: 'Pourquoi mon aide au logement a-t-elle été suspendue ?', ar: 'ليش توقفت مساعدة السكن تبعي؟', en: 'Why was my housing assistance suspended?' },
          { fr: 'Je ne comprends pas pourquoi mon aide a été supprimée.', ar: 'ما فهمت ليش انلغت المساعدة تبعي.', en: 'I don’t understand why my assistance was stopped.' },
          { fr: 'Que dois-je faire pour rétablir mes droits ?', ar: 'شو لازم أعمل ليرجع استحقاقي؟', en: 'What do I need to do to restore my benefits?' }
        ]
      },
      {
        icon: '📁',
        title: { ar: 'APL — الملف قيد المعالجة', en: 'APL — pending application', fr: 'APL — dossier en cours' },
        phrases: [
          { fr: 'Mon dossier est en cours de traitement.', ar: 'ملفي قيد المعالجة.', en: 'My application is being processed.' },
          { fr: 'Depuis combien de temps mon dossier est-il en cours de traitement ?', ar: 'من إمتى وملفي قيد المعالجة؟', en: 'How long has my application been under review?' },
          { fr: 'Est-ce qu’il manque quelque chose à mon dossier ?', ar: 'في شي ناقص بملفي؟', en: 'Is anything missing from my file?' },
          { fr: 'Quand est-ce que j’aurai une réponse ?', ar: 'إمتى رح يوصلني جواب؟', en: 'When will I get an answer?' },
          { fr: 'Pouvez-vous vérifier mon dossier, s’il vous plaît ?', ar: 'فيكم تتأكدوا من ملفي لو سمحتوا؟', en: 'Could you check my file, please?' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'conventionné — تسأل المالك', en: 'conventionné — asking the landlord', fr: 'conventionné — demander au propriétaire' },
        phrases: [
          { fr: 'Est-ce que mon logement est conventionné ?', ar: 'هل بيتي خاضع لاتفاقية مع الدولة؟', en: 'Is my accommodation conventioned?' },
          { fr: 'Est-ce que ce logement est conventionné APL ?', ar: 'هل هالسكن خاضع لاتفاقية APL؟', en: 'Is this accommodation APL-conventioned?' },
          { fr: 'Votre logement est-il conventionné ?', ar: 'هل السكن خاضع لاتفاقية مع الدولة؟', en: 'Is the accommodation conventioned?' },
          { fr: 'Pouvez-vous me confirmer que le logement est conventionné ?', ar: 'فيك تأكدلي إنو السكن خاضع لاتفاقية مع الدولة؟', en: 'Can you confirm that the accommodation is conventioned?' },
          { fr: 'Pouvez-vous me donner un justificatif indiquant que le logement est conventionné ?', ar: 'فيك تعطيني إثبات إنو السكن خاضع لاتفاقية؟', en: 'Can you give me proof that the accommodation is conventioned?' }
        ]
      },
      {
        icon: '🏢',
        title: { ar: 'conventionné — تسأل CAF', en: 'conventionné — asking CAF', fr: 'conventionné — demander à la Caf' },
        phrases: [
          { fr: 'Pouvez-vous vérifier si mon logement est conventionné ?', ar: 'فيكم تتأكدوا إذا بيتي خاضع لاتفاقية؟', en: 'Can you check whether my accommodation is conventioned?' },
          { fr: 'Est-ce que mon logement ouvre droit à l’APL ?', ar: 'هل بيتي بيخليني استحق APL؟', en: 'Is my accommodation eligible for APL?' },
          { fr: 'Mon logement est conventionné, mais je ne reçois pas d’APL. Pourquoi ?', ar: 'بيتي خاضع لاتفاقية، بس ما عم آخد APL. ليش؟', en: 'My accommodation is conventioned, but I’m not receiving APL. Why?' },
          { fr: 'Si mon logement n’est pas conventionné, est-ce que je peux bénéficier d’une autre aide au logement ?', ar: 'إذا بيتي مو خاضع لاتفاقية، فيني استفيد من مساعدة سكن تانية؟', en: 'If my accommodation isn’t conventioned, can I receive another housing benefit?' },
          { fr: 'Est-ce que le fait que le logement soit conventionné me permet de bénéficier de l’APL ?', ar: 'كون السكن خاضع لاتفاقية، هل بيعطيني حق بالـAPL؟', en: 'Does the accommodation being conventioned make me eligible for APL?' },
          { fr: 'Est-ce que je peux demander l’APL pour ce logement ?', ar: 'فيني قدّم على APL لهالبيت؟', en: 'Can I apply for APL for this accommodation?' },
          { fr: 'Quelle aide au logement puis-je recevoir ?', ar: 'أي مساعدة سكن فيني آخد؟', en: 'Which housing benefit can I receive?' },
          { fr: 'Est-ce que j’aurai droit à l’APL ou à l’ALS ?', ar: 'إلي حق بـAPL ولا ALS؟', en: 'Am I eligible for APL or ALS?' }
        ]
      },
      {
        icon: '🏢',
        title: { ar: 'conventionné — السكن الاجتماعي والأوراق', en: 'conventionné — social housing and documents', fr: 'conventionné — logement social et documents' },
        phrases: [
          { fr: 'C’est un logement social conventionné ?', ar: 'هاد سكن اجتماعي خاضع لاتفاقية مع الدولة؟', en: 'Is this conventioned social housing?' },
          { fr: 'Est-ce que les logements de cet organisme sont conventionnés APL ?', ar: 'مساكن هالمؤسسة خاضعة لاتفاقية APL؟', en: 'Are this organization’s housing units APL-conventioned?' },
          { fr: 'Je suis locataire d’un logement social.', ar: 'أنا مستأجر بسكن اجتماعي.', en: 'I’m a tenant in social housing.' },
          { fr: 'Mon bailleur est un organisme HLM.', ar: 'مالك السكن مؤسسة HLM.', en: 'My landlord is an HLM organization.' },
          { fr: 'Est-ce que c’est indiqué sur mon contrat de location ?', ar: 'هل هالشي مكتوب بعقد الإيجار تبعي؟', en: 'Is this indicated in my lease?' },
          { fr: 'Où est-ce que je peux vérifier si le logement est conventionné ?', ar: 'وين فيني أتأكد إذا السكن خاضع لاتفاقية؟', en: 'Where can I check whether the accommodation is conventioned?' },
          { fr: 'Est-ce que c’est indiqué sur l’attestation de loyer ?', ar: 'هل هالشي مكتوب بشهادة الإيجار؟', en: 'Is it indicated on the rent certificate?' },
          { fr: 'Pouvez-vous me fournir l’attestation de loyer ?', ar: 'فيكم تعطوني شهادة الإيجار؟', en: 'Can you provide me with the rent certificate?' }
        ]
      },
      {
        icon: '❌',
        title: { ar: 'conventionné — إذا السكن غير خاضع لاتفاقية', en: 'conventionné — if the accommodation isn’t conventioned', fr: 'conventionné — logement non conventionné' },
        phrases: [
          { fr: 'Le logement n’est pas conventionné.', ar: 'السكن مو خاضع لاتفاقية مع الدولة.', en: 'The accommodation isn’t conventioned.' },
          { fr: 'Mon logement n’est pas conventionné APL.', ar: 'بيتي مو خاضع لاتفاقية APL.', en: 'My accommodation isn’t APL-conventioned.' },
          { fr: 'Est-ce que je peux quand même bénéficier d’une aide au logement ?', ar: 'مع هيك فيني استفيد من مساعدة سكن؟', en: 'Can I still receive housing assistance?' },
          { fr: 'Est-ce que je peux avoir l’ALS ?', ar: 'فيني آخد ALS؟', en: 'Can I receive ALS?' }
        ]
      },
      {
        icon: '🔄',
        title: { ar: 'conventionné — قبل الانتقال لبيت جديد', en: 'conventionné — before moving', fr: 'conventionné — avant de déménager' },
        phrases: [
          { fr: 'Je vais déménager dans un nouveau logement.', ar: 'رح انقل على بيت جديد.', en: 'I’m going to move into new accommodation.' },
          { fr: 'Je voudrais savoir si le nouveau logement est conventionné.', ar: 'بدي أعرف إذا البيت الجديد خاضع لاتفاقية مع الدولة.', en: 'I’d like to know if the new accommodation is conventioned.' },
          { fr: 'Est-ce que je pourrai bénéficier de l’APL dans ce logement ?', ar: 'فيني استفيد من APL بهالبيت؟', en: 'Can I receive APL in this accommodation?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم عبارات APL وconventionné', en: 'Top APL and conventionné phrases', fr: 'Top des phrases APL et conventionné' },
        phrases: [
          { fr: 'Je voudrais savoir si j’ai droit à l’APL.', ar: 'بدي أعرف إذا إلي حق بالـAPL.', en: 'I’d like to know if I’m eligible for APL.' },
          { fr: 'Je voudrais faire une demande d’aide au logement.', ar: 'بدي قدّم على مساعدة سكن.', en: 'I’d like to apply for housing assistance.' },
          { fr: 'Est-ce que mon logement est conventionné ?', ar: 'هل السكن تبعي conventionné؟', en: 'Is my accommodation conventioned?' },
          { fr: 'Pourquoi mon APL a changé ?', ar: 'ليش الـAPL تبعي تغيّرت؟', en: 'Why did my APL change?' },
          { fr: 'Pourquoi je ne reçois plus d’aide au logement ?', ar: 'ليش ما عاد عم آخد مساعدة سكن؟', en: 'Why am I no longer receiving housing assistance?' },
          { fr: 'Pouvez-vous vérifier si mon logement est conventionné ?', ar: 'فيكم تتأكدوا إذا بيتي خاضع لاتفاقية؟', en: 'Can you check whether my accommodation is conventioned?' },
          { fr: 'Si mon logement n’est pas conventionné, est-ce que je peux bénéficier d’une autre aide au logement ?', ar: 'إذا بيتي مو خاضع لاتفاقية، فيني استفيد من مساعدة سكن تانية؟', en: 'If my accommodation isn’t conventioned, can I receive another housing benefit?' }
        ]
      },
      {
        icon: '🏢',
        title: { ar: '⭐ مفردات CAF الأساسية', en: 'Core CAF vocabulary', fr: 'Vocabulaire de base CAF' },
        phrases: [
          { fr: 'allocataire', ar: 'مستفيد من CAF', en: 'CAF beneficiary' },
          { fr: 'dossier', ar: 'ملف', en: 'file / case' },
          { fr: 'demande', ar: 'طلب', en: 'application / request' },
          { fr: 'demandeur', ar: 'مقدّم الطلب', en: 'applicant' },
          { fr: 'prestation', ar: 'إعانة / استحقاق', en: 'benefit' },
          { fr: 'aide', ar: 'مساعدة', en: 'assistance / benefit' },
          { fr: 'droit', ar: 'استحقاق / حق', en: 'entitlement / right' },
          { fr: 'ressources', ar: 'الموارد / الدخل', en: 'income / resources' },
          { fr: 'revenus', ar: 'المداخيل', en: 'income' },
          { fr: 'salaire', ar: 'راتب', en: 'salary' },
          { fr: 'foyer', ar: 'الأسرة / المنزل المعيشي', en: 'household' },
          { fr: 'situation', ar: 'وضع / حالة', en: 'situation' },
          { fr: 'situation familiale', ar: 'الوضع العائلي', en: 'family situation' },
          { fr: 'situation professionnelle', ar: 'الوضع المهني', en: 'employment situation' },
          { fr: 'logement', ar: 'سكن', en: 'accommodation' },
          { fr: 'locataire', ar: 'مستأجر', en: 'tenant' },
          { fr: 'propriétaire', ar: 'مالك', en: 'owner' },
          { fr: 'loyer', ar: 'إيجار', en: 'rent' },
          { fr: 'charges', ar: 'مصاريف / أعباء', en: 'charges' },
          { fr: 'bail', ar: 'عقد الإيجار', en: 'lease' },
          { fr: 'quittance de loyer', ar: 'إيصال الإيجار', en: 'rent receipt' },
          { fr: 'attestation de loyer', ar: 'شهادة الإيجار', en: 'rent certificate' },
          { fr: 'justificatif', ar: 'إثبات / وثيقة تثبت', en: 'supporting document' },
          { fr: 'pièce d’identité', ar: 'وثيقة هوية', en: 'ID document' },
          { fr: 'RIB', ar: 'بيانات الحساب البنكي', en: 'bank details' },
          { fr: 'compte bancaire', ar: 'حساب بنكي', en: 'bank account' },
          { fr: 'adresse', ar: 'عنوان', en: 'address' },
          { fr: 'domicile', ar: 'محل السكن', en: 'home / residence' },
          { fr: 'changement d’adresse', ar: 'تغيير العنوان', en: 'change of address' },
          { fr: 'déménagement', ar: 'انتقال من سكن', en: 'moving' },
          { fr: 'notification', ar: 'إشعار', en: 'notification' },
          { fr: 'paiement', ar: 'دفعة / دفع', en: 'payment' },
          { fr: 'versement', ar: 'تحويل / دفعة', en: 'payment / transfer' },
          { fr: 'montant', ar: 'المبلغ', en: 'amount' },
          { fr: 'date de paiement', ar: 'تاريخ الدفع', en: 'payment date' },
          { fr: 'déclaration', ar: 'تصريح', en: 'declaration' },
          { fr: 'déclaration trimestrielle', ar: 'التصريح الفصلي', en: 'quarterly declaration' },
          { fr: 'déclaration de ressources', ar: 'تصريح بالموارد', en: 'income declaration' },
          { fr: 'espace personnel', ar: 'الحساب الشخصي', en: 'personal account' },
          { fr: 'identifiant', ar: 'اسم/معرّف الدخول', en: 'login ID' },
          { fr: 'mot de passe', ar: 'كلمة المرور', en: 'password' },
          { fr: 'numéro allocataire', ar: 'رقم المستفيد', en: 'beneficiary number' },
          { fr: 'courrier', ar: 'رسالة', en: 'mail / letter' },
          { fr: 'message', ar: 'رسالة', en: 'message' },
          { fr: 'document', ar: 'وثيقة', en: 'document' },
          { fr: 'pièce justificative', ar: 'وثيقة إثبات', en: 'supporting document' },
          { fr: 'dossier complet', ar: 'ملف كامل', en: 'complete file' },
          { fr: 'dossier incomplet', ar: 'ملف ناقص', en: 'incomplete file' },
          { fr: 'dossier en cours', ar: 'ملف قيد المعالجة', en: 'application in progress' }
        ]
      },
      {
        icon: '💶',
        title: { ar: '⭐ مساعدات CAF ومفردات السكن', en: 'CAF benefits and housing vocabulary', fr: 'Prestations CAF et vocabulaire du logement' },
        phrases: [
          { fr: 'APL', ar: 'مساعدة السكن الشخصية', en: 'housing benefit' },
          { fr: 'ALS', ar: 'بدل السكن الاجتماعي', en: 'social housing allowance' },
          { fr: 'ALF', ar: 'بدل السكن العائلي', en: 'family housing allowance' },
          { fr: 'RSA', ar: 'دخل التضامن النشط', en: 'active solidarity income' },
          { fr: 'Prime d’activité', ar: 'مكافأة النشاط', en: 'activity bonus' },
          { fr: 'aide au logement', ar: 'مساعدة السكن', en: 'housing benefit' },
          { fr: 'allocation', ar: 'إعانة / مخصصات', en: 'allowance' },
          { fr: 'prestations familiales', ar: 'إعانات عائلية', en: 'family benefits' },
          { fr: 'logement conventionné', ar: 'سكن خاضع لاتفاقية', en: 'conventioned housing' },
          { fr: 'loyer hors charges', ar: 'الإيجار بدون المصاريف', en: 'rent excluding charges' },
          { fr: 'loyer charges comprises', ar: 'الإيجار شامل المصاريف', en: 'rent including charges' },
          { fr: 'bailleur', ar: 'المؤجّر / المالك', en: 'landlord' },
          { fr: 'bailleur social', ar: 'مؤسسة السكن الاجتماعي', en: 'social housing provider' },
          { fr: 'résidence principale', ar: 'السكن الرئيسي', en: 'main residence' },
          { fr: 'entrée dans le logement', ar: 'الدخول إلى السكن', en: 'moving into the accommodation' },
          { fr: 'sortie du logement', ar: 'الخروج من السكن', en: 'moving out' },
          { fr: 'date d’entrée', ar: 'تاريخ الدخول', en: 'move-in date' },
          { fr: 'date de départ', ar: 'تاريخ المغادرة', en: 'move-out date' },
          { fr: 'hébergement', ar: 'استضافة / إيواء', en: 'accommodation' },
          { fr: 'colocation', ar: 'سكن مشترك', en: 'shared accommodation' },
          { fr: 'hébergé', ar: 'مُستضاف', en: 'hosted / accommodated' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: '⭐ أهم أفعال CAF', en: 'Key CAF verbs', fr: 'Verbes essentiels CAF' },
        phrases: [
          { fr: 'bénéficier de', ar: 'يستفيد من', en: 'to benefit from' },
          { fr: 'Je bénéficie de l’APL.', ar: 'أنا مستفيد من APL.', en: 'I receive housing assistance.' },
          { fr: 'Est-ce que je peux bénéficier de l’ALS ?', ar: 'فيني استفيد من ALS؟', en: 'Can I receive ALS?' },
          { fr: 'avoir droit à', ar: 'يستحق / له حق في', en: 'to be entitled to' },
          { fr: 'Est-ce que j’ai droit à l’APL ?', ar: 'هل إلي حق بـ APL؟', en: 'Am I entitled to APL?' },
          { fr: 'demander', ar: 'يطلب', en: 'to request / apply for' },
          { fr: 'Je voudrais demander l’APL.', ar: 'بدي أطلب APL.', en: 'I’d like to apply for APL.' },
          { fr: 'faire', ar: 'يقوم بـ', en: 'to do / make' },
          { fr: 'Je voudrais faire une demande.', ar: 'بدي قدّم طلب.', en: 'I’d like to make an application.' },
          { fr: 'Je dois faire ma déclaration trimestrielle.', ar: 'لازم أعمل التصريح الفصلي تبعي.', en: 'I have to make my quarterly declaration.' },
          { fr: 'déclarer', ar: 'يصرّح', en: 'to declare' },
          { fr: 'Je dois déclarer mes revenus.', ar: 'لازم صرّح عن دخلي.', en: 'I have to declare my income.' },
          { fr: 'Je dois déclarer mon salaire.', ar: 'لازم صرّح عن راتبي.', en: 'I have to declare my salary.' },
          { fr: 'recevoir', ar: 'يستلم', en: 'to receive' },
          { fr: 'Je reçois le RSA.', ar: 'أنا عم استلم RSA.', en: 'I receive RSA.' },
          { fr: 'Je n’ai pas reçu mon paiement.', ar: 'ما استلمت دفعتي.', en: 'I haven’t received my payment.' },
          { fr: 'toucher', ar: 'يقبض / يستلم', en: 'to receive' },
          { fr: 'Je touche le RSA.', ar: 'أنا عم آخد RSA.', en: 'I receive RSA.' },
          { fr: 'Je touche la Prime d’activité.', ar: 'أنا عم آخد مكافأة النشاط.', en: 'I receive the activity bonus.' },
          { fr: 'percevoir', ar: 'يتقاضى', en: 'to receive' },
          { fr: 'Je perçois une aide au logement.', ar: 'أنا أتقاضى مساعدة سكن.', en: 'I receive housing assistance.' },
          { fr: 'signaler', ar: 'يبلّغ عن', en: 'to report' },
          { fr: 'Je voudrais signaler un changement de situation.', ar: 'بدي بلّغ عن تغيير بوضعياتي.', en: 'I’d like to report a change of circumstances.' },
          { fr: 'modifier', ar: 'يعدّل / يغيّر', en: 'to modify' },
          { fr: 'Je voudrais modifier mon adresse.', ar: 'بدي غيّر عنواني.', en: 'I’d like to change my address.' },
          { fr: 'actualiser', ar: 'يحدّث', en: 'to update' },
          { fr: 'Je dois actualiser ma situation.', ar: 'لازم حدّث وضعيتي.', en: 'I need to update my situation.' },
          { fr: 'mettre à jour', ar: 'يحدّث', en: 'to update' },
          { fr: 'Je voudrais mettre à jour mon dossier.', ar: 'بدي حدّث ملفي.', en: 'I’d like to update my file.' },
          { fr: 'fournir', ar: 'يقدّم / يزوّد', en: 'to provide' },
          { fr: 'Je dois fournir un justificatif.', ar: 'لازم قدّم وثيقة إثبات.', en: 'I have to provide supporting documentation.' },
          { fr: 'envoyer', ar: 'يرسل', en: 'to send' },
          { fr: 'Je vais envoyer les documents.', ar: 'رح ابعت الوثائق.', en: 'I’m going to send the documents.' },
          { fr: 'joindre', ar: 'يرفق', en: 'to attach' },
          { fr: 'Je vais joindre mon justificatif de loyer.', ar: 'رح أرفق إثبات الإيجار.', en: 'I’m going to attach my rent document.' },
          { fr: 'télécharger', ar: 'يحمّل', en: 'to download / upload' },
          { fr: 'Je dois télécharger le document.', ar: 'لازم حمّل الوثيقة.', en: 'I need to download the document.' },
          { fr: 'déposer', ar: 'يودع / يرفع ملفًا', en: 'to submit' },
          { fr: 'Je voudrais déposer un document.', ar: 'بدي أقدّم وثيقة.', en: 'I’d like to submit a document.' },
          { fr: 'consulter', ar: 'يطّلع على', en: 'to check / consult' },
          { fr: 'Je voudrais consulter mon dossier.', ar: 'بدي أطلع على ملفي.', en: 'I’d like to check my file.' },
          { fr: 'vérifier', ar: 'يتحقق', en: 'to check' },
          { fr: 'Pouvez-vous vérifier mon dossier ?', ar: 'فيني تطلعوا على ملفي وتتأكدوا منه؟', en: 'Can you check my file?' },
          { fr: 'calculer', ar: 'يحسب', en: 'to calculate' },
          { fr: 'Comment est calculé le montant de mon APL ?', ar: 'كيف بينحسب مبلغ الـAPL تبعي؟', en: 'How is my APL amount calculated?' },
          { fr: 'verser', ar: 'يحوّل / يدفع', en: 'to pay / transfer' },
          { fr: 'Quand la CAF va-t-elle verser mon aide ?', ar: 'إيمتى CAF رح تحوّل المساعدة؟', en: 'When will CAF pay my benefit?' },
          { fr: 'suspendre', ar: 'يعلّق / يوقف مؤقتًا', en: 'to suspend' },
          { fr: 'Mon aide a été suspendue.', ar: 'المساعدة تبعي توقفت مؤقتًا.', en: 'My benefit has been suspended.' },
          { fr: 'régulariser', ar: 'يسوّي / يصحح الحساب', en: 'to regularize' },
          { fr: 'La CAF doit régulariser mon dossier.', ar: 'لازم CAF تسوّي وضع ملفي.', en: 'CAF needs to regularize my case.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'عبارات الملف', en: 'File phrases', fr: 'Phrases sur le dossier' },
        phrases: [
          { fr: 'Je voudrais vérifier mon dossier.', ar: 'بدي أتأكد من ملفي.', en: 'I’d like to check my file.' },
          { fr: 'Est-ce que mon dossier est complet ?', ar: 'هل ملفي كامل؟', en: 'Is my file complete?' },
          { fr: 'Est-ce qu’il manque un document ?', ar: 'في شي وثيقة ناقصة؟', en: 'Is a document missing?' },
          { fr: 'Quel document manque à mon dossier ?', ar: 'أي وثيقة ناقصة من ملفي؟', en: 'Which document is missing from my file?' },
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الوثائق اللي لازم قدمها؟', en: 'What documents do I need to provide?' },
          { fr: 'Mon dossier est en cours de traitement.', ar: 'ملفي قيد المعالجة.', en: 'My application is being processed.' },
          { fr: 'Depuis combien de temps mon dossier est-il en cours de traitement ?', ar: 'من إمتى وملفي قيد المعالجة؟', en: 'How long has my file been in processing?' },
          { fr: 'Quand vais-je avoir une réponse ?', ar: 'إيمتى رح يجيني جواب؟', en: 'When will I get an answer?' },
          { fr: 'Pouvez-vous vérifier l’état de mon dossier ?', ar: 'فيني أعرف حالة ملفي؟', en: 'Can you check the status of my file?' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'عبارات APL / ALS', en: 'APL / ALS phrases', fr: 'Phrases APL / ALS' },
        phrases: [
          { fr: 'Je voudrais faire une demande d’aide au logement.', ar: 'بدي قدّم طلب مساعدة سكن.', en: 'I’d like to apply for housing assistance.' },
          { fr: 'Est-ce que j’ai droit à l’APL ?', ar: 'هل إلي حق بـAPL؟', en: 'Am I entitled to APL?' },
          { fr: 'Est-ce que je peux bénéficier de l’APL ?', ar: 'فيني استفيد من APL؟', en: 'Can I receive APL?' },
          { fr: 'Est-ce que mon logement est conventionné ?', ar: 'هل السكن خاضع لاتفاقية؟', en: 'Is my accommodation conventioned?' },
          { fr: 'Est-ce que ce logement ouvre droit à l’APL ?', ar: 'هل هالسكن بيخليني استحق APL؟', en: 'Does this accommodation qualify me for APL?' },
          { fr: 'Est-ce que je peux bénéficier de l’ALS ?', ar: 'فيني استفيد من ALS؟', en: 'Can I receive ALS?' },
          { fr: 'Quelle aide au logement puis-je recevoir ?', ar: 'أي مساعدة سكن ممكن آخد؟', en: 'Which housing benefit can I receive?' },
          { fr: 'Pourquoi je ne reçois pas d’APL ?', ar: 'ليش ما عم آخد APL؟', en: 'Why am I not receiving APL?' },
          { fr: 'Pourquoi le montant de mon aide a changé ?', ar: 'ليش تغيّر مبلغ المساعدة تبعي؟', en: 'Why did my benefit amount change?' },
          { fr: 'Pourquoi mon APL a diminué ?', ar: 'ليش نقصت الـAPL تبعي؟', en: 'Why did my APL decrease?' }
        ]
      },
      {
        icon: '💰',
        title: { ar: 'عبارات RSA', en: 'RSA phrases', fr: 'Phrases RSA' },
        phrases: [
          { fr: 'Je touche le RSA.', ar: 'أنا عم آخد RSA.', en: 'I receive RSA.' },
          { fr: 'Je ne touche pas le RSA.', ar: 'أنا ما عم آخد RSA.', en: 'I don’t receive RSA.' },
          { fr: 'Je ne touche plus le RSA.', ar: 'ما عاد عم آخد RSA.', en: 'I no longer receive RSA.' },
          { fr: 'Je voudrais savoir si j’ai droit au RSA.', ar: 'بدي أعرف إذا إلي حق بالـRSA.', en: 'I’d like to know if I’m entitled to RSA.' },
          { fr: 'Je voudrais faire une demande de RSA.', ar: 'بدي قدّم طلب RSA.', en: 'I’d like to apply for RSA.' },
          { fr: 'Quels revenus dois-je déclarer ?', ar: 'شو المداخيل اللي لازم صرّح عنها؟', en: 'Which income do I need to declare?' },
          { fr: 'Je dois faire ma déclaration trimestrielle.', ar: 'لازم أعمل التصريح الفصلي.', en: 'I have to make my quarterly declaration.' },
          { fr: 'J’ai changé de situation.', ar: 'تغيّرت وضعيتي.', en: 'My situation has changed.' },
          { fr: 'J’ai commencé à travailler.', ar: 'بلشت اشتغل.', en: 'I started working.' },
          { fr: 'J’ai arrêté de travailler.', ar: 'بطلت اشتغل.', en: 'I stopped working.' },
          { fr: 'Mon contrat de travail est terminé.', ar: 'عقد عملي انتهى.', en: 'My employment contract has ended.' }
        ]
      },
      {
        icon: '💼',
        title: { ar: 'عبارات Prime d’activité', en: 'Prime d’activité phrases', fr: 'Phrases Prime d’activité' },
        phrases: [
          { fr: 'Je voudrais savoir si j’ai droit à la Prime d’activité.', ar: 'بدي أعرف إذا إلي حق بمكافأة النشاط.', en: 'I’d like to know if I’m entitled to the activity bonus.' },
          { fr: 'Je voudrais faire une demande de Prime d’activité.', ar: 'بدي قدّم طلب مكافأة النشاط.', en: 'I’d like to apply for the activity bonus.' },
          { fr: 'Je travaille actuellement.', ar: 'أنا عم اشتغل حاليًا.', en: 'I’m currently working.' },
          { fr: 'Je travaille à temps plein.', ar: 'أنا بشتغل دوام كامل.', en: 'I work full-time.' },
          { fr: 'Je travaille à temps partiel.', ar: 'أنا بشتغل دوام جزئي.', en: 'I work part-time.' },
          { fr: 'Je dois déclarer mon salaire.', ar: 'لازم صرّح عن راتبي.', en: 'I have to declare my salary.' },
          { fr: 'Quel montant dois-je déclarer ?', ar: 'أي مبلغ لازم صرّح عنه؟', en: 'Which amount do I need to declare?' },
          { fr: 'Où puis-je trouver le montant net social ?', ar: 'وين فيني لاقي مبلغ net social؟', en: 'Where can I find the net social amount?' },
          { fr: 'Ma situation professionnelle a changé.', ar: 'وضعي المهني تغيّر.', en: 'My employment situation has changed.' },
          { fr: 'Mon salaire a changé.', ar: 'راتبي تغيّر.', en: 'My salary has changed.' },
          { fr: 'Pourquoi le montant de ma Prime d’activité a changé ?', ar: 'ليش تغيّر مبلغ مكافأة النشاط تبعي؟', en: 'Why did my activity bonus amount change?' }
        ]
      },
      {
        icon: '🏦',
        title: { ar: 'عبارات الدفع', en: 'Payment phrases', fr: 'Phrases de paiement' },
        phrases: [
          { fr: 'Quand vais-je recevoir mon paiement ?', ar: 'إيمتى رح استلم الدفعة؟', en: 'When will I receive my payment?' },
          { fr: 'Je n’ai pas reçu mon paiement.', ar: 'ما استلمت الدفعة.', en: 'I haven’t received my payment.' },
          { fr: 'Le paiement a-t-il été effectué ?', ar: 'هل تم الدفع؟', en: 'Has the payment been made?' },
          { fr: 'À quelle date le paiement sera-t-il effectué ?', ar: 'بأي تاريخ رح يتم الدفع؟', en: 'On what date will the payment be made?' },
          { fr: 'Quel est le montant de mon paiement ?', ar: 'قديش مبلغ الدفعة تبعي؟', en: 'What is the amount of my payment?' },
          { fr: 'Pourquoi le paiement est-il différent ?', ar: 'ليش الدفعة مختلفة؟', en: 'Why is the payment different?' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'تغيير السكن والعنوان', en: 'Housing and address changes', fr: 'Changement de logement et d’adresse' },
        phrases: [
          { fr: 'Je viens de déménager.', ar: 'أنا انتقلت من البيت جديد.', en: 'I just moved.' },
          { fr: 'Je souhaite signaler mon déménagement.', ar: 'بدي بلّغ عن انتقالي.', en: 'I’d like to report my move.' },
          { fr: 'Je voudrais changer mon adresse.', ar: 'بدي غيّر عنواني.', en: 'I’d like to change my address.' },
          { fr: 'Voici ma nouvelle adresse.', ar: 'هاد عنواني الجديد.', en: 'Here is my new address.' },
          { fr: 'Je quitte mon ancien logement.', ar: 'أنا عم اترك بيتي القديم.', en: 'I’m leaving my old home.' },
          { fr: 'J’ai emménagé dans un nouveau logement.', ar: 'سكنت ببيت جديد.', en: 'I moved into a new home.' },
          { fr: 'Est-ce que je dois faire une nouvelle demande d’aide au logement ?', ar: 'لازم أعمل طلب جديد لمساعدة السكن؟', en: 'Do I need to make a new housing benefit application?' },
          { fr: 'Je viens de signer mon nouveau bail.', ar: 'وقّعت عقد إيجار البيت الجديد.', en: 'I just signed my new lease.' },
          { fr: 'Voici mon nouveau bail.', ar: 'هاد عقد الإيجار الجديد تبعي.', en: 'Here is my new lease.' },
          { fr: 'Quel est le montant du loyer hors charges ?', ar: 'قديش الإيجار بدون المصاريف؟', en: 'What is the rent excluding charges?' },
          { fr: 'Quel est le montant des charges ?', ar: 'قديش المصاريف؟', en: 'What is the amount of the charges?' },
          { fr: 'Quel est le montant total du loyer ?', ar: 'قديش المبلغ الكامل للإيجار؟', en: 'What is the total rent?' },
          { fr: 'Le loyer a augmenté.', ar: 'الإيجار زاد.', en: 'The rent has increased.' },
          { fr: 'Mon loyer a changé.', ar: 'إيجاري تغيّر.', en: 'My rent has changed.' },
          { fr: 'J’ai changé de logement.', ar: 'غيّرت السكن.', en: 'I changed homes.' },
          { fr: 'Je quitte mon logement.', ar: 'رح اترك السكن.', en: 'I’m leaving the home.' },
          { fr: 'Je viens d’emménager.', ar: 'لسا منتقل جديد.', en: 'I’ve just moved in.' },
          { fr: 'Je suis locataire.', ar: 'أنا مستأجر.', en: 'I’m a tenant.' },
          { fr: 'Je vis seul dans ce logement.', ar: 'أنا ساكن لحالي بهالسكن.', en: 'I live alone in this home.' },
          { fr: 'Le logement est conventionné.', ar: 'السكن خاضع لاتفاقية.', en: 'The accommodation is conventioned.' },
          { fr: 'Je voudrais savoir si le logement ouvre droit à l’APL.', ar: 'بدي أعرف إذا السكن بيخليني استحق APL.', en: 'I’d like to know if the accommodation qualifies me for APL.' }
        ]
      },
      {
        icon: '📱',
        title: { ar: 'الحساب الإلكتروني CAF', en: 'CAF online account', fr: 'Compte CAF en ligne' },
        phrases: [
          { fr: 'espace Mon Compte', ar: 'حسابي الإلكتروني', en: 'online account' },
          { fr: 'connexion', ar: 'تسجيل الدخول / اتصال', en: 'login / connection' },
          { fr: 'identifiant', ar: 'اسم المستخدم', en: 'username' },
          { fr: 'mot de passe', ar: 'كلمة المرور', en: 'password' },
          { fr: 'code', ar: 'رمز', en: 'code' },
          { fr: 'SMS', ar: 'رسالة نصية', en: 'text message' },
          { fr: 'document en ligne', ar: 'وثيقة إلكترونية', en: 'online document' },
          { fr: 'téléchargement', ar: 'تنزيل', en: 'download' },
          { fr: 'envoi en ligne', ar: 'إرسال إلكتروني', en: 'online submission' },
          { fr: 'Je n’arrive pas à me connecter à mon compte.', ar: 'ما عم اقدر فوت على حسابي.', en: 'I can’t log in to my account.' },
          { fr: 'J’ai oublié mon mot de passe.', ar: 'نسيت كلمة السر.', en: 'I forgot my password.' },
          { fr: 'Je n’ai pas reçu le code.', ar: 'ما وصلني الرمز.', en: 'I didn’t receive the code.' },
          { fr: 'Je voudrais modifier mes informations.', ar: 'بدي غيّر معلوماتي.', en: 'I’d like to change my details.' },
          { fr: 'Je voudrais consulter mes paiements.', ar: 'بدي شوف دفعاتي.', en: 'I’d like to view my payments.' },
          { fr: 'Je voudrais télécharger une attestation.', ar: 'بدي نزّل شهادة.', en: 'I’d like to download a certificate.' },
          { fr: 'Je voudrais envoyer un document en ligne.', ar: 'بدي ابعت وثيقة أونلاين.', en: 'I’d like to send a document online.' },
          { fr: 'Je n’arrive pas à envoyer le document.', ar: 'ما عم اقدر ابعت الوثيقة.', en: 'I can’t send the document.' },
          { fr: 'Où dois-je déposer le document ?', ar: 'وين لازم ارفع الوثيقة؟', en: 'Where do I need to upload the document?' },
          { fr: 'Je ne trouve pas mon attestation.', ar: 'ما عم لاقي الشهادة تبعي.', en: 'I can’t find my certificate.' }
        ]
      },
      {
        icon: '📋',
        title: { ar: 'أفعال CAF إضافية', en: 'More CAF verbs', fr: 'Autres verbes CAF' },
        phrases: [
          { fr: 'remplir', ar: 'يملأ استمارة', en: 'to fill in' },
          { fr: 'Je dois remplir le formulaire.', ar: 'لازم عبّي الاستمارة.', en: 'I have to fill in the form.' },
          { fr: 'compléter', ar: 'يُكمل', en: 'to complete' },
          { fr: 'Je dois compléter mon dossier.', ar: 'لازم كمّل ملفي.', en: 'I have to complete my file.' },
          { fr: 'transmettre', ar: 'يرسل / يحوّل', en: 'to transmit' },
          { fr: 'Je vais transmettre les documents demandés.', ar: 'رح ابعت الوثائق المطلوبة.', en: 'I’ll send the requested documents.' },
          { fr: 'justifier', ar: 'يثبت / يبرهن', en: 'to prove' },
          { fr: 'Je dois justifier mes revenus.', ar: 'لازم أثبت مداخيلي.', en: 'I have to prove my income.' },
          { fr: 'renouveler', ar: 'يجدّد', en: 'to renew' },
          { fr: 'Je dois renouveler ma demande.', ar: 'لازم جدّد طلبي.', en: 'I have to renew my application.' },
          { fr: 'réexaminer', ar: 'يعيد دراسة', en: 'to reassess' },
          { fr: 'Je voudrais que mon dossier soit réexaminé.', ar: 'بدي ينظروا بملفي من جديد.', en: 'I’d like my case to be reassessed.' },
          { fr: 'traiter', ar: 'يعالج الملف', en: 'to process' },
          { fr: 'Mon dossier est en cours de traitement.', ar: 'ملفي قيد المعالجة.', en: 'My application is being processed.' },
          { fr: 'étudier', ar: 'يدرس', en: 'to review / examine' },
          { fr: 'La CAF étudie mon dossier.', ar: 'CAF عم تدرس ملفي.', en: 'CAF is reviewing my case.' },
          { fr: 'accepter', ar: 'يقبل', en: 'to accept' },
          { fr: 'Ma demande a été acceptée.', ar: 'طلبي انقبل.', en: 'My application was accepted.' },
          { fr: 'refuser', ar: 'يرفض', en: 'to refuse' },
          { fr: 'Ma demande a été refusée.', ar: 'طلبي انرفض.', en: 'My application was refused.' },
          { fr: 'accorder', ar: 'يمنح', en: 'to grant' },
          { fr: 'La CAF m’a accordé une aide.', ar: 'CAF منحتني مساعدة.', en: 'CAF granted me a benefit.' },
          { fr: 'attribuer', ar: 'يمنح / يخصص', en: 'to award' },
          { fr: 'Une aide peut vous être attribuée.', ar: 'ممكن يتم منحك مساعدة.', en: 'A benefit may be awarded to you.' },
          { fr: 'maintenir', ar: 'يبقي / يحافظ على', en: 'to maintain' },
          { fr: 'Mes droits sont maintenus.', ar: 'استحقاقاتي مستمرة.', en: 'My entitlements are maintained.' },
          { fr: 'ouvrir', ar: 'يفتح / ينشئ استحقاقًا', en: 'to open' },
          { fr: 'Cette situation peut ouvrir des droits.', ar: 'هالوضعية ممكن تفتحلك استحقاقات.', en: 'This situation may create entitlement.' },
          { fr: 'perdre', ar: 'يفقد', en: 'to lose' },
          { fr: 'J’ai perdu mes droits.', ar: 'فقدت استحقاقاتي.', en: 'I lost my entitlements.' },
          { fr: 'rétablir', ar: 'يعيد / يسترجع', en: 'to restore' },
          { fr: 'Je voudrais rétablir mes droits.', ar: 'بدي رجّع استحقاقاتي.', en: 'I’d like to restore my entitlements.' },
          { fr: 'bloquer', ar: 'يحظر / يوقف', en: 'to block' },
          { fr: 'Mon compte est bloqué.', ar: 'حسابي محظور/متوقف.', en: 'My account is blocked.' },
          { fr: 'débiter', ar: 'يخصم من الحساب', en: 'to debit' },
          { fr: 'La somme a été débitée de mon compte.', ar: 'المبلغ انخصم من حسابي.', en: 'The amount was debited from my account.' },
          { fr: 'rembourser', ar: 'يعيد المال', en: 'to reimburse / refund' },
          { fr: 'Je dois rembourser une somme.', ar: 'لازم رجّع مبلغ من المال.', en: 'I have to repay an amount.' },
          { fr: 'demander des informations', ar: 'يطلب معلومات', en: 'to ask for information' },
          { fr: 'Je voudrais demander des informations sur mon dossier.', ar: 'بدي اسأل عن معلومات بخصوص ملفي.', en: 'I’d like to ask for information about my case.' },
          { fr: 'renseigner', ar: 'يزوّد بالمعلومات / يملأ', en: 'to provide information / fill in' },
          { fr: 'Je ne sais pas quoi renseigner ici.', ar: 'ما بعرف شو لازم اكتب هون.', en: 'I don’t know what to enter here.' },
          { fr: 'indiquer', ar: 'يذكر / يحدد', en: 'to indicate' },
          { fr: 'Qu’est-ce que je dois indiquer ici ?', ar: 'شو لازم اكتب هون؟', en: 'What do I need to indicate here?' },
          { fr: 'préciser', ar: 'يوضّح / يحدد', en: 'to specify' },
          { fr: 'Je voudrais préciser ma situation.', ar: 'بدي وضّح وضعيتي.', en: 'I’d like to clarify my situation.' },
          { fr: 'expliquer', ar: 'يشرح', en: 'to explain' },
          { fr: 'Pouvez-vous m’expliquer ce courrier ?', ar: 'فينيك تشرحلي هالرسالة؟', en: 'Can you explain this letter to me?' },
          { fr: 'comprendre', ar: 'يفهم', en: 'to understand' },
          { fr: 'Je ne comprends pas le calcul.', ar: 'ما عم أفهم طريقة الحساب.', en: 'I don’t understand the calculation.' },
          { fr: 'Je n’ai rien reçu de la CAF.', ar: 'ما وصلني شي من CAF.', en: 'I haven’t received anything from CAF.' },
          { fr: 'attendre', ar: 'ينتظر', en: 'to wait' },
          { fr: 'J’attends une réponse de la CAF.', ar: 'ناطر جواب من CAF.', en: 'I’m waiting for a reply from CAF.' },
          { fr: 'répondre', ar: 'يجيب / يرد', en: 'to answer / reply' },
          { fr: 'Je dois répondre à ce courrier.', ar: 'لازم رد على هالرسالة.', en: 'I have to reply to this letter.' },
          { fr: 'contacter', ar: 'يتواصل مع', en: 'to contact' },
          { fr: 'Je voudrais contacter la CAF.', ar: 'بدي اتواصل مع CAF.', en: 'I’d like to contact CAF.' },
          { fr: 'appeler', ar: 'يتصل', en: 'to call' },
          { fr: 'Je vais appeler la CAF.', ar: 'رح اتصل بـCAF.', en: 'I’m going to call CAF.' },
          { fr: 'prendre rendez-vous', ar: 'يحجز موعد', en: 'to make an appointment' },
          { fr: 'Je voudrais prendre rendez-vous.', ar: 'بدي احجز موعد.', en: 'I’d like to make an appointment.' },
          { fr: 'annuler', ar: 'يلغي', en: 'to cancel' },
          { fr: 'Je voudrais annuler mon rendez-vous.', ar: 'بدي ألغي موعدي.', en: 'I’d like to cancel my appointment.' },
          { fr: 'reporter', ar: 'يؤجل', en: 'to postpone' },
          { fr: 'Je voudrais reporter mon rendez-vous.', ar: 'بدي أجّل موعدي.', en: 'I’d like to postpone my appointment.' }
        ]
      },
      {
        icon: '💶',
        title: { ar: '⭐ مفردات المال والدخل', en: 'Money and income vocabulary', fr: 'Vocabulaire argent et revenus' },
        phrases: [
          { fr: 'revenu', ar: 'دخل', en: 'income' },
          { fr: 'revenu mensuel', ar: 'الدخل الشهري', en: 'monthly income' },
          { fr: 'revenu annuel', ar: 'الدخل السنوي', en: 'annual income' },
          { fr: 'revenu professionnel', ar: 'دخل مهني', en: 'employment income' },
          { fr: 'somme', ar: 'مبلغ / قيمة', en: 'sum / amount' },
          { fr: 'droits', ar: 'استحقاقات', en: 'entitlements' },
          { fr: 'barème', ar: 'جدول احتساب', en: 'scale' },
          { fr: 'plafond', ar: 'الحد الأقصى', en: 'ceiling / limit' },
          { fr: 'seuil', ar: 'حدّ', en: 'threshold' },
          { fr: 'calcul', ar: 'حساب', en: 'calculation' },
          { fr: 'déduction', ar: 'خصم', en: 'deduction' },
          { fr: 'trop-perçu', ar: 'مبلغ دُفع بالزيادة', en: 'overpayment' },
          { fr: 'dette', ar: 'دين / مبلغ مستحق', en: 'debt' },
          { fr: 'indu', ar: 'مبلغ دُفع بالخطأ ويجب إرجاعه', en: 'overpayment / undue payment' },
          { fr: 'remboursement', ar: 'إرجاع المال', en: 'repayment / reimbursement' },
          { fr: 'montant mensuel', ar: 'المبلغ الشهري', en: 'monthly amount' },
          { fr: 'montant estimé', ar: 'المبلغ التقديري', en: 'estimated amount' },
          { fr: 'montant versé', ar: 'المبلغ المدفوع', en: 'amount paid' },
          { fr: 'droit mensuel', ar: 'الاستحقاق الشهري', en: 'monthly entitlement' },
          { fr: 'revenus déclarés', ar: 'المداخيل المصرّح عنها', en: 'declared income' },
          { fr: 'ressources prises en compte', ar: 'الموارد المحتسبة', en: 'resources taken into account' },
          { fr: 'recalcul', ar: 'إعادة حساب', en: 'recalculation' },
          { fr: 'régularisation', ar: 'تسوية', en: 'adjustment' },
          { fr: 'différence', ar: 'فرق', en: 'difference' },
          { fr: 'J’ai un trop-perçu.', ar: 'عندي مبلغ أخدته زيادة ولازم رجّعه.', en: 'I have an overpayment to repay.' },
          { fr: 'Pourquoi ai-je un trop-perçu ?', ar: 'ليش طالع عليي مبلغ زيادة؟', en: 'Why do I have an overpayment?' },
          { fr: 'Combien dois-je rembourser ?', ar: 'قديش لازم رجّع؟', en: 'How much do I have to repay?' },
          { fr: 'Est-ce que je peux payer en plusieurs fois ?', ar: 'فيني ادفع على دفعات؟', en: 'Can I pay in instalments?' },
          { fr: 'Pourquoi mon montant a changé ?', ar: 'ليش المبلغ تبعي تغيّر؟', en: 'Why did my amount change?' },
          { fr: 'Pourquoi mon aide a diminué ?', ar: 'ليش المساعدة تبعي نقصت؟', en: 'Why did my benefit decrease?' },
          { fr: 'Pourquoi je ne reçois plus cette aide ?', ar: 'ليش ما عاد آخد هالمساعدة؟', en: 'Why am I no longer receiving this benefit?' },
          { fr: 'Pouvez-vous vérifier le calcul ?', ar: 'فيني تطلعوا على الحساب وتتأكدوا؟', en: 'Can you check the calculation?' },
          { fr: 'Est-ce qu’il y a eu un recalcul ?', ar: 'صار في إعادة حساب؟', en: 'Was there a recalculation?' },
          { fr: 'Est-ce qu’il y a une régularisation ?', ar: 'صار في تسوية بالحساب؟', en: 'Is there an account adjustment?' }
        ]
      },
      {
        icon: '👨‍👩‍👧',
        title: { ar: '⭐ الوضع العائلي والمهني', en: 'Family and employment situation', fr: 'Situation familiale et professionnelle' },
        phrases: [
          { fr: 'célibataire', ar: 'أعزب', en: 'single' },
          { fr: 'marié', ar: 'متزوج', en: 'married' },
          { fr: 'divorcé', ar: 'مطلق', en: 'divorced' },
          { fr: 'séparé', ar: 'منفصل', en: 'separated' },
          { fr: 'conjoint', ar: 'الزوج/الزوجة', en: 'spouse' },
          { fr: 'enfant à charge', ar: 'طفل على النفقة', en: 'dependent child' },
          { fr: 'personne à charge', ar: 'شخص مُعال', en: 'dependent person' },
          { fr: 'naissance', ar: 'ولادة', en: 'birth' },
          { fr: 'décès', ar: 'وفاة', en: 'death' },
          { fr: 'séparation', ar: 'انفصال', en: 'separation' },
          { fr: 'mariage', ar: 'زواج', en: 'marriage' },
          { fr: 'Je vis seul.', ar: 'أنا ساكن لحالي.', en: 'I live alone.' },
          { fr: 'Je suis célibataire.', ar: 'أنا أعزب.', en: 'I’m single.' },
          { fr: 'Ma situation familiale a changé.', ar: 'وضعي العائلي تغيّر.', en: 'My family situation has changed.' },
          { fr: 'emploi', ar: 'عمل / وظيفة', en: 'employment' },
          { fr: 'travail', ar: 'عمل', en: 'work' },
          { fr: 'employeur', ar: 'صاحب العمل', en: 'employer' },
          { fr: 'salarié', ar: 'موظف / أجير', en: 'employee' },
          { fr: 'contrat de travail', ar: 'عقد عمل', en: 'employment contract' },
          { fr: 'CDI', ar: 'عقد غير محدد المدة', en: 'permanent contract' },
          { fr: 'CDD', ar: 'عقد محدد المدة', en: 'fixed-term contract' },
          { fr: 'temps plein', ar: 'دوام كامل', en: 'full-time' },
          { fr: 'temps partiel', ar: 'دوام جزئي', en: 'part-time' },
          { fr: 'chômage', ar: 'بطالة', en: 'unemployment' },
          { fr: 'fin de contrat', ar: 'انتهاء العقد', en: 'end of contract' },
          { fr: 'reprise d’activité', ar: 'العودة إلى العمل', en: 'return to work' },
          { fr: 'perte d’emploi', ar: 'فقدان العمل', en: 'job loss' },
          { fr: 'Mon contrat est terminé.', ar: 'عقدي انتهى.', en: 'My contract has ended.' },
          { fr: 'J’ai changé d’emploi.', ar: 'غيّرت شغلي.', en: 'I changed jobs.' },
          { fr: 'Mes revenus ont changé.', ar: 'مداخيلي تغيّرت.', en: 'My income has changed.' }
        ]
      },
      {
        icon: '📄',
        title: { ar: '⭐ وثائق CAF', en: 'CAF documents', fr: 'Documents CAF' },
        phrases: [
          { fr: 'attestation', ar: 'شهادة / إفادة', en: 'certificate' },
          { fr: 'formulaire', ar: 'استمارة', en: 'form' },
          { fr: 'avis d’imposition', ar: 'إشعار الضريبة', en: 'tax notice' },
          { fr: 'bulletin de salaire', ar: 'قسيمة الراتب', en: 'payslip' },
          { fr: 'contrat de location', ar: 'عقد الإيجار', en: 'rental agreement' },
          { fr: 'justificatif de domicile', ar: 'إثبات السكن', en: 'proof of address' },
          { fr: 'courrier', ar: 'رسالة بريدية', en: 'letter' },
          { fr: 'notification', ar: 'إشعار', en: 'notification' },
          { fr: 'décision', ar: 'قرار', en: 'decision' },
          { fr: 'réponse', ar: 'جواب', en: 'reply' },
          { fr: 'demande d’informations', ar: 'طلب معلومات', en: 'request for information' },
          { fr: 'mise à jour', ar: 'تحديث', en: 'update' },
          { fr: 'délai', ar: 'مهلة / مدة انتظار', en: 'deadline / processing time' },
          { fr: 'date limite', ar: 'الموعد النهائي', en: 'deadline' },
          { fr: 'réclamation', ar: 'شكوى / اعتراض', en: 'complaint / claim' },
          { fr: 'recours', ar: 'طعن / اعتراض رسمي', en: 'appeal' },
          { fr: 'motif', ar: 'سبب', en: 'reason' },
          { fr: 'justification', ar: 'تبرير / إثبات', en: 'justification' },
          { fr: 'coordonnées bancaires', ar: 'معلومات الحساب البنكي', en: 'bank details' },
          { fr: 'virement', ar: 'تحويل بنكي', en: 'bank transfer' },
          { fr: 'prélèvement', ar: 'اقتطاع مباشر', en: 'direct debit' },
          { fr: 'date de versement', ar: 'تاريخ التحويل', en: 'payment date' },
          { fr: 'J’ai reçu un courrier de la CAF.', ar: 'وصلتني رسالة من CAF.', en: 'I received a letter from CAF.' },
          { fr: 'Je ne comprends pas cette décision.', ar: 'ما فهمت هالقرار.', en: 'I don’t understand this decision.' },
          { fr: 'Pouvez-vous m’expliquer la raison ?', ar: 'فيني أعرف السبب؟', en: 'Can you tell me the reason?' },
          { fr: 'Quelle est la date limite ?', ar: 'شو آخر موعد؟', en: 'What is the deadline?' },
          { fr: 'Quel est le délai de traitement ?', ar: 'قديش مدة معالجة الطلب؟', en: 'What is the processing time?' },
          { fr: 'Je voudrais contester cette décision.', ar: 'بدي أعترض على هالقرار.', en: 'I’d like to contest this decision.' },
          { fr: 'Voici mon RIB.', ar: 'هاد الـRIB تبعي.', en: 'Here is my RIB.' },
          { fr: 'Mon compte bancaire a changé.', ar: 'حسابي البنكي تغيّر.', en: 'My bank account has changed.' },
          { fr: 'Je voudrais modifier mon RIB.', ar: 'بدي غيّر الـRIB.', en: 'I’d like to change my RIB.' },
          { fr: 'Quand le versement sera-t-il effectué ?', ar: 'إيمتى رح يتم التحويل؟', en: 'When will the transfer be made?' },
          { fr: 'Je n’ai pas reçu le versement.', ar: 'ما استلمت التحويل.', en: 'I haven’t received the transfer.' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'عبارات الموظف في CAF', en: 'What the CAF staff say', fr: 'Ce que dit l’agent CAF' },
        phrases: [
          { fr: 'Vous avez changé de situation ?', ar: 'هل تغيّرت وضعيتك؟', en: 'Has your situation changed?' },
          { fr: 'Vous vivez seul ?', ar: 'هل ساكن لحالك؟', en: 'Do you live alone?' },
          { fr: 'Vous êtes locataire ?', ar: 'هل أنت مستأجر؟', en: 'Are you a tenant?' },
          { fr: 'Quel est le montant de votre loyer ?', ar: 'قديش إيجارك؟', en: 'How much is your rent?' },
          { fr: 'Quelles sont vos ressources ?', ar: 'شو مداخيلك؟', en: 'What is your income?' },
          { fr: 'Vous travaillez actuellement ?', ar: 'هل تعمل حاليًا؟', en: 'Are you currently working?' },
          { fr: 'Avez-vous déclaré vos revenus ?', ar: 'هل صرّحت عن مداخيلك؟', en: 'Have you declared your income?' },
          { fr: 'Avez-vous envoyé les justificatifs ?', ar: 'هل أرسلت وثائق الإثبات؟', en: 'Have you sent the supporting documents?' },
          { fr: 'Il manque un document à votre dossier.', ar: 'في وثيقة ناقصة بملفك.', en: 'A document is missing from your file.' },
          { fr: 'Votre dossier est en cours de traitement.', ar: 'ملفك قيد المعالجة.', en: 'Your file is being processed.' },
          { fr: 'Vos droits ont été ouverts.', ar: 'تم فتح استحقاقاتك.', en: 'Your entitlements have been opened.' },
          { fr: 'Vos droits ont été suspendus.', ar: 'تم تعليق استحقاقاتك.', en: 'Your entitlements have been suspended.' },
          { fr: 'Le paiement sera effectué prochainement.', ar: 'رح يتم الدفع قريبًا.', en: 'The payment will be made soon.' },
          { fr: 'Vous devez déclarer ce changement.', ar: 'لازم تصرّح عن هالتغيير.', en: 'You must declare this change.' },
          { fr: 'Vous devez faire votre déclaration trimestrielle.', ar: 'لازم تعمل التصريح الفصلي.', en: 'You must make your quarterly declaration.' },
          { fr: 'Votre dossier n’est pas complet.', ar: 'ملفك مو كامل.', en: 'Your file is not complete.' },
          { fr: 'Nous avons besoin d’un justificatif.', ar: 'نحن بحاجة إلى وثيقة إثبات.', en: 'We need a supporting document.' },
          { fr: 'Votre demande a été acceptée.', ar: 'تم قبول طلبك.', en: 'Your application has been accepted.' },
          { fr: 'Votre demande a été refusée.', ar: 'تم رفض طلبك.', en: 'Your application has been refused.' },
          { fr: 'Vous pouvez consulter votre dossier en ligne.', ar: 'فينيك تطلع على ملفك أونلاين.', en: 'You can check your file online.' },
          { fr: 'Vous pouvez suivre l’avancement de votre dossier.', ar: 'فينيك تتابع تقدم ملفك.', en: 'You can track the progress of your file.' },
          { fr: 'Nous allons vérifier votre dossier.', ar: 'رح نتأكد من ملفك.', en: 'We will check your file.' },
          { fr: 'Je vais regarder votre dossier.', ar: 'رح أطلع على ملفك.', en: 'I’ll look at your file.' }
        ]
      },
      {
        icon: '⚠️',
        title: { ar: 'عند نقص أو مشكلة بالملف', en: 'File problems', fr: 'Problèmes de dossier' },
        phrases: [
          { fr: 'Mon dossier est bloqué.', ar: 'ملفي متوقف.', en: 'My file is blocked.' },
          { fr: 'Pourquoi mon dossier est-il bloqué ?', ar: 'ليش ملفي متوقف؟', en: 'Why is my file blocked?' },
          { fr: 'Il manque un document.', ar: 'في وثيقة ناقصة.', en: 'A document is missing.' },
          { fr: 'Quel document manque ?', ar: 'أي وثيقة ناقصة؟', en: 'Which document is missing?' },
          { fr: 'J’ai envoyé le document.', ar: 'أنا بعت الوثيقة.', en: 'I sent the document.' },
          { fr: 'Je l’ai déjà envoyé.', ar: 'أنا بعتها من قبل.', en: 'I already sent it.' },
          { fr: 'Vous avez bien reçu mon document ?', ar: 'وصلتكم الوثيقة تبعي؟', en: 'Did you receive my document?' },
          { fr: 'Je voudrais vérifier que vous l’avez bien reçu.', ar: 'بدي أتأكد إنكم استلمتوها.', en: 'I’d like to confirm that you received it.' },
          { fr: 'Mon dossier n’avance pas.', ar: 'ملفي ما عم يتقدم.', en: 'My file isn’t progressing.' },
          { fr: 'Mon dossier est toujours en cours.', ar: 'ملفي لسا قيد المعالجة.', en: 'My file is still in progress.' },
          { fr: 'Je voudrais savoir pourquoi ça prend autant de temps.', ar: 'بدي أعرف ليش عم ياخد كل هالوقت.', en: 'I’d like to know why it’s taking so long.' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: '⭐ عبارات طبيعية عند الشباك', en: 'Natural counter phrases', fr: 'Phrases naturelles au guichet' },
        phrases: [
          { fr: 'Bonjour, je viens pour mon dossier CAF.', ar: 'مرحبا، جاي بخصوص ملفي بـCAF.', en: 'Hello, I’m here about my CAF file.' },
          { fr: 'Je voudrais faire le point sur mon dossier.', ar: 'بدي أعرف وين وصل ملفي.', en: 'I’d like to check where my file stands.' },
          { fr: 'J’ai une question concernant mon aide au logement.', ar: 'عندي سؤال بخصوص مساعدة السكن تبعي.', en: 'I have a question about my housing benefit.' },
          { fr: 'Je voudrais savoir où en est ma demande.', ar: 'بدي أعرف وين وصل طلبي.', en: 'I’d like to know where my application stands.' },
          { fr: 'Je ne comprends pas ce montant.', ar: 'ما فهمت هالمبلغ.', en: 'I don’t understand this amount.' },
          { fr: 'Je ne comprends pas cette notification.', ar: 'ما فهمت هالإشعار.', en: 'I don’t understand this notification.' },
          { fr: 'Vous pouvez m’expliquer, s’il vous plaît ?', ar: 'فيني تشرحلي لو سمحت؟', en: 'Can you explain it to me, please?' },
          { fr: 'Qu’est-ce que je dois faire maintenant ?', ar: 'شو لازم أعمل هلق؟', en: 'What do I need to do now?' },
          { fr: 'Est-ce que je dois fournir un document ?', ar: 'لازم قدم وثيقة؟', en: 'Do I need to provide a document?' },
          { fr: 'Est-ce que je dois faire une déclaration ?', ar: 'لازم أعمل تصريح؟', en: 'Do I need to make a declaration?' },
          { fr: 'Est-ce que je dois signaler ce changement ?', ar: 'لازم بلّغ عن هالتغيير؟', en: 'Do I need to report this change?' },
          { fr: 'C’est bien enregistré ?', ar: 'تسجّل بشكل صحيح؟', en: 'Is it properly recorded?' },
          { fr: 'Tout est en ordre avec mon dossier ?', ar: 'كل شي تمام بملفي؟', en: 'Is everything in order with my file?' },
          { fr: 'Il manque quelque chose ?', ar: 'في شي ناقص؟', en: 'Is anything missing?' },
          { fr: 'Quand est-ce que j’aurai une réponse ?', ar: 'إيمتى رح يجيني جواب؟', en: 'When will I get an answer?' },
          { fr: 'Merci pour votre aide.', ar: 'شكرًا لمساعدتك.', en: 'Thank you for your help.' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: 'أفعال CAF — الملف والطلب والمعلومات', en: 'CAF verbs — file, application, information', fr: 'Verbes CAF — dossier, demande, informations' },
        phrases: [
          { fr: 'demander', ar: 'يطلب', en: 'to request' },
          { fr: 'Je voudrais demander une aide.', ar: 'أريد أن أطلب مساعدة.', en: 'I would like to request assistance.' },
          { fr: 'solliciter', ar: 'يطلب / يتقدّم بطلب', en: 'to apply for / request' },
          { fr: 'Je souhaite solliciter une aide au logement.', ar: 'أريد التقدّم بطلب مساعدة للسكن.', en: 'I would like to apply for housing assistance.' },
          { fr: 'soumettre', ar: 'يقدّم / يرفع طلبًا', en: 'to submit' },
          { fr: 'Je souhaite soumettre une nouvelle demande.', ar: 'بدي قدّم طلب جديد.', en: 'I would like to submit a new application.' },
          { fr: 'déposer', ar: 'يقدّم / يودع طلبًا', en: 'to submit' },
          { fr: 'Je viens de déposer ma demande.', ar: 'قدّمت طلبي للتو.', en: 'I have just submitted my application.' },
          { fr: 'enregistrer', ar: 'يسجّل', en: 'to register / record' },
          { fr: 'Ma demande a bien été enregistrée.', ar: 'تم تسجيل طلبي بشكل صحيح.', en: 'My application has been registered.' },
          { fr: 'valider', ar: 'يؤكّد / يعتمد', en: 'to validate' },
          { fr: 'Je dois valider ma déclaration.', ar: 'يجب أن أؤكد تصريحي.', en: 'I have to validate my declaration.' },
          { fr: 'confirmer', ar: 'يؤكد', en: 'to confirm' },
          { fr: 'Pouvez-vous confirmer la réception de mon document ?', ar: 'فيك تأكدلي إنكم استلمتوا مستندي؟', en: 'Can you confirm receipt of my document?' },
          { fr: 'accuser réception', ar: 'يؤكد استلام', en: 'to acknowledge receipt' },
          { fr: 'La CAF a accusé réception de ma demande.', ar: 'الكاف أكدت استلام طلبي.', en: 'CAF acknowledged receipt of my application.' },
          { fr: 'corriger', ar: 'يصحّح', en: 'to correct' },
          { fr: 'Je voudrais corriger une erreur.', ar: 'بدي صحّح غلطة.', en: 'I would like to correct a mistake.' },
          { fr: 'rectifier', ar: 'يصحّح رسميًا', en: 'to rectify' },
          { fr: 'Je voudrais rectifier une erreur dans mon dossier.', ar: 'بدي صحّح غلطة بملفي.', en: 'I would like to correct a mistake in my file.' },
          { fr: 'maintenir', ar: 'يُبقي / يحافظ على', en: 'to maintain' },
          { fr: 'Je souhaite maintenir ma demande.', ar: 'بدي أبقي طلبي قائم.', en: 'I want to keep my application active.' },
          { fr: 'décrire', ar: 'يصف', en: 'to describe' },
          { fr: 'Je dois décrire ma situation.', ar: 'لازم أوصف وضعي.', en: 'I have to describe my situation.' },
          { fr: 'mentionner', ar: 'يذكر / يدوّن', en: 'to mention' },
          { fr: 'J’ai oublié de mentionner mon changement d’adresse.', ar: 'نسيت أذكر تغيير عنواني.', en: 'I forgot to mention my change of address.' },
          { fr: 'renseigner', ar: 'يملأ / يزوّد بالمعلومات', en: 'to provide information / fill in' },
          { fr: 'Je dois renseigner ma nouvelle adresse.', ar: 'لازم أدخل عنواني الجديد.', en: 'I have to enter my new address.' },
          { fr: 'Veuillez renseigner vos revenus.', ar: 'يرجى إدخال دخلك.', en: 'Please enter your income.' },
          { fr: 'indiquer', ar: 'يذكر / يحدّد', en: 'to indicate' },
          { fr: 'Je dois indiquer mon nouveau revenu.', ar: 'لازم أذكر دخلي الجديد.', en: 'I have to indicate my new income.' },
          { fr: 'Veuillez indiquer votre nouvelle adresse.', ar: 'يرجى ذكر عنوانك الجديد.', en: 'Please indicate your new address.' },
          { fr: 'Pouvez-vous préciser votre demande ?', ar: 'فيك توضّح طلبك؟', en: 'Can you clarify your request?' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'أفعال CAF — الوثائق', en: 'CAF verbs — documents', fr: 'Verbes CAF — documents' },
        phrases: [
          { fr: 'joindre', ar: 'يرفق', en: 'to attach' },
          { fr: 'Je dois joindre mon justificatif de domicile.', ar: 'لازم أرفق إثبات السكن.', en: 'I have to attach my proof of address.' },
          { fr: 'Je joins mon justificatif à ma demande.', ar: 'أرفق إثباتي مع طلبي.', en: 'I attach my proof to my application.' },
          { fr: 'fournir', ar: 'يقدّم', en: 'to provide' },
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدّمها؟', en: 'What documents do I need to provide?' },
          { fr: 'transmettre', ar: 'يرسل / يحوّل', en: 'to submit / forward' },
          { fr: 'Je vous transmets le document demandé.', ar: 'أرسل لكم المستند المطلوب.', en: 'I am sending you the requested document.' },
          { fr: 'présenter', ar: 'يقدّم / يُبرز', en: 'to present' },
          { fr: 'Je peux vous présenter ma pièce d’identité.', ar: 'فيني أعطيكم هويتي؟', en: 'Can I show you my ID?' },
          { fr: 'Je peux vous présenter mon justificatif ?', ar: 'فيني أقدملكم الإثبات؟', en: 'Can I show you my proof?' },
          { fr: 'produire', ar: 'يقدّم مستندًا رسميًا', en: 'to provide / produce' },
          { fr: 'Je dois produire un justificatif.', ar: 'لازم قدّم إثبات.', en: 'I have to provide proof.' },
          { fr: 'déposer en ligne', ar: 'يقدّم عبر الإنترنت', en: 'to submit online' },
          { fr: 'Je peux déposer le document en ligne ?', ar: 'فيني قدّم المستند أونلاين؟', en: 'Can I submit the document online?' },
          { fr: 'J’ai déposé tous les documents.', ar: 'قدّمت كل الأوراق.', en: 'I submitted all the documents.' },
          { fr: 'scanner', ar: 'يمسح ضوئيًا', en: 'to scan' },
          { fr: 'Je dois scanner le document.', ar: 'لازم أعمل سكان للمستند.', en: 'I need to scan the document.' },
          { fr: 'numériser', ar: 'يحوّل إلى نسخة رقمية', en: 'to digitize / scan' },
          { fr: 'Je dois numériser ce document.', ar: 'لازم حوّل هالمستند لنسخة رقمية.', en: 'I need to digitize this document.' },
          { fr: 'téléverser', ar: 'يرفع ملفًا للموقع', en: 'to upload' },
          { fr: 'Je dois téléverser un document.', ar: 'لازم ارفع مستند.', en: 'I need to upload a document.' },
          { fr: 'Je n’arrive pas à téléverser mon document.', ar: 'ما عم اقدر ارفع مستندي.', en: 'I can’t upload my document.' },
          { fr: 'imprimer', ar: 'يطبع', en: 'to print' },
          { fr: 'Je dois imprimer cette attestation.', ar: 'لازم اطبع هالشهادة.', en: 'I need to print this certificate.' },
          { fr: 'détenir', ar: 'يمتلك / لديه', en: 'to hold / possess' },
          { fr: 'Je ne détiens pas ce document.', ar: 'ما عندي هالمستند.', en: 'I don’t have this document.' },
          { fr: 'conserver', ar: 'يحتفظ بـ', en: 'to keep / retain' },
          { fr: 'Je dois conserver ce document.', ar: 'لازم احتفظ بهالمستند.', en: 'I have to keep this document.' },
          { fr: 'archiver', ar: 'يؤرشف / يحفظ', en: 'to archive' },
          { fr: 'Le document a été archivé dans mon dossier.', ar: 'تم حفظ المستند بملفي.', en: 'The document was archived in my file.' },
          { fr: 'classer', ar: 'يصنّف / يرتّب', en: 'to file / classify' },
          { fr: 'Je vais classer mes documents CAF.', ar: 'رح رتّب أوراق الكاف.', en: 'I’m going to organize my CAF documents.' }
        ]
      },
      {
        icon: '🔍',
        title: { ar: 'أفعال CAF — دراسة الملف والتحقق', en: 'CAF verbs — file review and checks', fr: 'Verbes CAF — étude et vérification' },
        phrases: [
          { fr: 'examiner', ar: 'يدرس / يفحص', en: 'to examine' },
          { fr: 'La CAF examine mon dossier.', ar: 'الكاف عم تدرس ملفي.', en: 'CAF is examining my file.' },
          { fr: 'étudier', ar: 'يدرس', en: 'to study / review' },
          { fr: 'Ma demande est en cours d’étude.', ar: 'طلبي قيد الدراسة.', en: 'My application is being reviewed.' },
          { fr: 'traiter', ar: 'يعالج / ينجز', en: 'to process' },
          { fr: 'La CAF traite actuellement ma demande.', ar: 'الكاف عم تعالج طلبي حاليًا.', en: 'CAF is currently processing my application.' },
          { fr: 'contrôler', ar: 'يدقّق / يتحقق', en: 'to check / inspect' },
          { fr: 'La CAF peut contrôler les informations déclarées.', ar: 'الكاف ممكن تدقّق بالمعلومات المصرّح عنها.', en: 'CAF may check the declared information.' },
          { fr: 'correspondre', ar: 'يتطابق', en: 'to match / correspond' },
          { fr: 'Les informations ne correspondent pas.', ar: 'المعلومات ما بتتطابق.', en: 'The information doesn’t match.' },
          { fr: 'comparer', ar: 'يقارن', en: 'to compare' },
          { fr: 'La CAF compare les informations déclarées.', ar: 'الكاف بتقارن المعلومات المصرّح عنها.', en: 'CAF compares the declared information.' },
          { fr: 'identifier', ar: 'يحدّد / يتعرّف على', en: 'to identify' },
          { fr: 'Le document permet d’identifier le demandeur.', ar: 'المستند بيساعد على تحديد صاحب الطلب.', en: 'The document identifies the applicant.' },
          { fr: 'Je dois identifier le problème.', ar: 'لازم أحدد المشكلة.', en: 'I need to identify the problem.' },
          { fr: 'constater', ar: 'يثبت / يسجّل رسميًا', en: 'to establish / note' },
          { fr: 'La CAF a constaté un trop-perçu.', ar: 'الكاف سجّلت وجود مبلغ زائد مدفوع.', en: 'CAF identified an overpayment.' },
          { fr: 'La CAF a constaté une erreur.', ar: 'الكاف سجّلت وجود خطأ.', en: 'CAF identified an error.' }
        ]
      },
      {
        icon: '🧮',
        title: { ar: 'أفعال CAF — الحساب والحقوق والقرار', en: 'CAF verbs — calculation, rights, decision', fr: 'Verbes CAF — calcul, droits, décision' },
        phrases: [
          { fr: 'déterminer', ar: 'يحدّد', en: 'to determine' },
          { fr: 'La CAF détermine le montant de l’aide.', ar: 'الكاف بتحدد قيمة المساعدة.', en: 'CAF determines the amount of the benefit.' },
          { fr: 'Quels éléments déterminent le montant de l’APL ?', ar: 'شو الأشياء اللي بتحدد قيمة الـAPL؟', en: 'What determines the APL amount?' },
          { fr: 'estimer', ar: 'يقدّر', en: 'to estimate' },
          { fr: 'Je voudrais estimer mes droits.', ar: 'بدي أعرف تقريبًا حقوقي.', en: 'I would like to estimate my benefits.' },
          { fr: 'évaluer', ar: 'يقيّم', en: 'to assess' },
          { fr: 'La CAF évalue ma situation.', ar: 'الكاف بتقيّم وضعي.', en: 'CAF assesses my situation.' },
          { fr: 'réévaluer', ar: 'يعيد تقييم / حساب', en: 'to reassess' },
          { fr: 'La CAF va réévaluer mes droits.', ar: 'الكاف رح تعيد تقييم حقوقي.', en: 'CAF will reassess my benefits.' },
          { fr: 'Ma situation doit être réévaluée.', ar: 'لازم يعيدوا تقييم وضعي.', en: 'My situation needs to be reassessed.' },
          { fr: 'recalculer', ar: 'يعيد الحساب', en: 'to recalculate' },
          { fr: 'Pouvez-vous recalculer mes droits ?', ar: 'فيكن تعيدوا حساب حقوقي؟', en: 'Can you recalculate my benefits?' },
          { fr: 'majorer', ar: 'يزيد / يرفع', en: 'to increase' },
          { fr: 'Le montant peut être majoré selon la situation.', ar: 'المبلغ ممكن يزيد حسب الوضع.', en: 'The amount may be increased depending on the situation.' },
          { fr: 'minorer', ar: 'يخفّض', en: 'to reduce' },
          { fr: 'Le montant a été minoré.', ar: 'المبلغ تم تخفيضه.', en: 'The amount was reduced.' },
          { fr: 'réviser', ar: 'يراجع / يعيد حساب', en: 'to revise' },
          { fr: 'Le montant peut être révisé.', ar: 'المبلغ ممكن يتراجع/يتعدل.', en: 'The amount may be revised.' },
          { fr: 'ouvrir', ar: 'يفتح / ينشئ', en: 'to open' },
          { fr: 'La CAF a ouvert mes droits.', ar: 'الكاف فتحتلي حقوقي.', en: 'CAF opened my benefits.' },
          { fr: 'attribuer', ar: 'يمنح / يخصص', en: 'to grant / award' },
          { fr: 'La CAF peut attribuer une aide.', ar: 'الكاف ممكن تمنح مساعدة.', en: 'CAF can grant assistance.' },
          { fr: 'notifier', ar: 'يبلّغ رسميًا', en: 'to notify' },
          { fr: 'La CAF m’a notifié sa décision.', ar: 'الكاف بلّغتني بقرارها.', en: 'CAF notified me of its decision.' },
          { fr: 'décider', ar: 'يقرّر', en: 'to decide' },
          { fr: 'La CAF a décidé de suspendre mes droits.', ar: 'الكاف قررت توقف حقوقي.', en: 'CAF decided to suspend my benefits.' },
          { fr: 'motiver', ar: 'يعلّل / يذكر سبب القرار', en: 'to give reasons' },
          { fr: 'Pouvez-vous motiver cette décision ?', ar: 'فيكن توضّحوا سبب هالقرار؟', en: 'Can you give the reasons for this decision?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'أفعال CAF — الدفع والدين', en: 'CAF verbs — payment and debt', fr: 'Verbes CAF — paiement et dette' },
        phrases: [
          { fr: 'verser', ar: 'يدفع / يحوّل', en: 'to pay / transfer' },
          { fr: 'La CAF va verser l’aide.', ar: 'الكاف رح تحوّل المساعدة.', en: 'CAF will pay the benefit.' },
          { fr: 'retenir', ar: 'يحسم / يحتجز', en: 'to withhold / deduct' },
          { fr: 'Pourquoi cette somme a-t-elle été retenue ?', ar: 'ليش انخصم هالمبلغ؟', en: 'Why was this amount withheld?' },
          { fr: 'déduire', ar: 'يخصم', en: 'to deduct' },
          { fr: 'Cette somme a été déduite.', ar: 'هالمبلغ انخصم.', en: 'This amount was deducted.' },
          { fr: 'prélever', ar: 'يسحب من الحساب', en: 'to debit' },
          { fr: 'La somme sera prélevée sur mon compte.', ar: 'المبلغ رح ينسحب من حسابي.', en: 'The amount will be debited from my account.' },
          { fr: 'débiter', ar: 'يخصم من الحساب', en: 'to debit' },
          { fr: 'La somme a été débitée de mon compte.', ar: 'المبلغ انخصم من حسابي.', en: 'The amount was debited from my account.' },
          { fr: 'régler', ar: 'يدفع / يسدد', en: 'to pay / settle' },
          { fr: 'Je dois régler cette dette.', ar: 'لازم سدّد هالدَّين.', en: 'I have to settle this debt.' },
          { fr: 'devoir', ar: 'يكون عليه أن يدفع', en: 'to owe / have to' },
          { fr: 'Je dois rembourser la CAF.', ar: 'لازم رجّع مصاري للكاف.', en: 'I have to repay CAF.' },
          { fr: 'récupérer', ar: 'يسترد', en: 'to recover / reclaim' },
          { fr: 'La CAF peut récupérer un trop-perçu.', ar: 'الكاف ممكن تسترد مبلغًا دُفع زيادة.', en: 'CAF can recover an overpayment.' },
          { fr: 'La CAF récupère le trop-perçu.', ar: 'الكاف بتسترد المبلغ المدفوع زيادة.', en: 'CAF recovers the overpayment.' },
          { fr: 'recouvrer', ar: 'يسترد مبلغًا مستحقًا', en: 'to recover' },
          { fr: 'La CAF doit recouvrer cette somme.', ar: 'الكاف لازم تسترد هالمبلغ.', en: 'CAF must recover this amount.' },
          { fr: 'échelonner', ar: 'يقسّط', en: 'to pay in installments' },
          { fr: 'Est-ce que je peux échelonner le remboursement ?', ar: 'فيني قسّط المبلغ اللي لازم رجّعو؟', en: 'Can I pay the repayment in installments?' },
          { fr: 'Puis-je échelonner le remboursement ?', ar: 'فيني قسّط المبلغ؟', en: 'Can I pay the repayment in installments?' },
          { fr: 'Je vais rembourser cette somme.', ar: 'رح رجّع هالمبلغ.', en: 'I will repay this amount.' },
          { fr: 'acquitter', ar: 'يسدّد', en: 'to pay / settle' },
          { fr: 'Je dois m’acquitter de mon loyer.', ar: 'لازم سدّد الإيجار.', en: 'I have to pay my rent.' },
          { fr: 'payer', ar: 'يدفع', en: 'to pay' },
          { fr: 'Je paie mon loyer chaque mois.', ar: 'بدفع إيجاري كل شهر.', en: 'I pay my rent every month.' }
        ]
      },
      {
        icon: '⚖️',
        title: { ar: 'أفعال CAF — المشاكل والاعتراض', en: 'CAF verbs — problems and appeals', fr: 'Verbes CAF — problèmes et recours' },
        phrases: [
          { fr: 'bloquer', ar: 'يوقف / يجمّد', en: 'to block' },
          { fr: 'Mon paiement est bloqué.', ar: 'دفعتي موقوفة.', en: 'My payment is blocked.' },
          { fr: 'rétablir', ar: 'يعيد / يعيد التفعيل', en: 'to restore' },
          { fr: 'Pouvez-vous rétablir mes droits ?', ar: 'فيكن ترجعوا تفعّلوا حقوقي؟', en: 'Can you restore my benefits?' },
          { fr: 'contester', ar: 'يعترض / يطعن', en: 'to dispute / challenge' },
          { fr: 'Je souhaite contester cette décision.', ar: 'بدي اعترض على هالقرار.', en: 'I want to challenge this decision.' },
          { fr: 'faire appel', ar: 'يستأنف / يطعن', en: 'to appeal' },
          { fr: 'Je souhaite faire appel de cette décision.', ar: 'بدي أستأنف هالقرار.', en: 'I want to appeal this decision.' },
          { fr: 'réclamer', ar: 'يطالب بـ', en: 'to claim / demand' },
          { fr: 'Je voudrais réclamer le paiement qui manque.', ar: 'بدي طالب بالدفع اللي ما وصلني.', en: 'I would like to claim the missing payment.' },
          { fr: 'Je voudrais réclamer le paiement manquant.', ar: 'بدي طالب بالمبلغ الناقص.', en: 'I want to claim the missing payment.' },
          { fr: 'La CAF me réclame une somme.', ar: 'الكاف عم تطالبني بمبلغ.', en: 'CAF is asking me to pay a sum.' },
          { fr: 'réexaminer', ar: 'يعيد دراسة', en: 'to review again' },
          { fr: 'Je demande que mon dossier soit réexaminé.', ar: 'بطلب إعادة دراسة ملفي.', en: 'I request that my file be reviewed again.' },
          { fr: 'Je demande un réexamen de mon dossier.', ar: 'بطلب إعادة دراسة ملفي.', en: 'I request a review of my file.' },
          { fr: 'relancer', ar: 'يتابع الطلب / يعاود التواصل', en: 'to follow up' },
          { fr: 'Je voudrais relancer ma demande.', ar: 'بدي تابع طلبي.', en: 'I would like to follow up on my application.' },
          { fr: 'Je voudrais relancer mon dossier.', ar: 'بدي تابع ملفي.', en: 'I would like to follow up on my file.' },
          { fr: 'insister', ar: 'يصرّ / يؤكد بشدة', en: 'to insist' },
          { fr: 'Je voudrais insister sur ce point.', ar: 'بدي أكد على هالنقطة.', en: 'I would like to insist on this point.' }
        ]
      },
      {
        icon: '📞',
        title: { ar: 'أفعال CAF — التواصل والموظف', en: 'CAF verbs — contact and staff', fr: 'Verbes CAF — contact et agent' },
        phrases: [
          { fr: 'se connecter', ar: 'يسجّل الدخول', en: 'to log in' },
          { fr: 'Je n’arrive pas à me connecter à mon compte.', ar: 'ما عم اقدر فوت على حسابي.', en: 'I can’t log into my account.' },
          { fr: 'joindre', ar: 'يتمكّن من الوصول إلى / يتصل بـ', en: 'to reach' },
          { fr: 'Je n’arrive pas à joindre la CAF.', ar: 'ما عم اقدر أوصل للكاف.', en: 'I can’t reach CAF.' },
          { fr: 'Comment puis-je vous contacter ?', ar: 'كيف فيني أتواصل معكم؟', en: 'How can I contact you?' },
          { fr: 'répondre', ar: 'يجيب / يرد', en: 'to answer / reply' },
          { fr: 'Je dois répondre à ce message.', ar: 'لازم رد على هالرسالة.', en: 'I have to reply to this message.' },
          { fr: 'informer', ar: 'يُخبر / يُعلم', en: 'to inform' },
          { fr: 'La CAF m’a informé du changement.', ar: 'الكاف أخبرتني بالتغيير.', en: 'CAF informed me of the change.' },
          { fr: 'prévenir', ar: 'يُخبر مسبقًا', en: 'to notify' },
          { fr: 'Je dois prévenir la CAF de mon déménagement.', ar: 'لازم أخبر الكاف بانتقالي.', en: 'I have to notify CAF about my move.' },
          { fr: 'avertir', ar: 'يُبلغ / يحذّر', en: 'to notify / warn' },
          { fr: 'Je dois vous avertir de ce changement.', ar: 'لازم بلّغكم عن هالتغيير.', en: 'I need to notify you of this change.' },
          { fr: 'orienter', ar: 'يوجّه', en: 'to direct' },
          { fr: 'Pouvez-vous m’orienter vers le bon service ?', ar: 'فيكم توجهوني للقسم المناسب؟', en: 'Can you direct me to the right service?' },
          { fr: 'accompagner', ar: 'يساعد / يرافق', en: 'to assist' },
          { fr: 'Pouvez-vous m’accompagner dans cette démarche ?', ar: 'فيكم تساعدوني بهالإجراء؟', en: 'Can you assist me with this process?' },
          { fr: 'conseiller', ar: 'ينصح / يوجّه', en: 'to advise' },
          { fr: 'Que me conseillez-vous de faire ?', ar: 'شو بتنصحوني أعمل؟', en: 'What do you advise me to do?' },
          { fr: 'être pris en compte', ar: 'يتم أخذه بعين الاعتبار', en: 'to be taken into account' },
          { fr: 'Votre revenu sera pris en compte.', ar: 'دخلك رح يتم أخذه بعين الاعتبار.', en: 'Your income will be taken into account.' },
          { fr: 'être éligible', ar: 'يكون مستوفيًا للشروط', en: 'to be eligible' },
          { fr: 'Vous êtes éligible à cette aide.', ar: 'أنت مستوفي شروط هالمساعدة.', en: 'You are eligible for this benefit.' },
          { fr: 'ouvrir droit à', ar: 'يعطي الحق بـ', en: 'to entitle to' },
          { fr: 'Ce logement ouvre droit à l’APL.', ar: 'هالسكن بيعطي الحق بالـ APL.', en: 'This accommodation entitles you to APL.' },
          { fr: 'être à jour', ar: 'يكون محدّثًا / منتظمًا', en: 'to be up to date' },
          { fr: 'Mon dossier est à jour.', ar: 'ملفي محدّث.', en: 'My file is up to date.' },
          { fr: 'être en attente', ar: 'يكون قيد الانتظار', en: 'to be pending' },
          { fr: 'Ma demande est en attente.', ar: 'طلبي قيد الانتظار.', en: 'My application is pending.' },
          { fr: 'être en cours', ar: 'يكون قيد المعالجة', en: 'to be in progress' },
          { fr: 'Mon dossier est en cours de traitement.', ar: 'ملفي قيد المعالجة.', en: 'My file is being processed.' },
          { fr: 'être accordé', ar: 'يُمنح', en: 'to be granted' },
          { fr: 'L’aide m’a été accordée.', ar: 'تم منحي المساعدة.', en: 'The benefit was granted to me.' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'أفعال CAF — الوضع والسكن والعمل', en: 'CAF verbs — situation, housing, work', fr: 'Verbes CAF — situation, logement, travail' },
        phrases: [
          { fr: 'conserver', ar: 'يحتفظ بـ', en: 'to keep / retain' },
          { fr: 'renouveler', ar: 'يجدّد', en: 'to renew' },
          { fr: 'Je dois renouveler ma demande.', ar: 'لازم جدّد طلبي.', en: 'I need to renew my application.' },
          { fr: 'changer', ar: 'يغيّر', en: 'to change' },
          { fr: 'Ma situation a changé.', ar: 'وضعي تغيّر.', en: 'My situation has changed.' },
          { fr: 'déménager', ar: 'ينتقل من منزل', en: 'to move house' },
          { fr: 'Je vais déménager bientôt.', ar: 'رح انتقل قريبًا.', en: 'I’m moving soon.' },
          { fr: 'quitter', ar: 'يترك', en: 'to leave' },
          { fr: 'J’ai quitté mon ancien logement.', ar: 'تركت بيتي القديم.', en: 'I left my old accommodation.' },
          { fr: 'emménager', ar: 'ينتقل إلى منزل جديد', en: 'to move into' },
          { fr: 'J’ai emménagé le mois dernier.', ar: 'انتقلت للبيت الشهر الماضي.', en: 'I moved in last month.' },
          { fr: 'héberger', ar: 'يستضيف / يؤوي', en: 'to accommodate' },
          { fr: 'J’héberge une personne chez moi.', ar: 'أنا مستضيف شخص ببيتي.', en: 'I accommodate someone at my home.' },
          { fr: 'occuper', ar: 'يشغل / يسكن', en: 'to occupy' },
          { fr: 'J’occupe ce logement depuis un an.', ar: 'ساكن بهالبيت من سنة.', en: 'I have lived in this accommodation for a year.' },
          { fr: 'louer', ar: 'يستأجر', en: 'to rent' },
          { fr: 'Je loue un appartement.', ar: 'أنا مستأجر شقة.', en: 'I rent an apartment.' },
          { fr: 'hériter', ar: 'يرث', en: 'to inherit' },
          { fr: 'J’ai hérité d’un logement.', ar: 'ورثت مسكنًا.', en: 'I inherited a property.' },
          { fr: 'séparer', ar: 'ينفصل', en: 'to separate' },
          { fr: 'Nous sommes séparés.', ar: 'نحن منفصلين.', en: 'We are separated.' },
          { fr: 'reprendre', ar: 'يستأنف / يعود إلى', en: 'to resume' },
          { fr: 'Je reprends mon travail.', ar: 'رجعت على شغلي.', en: 'I am returning to work.' },
          { fr: 'cesser', ar: 'يتوقف عن', en: 'to stop / cease' },
          { fr: 'J’ai cessé mon activité.', ar: 'أوقفت عملي/نشاطي.', en: 'I stopped my activity.' },
          { fr: 'travailler', ar: 'يعمل', en: 'to work' },
          { fr: 'Je travaille actuellement.', ar: 'أنا أشتغل حاليًا.', en: 'I am currently working.' },
          { fr: 'embaucher', ar: 'يوظّف', en: 'to hire' },
          { fr: 'Mon employeur m’a embauché en CDD.', ar: 'صاحب العمل وظفني بعقد CDD.', en: 'My employer hired me on a fixed-term contract.' },
          { fr: 'licencier', ar: 'يفصل من العمل', en: 'to dismiss' },
          { fr: 'J’ai été licencié.', ar: 'تم فصلي من العمل.', en: 'I was dismissed.' },
          { fr: 'démissionner', ar: 'يستقيل', en: 'to resign' },
          { fr: 'J’ai démissionné de mon emploi.', ar: 'استقلت من شغلي.', en: 'I resigned from my job.' },
          { fr: 'débuter', ar: 'يبدأ', en: 'to start' },
          { fr: 'J’ai débuté mon nouveau travail.', ar: 'بلشت شغلي الجديد.', en: 'I started my new job.' },
          { fr: 'terminer', ar: 'ينهي', en: 'to finish / end' },
          { fr: 'Mon contrat se termine bientôt.', ar: 'عقدي رح يخلص قريبًا.', en: 'My contract ends soon.' },
          { fr: 'Je dois déclarer mes revenus chaque trimestre.', ar: 'لازم صرّح عن دخلي كل ثلاثة أشهر.', en: 'I have to declare my income every quarter.' },
          { fr: 'cumuler', ar: 'يجمع بين', en: 'to combine' },
          { fr: 'Est-ce que je peux cumuler le RSA et un salaire ?', ar: 'فيني اجمع بين RSA وراتب؟', en: 'Can I combine RSA and a salary?' },
          { fr: 'atteindre', ar: 'يبلغ / يصل إلى', en: 'to reach' },
          { fr: 'Mes revenus ont atteint ce montant.', ar: 'دخلي وصل لهالمبلغ.', en: 'My income reached this amount.' },
          { fr: 'diminuer', ar: 'ينخفض', en: 'to decrease' },
          { fr: 'Mes revenus ont diminué.', ar: 'دخلي انخفض.', en: 'My income decreased.' },
          { fr: 'augmenter', ar: 'يرتفع', en: 'to increase' },
          { fr: 'Mon salaire a augmenté.', ar: 'راتبي ارتفع.', en: 'My salary increased.' },
          { fr: 'varier', ar: 'يتغيّر', en: 'to vary' },
          { fr: 'Le montant de l’aide peut varier.', ar: 'قيمة المساعدة ممكن تتغير.', en: 'The benefit amount may vary.' }
        ]
      },
      {
        icon: '📋',
        title: { ar: 'أفعال CAF — الإجراء والمهلة', en: 'CAF verbs — procedure and deadlines', fr: 'Verbes CAF — démarche et délais' },
        phrases: [
          { fr: 'effectuer', ar: 'يقوم بـ / يُنجز', en: 'to carry out' },
          { fr: 'Je dois effectuer une démarche en ligne.', ar: 'لازم أعمل إجراء أونلاين.', en: 'I have to complete an online procedure.' },
          { fr: 'entamer', ar: 'يبدأ إجراءً', en: 'to start / initiate' },
          { fr: 'Je souhaite entamer une démarche auprès de la CAF.', ar: 'بدي بلّش إجراء مع الكاف.', en: 'I want to start a process with CAF.' },
          { fr: 'poursuivre', ar: 'يتابع / يستمر', en: 'to continue' },
          { fr: 'Je souhaite poursuivre ma demande.', ar: 'بدي تابع طلبي.', en: 'I want to continue my application.' },
          { fr: 'finaliser', ar: 'يُنهي / يستكمل', en: 'to finalize' },
          { fr: 'Je voudrais finaliser mon dossier.', ar: 'بدي كمّل ملفي للآخر.', en: 'I would like to finalize my file.' },
          { fr: 'accomplir', ar: 'يُنجز', en: 'to carry out' },
          { fr: 'Je dois accomplir cette démarche rapidement.', ar: 'لازم أنجز هالإجراء بسرعة.', en: 'I need to complete this process quickly.' },
          { fr: 'respecter', ar: 'يلتزم بـ', en: 'to comply with' },
          { fr: 'Je dois respecter le délai.', ar: 'لازم التزم بالمهلة.', en: 'I have to meet the deadline.' },
          { fr: 'dépasser', ar: 'يتجاوز', en: 'to exceed' },
          { fr: 'Le délai est dépassé.', ar: 'المهلة انتهت/تم تجاوزها.', en: 'The deadline has passed.' },
          { fr: 'attendre', ar: 'ينتظر', en: 'to wait' },
          { fr: 'J’attends toujours une réponse.', ar: 'لسا ناطر جواب.', en: 'I’m still waiting for an answer.' },
          { fr: 'patienter', ar: 'ينتظر', en: 'to wait' },
          { fr: 'On m’a demandé de patienter.', ar: 'طلبوا مني انتظر.', en: 'I was asked to wait.' },
          { fr: 'prolonger', ar: 'يمدّد', en: 'to extend' },
          { fr: 'Est-ce possible de prolonger le délai ?', ar: 'ممكن تمديد المهلة؟', en: 'Is it possible to extend the deadline?' },
          { fr: 'reporter', ar: 'يؤجل', en: 'to postpone' },
          { fr: 'La date a été reportée.', ar: 'تم تأجيل الموعد.', en: 'The date was postponed.' },
          { fr: 'anticiper', ar: 'يقدّم / يخطط مسبقًا', en: 'to anticipate' },
          { fr: 'Je préfère anticiper ma demande.', ar: 'بفضّل قدّم طلبي مسبقًا.', en: 'I prefer to submit my request in advance.' }
        ]
      },
      {
        icon: '📬',
        title: { ar: 'أفعال CAF — في الرسائل الرسمية', en: 'CAF verbs — in official letters', fr: 'Verbes CAF — courriers officiels' },
        phrases: [
          { fr: 'concerner', ar: 'يخصّ / يتعلق بـ', en: 'to concern' },
          { fr: 'Cette demande concerne mon logement.', ar: 'هالطلب متعلق بسكني.', en: 'This request concerns my accommodation.' },
          { fr: 'Cette démarche concerne votre situation familiale.', ar: 'هالإجراء متعلق بوضعك العائلي.', en: 'This procedure concerns your family situation.' },
          { fr: 'porter sur', ar: 'يتعلق بـ', en: 'to concern / relate to' },
          { fr: 'Cette notification porte sur mon APL.', ar: 'هالإشعار متعلق بالـAPL تبعي.', en: 'This notification concerns my APL.' },
          { fr: 's’appliquer', ar: 'ينطبق', en: 'to apply' },
          { fr: 'Cette règle s’applique à ma situation.', ar: 'هالقاعدة بتنطبق على وضعي.', en: 'This rule applies to my situation.' },
          { fr: 'dépendre de', ar: 'يعتمد على', en: 'to depend on' },
          { fr: 'Le montant dépend de mes revenus.', ar: 'المبلغ بيعتمد على دخلي.', en: 'The amount depends on my income.' },
          { fr: 'prendre en compte', ar: 'يأخذ بعين الاعتبار', en: 'to take into account' },
          { fr: 'La CAF prend mes revenus en compte.', ar: 'الكاف بتاخد دخلي بعين الاعتبار.', en: 'CAF takes my income into account.' },
          { fr: 'tenir compte de', ar: 'يأخذ بعين الاعتبار', en: 'to take into account' },
          { fr: 'La CAF tient compte de mes revenus.', ar: 'الكاف بتاخد دخلي بعين الاعتبار.', en: 'CAF takes my income into account.' },
          { fr: 'entraîner', ar: 'يؤدي إلى / يسبب', en: 'to result in' },
          { fr: 'Ce changement peut entraîner une baisse de l’aide.', ar: 'هالتغيير ممكن يؤدي لانخفاض المساعدة.', en: 'This change may result in a reduction in the benefit.' },
          { fr: 'conditionner', ar: 'يجعل شيئًا مشروطًا بـ', en: 'to make conditional on' },
          { fr: 'L’aide est conditionnée à certaines conditions.', ar: 'المساعدة مرتبطة بشروط معينة.', en: 'The benefit is subject to certain conditions.' },
          { fr: 'être soumis à', ar: 'يكون خاضعًا لـ', en: 'to be subject to' },
          { fr: 'Cette aide est soumise à certaines conditions.', ar: 'هالمساعدة خاضعة لشروط معينة.', en: 'This benefit is subject to certain conditions.' },
          { fr: 'être concerné par', ar: 'يكون معنيًا بـ', en: 'to be affected by / concerned by' },
          { fr: 'Je suis concerné par cette demande.', ar: 'أنا معني بهالطلب.', en: 'I am concerned by this request.' },
          { fr: 'faire l’objet de', ar: 'يكون موضوعًا لـ', en: 'to be subject to' },
          { fr: 'Mon dossier fait l’objet d’un contrôle.', ar: 'ملفي عم يخضع لتدقيق.', en: 'My file is subject to a review.' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'عبارات قوية تحفظها', en: 'Strong phrases to memorize', fr: 'Phrases fortes à retenir' },
        phrases: [
          { fr: 'Je voudrais savoir ce qui manque à mon dossier.', ar: 'بدي أعرف شو ناقص بملفي.', en: 'I would like to know what is missing from my file.' },
          { fr: 'Je voudrais savoir où en est ma demande.', ar: 'بدي أعرف لوين وصل طلبي.', en: 'I would like to know the status of my application.' },
          { fr: 'Pouvez-vous prendre ma situation en compte ?', ar: 'فيكن تاخدوا وضعي بعين الاعتبار؟', en: 'Can you take my situation into account?' },
          { fr: 'Est-ce que ce changement va modifier mes droits ?', ar: 'هالتغيير رح يغيّر حقوقي؟', en: 'Will this change affect my benefits?' },
          { fr: 'Est-ce que je dois faire une nouvelle demande ?', ar: 'لازم أقدّم طلب جديد؟', en: 'Do I need to submit a new application?' },
          { fr: 'Est-ce que mon dossier est toujours en cours de traitement ?', ar: 'ملفي لسا قيد المعالجة؟', en: 'Is my file still being processed?' }
        ]
      },
      {
        icon: '💸',
        title: { ar: '⭐ trop-perçu — المعنى والمفردات', en: 'trop-perçu — meaning and vocabulary', fr: 'trop-perçu — vocabulaire' },
        phrases: [
          { fr: 'trop-perçu', ar: 'مبلغ تم دفعه لك بالزيادة', en: 'overpayment' },
          { fr: 'La CAF m’a versé un trop-perçu.', ar: 'الكاف حولتلي مبلغ زيادة.', en: 'CAF paid me an overpayment.' },
          { fr: 'J’ai reçu un trop-perçu de 200 euros.', ar: 'استلمت 200 يورو زيادة.', en: 'I received a €200 overpayment.' },
          { fr: 'un indu', ar: 'مبلغ مستحق على الشخص بسبب دفع زائد', en: 'an overpayment / debt' },
          { fr: 'une dette', ar: 'دَين / مبلغ مستحق', en: 'a debt' },
          { fr: 'une somme', ar: 'مبلغ مالي', en: 'a sum / amount' },
          { fr: 'un montant', ar: 'قيمة / مبلغ', en: 'amount' },
          { fr: 'un remboursement', ar: 'تسديد / إعادة المبلغ', en: 'repayment' },
          { fr: 'une retenue', ar: 'اقتطاع / حسم', en: 'deduction / withholding' },
          { fr: 'une échéance', ar: 'دفعة مستحقة / موعد دفع', en: 'installment / due date' },
          { fr: 'un échéancier', ar: 'جدول تقسيط', en: 'repayment schedule' },
          { fr: 'une notification', ar: 'إشعار رسمي', en: 'notification' },
          { fr: 'une mise en demeure', ar: 'إنذار رسمي بالدفع', en: 'formal demand for payment' },
          { fr: 'une régularisation', ar: 'تسوية / تصحيح الوضع المالي', en: 'adjustment / regularization' },
          { fr: 'le solde', ar: 'الرصيد المتبقي', en: 'balance' },
          { fr: 'le montant restant dû', ar: 'المبلغ المتبقي المستحق', en: 'remaining amount due' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: 'trop-perçu — أهم الأفعال', en: 'trop-perçu — key verbs', fr: 'trop-perçu — verbes' },
        phrases: [
          { fr: 'La CAF m’a versé 500 euros.', ar: 'الكاف حولتلي 500 يورو.', en: 'CAF paid me €500.' },
          { fr: 'J’ai perçu une somme trop importante.', ar: 'استلمت مبلغًا أكبر من المفروض.', en: 'I received too much money.' },
          { fr: 'La CAF a constaté un trop-perçu.', ar: 'الكاف اكتشفت وجود مبلغ مدفوع بالزيادة.', en: 'CAF identified an overpayment.' },
          { fr: 'La CAF me réclame 300 euros.', ar: 'الكاف عم تطالبني بـ300 يورو.', en: 'CAF is asking me for €300.' },
          { fr: 'La CAF récupère le trop-perçu.', ar: 'الكاف تسترد المبلغ المدفوع بالزيادة.', en: 'CAF recovers the overpayment.' },
          { fr: 'Je dois rembourser le trop-perçu.', ar: 'لازم رجّع المبلغ الزائد.', en: 'I have to repay the overpayment.' },
          { fr: 'La CAF retient une partie de mon aide.', ar: 'الكاف عم تحسم جزء من مساعدتي.', en: 'CAF is withholding part of my benefit.' },
          { fr: 'La CAF déduit 50 euros chaque mois.', ar: 'الكاف بتخصم 50 يورو كل شهر.', en: 'CAF deducts €50 each month.' },
          { fr: 'Je voudrais régulariser ma situation.', ar: 'بدي سوّي وضعي.', en: 'I would like to settle my situation.' },
          { fr: 'Est-ce que je peux échelonner le remboursement ?', ar: 'فيني قسّط المبلغ؟', en: 'Can I pay the amount in installments?' },
          { fr: 'Je souhaite contester ce trop-perçu.', ar: 'بدي اعترض على هالمبلغ الزائد.', en: 'I want to dispute this overpayment.' },
          { fr: 'Je voudrais vérifier le calcul.', ar: 'بدي أتأكد من الحساب.', en: 'I would like to check the calculation.' },
          { fr: 'Pouvez-vous m’expliquer ce trop-perçu ?', ar: 'فيكم تشرحولي ليش في مبلغ زيادة؟', en: 'Can you explain this overpayment?' }
        ]
      },
      {
        icon: '❓',
        title: { ar: 'trop-perçu — الأسباب والأسئلة', en: 'trop-perçu — causes and questions', fr: 'trop-perçu — causes et questions' },
        phrases: [
          { fr: 'un changement de revenus', ar: 'تغيّر بالدخل', en: 'change in income' },
          { fr: 'un changement de situation familiale', ar: 'تغيّر بالوضع العائلي', en: 'change in family situation' },
          { fr: 'un changement de logement', ar: 'تغيّر السكن', en: 'change of accommodation' },
          { fr: 'un déménagement', ar: 'انتقال من منزل', en: 'move' },
          { fr: 'une reprise d’activité', ar: 'العودة إلى العمل', en: 'return to work' },
          { fr: 'une fin de contrat', ar: 'انتهاء عقد العمل', en: 'end of employment contract' },
          { fr: 'une erreur de déclaration', ar: 'خطأ بالتصريح', en: 'declaration error' },
          { fr: 'une déclaration tardive', ar: 'تصريح متأخر', en: 'late declaration' },
          { fr: 'une information non déclarée', ar: 'معلومة لم يتم التصريح عنها', en: 'undeclared information' },
          { fr: 'une modification des droits', ar: 'تعديل الحقوق', en: 'change in benefit entitlement' },
          { fr: 'Le trop-perçu est lié à un changement de revenus.', ar: 'المبلغ الزائد سببه تغيّر بالدخل.', en: 'The overpayment is related to a change in income.' },
          { fr: 'Pourquoi ai-je un trop-perçu ?', ar: 'ليش عندي مبلغ مدفوع بالزيادة؟', en: 'Why do I have an overpayment?' },
          { fr: 'À quoi correspond ce trop-perçu ?', ar: 'هالمبلغ الزائد متعلق بشو؟', en: 'What does this overpayment relate to?' },
          { fr: 'Quel est le montant du trop-perçu ?', ar: 'قديش قيمة المبلغ الزائد؟', en: 'What is the amount of the overpayment?' },
          { fr: 'Comment ce montant a-t-il été calculé ?', ar: 'كيف انحسب هالمبلغ؟', en: 'How was this amount calculated?' },
          { fr: 'Sur quelle période porte le trop-perçu ?', ar: 'عن أي فترة محسوب هالمبلغ؟', en: 'What period does the overpayment cover?' },
          { fr: 'Depuis quelle date ai-je un trop-perçu ?', ar: 'من أي تاريخ صار عندي مبلغ زائد؟', en: 'Since what date have I had an overpayment?' },
          { fr: 'Quelle est l’origine de ce trop-perçu ?', ar: 'شو سبب هالمبلغ الزائد؟', en: 'What is the reason for this overpayment?' },
          { fr: 'Est-ce une erreur de ma part ?', ar: 'هل الغلطة مني؟', en: 'Is it my mistake?' },
          { fr: 'Est-ce que je dois vraiment rembourser cette somme ?', ar: 'لازم فعلًا رجّع هالمبلغ؟', en: 'Do I really have to repay this amount?' }
        ]
      },
      {
        icon: '🤔',
        title: { ar: 'trop-perçu — ما فهمت السبب', en: 'trop-perçu — not understanding', fr: 'trop-perçu — ne pas comprendre' },
        phrases: [
          { fr: 'Je ne comprends pas pourquoi j’ai un trop-perçu.', ar: 'ما فهمت ليش عندي مبلغ مدفوع بالزيادة.', en: 'I don’t understand why I have an overpayment.' },
          { fr: 'Je voudrais comprendre le calcul.', ar: 'بدي أفهم طريقة الحساب.', en: 'I would like to understand the calculation.' },
          { fr: 'Pouvez-vous m’expliquer en détail ?', ar: 'فيكم تشرحولي بالتفصيل؟', en: 'Can you explain it to me in detail?' },
          { fr: 'Pouvez-vous me dire quelle information a entraîné ce trop-perçu ?', ar: 'فيكم تخبروني أي معلومة سببت هالمبلغ الزائد؟', en: 'Can you tell me which information caused this overpayment?' },
          { fr: 'Je voudrais vérifier s’il n’y a pas d’erreur.', ar: 'بدي أتأكد إنه ما في غلطة.', en: 'I would like to check that there isn’t a mistake.' }
        ]
      },
      {
        icon: '✅',
        title: { ar: 'trop-perçu — إذا وافقت على المبلغ', en: 'trop-perçu — agreeing to repay', fr: 'trop-perçu — accepter de rembourser' },
        phrases: [
          { fr: 'Je reconnais le trop-perçu.', ar: 'أنا بوافق إن في مبلغ زائد.', en: 'I acknowledge the overpayment.' },
          { fr: 'Je souhaite le rembourser.', ar: 'بدي سدده.', en: 'I want to repay it.' },
          { fr: 'Comment puis-je rembourser cette somme ?', ar: 'كيف فيني سدّد هالمبلغ؟', en: 'How can I repay this amount?' },
          { fr: 'Quel est le délai pour rembourser ?', ar: 'شو المهلة لتسديده؟', en: 'What is the deadline for repayment?' },
          { fr: 'Puis-je payer en plusieurs fois ?', ar: 'فيني ادفعه على دفعات؟', en: 'Can I pay in installments?' }
        ]
      },
      {
        icon: '📅',
        title: { ar: 'trop-perçu — التقسيط والخصم', en: 'trop-perçu — instalments and deductions', fr: 'trop-perçu — échéancier et retenues' },
        phrases: [
          { fr: 'Je ne peux pas payer cette somme en une seule fois.', ar: 'ما فيني ادفع هالمبلغ دفعة وحدة.', en: 'I can’t pay this amount all at once.' },
          { fr: 'Est-ce que je peux bénéficier d’un échéancier ?', ar: 'فيني أعمل جدول تقسيط؟', en: 'Can I get a repayment plan?' },
          { fr: 'Est-ce que je peux échelonner le remboursement ?', ar: 'فيني قسّط التسديد؟', en: 'Can I pay the repayment in installments?' },
          { fr: 'Combien dois-je payer chaque mois ?', ar: 'قديش لازم ادفع كل شهر؟', en: 'How much do I have to pay each month?' },
          { fr: 'Pendant combien de mois ?', ar: 'لمدة كم شهر؟', en: 'For how many months?' },
          { fr: 'Quand commencera le remboursement ?', ar: 'إمتى بيبدأ التسديد؟', en: 'When will repayment start?' },
          { fr: 'Est-ce que la CAF va retenir une partie de mes allocations ?', ar: 'الكاف رح تخصم جزء من مساعداتي؟', en: 'Will CAF withhold part of my benefits?' },
          { fr: 'Combien allez-vous retenir chaque mois ?', ar: 'قديش رح تخصموا كل شهر؟', en: 'How much will you deduct each month?' },
          { fr: 'Pendant combien de temps ?', ar: 'لمدة قديش؟', en: 'For how long?' },
          { fr: 'Est-ce que le remboursement sera prélevé automatiquement ?', ar: 'التسديد رح ينسحب تلقائيًا؟', en: 'Will repayment be deducted automatically?' }
        ]
      },
      {
        icon: '⚖️',
        title: { ar: 'trop-perçu — الاعتراض', en: 'trop-perçu — disputing', fr: 'trop-perçu — contester' },
        phrases: [
          { fr: 'Je conteste ce trop-perçu.', ar: 'أنا معترض على هالمبلغ الزائد.', en: 'I dispute this overpayment.' },
          { fr: 'Je souhaite contester le montant réclamé.', ar: 'بدي اعترض على المبلغ المطلوب مني.', en: 'I want to dispute the amount being claimed.' },
          { fr: 'Je ne suis pas d’accord avec ce calcul.', ar: 'أنا مو موافق على هالحساب.', en: 'I disagree with this calculation.' },
          { fr: 'Je pense qu’il y a une erreur dans le calcul.', ar: 'بعتقد في غلطة بالحساب.', en: 'I think there is an error in the calculation.' },
          { fr: 'Je voudrais demander un réexamen de mon dossier.', ar: 'بدي أطلب إعادة دراسة ملفي.', en: 'I would like to request a review of my file.' },
          { fr: 'Pouvez-vous vérifier mon dossier avant que je rembourse ?', ar: 'فيكم تراجعوا ملفي قبل ما سدّد؟', en: 'Can you check my file before I repay?' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'trop-perçu — بعد الدفع ورسائل CAF', en: 'trop-perçu — after paying, CAF letters', fr: 'trop-perçu — après paiement, courriers' },
        phrases: [
          { fr: 'J’ai déjà remboursé cette somme.', ar: 'أنا دفعت هالمبلغ من قبل.', en: 'I have already repaid this amount.' },
          { fr: 'J’ai effectué le remboursement.', ar: 'قمت بالتسديد.', en: 'I made the repayment.' },
          { fr: 'Le paiement a-t-il bien été enregistré ?', ar: 'هل تم تسجيل الدفعة بشكل صحيح؟', en: 'Was the payment properly recorded?' },
          { fr: 'Pouvez-vous confirmer que mon remboursement a été reçu ?', ar: 'فيكم تأكدوا إنكم استلمتوا التسديد؟', en: 'Can you confirm that my repayment was received?' },
          { fr: 'Quel est le solde restant ?', ar: 'قديش باقي عليّ؟', en: 'What is the remaining balance?' },
          { fr: 'Vous avez un trop-perçu.', ar: 'عندكم مبلغ مدفوع بالزيادة.', en: 'You have an overpayment.' },
          { fr: 'Vous êtes redevable de 300 €.', ar: 'عليك مبلغ 300 يورو.', en: 'You owe €300.' },
          { fr: 'Vous devez rembourser cette somme.', ar: 'لازم تسدد هالمبلغ.', en: 'You must repay this amount.' },
          { fr: 'Le montant restant dû est de 200 €.', ar: 'المبلغ المتبقي عليك هو 200 يورو.', en: 'The remaining amount due is €200.' },
          { fr: 'Une retenue sera effectuée sur vos prestations.', ar: 'رح يتم حسم مبلغ من مساعداتك.', en: 'A deduction will be made from your benefits.' },
          { fr: 'Le remboursement sera effectué par retenues.', ar: 'التسديد رح يتم عن طريق اقتطاعات.', en: 'Repayment will be made through deductions.' },
          { fr: 'Votre dette est en cours de recouvrement.', ar: 'عم يتم تحصيل المبلغ المستحق عليكم.', en: 'Your debt is being recovered.' },
          { fr: 'Votre dette est soldée.', ar: 'تم تسديد الدين بالكامل.', en: 'Your debt has been fully paid.' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'trop-perçu — أهم 15 جملة', en: 'trop-perçu — top 15 phrases', fr: 'trop-perçu — top 15' },
        phrases: [
          { fr: 'Pourquoi ai-je un trop-perçu ?', ar: 'ليش عندي مبلغ مدفوع بالزيادة؟', en: 'Why do I have an overpayment?' },
          { fr: 'À quoi correspond ce trop-perçu ?', ar: 'هالمبلغ متعلق بشو؟', en: 'What does this overpayment relate to?' },
          { fr: 'Quel est le montant exact ?', ar: 'شو المبلغ بالضبط؟', en: 'What is the exact amount?' },
          { fr: 'Comment avez-vous calculé ce montant ?', ar: 'كيف حسبتوا هالمبلغ؟', en: 'How did you calculate this amount?' },
          { fr: 'Sur quelle période porte-t-il ?', ar: 'عن أي فترة هو؟', en: 'What period does it cover?' },
          { fr: 'Est-ce que je dois le rembourser ?', ar: 'لازم سدده؟', en: 'Do I have to repay it?' },
          { fr: 'Comment puis-je le rembourser ?', ar: 'كيف فيني سدده؟', en: 'How can I repay it?' },
          { fr: 'Puis-je payer en plusieurs fois ?', ar: 'فيني ادفعه على دفعات؟', en: 'Can I pay in installments?' },
          { fr: 'Puis-je avoir un échéancier ?', ar: 'فيني آخد جدول تقسيط؟', en: 'Can I get a repayment plan?' },
          { fr: 'Combien dois-je payer chaque mois ?', ar: 'قديش لازم ادفع كل شهر؟', en: 'How much do I have to pay each month?' },
          { fr: 'Est-ce que vous allez retenir une partie de mes prestations ?', ar: 'رح تخصموا جزء من مساعداتي؟', en: 'Will you deduct part of my benefits?' },
          { fr: 'Je ne comprends pas ce calcul.', ar: 'ما فهمت هالحساب.', en: 'I don’t understand this calculation.' },
          { fr: 'Je pense qu’il y a une erreur.', ar: 'بعتقد في غلطة.', en: 'I think there is an error.' },
          { fr: 'Je souhaite contester ce trop-perçu.', ar: 'بدي اعترض على هالمبلغ الزائد.', en: 'I want to dispute this overpayment.' },
          { fr: 'Je voudrais demander un réexamen de mon dossier.', ar: 'بدي أطلب إعادة دراسة ملفي.', en: 'I would like to request a review of my file.' }
        ]
      },
      {
        icon: '⛔',
        title: { ar: '⭐ توقفت عن العمل — إخبار الـCAF', en: 'Stopped working — telling CAF', fr: 'Fin d’activité — informer la CAF' },
        phrases: [
          { fr: 'J’ai arrêté de travailler.', ar: 'توقفت عن العمل.', en: 'I stopped working.' },
          { fr: 'J’ai cessé mon activité.', ar: 'أوقفت عملي/نشاطي.', en: 'I stopped my activity.' },
          { fr: 'Mon contrat de travail est terminé.', ar: 'عقد عملي انتهى.', en: 'My employment contract has ended.' },
          { fr: 'Mon contrat a pris fin.', ar: 'عقدي انتهى.', en: 'My contract ended.' },
          { fr: 'Mon contrat se termine aujourd’hui.', ar: 'عقدي ينتهي اليوم.', en: 'My contract ends today.' },
          { fr: 'Je ne travaille plus depuis le…', ar: 'لم أعد أعمل منذ تاريخ...', en: 'I haven’t been working since...' },
          { fr: 'Je viens de perdre mon emploi.', ar: 'خسرت عملي للتو.', en: 'I have just lost my job.' },
          { fr: 'Je suis actuellement sans emploi.', ar: 'أنا حاليًا بدون عمل.', en: 'I am currently unemployed.' },
          { fr: 'Mon CDD est arrivé à son terme.', ar: 'عقد الـCDD تبعي انتهى.', en: 'My fixed-term contract has ended.' },
          { fr: 'Mon CDD n’a pas été renouvelé.', ar: 'ما تم تجديد عقد الـCDD تبعي.', en: 'My fixed-term contract was not renewed.' },
          { fr: 'Mon contrat n’a pas été renouvelé.', ar: 'عقدي ما تجدد.', en: 'My contract was not renewed.' },
          { fr: 'Mon dernier jour de travail était le…', ar: 'آخر يوم إلي بالشغل كان بتاريخ...', en: 'My last working day was...' },
          { fr: 'Je voudrais signaler la fin de mon contrat de travail.', ar: 'بدي بلّغ عن انتهاء عقد عملي.', en: 'I would like to report the end of my employment contract.' },
          { fr: 'Je voudrais signaler un changement de situation professionnelle.', ar: 'بدي بلّغ عن تغيير بوضعي المهني.', en: 'I would like to report a change in my employment situation.' },
          { fr: 'Je voudrais mettre à jour ma situation.', ar: 'بدي حدّث وضعي.', en: 'I would like to update my situation.' },
          { fr: 'Que dois-je déclarer à la CAF ?', ar: 'شو لازم صرّح للـCAF؟', en: 'What do I need to declare to CAF?' },
          { fr: 'Est-ce que je dois faire une démarche particulière ?', ar: 'لازم أعمل إجراء معيّن؟', en: 'Do I need to take any specific steps?' }
        ]
      },
      {
        icon: '📉',
        title: { ar: 'توقفت عن العمل — الدخل والحقوق والأوراق', en: 'Stopped working — income, rights, documents', fr: 'Fin d’activité — revenus, droits, documents' },
        phrases: [
          { fr: 'Mes revenus ont diminué.', ar: 'دخلي انخفض.', en: 'My income has decreased.' },
          { fr: 'Je n’ai plus de salaire.', ar: 'ما عاد عندي راتب.', en: 'I no longer have a salary.' },
          { fr: 'Je n’ai plus de revenus professionnels.', ar: 'ما عاد عندي دخل من العمل.', en: 'I no longer have employment income.' },
          { fr: 'Je voudrais savoir si mes droits vont changer.', ar: 'بدي أعرف إذا حقوقي رح تتغير.', en: 'I would like to know if my benefits will change.' },
          { fr: 'Est-ce que mon changement de situation va modifier mes droits ?', ar: 'هل تغيير وضعي رح يغيّر حقوقي؟', en: 'Will my change of situation affect my benefits?' },
          { fr: 'Est-ce que mon aide au logement va changer ?', ar: 'هل مساعدة السكن رح تتغير؟', en: 'Will my housing benefit change?' },
          { fr: 'Est-ce que j’ai droit à une autre aide ?', ar: 'هل إلي حق بمساعدة تانية؟', en: 'Am I entitled to another benefit?' },
          { fr: 'Je suis à la recherche d’un emploi.', ar: 'أنا عم دوّر على شغل.', en: 'I am looking for a job.' },
          { fr: 'Je vais m’inscrire à France Travail.', ar: 'رح سجّل بـFrance Travail.', en: 'I’m going to register with France Travail.' },
          { fr: 'Est-ce que je dois déclarer mon inscription à France Travail ?', ar: 'لازم صرّح للـCAF إني سجلت بـFrance Travail؟', en: 'Do I need to report my registration with France Travail?' },
          { fr: 'Je vais percevoir l’allocation chômage.', ar: 'رح أتلقى إعانة البطالة.', en: 'I will receive unemployment benefits.' },
          { fr: 'Je ne sais pas encore si j’aurai droit au chômage.', ar: 'لسا ما بعرف إذا إلي حق بالبطالة.', en: 'I don’t know yet if I’ll be entitled to unemployment benefits.' },
          { fr: 'Est-ce que ma situation me permet de bénéficier du RSA ?', ar: 'هل وضعي بيسمحلي استفيد من RSA؟', en: 'Does my situation make me eligible for RSA?' },
          { fr: 'Je voudrais savoir si j’ai droit au RSA maintenant que je ne travaille plus.', ar: 'بدي أعرف إذا صار إلي حق بـRSA بعد ما وقفت شغل.', en: 'I would like to know if I’m entitled to RSA now that I no longer work.' },
          { fr: 'Dois-je faire une nouvelle demande de RSA ?', ar: 'لازم أقدّم طلب RSA جديد؟', en: 'Do I need to submit a new RSA application?' },
          { fr: 'Est-ce que vous avez besoin de mon attestation de fin de contrat ?', ar: 'بتحتاجوا شهادة انتهاء العقد؟', en: 'Do you need my proof of end of employment?' },
          { fr: 'Est-ce que vous avez besoin de mon dernier bulletin de salaire ?', ar: 'بتحتاجوا آخر قسيمة راتب؟', en: 'Do you need my latest payslip?' },
          { fr: 'Est-ce que je dois fournir mon attestation employeur ?', ar: 'لازم قدّم شهادة صاحب العمل؟', en: 'Do I need to provide my employer certificate?' },
          { fr: 'Je peux vous envoyer les documents en ligne.', ar: 'فيني أبعتلكم الأوراق أونلاين.', en: 'I can send you the documents online.' },
          { fr: 'Bonjour, je voudrais signaler un changement de situation professionnelle. Mon contrat de travail est terminé et je ne travaille plus actuellement. Je voudrais mettre à jour mon dossier et savoir si cela va modifier mes droits.', ar: 'مرحبا، بدي بلّغ عن تغيير بوضعي المهني. عقد عملي انتهى وحاليًا ما عاد عم اشتغل. بدي حدّث ملفي وأعرف إذا هالشي رح يغيّر حقوقي.', en: 'Hello, I would like to report a change in my employment situation. My employment contract has ended and I am currently no longer working. I would like to update my file and know whether this will affect my benefits.' }
        ]
      }
    ]
  },
  {
    id: 'logement',
    icon: '🏘️',
    name: { ar: 'السكن الاجتماعي وعقد الإيجار', en: 'Social housing and the lease', fr: 'Le logement social et le bail' },
    desc: {
      ar: 'طلب HLM، عرض الشقة وزيارتها، معاينة الدخول، العقد والإيجار والـcharges',
      en: 'Applying for HLM, housing offers and visits, the move-in inspection, lease, rent and charges',
      fr: 'Demande de HLM, proposition et visite, état des lieux d’entrée, bail, loyer et charges'
    },
    sections: [
      {
        icon: '🏠',
        title: { ar: 'HLM — طلب السكن الاجتماعي', en: 'HLM — applying for social housing', fr: 'HLM — demande de logement social' },
        phrases: [
          { fr: 'Je voudrais faire une demande de logement social.', ar: 'بدي قدّم طلب سكن اجتماعي.', en: 'I’d like to apply for social housing.' },
          { fr: 'Je cherche un logement social.', ar: 'عم دور على سكن اجتماعي.', en: 'I’m looking for social housing.' },
          { fr: 'Je voudrais savoir comment faire une demande de logement social.', ar: 'بدي أعرف كيف فيني قدّم على سكن اجتماعي.', en: 'I’d like to know how to apply for social housing.' },
          { fr: 'Je suis déjà demandeur de logement social.', ar: 'أنا أصلاً مقدّم على سكن اجتماعي.', en: 'I’ve already applied for social housing.' }
        ]
      },
      {
        icon: '📋',
        title: { ar: 'HLM — ملف السكن', en: 'HLM — the application file', fr: 'HLM — le dossier' },
        phrases: [
          { fr: 'J’ai un numéro unique de demande de logement social.', ar: 'عندي رقم طلب السكن الاجتماعي.', en: 'I have a social housing application number.' },
          { fr: 'Voici mon numéro unique.', ar: 'هاد رقم طلبي.', en: 'Here is my application number.' },
          { fr: 'Je voudrais vérifier mon dossier.', ar: 'بدي أتأكد من ملفي.', en: 'I’d like to check my application.' },
          { fr: 'Est-ce que mon dossier est complet ?', ar: 'ملفي كامل؟', en: 'Is my application complete?' },
          { fr: 'Est-ce qu’il manque un document ?', ar: 'في ورقة ناقصة؟', en: 'Is any document missing?' },
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدّمها؟', en: 'What documents do I need to provide?' }
        ]
      },
      {
        icon: '⏳',
        title: { ar: 'HLM — انتظار السكن', en: 'HLM — waiting for housing', fr: 'HLM — l’attente' },
        phrases: [
          { fr: 'Depuis combien de temps j’attends un logement ?', ar: 'من إمتى وأنا ناطر سكن؟', en: 'How long have I been waiting for housing?' },
          { fr: 'Où en est ma demande ?', ar: 'لوين وصل طلبي؟', en: 'What is the status of my application?' },
          { fr: 'Ma demande est toujours en cours.', ar: 'طلبي لسا قيد المعالجة.', en: 'My application is still being processed.' },
          { fr: 'Quand est-ce que je pourrai avoir une proposition ?', ar: 'إمتى ممكن يجيني عرض سكن؟', en: 'When might I receive a housing offer?' },
          { fr: 'Est-ce que je peux avoir une proposition prochainement ?', ar: 'ممكن يجيني عرض قريب؟', en: 'Could I receive an offer soon?' }
        ]
      },
      {
        icon: '🏢',
        title: { ar: 'HLM — التواصل مع مؤسسة السكن', en: 'HLM — contacting the housing provider', fr: 'HLM — contacter le bailleur social' },
        phrases: [
          { fr: 'Bonjour, je suis locataire chez vous.', ar: 'مرحبا، أنا مستأجر عندكم.', en: 'Hello, I’m a tenant with your organization.' },
          { fr: 'Je voudrais parler de mon logement.', ar: 'بدي احكي بخصوص السكن تبعي.', en: 'I’d like to discuss my accommodation.' },
          { fr: 'Je voudrais faire le point sur ma situation.', ar: 'بدي شوف وين وصل وضعي.', en: 'I’d like to review my situation.' },
          { fr: 'Pouvez-vous vérifier mon dossier, s’il vous plaît ?', ar: 'فيكم تتأكدوا من ملفي لو سمحتوا؟', en: 'Could you check my file, please?' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'HLM — طلب شقة أرخص أو أصغر', en: 'HLM — asking for cheaper or smaller housing', fr: 'HLM — logement moins cher ou plus petit' },
        phrases: [
          { fr: 'Je cherche un logement moins cher.', ar: 'عم دور على سكن أرخص.', en: 'I’m looking for cheaper housing.' },
          { fr: 'Je cherche un petit logement.', ar: 'عم دور على بيت صغير.', en: 'I’m looking for a small accommodation.' },
          { fr: 'Je cherche plutôt un studio.', ar: 'بفضّل دور على ستوديو.', en: 'I’m preferably looking for a studio.' },
          { fr: 'Je cherche un logement avec un loyer abordable.', ar: 'عم دور على سكن إيجاره مناسب.', en: 'I’m looking for affordable housing.' },
          { fr: 'Je voudrais un logement avec un loyer moins élevé.', ar: 'بدي سكن إيجاره أقل.', en: 'I’d like housing with lower rent.' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'HLM — الإيجار والمصاريف (charges)', en: 'HLM — rent and charges', fr: 'HLM — loyer et charges' },
        phrases: [
          { fr: 'Quel est le montant du loyer ?', ar: 'قديش الإيجار؟', en: 'How much is the rent?' },
          { fr: 'Combien coûte le logement par mois, charges comprises ?', ar: 'قديش بيكلف السكن بالشهر مع المصاريف؟', en: 'How much does the accommodation cost per month including charges?' },
          { fr: 'Quel est le montant des charges ?', ar: 'قديش مبلغ المصاريف؟', en: 'How much are the charges?' },
          { fr: 'Les charges sont-elles comprises dans le loyer ?', ar: 'المصاريف داخلة بالإيجار؟', en: 'Are the charges included in the rent?' },
          { fr: 'Est-ce que le chauffage est compris ?', ar: 'التدفئة داخلة بالسعر؟', en: 'Is heating included?' },
          { fr: 'Est-ce que l’eau chaude est comprise ?', ar: 'المي السخنة داخلة؟', en: 'Is hot water included?' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'HLM — CAF وAPL', en: 'HLM — CAF and APL', fr: 'HLM — Caf et APL' },
        phrases: [
          { fr: 'Est-ce que le logement est conventionné APL ?', ar: 'هل السكن خاضع لاتفاقية APL؟', en: 'Is the accommodation APL-conventioned?' },
          { fr: 'Est-ce que je peux bénéficier de l’APL ?', ar: 'فيني استفيد من APL؟', en: 'Can I receive APL?' },
          { fr: 'Le loyer est-il pris en compte par la CAF ?', ar: 'الإيجار بينحسب عند CAF؟', en: 'Is the rent taken into account by CAF?' },
          { fr: 'L’APL est-elle versée directement au bailleur ?', ar: 'الـAPL بتندفع مباشرة للمالك؟', en: 'Is the APL paid directly to the landlord?' },
          { fr: 'Est-ce que l’APL est déduite de mon loyer ?', ar: 'الـAPL بتنخصم من الإيجار؟', en: 'Is the APL deducted from my rent?' }
        ]
      },
      {
        icon: '🔄',
        title: { ar: 'HLM — طلب نقل (mutation)', en: 'HLM — transfer request (mutation)', fr: 'HLM — demande de mutation' },
        phrases: [
          { fr: 'Je voudrais faire une demande de mutation.', ar: 'بدي قدّم طلب نقل لسكن تاني.', en: 'I’d like to apply for a transfer.' },
          { fr: 'Je souhaite changer de logement.', ar: 'بدي غيّر السكن.', en: 'I want to change accommodation.' },
          { fr: 'Je voudrais un logement plus petit.', ar: 'بدي سكن أصغر.', en: 'I’d like smaller accommodation.' },
          { fr: 'Je voudrais un logement moins cher.', ar: 'بدي سكن أرخص.', en: 'I’d like cheaper accommodation.' },
          { fr: 'Je voudrais changer de quartier.', ar: 'بدي غيّر المنطقة.', en: 'I’d like to change neighborhood.' },
          { fr: 'Est-ce que ma demande de mutation est enregistrée ?', ar: 'طلب النقل تبعي مسجّل؟', en: 'Has my transfer request been registered?' }
        ]
      },
      {
        icon: '🩺',
        title: { ar: 'HLM — تغيير السكن لأسباب صحية', en: 'HLM — moving for health reasons', fr: 'HLM — changer pour raisons de santé' },
        phrases: [
          { fr: 'Je souhaite changer de logement pour des raisons de santé.', ar: 'بدي غيّر السكن لأسباب صحية.', en: 'I want to change accommodation for health reasons.' },
          { fr: 'Mon logement actuel ne correspond plus à ma situation.', ar: 'السكن الحالي ما عاد مناسب لوضعي.', en: 'My current accommodation is no longer suitable for my situation.' },
          { fr: 'Je voudrais savoir si ma situation peut être prise en compte.', ar: 'بدي أعرف إذا ممكن ياخدوا وضعي بعين الاعتبار.', en: 'I’d like to know whether my situation can be taken into account.' },
          { fr: 'J’ai des justificatifs à fournir.', ar: 'عندي إثباتات فيني قدمها.', en: 'I have supporting documents to provide.' }
        ]
      },
      {
        icon: '📍',
        title: { ar: 'HLM — طلب منطقة معينة', en: 'HLM — asking for a specific area', fr: 'HLM — demander un quartier' },
        phrases: [
          { fr: 'Je cherche un logement à Strasbourg.', ar: 'عم دور على سكن بستراسبورغ.', en: 'I’m looking for housing in Strasbourg.' },
          { fr: 'Je préfère rester à Strasbourg.', ar: 'بفضّل ضل بستراسبورغ.', en: 'I’d prefer to stay in Strasbourg.' },
          { fr: 'Je voudrais rester dans ce quartier.', ar: 'بدي ضل بهالمنطقة.', en: 'I’d like to stay in this neighborhood.' },
          { fr: 'Je suis ouvert à d’autres quartiers.', ar: 'ما عندي مشكلة بمناطق تانية.', en: 'I’m open to other neighborhoods.' }
        ]
      },
      {
        icon: '📞',
        title: { ar: 'HLM — عرض السكن', en: 'HLM — the housing offer', fr: 'HLM — la proposition de logement' },
        phrases: [
          { fr: 'J’ai reçu une proposition de logement.', ar: 'وصلني عرض سكن.', en: 'I received a housing offer.' },
          { fr: 'Est-ce que je peux visiter le logement ?', ar: 'فيني شوف السكن؟', en: 'Can I visit the accommodation?' },
          { fr: 'Quand est-ce que je peux visiter le logement ?', ar: 'إمتى فيني شوف السكن؟', en: 'When can I visit the accommodation?' },
          { fr: 'Où se trouve le logement ?', ar: 'وين موجود السكن؟', en: 'Where is the accommodation located?' },
          { fr: 'Quel est le montant du loyer avec les charges ?', ar: 'قديش الإيجار مع المصاريف؟', en: 'How much is the rent including charges?' },
          { fr: 'Quelle est la surface du logement ?', ar: 'قديش مساحة البيت؟', en: 'What is the size of the accommodation?' }
        ]
      },
      {
        icon: '👀',
        title: { ar: 'HLM — أثناء زيارة الشقة', en: 'HLM — during the visit', fr: 'HLM — pendant la visite' },
        phrases: [
          { fr: 'Est-ce que le chauffage est collectif ou individuel ?', ar: 'التدفئة مركزية ولا فردية؟', en: 'Is the heating collective or individual?' },
          { fr: 'Est-ce qu’il y a un ascenseur ?', ar: 'في مصعد؟', en: 'Is there an elevator?' },
          { fr: 'Est-ce qu’il y a une cave ?', ar: 'في قبو/مستودع؟', en: 'Is there a cellar/storage room?' },
          { fr: 'Est-ce qu’il y a un parking ?', ar: 'في موقف سيارة؟', en: 'Is there parking?' },
          { fr: 'Est-ce que l’eau chaude est collective ?', ar: 'المي السخنة مركزية؟', en: 'Is hot water collective?' },
          { fr: 'Quels sont les équipements compris ?', ar: 'شو التجهيزات المشمولة؟', en: 'What equipment is included?' }
        ]
      },
      {
        icon: '✍️',
        title: { ar: 'HLM — قبول أو رفض العرض', en: 'HLM — accepting or refusing the offer', fr: 'HLM — accepter ou refuser' },
        phrases: [
          { fr: 'J’accepte la proposition de logement.', ar: 'بوافق على عرض السكن.', en: 'I accept the housing offer.' },
          { fr: 'Je souhaite accepter le logement.', ar: 'بدي وافق على السكن.', en: 'I would like to accept the accommodation.' },
          { fr: 'Je souhaite refuser la proposition.', ar: 'بدي أرفض العرض.', en: 'I would like to refuse the offer.' },
          { fr: 'Je voudrais savoir quelles seront les conséquences d’un refus.', ar: 'بدي أعرف شو بيصير إذا رفضت.', en: 'I’d like to know what the consequences of refusing will be.' }
        ]
      },
      {
        icon: '🛠️',
        title: { ar: 'HLM — مشكلة بالبيت وتدخل تقني', en: 'HLM — problems and repairs', fr: 'HLM — problèmes et interventions' },
        phrases: [
          { fr: 'J’ai un problème dans mon logement.', ar: 'عندي مشكلة بالبيت.', en: 'I have a problem in my accommodation.' },
          { fr: 'Il y a une fuite d’eau.', ar: 'في تسريب مي.', en: 'There is a water leak.' },
          { fr: 'Le chauffage ne fonctionne pas.', ar: 'التدفئة ما عم تشتغل.', en: 'The heating isn’t working.' },
          { fr: 'Il y a de l’humidité.', ar: 'في رطوبة.', en: 'There is dampness.' },
          { fr: 'Il y a des moisissures.', ar: 'في عفن.', en: 'There is mold.' },
          { fr: 'La serrure ne fonctionne pas.', ar: 'القفل ما عم يشتغل.', en: 'The lock isn’t working.' },
          { fr: 'Je voudrais signaler un problème technique.', ar: 'بدي بلّغ عن مشكلة تقنية.', en: 'I’d like to report a technical problem.' },
          { fr: 'Pouvez-vous envoyer quelqu’un pour réparer le problème ?', ar: 'فيكم تبعتوا حدا يصلّح المشكلة؟', en: 'Can you send someone to fix the problem?' },
          { fr: 'Quand est-ce que quelqu’un peut intervenir ?', ar: 'إمتى ممكن يجي حدا؟', en: 'When can someone come?' },
          { fr: 'J’ai déjà signalé le problème.', ar: 'أنا بلّغت عن المشكلة من قبل.', en: 'I’ve already reported the problem.' },
          { fr: 'Le problème n’est toujours pas réglé.', ar: 'المشكلة لسا ما انحلت.', en: 'The problem still hasn’t been fixed.' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'HLM — إذا ارتفع الإيجار', en: 'HLM — if the rent increases', fr: 'HLM — augmentation de loyer' },
        phrases: [
          { fr: 'Mon loyer a augmenté.', ar: 'إيجاري زاد.', en: 'My rent has increased.' },
          { fr: 'Pourquoi mon loyer a-t-il augmenté ?', ar: 'ليش إيجاري زاد؟', en: 'Why has my rent increased?' },
          { fr: 'Pouvez-vous m’expliquer cette augmentation ?', ar: 'فيكم تشرحولي سبب هالزيادة؟', en: 'Could you explain this increase?' },
          { fr: 'Je rencontre des difficultés pour payer mon loyer.', ar: 'عم واجه صعوبة بدفع الإيجار.', en: 'I’m having difficulty paying my rent.' },
          { fr: 'Je voudrais trouver une solution.', ar: 'بدي لاقي حل.', en: 'I’d like to find a solution.' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم كلمات HLM', en: 'Key HLM vocabulary', fr: 'Vocabulaire clé HLM' },
        phrases: [
          { fr: 'logement social', ar: 'سكن اجتماعي', en: 'social housing' },
          { fr: 'HLM', ar: 'سكن اجتماعي', en: 'social housing' },
          { fr: 'bailleur social', ar: 'مؤسسة/مالك السكن الاجتماعي', en: 'social housing provider' },
          { fr: 'locataire', ar: 'مستأجر', en: 'tenant' },
          { fr: 'loyer', ar: 'إيجار', en: 'rent' },
          { fr: 'charges', ar: 'مصاريف إضافية', en: 'charges' },
          { fr: 'bail', ar: 'عقد الإيجار', en: 'lease' },
          { fr: 'mutation', ar: 'نقل من سكن اجتماعي لسكن آخر', en: 'transfer' },
          { fr: 'demande de logement social', ar: 'طلب سكن اجتماعي', en: 'social housing application' },
          { fr: 'numéro unique', ar: 'الرقم الموحد لطلب السكن', en: 'application number' },
          { fr: 'proposition de logement', ar: 'عرض سكن', en: 'housing offer' },
          { fr: 'état des lieux', ar: 'معاينة حالة السكن', en: 'property inspection' },
          { fr: 'préavis', ar: 'إشعار المغادرة', en: 'notice' },
          { fr: 'APL', ar: 'مساعدة السكن', en: 'housing assistance' },
          { fr: 'logement conventionné', ar: 'سكن خاضع لاتفاقية مع الدولة', en: 'conventioned accommodation' },
          { fr: 'charges comprises', ar: 'شامل المصاريف', en: 'charges included' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم 10 جمل لسكن HLM', en: 'Top 10 HLM phrases', fr: 'Top 10 des phrases HLM' },
        phrases: [
          { fr: 'Je cherche un logement social.', ar: 'عم دور على سكن اجتماعي.', en: 'I’m looking for social housing.' },
          { fr: 'Je voudrais faire une demande de logement social.', ar: 'بدي قدّم طلب سكن اجتماعي.', en: 'I’d like to apply for social housing.' },
          { fr: 'Où en est ma demande ?', ar: 'لوين وصل طلبي؟', en: 'What is the status of my application?' },
          { fr: 'Je voudrais faire une demande de mutation.', ar: 'بدي قدّم طلب نقل لسكن تاني.', en: 'I’d like to apply for a transfer.' },
          { fr: 'Je cherche un logement moins cher.', ar: 'عم دور على سكن أرخص.', en: 'I’m looking for cheaper housing.' },
          { fr: 'Combien coûte le logement, charges comprises ?', ar: 'قديش بيكلف السكن مع المصاريف؟', en: 'How much does the accommodation cost including charges?' },
          { fr: 'Est-ce que le logement est conventionné APL ?', ar: 'هل السكن خاضع لاتفاقية APL؟', en: 'Is the accommodation APL-conventioned?' },
          { fr: 'Je voudrais visiter le logement.', ar: 'بدي شوف السكن.', en: 'I’d like to visit the accommodation.' },
          { fr: 'Je voudrais savoir quelles seront les conséquences d’un refus.', ar: 'بدي أعرف شو بيصير إذا رفضت العرض.', en: 'I’d like to know what the consequences of refusing will be.' },
          { fr: 'Je souhaite quitter mon logement.', ar: 'بدي اترك بيتي.', en: 'I want to leave my accommodation.' }
        ]
      },
      {
        icon: '🔍',
        title: { ar: 'معاينة الدخول — عند الوصول', en: 'Move-in inspection — arrival', fr: 'État des lieux d’entrée — arrivée' },
        phrases: [
          { fr: 'Bonjour, je viens pour l’état des lieux d’entrée.', ar: 'مرحبا، جاي كرمال معاينة البيت عند الدخول.', en: 'Hello, I’m here for the move-in inspection.' },
          { fr: 'C’est bien ici pour l’état des lieux ?', ar: 'هون مكان معاينة البيت؟', en: 'Is this the place for the inspection?' },
          { fr: 'Je suis le nouveau locataire.', ar: 'أنا المستأجر الجديد.', en: 'I’m the new tenant.' },
          { fr: 'Voici ma pièce d’identité.', ar: 'هاي هويتي.', en: 'Here is my ID.' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: 'معاينة الدخول — المفاتيح', en: 'Move-in inspection — the keys', fr: 'État des lieux d’entrée — les clés' },
        phrases: [
          { fr: 'Je vais récupérer les clés aujourd’hui.', ar: 'اليوم رح استلم المفاتيح.', en: 'I’m going to collect the keys today.' },
          { fr: 'Combien de clés vais-je avoir ?', ar: 'قديش مفتاح رح آخد؟', en: 'How many keys will I get?' },
          { fr: 'J’ai les clés de l’appartement, mais aussi celles de la boîte aux lettres ?', ar: 'معي مفاتيح البيت، وكمان مفتاح صندوق البريد؟', en: 'Do I have the apartment keys and the mailbox key too?' },
          { fr: 'Est-ce qu’il y a une clé pour la cave ?', ar: 'في مفتاح للقبو كمان؟', en: 'Is there a key for the basement?' },
          { fr: 'Et pour le local à vélos ?', ar: 'وكمان للغرفة تبع الدراجات؟', en: 'And for the bike room?' },
          { fr: 'Quand est-ce que je peux récupérer les clés ?', ar: 'إمتى فيني استلم المفاتيح؟', en: 'When can I collect the keys?' },
          { fr: 'Je viens récupérer les clés de mon logement.', ar: 'جيت استلم مفاتيح بيتي.', en: 'I’m here to collect the keys to my accommodation.' }
        ]
      },
      {
        icon: '📝',
        title: { ar: 'معاينة الدخول — فحص الغرف', en: 'Move-in inspection — checking the rooms', fr: 'État des lieux d’entrée — pièce par pièce' },
        phrases: [
          { fr: 'On va faire l’état des lieux pièce par pièce ?', ar: 'رح نعمل المعاينة غرفة غرفة؟', en: 'Are we going to inspect the apartment room by room?' },
          { fr: 'On commence par quelle pièce ?', ar: 'من أي غرفة منبلّش؟', en: 'Which room do we start with?' },
          { fr: 'Je voudrais vérifier chaque pièce.', ar: 'بدي أتأكد من كل غرفة.', en: 'I’d like to check every room.' },
          { fr: 'Est-ce que tout doit être indiqué sur l’état des lieux ?', ar: 'لازم كل شي يكون مذكور بورقة المعاينة؟', en: 'Does everything have to be written on the inspection report?' },
          { fr: 'Je voudrais signaler quelques problèmes.', ar: 'بدي أذكر كم شغلة فيها مشكلة.', en: 'I’d like to report a few problems.' },
          { fr: 'Il y a déjà une trace ici.', ar: 'في أثر/علامة هون من قبل.', en: 'There is already a mark here.' },
          { fr: 'Il y a une rayure ici.', ar: 'في خدش هون.', en: 'There is a scratch here.' },
          { fr: 'Il y a une tache sur le mur.', ar: 'في بقعة عالحيط.', en: 'There is a stain on the wall.' },
          { fr: 'Il y a un trou dans le mur.', ar: 'في فتحة بالحيط.', en: 'There is a hole in the wall.' },
          { fr: 'La peinture est abîmée ici.', ar: 'الدهان مخرب هون.', en: 'The paint is damaged here.' }
        ]
      },
      {
        icon: '🚪',
        title: { ar: 'معاينة الدخول — الأبواب والنوافذ', en: 'Move-in inspection — doors and windows', fr: 'État des lieux — portes et fenêtres' },
        phrases: [
          { fr: 'La porte ferme correctement ?', ar: 'الباب بيسكّر بشكل منيح؟', en: 'Does the door close properly?' },
          { fr: 'La serrure fonctionne bien ?', ar: 'القفل شغال منيح؟', en: 'Does the lock work properly?' },
          { fr: 'La fenêtre s’ouvre bien.', ar: 'الشباك بينفتح منيح.', en: 'The window opens properly.' },
          { fr: 'Cette fenêtre ne ferme pas correctement.', ar: 'هالشباك ما بيسكّر منيح.', en: 'This window doesn’t close properly.' },
          { fr: 'Il y a un problème avec le volet.', ar: 'في مشكلة بالشتر/الستارة الخارجية.', en: 'There is a problem with the shutter.' },
          { fr: 'Le volet fonctionne correctement.', ar: 'الشتر شغال منيح.', en: 'The shutter works properly.' }
        ]
      },
      {
        icon: '💡',
        title: { ar: 'معاينة الدخول — الكهرباء والماء والتدفئة', en: 'Move-in inspection — electricity, water, heating', fr: 'État des lieux — électricité, eau, chauffage' },
        phrases: [
          { fr: 'On peut vérifier les prises électriques ?', ar: 'فينا نجرب مقابس الكهرباء؟', en: 'Can we check the electrical outlets?' },
          { fr: 'Cette prise ne fonctionne pas.', ar: 'هالمقبس ما بيشتغل.', en: 'This outlet doesn’t work.' },
          { fr: 'Il y a de l’électricité dans toutes les pièces ?', ar: 'في كهربا بكل الغرف؟', en: 'Is there electricity in all the rooms?' },
          { fr: 'Les interrupteurs fonctionnent ?', ar: 'مفاتيح الكهرباء شغالة؟', en: 'Do the switches work?' },
          { fr: 'La lumière fonctionne.', ar: 'الضو شغال.', en: 'The light works.' },
          { fr: 'On peut vérifier l’eau ?', ar: 'فينا نجرب المي؟', en: 'Can we check the water?' },
          { fr: 'L’eau chaude fonctionne ?', ar: 'المي السخنة شغالة؟', en: 'Does the hot water work?' },
          { fr: 'Le robinet fuit.', ar: 'الحنفية عم تسرّب مي.', en: 'The tap is leaking.' },
          { fr: 'Il y a une fuite ici.', ar: 'في تسرّب مي هون.', en: 'There is a leak here.' },
          { fr: 'La chasse d’eau fonctionne ?', ar: 'سيفون التواليت شغال؟', en: 'Does the toilet flush work?' },
          { fr: 'L’évier s’évacue correctement ?', ar: 'مي المجلى عم تنزل منيح؟', en: 'Does the sink drain properly?' },
          { fr: 'Le chauffage fonctionne ?', ar: 'التدفئة شغالة؟', en: 'Does the heating work?' },
          { fr: 'Comment fonctionne le chauffage ?', ar: 'كيف بتشتغل التدفئة؟', en: 'How does the heating work?' },
          { fr: 'Où est le thermostat ?', ar: 'وين الثرموستات؟', en: 'Where is the thermostat?' },
          { fr: 'Le chauffage est individuel ou collectif ?', ar: 'التدفئة فردية ولا مركزية؟', en: 'Is the heating individual or collective?' }
        ]
      },
      {
        icon: '🍳',
        title: { ar: 'معاينة الدخول — المطبخ', en: 'Move-in inspection — the kitchen', fr: 'État des lieux — la cuisine' },
        phrases: [
          { fr: 'Est-ce que la plaque de cuisson fonctionne ?', ar: 'عيون الطبخ شغالة؟', en: 'Does the cooktop work?' },
          { fr: 'Le four fonctionne ?', ar: 'الفرن شغال؟', en: 'Does the oven work?' },
          { fr: 'La hotte fonctionne ?', ar: 'الشفاط شغال؟', en: 'Does the extractor hood work?' },
          { fr: 'Il y a un problème avec le four.', ar: 'في مشكلة بالفرن.', en: 'There is a problem with the oven.' },
          { fr: 'Le réfrigérateur est-il compris dans le logement ?', ar: 'البراد داخل مع السكن؟', en: 'Is the refrigerator included with the apartment?' }
        ]
      },
      {
        icon: '🧱',
        title: { ar: 'معاينة الدخول — الجدران والأرضية والسقف', en: 'Move-in inspection — walls, floor, ceiling', fr: 'État des lieux — murs, sol, plafond' },
        phrases: [
          { fr: 'Il y a une fissure ici.', ar: 'في تشقّق هون.', en: 'There is a crack here.' },
          { fr: 'Il y a de l’humidité.', ar: 'في رطوبة.', en: 'There is dampness.' },
          { fr: 'Il y a des traces de moisissure.', ar: 'في آثار عفن.', en: 'There are signs of mold.' },
          { fr: 'Le sol est abîmé ici.', ar: 'الأرضية مخربطة/متضررة هون.', en: 'The floor is damaged here.' },
          { fr: 'Le plafond est en bon état.', ar: 'السقف بحالة منيحة.', en: 'The ceiling is in good condition.' }
        ]
      },
      {
        icon: '📸',
        title: { ar: 'معاينة الدخول — التصوير وتسجيل المشاكل', en: 'Move-in inspection — photos and noting problems', fr: 'État des lieux — photos et remarques' },
        phrases: [
          { fr: 'Est-ce que je peux prendre des photos ?', ar: 'فيني آخد صور؟', en: 'Can I take photos?' },
          { fr: 'Je voudrais prendre des photos pour garder une trace de l’état du logement.', ar: 'بدي آخد صور حتى يكون عندي إثبات عن حالة البيت.', en: 'I’d like to take photos to keep a record of the condition of the apartment.' },
          { fr: 'Je préfère prendre des photos de chaque pièce.', ar: 'بفضّل صوّر كل غرفة.', en: 'I prefer to take photos of every room.' },
          { fr: 'Ce problème était déjà présent à mon arrivée.', ar: 'هالمشكلة كانت موجودة من وقت ما وصلت.', en: 'This problem was already there when I arrived.' },
          { fr: 'Je voudrais que ce soit noté sur l’état des lieux.', ar: 'بدي هالشي ينكتب بورقة المعاينة.', en: 'I’d like this to be noted on the inspection report.' },
          { fr: 'Pouvez-vous l’ajouter à l’état des lieux, s’il vous plaît ?', ar: 'فيك تضيفها على ورقة المعاينة لو سمحت؟', en: 'Could you add it to the inspection report, please?' },
          { fr: 'Je ne suis pas d’accord avec cette description.', ar: 'أنا مو موافق على هالوصف.', en: 'I don’t agree with this description.' },
          { fr: 'Je voudrais ajouter une remarque.', ar: 'بدي أضيف ملاحظة.', en: 'I’d like to add a comment.' },
          { fr: 'Pouvez-vous noter que cette partie est déjà abîmée ?', ar: 'فيك تكتب إنو هالجزء متضرر من قبل؟', en: 'Could you note that this part was already damaged?' }
        ]
      },
      {
        icon: '✍️',
        title: { ar: 'معاينة الدخول — قبل التوقيع', en: 'Move-in inspection — before signing', fr: 'État des lieux — avant de signer' },
        phrases: [
          { fr: 'Je peux relire l’état des lieux avant de signer ?', ar: 'فيني أراجع ورقة المعاينة قبل ما وقّع؟', en: 'Can I read the inspection report before signing?' },
          { fr: 'Je voudrais vérifier que tout est bien indiqué.', ar: 'بدي أتأكد إنو كل شي مكتوب بشكل صحيح.', en: 'I’d like to make sure everything is correctly recorded.' },
          { fr: 'Où dois-je signer ?', ar: 'وين لازم وقّع؟', en: 'Where do I sign?' },
          { fr: 'Je peux avoir une copie de l’état des lieux ?', ar: 'فيني آخد نسخة من ورقة المعاينة؟', en: 'Can I have a copy of the inspection report?' },
          { fr: 'Est-ce que je reçois une copie aujourd’hui ?', ar: 'رح آخد نسخة اليوم؟', en: 'Will I receive a copy today?' },
          { fr: 'Quand est-ce que ce sera réparé ?', ar: 'إمتى رح يتصلّح؟', en: 'When will it be repaired?' },
          { fr: 'Est-ce que quelqu’un va intervenir ?', ar: 'حدا رح يجي يصلّحه؟', en: 'Will someone come to fix it?' },
          { fr: 'Est-ce que vous allez transmettre le problème au service technique ?', ar: 'رح تبعتوا المشكلة للقسم الفني؟', en: 'Will you report the problem to the maintenance department?' }
        ]
      },
      {
        icon: '📬',
        title: { ar: 'معاينة الدخول — العدادات والبريد والأماكن المشتركة', en: 'Move-in inspection — meters, mailbox, common areas', fr: 'État des lieux — compteurs, boîte, parties communes' },
        phrases: [
          { fr: 'Où sont les compteurs ?', ar: 'وين العدادات؟', en: 'Where are the meters?' },
          { fr: 'On doit relever les compteurs aujourd’hui ?', ar: 'لازم نسجّل أرقام العدادات اليوم؟', en: 'Do we need to record the meter readings today?' },
          { fr: 'Quel est le relevé du compteur ?', ar: 'شو قراءة العداد؟', en: 'What is the meter reading?' },
          { fr: 'Est-ce que je dois ouvrir un contrat d’électricité ?', ar: 'لازم افتح عقد كهربا؟', en: 'Do I need to set up an electricity contract?' },
          { fr: 'Où est la boîte aux lettres ?', ar: 'وين صندوق البريد؟', en: 'Where is the mailbox?' },
          { fr: 'Quelle est ma boîte aux lettres ?', ar: 'أي وحدة صندوق بريدي؟', en: 'Which one is my mailbox?' },
          { fr: 'Comment ouvrir la boîte aux lettres ?', ar: 'كيف بتنفتح علبة البريد؟', en: 'How do I open the mailbox?' },
          { fr: 'Où se trouve la cave ?', ar: 'وين القبو؟', en: 'Where is the basement?' },
          { fr: 'Où sont les poubelles ?', ar: 'وين الزبالة/حاويات القمامة؟', en: 'Where are the garbage bins?' },
          { fr: 'Où est le local à vélos ?', ar: 'وين غرفة الدراجات؟', en: 'Where is the bike room?' },
          { fr: 'L’ascenseur fonctionne ?', ar: 'المصعد شغال؟', en: 'Does the elevator work?' },
          { fr: 'Comment accéder aux parties communes ?', ar: 'كيف بفوت على الأماكن المشتركة؟', en: 'How do I access the common areas?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'معاينة الدخول — أسئلة الموظف', en: 'Move-in inspection — questions from the agent', fr: 'État des lieux — questions de l’agent' },
        phrases: [
          { fr: 'Tout est bon pour vous ?', ar: 'كل شي تمام بالنسبة إلك؟', en: 'Is everything okay for you?' },
          { fr: 'Vous avez des remarques ?', ar: 'عندك ملاحظات؟', en: 'Do you have any comments?' },
          { fr: 'Vous avez constaté quelque chose ?', ar: 'لاحظت شي؟', en: 'Did you notice anything?' },
          { fr: 'Vous êtes d’accord avec l’état des lieux ?', ar: 'موافق على المعاينة؟', en: 'Do you agree with the inspection report?' },
          { fr: 'Vous pouvez signer ici.', ar: 'فيك توقّع هون.', en: 'You can sign here.' },
          { fr: 'Vous voulez une copie ?', ar: 'بدك نسخة؟', en: 'Do you want a copy?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم 15 جملة لمعاينة الدخول', en: 'Top 15 move-in inspection phrases', fr: 'Top 15 — état des lieux d’entrée' },
        phrases: [
          { fr: 'Je viens pour l’état des lieux d’entrée.', ar: 'جاي كرمال معاينة البيت عند الدخول.', en: 'I’m here for the move-in inspection.' },
          { fr: 'Je voudrais vérifier chaque pièce.', ar: 'بدي أتأكد من كل غرفة.', en: 'I’d like to check every room.' },
          { fr: 'Je voudrais signaler un problème.', ar: 'بدي أذكر مشكلة.', en: 'I’d like to report a problem.' },
          { fr: 'Il y a déjà une trace ici.', ar: 'في أثر موجود من قبل هون.', en: 'There is already a mark here.' },
          { fr: 'Il y a une rayure ici.', ar: 'في خدش هون.', en: 'There is a scratch here.' },
          { fr: 'Il y a une fuite ici.', ar: 'في تسرّب مي هون.', en: 'There is a leak here.' },
          { fr: 'Cette prise ne fonctionne pas.', ar: 'هالمقبس ما بيشتغل.', en: 'This outlet doesn’t work.' },
          { fr: 'La fenêtre ne ferme pas correctement.', ar: 'الشباك ما بيسكّر منيح.', en: 'The window doesn’t close properly.' },
          { fr: 'Je voudrais que ce soit noté sur l’état des lieux.', ar: 'بدي هالشي ينكتب بورقة المعاينة.', en: 'I’d like this to be noted on the inspection report.' },
          { fr: 'Pouvez-vous l’ajouter à l’état des lieux ?', ar: 'فيك تضيفها على ورقة المعاينة؟', en: 'Could you add it to the inspection report?' },
          { fr: 'Je peux prendre des photos ?', ar: 'فيني آخد صور؟', en: 'Can I take photos?' },
          { fr: 'Je peux relire l’état des lieux avant de signer ?', ar: 'فيني راجع المعاينة قبل ما وقّع؟', en: 'Can I read the inspection report before signing?' },
          { fr: 'Je peux avoir une copie ?', ar: 'فيني آخد نسخة؟', en: 'Can I have a copy?' },
          { fr: 'Où dois-je signer ?', ar: 'وين لازم وقّع؟', en: 'Where do I sign?' },
          { fr: 'Merci, c’est bon pour moi.', ar: 'شكراً، هيك تمام بالنسبة إلي.', en: 'Thank you, that’s fine for me.' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'العقد والإيجار — توقيع العقد', en: 'Lease — signing', fr: 'Le bail — signature' },
        phrases: [
          { fr: 'Je voudrais signer le bail.', ar: 'بدي وقّع عقد الإيجار.', en: 'I’d like to sign the lease.' },
          { fr: 'Voici mon contrat de location.', ar: 'هاد عقد الإيجار تبعي.', en: 'Here is my rental agreement.' },
          { fr: 'Je peux lire le contrat avant de signer ?', ar: 'فيني اقرأ العقد قبل ما وقّع؟', en: 'Can I read the contract before signing?' },
          { fr: 'Pouvez-vous m’expliquer le contrat ?', ar: 'فيكم تشرحولي العقد؟', en: 'Can you explain the contract to me?' },
          { fr: 'Quelle est la durée du bail ?', ar: 'قديش مدة عقد الإيجار؟', en: 'How long is the lease?' },
          { fr: 'Quelle est la date de début du bail ?', ar: 'إمتى بيبلّش العقد؟', en: 'When does the lease start?' },
          { fr: 'Quelle est la date de fin du bail ?', ar: 'إمتى بينتهي العقد؟', en: 'When does the lease end?' },
          { fr: 'Est-ce que le bail est renouvelable ?', ar: 'العقد بيتجدد؟', en: 'Is the lease renewable?' },
          { fr: 'Le bail est à mon nom.', ar: 'العقد باسمي.', en: 'The lease is in my name.' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'العقد والإيجار — مبلغ الإيجار والمصاريف', en: 'Lease — rent and charges', fr: 'Le bail — loyer et charges' },
        phrases: [
          { fr: 'Quel est le montant du loyer ?', ar: 'قديش الإيجار؟', en: 'How much is the rent?' },
          { fr: 'Combien je dois payer par mois ?', ar: 'قديش لازم ادفع بالشهر؟', en: 'How much do I have to pay per month?' },
          { fr: 'Quel est le montant total avec les charges ?', ar: 'قديش المبلغ كامل مع المصاريف؟', en: 'What is the total amount including charges?' },
          { fr: 'Le loyer est de 500 euros, charges comprises.', ar: 'الإيجار 500 يورو شامل المصاريف.', en: 'The rent is €500 including charges.' },
          { fr: 'Les charges sont comprises dans le loyer ?', ar: 'المصاريف داخلة بالإيجار؟', en: 'Are the charges included in the rent?' },
          { fr: 'Combien coûtent les charges ?', ar: 'قديش المصاريف؟', en: 'How much are the charges?' },
          { fr: 'Qu’est-ce qui est compris dans les charges ?', ar: 'شو اللي داخل ضمن المصاريف؟', en: 'What is included in the charges?' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'العقد والإيجار — دفع الإيجار والإيصال', en: 'Lease — paying rent and receipts', fr: 'Le bail — paiement et quittance' },
        phrases: [
          { fr: 'Comment dois-je payer le loyer ?', ar: 'كيف لازم ادفع الإيجار؟', en: 'How do I have to pay the rent?' },
          { fr: 'Je peux payer par prélèvement automatique ?', ar: 'فيني ادفع عن طريق الخصم التلقائي؟', en: 'Can I pay by direct debit?' },
          { fr: 'Je peux payer par virement bancaire ?', ar: 'فيني ادفع عن طريق تحويل بنكي؟', en: 'Can I pay by bank transfer?' },
          { fr: 'À quelle date dois-je payer le loyer ?', ar: 'بأي تاريخ لازم ادفع الإيجار؟', en: 'On what date do I have to pay the rent?' },
          { fr: 'Le loyer est prélevé automatiquement.', ar: 'الإيجار بينسحب أوتوماتيكياً.', en: 'The rent is automatically debited.' },
          { fr: 'Je viens de payer mon loyer.', ar: 'هلأ دفعت الإيجار.', en: 'I’ve just paid my rent.' },
          { fr: 'Je n’ai pas encore payé le loyer.', ar: 'لسا ما دفعت الإيجار.', en: 'I haven’t paid the rent yet.' },
          { fr: 'Je voudrais une quittance de loyer.', ar: 'بدي إيصال الإيجار.', en: 'I’d like a rent receipt.' },
          { fr: 'Pouvez-vous m’envoyer la quittance de loyer ?', ar: 'فيكم تبعتولي إيصال الإيجار؟', en: 'Could you send me the rent receipt?' },
          { fr: 'Je n’ai pas reçu ma quittance de loyer.', ar: 'ما وصلني إيصال الإيجار.', en: 'I haven’t received my rent receipt.' },
          { fr: 'J’ai besoin d’une quittance de loyer pour mon dossier.', ar: 'بدي إيصال الإيجار كرمال ملفي.', en: 'I need a rent receipt for my application.' }
        ]
      },
      {
        icon: '💰',
        title: { ar: 'العقد والإيجار — إذا ما قدرت تدفع', en: 'Lease — if you can’t pay', fr: 'Le bail — difficultés de paiement' },
        phrases: [
          { fr: 'J’ai des difficultés à payer mon loyer.', ar: 'عندي صعوبة بدفع الإيجار.', en: 'I’m having difficulty paying my rent.' },
          { fr: 'Je ne peux pas payer le loyer ce mois-ci.', ar: 'ما فيني ادفع الإيجار هالشهر.', en: 'I can’t pay the rent this month.' },
          { fr: 'Je voudrais trouver une solution.', ar: 'بدي لاقي حل.', en: 'I’d like to find a solution.' },
          { fr: 'Est-ce que je peux demander un délai de paiement ?', ar: 'فيني أطلب مهلة للدفع؟', en: 'Can I ask for more time to pay?' }
        ]
      },
      {
        icon: '📚',
        title: { ar: 'أهم مفردات العقد والإيجار', en: 'Key lease and rent vocabulary', fr: 'Vocabulaire clé du bail' },
        phrases: [
          { fr: 'bail', ar: 'عقد الإيجار', en: 'lease' },
          { fr: 'contrat de location', ar: 'عقد الإيجار', en: 'rental agreement' },
          { fr: 'locataire', ar: 'المستأجر', en: 'tenant' },
          { fr: 'propriétaire', ar: 'المالك', en: 'landlord / owner' },
          { fr: 'bailleur', ar: 'المؤجّر / صاحب السكن', en: 'landlord' },
          { fr: 'bailleur social', ar: 'مؤسسة السكن الاجتماعي', en: 'social housing provider' },
          { fr: 'loyer', ar: 'الإيجار', en: 'rent' },
          { fr: 'charges', ar: 'المصاريف', en: 'charges' },
          { fr: 'charges comprises', ar: 'شامل المصاريف', en: 'charges included' },
          { fr: 'dépôt de garantie', ar: 'مبلغ الضمان', en: 'security deposit' },
          { fr: 'quittance de loyer', ar: 'إيصال الإيجار', en: 'rent receipt' },
          { fr: 'attestation de loyer', ar: 'شهادة الإيجار', en: 'rent certificate' },
          { fr: 'préavis', ar: 'إشعار المغادرة', en: 'notice period' },
          { fr: 'état des lieux d’entrée', ar: 'معاينة البيت عند الدخول', en: 'move-in inspection' },
          { fr: 'état des lieux de sortie', ar: 'معاينة البيت عند الخروج', en: 'move-out inspection' },
          { fr: 'clé / clés', ar: 'مفتاح / مفاتيح', en: 'key / keys' },
          { fr: 'loyer hors charges', ar: 'الإيجار بدون المصاريف', en: 'rent excluding charges' },
          { fr: 'loyer charges comprises', ar: 'الإيجار شامل المصاريف', en: 'rent including charges' },
          { fr: 'révision du loyer', ar: 'تعديل/زيادة الإيجار', en: 'rent adjustment' },
          { fr: 'impayé de loyer', ar: 'إيجار غير مدفوع', en: 'unpaid rent' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم 10 جمل للعقد والإيجار', en: 'Top 10 lease phrases', fr: 'Top 10 — bail et loyer' },
        phrases: [
          { fr: 'Je voudrais signer le bail.', ar: 'بدي وقّع عقد الإيجار.', en: 'I’d like to sign the lease.' },
          { fr: 'Quelle est la durée du bail ?', ar: 'قديش مدة العقد؟', en: 'How long is the lease?' },
          { fr: 'Quel est le montant du loyer ?', ar: 'قديش الإيجار؟', en: 'How much is the rent?' },
          { fr: 'Combien je dois payer par mois, charges comprises ?', ar: 'قديش لازم ادفع بالشهر مع المصاريف؟', en: 'How much do I have to pay per month, including charges?' },
          { fr: 'Qu’est-ce qui est compris dans les charges ?', ar: 'شو اللي داخل ضمن المصاريف؟', en: 'What is included in the charges?' },
          { fr: 'À quelle date dois-je payer le loyer ?', ar: 'بأي تاريخ لازم ادفع الإيجار؟', en: 'When do I have to pay the rent?' },
          { fr: 'Je voudrais une quittance de loyer.', ar: 'بدي إيصال الإيجار.', en: 'I’d like a rent receipt.' },
          { fr: 'Mon loyer a augmenté. Pourquoi ?', ar: 'إيجاري زاد، ليش؟', en: 'My rent has increased. Why?' },
          { fr: 'Je voudrais donner mon préavis.', ar: 'بدي قدّم إشعار المغادرة.', en: 'I’d like to give notice.' },
          { fr: 'Quand dois-je rendre les clés ?', ar: 'إمتى لازم سلّم المفاتيح؟', en: 'When do I have to return the keys?' }
        ]
      }
    ]
  },
  {
    id: 'depart-logement',
    icon: '📦',
    name: { ar: 'الخروج من السكن والكهرباء', en: 'Moving out and electricity', fr: 'Quitter le logement et l’électricité' },
    desc: {
      ar: 'الـpréavis، معاينة الخروج، تسليم المفاتيح، مبلغ الضمان والكفيل وVisale، وفتح/إلغاء عقد الكهرباء',
      en: 'Notice period, move-out inspection, returning keys, the deposit, guarantor and Visale, and the electricity contract',
      fr: 'Préavis, état des lieux de sortie, remise des clés, dépôt de garantie, garant et Visale, contrat d’électricité'
    },
    sections: [
      {
        icon: '🏠',
        title: { ar: 'الخروج — إبلاغ المالك', en: 'Moving out — informing the landlord', fr: 'Départ — informer le bailleur' },
        phrases: [
          { fr: 'Je souhaite quitter mon logement.', ar: 'بدي اترك بيتي.', en: 'I want to leave my apartment.' },
          { fr: 'Je voudrais donner mon préavis.', ar: 'بدي قدّم إشعار المغادرة.', en: 'I’d like to give notice.' },
          { fr: 'Je vous informe de mon départ.', ar: 'عم خبركم إني رح اترك السكن.', en: 'I’m informing you that I’m leaving the accommodation.' },
          { fr: 'Je vais déménager.', ar: 'رح انقل من البيت.', en: 'I’m moving out.' },
          { fr: 'Je voudrais savoir comment procéder pour quitter le logement.', ar: 'بدي أعرف شو لازم أعمل كرمال اترك السكن.', en: 'I’d like to know what I need to do to leave the accommodation.' }
        ]
      },
      {
        icon: '📅',
        title: { ar: 'الخروج — مدة الـPréavis', en: 'Moving out — the notice period', fr: 'Départ — le préavis' },
        phrases: [
          { fr: 'Quelle est la durée de mon préavis ?', ar: 'قديش مدة إشعار المغادرة تبعي؟', en: 'How long is my notice period?' },
          { fr: 'Quand commence mon préavis ?', ar: 'إمتى بيبلّش إشعار المغادرة؟', en: 'When does my notice period start?' },
          { fr: 'À quelle date mon préavis se termine-t-il ?', ar: 'بأي تاريخ بينتهي إشعار المغادرة؟', en: 'What date does my notice period end?' },
          { fr: 'Mon préavis se termine le 7 octobre.', ar: 'إشعار المغادرة تبعي بينتهي بـ7 تشرين الأول.', en: 'My notice period ends on October 7.' },
          { fr: 'Est-ce que je dois payer le loyer jusqu’à la fin du préavis ?', ar: 'لازم ادفع الإيجار لآخر مدة الإشعار؟', en: 'Do I have to pay rent until the end of the notice period?' }
        ]
      },
      {
        icon: '📝',
        title: { ar: 'الخروج — موعد معاينة الخروج', en: 'Moving out — scheduling the inspection', fr: 'Départ — le rendez-vous de sortie' },
        phrases: [
          { fr: 'Quand aura lieu l’état des lieux de sortie ?', ar: 'إمتى رح تكون معاينة البيت عند الخروج؟', en: 'When will the move-out inspection take place?' },
          { fr: 'À quelle heure est prévu l’état des lieux ?', ar: 'بأي ساعة مقرر المعاينة؟', en: 'What time is the inspection scheduled for?' },
          { fr: 'Je voudrais confirmer l’heure du rendez-vous.', ar: 'بدي أكد ساعة الموعد.', en: 'I’d like to confirm the appointment time.' },
          { fr: 'Est-ce que le rendez-vous est bien à 15 heures ?', ar: 'الموعد أكيد الساعة 3؟', en: 'Is the appointment definitely at 3 p.m.?' },
          { fr: 'Dois-je être présent pour l’état des lieux ?', ar: 'لازم كون موجود وقت المعاينة؟', en: 'Do I have to be present for the inspection?' }
        ]
      },
      {
        icon: '🔍',
        title: { ar: 'الخروج — أثناء معاينة الخروج', en: 'Moving out — during the inspection', fr: 'Départ — pendant l’état des lieux' },
        phrases: [
          { fr: 'On va vérifier le logement pièce par pièce ?', ar: 'رح نفحص البيت غرفة غرفة؟', en: 'Are we going to check the apartment room by room?' },
          { fr: 'Je voudrais vérifier l’état des lieux avant de signer.', ar: 'بدي راجع المعاينة قبل ما وقّع.', en: 'I’d like to review the inspection before signing.' },
          { fr: 'Tout est en bon état.', ar: 'كل شي بحالة منيحة.', en: 'Everything is in good condition.' },
          { fr: 'Je n’ai rien à signaler.', ar: 'ما عندي شي أذكره.', en: 'I have nothing to report.' },
          { fr: 'Il y avait déjà cette trace quand je suis arrivé.', ar: 'هالأثر كان موجود من وقت ما وصلت.', en: 'This mark was already there when I moved in.' },
          { fr: 'Ce problème était déjà présent à mon arrivée.', ar: 'هالمشكلة كانت موجودة من وقت ما وصلت.', en: 'This problem was already there when I moved in.' }
        ]
      },
      {
        icon: '🧹',
        title: { ar: 'الخروج — التنظيف', en: 'Moving out — cleaning', fr: 'Départ — le ménage' },
        phrases: [
          { fr: 'Est-ce que le logement doit être nettoyé avant mon départ ?', ar: 'لازم نظّف البيت قبل ما اطلع؟', en: 'Does the apartment need to be cleaned before I leave?' },
          { fr: 'J’ai nettoyé le logement.', ar: 'نظّفت البيت.', en: 'I cleaned the apartment.' },
          { fr: 'Le logement est propre.', ar: 'البيت نظيف.', en: 'The apartment is clean.' },
          { fr: 'J’ai vidé toutes mes affaires.', ar: 'طلّعت كل أغراضي.', en: 'I removed all my belongings.' },
          { fr: 'Il ne reste plus rien dans le logement.', ar: 'ما عاد في شي بالبيت.', en: 'There’s nothing left in the apartment.' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: 'الخروج — تسليم المفاتيح', en: 'Moving out — returning the keys', fr: 'Départ — rendre les clés' },
        phrases: [
          { fr: 'Je viens rendre les clés.', ar: 'جاي سلّم المفاتيح.', en: 'I’m here to return the keys.' },
          { fr: 'Voici toutes les clés.', ar: 'هاي كل المفاتيح.', en: 'Here are all the keys.' },
          { fr: 'Il y a combien de clés à rendre ?', ar: 'قديش مفتاح لازم سلّم؟', en: 'How many keys do I have to return?' },
          { fr: 'Est-ce que je dois rendre la clé de la boîte aux lettres ?', ar: 'لازم سلّم مفتاح صندوق البريد؟', en: 'Do I have to return the mailbox key?' },
          { fr: 'Je dois aussi rendre la clé de la cave ?', ar: 'لازم كمان سلّم مفتاح القبو؟', en: 'Do I also have to return the basement key?' },
          { fr: 'Pouvez-vous me confirmer que vous avez bien reçu toutes les clés ?', ar: 'فيكم تأكدولي إنكم استلمتوا كل المفاتيح؟', en: 'Can you confirm that you received all the keys?' }
        ]
      },
      {
        icon: '✍️',
        title: { ar: 'الخروج — توقيع معاينة الخروج', en: 'Moving out — signing the inspection', fr: 'Départ — signer l’état des lieux' },
        phrases: [
          { fr: 'Je peux relire l’état des lieux avant de signer ?', ar: 'فيني راجع المعاينة قبل ما وقّع؟', en: 'Can I review the inspection before signing?' },
          { fr: 'Où dois-je signer ?', ar: 'وين لازم وقّع؟', en: 'Where do I sign?' },
          { fr: 'Je voudrais ajouter une remarque.', ar: 'بدي أضيف ملاحظة.', en: 'I’d like to add a comment.' },
          { fr: 'Je ne suis pas d’accord avec cette remarque.', ar: 'أنا مو موافق على هالملاحظة.', en: 'I don’t agree with this comment.' },
          { fr: 'Je peux avoir une copie de l’état des lieux de sortie ?', ar: 'فيني آخد نسخة من معاينة الخروج؟', en: 'Can I have a copy of the move-out inspection?' }
        ]
      },
      {
        icon: '💰',
        title: { ar: 'الخروج — آخر إيجار والحساب النهائي', en: 'Moving out — last rent and final account', fr: 'Départ — dernier loyer et décompte' },
        phrases: [
          { fr: 'Est-ce que je dois encore payer quelque chose ?', ar: 'لسا لازم ادفع شي؟', en: 'Do I still have anything to pay?' },
          { fr: 'Est-ce que mon compte est à jour ?', ar: 'حسابي مسدّد وما عليي شي؟', en: 'Is my account up to date?' },
          { fr: 'Est-ce qu’il reste un loyer à payer ?', ar: 'لسا في إيجار لازم ادفعه؟', en: 'Is there any rent left to pay?' },
          { fr: 'Pouvez-vous me donner le solde de mon compte ?', ar: 'فيكم تعطوني الرصيد النهائي لحسابي؟', en: 'Can you give me my final account balance?' }
        ]
      },
      {
        icon: '💶',
        title: { ar: 'الضمان — مبلغ الضمان (dépôt de garantie)', en: 'Deposit — getting it back', fr: 'Le dépôt de garantie' },
        phrases: [
          { fr: 'Quand vais-je récupérer mon dépôt de garantie ?', ar: 'إمتى رح يرجعولي مبلغ الضمان؟', en: 'When will I get my security deposit back?' },
          { fr: 'Comment vais-je recevoir le remboursement ?', ar: 'كيف رح يرجعولي المبلغ؟', en: 'How will I receive the refund?' },
          { fr: 'Est-ce que le dépôt de garantie sera remboursé intégralement ?', ar: 'مبلغ الضمان رح يرجع كامل؟', en: 'Will the security deposit be fully refunded?' },
          { fr: 'Est-ce qu’il y aura une retenue sur le dépôt de garantie ?', ar: 'رح ينخصم شي من مبلغ الضمان؟', en: 'Will anything be deducted from the security deposit?' },
          { fr: 'Pourquoi cette somme a-t-elle été retenue ?', ar: 'ليش انخصم هالمبلغ؟', en: 'Why was this amount withheld?' },
          { fr: 'J’ai payé un dépôt de garantie.', ar: 'دفعت مبلغ ضمان.', en: 'I paid a security deposit.' },
          { fr: 'Quel est le montant du dépôt de garantie ?', ar: 'قديش مبلغ الضمان؟', en: 'How much is the security deposit?' },
          { fr: 'Combien dois-je payer comme dépôt de garantie ?', ar: 'قديش لازم ادفع كضمان؟', en: 'How much do I have to pay as a security deposit?' },
          { fr: 'Pourquoi avez-vous retenu une partie du dépôt de garantie ?', ar: 'ليش خصمتوا جزء من مبلغ الضمان؟', en: 'Why did you withhold part of the security deposit?' },
          { fr: 'Je voudrais savoir quand le remboursement sera effectué.', ar: 'بدي أعرف إمتى رح يرجعولي المبلغ.', en: 'I’d like to know when the refund will be made.' }
        ]
      },
      {
        icon: '👤',
        title: { ar: 'الضمان — الكفيل (garant)', en: 'Guarantee — the guarantor', fr: 'Le garant' },
        phrases: [
          { fr: 'Est-ce que j’ai besoin d’un garant ?', ar: 'لازم يكون عندي كفيل؟', en: 'Do I need a guarantor?' },
          { fr: 'Je n’ai pas de garant.', ar: 'ما عندي كفيل.', en: 'I don’t have a guarantor.' },
          { fr: 'Est-ce qu’un garant est obligatoire ?', ar: 'الكفيل إجباري؟', en: 'Is a guarantor required?' },
          { fr: 'Quels documents faut-il fournir pour le garant ?', ar: 'شو الأوراق المطلوبة للكفيل؟', en: 'What documents are required for the guarantor?' },
          { fr: 'J’ai un garant.', ar: 'عندي كفيل.', en: 'I have a guarantor.' }
        ]
      },
      {
        icon: '🛡️',
        title: { ar: 'الضمان — ضمان Visale', en: 'Guarantee — Visale', fr: 'La garantie Visale' },
        phrases: [
          { fr: 'Est-ce que vous acceptez la garantie Visale ?', ar: 'بتقبلوا ضمان Visale؟', en: 'Do you accept Visale?' },
          { fr: 'Je bénéficie de la garantie Visale.', ar: 'عندي ضمان Visale.', en: 'I have Visale coverage.' },
          { fr: 'J’ai mon visa Visale.', ar: 'معي شهادة/فيزا Visale.', en: 'I have my Visale certificate.' },
          { fr: 'Est-ce que Visale peut remplacer un garant ?', ar: 'Visale فيا تحل محل الكفيل؟', en: 'Can Visale replace a guarantor?' },
          { fr: 'dépôt de garantie', ar: '💶 مبلغ الضمان الذي تدفعه عند استئجار البيت', en: 'the security deposit you pay when renting' },
          { fr: 'garant', ar: '👤 الكفيل الذي يضمنك أمام المالك', en: 'the guarantor who vouches for you to the landlord' },
          { fr: 'garantie Visale', ar: '🛡️ ضمان إيجار من نظام Visale', en: 'a rental guarantee from the Visale scheme' }
        ]
      },
      {
        icon: '📬',
        title: { ar: 'الخروج — العنوان الجديد', en: 'Moving out — your new address', fr: 'Départ — la nouvelle adresse' },
        phrases: [
          { fr: 'J’ai changé d’adresse.', ar: 'غيّرت عنواني.', en: 'I changed my address.' },
          { fr: 'Voici ma nouvelle adresse.', ar: 'هاد عنواني الجديد.', en: 'Here is my new address.' },
          { fr: 'Où allez-vous envoyer les documents concernant mon ancien logement ?', ar: 'لوين رح تبعتوا الأوراق المتعلقة ببيتي القديم؟', en: 'Where will you send the documents concerning my old apartment?' },
          { fr: 'Je n’ai pas encore de nouvelle adresse.', ar: 'لسا ما عندي عنوان جديد.', en: 'I don’t have a new address yet.' },
          { fr: 'Je suis domicilié à la Croix-Rouge.', ar: 'عندي عنوان مراسلات عند الصليب الأحمر.', en: 'I’m domiciled at the Red Cross.' }
        ]
      },
      {
        icon: '📋',
        title: { ar: 'الخروج — الوثائق التي تطلبها', en: 'Moving out — documents to request', fr: 'Départ — les documents à demander' },
        phrases: [
          { fr: 'Est-ce que je peux avoir une copie de l’état des lieux de sortie ?', ar: 'فيني آخد نسخة من معاينة الخروج؟', en: 'Can I have a copy of the move-out inspection?' },
          { fr: 'Pouvez-vous me donner une attestation de fin de location ?', ar: 'فيكم تعطوني إثبات إن عقد الإيجار انتهى؟', en: 'Can you give me proof that the rental has ended?' },
          { fr: 'Pouvez-vous me confirmer par écrit que j’ai rendu les clés ?', ar: 'فيكم تأكدولي خطياً إني سلّمت المفاتيح؟', en: 'Can you confirm in writing that I returned the keys?' },
          { fr: 'Quand vais-je recevoir le décompte final ?', ar: 'إمتى رح يوصلني الحساب النهائي؟', en: 'When will I receive the final statement?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'الخروج — محادثة كاملة', en: 'Moving out — the full conversation', fr: 'Départ — la conversation complète' },
        phrases: [
          { fr: 'Bonjour, je viens pour l’état des lieux de sortie.', ar: 'مرحبا، جاي كرمال معاينة الخروج.', en: 'Hello, I’m here for the move-out inspection.' },
          { fr: 'Bonjour. On va vérifier le logement ensemble.', ar: 'مرحبا، رح نفحص البيت سوا.', en: 'Hello. We’ll inspect the apartment together.' },
          { fr: 'D’accord. Je voudrais vérifier chaque pièce.', ar: 'تمام، بدي أتأكد من كل غرفة.', en: 'Okay. I’d like to check every room.' },
          { fr: 'Vous avez des remarques ?', ar: 'عندك ملاحظات؟', en: 'Do you have any comments?' },
          { fr: 'Non, tout est bon.', ar: 'لا، كل شي تمام.', en: 'No, everything is fine.' },
          { fr: 'Voici les clés.', ar: 'هاي المفاتيح.', en: 'Here are the keys.' },
          { fr: 'Vous avez rendu toutes les clés ?', ar: 'سلّمت كل المفاتيح؟', en: 'Did you return all the keys?' },
          { fr: 'Oui, voici toutes les clés.', ar: 'إي، هاي كل المفاتيح.', en: 'Yes, here are all the keys.' },
          { fr: 'Vous pouvez signer ici.', ar: 'فيك توقّع هون.', en: 'You can sign here.' },
          { fr: 'Je peux avoir une copie de l’état des lieux ?', ar: 'فيني آخد نسخة من المعاينة؟', en: 'Can I have a copy of the inspection report?' },
          { fr: 'Oui, bien sûr.', ar: 'إي، أكيد.', en: 'Yes, of course.' },
          { fr: 'Et quand vais-je récupérer mon dépôt de garantie ?', ar: 'وإمتى رح يرجعولي مبلغ الضمان؟', en: 'And when will I get my security deposit back?' },
          { fr: 'Nous vous enverrons le décompte final.', ar: 'رح نبعتلكم الحساب النهائي.', en: 'We’ll send you the final statement.' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: 'أهم كلمات الخروج من السكن', en: 'Key move-out vocabulary', fr: 'Vocabulaire clé du départ' },
        phrases: [
          { fr: 'quitter le logement', ar: 'يترك السكن', en: 'to leave the accommodation' },
          { fr: 'déménager', ar: 'ينقل من البيت', en: 'to move out' },
          { fr: 'préavis', ar: 'إشعار المغادرة', en: 'notice period' },
          { fr: 'état des lieux de sortie', ar: 'معاينة البيت عند الخروج', en: 'move-out inspection' },
          { fr: 'rendre les clés', ar: 'يسلّم المفاتيح', en: 'to return the keys' },
          { fr: 'dépôt de garantie', ar: 'مبلغ الضمان', en: 'security deposit' },
          { fr: 'remboursement', ar: 'استرجاع المبلغ', en: 'refund' },
          { fr: 'retenue', ar: 'مبلغ مخصوم', en: 'deduction' },
          { fr: 'solde', ar: 'الرصيد النهائي', en: 'balance' },
          { fr: 'décompte final', ar: 'الحساب النهائي', en: 'final statement' },
          { fr: 'ancienne adresse', ar: 'العنوان القديم', en: 'old address' },
          { fr: 'nouvelle adresse', ar: 'العنوان الجديد', en: 'new address' }
        ]
      },
      {
        icon: '⚡',
        title: { ar: 'الكهرباء — عند دخول السكن الجديد', en: 'Electricity — moving in', fr: 'Électricité — à l’emménagement' },
        phrases: [
          { fr: 'Est-ce qu’il y a déjà de l’électricité dans le logement ?', ar: 'في كهربا بالبيت من هلأ؟', en: 'Is there already electricity in the apartment?' },
          { fr: 'L’électricité est-elle déjà activée ?', ar: 'الكهربا مفعّلة من قبل؟', en: 'Is the electricity already switched on?' },
          { fr: 'Je viens d’emménager dans le logement.', ar: 'هلأ نقلت وسكنت بالبيت.', en: 'I’ve just moved into the apartment.' },
          { fr: 'Est-ce que je dois ouvrir un contrat d’électricité ?', ar: 'لازم افتح عقد كهربا؟', en: 'Do I need to set up an electricity contract?' },
          { fr: 'Je dois mettre l’électricité à mon nom.', ar: 'لازم حط عقد الكهربا باسمي.', en: 'I need to put the electricity contract in my name.' }
        ]
      },
      {
        icon: '🔢',
        title: { ar: 'الكهرباء — رقم العداد وقراءته', en: 'Electricity — the meter', fr: 'Électricité — le compteur' },
        phrases: [
          { fr: 'Où se trouve le compteur électrique ?', ar: 'وين عداد الكهربا؟', en: 'Where is the electricity meter?' },
          { fr: 'Quel est le numéro du compteur ?', ar: 'شو رقم العداد؟', en: 'What is the meter number?' },
          { fr: 'Quel est le relevé du compteur ?', ar: 'شو قراءة العداد؟', en: 'What is the meter reading?' },
          { fr: 'Je vais relever l’index du compteur.', ar: 'رح سجّل قراءة العداد.', en: 'I’m going to record the meter reading.' },
          { fr: 'Voici le relevé du compteur à mon arrivée.', ar: 'هاي قراءة العداد وقت دخولي.', en: 'This is the meter reading when I moved in.' }
        ]
      },
      {
        icon: '📱',
        title: { ar: 'الكهرباء — الاتصال بشركة الكهرباء لفتح عقد', en: 'Electricity — calling to open a contract', fr: 'Électricité — ouvrir un contrat' },
        phrases: [
          { fr: 'Bonjour, je viens d’emménager dans un nouveau logement.', ar: 'مرحبا، هلأ نقلت على سكن جديد.', en: 'Hello, I’ve just moved into a new home.' },
          { fr: 'Je voudrais ouvrir un contrat d’électricité.', ar: 'بدي افتح عقد كهربا.', en: 'I’d like to set up an electricity contract.' },
          { fr: 'Je voudrais mettre l’électricité à mon nom.', ar: 'بدي حط الكهربا باسمي.', en: 'I’d like to put the electricity contract in my name.' },
          { fr: 'Voici l’adresse du logement.', ar: 'هاد عنوان السكن.', en: 'Here is the address of the property.' },
          { fr: 'Je viens d’emménager aujourd’hui.', ar: 'اليوم هلأ سكنت بالبيت.', en: 'I moved in today.' },
          { fr: 'Voici le numéro du compteur.', ar: 'هاد رقم العداد.', en: 'Here is the meter number.' },
          { fr: 'Voici le relevé du compteur.', ar: 'هاي قراءة العداد.', en: 'Here is the meter reading.' },
          { fr: 'À partir de quelle date le contrat sera-t-il à mon nom ?', ar: 'من أي تاريخ رح يصير العقد باسمي؟', en: 'From what date will the contract be in my name?' }
        ]
      },
      {
        icon: '💳',
        title: { ar: 'الكهرباء — الفاتورة والدفع', en: 'Electricity — billing and payment', fr: 'Électricité — facture et paiement' },
        phrases: [
          { fr: 'Combien vais-je payer par mois ?', ar: 'قديش رح ادفع بالشهر؟', en: 'How much will I pay per month?' },
          { fr: 'Est-ce que je peux payer par prélèvement automatique ?', ar: 'فيني ادفع بالسحب التلقائي؟', en: 'Can I pay by direct debit?' },
          { fr: 'Je préfère payer par prélèvement automatique.', ar: 'بفضّل ادفع بالسحب التلقائي.', en: 'I prefer to pay by direct debit.' },
          { fr: 'Quand vais-je recevoir ma première facture ?', ar: 'إمتى رح توصلني أول فاتورة؟', en: 'When will I receive my first bill?' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'الكهرباء — إلغاء العقد عند الخروج', en: 'Electricity — cancelling on move-out', fr: 'Électricité — résilier au départ' },
        phrases: [
          { fr: 'Je quitte mon logement.', ar: 'أنا تارك البيت.', en: 'I’m leaving the apartment.' },
          { fr: 'Je déménage.', ar: 'أنا عم انقل من البيت.', en: 'I’m moving out.' },
          { fr: 'Je voudrais résilier mon contrat d’électricité.', ar: 'بدي ألغي عقد الكهربا.', en: 'I’d like to cancel my electricity contract.' },
          { fr: 'Je souhaite résilier mon contrat parce que je déménage.', ar: 'بدي ألغي العقد لأني عم انقل.', en: 'I want to cancel my contract because I’m moving.' },
          { fr: 'Je quitte le logement le 7 octobre.', ar: 'رح اترك السكن بـ7 تشرين الأول.', en: 'I’m leaving the apartment on October 7.' }
        ]
      },
      {
        icon: '🔢',
        title: { ar: 'الكهرباء — قراءة العداد عند الخروج', en: 'Electricity — the final meter reading', fr: 'Électricité — le relevé de départ' },
        phrases: [
          { fr: 'Je dois relever le compteur avant de partir ?', ar: 'لازم سجّل قراءة العداد قبل ما اطلع؟', en: 'Do I need to record the meter reading before leaving?' },
          { fr: 'Voici le relevé du compteur au moment de mon départ.', ar: 'هاي قراءة العداد وقت مغادرتي.', en: 'This is the meter reading when I left.' },
          { fr: 'Est-ce que je dois envoyer une photo du compteur ?', ar: 'لازم ابعت صورة للعداد؟', en: 'Do I need to send a photo of the meter?' },
          { fr: 'Je vais prendre une photo du compteur.', ar: 'رح صوّر العداد.', en: 'I’m going to take a photo of the meter.' },
          { fr: 'Je prends une photo du compteur pour garder une preuve.', ar: 'رح صوّر العداد ليكون عندي إثبات.', en: 'I’m taking a photo of the meter as proof.' },
          { fr: 'Je voudrais confirmer l’index de départ.', ar: 'بدي أكد قراءة العداد وقت الخروج.', en: 'I’d like to confirm the final meter reading.' }
        ]
      },
      {
        icon: '✅',
        title: { ar: 'الكهرباء — تأكيد الإلغاء والفاتورة الأخيرة', en: 'Electricity — confirmation and final bill', fr: 'Électricité — confirmation et facture de clôture' },
        phrases: [
          { fr: 'Pouvez-vous me confirmer la résiliation de mon contrat ?', ar: 'فيكم تأكدولي إنو عقدي انلغى؟', en: 'Can you confirm that my contract has been cancelled?' },
          { fr: 'Quand vais-je recevoir ma facture de clôture ?', ar: 'إمتى رح توصلني الفاتورة النهائية؟', en: 'When will I receive my final bill?' },
          { fr: 'Est-ce que je vais recevoir une facture de régularisation ?', ar: 'رح توصلني فاتورة تسوية نهائية؟', en: 'Will I receive a final adjustment bill?' },
          { fr: 'À quelle date mon contrat sera-t-il résilié ?', ar: 'بأي تاريخ رح ينتهي عقدي؟', en: 'On what date will my contract be cancelled?' },
          { fr: 'La résiliation sera-t-elle effective le 7 octobre ?', ar: 'إلغاء العقد رح يكون فعّال بـ7 تشرين الأول؟', en: 'Will the cancellation take effect on October 7?' },
          { fr: 'Où sera envoyée la facture finale ?', ar: 'لوين رح تبعتوا الفاتورة النهائية؟', en: 'Where will the final bill be sent?' },
          { fr: 'Je souhaite recevoir la facture par e-mail.', ar: 'بدي توصلني الفاتورة بالإيميل.', en: 'I’d like to receive the bill by email.' },
          { fr: 'Pouvez-vous m’envoyer une confirmation par e-mail ?', ar: 'فيكم تبعتولي تأكيد عالإيميل؟', en: 'Can you send me a confirmation by email?' },
          { fr: 'Je voudrais avoir une preuve de la résiliation.', ar: 'بدي إثبات إنو العقد انلغى.', en: 'I’d like proof of the cancellation.' }
        ]
      },
      {
        icon: '🔄',
        title: { ar: 'الكهرباء — الانتقال مباشرة لبيت جديد', en: 'Electricity — moving straight to a new home', fr: 'Électricité — déménagement direct' },
        phrases: [
          { fr: 'Je déménage, mais je vais avoir un nouveau logement.', ar: 'أنا عم انقل، بس رح يكون عندي بيت جديد.', en: 'I’m moving, but I’m going to have a new home.' },
          { fr: 'Je voudrais résilier l’ancien contrat et ouvrir un nouveau contrat.', ar: 'بدي ألغي العقد القديم وافتح عقد جديد.', en: 'I’d like to cancel the old contract and open a new one.' },
          { fr: 'Voici l’adresse de mon nouveau logement.', ar: 'هاد عنوان بيتي الجديد.', en: 'Here is the address of my new home.' },
          { fr: 'Le nouveau logement a déjà un compteur.', ar: 'البيت الجديد فيه عداد من قبل.', en: 'The new apartment already has a meter.' },
          { fr: 'Est-ce que l’électricité sera disponible à mon arrivée ?', ar: 'الكهربا رح تكون موجودة وقت أوصل؟', en: 'Will electricity be available when I move in?' }
        ]
      },
      {
        icon: '⚠️',
        title: { ar: 'الكهرباء — إذا كانت مقطوعة بالبيت الجديد', en: 'Electricity — if it’s cut off', fr: 'Électricité — coupure au nouveau logement' },
        phrases: [
          { fr: 'Il n’y a pas d’électricité dans le logement.', ar: 'ما في كهربا بالبيت.', en: 'There is no electricity in the apartment.' },
          { fr: 'L’électricité a été coupée.', ar: 'الكهربا مقطوعة.', en: 'The electricity has been cut off.' },
          { fr: 'Je viens d’emménager et je n’ai pas d’électricité.', ar: 'هلأ سكنت وما عندي كهربا.', en: 'I’ve just moved in and I don’t have electricity.' },
          { fr: 'Est-ce qu’une intervention est nécessaire ?', ar: 'لازم يجي حدا يفعلها؟', en: 'Is an intervention necessary?' },
          { fr: 'Quand l’électricité pourra-t-elle être rétablie ?', ar: 'إمتى ممكن ترجع الكهربا؟', en: 'When can the electricity be restored?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'الكهرباء — مكالمة الإلغاء الكاملة', en: 'Electricity — the full cancellation call', fr: 'Électricité — l’appel de résiliation' },
        phrases: [
          { fr: 'Bonjour, je vous appelle parce que je déménage.', ar: 'مرحبا، عم اتصل لأنّي رح انقل من البيت.', en: 'Hello, I’m calling because I’m moving.' },
          { fr: 'Je souhaite résilier mon contrat d’électricité.', ar: 'بدي ألغي عقد الكهربا.', en: 'I’d like to cancel my electricity contract.' },
          { fr: 'Je quitte mon logement le 7 octobre.', ar: 'رح اترك السكن بـ7 تشرين الأول.', en: 'I’m leaving the accommodation on October 7.' },
          { fr: 'D’accord. Pouvez-vous me donner votre adresse ?', ar: 'تمام، فيك تعطيني عنوان السكن؟', en: 'Okay. Can you give me the address of the property?' },
          { fr: 'Oui, bien sûr. Voici l’adresse.', ar: 'إي طبعاً، هاد العنوان.', en: 'Yes, of course. Here is the address.' },
          { fr: 'Avez-vous le relevé du compteur ?', ar: 'معك قراءة العداد؟', en: 'Do you have the meter reading?' },
          { fr: 'Oui, voici l’index du compteur.', ar: 'إي، هاي قراءة العداد.', en: 'Yes, here is the meter reading.' },
          { fr: 'Très bien. Votre contrat sera résilié à la date indiquée.', ar: 'تمام، عقدك رح ينتهي بالتاريخ المحدد.', en: 'Very good. Your contract will be cancelled on the specified date.' },
          { fr: 'Est-ce que je vais recevoir une facture de clôture ?', ar: 'رح توصلني فاتورة نهائية؟', en: 'Will I receive a final bill?' },
          { fr: 'Oui, vous recevrez une facture de clôture.', ar: 'إي، رح توصلك فاتورة نهائية.', en: 'Yes, you’ll receive a final bill.' },
          { fr: 'Pouvez-vous m’envoyer une confirmation par e-mail ?', ar: 'فيكم تبعتولي تأكيد عالإيميل؟', en: 'Can you send me a confirmation by email?' },
          { fr: 'Bien sûr.', ar: 'أكيد.', en: 'Of course.' },
          { fr: 'Bonjour, je déménage et je souhaite résilier mon contrat d’électricité à la date de mon départ.', ar: 'مرحبا، أنا عم انقل من البيت وبدي ألغي عقد الكهربا بتاريخ مغادرتي.', en: 'Hello, I’m moving and I’d like to cancel my electricity contract on my move-out date.' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'الكهرباء — إذا طلبوا معلوماتك', en: 'Electricity — if they ask for your details', fr: 'Électricité — vos informations' },
        phrases: [
          { fr: 'Quel numéro de contrat avez-vous besoin ?', ar: 'شو رقم العقد اللي بدكم ياه؟', en: 'Which contract number do you need?' },
          { fr: 'Mon numéro de contrat est…', ar: 'رقم العقد تبعي هو…', en: 'My contract number is…' },
          { fr: 'Je peux vous donner mon nom et mon adresse.', ar: 'فيني أعطيكم اسمي وعنواني.', en: 'I can give you my name and address.' },
          { fr: 'Voici mes coordonnées.', ar: 'هاي معلومات الاتصال تبعي.', en: 'Here are my contact details.' },
          { fr: 'Est-ce que vous avez besoin du relevé du compteur ?', ar: 'بدكم قراءة العداد؟', en: 'Do you need the meter reading?' },
          { fr: 'Je peux vous donner le relevé du compteur.', ar: 'فيني أعطيكم قراءة العداد.', en: 'I can give you the meter reading.' },
          { fr: 'Je peux vous envoyer une photo du compteur si nécessaire.', ar: 'فيني ابعتلكم صورة العداد إذا لازم.', en: 'I can send you a photo of the meter if necessary.' },
          { fr: 'Est-ce que je dois faire quelque chose d’autre ?', ar: 'لازم أعمل شي تاني؟', en: 'Do I need to do anything else?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم 15 جملة للكهرباء', en: 'Top 15 electricity phrases', fr: 'Top 15 — électricité' },
        phrases: [
          { fr: 'Je viens d’emménager dans un nouveau logement.', ar: 'هلأ نقلت على سكن جديد.', en: 'I’ve just moved into a new home.' },
          { fr: 'Je voudrais ouvrir un contrat d’électricité.', ar: 'بدي افتح عقد كهربا.', en: 'I’d like to set up an electricity contract.' },
          { fr: 'Je voudrais mettre l’électricité à mon nom.', ar: 'بدي حط الكهربا باسمي.', en: 'I’d like to put the electricity contract in my name.' },
          { fr: 'Où se trouve le compteur électrique ?', ar: 'وين عداد الكهربا؟', en: 'Where is the electricity meter?' },
          { fr: 'Quel est le relevé du compteur ?', ar: 'شو قراءة العداد؟', en: 'What is the meter reading?' },
          { fr: 'Je quitte mon logement.', ar: 'أنا تارك البيت.', en: 'I’m leaving the apartment.' },
          { fr: 'Je déménage.', ar: 'أنا عم انقل.', en: 'I’m moving out.' },
          { fr: 'Je voudrais résilier mon contrat d’électricité.', ar: 'بدي ألغي عقد الكهربا.', en: 'I’d like to cancel my electricity contract.' },
          { fr: 'Je quitte le logement le 7 octobre.', ar: 'رح اترك السكن بـ7 تشرين الأول.', en: 'I’m leaving the apartment on October 7.' },
          { fr: 'Je dois relever le compteur avant de partir ?', ar: 'لازم سجّل قراءة العداد قبل ما اطلع؟', en: 'Do I need to record the meter reading before leaving?' },
          { fr: 'Je vais prendre une photo du compteur.', ar: 'رح صوّر العداد.', en: 'I’m going to take a photo of the meter.' },
          { fr: 'Pouvez-vous me confirmer la résiliation de mon contrat ?', ar: 'فيكم تأكدولي إنو عقدي انلغى؟', en: 'Can you confirm that my contract has been cancelled?' },
          { fr: 'Quand vais-je recevoir ma facture de clôture ?', ar: 'إمتى رح توصلني الفاتورة النهائية؟', en: 'When will I receive my final bill?' },
          { fr: 'Voici l’adresse de mon nouveau logement.', ar: 'هاد عنوان بيتي الجديد.', en: 'Here is the address of my new home.' },
          { fr: 'Je voudrais résilier l’ancien contrat et ouvrir un nouveau contrat.', ar: 'بدي ألغي العقد القديم وافتح عقد جديد.', en: 'I’d like to cancel the old contract and open a new one.' }
        ]
      },
      {
        icon: '📶',
        title: { ar: 'الإنترنت — تفعيل الـWi-Fi بالسكن الجديد', en: 'Internet — activating Wi-Fi in the new home', fr: 'Internet — activer le Wi-Fi' },
        phrases: [
          { fr: 'Bonjour, je viens d’emménager et je voudrais activer ma connexion Internet.', ar: 'مرحبا، هلأ نقلت عالسكن الجديد وبدي فعّل الإنترنت.', en: 'Hello, I’ve just moved in and I’d like to activate my internet connection.' },
          { fr: 'Je voudrais installer Internet dans mon nouveau logement.', ar: 'بدي ركّب إنترنت بالبيت الجديد.', en: 'I’d like to install internet in my new home.' },
          { fr: 'Je voudrais mettre ma ligne Internet en service.', ar: 'بدي فعّل خط الإنترنت.', en: 'I’d like to activate my internet line.' },
          { fr: 'Je viens de déménager.', ar: 'أنا هلأ نقلت من بيتي القديم.', en: 'I’ve just moved.' },
          { fr: 'Je déménage mon abonnement à ma nouvelle adresse.', ar: 'بدي انقل اشتراك الإنترنت لعنواني الجديد.', en: 'I’d like to transfer my internet subscription to my new address.' },
          { fr: 'Je voudrais transférer ma ligne à ma nouvelle adresse.', ar: 'بدي انقل خط الإنترنت لعنواني الجديد.', en: 'I’d like to transfer my line to my new address.' },
          { fr: 'Voici ma nouvelle adresse.', ar: 'هاد عنواني الجديد.', en: 'Here is my new address.' }
        ]
      },
      {
        icon: '📡',
        title: { ar: 'الإنترنت — إذا الـWi-Fi ما عم يشتغل', en: 'Internet — if Wi-Fi isn’t working', fr: 'Internet — le Wi-Fi ne marche pas' },
        phrases: [
          { fr: 'Je n’ai pas de connexion Internet.', ar: 'ما عندي اتصال بالإنترنت.', en: 'I don’t have an internet connection.' },
          { fr: 'Le Wi-Fi ne fonctionne pas.', ar: 'الواي فاي ما عم يشتغل.', en: 'The Wi-Fi isn’t working.' },
          { fr: 'Je n’ai pas encore Internet dans le logement.', ar: 'لسا ما عندي إنترنت بالبيت.', en: 'I don’t have internet in the apartment yet.' },
          { fr: 'La box est branchée, mais je n’ai pas Internet.', ar: 'الراوتر موصول، بس ما عندي إنترنت.', en: 'The router is connected, but I don’t have internet.' },
          { fr: 'Est-ce qu’une intervention d’un technicien est nécessaire ?', ar: 'لازم يجي فني؟', en: 'Is a technician visit necessary?' },
          { fr: 'Quand est-ce que la connexion sera activée ?', ar: 'إمتى رح يتفعّل الإنترنت؟', en: 'When will the connection be activated?' }
        ]
      },
      {
        icon: '🔐',
        title: { ar: 'الإنترنت — اسم الشبكة وكلمة السر', en: 'Internet — network name and password', fr: 'Internet — nom du réseau et mot de passe' },
        phrases: [
          { fr: 'Quel est le nom du réseau Wi-Fi ?', ar: 'شو اسم شبكة الواي فاي؟', en: 'What is the Wi-Fi network name?' },
          { fr: 'Quel est le mot de passe Wi-Fi ?', ar: 'شو كلمة سر الواي فاي؟', en: 'What is the Wi-Fi password?' },
          { fr: 'Où puis-je trouver le mot de passe Wi-Fi ?', ar: 'وين فيني لاقي كلمة سر الواي فاي؟', en: 'Where can I find the Wi-Fi password?' }
        ]
      },
      {
        icon: '📶',
        title: { ar: 'الإنترنت — الاشتراك بعرض جديد', en: 'Internet — subscribing to a plan', fr: 'Internet — souscrire à une offre' },
        phrases: [
          { fr: 'Bonjour, je voudrais souscrire à une offre Internet.', ar: 'مرحبا، بدي اشترك بعرض إنترنت.', en: 'Hello, I’d like to subscribe to an internet plan.' },
          { fr: 'Je viens d’emménager dans un nouveau logement.', ar: 'هلأ نقلت عبيت جديد.', en: 'I’ve just moved into a new home.' },
          { fr: 'Je voudrais avoir Internet et le Wi-Fi.', ar: 'بدي يكون عندي إنترنت وواي فاي.', en: 'I’d like to have internet and Wi-Fi.' },
          { fr: 'Je voudrais savoir quelles offres vous proposez.', ar: 'بدي أعرف شو العروض اللي عندكم.', en: 'I’d like to know what plans you offer.' },
          { fr: 'Quelle est votre nouvelle adresse ?', ar: 'شو عنوانك الجديد؟', en: 'What is your new address?' },
          { fr: 'Voici ma nouvelle adresse.', ar: 'هاد عنواني الجديد.', en: 'Here is my new address.' }
        ]
      },
      {
        icon: '🏠',
        title: { ar: 'الإنترنت — الفايبر والأهلية', en: 'Internet — fiber eligibility', fr: 'Internet — la fibre' },
        phrases: [
          { fr: 'Pouvez-vous vérifier si la fibre est disponible à cette adresse ?', ar: 'فيكم تتأكدوا إذا الفايبر متوفر بهالعنوان؟', en: 'Can you check if fiber is available at this address?' },
          { fr: 'Est-ce que mon logement est éligible à la fibre ?', ar: 'بيتي مؤهل للفايبر؟', en: 'Is my home eligible for fiber?' },
          { fr: 'La fibre est-elle déjà installée dans le logement ?', ar: 'الفايبر مركّب من قبل بالبيت؟', en: 'Is fiber already installed in the home?' },
          { fr: 'La prise fibre est déjà installée dans le logement.', ar: 'في مأخذ فايبر مركّب بالبيت من قبل.', en: 'The fiber socket is already installed in the home.' },
          { fr: 'J’ai déjà une prise fibre.', ar: 'عندي مأخذ فايبر من قبل.', en: 'I already have a fiber socket.' },
          { fr: 'Est-ce que je peux simplement brancher la box ?', ar: 'فيني بس وصّل الراوتر؟', en: 'Can I just connect the router?' }
        ]
      },
      {
        icon: '💰',
        title: { ar: 'الإنترنت — السعر والرسوم', en: 'Internet — price and fees', fr: 'Internet — prix et frais' },
        phrases: [
          { fr: 'Combien coûte l’abonnement par mois ?', ar: 'قديش الاشتراك بالشهر؟', en: 'How much is the subscription per month?' },
          { fr: 'Quel est le prix total par mois ?', ar: 'قديش السعر الكامل بالشهر؟', en: 'What is the total monthly price?' },
          { fr: 'Est-ce que les frais d’installation sont compris ?', ar: 'رسوم التركيب داخلة بالسعر؟', en: 'Are installation fees included?' },
          { fr: 'Est-ce qu’il y a des frais supplémentaires ?', ar: 'في رسوم إضافية؟', en: 'Are there any additional fees?' },
          { fr: 'Y a-t-il des frais de mise en service ?', ar: 'في رسوم لتفعيل الخدمة؟', en: 'Is there an activation fee?' },
          { fr: 'Le prix va-t-il augmenter après quelques mois ?', ar: 'السعر رح يزيد بعد كم شهر؟', en: 'Will the price increase after a few months?' }
        ]
      },
      {
        icon: '📦',
        title: { ar: 'الإنترنت — الـBox والتركيب', en: 'Internet — the box and installation', fr: 'Internet — la box et l’installation' },
        phrases: [
          { fr: 'Quelle box est incluse dans l’offre ?', ar: 'أي راوتر داخل بالعرض؟', en: 'Which router is included in the plan?' },
          { fr: 'Est-ce que la box est incluse ?', ar: 'الراوتر داخل بالسعر؟', en: 'Is the router included?' },
          { fr: 'Est-ce que la box sera livrée à mon domicile ?', ar: 'الراوتر رح يوصل لعندي عالبيت؟', en: 'Will the router be delivered to my home?' },
          { fr: 'Quand vais-je recevoir la box ?', ar: 'إمتى رح يوصلني الراوتر؟', en: 'When will I receive the router?' },
          { fr: 'Est-ce que je dois installer la box moi-même ?', ar: 'لازم ركّب الراوتر بنفسي؟', en: 'Do I have to install the router myself?' },
          { fr: 'Quand est-ce que ma ligne sera activée ?', ar: 'إمتى رح يتفعّل خط الإنترنت؟', en: 'When will my line be activated?' },
          { fr: 'Combien de temps faut-il pour avoir Internet ?', ar: 'قديش بياخد وقت لحتى يصير عندي إنترنت؟', en: 'How long does it take to get internet?' },
          { fr: 'Quand le technicien peut-il intervenir ?', ar: 'إمتى بيقدر يجي الفني؟', en: 'When can the technician come?' },
          { fr: 'Est-ce que je dois être présent lors du rendez-vous ?', ar: 'لازم كون موجود وقت الموعد؟', en: 'Do I need to be present for the appointment?' },
          { fr: 'La connexion sera-t-elle disponible dès l’installation ?', ar: 'الإنترنت رح يشتغل مباشرة بعد التركيب؟', en: 'Will the connection be available immediately after installation?' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'الإنترنت — الوثائق والدفع والالتزام', en: 'Internet — documents, payment, commitment', fr: 'Internet — documents, paiement, engagement' },
        phrases: [
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدّمها؟', en: 'What documents do I need to provide?' },
          { fr: 'Vous avez besoin de ma pièce d’identité ?', ar: 'بدكم هويتي؟', en: 'Do you need my ID?' },
          { fr: 'Vous avez besoin d’un RIB ?', ar: 'بدكم RIB؟', en: 'Do you need a bank account statement?' },
          { fr: 'Vous avez besoin d’un justificatif de domicile ?', ar: 'بدكم إثبات سكن؟', en: 'Do you need proof of address?' },
          { fr: 'Voici ma pièce d’identité.', ar: 'هاي هويتي.', en: 'Here is my ID.' },
          { fr: 'Voici mon RIB.', ar: 'هاد الـRIB تبعي.', en: 'Here is my bank account statement.' },
          { fr: 'Comment vais-je payer mon abonnement ?', ar: 'كيف رح ادفع الاشتراك؟', en: 'How will I pay for my subscription?' },
          { fr: 'Je voudrais payer par prélèvement automatique.', ar: 'بدي الدفع يكون سحب تلقائي من البنك.', en: 'I’d like to pay by direct debit.' },
          { fr: 'À quelle date serai-je prélevé ?', ar: 'بأي تاريخ رح ينسحب المبلغ من حسابي؟', en: 'On what date will I be charged?' },
          { fr: 'Quand vais-je recevoir ma première facture ?', ar: 'إمتى رح توصلني أول فاتورة؟', en: 'When will I receive my first bill?' },
          { fr: 'Y a-t-il un engagement ?', ar: 'في مدة إلزام بالعقد؟', en: 'Is there a contract commitment?' },
          { fr: 'Quelle est la durée de l’engagement ?', ar: 'قديش مدة الالتزام؟', en: 'How long is the commitment period?' },
          { fr: 'Est-ce que l’offre est sans engagement ?', ar: 'العرض بدون التزام؟', en: 'Is the plan commitment-free?' },
          { fr: 'Que se passe-t-il si je résilie mon abonnement ?', ar: 'شو بيصير إذا لغيت الاشتراك؟', en: 'What happens if I cancel my subscription?' }
        ]
      },
      {
        icon: '📺',
        title: { ar: 'الإنترنت — التلفزيون ونهاية الاشتراك', en: 'Internet — TV and end of subscription', fr: 'Internet — TV et fin de l’abonnement' },
        phrases: [
          { fr: 'Est-ce que la télévision est incluse ?', ar: 'التلفزيون داخل بالاشتراك؟', en: 'Is TV included?' },
          { fr: 'Est-ce que les appels sont inclus ?', ar: 'المكالمات داخلة بالاشتراك؟', en: 'Are calls included?' },
          { fr: 'Est-ce que je peux utiliser le Wi-Fi sur plusieurs appareils ?', ar: 'فيني استخدم الواي فاي على عدة أجهزة؟', en: 'Can I use Wi-Fi on several devices?' },
          { fr: 'Pouvez-vous me confirmer que mon abonnement est bien activé ?', ar: 'فيكم تأكدولي إنو اشتراكي تفعّل؟', en: 'Can you confirm that my subscription is activated?' },
          { fr: 'Quand vais-je recevoir mes identifiants ?', ar: 'إمتى رح توصلني معلومات الدخول؟', en: 'When will I receive my login details?' },
          { fr: 'Où puis-je trouver le nom et le mot de passe du Wi-Fi ?', ar: 'وين بلاقي اسم وكلمة سر الواي فاي؟', en: 'Where can I find the Wi-Fi name and password?' },
          { fr: 'Pouvez-vous m’envoyer la confirmation par e-mail ?', ar: 'فيكم تبعتولي تأكيد عالإيميل؟', en: 'Can you send me the confirmation by email?' }
        ]
      },
      {
        icon: '📶',
        title: { ar: 'الإنترنت — إلغاء الاشتراك عند الخروج', en: 'Internet — cancelling the subscription', fr: 'Internet — résilier l’abonnement' },
        phrases: [
          { fr: 'Bonjour, je vous appelle parce que je déménage.', ar: 'مرحبا، عم اتصل لأنّي رح انقل من البيت.', en: 'Hello, I’m calling because I’m moving.' },
          { fr: 'Je souhaite résilier mon abonnement Internet.', ar: 'بدي ألغي اشتراك الإنترنت.', en: 'I’d like to cancel my internet subscription.' },
          { fr: 'Je souhaite résilier ma box.', ar: 'بدي ألغي اشتراك الراوتر/الـBox.', en: 'I’d like to cancel my internet box subscription.' },
          { fr: 'Je quitte mon logement.', ar: 'أنا تارك السكن.', en: 'I’m leaving my home.' },
          { fr: 'Je quitte le logement le 7 octobre.', ar: 'رح اترك السكن بـ7 تشرين الأول.', en: 'I’m leaving the home on October 7.' },
          { fr: 'Je voudrais résilier mon abonnement à cette date.', ar: 'بدي ألغي الاشتراك بهالتاريخ.', en: 'I’d like to cancel my subscription on that date.' },
          { fr: 'Voici l’adresse du logement.', ar: 'هاد عنوان السكن.', en: 'Here is the address of the property.' },
          { fr: 'À quelle date mon abonnement sera-t-il résilié ?', ar: 'بأي تاريخ رح ينتهي الاشتراك؟', en: 'On what date will my subscription be cancelled?' },
          { fr: 'Pouvez-vous me confirmer la résiliation de mon abonnement ?', ar: 'فيكم تأكدولي إنو الاشتراك انلغى؟', en: 'Can you confirm the cancellation of my subscription?' },
          { fr: 'Pouvez-vous me confirmer la résiliation par e-mail ?', ar: 'فيكم تأكدولي إلغاء العقد بالإيميل؟', en: 'Can you confirm the cancellation by email?' }
        ]
      },
      {
        icon: '📦',
        title: { ar: 'الإنترنت — إرجاع الـBox والفاتورة الأخيرة', en: 'Internet — returning the box, final bill', fr: 'Internet — rendre la box, dernière facture' },
        phrases: [
          { fr: 'Est-ce que je dois rendre la box ?', ar: 'لازم رجّع الـBox؟', en: 'Do I have to return the box?' },
          { fr: 'Comment dois-je retourner la box ?', ar: 'كيف لازم رجّع الـBox؟', en: 'How do I return the box?' },
          { fr: 'Où dois-je déposer la box ?', ar: 'وين لازم سلّم الـBox؟', en: 'Where do I have to return the box?' },
          { fr: 'Est-ce que je dois retourner tous les équipements ?', ar: 'لازم رجّع كل المعدات؟', en: 'Do I have to return all the equipment?' },
          { fr: 'Est-ce que vous m’envoyez une étiquette de retour ?', ar: 'رح تبعتولي ملصق الإرجاع؟', en: 'Will you send me a return label?' },
          { fr: 'Quand dois-je retourner la box ?', ar: 'إمتى لازم رجّع الـBox؟', en: 'When do I have to return the box?' },
          { fr: 'Est-ce qu’il y a des frais de résiliation ?', ar: 'في رسوم على إلغاء الاشتراك؟', en: 'Is there a cancellation fee?' },
          { fr: 'Est-ce que je dois encore payer quelque chose ?', ar: 'لسا لازم ادفع شي؟', en: 'Do I still have to pay anything?' },
          { fr: 'Quand vais-je recevoir ma dernière facture ?', ar: 'إمتى رح توصلني آخر فاتورة؟', en: 'When will I receive my final bill?' },
          { fr: 'Est-ce que je vais recevoir une facture de clôture ?', ar: 'رح توصلني فاتورة نهائية لإغلاق العقد؟', en: 'Will I receive a final closing bill?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'الإنترنت — محادثة إلغاء كاملة', en: 'Internet — the full cancellation call', fr: 'Internet — l’appel de résiliation complet' },
        phrases: [
          { fr: 'Bonjour, je vous appelle parce que je déménage.', ar: 'مرحبا، عم اتصل لأنّي رح انقل من البيت.', en: 'Hello, I’m calling because I’m moving.' },
          { fr: 'Je souhaite résilier mon abonnement Internet.', ar: 'بدي ألغي اشتراك الإنترنت.', en: 'I’d like to cancel my internet subscription.' },
          { fr: 'Je quitte mon logement le 7 octobre.', ar: 'رح اترك السكن بـ7 تشرين الأول.', en: 'I’m leaving my home on October 7.' },
          { fr: 'D’accord. Pouvez-vous me donner votre numéro de contrat ?', ar: 'تمام، فيك تعطيني رقم العقد؟', en: 'Okay. Can you give me your contract number?' },
          { fr: 'Oui, bien sûr. Mon numéro de contrat est…', ar: 'إي طبعاً، رقم العقد تبعي هو…', en: 'Yes, of course. My contract number is…' },
          { fr: 'Vous devrez retourner votre box.', ar: 'لازم ترجع الـBox.', en: 'You’ll need to return your box.' },
          { fr: 'D’accord. Comment dois-je la retourner ?', ar: 'تمام، كيف لازم رجّعها؟', en: 'Okay. How do I return it?' },
          { fr: 'Vous recevrez une étiquette de retour.', ar: 'رح يوصلك ملصق الإرجاع.', en: 'You’ll receive a return label.' },
          { fr: 'Très bien. Et quand vais-je recevoir ma dernière facture ?', ar: 'تمام. وإمتى رح توصلني آخر فاتورة؟', en: 'Very good. And when will I receive my final bill?' },
          { fr: 'Vous recevrez une facture de clôture après la résiliation.', ar: 'رح توصلك فاتورة نهائية بعد إلغاء العقد.', en: 'You’ll receive a final bill after the cancellation.' },
          { fr: 'Pouvez-vous m’envoyer une confirmation par e-mail ?', ar: 'فيكم تبعتولي تأكيد عالإيميل؟', en: 'Can you send me a confirmation by email?' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم جمل الإنترنت والـWi-Fi', en: 'Top internet and Wi-Fi phrases', fr: 'Top des phrases Internet' },
        phrases: [
          { fr: 'Je viens d’emménager et je voudrais activer ma connexion Internet.', ar: 'هلأ نقلت عالسكن الجديد وبدي فعّل الإنترنت.', en: 'I’ve just moved in and I’d like to activate my internet connection.' },
          { fr: 'Je voudrais transférer ma ligne à ma nouvelle adresse.', ar: 'بدي انقل خط الإنترنت لعنواني الجديد.', en: 'I’d like to transfer my line to my new address.' },
          { fr: 'Je n’ai pas encore de connexion Internet.', ar: 'لسا ما عندي اتصال بالإنترنت.', en: 'I don’t have an internet connection yet.' },
          { fr: 'Est-ce que la fibre est disponible à cette adresse ?', ar: 'الفايبر متوفر بهالعنوان؟', en: 'Is fiber available at this address?' },
          { fr: 'Combien coûte l’abonnement par mois ?', ar: 'قديش الاشتراك بالشهر؟', en: 'How much is the subscription per month?' },
          { fr: 'Est-ce qu’il y a des frais supplémentaires ?', ar: 'في رسوم إضافية؟', en: 'Are there any additional fees?' },
          { fr: 'Quand est-ce que ma ligne sera activée ?', ar: 'إمتى رح يتفعّل خط الإنترنت؟', en: 'When will my line be activated?' },
          { fr: 'Est-ce qu’un technicien doit venir ?', ar: 'لازم يجي فني؟', en: 'Does a technician need to come?' },
          { fr: 'Est-ce que l’offre est sans engagement ?', ar: 'العرض بدون التزام؟', en: 'Is the plan commitment-free?' },
          { fr: 'Quand vais-je recevoir la box ?', ar: 'إمتى رح يوصلني الراوتر؟', en: 'When will I receive the router?' },
          { fr: 'Je souhaite résilier mon abonnement Internet.', ar: 'بدي ألغي اشتراك الإنترنت.', en: 'I’d like to cancel my internet subscription.' },
          { fr: 'Je déménage et je quitte mon logement.', ar: 'رح انقل وعم اترك السكن.', en: 'I’m moving and leaving my home.' },
          { fr: 'Est-ce que je dois rendre la box ?', ar: 'لازم رجّع الـBox؟', en: 'Do I have to return the box?' },
          { fr: 'Comment dois-je retourner la box ?', ar: 'كيف لازم رجّع الـBox؟', en: 'How do I return the box?' },
          { fr: 'Est-ce qu’il y a des frais de résiliation ?', ar: 'في رسوم على الإلغاء؟', en: 'Is there a cancellation fee?' },
          { fr: 'Pouvez-vous me confirmer la résiliation par e-mail ?', ar: 'فيكم تأكدولي إلغاء العقد بالإيميل؟', en: 'Can you confirm the cancellation by email?' }
        ]
      }
    ]
  },
  {
    id: 'poste',
    icon: '📮',
    name: { ar: 'الطرود والبريد — La Poste', en: 'Parcels and mail — La Poste', fr: 'Colis et courrier — La Poste' },
    desc: { ar: 'تسليم الـBox بالمحل ونقطة Pickup، استلام الطرد، وأهم أفعال الطرود والشحن.', en: 'Returning the box in-store and at a Pickup point, collecting a parcel, and the most useful parcel verbs.', fr: 'Rendre la box en boutique et en point Pickup, récupérer un colis, et les verbes utiles du colis.' },
    sections: [
      {
        icon: '📦',
        title: { ar: 'تسليم الـBox — عند الدخول والهوية', en: 'Returning the box — entry and ID', fr: 'Rendre la box — entrée et identité' },
        phrases: [
          { fr: 'Bonjour, je viens rendre ma box.', ar: 'مرحبا، جاي رجّع الـBox.', en: 'Hello, I’m here to return my router.' },
          { fr: 'J’ai résilié mon abonnement Internet.', ar: 'أنا ألغيت اشتراك الإنترنت.', en: 'I cancelled my internet subscription.' },
          { fr: 'Je viens déposer le matériel.', ar: 'جاي سلّم المعدات.', en: 'I’m here to return the equipment.' },
          { fr: 'Je dois rendre ma box aujourd’hui.', ar: 'لازم رجّع الـBox اليوم.', en: 'I have to return the router today.' },
          { fr: 'Pouvez-vous me donner votre nom, s’il vous plaît ?', ar: 'فيك تعطيني اسمك، لو سمحت؟', en: 'Can you give me your name, please?' },
          { fr: 'Oui, je m’appelle Mohammad Haj Mohammad.', ar: 'إي، اسمي محمد حاج محمد.', en: 'Yes, my name is Mohammad Haj Mohammad.' },
          { fr: 'Vous avez votre pièce d’identité ?', ar: 'معك هويتك؟', en: 'Do you have your ID?' },
          { fr: 'Oui, voici ma pièce d’identité.', ar: 'إي، هاي هويتي.', en: 'Yes, here is my ID.' },
          { fr: 'Vous avez votre numéro de client ?', ar: 'معك رقم الزبون؟', en: 'Do you have your customer number?' },
          { fr: 'Oui, voici mon numéro de client.', ar: 'إي، هاد رقم الزبون تبعي.', en: 'Yes, here is my customer number.' }
        ]
      },
      {
        icon: '🔍',
        title: { ar: 'تسليم الـBox — المعدات والفحص والإيصال', en: 'Returning the box — equipment, check, receipt', fr: 'Rendre la box — matériel, vérification, reçu' },
        phrases: [
          { fr: 'Voici la box.', ar: 'هاي الـBox.', en: 'Here is the router.' },
          { fr: 'J’ai apporté tous les équipements.', ar: 'جبت كل المعدات.', en: 'I brought all the equipment.' },
          { fr: 'Est-ce que je dois rendre tous les câbles ?', ar: 'لازم رجّع كل الكابلات؟', en: 'Do I have to return all the cables?' },
          { fr: 'Est-ce que je dois rendre le décodeur aussi ?', ar: 'لازم رجّع جهاز التلفزيون كمان؟', en: 'Do I have to return the TV decoder too?' },
          { fr: 'Voici le câble d’alimentation.', ar: 'هاد كابل الكهرباء.', en: 'Here is the power cable.' },
          { fr: 'Voici les autres câbles et accessoires.', ar: 'هاي باقي الكابلات والملحقات.', en: 'Here are the other cables and accessories.' },
          { fr: 'Vous allez vérifier le matériel ?', ar: 'رح تفحصوا المعدات؟', en: 'Are you going to check the equipment?' },
          { fr: 'Est-ce que tout est complet ?', ar: 'كل شي كامل؟', en: 'Is everything complete?' },
          { fr: 'Il manque quelque chose ?', ar: 'ناقص شي؟', en: 'Is anything missing?' },
          { fr: 'La box est en bon état.', ar: 'الـBox بحالة منيحة.', en: 'The router is in good condition.' },
          { fr: 'Je n’ai rien d’autre à rendre.', ar: 'ما عندي شي تاني سلّمو.', en: 'I have nothing else to return.' },
          { fr: 'Est-ce que je peux avoir un justificatif de retour ?', ar: 'فيني آخد إثبات إني رجّعت الـBox؟', en: 'Can I have proof that I returned the router?' },
          { fr: 'Pouvez-vous me donner un reçu, s’il vous plaît ?', ar: 'فيكم تعطوني إيصال، لو سمحت؟', en: 'Can you give me a receipt, please?' },
          { fr: 'Je voudrais une preuve que j’ai bien rendu le matériel.', ar: 'بدي إثبات إني سلّمت المعدات بشكل صحيح.', en: 'I’d like proof that I returned the equipment.' },
          { fr: 'Est-ce que vous pouvez confirmer que vous avez bien reçu la box ?', ar: 'فيكم تأكدولي إنكم استلمتوا الـBox؟', en: 'Can you confirm that you received the router?' },
          { fr: 'Pouvez-vous me confirmer que tout est enregistré ?', ar: 'فيكم تأكدولي إنو كل شي تسجّل؟', en: 'Can you confirm that everything has been recorded?' },
          { fr: 'Est-ce que je dois encore payer quelque chose ?', ar: 'لسا لازم ادفع شي؟', en: 'Do I still have to pay anything?' },
          { fr: 'Est-ce qu’il y aura des frais supplémentaires ?', ar: 'رح يكون في رسوم إضافية؟', en: 'Will there be any additional charges?' },
          { fr: 'Est-ce que je vais recevoir une dernière facture ?', ar: 'رح توصلني فاتورة أخيرة؟', en: 'Will I receive a final bill?' },
          { fr: 'Quand vais-je recevoir ma facture de clôture ?', ar: 'إمتى رح توصلني الفاتورة النهائية؟', en: 'When will I receive my final bill?' },
          { fr: 'Est-ce que je vais recevoir une confirmation par e-mail ?', ar: 'رح يوصلني تأكيد عالإيميل؟', en: 'Will I receive a confirmation by email?' },
          { fr: 'Pouvez-vous m’envoyer la confirmation par e-mail ?', ar: 'فيكم تبعتولي التأكيد عالإيميل؟', en: 'Can you send me the confirmation by email?' },
          { fr: 'Donc, c’est bien enregistré ?', ar: 'يعني، تسجّل كل شي بشكل صحيح؟', en: 'So, everything has been recorded correctly?' },
          { fr: 'C’est bon, mon abonnement est bien résilié ?', ar: 'يعني تمام، اشتراكي انلغى بشكل نهائي؟', en: 'So, my subscription has been fully cancelled?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'تسليم الـBox — محادثة كاملة واقعية', en: 'Returning the box — full real conversation', fr: 'Rendre la box — conversation complète' },
        phrases: [
          { fr: 'Bonjour, je viens rendre ma box.', ar: 'مرحبا، جاي رجّع الـBox.', en: 'Hello, I’m here to return my router.' },
          { fr: 'Bonjour. Vous avez résilié votre abonnement ?', ar: 'مرحبا. إنت ألغيت اشتراكك؟', en: 'Hello. Did you cancel your subscription?' },
          { fr: 'Oui, j’ai résilié mon abonnement parce que je déménage.', ar: 'إي، ألغيت اشتراكي لأنّي عم انقل من البيت.', en: 'Yes, I cancelled my subscription because I’m moving.' },
          { fr: 'Vous avez votre pièce d’identité ?', ar: 'معك هويتك؟', en: 'Do you have your ID?' },
          { fr: 'Oui, voici ma pièce d’identité.', ar: 'إي، هاي هويتي.', en: 'Yes, here is my ID.' },
          { fr: 'Vous avez apporté tous les équipements ?', ar: 'جبت كل المعدات؟', en: 'Did you bring all the equipment?' },
          { fr: 'Oui, voici la box, les câbles et les accessoires.', ar: 'إي، هاي الـBox والكابلات والملحقات.', en: 'Yes, here are the router, cables and accessories.' },
          { fr: 'Très bien, je vais vérifier le matériel.', ar: 'تمام، رح افحص المعدات.', en: 'Very good, I’ll check the equipment.' },
          { fr: 'D’accord.', ar: 'تمام.', en: 'Okay.' },
          { fr: 'Tout est complet.', ar: 'كل شي كامل.', en: 'Everything is complete.' },
          { fr: 'Très bien. Est-ce que je peux avoir un reçu pour le retour ?', ar: 'ممتاز. فيني آخد إيصال لتسليم الـBox؟', en: 'Great. Can I have a receipt for the return?' },
          { fr: 'Oui, bien sûr.', ar: 'إي طبعاً.', en: 'Yes, of course.' },
          { fr: 'Merci. Est-ce que mon retour est bien enregistré ?', ar: 'شكراً. تسليم الـBox تسجّل بشكل صحيح؟', en: 'Thank you. Has my return been properly recorded?' },
          { fr: 'Oui, c’est bien enregistré.', ar: 'إي، تسجّل بشكل صحيح.', en: 'Yes, it has been properly recorded.' },
          { fr: 'Et je vais recevoir une confirmation par e-mail ?', ar: 'ورح يوصلني تأكيد عالإيميل؟', en: 'And will I receive a confirmation by email?' },
          { fr: 'Oui.', ar: 'إي.', en: 'Yes.' },
          { fr: 'Très bien, merci. Bonne journée.', ar: 'تمام، شكراً، نهارك سعيد.', en: 'Great, thank you. Have a nice day.' }
        ]
      },
      {
        icon: '📦',
        title: { ar: 'Pickup La Poste — تسليم طرد الإرجاع', en: 'Pickup La Poste — dropping off the return parcel', fr: 'Pickup La Poste — déposer le colis retour' },
        phrases: [
          { fr: 'Bonjour, je viens déposer ce colis.', ar: 'مرحبا، جاي سلّم هالطرد.', en: 'Hello, I’m here to drop off this parcel.' },
          { fr: 'C’est un retour de box Internet.', ar: 'هاد إرجاع Box الإنترنت.', en: 'This is an internet box return.' },
          { fr: 'Je dois retourner cette box à mon opérateur.', ar: 'لازم رجّع هالـBox لشركة الإنترنت.', en: 'I have to return this router to my internet provider.' },
          { fr: 'J’ai un QR code pour le retour.', ar: 'معي QR Code للإرجاع.', en: 'I have a QR code for the return.' },
          { fr: 'Est-ce que je peux vous montrer le QR code ?', ar: 'فيني فرجيك الـQR Code؟', en: 'Can I show you the QR code?' },
          { fr: 'Je dois vous montrer le QR code sur mon téléphone ?', ar: 'لازم فرجيك الـQR Code عالموبايل؟', en: 'Do I need to show you the QR code on my phone?' },
          { fr: 'Oui, le voici.', ar: 'إي، هاد هو.', en: 'Yes, here it is.' },
          { fr: 'Je n’ai pas imprimé l’étiquette de retour.', ar: 'ما طبعت ورقة الإرجاع.', en: 'I haven’t printed the return label.' },
          { fr: 'Est-ce que vous pouvez imprimer l’étiquette avec ce QR code ?', ar: 'فيكم تطبعوا ورقة الإرجاع بهالـQR Code؟', en: 'Can you print the return label using this QR code?' },
          { fr: 'Est-ce que je dois coller quelque chose sur le colis ?', ar: 'لازم ألصق شي عالطرد؟', en: 'Do I need to stick anything on the parcel?' },
          { fr: 'Voici le colis.', ar: 'هاد الطرد.', en: 'Here is the parcel.' },
          { fr: 'Le colis est bien fermé.', ar: 'الطرد مسكّر منيح.', en: 'The parcel is properly sealed.' },
          { fr: 'Tout est à l’intérieur.', ar: 'كل شي موجود جوّا.', en: 'Everything is inside.' },
          { fr: 'La box et tous les accessoires sont dans le colis.', ar: 'الـBox وكل الملحقات موجودين بالطرد.', en: 'The router and all the accessories are in the parcel.' },
          { fr: 'Est-ce que vous pouvez me donner un reçu ?', ar: 'فيكم تعطوني إيصال؟', en: 'Can you give me a receipt?' },
          { fr: 'Je voudrais une preuve du dépôt du colis.', ar: 'بدي إثبات إني سلّمت الطرد.', en: 'I’d like proof that I dropped off the parcel.' },
          { fr: 'Est-ce que vous pouvez me donner un justificatif de dépôt ?', ar: 'فيكم تعطوني إثبات إيداع؟', en: 'Can you give me proof of drop-off?' },
          { fr: 'Je voudrais garder une preuve du retour.', ar: 'بدي احتفظ بإثبات الإرجاع.', en: 'I’d like to keep proof of the return.' },
          { fr: 'Est-ce que le numéro de suivi est indiqué sur le reçu ?', ar: 'رقم التتبع موجود عالإيصال؟', en: 'Is the tracking number shown on the receipt?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'Pickup La Poste — محادثة كاملة', en: 'Pickup La Poste — full conversation', fr: 'Pickup La Poste — conversation complète' },
        phrases: [
          { fr: 'Bonjour, je viens déposer ce colis.', ar: 'مرحبا، جاي سلّم هالطرد.', en: 'Hello, I’m here to drop off this parcel.' },
          { fr: 'Bonjour. C’est pour un retour ?', ar: 'مرحبا، هاد للإرجاع؟', en: 'Hello. Is this a return?' },
          { fr: 'Oui, c’est le retour de ma box Internet.', ar: 'إي، هاد إرجاع Box الإنترنت تبعي.', en: 'Yes, it’s the return of my internet router.' },
          { fr: 'Vous avez un QR code ?', ar: 'معك QR Code؟', en: 'Do you have a QR code?' },
          { fr: 'Oui, le voici sur mon téléphone.', ar: 'إي، هاد هو عالموبايل.', en: 'Yes, here it is on my phone.' },
          { fr: 'Très bien.', ar: 'تمام.', en: 'Very good.' },
          { fr: 'Est-ce que je peux avoir un justificatif de dépôt, s’il vous plaît ?', ar: 'فيني آخد إثبات إيداع، لو سمحت؟', en: 'Can I have proof of drop-off, please?' },
          { fr: 'Oui, voici votre reçu.', ar: 'إي، هاد إيصالك.', en: 'Yes, here is your receipt.' },
          { fr: 'Merci. Le numéro de suivi est bien dessus ?', ar: 'شكراً. رقم التتبع موجود عليه؟', en: 'Thank you. Is the tracking number on it?' },
          { fr: 'Oui, il est indiqué sur le reçu.', ar: 'إي، موجود عالإيصال.', en: 'Yes, it’s shown on the receipt.' },
          { fr: 'Parfait, merci. Bonne journée.', ar: 'ممتاز، شكراً، نهارك سعيد.', en: 'Perfect, thank you. Have a nice day.' },
          { fr: 'Bonjour, je viens déposer ce colis. C’est un retour de ma box Internet. J’ai un QR code.', ar: 'مرحبا، جاي سلّم هالطرد. هاد إرجاع Box الإنترنت تبعي. معي QR Code.', en: 'Hello, I’m here to drop off this parcel. It’s a return of my internet router. I have a QR code.' }
        ]
      },
      {
        icon: '📬',
        title: { ar: 'استلام الطرد — الدخول والـQR ورقم الاستلام', en: 'Collecting a parcel — entry, QR and pickup code', fr: 'Récupérer un colis — entrée, QR et code de retrait' },
        phrases: [
          { fr: 'Bonjour, je viens récupérer un colis.', ar: 'مرحبا، جاي استلم طرد.', en: 'Hello, I’m here to pick up a parcel.' },
          { fr: 'Bonjour, je viens chercher un colis.', ar: 'مرحبا، جاي آخد طرد.', en: 'Hello, I’m here to collect a parcel.' },
          { fr: 'J’ai reçu une notification pour récupérer mon colis.', ar: 'وصلتني رسالة إنو فيني استلم الطرد.', en: 'I received a notification to pick up my parcel.' },
          { fr: 'Vous avez un QR code ?', ar: 'معك QR Code؟', en: 'Do you have a QR code?' },
          { fr: 'Oui, le voici.', ar: 'إي، هاد هو.', en: 'Yes, here it is.' },
          { fr: 'Je vous montre le QR code sur mon téléphone.', ar: 'رح فرجيك الـQR Code عالموبايل.', en: 'I’ll show you the QR code on my phone.' },
          { fr: 'Vous avez un code de retrait ?', ar: 'معك كود الاستلام؟', en: 'Do you have a pickup code?' },
          { fr: 'Oui, voici mon code de retrait.', ar: 'إي، هاد كود الاستلام تبعي.', en: 'Yes, here is my pickup code.' },
          { fr: 'Voici le numéro de suivi.', ar: 'هاد رقم التتبع.', en: 'Here is the tracking number.' },
          { fr: 'Mon numéro de suivi est…', ar: 'رقم التتبع تبعي هو…', en: 'My tracking number is…' }
        ]
      },
      {
        icon: '🪪',
        title: { ar: 'استلام الطرد — الهوية والتوقيع', en: 'Collecting a parcel — ID and signature', fr: 'Récupérer un colis — identité et signature' },
        phrases: [
          { fr: 'Vous avez une pièce d’identité ?', ar: 'معك هوية؟', en: 'Do you have an ID?' },
          { fr: 'Oui, voici ma pièce d’identité.', ar: 'إي، هاي هويتي.', en: 'Yes, here is my ID.' },
          { fr: 'C’est bien à votre nom ?', ar: 'الطرد باسمك؟', en: 'Is the parcel in your name?' },
          { fr: 'Oui, il est à mon nom.', ar: 'إي، الطرد باسمي.', en: 'Yes, it’s in my name.' },
          { fr: 'Vous pouvez me donner votre nom ?', ar: 'فيك تعطيني اسمك؟', en: 'Can you give me your name?' },
          { fr: 'Oui, je m’appelle Mohammad Haj Mohammad.', ar: 'إي، اسمي محمد حاج محمد.', en: 'Yes, my name is Mohammad Haj Mohammad.' },
          { fr: 'Un instant, je vais vérifier.', ar: 'لحظة، رح أتأكد.', en: 'One moment, I’ll check.' },
          { fr: 'Votre colis est bien arrivé.', ar: 'طردك وصل.', en: 'Your parcel has arrived.' },
          { fr: 'Je vais chercher votre colis.', ar: 'رح جيبلك الطرد.', en: 'I’ll get your parcel.' },
          { fr: 'C’est bien mon colis ?', ar: 'هاد هو طردي؟', en: 'Is this my parcel?' },
          { fr: 'Je peux vérifier le nom ?', ar: 'فيني أتأكد من الاسم؟', en: 'Can I check the name?' },
          { fr: 'C’est bien à mon nom ?', ar: 'هو فعلاً باسمي؟', en: 'Is it really in my name?' },
          { fr: 'Je dois signer ici ?', ar: 'لازم وقّع هون؟', en: 'Do I need to sign here?' },
          { fr: 'Où dois-je signer ?', ar: 'وين لازم وقّع؟', en: 'Where do I need to sign?' },
          { fr: 'Je signe ici ?', ar: 'وقّع هون؟', en: 'Do I sign here?' }
        ]
      },
      {
        icon: '⚠️',
        title: { ar: 'استلام الطرد — مشاكل وعدم العثور', en: 'Collecting a parcel — problems and not found', fr: 'Récupérer un colis — problèmes' },
        phrases: [
          { fr: 'Le colis est un peu abîmé.', ar: 'الطرد متضرر شوي.', en: 'The parcel is a little damaged.' },
          { fr: 'Le colis est ouvert.', ar: 'الطرد مفتوح.', en: 'The parcel is open.' },
          { fr: 'Je voudrais vérifier l’état du colis.', ar: 'بدي أتأكد من حالة الطرد.', en: 'I’d like to check the condition of the parcel.' },
          { fr: 'Vous ne trouvez pas mon colis ?', ar: 'ما عم تلاقوا طردي؟', en: 'You can’t find my parcel?' },
          { fr: 'Il est indiqué comme livré, mais je ne l’ai pas reçu.', ar: 'مكتوب إنو وصل، بس أنا ما استلمته.', en: 'It says it was delivered, but I haven’t received it.' },
          { fr: 'Pouvez-vous vérifier avec le numéro de suivi ?', ar: 'فيكم تتأكدوا برقم التتبع؟', en: 'Can you check using the tracking number?' },
          { fr: 'Je vais vérifier sur mon téléphone.', ar: 'رح أتأكد عالموبايل.', en: 'I’ll check on my phone.' },
          { fr: 'C’est bon, merci.', ar: 'تمام، شكراً.', en: 'That’s all, thank you.' },
          { fr: 'Merci beaucoup.', ar: 'شكراً كتير.', en: 'Thank you very much.' },
          { fr: 'Bonne journée.', ar: 'نهارك سعيد.', en: 'Have a nice day.' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'استلام الطرد — محادثة كاملة قصيرة', en: 'Collecting a parcel — short full conversation', fr: 'Récupérer un colis — conversation complète' },
        phrases: [
          { fr: 'Bonjour, je viens récupérer un colis.', ar: 'مرحبا، جاي استلم طرد.', en: 'Hello, I’m here to pick up a parcel.' },
          { fr: 'Bonjour. Vous avez un QR code ou un code de retrait ?', ar: 'مرحبا. معك QR Code أو كود استلام؟', en: 'Hello. Do you have a QR code or pickup code?' },
          { fr: 'Oui, le voici.', ar: 'إي، هاد هو.', en: 'Yes, here it is.' },
          { fr: 'Vous avez une pièce d’identité ?', ar: 'معك هوية؟', en: 'Do you have an ID?' },
          { fr: 'Oui, voici ma pièce d’identité.', ar: 'إي، هاي هويتي.', en: 'Yes, here is my ID.' },
          { fr: 'Merci. Je vais chercher votre colis.', ar: 'شكراً، رح جيبلك الطرد.', en: 'Thank you. I’ll get your parcel.' },
          { fr: 'C’est bien mon colis ?', ar: 'هاد هو طردي؟', en: 'Is this my parcel?' },
          { fr: 'Oui, c’est bien votre colis.', ar: 'إي، هاد طردك.', en: 'Yes, this is your parcel.' },
          { fr: 'Merci beaucoup. Bonne journée.', ar: 'شكراً كتير، نهارك سعيد.', en: 'Thank you very much. Have a nice day.' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: 'أفعال الطرود — الأساسية', en: 'Parcel verbs — the basics', fr: 'Verbes du colis — les bases' },
        phrases: [
          { fr: 'recevoir', ar: 'يستلم / يتلقى', en: 'to receive' },
          { fr: 'Je vais recevoir mon colis demain.', ar: 'رح استلم طردي بكرا.', en: 'I will receive my parcel tomorrow.' },
          { fr: 'J’ai reçu une notification.', ar: 'وصلتني إشعارة.', en: 'I received a notification.' },
          { fr: 'envoyer', ar: 'يرسل', en: 'to send' },
          { fr: 'Je voudrais envoyer un colis.', ar: 'بدي ابعت طرد.', en: 'I’d like to send a parcel.' },
          { fr: 'J’ai envoyé le colis hier.', ar: 'بعت الطرد مبارح.', en: 'I sent the parcel yesterday.' },
          { fr: 'expédier', ar: 'يرسل / يشحن', en: 'to ship' },
          { fr: 'Le colis a été expédié hier.', ar: 'الطرد انشحن مبارح.', en: 'The parcel was shipped yesterday.' },
          { fr: 'livrer', ar: 'يسلّم / يوصل', en: 'to deliver' },
          { fr: 'Le colis sera livré demain.', ar: 'الطرد رح يوصّل بكرا.', en: 'The parcel will be delivered tomorrow.' },
          { fr: 'Le colis a été livré.', ar: 'الطرد تم توصيله.', en: 'The parcel was delivered.' },
          { fr: 'récupérer', ar: 'يستلم / يسترجع', en: 'to collect / pick up' },
          { fr: 'Je viens récupérer mon colis.', ar: 'جاي استلم طردي.', en: 'I’m here to collect my parcel.' },
          { fr: 'Je viens récupérer ma box.', ar: 'جاي استلم البوكس تبعي.', en: 'I’m here to collect my box.' },
          { fr: 'chercher', ar: 'يذهب ليأخذ / يبحث عن', en: 'to pick up / look for' },
          { fr: 'Je viens chercher mon colis.', ar: 'جاي آخد طردي.', en: 'I’m here to pick up my parcel.' },
          { fr: 'Je cherche mon colis.', ar: 'عم دور على طردي.', en: 'I’m looking for my parcel.' },
          { fr: 'déposer', ar: 'يضع / يسلّم في نقطة', en: 'to drop off' },
          { fr: 'Je viens déposer ce colis.', ar: 'جاي سلّم هالطرد.', en: 'I’m here to drop off this parcel.' },
          { fr: 'Je dois déposer le colis à La Poste.', ar: 'لازم سلّم الطرد بالـ La Poste.', en: 'I have to drop off the parcel at La Poste.' },
          { fr: 'retourner', ar: 'يعيد / يرجع', en: 'to return' },
          { fr: 'Je dois retourner ce colis.', ar: 'لازم رجّع هالطرد.', en: 'I have to return this parcel.' },
          { fr: 'Je retourne la box à mon opérateur.', ar: 'عم رجّع البوكس لشركة الإنترنت.', en: 'I’m returning the box to my provider.' },
          { fr: 'rendre', ar: 'يعيد / يسلّم', en: 'to return / hand back' },
          { fr: 'Je viens rendre ma box.', ar: 'جاي رجّع البوكس تبعي.', en: 'I’m here to return my box.' },
          { fr: 'Je dois rendre le matériel.', ar: 'لازم رجّع المعدات.', en: 'I have to return the equipment.' },
          { fr: 'suivre', ar: 'يتتبع', en: 'to track / follow' },
          { fr: 'Je voudrais suivre mon colis.', ar: 'بدي تتبع طردي.', en: 'I’d like to track my parcel.' },
          { fr: 'Je peux suivre le colis avec le numéro de suivi.', ar: 'فيني أتتبع الطرد برقم التتبع.', en: 'I can track the parcel with the tracking number.' },
          { fr: 'vérifier', ar: 'يتحقق / يتأكد', en: 'to check' },
          { fr: 'Pouvez-vous vérifier mon colis ?', ar: 'فيني تطلعوا وتتأكدوا من طردي؟', en: 'Can you check my parcel?' },
          { fr: 'Je vais vérifier le numéro de suivi.', ar: 'رح أتأكد من رقم التتبع.', en: 'I’ll check the tracking number.' },
          { fr: 'signer', ar: 'يوقّع', en: 'to sign' },
          { fr: 'Je dois signer ici ?', ar: 'لازم وقّع هون؟', en: 'Do I have to sign here?' },
          { fr: 'Je dois signer pour recevoir le colis ?', ar: 'لازم وقّع مشان استلم الطرد؟', en: 'Do I have to sign to receive the parcel?' },
          { fr: 'ouvrir', ar: 'يفتح', en: 'to open' },
          { fr: 'Le colis est ouvert.', ar: 'الطرد مفتوح.', en: 'The parcel is open.' },
          { fr: 'Je peux ouvrir le colis ?', ar: 'فيني افتح الطرد؟', en: 'Can I open the parcel?' },
          { fr: 'fermer', ar: 'يغلق', en: 'to close' },
          { fr: 'Le colis est bien fermé.', ar: 'الطرد مسكّر منيح.', en: 'The parcel is properly closed.' },
          { fr: 'Je vais fermer le colis.', ar: 'رح سكّر الطرد.', en: 'I’m going to close the parcel.' },
          { fr: 'emballer', ar: 'يغلّف', en: 'to pack' },
          { fr: 'Je dois bien emballer le colis.', ar: 'لازم غلّف الطرد منيح.', en: 'I have to pack the parcel properly.' },
          { fr: 'imprimer', ar: 'يطبع', en: 'to print' },
          { fr: 'Je dois imprimer l’étiquette.', ar: 'لازم اطبع الملصق.', en: 'I have to print the label.' },
          { fr: 'Vous pouvez imprimer l’étiquette ?', ar: 'فيني تطبعوا الملصق؟', en: 'Can you print the label?' },
          { fr: 'coller', ar: 'يلصق', en: 'to stick' },
          { fr: 'Je dois coller l’étiquette sur le colis ?', ar: 'لازم ألصق الملصق على الطرد؟', en: 'Do I have to stick the label on the parcel?' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: 'أفعال الطرود — إضافية', en: 'Parcel verbs — additional', fr: 'Verbes du colis — supplémentaires' },
        phrases: [
          { fr: 'arriver', ar: 'يصل', en: 'to arrive' },
          { fr: 'Mon colis est arrivé.', ar: 'وصل طردي.', en: 'My parcel has arrived.' },
          { fr: 'Le colis arrive demain.', ar: 'الطرد بيوصل بكرا.', en: 'The parcel arrives tomorrow.' },
          { fr: 'partir', ar: 'يغادر / ينطلق', en: 'to leave' },
          { fr: 'Le colis est parti hier.', ar: 'الطرد انشحن/طلع مبارح.', en: 'The parcel left yesterday.' },
          { fr: 'transporter', ar: 'ينقل', en: 'to transport' },
          { fr: 'Le colis est transporté vers le centre de tri.', ar: 'الطرد عم يتم نقله لمركز الفرز.', en: 'The parcel is being transported to the sorting center.' },
          { fr: 'trier', ar: 'يفرز', en: 'to sort' },
          { fr: 'Le colis est en cours de tri.', ar: 'الطرد قيد الفرز.', en: 'The parcel is being sorted.' },
          { fr: 'scanner', ar: 'يمسح / يقرأ بالماسح', en: 'to scan' },
          { fr: 'Je vais scanner votre QR code.', ar: 'رح امسح رمز الـQR تبعك.', en: 'I’m going to scan your QR code.' },
          { fr: 'enregistrer', ar: 'يسجّل', en: 'to register / record' },
          { fr: 'Votre colis est bien enregistré.', ar: 'طردك مسجّل بشكل صحيح.', en: 'Your parcel is properly registered.' },
          { fr: 'confirmer', ar: 'يؤكد', en: 'to confirm' },
          { fr: 'Pouvez-vous confirmer le dépôt du colis ?', ar: 'فيني آخد تأكيد إنو تم تسليم الطرد؟', en: 'Can you confirm the parcel drop-off?' },
          { fr: 'identifier', ar: 'يحدّد / يتعرّف على', en: 'to identify' },
          { fr: 'Nous devons identifier le colis.', ar: 'لازم نحدد الطرد / نتأكد من هويته.', en: 'We need to identify the parcel.' },
          { fr: 'retrouver', ar: 'يعثر على', en: 'to find / locate' },
          { fr: 'Pouvez-vous retrouver mon colis ?', ar: 'فيني تطلعوا وين طردي؟', en: 'Can you locate my parcel?' },
          { fr: 'localiser', ar: 'يحدد مكان', en: 'to locate' },
          { fr: 'Je voudrais localiser mon colis.', ar: 'بدي أعرف وين موجود طردي.', en: 'I’d like to locate my parcel.' },
          { fr: 'perdre', ar: 'يضيّع / يفقد', en: 'to lose' },
          { fr: 'Le colis a été perdu.', ar: 'الطرد ضاع.', en: 'The parcel was lost.' },
          { fr: 'égarer', ar: 'يضيّع', en: 'to misplace / lose' },
          { fr: 'Mon colis a été égaré.', ar: 'طردي ضاع.', en: 'My parcel was misplaced/lost.' },
          { fr: 'endommager', ar: 'يتلف', en: 'to damage' },
          { fr: 'Le colis a été endommagé.', ar: 'الطرد انضرر.', en: 'The parcel was damaged.' },
          { fr: 'abîmer', ar: 'يتلف / يضرر', en: 'to damage' },
          { fr: 'Le colis est un peu abîmé.', ar: 'الطرد متضرر شوي.', en: 'The parcel is a little damaged.' },
          { fr: 'refuser', ar: 'يرفض', en: 'to refuse' },
          { fr: 'Je refuse le colis.', ar: 'أنا برفض الطرد.', en: 'I refuse the parcel.' },
          { fr: 'accepter', ar: 'يقبل', en: 'to accept' },
          { fr: 'J’accepte le colis.', ar: 'أنا بقبل الطرد.', en: 'I accept the parcel.' },
          { fr: 'retirer', ar: 'يستلم / يسحب', en: 'to collect / withdraw' },
          { fr: 'Je viens retirer mon colis.', ar: 'جاي استلم طردي.', en: 'I’m here to collect my parcel.' },
          { fr: 'déballer', ar: 'يفتح التغليف', en: 'to unpack' },
          { fr: 'Je vais déballer le colis.', ar: 'رح افتح تغليف الطرد.', en: 'I’m going to unpack the parcel.' },
          { fr: 'peser', ar: 'يزن', en: 'to weigh' },
          { fr: 'Vous pouvez peser le colis ?', ar: 'فيني أعرف وزن الطرد؟', en: 'Can you weigh the parcel?' },
          { fr: 'mesurer', ar: 'يقيس', en: 'to measure' },
          { fr: 'Il faut mesurer le colis.', ar: 'لازم نقيس الطرد.', en: 'The parcel needs to be measured.' },
          { fr: 'affranchir', ar: 'يضع طابع/رسوم الإرسال', en: 'to frank / postage' },
          { fr: 'Je voudrais affranchir ce colis.', ar: 'بدي ادفع رسوم إرسال هالطرد.', en: 'I’d like to pay the postage for this parcel.' },
          { fr: 'poster', ar: 'يرسل بالبريد', en: 'to mail / post' },
          { fr: 'Je vais poster le colis aujourd’hui.', ar: 'رح ابعت الطرد اليوم.', en: 'I’m going to mail the parcel today.' },
          { fr: 'Vous avez reçu mon colis ?', ar: 'وصل عندكم طردي؟', en: 'Did you receive my parcel?' },
          { fr: 'Quand est-ce que vous allez expédier le colis ?', ar: 'إيمتى رح تشحنوا الطرد؟', en: 'When will you ship the parcel?' }
        ]
      },
      {
        icon: '🔥',
        title: { ar: 'أفعال الطرود — مع المشاكل', en: 'Parcel verbs — for problems', fr: 'Verbes du colis — pour les problèmes' },
        phrases: [
          { fr: 'manquer', ar: 'يكون ناقصًا', en: 'to be missing' },
          { fr: 'Il manque un câble dans le colis.', ar: 'في كابل ناقص بالطرد.', en: 'A cable is missing from the parcel.' },
          { fr: 'contenir', ar: 'يحتوي على', en: 'to contain' },
          { fr: 'Le colis contient une box Internet.', ar: 'الطرد فيه بوكس إنترنت.', en: 'The parcel contains an Internet box.' },
          { fr: 'correspondre', ar: 'يطابق', en: 'to correspond / match' },
          { fr: 'Le numéro correspond bien à mon colis.', ar: 'الرقم مطابق لطردي.', en: 'The number matches my parcel.' },
          { fr: 'attendre', ar: 'ينتظر', en: 'to wait' },
          { fr: 'J’attends mon colis depuis trois jours.', ar: 'صارلي 3 أيام ناطر طردي.', en: 'I’ve been waiting for my parcel for three days.' },
          { fr: 'retarder', ar: 'يؤخر', en: 'to delay' },
          { fr: 'La livraison a été retardée.', ar: 'التوصيل تأخر.', en: 'The delivery was delayed.' },
          { fr: 'annuler', ar: 'يلغي', en: 'to cancel' },
          { fr: 'Je voudrais annuler l’envoi.', ar: 'بدي ألغي الإرسال.', en: 'I’d like to cancel the shipment.' },
          { fr: 'modifier', ar: 'يغيّر / يعدّل', en: 'to modify' },
          { fr: 'Je voudrais modifier l’adresse de livraison.', ar: 'بدي غيّر عنوان التوصيل.', en: 'I’d like to change the delivery address.' },
          { fr: 'rediriger', ar: 'يعيد توجيه', en: 'to redirect' },
          { fr: 'Pouvez-vous rediriger le colis vers un point relais ?', ar: 'فيني خليكم توجهوا الطرد لنقطة استلام؟', en: 'Can you redirect the parcel to a pickup point?' },
          { fr: 'Mon colis doit être livré demain.', ar: 'لازم الطرد يوصل بكرا.', en: 'My parcel must be delivered tomorrow.' },
          { fr: 'Pouvez-vous vérifier où est mon colis ?', ar: 'فيني أعرف وين صار طردي؟', en: 'Can you check where my parcel is?' },
          { fr: 'Mon colis n’est toujours pas arrivé.', ar: 'طردي لسا ما وصل.', en: 'My parcel still hasn’t arrived.' },
          { fr: 'Il manque quelque chose dans le colis.', ar: 'في شي ناقص بالطرد.', en: 'Something is missing from the parcel.' },
          { fr: 'Le colis a été endommagé pendant le transport.', ar: 'الطرد انضرر أثناء النقل.', en: 'The parcel was damaged during transport.' }
        ]
      }
    ]
  },
  {
    id: 'france-travail',
    icon: '💼',
    name: {
      ar: 'France Travail — البحث عن عمل والبطالة',
      en: 'France Travail — job search and unemployment',
      fr: 'France Travail — recherche d’emploi et chômage'
    },
    desc: {
      ar: 'كل العبارات مع مكتب العمل: التسجيل، التحديث الشهري، تعويض ARE، المستشار، التدريب والمواعيد',
      en: 'All phrases for the job centre: registration, monthly update, ARE benefit, advisor, training and appointments',
      fr: 'Toutes les phrases pour France Travail : inscription, actualisation, ARE, conseiller, formation et rendez-vous'
    },
    sections: [
      {
        icon: '📋',
        title: { ar: '⭐ أهم المفردات', en: 'Key vocabulary', fr: 'Vocabulaire' },
        phrases: [
          { fr: 'demandeur d’emploi', ar: 'شخص باحث عن عمل', en: 'job seeker' },
          { fr: 'inscription', ar: 'تسجيل', en: 'registration' },
          { fr: 'réinscription', ar: 'إعادة التسجيل', en: 're-registration' },
          { fr: 'recherche d’emploi', ar: 'البحث عن عمل', en: 'job search' },
          { fr: 'offre d’emploi', ar: 'عرض عمل', en: 'job offer' },
          { fr: 'candidature', ar: 'طلب توظيف', en: 'application' },
          { fr: 'candidat', ar: 'متقدّم للوظيفة', en: 'candidate / applicant' },
          { fr: 'employeur', ar: 'صاحب العمل', en: 'employer' },
          { fr: 'salarié', ar: 'موظف / أجير', en: 'employee' },
          { fr: 'conseiller', ar: 'مستشار', en: 'advisor' },
          { fr: 'agence France Travail', ar: 'وكالة France Travail', en: 'France Travail office' },
          { fr: 'rendez-vous', ar: 'موعد', en: 'appointment' },
          { fr: 'accompagnement', ar: 'مرافقة / دعم', en: 'support' },
          { fr: 'projet professionnel', ar: 'مشروع مهني', en: 'career project' },
          { fr: 'formation', ar: 'تدريب / تكوين', en: 'training' },
          { fr: 'compétence', ar: 'مهارة', en: 'skill' },
          { fr: 'expérience professionnelle', ar: 'خبرة مهنية', en: 'work experience' },
          { fr: 'CV', ar: 'سيرة ذاتية', en: 'CV / résumé' },
          { fr: 'lettre de motivation', ar: 'رسالة تحفيزية', en: 'cover letter' },
          { fr: 'entretien d’embauche', ar: 'مقابلة عمل', en: 'job interview' }
        ]
      },
      {
        icon: '💶',
        title: { ar: '⭐ البطالة والتعويض', en: 'Unemployment and benefits', fr: 'Chômage et indemnisation' },
        phrases: [
          { fr: 'chômage', ar: 'بطالة', en: 'unemployment' },
          { fr: 'allocation chômage', ar: 'إعانة البطالة', en: 'unemployment benefit' },
          { fr: 'ARE', ar: 'إعانة العودة إلى العمل', en: 'unemployment benefit' },
          { fr: 'indemnisation', ar: 'تعويض مالي', en: 'compensation / benefit' },
          { fr: 'droits', ar: 'حقوق', en: 'entitlements' },
          { fr: 'ouverture des droits', ar: 'فتح الحقوق', en: 'opening of entitlement' },
          { fr: 'reprise des droits', ar: 'استئناف الحقوق', en: 'resumption of entitlement' },
          { fr: 'fin de droits', ar: 'انتهاء الحقوق', en: 'end of entitlement' },
          { fr: 'montant', ar: 'المبلغ', en: 'amount' },
          { fr: 'durée d’indemnisation', ar: 'مدة التعويض', en: 'benefit duration' },
          { fr: 'versement', ar: 'صرف / تحويل المبلغ', en: 'payment' },
          { fr: 'attestation employeur', ar: 'شهادة صاحب العمل', en: 'employer certificate' },
          { fr: 'bulletin de salaire', ar: 'قسيمة الراتب', en: 'payslip' }
        ]
      },
      {
        icon: '🔑',
        title: { ar: '⭐ أهم الأفعال', en: 'Key verbs', fr: 'Verbes clés' },
        phrases: [
          { fr: 's’inscrire', ar: 'يسجّل حاله', en: 'to register' },
          { fr: 'se réinscrire', ar: 'يعيد التسجيل', en: 'to re-register' },
          { fr: 'chercher', ar: 'يبحث', en: 'to look for' },
          { fr: 'trouver', ar: 'يجد', en: 'to find' },
          { fr: 'postuler', ar: 'يتقدّم لوظيفة', en: 'to apply' },
          { fr: 'candidater', ar: 'يتقدّم لوظيفة', en: 'to apply' },
          { fr: 'recruter', ar: 'يوظّف', en: 'to recruit' },
          { fr: 'embaucher', ar: 'يوظّف', en: 'to hire' },
          { fr: 'actualiser', ar: 'يحدّث وضعه', en: 'to update' },
          { fr: 'signaler', ar: 'يبلّغ عن', en: 'to report' },
          { fr: 'justifier', ar: 'يثبت / يبرهن', en: 'to provide proof' },
          { fr: 'déposer', ar: 'يقدّم / يودع', en: 'to submit' },
          { fr: 'consulter', ar: 'يطّلع على', en: 'to consult' },
          { fr: 'contacter', ar: 'يتواصل مع', en: 'to contact' },
          { fr: 'prendre rendez-vous', ar: 'يحجز موعد', en: 'to make an appointment' },
          { fr: 'reporter', ar: 'يؤجّل', en: 'to postpone' },
          { fr: 'accompagner', ar: 'يرافق / يدعم', en: 'to support' },
          { fr: 'bénéficier de', ar: 'يستفيد من', en: 'to benefit from' },
          { fr: 'percevoir', ar: 'يتلقى / يحصل على', en: 'to receive' },
          { fr: 'être indemnisé', ar: 'يحصل على تعويض', en: 'to receive benefits' },
          { fr: 'reprendre', ar: 'يستأنف', en: 'to resume' },
          { fr: 'cesser', ar: 'يوقف', en: 'to cease' },
          { fr: 'démissionner', ar: 'يستقيل', en: 'to resign' }
        ]
      },
      {
        icon: '📝',
        title: { ar: 'التسجيل في France Travail', en: 'Registering with France Travail', fr: 'S’inscrire à France Travail' },
        phrases: [
          { fr: 'Je voudrais m’inscrire à France Travail.', ar: 'بدي سجّل بـFrance Travail.', en: 'I would like to register with France Travail.' },
          { fr: 'Je souhaite m’inscrire comme demandeur d’emploi.', ar: 'بدي سجّل كباحث عن عمل.', en: 'I would like to register as a job seeker.' },
          { fr: 'Je viens de terminer mon contrat de travail.', ar: 'خلص عقد عملي من جديد.', en: 'I have just finished my employment contract.' },
          { fr: 'Mon contrat de travail est terminé.', ar: 'عقد عملي انتهى.', en: 'My employment contract has ended.' },
          { fr: 'Je suis actuellement sans emploi.', ar: 'حاليًا أنا بدون شغل.', en: 'I am currently unemployed.' },
          { fr: 'Je suis à la recherche d’un emploi.', ar: 'أنا عم دوّر على شغل.', en: 'I am looking for a job.' },
          { fr: 'Je voudrais savoir comment m’inscrire.', ar: 'بدي أعرف كيف سجّل.', en: 'I would like to know how to register.' },
          { fr: 'Est-ce que je peux m’inscrire en ligne ?', ar: 'فيني سجّل أونلاين؟', en: 'Can I register online?' },
          { fr: 'Quand dois-je m’inscrire ?', ar: 'إمتى لازم سجّل؟', en: 'When should I register?' },
          { fr: 'Mon CDD est arrivé à son terme.', ar: 'عقد الـCDD تبعي انتهى.', en: 'My fixed-term contract has ended.' },
          { fr: 'Mon contrat n’a pas été renouvelé.', ar: 'عقدي ما تجدد.', en: 'My contract was not renewed.' },
          { fr: 'Mon dernier jour de travail était le…', ar: 'آخر يوم إلي بالشغل كان...', en: 'My last working day was...' },
          { fr: 'Je ne travaille plus depuis le…', ar: 'ما عدت عم اشتغل من تاريخ...', en: 'I haven’t worked since...' },
          { fr: 'Je souhaite déclarer la fin de mon contrat.', ar: 'بدي صرّح بانتهاء عقدي.', en: 'I would like to report the end of my contract.' }
        ]
      },
      {
        icon: '🔄',
        title: { ar: '⭐ التحديث الشهري — Actualisation', en: 'Monthly update — Actualisation', fr: 'Actualisation mensuelle' },
        phrases: [
          { fr: 'actualisation', ar: 'تحديث الوضع الشهري', en: 'monthly update' },
          { fr: 's’actualiser', ar: 'يحدّث وضعه', en: 'to update one’s status' },
          { fr: 'heures travaillées', ar: 'ساعات العمل', en: 'hours worked' },
          { fr: 'salaire brut', ar: 'الراتب الإجمالي', en: 'gross salary' },
          { fr: 'arrêt maladie', ar: 'إجازة مرضية', en: 'sick leave' },
          { fr: 'Je dois faire mon actualisation.', ar: 'لازم أعمل التحديث الشهري.', en: 'I have to complete my monthly update.' },
          { fr: 'Je voudrais faire mon actualisation.', ar: 'بدي أعمل التحديث الشهري.', en: 'I would like to complete my monthly update.' },
          { fr: 'J’ai travaillé ce mois-ci.', ar: 'اشتغلت هالشهر.', en: 'I worked this month.' },
          { fr: 'J’ai travaillé quelques heures.', ar: 'اشتغلت كم ساعة.', en: 'I worked a few hours.' },
          { fr: 'Je n’ai pas travaillé ce mois-ci.', ar: 'ما اشتغلت هالشهر.', en: 'I didn’t work this month.' },
          { fr: 'Je n’ai eu aucune activité.', ar: 'ما كان عندي أي نشاط.', en: 'I had no activity.' },
          { fr: 'Je suis actuellement en formation.', ar: 'حاليًا أنا بتدريب.', en: 'I am currently in training.' },
          { fr: 'Je suis en arrêt maladie.', ar: 'أنا بإجازة مرضية.', en: 'I am on sick leave.' },
          { fr: 'J’ai repris le travail.', ar: 'رجعت عالشغل.', en: 'I went back to work.' },
          { fr: 'J’ai cessé de travailler.', ar: 'وقفت عن العمل.', en: 'I stopped working.' },
          { fr: 'Actualisation du 28 du mois au 15 du mois suivant.', ar: 'فترة التحديث عمومًا من 28 الشهر لـ15 الشهر التالي (ما عدا فبراير).', en: 'Update window is generally the 28th to the 15th of the following month (except February).' }
        ]
      },
      {
        icon: '🎉',
        title: { ar: 'بلّشت شغل جديد', en: 'Started a new job', fr: 'Nouvel emploi' },
        phrases: [
          { fr: 'J’ai retrouvé un emploi.', ar: 'لقيت شغل جديد.', en: 'I found a new job.' },
          { fr: 'J’ai commencé un nouvel emploi.', ar: 'بلشت شغل جديد.', en: 'I started a new job.' },
          { fr: 'Je viens de reprendre le travail.', ar: 'رجعت للشغل من جديد.', en: 'I have just gone back to work.' },
          { fr: 'J’ai commencé à travailler le…', ar: 'بلشت شغل بتاريخ...', en: 'I started working on...' },
          { fr: 'Mon nouvel employeur est…', ar: 'صاحب عملي الجديد هو...', en: 'My new employer is...' },
          { fr: 'Je dois déclarer ma reprise d’activité ?', ar: 'لازم صرّح إني رجعت عالشغل؟', en: 'Do I need to report that I have returned to work?' },
          { fr: 'Est-ce que je dois continuer à m’actualiser ?', ar: 'لازم ضل أعمل التحديث الشهري؟', en: 'Do I still need to update my situation monthly?' }
        ]
      },
      {
        icon: '💰',
        title: { ar: 'طلب الـchômage / ARE', en: 'Applying for chômage / ARE', fr: 'Demande d’ARE' },
        phrases: [
          { fr: 'Je voudrais faire une demande d’allocation chômage.', ar: 'بدي أقدّم طلب إعانة البطالة.', en: 'I would like to apply for unemployment benefits.' },
          { fr: 'Est-ce que j’ai droit à l’allocation chômage ?', ar: 'إلي حق بإعانة البطالة؟', en: 'Am I entitled to unemployment benefits?' },
          { fr: 'Est-ce que j’ai droit à l’ARE ?', ar: 'إلي حق بـARE؟', en: 'Am I entitled to ARE?' },
          { fr: 'Je voudrais savoir si je suis indemnisé.', ar: 'بدي أعرف إذا إلي تعويض.', en: 'I would like to know if I am entitled to benefits.' },
          { fr: 'Quel sera le montant de mon allocation ?', ar: 'قديش رح يكون مبلغ الإعانة؟', en: 'How much will my benefit be?' },
          { fr: 'Pendant combien de temps serai-je indemnisé ?', ar: 'لمدة قديش رح آخد التعويض؟', en: 'How long will I receive benefits?' },
          { fr: 'Quand vais-je recevoir mon premier paiement ?', ar: 'إمتى رح توصلني أول دفعة؟', en: 'When will I receive my first payment?' },
          { fr: 'Pouvez-vous vérifier mes droits ?', ar: 'فيكم تتأكدوا من حقوقي؟', en: 'Can you check my entitlement?' },
          { fr: 'Pouvez-vous étudier mon dossier ?', ar: 'فيكم تدرسوا ملفي؟', en: 'Can you review my file?' }
        ]
      },
      {
        icon: '📄',
        title: { ar: 'الأوراق المطلوبة', en: 'Required documents', fr: 'Documents à fournir' },
        phrases: [
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدّمها؟', en: 'What documents do I need to provide?' },
          { fr: 'Voici mon attestation employeur.', ar: 'هاي شهادة صاحب العمل.', en: 'Here is my employer certificate.' },
          { fr: 'Voici mes bulletins de salaire.', ar: 'هاي قسائم راتبي.', en: 'Here are my payslips.' },
          { fr: 'Je vous transmets les documents demandés.', ar: 'عم أرسللكم الأوراق المطلوبة.', en: 'I am sending you the requested documents.' },
          { fr: 'Il me manque un document.', ar: 'ناقصني ورقة.', en: 'I am missing a document.' },
          { fr: 'Quel document manque à mon dossier ?', ar: 'أي ورقة ناقصة من ملفي؟', en: 'Which document is missing from my file?' },
          { fr: 'Est-ce que mon dossier est complet ?', ar: 'ملفي كامل؟', en: 'Is my file complete?' },
          { fr: 'Est-ce que vous avez bien reçu mes documents ?', ar: 'وصلكن أوراقي بشكل صحيح؟', en: 'Did you receive my documents?' }
        ]
      },
      {
        icon: '📱',
        title: { ar: 'Espace personnel — الحساب الإلكتروني', en: 'Online account', fr: 'Espace personnel' },
        phrases: [
          { fr: 'numéro France Travail', ar: 'رقم France Travail', en: 'France Travail number' },
          { fr: 'Je n’arrive pas à me connecter.', ar: 'ما عم اقدر فوت عحسابي.', en: 'I can’t log in.' },
          { fr: 'J’ai oublié mon mot de passe.', ar: 'نسيت كلمة المرور.', en: 'I forgot my password.' },
          { fr: 'Je ne trouve pas mon document.', ar: 'ما عم لاقي الوثيقة.', en: 'I can’t find my document.' },
          { fr: 'Où puis-je trouver mon attestation ?', ar: 'وين فيني لاقي الشهادة؟', en: 'Where can I find my certificate?' },
          { fr: 'Je voudrais télécharger mon attestation.', ar: 'بدي نزّل الشهادة.', en: 'I would like to download my certificate.' },
          { fr: 'Je voudrais envoyer un document.', ar: 'بدي أرسل وثيقة.', en: 'I would like to send a document.' },
          { fr: 'Mon dossier est-il à jour ?', ar: 'ملفي محدّث؟', en: 'Is my file up to date?' }
        ]
      },
      {
        icon: '🧑‍💼',
        title: { ar: 'المستشار — Conseiller', en: 'Your advisor', fr: 'Le conseiller' },
        phrases: [
          { fr: 'Je voudrais parler à mon conseiller.', ar: 'بدي أحكي مع مستشاري.', en: 'I would like to speak to my advisor.' },
          { fr: 'Je voudrais prendre rendez-vous avec mon conseiller.', ar: 'بدي آخد موعد مع مستشاري.', en: 'I would like to make an appointment with my advisor.' },
          { fr: 'Je voudrais faire le point sur ma situation.', ar: 'بدي راجع وضعي معكم.', en: 'I would like to review my situation.' },
          { fr: 'J’ai besoin d’aide pour ma recherche d’emploi.', ar: 'بحتاج مساعدة بالبحث عن شغل.', en: 'I need help with my job search.' },
          { fr: 'Pouvez-vous m’aider à trouver une formation ?', ar: 'فيكم تساعدوني لاقي تدريب؟', en: 'Can you help me find training?' },
          { fr: 'Je voudrais changer de métier.', ar: 'بدي غيّر مهنتي.', en: 'I would like to change careers.' },
          { fr: 'Je voudrais améliorer mes compétences.', ar: 'بدي طوّر مهاراتي.', en: 'I would like to improve my skills.' },
          { fr: 'Je voudrais faire une formation professionnelle.', ar: 'بدي أعمل تدريب مهني.', en: 'I would like to do vocational training.' }
        ]
      },
      {
        icon: '🔎',
        title: { ar: 'البحث عن عمل وعروض العمل', en: 'Job search and offers', fr: 'Recherche et offres d’emploi' },
        phrases: [
          { fr: 'Je cherche un emploi à temps plein.', ar: 'عم دوّر على شغل دوام كامل.', en: 'I am looking for a full-time job.' },
          { fr: 'Je cherche un emploi à temps partiel.', ar: 'عم دوّر على شغل دوام جزئي.', en: 'I am looking for a part-time job.' },
          { fr: 'Je suis disponible immédiatement.', ar: 'أنا متاح أبلّش فورًا.', en: 'I am available immediately.' },
          { fr: 'Je peux travailler en équipe.', ar: 'فيني اشتغل ضمن فريق.', en: 'I can work in a team.' },
          { fr: 'Je suis disponible pour un entretien.', ar: 'أنا متاح لمقابلة.', en: 'I am available for an interview.' },
          { fr: 'Je voudrais postuler à cette offre.', ar: 'بدي قدّم على هالوظيفة.', en: 'I would like to apply for this job.' },
          { fr: 'J’ai envoyé ma candidature.', ar: 'بعت طلب التوظيف تبعي.', en: 'I sent my application.' },
          { fr: 'poste à pourvoir', ar: 'وظيفة شاغرة', en: 'position to fill' },
          { fr: 'intérim', ar: 'عمل مؤقت', en: 'temporary work' },
          { fr: 'horaires', ar: 'أوقات الدوام', en: 'working hours' },
          { fr: 'lieu de travail', ar: 'مكان العمل', en: 'workplace' },
          { fr: 'Cette offre m’intéresse.', ar: 'هالعرض بهمني.', en: 'I am interested in this offer.' },
          { fr: 'Quels sont les horaires ?', ar: 'شو أوقات الدوام؟', en: 'What are the working hours?' },
          { fr: 'Quel est le salaire ?', ar: 'قديش الراتب؟', en: 'What is the salary?' },
          { fr: 'Quel type de contrat proposez-vous ?', ar: 'شو نوع العقد اللي بتقدموه؟', en: 'What type of contract do you offer?' },
          { fr: 'Est-ce un CDI ou un CDD ?', ar: 'هو CDI ولا CDD؟', en: 'Is it a permanent or fixed-term contract?' }
        ]
      },
      {
        icon: '🎓',
        title: { ar: 'التدريب — Formation', en: 'Training', fr: 'Formation' },
        phrases: [
          { fr: 'Je voudrais faire une formation.', ar: 'بدي أعمل تدريب.', en: 'I would like to take a training course.' },
          { fr: 'Je cherche une formation dans le domaine de la logistique.', ar: 'عم دوّر على تدريب بمجال اللوجستيك.', en: 'I am looking for training in logistics.' },
          { fr: 'Je cherche une formation SAP.', ar: 'عم دوّر على تدريب SAP.', en: 'I am looking for SAP training.' },
          { fr: 'Cette formation est-elle financée ?', ar: 'هالتدريب ممول؟', en: 'Is this training funded?' },
          { fr: 'Est-ce que France Travail peut financer cette formation ?', ar: 'France Travail فيهم يمولوا هالتدريب؟', en: 'Can France Travail fund this training?' },
          { fr: 'Est-ce que je peux utiliser mon CPF ?', ar: 'فيني استخدم CPF تبعي؟', en: 'Can I use my CPF?' },
          { fr: 'Quelle est la durée de la formation ?', ar: 'قديش مدة التدريب؟', en: 'How long is the training?' },
          { fr: 'Quand commence la formation ?', ar: 'إمتى بيبدأ التدريب؟', en: 'When does the training start?' },
          { fr: 'Est-ce que la formation est à distance ?', ar: 'التدريب أونلاين؟', en: 'Is the training online?' },
          { fr: 'Est-ce qu’il y a un stage ?', ar: 'في تدريب عملي؟', en: 'Is there an internship?' }
        ]
      },
      {
        icon: '📅',
        title: { ar: 'المواعيد', en: 'Appointments', fr: 'Rendez-vous' },
        phrases: [
          { fr: 'J’ai reçu une convocation.', ar: 'وصلتني دعوة/استدعاء.', en: 'I received an appointment notice.' },
          { fr: 'J’ai rendez-vous avec mon conseiller.', ar: 'عندي موعد مع مستشاري.', en: 'I have an appointment with my advisor.' },
          { fr: 'À quelle heure est le rendez-vous ?', ar: 'بأي ساعة الموعد؟', en: 'What time is the appointment?' },
          { fr: 'Où a lieu le rendez-vous ?', ar: 'وين الموعد؟', en: 'Where is the appointment?' },
          { fr: 'Je ne peux pas venir à ce rendez-vous.', ar: 'ما فيني أجي عهالموعد.', en: 'I can’t attend this appointment.' },
          { fr: 'Je voudrais reporter le rendez-vous.', ar: 'بدي أجّل الموعد.', en: 'I would like to postpone the appointment.' },
          { fr: 'Je voudrais annuler le rendez-vous.', ar: 'بدي ألغي الموعد.', en: 'I would like to cancel the appointment.' },
          { fr: 'Est-ce que je peux avoir un rendez-vous en visioconférence ?', ar: 'فيني آخد الموعد فيديو؟', en: 'Can I have a video appointment?' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'إذا ما فهمت + الجملة الجاهزة', en: 'Not understanding + ready sentence', fr: 'Pas compris + phrase complète' },
        phrases: [
          { fr: 'Je n’ai pas bien compris.', ar: 'ما فهمت منيح.', en: 'I didn’t understand well.' },
          { fr: 'Pouvez-vous répéter, s’il vous plaît ?', ar: 'فيك تعيد لو سمحت؟', en: 'Could you repeat, please?' },
          { fr: 'Pouvez-vous parler plus lentement ?', ar: 'فيك تحكي أبطأ؟', en: 'Could you speak more slowly?' },
          { fr: 'Pouvez-vous m’expliquer simplement ?', ar: 'فيك تشرحلي بطريقة بسيطة؟', en: 'Could you explain it simply?' },
          { fr: 'Qu’est-ce que cela signifie ?', ar: 'شو يعني هاد؟', en: 'What does this mean?' },
          { fr: 'Qu’est-ce que je dois faire ?', ar: 'شو لازم أعمل؟', en: 'What do I have to do?' },
          { fr: 'Quelle est la prochaine étape ?', ar: 'شو الخطوة الجاية؟', en: 'What is the next step?' },
          { fr: 'Est-ce que vous pouvez me l’écrire ?', ar: 'فيك تكتبلي ياها؟', en: 'Can you write it down for me?' },
          { fr: 'Bonjour, je viens de terminer mon contrat de travail. Je ne travaille plus actuellement et je voudrais m’inscrire à France Travail. Je voudrais également savoir si j’ai droit à l’allocation chômage et quels documents je dois fournir.', ar: 'مرحبا، خلص عقد عملي للتو. حاليًا ما عاد عم اشتغل وبدي سجّل بـFrance Travail. وبدي كمان أعرف إذا إلي حق بإعانة البطالة وشو الأوراق اللي لازم قدّمها.', en: 'Hello, I have just finished my employment contract. I am currently no longer working and I would like to register with France Travail. I would also like to know whether I am entitled to unemployment benefits and which documents I need to provide.' }
        ]
      },
      {
        icon: '⭐',
        title: { ar: 'أهم 20 جملة تحفظها أولًا', en: 'Top 20 phrases to learn first', fr: 'Top 20 à mémoriser' },
        phrases: [
          { fr: 'Je voudrais m’inscrire à France Travail.', ar: 'بدي سجّل بـFrance Travail.', en: 'I would like to register with France Travail.' },
          { fr: 'Je suis à la recherche d’un emploi.', ar: 'عم دوّر على شغل.', en: 'I am looking for a job.' },
          { fr: 'Mon contrat de travail est terminé.', ar: 'عقد عملي انتهى.', en: 'My employment contract has ended.' },
          { fr: 'Je suis actuellement sans emploi.', ar: 'حاليًا أنا بدون شغل.', en: 'I am currently unemployed.' },
          { fr: 'Je voudrais demander l’allocation chômage.', ar: 'بدي أطلب إعانة البطالة.', en: 'I would like to apply for unemployment benefits.' },
          { fr: 'Est-ce que j’ai droit à l’ARE ?', ar: 'إلي حق بـARE؟', en: 'Am I entitled to ARE?' },
          { fr: 'Quel sera le montant de mon allocation ?', ar: 'قديش رح يكون مبلغ الإعانة؟', en: 'How much will my benefit be?' },
          { fr: 'Pendant combien de temps serai-je indemnisé ?', ar: 'لمدة قديش رح آخد تعويض؟', en: 'How long will I receive benefits?' },
          { fr: 'Quels documents dois-je fournir ?', ar: 'شو الأوراق اللي لازم قدّمها؟', en: 'What documents do I need to provide?' },
          { fr: 'Est-ce que mon dossier est complet ?', ar: 'ملفي كامل؟', en: 'Is my file complete?' },
          { fr: 'Je voudrais parler à mon conseiller.', ar: 'بدي أحكي مع مستشاري.', en: 'I would like to speak to my advisor.' },
          { fr: 'Je voudrais prendre rendez-vous.', ar: 'بدي آخد موعد.', en: 'I would like to make an appointment.' },
          { fr: 'Je cherche une formation.', ar: 'عم دوّر على تدريب.', en: 'I am looking for training.' },
          { fr: 'Est-ce que France Travail peut financer cette formation ?', ar: 'فيكم تموّلوا هالتدريب؟', en: 'Can France Travail fund this training?' },
          { fr: 'Je dois faire mon actualisation.', ar: 'لازم أعمل التحديث الشهري.', en: 'I have to complete my monthly update.' },
          { fr: 'J’ai repris le travail.', ar: 'رجعت عالشغل.', en: 'I went back to work.' },
          { fr: 'J’ai commencé un nouvel emploi.', ar: 'بلشت شغل جديد.', en: 'I started a new job.' },
          { fr: 'Je voudrais signaler un changement de situation.', ar: 'بدي بلّغ عن تغيير بوضعي.', en: 'I would like to report a change in my situation.' },
          { fr: 'Je n’ai pas bien compris.', ar: 'ما فهمت منيح.', en: 'I didn’t understand well.' },
          { fr: 'Pouvez-vous parler plus lentement, s’il vous plaît ?', ar: 'فيك تحكي أبطأ لو سمحت؟', en: 'Could you speak more slowly, please?' }
        ]
      },
      {
        icon: '🎓',
        title: { ar: '⭐ CPF — المعنى والرصيد', en: 'CPF — meaning and balance', fr: 'CPF — solde' },
        phrases: [
          { fr: 'CPF = Compte Personnel de Formation', ar: 'الحساب الشخصي للتدريب', en: 'Personal Training Account' },
          { fr: 'J’ai un compte CPF.', ar: 'عندي حساب CPF.', en: 'I have a CPF account.' },
          { fr: 'J’ai des droits CPF.', ar: 'عندي رصيد/حقوق بـCPF.', en: 'I have CPF credits.' },
          { fr: 'Je voudrais consulter mon solde CPF.', ar: 'بدي شوف رصيد الـCPF تبعي.', en: 'I would like to check my CPF balance.' },
          { fr: 'Quel est mon solde CPF ?', ar: 'قديش رصيد الـCPF تبعي؟', en: 'What is my CPF balance?' },
          { fr: 'J’ai 1 200 euros sur mon CPF.', ar: 'عندي 1200 يورو بحساب CPF.', en: 'I have €1,200 in my CPF.' },
          { fr: 'Mes droits CPF sont insuffisants.', ar: 'رصيد الـCPF تبعي ما بكفي.', en: 'My CPF credits are insufficient.' },
          { fr: 'Combien d’euros ai-je acquis sur mon CPF ?', ar: 'قديش يورو جمّعت بحساب CPF؟', en: 'How many euros have I accumulated in my CPF?' },
          { fr: 'Pourquoi mon CPF n’a pas été crédité ?', ar: 'ليش ما انضاف الرصيد على CPF تبعي؟', en: 'Why hasn’t my CPF been credited?' },
          { fr: 'Environ 500 € par an à temps plein, jusqu’à 5 000 € (jusqu’à 800 €/an et 8 000 € pour certains profils).', ar: 'حوالي 500 يورو سنويًا للدوام الكامل بحد أقصى 5000 (ولفئات معينة 800 سنويًا حتى 8000).', en: 'About €500/year full-time, capped at €5,000 (€800/year, cap €8,000 for certain profiles).' },
          { fr: 'Mon contrat est terminé, est-ce que je garde mes droits CPF ?', ar: 'عقدي انتهى، هل بحتفظ برصيد CPF؟', en: 'My contract has ended. Do I keep my CPF credits?' },
          { fr: 'Le CPF me suit toute ma vie professionnelle.', ar: 'الـCPF برافقني طول حياتي المهنية مو مربوط بالشركة.', en: 'The CPF follows me throughout my career — not tied to the employer.' },
          { fr: 'Je suis demandeur d’emploi. Est-ce que je peux utiliser mon CPF ?', ar: 'أنا باحث عن عمل، فيني استخدم الـCPF؟', en: 'I am a job seeker. Can I use my CPF?' },
          { fr: 'Je voudrais utiliser mon CPF pour financer une formation.', ar: 'بدي استخدم الـCPF لتمويل تدريب.', en: 'I would like to use my CPF to fund training.' }
        ]
      },
      {
        icon: '🔍',
        title: { ar: 'CPF — التدريب المؤهل والبحث', en: 'CPF — eligible training and search', fr: 'CPF — formations éligibles' },
        phrases: [
          { fr: 'formation éligible au CPF', ar: 'تدريب مؤهل للـCPF', en: 'CPF-eligible training' },
          { fr: 'formation certifiante', ar: 'تدريب يعطي شهادة معترف بها', en: 'certification training' },
          { fr: 'certification professionnelle', ar: 'شهادة مهنية', en: 'professional certification' },
          { fr: 'titre professionnel', ar: 'شهادة/مؤهل مهني', en: 'professional qualification' },
          { fr: 'Je cherche une formation éligible au CPF.', ar: 'عم دوّر على تدريب مؤهل للـCPF.', en: 'I’m looking for CPF-eligible training.' },
          { fr: 'Je voudrais comparer les formations.', ar: 'بدي قارن بين التدريبات.', en: 'I would like to compare the training courses.' },
          { fr: 'Je voudrais connaître le prix de la formation.', ar: 'بدي أعرف سعر التدريب.', en: 'I would like to know the price of the training.' },
          { fr: 'organisme de formation', ar: 'مؤسسة التدريب', en: 'training provider' },
          { fr: 'session', ar: 'دورة/جلسة تدريب محددة', en: 'training session' },
          { fr: 'date de début / date de fin', ar: 'تاريخ البداية / تاريخ النهاية', en: 'start date / end date' },
          { fr: 'devis', ar: 'عرض سعر', en: 'quotation' },
          { fr: 'demande d’inscription', ar: 'طلب التسجيل', en: 'registration request' },
          { fr: 'validation / refus', ar: 'موافقة / رفض', en: 'approval / refusal' }
        ]
      },
      {
        icon: '💶',
        title: { ar: '⭐ CPF — reste à payer و abondement', en: 'CPF — remaining amount and top-up funding', fr: 'CPF — reste à payer et abondement' },
        phrases: [
          { fr: 'reste à payer', ar: 'المبلغ اللي بقي عليك تدفعه', en: 'amount left to pay' },
          { fr: 'Il me reste 800 euros à payer.', ar: 'بقي عليّ 800 يورو أدفعها.', en: 'I have €800 left to pay.' },
          { fr: 'Pourquoi ai-je un reste à payer ?', ar: 'ليش بقي عليّ مبلغ للدفع؟', en: 'Why do I have an amount left to pay?' },
          { fr: 'abondement', ar: 'تمويل إضافي', en: 'additional funding' },
          { fr: 'cofinancement', ar: 'تمويل مشترك', en: 'co-funding' },
          { fr: 'financement', ar: 'تمويل', en: 'funding' },
          { fr: 'Mes droits CPF ne suffisent pas.', ar: 'رصيد CPF تبعي ما بكفي.', en: 'My CPF credits are not enough.' },
          { fr: 'Est-ce que France Travail peut financer le reste à payer ?', ar: 'هل France Travail فيهم يمولوا المبلغ المتبقي؟', en: 'Can France Travail fund the remaining amount?' },
          { fr: 'Je voudrais demander un abondement de France Travail.', ar: 'بدي أطلب تمويل إضافي من France Travail.', en: 'I would like to request additional funding from France Travail.' },
          { fr: 'Est-ce que France Travail peut compléter mon CPF ?', ar: 'هل France Travail فيهم يكملوا المبلغ الناقص بالـCPF؟', en: 'Can France Travail cover the remaining amount?' },
          { fr: 'La formation doit commencer au moins 21 jours ouvrés après la demande.', ar: 'لازم التدريب يبدأ بعد 21 يوم عمل على الأقل من تاريخ طلب التمويل.', en: 'The training must start at least 21 working days after the request.' },
          { fr: 'France Travail répond sous 10 jours ouvrés maximum.', ar: 'France Travail بيردوا بحد أقصى 10 أيام عمل من تاريخ الطلب.', en: 'France Travail answers within 10 working days at most.' }
        ]
      },
      {
        icon: '📝',
        title: { ar: 'CPF — تبرير طلب التمويل والنتيجة', en: 'CPF — justifying the request, outcome', fr: 'CPF — justification et réponse' },
        phrases: [
          { fr: 'Cette formation va me permettre de retrouver un emploi.', ar: 'هالتدريب رح يساعدني لاقي شغل.', en: 'This training will help me find a job.' },
          { fr: 'Cette formation correspond à mon projet professionnel.', ar: 'هالتدريب بيتوافق مع مشروعي المهني.', en: 'This training matches my career plan.' },
          { fr: 'Cette formation me permettra d’acquérir de nouvelles compétences.', ar: 'هالتدريب رح يخليني اكتسب مهارات جديدة.', en: 'This training will allow me to gain new skills.' },
          { fr: 'Quand vais-je recevoir la réponse de France Travail ?', ar: 'إمتى رح يوصلني جواب France Travail؟', en: 'When will I receive France Travail’s response?' },
          { fr: 'Ma demande de financement est-elle en cours ?', ar: 'هل طلب التمويل تبعي قيد الدراسة؟', en: 'Is my funding request being processed?' },
          { fr: 'Ma demande de financement a été acceptée.', ar: 'طلب التمويل تبعي انقبل.', en: 'My funding request was accepted.' },
          { fr: 'La formation est financée par mon CPF et France Travail.', ar: 'التدريب ممول من CPF تبعي وFrance Travail.', en: 'The training is funded by my CPF and France Travail.' },
          { fr: 'Ma demande de financement a été refusée.', ar: 'طلب التمويل تبعي انرفض.', en: 'My funding request was refused.' },
          { fr: 'Pourquoi ma demande a-t-elle été refusée ?', ar: 'ليش انرفض طلبي؟', en: 'Why was my request refused?' },
          { fr: 'Est-ce que je peux choisir une autre formation ?', ar: 'فيني اختار تدريب تاني؟', en: 'Can I choose another training course?' },
          { fr: 'Est-ce que je peux payer le reste à payer moi-même ?', ar: 'فيني ادفع المبلغ المتبقي بنفسي؟', en: 'Can I pay the remaining amount myself?' },
          { fr: 'Attention : une participation financière peut être obligatoire depuis octobre 2026.', ar: 'انتبه: في مساهمة مالية إلزامية ببعض الحالات حسب قواعد أكتوبر 2026 — شوف المبلغ النهائي قبل ما تسجّل.', en: 'Note: a mandatory financial contribution may apply under the October 2026 rules — check the final amount before enrolling.' }
        ]
      },
      {
        icon: '💰',
        title: { ar: '⭐ أثناء التدريب — ARE-F و RFFT', en: 'During training — ARE-F and RFFT', fr: 'Pendant la formation — ARE-F et RFFT' },
        phrases: [
          { fr: 'ARE-F = ARE pendant la formation', ar: 'استمرار إعانة البطالة ARE أثناء التدريب المؤهل', en: 'ARE continued during eligible training' },
          { fr: 'RFFT = rémunération de formation France Travail', ar: 'تعويض تدريب من France Travail لبعض الحالات', en: 'France Travail training allowance in some cases' },
          { fr: 'Est-ce que je serai rémunéré pendant la formation ?', ar: 'هل رح آخد مصاري أثناء التدريب؟', en: 'Will I receive money during the training?' },
          { fr: 'Est-ce que je conserverai mon ARE pendant la formation ?', ar: 'هل رح يضل الـARE تبعي مستمر أثناء التدريب؟', en: 'Will I continue receiving ARE during the training?' },
          { fr: 'mobiliser ses droits CPF', ar: 'استخدام حقوق CPF', en: 'use CPF credits' },
          { fr: 'acquérir des droits', ar: 'اكتساب حقوق', en: 'earn credits' },
          { fr: 'cumuler des droits', ar: 'تجميع حقوق', en: 'accumulate credits' },
          { fr: 'consulter son solde', ar: 'الاطلاع على الرصيد', en: 'check one’s balance' },
          { fr: 'financer une formation', ar: 'تمويل تدريب', en: 'fund training' },
          { fr: 'demander un abondement', ar: 'طلب تمويل إضافي', en: 'request additional funding' },
          { fr: 'compléter le financement', ar: 'إكمال التمويل', en: 'complete the funding' },
          { fr: 'payer le reste à payer', ar: 'دفع المبلغ المتبقي', en: 'pay the remaining amount' },
          { fr: 's’inscrire à une formation', ar: 'التسجيل بتدريب', en: 'enroll in training' },
          { fr: 'valider / annuler l’inscription', ar: 'تأكيد / إلغاء التسجيل', en: 'validate / cancel enrollment' },
          { fr: 'être éligible / être financé', ar: 'يكون مؤهلًا / يكون ممولًا', en: 'be eligible / be funded' }
        ]
      },
      {
        icon: '🗣️',
        title: { ar: 'CPF — الحوار مع المستشار', en: 'CPF — talking to your advisor', fr: 'CPF — dialogue avec le conseiller' },
        phrases: [
          { fr: 'Bonjour, je voudrais parler de mon CPF.', ar: 'مرحبا، بدي أحكي عن الـCPF تبعي.', en: 'Hello, I would like to talk about my CPF.' },
          { fr: 'J’ai trouvé une formation qui m’intéresse.', ar: 'لقيت تدريب مهتم فيه.', en: 'I found a training course I’m interested in.' },
          { fr: 'La formation coûte 2 000 euros et j’ai 1 200 euros sur mon CPF.', ar: 'التدريب سعره 2000 يورو وعندي 1200 يورو بـCPF.', en: 'The training costs €2,000 and I have €1,200 in my CPF.' },
          { fr: 'Il me reste donc 800 euros à payer.', ar: 'يعني بقي عليّ 800 يورو.', en: 'So I have €800 left to pay.' },
          { fr: 'Est-ce que France Travail peut financer le reste ?', ar: 'هل France Travail فيهم يمولوا الباقي؟', en: 'Can France Travail fund the remaining amount?' },
          { fr: 'Est-ce que cette formation correspond à mon projet professionnel ?', ar: 'هل هالتدريب مناسب لمشروعي المهني؟', en: 'Does this training fit my career plan?' },
          { fr: 'Est-ce que je peux bénéficier d’un abondement ?', ar: 'فيني استفيد من تمويل إضافي؟', en: 'Can I receive additional funding?' },
          { fr: 'Est-ce que je serai rémunéré pendant la formation ?', ar: 'هل رح آخد تعويض أثناء التدريب؟', en: 'Will I receive an allowance during the training?' },
          { fr: 'Quelles démarches dois-je faire ?', ar: 'شو الإجراءات اللي لازم أعملها؟', en: 'What steps do I need to take?' },
          { fr: 'Je souhaite suivre une formation SAP afin d’améliorer mes compétences et de faciliter mon retour à l’emploi. J’ai trouvé une formation sur Mon Compte Formation et je voudrais savoir si France Travail peut compléter mes droits CPF.', ar: 'بدي أعمل تدريب SAP حتى طوّر مهاراتي وسهّل رجعتي لسوق العمل. لقيت تدريب على Mon Compte Formation وبدي أعرف إذا France Travail فيهم يكملوا رصيد CPF تبعي.', en: 'I would like to take SAP training to improve my skills and facilitate my return to employment. I found a course on Mon Compte Formation and would like to know whether France Travail can supplement my CPF credits.' }
        ]
      }
    ]
  }
];
