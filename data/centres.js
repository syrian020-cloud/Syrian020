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
      }
    ]
  }
];
