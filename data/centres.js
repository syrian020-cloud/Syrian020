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
      }
    ]
  }
];
