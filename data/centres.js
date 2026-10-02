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
  }
];
