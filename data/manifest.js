/* فهرس المراحل والدروس — يُحمَّل أولاً، ثم تُحمّل عبارات كل مرحلة عند فتحها */
window.FR_STAGES = [
  {
    id: 1,
    title: { ar: "الوصول إلى فرنسا", fr: "L'arrivée en France", en: "Arriving in France" },
    lessonTitles: [
      { id: 1, ar: "المطار", fr: "L'aéroport", en: "The airport" },
      { id: 2, ar: "مراقبة الحدود", fr: "Le contrôle des frontières", en: "Border control" },
      { id: 3, ar: "استلام الحقائب", fr: "Le retrait des bagages", en: "Baggage claim" },
      { id: 4, ar: "الجمارك", fr: "La douane", en: "Customs" },
      { id: 5, ar: "شراء شريحة هاتف", fr: "Acheter une carte SIM", en: "Buying a SIM card" },
      { id: 6, ar: "صرف العملات", fr: "Le bureau de change", en: "Currency exchange" },
      { id: 7, ar: "شراء تذكرة القطار أو الباص", fr: "Acheter un billet de train ou de bus", en: "Buying a train or bus ticket" },
      { id: 8, ar: "طلب سيارة أجرة", fr: "Prendre un taxi", en: "Taking a taxi" },
      { id: 9, ar: "الوصول إلى السكن المؤقت", fr: "Arriver au logement temporaire", en: "Arriving at temporary housing" }
    ]
  },
  {
    id: 2,
    title: { ar: "اللجوء والاستقبال", fr: "L'asile et l'accueil", en: "Asylum and reception" },
    lessonTitles: [
      { id: 10, ar: "الصليب الأحمر", fr: "La Croix-Rouge", en: "The Red Cross" },
      { id: 11, ar: "منصة الاستقبال SPADA", fr: "La plateforme d'accueil (SPADA)", en: "The reception platform (SPADA)" },
      { id: 12, ar: "طلب اللجوء", fr: "La demande d'asile", en: "The asylum application" },
      { id: 13, ar: "OFII", fr: "L'OFII", en: "OFII (immigration office)" },
      { id: 14, ar: "OFPRA", fr: "L'OFPRA", en: "OFPRA (asylum office)" },
      { id: 15, ar: "الاستئناف CNDA", fr: "Le recours à la CNDA", en: "Appeal at the CNDA" },
      { id: 16, ar: "المحافظة", fr: "La préfecture", en: "The prefecture" },
      { id: 17, ar: "استلام الوثائق", fr: "Retirer les documents", en: "Collecting documents" },
      { id: 18, ar: "تجديد الوثائق", fr: "Renouveler les documents", en: "Renewing documents" }
    ]
  },
  {
    id: 3,
    title: { ar: "السكن", fr: "Le logement", en: "Housing" },
    lessonTitles: [
      { id: 19, ar: "السكن المؤقت", fr: "L'hébergement temporaire", en: "Temporary accommodation" },
      { id: 20, ar: "البحث عن شقة", fr: "Chercher un appartement", en: "Looking for an apartment" },
      { id: 21, ar: "زيارة الشقة", fr: "La visite de l'appartement", en: "Viewing the apartment" },
      { id: 22, ar: "توقيع عقد الإيجار", fr: "Signer le bail", en: "Signing the lease" },
      { id: 23, ar: "الضمان", fr: "La caution et le garant", en: "Deposit and guarantor" },
      { id: 24, ar: "التأمين المنزلي", fr: "L'assurance habitation", en: "Home insurance" },
      { id: 25, ar: "الكهرباء", fr: "L'électricité", en: "Electricity" },
      { id: 26, ar: "الغاز", fr: "Le gaz", en: "Gas" },
      { id: 27, ar: "الماء", fr: "L'eau", en: "Water" },
      { id: 28, ar: "الإنترنت", fr: "Internet", en: "Internet" },
      { id: 29, ar: "البريد", fr: "Le courrier", en: "Mail" },
      { id: 30, ar: "إصلاح الأعطال", fr: "Les réparations", en: "Repairs" }
    ]
  },
  {
    id: 4,
    title: { ar: "الأوراق والإدارة", fr: "Les papiers et l'administration", en: "Paperwork and administration" },
    lessonTitles: [
      { id: 31, ar: "فتح حساب بنكي", fr: "Ouvrir un compte bancaire", en: "Opening a bank account" },
      { id: 32, ar: "الضمان الاجتماعي", fr: "La sécurité sociale", en: "Social security" },
      { id: 33, ar: "البطاقة الصحية", fr: "La carte Vitale", en: "The health card" },
      { id: 34, ar: "صندوق الإعانات CAF", fr: "La CAF", en: "Family benefits office (CAF)" },
      { id: 35, ar: "France Travail", fr: "France Travail", en: "France Travail (job center)" },
      { id: 36, ar: "الضرائب", fr: "Les impôts", en: "Taxes" },
      { id: 37, ar: "البلدية", fr: "La mairie", en: "The town hall" },
      { id: 38, ar: "مكتب البريد", fr: "La Poste", en: "The post office" },
      { id: 39, ar: "تغيير العنوان", fr: "Le changement d'adresse", en: "Changing address" },
      { id: 40, ar: "إنشاء الحسابات الحكومية", fr: "Créer les comptes en ligne", en: "Creating government online accounts" },
      { id: 268, ar: "CAF - مواقف وعبارات مفصلة", fr: "CAF - Situations et vocabulaire détaillés", en: "CAF - Detailed situations and vocabulary" },
      { id: 269, ar: "أفعال CAF الأكثر استعمالًا - عبارات", fr: "Verbes les plus utilisés avec la CAF", en: "Most common verbs with CAF" },
      { id: 270, ar: "التعبير عن استلام RSA - عبارات", fr: "Exprimer qu'on touche le RSA", en: "Ways to say you receive RSA" },
      { id: 272, ar: "CAF - الشهادات والدفع إلى طرف ثالث", fr: "CAF - Attestations et paiements à un tiers", en: "CAF - Attestations and payments to a third party" },
      { id: 273, ar: "CAF - تطبيق Mon Compte وعبارات الواجهة", fr: "CAF - Application Mon Compte et mots utiles", en: "CAF - Mon Compte app and useful words" },
      { id: 274, ar: "France Travail - المساحة الشخصية والإجراءات", fr: "France Travail - Espace personnel et démarches", en: "France Travail - Personal space and procedures" },
      { id: 275, ar: "France Travail - الأفعال والأمثلة", fr: "France Travail - Verbes et exemples", en: "France Travail - Verbs and examples" }
    ]
  },
  {
    id: 5,
    title: { ar: "تعلم اللغة", fr: "Apprendre la langue", en: "Learning the language" },
    lessonTitles: [
      { id: 41, ar: "التسجيل في دورة لغة", fr: "S'inscrire à un cours de français", en: "Enrolling in a French course" },
      { id: 42, ar: "المدرسة أو الجامعة", fr: "L'école et l'université", en: "School and university" },
      { id: 43, ar: "الامتحانات", fr: "Les examens", en: "Exams" },
      { id: 44, ar: "المكتبة", fr: "La bibliothèque", en: "The library" },
      { id: 45, ar: "الدراسة الذاتية", fr: "L'auto-apprentissage", en: "Self-study" }
    ]
  },
  {
    id: 6,
    title: { ar: "البحث عن عمل", fr: "La recherche d'emploi", en: "Job hunting" },
    lessonTitles: [
      { id: 46, ar: "كتابة السيرة الذاتية", fr: "Rédiger un CV", en: "Writing a CV" },
      { id: 47, ar: "رسالة التحفيز", fr: "La lettre de motivation", en: "The cover letter" },
      { id: 48, ar: "البحث عن الوظائف", fr: "Chercher des offres d'emploi", en: "Searching job offers" },
      { id: 49, ar: "مقابلة العمل", fr: "L'entretien d'embauche", en: "The job interview" },
      { id: 50, ar: "توقيع العقد", fr: "Signer le contrat", en: "Signing the contract" },
      { id: 51, ar: "أول يوم عمل", fr: "Le premier jour de travail", en: "The first day at work" },
      { id: 52, ar: "الراتب", fr: "Le salaire", en: "Salary" },
      { id: 53, ar: "الإجازات", fr: "Les congés", en: "Time off" },
      { id: 54, ar: "المرض", fr: "L'arrêt maladie", en: "Sick leave" },
      { id: 55, ar: "الاستقالة", fr: "La démission", en: "Resigning" }
    ]
  },
  {
    id: 7,
    title: { ar: "الحياة اليومية والتسوّق", fr: "La vie quotidienne et les courses", en: "Daily life and shopping" },
    lessonTitles: [
      { id: 56, ar: "السوبرماركت", fr: "Le supermarché", en: "The supermarket" },
      { id: 57, ar: "المخبز", fr: "La boulangerie", en: "The bakery" },
      { id: 58, ar: "محل الجزارة", fr: "La boucherie", en: "The butcher's" },
      { id: 59, ar: "محل الخضار", fr: "Chez le primeur", en: "The greengrocer" },
      { id: 60, ar: "متجر الملابس", fr: "Le magasin de vêtements", en: "The clothes shop" },
      { id: 61, ar: "متجر الأحذية", fr: "Le magasin de chaussures", en: "The shoe shop" },
      { id: 62, ar: "متجر الأدوات المنزلية", fr: "Le magasin d'articles ménagers", en: "The homeware shop" },
      { id: 63, ar: "متجر الإلكترونيات", fr: "Le magasin d'électronique", en: "The electronics shop" },
      { id: 64, ar: "الصيدلية", fr: "La pharmacie", en: "The pharmacy" },
      { id: 65, ar: "السوق الأسبوعي", fr: "Le marché hebdomadaire", en: "The weekly market" }
    ]
  },
  {
    id: 8,
    title: { ar: "الصحة", fr: "La santé", en: "Health" },
    lessonTitles: [
      { id: 66, ar: "الطبيب العام", fr: "Le médecin généraliste", en: "The GP" },
      { id: 67, ar: "الطبيب المختص", fr: "Le médecin spécialiste", en: "The specialist" },
      { id: 68, ar: "المستشفى", fr: "L'hôpital", en: "The hospital" },
      { id: 69, ar: "الطوارئ", fr: "Les urgences", en: "Emergency room" },
      { id: 70, ar: "المختبر", fr: "Le laboratoire d'analyses", en: "The medical lab" },
      { id: 71, ar: "الأشعة", fr: "La radiologie", en: "Radiology" },
      { id: 72, ar: "طبيب الأسنان", fr: "Le dentiste", en: "The dentist" },
      { id: 73, ar: "طبيب العيون", fr: "L'ophtalmologue", en: "The eye doctor" },
      { id: 74, ar: "العلاج الطبيعي", fr: "Le kinésithérapeute", en: "Physiotherapy" },
      { id: 75, ar: "الصيدلية والدواء", fr: "La pharmacie et les médicaments", en: "Pharmacy and medication" },
      { id: 238, ar: "في الصيدلية", fr: "À la pharmacie", en: "At the pharmacy" },
      { id: 239, ar: "التوفر والطلب", fr: "Disponibilité et commande", en: "Availability and ordering" },
      { id: 240, ar: "الدفع والتأمين", fr: "Paiement et remboursement", en: "Payment and reimbursement" },
      { id: 241, ar: "الوصفة الطبية", fr: "L'ordonnance", en: "The prescription" },
      { id: 242, ar: "النصائح والحساسية", fr: "Conseils et allergies", en: "Advice and allergies" },
      { id: 243, ar: "كيفية الاستعمال", fr: "Mode d'emploi", en: "How to use" },
      { id: 244, ar: "العلاج والتجديد", fr: "Traitement et renouvellement", en: "Treatment and renewal" },
      { id: 245, ar: "الجرعة والتوقيت", fr: "Dosage et horaires", en: "Dosage and timing" },
      { id: 246, ar: "الأعراض والمنتجات", fr: "Symptômes et produits", en: "Symptoms and products" },
      { id: 247, ar: "محادثات في الصيدلية", fr: "Dialogues à la pharmacie", en: "Pharmacy dialogues" },
      { id: 248, ar: "Clinutren / Fresubin", fr: "Clinutren / Fresubin", en: "Clinutren / Fresubin" },
      { id: 249, ar: "Pantoprazole 40 mg", fr: "Pantoprazole 40 mg", en: "Pantoprazole 40 mg" },
      { id: 250, ar: "GavisconPro", fr: "GavisconPro", en: "GavisconPro" },
      { id: 251, ar: "Ténofovir Disoproxil 245 mg", fr: "Ténofovir Disoproxil 245 mg", en: "Ténofovir Disoproxil 245 mg" },
      { id: 252, ar: "Hépatite B chronique - Consultation", fr: "Hépatite B chronique - Consultation", en: "Chronic hepatitis B - Consultation" },
      { id: 253, ar: "Hépatite B chronique - Virus et analyses", fr: "Hépatite B chronique - Virus et analyses", en: "Chronic hepatitis B - Virus and tests" },
      { id: 254, ar: "Hépatite B chronique - Foie et traitement", fr: "Hépatite B chronique - Foie et traitement", en: "Chronic hepatitis B - Liver and treatment" },
      { id: 255, ar: "Hépatite B chronique - Dialogue avec le médecin", fr: "Hépatite B chronique - Dialogue avec le médecin", en: "Chronic hepatitis B - Dialogue with the doctor" },
      { id: 256, ar: "Hépatite B chronique - Questions complémentaires", fr: "Hépatite B chronique - Questions complémentaires", en: "Chronic hepatitis B - Additional questions" },
      { id: 257, ar: "Hépatite B chronique - Consultation chez l'hépatologue", fr: "Hépatite B chronique - Consultation chez l'hépatologue", en: "Chronic hepatitis B - Consultation with the hepatologist" },
      { id: 258, ar: "Endoscopie - محادثة ومفردات", fr: "Endoscopie - Dialogue et vocabulaire", en: "Endoscopy - Dialogue and vocabulary" },
      { id: 259, ar: "Gastro-entérologue - محادثة شاملة", fr: "Gastro-entérologue - Consultation complète", en: "Gastroenterologist - Full consultation" },
      { id: 260, ar: "Hémangiome hépatique - محادثة ومفردات", fr: "Hémangiome hépatique - Dialogue et vocabulaire", en: "Hepatic hemangioma - Dialogue and vocabulary" },
      { id: 261, ar: "Reflux gastro-œsophagien - محادثة ومفردات", fr: "Reflux gastro-œsophagien - Dialogue et vocabulaire", en: "Gastroesophageal reflux and bad breath - Dialogue and vocabulary" },
      { id: 262, ar: "Laboratoire d'analyses médicales - محادثة ومفردات", fr: "Laboratoire d'analyses médicales - Dialogue et vocabulaire", en: "Medical laboratory - Dialogue and vocabulary" },
      { id: 263, ar: "Helicobacter pylori - محادثة ومفردات", fr: "Helicobacter pylori - Dialogue et vocabulaire", en: "Helicobacter pylori - Dialogue and vocabulary" },
      { id: 264, ar: "Doctolib - محادثة ومفردات", fr: "Doctolib - Dialogue et vocabulaire", en: "Doctolib - Dialogue and vocabulary" },
      { id: 265, ar: "أفعال الجهاز الهضمي والكبد الشائعة - مفردات وعبارات", fr: "Verbes courants du foie et du système digestif - Vocabulaire", en: "Common liver and digestive verbs - Vocabulary" },
      { id: 266, ar: "المواقف الشائعة في الصيدلية", fr: "Situations courantes à la pharmacie", en: "Common pharmacy situations" },
      { id: 267, ar: "عبارات يقال للمريض", fr: "Phrases adressées au patient", en: "Phrases said to a patient" },
      { id: 271, ar: "طبيب الأسنان - محادثة ومفردات وأفعال", fr: "Le dentiste - Dialogue, vocabulaire et verbes", en: "The dentist - Dialogue, vocabulary and verbs" }
    ]
  },
  {
    id: 9,
    title: { ar: "المواصلات", fr: "Les transports", en: "Transport" },
    lessonTitles: [
      { id: 76, ar: "الباص", fr: "Le bus", en: "The bus" },
      { id: 77, ar: "الترام", fr: "Le tramway", en: "The tram" },
      { id: 78, ar: "القطار", fr: "Le train", en: "The train" },
      { id: 79, ar: "المترو", fr: "Le métro", en: "The metro" },
      { id: 80, ar: "الدراجة", fr: "Le vélo", en: "The bicycle" },
      { id: 81, ar: "السيارة", fr: "La voiture", en: "The car" },
      { id: 82, ar: "التاكسي", fr: "Le taxi", en: "The taxi" },
      { id: 83, ar: "شراء الاشتراك", fr: "Acheter un abonnement", en: "Buying a travel pass" },
      { id: 84, ar: "تجديد الاشتراك", fr: "Renouveler l'abonnement", en: "Renewing the pass" }
    ]
  },
  {
    id: 10,
    title: { ar: "الرياضة والنوادي", fr: "Le sport et la salle de sport", en: "Sport and the gym" },
    lessonTitles: [
      { id: 85, ar: "أشهر النوادي الرياضية", fr: "Les salles de sport connues", en: "Well-known gym chains" },
      { id: 86, ar: "مقارنة الأسعار", fr: "Comparer les prix", en: "Comparing prices" },
      { id: 87, ar: "الاشتراكات", fr: "Les abonnements", en: "Memberships" },
      { id: 88, ar: "التسجيل", fr: "L'inscription", en: "Signing up" },
      { id: 89, ar: "العقد", fr: "Le contrat", en: "The contract" },
      { id: 90, ar: "فسخ العقد", fr: "La résiliation", en: "Cancelling the contract" },
      { id: 91, ar: "الإحماء", fr: "L'échauffement", en: "Warm-up" },
      { id: 92, ar: "الكارديو", fr: "Le cardio", en: "Cardio" },
      { id: 93, ar: "أجهزة المقاومة", fr: "Les machines de musculation", en: "Resistance machines" },
      { id: 94, ar: "الأوزان الحرة", fr: "Les poids libres", en: "Free weights" },
      { id: 95, ar: "الحصص الجماعية", fr: "Les cours collectifs", en: "Group classes" },
      { id: 96, ar: "المدرب الشخصي", fr: "Le coach personnel", en: "The personal trainer" },
      { id: 97, ar: "التغذية الرياضية", fr: "La nutrition sportive", en: "Sports nutrition" }
    ]
  },
  {
    id: 11,
    title: { ar: "المطاعم والمقاهي", fr: "Les restaurants et les cafés", en: "Restaurants and cafés" },
    lessonTitles: [
      { id: 98, ar: "الحجز", fr: "La réservation", en: "Booking a table" },
      { id: 99, ar: "قراءة القائمة", fr: "Lire la carte", en: "Reading the menu" },
      { id: 100, ar: "الطلب", fr: "Commander", en: "Ordering" },
      { id: 101, ar: "الحساسية الغذائية", fr: "Les allergies alimentaires", en: "Food allergies" },
      { id: 102, ar: "الدفع", fr: "Payer l'addition", en: "Paying the bill" },
      { id: 103, ar: "البقشيش", fr: "Le pourboire", en: "Tipping" }
    ]
  },
  {
    id: 12,
    title: { ar: "الخدمات والفواتير", fr: "Les services et les factures", en: "Services and bills" },
    lessonTitles: [
      { id: 104, ar: "شركة الهاتف", fr: "L'opérateur téléphonique", en: "The phone operator" },
      { id: 105, ar: "الإنترنت", fr: "Le fournisseur d'internet", en: "The internet provider" },
      { id: 106, ar: "الكهرباء", fr: "Le fournisseur d'électricité", en: "The electricity provider" },
      { id: 107, ar: "الغاز", fr: "Le fournisseur de gaz", en: "The gas provider" },
      { id: 108, ar: "التأمين", fr: "L'assurance", en: "Insurance" },
      { id: 109, ar: "شركة المياه", fr: "Le service des eaux", en: "The water company" }
    ]
  },
  {
    id: 13,
    title: { ar: "القيادة والسيارة", fr: "La conduite et la voiture", en: "Driving and the car" },
    lessonTitles: [
      { id: 110, ar: "رخصة القيادة", fr: "Le permis de conduire", en: "The driving licence" },
      { id: 111, ar: "شراء سيارة", fr: "Acheter une voiture", en: "Buying a car" },
      { id: 112, ar: "تأمين السيارة", fr: "L'assurance auto", en: "Car insurance" },
      { id: 113, ar: "محطة الوقود", fr: "La station-service", en: "The petrol station" },
      { id: 114, ar: "الصيانة", fr: "L'entretien et le garage", en: "Maintenance and the garage" },
      { id: 115, ar: "المخالفات", fr: "Les amendes", en: "Fines" },
      { id: 116, ar: "الفحص الفني", fr: "Le contrôle technique", en: "The technical inspection" }
    ]
  },
  {
    id: 14,
    title: { ar: "المال والبنك", fr: "L'argent et la banque", en: "Money and banking" },
    lessonTitles: [
      { id: 117, ar: "الحساب البنكي", fr: "Le compte bancaire", en: "The bank account" },
      { id: 118, ar: "البطاقة البنكية", fr: "La carte bancaire", en: "The bank card" },
      { id: 119, ar: "التحويلات", fr: "Les virements", en: "Transfers" },
      { id: 120, ar: "الادخار", fr: "L'épargne", en: "Savings" },
      { id: 121, ar: "القروض", fr: "Les crédits", en: "Loans" },
      { id: 122, ar: "الضرائب", fr: "Les impôts", en: "Taxes" }
    ]
  },
  {
    id: 15,
    title: { ar: "إنشاء مشروع", fr: "Créer son activité", en: "Starting a business" },
    lessonTitles: [
      { id: 123, ar: "المشروع الصغير", fr: "La micro-entreprise", en: "The micro-enterprise" },
      { id: 124, ar: "رقم SIRET", fr: "Le numéro SIRET", en: "The SIRET number" },
      { id: 125, ar: "URSSAF", fr: "L'URSSAF", en: "URSSAF (social contributions)" },
      { id: 126, ar: "الفواتير", fr: "Les factures", en: "Invoices" },
      { id: 127, ar: "الضرائب", fr: "La fiscalité", en: "Business taxes" },
      { id: 128, ar: "الزبائن", fr: "Les clients", en: "Clients" },
      { id: 129, ar: "التسويق", fr: "Le marketing", en: "Marketing" },
      { id: 130, ar: "المحاسبة", fr: "La comptabilité", en: "Accounting" }
    ]
  },
  {
    id: 16,
    title: { ar: "العمل الحر والتوصيل", fr: "Le travail indépendant et la livraison", en: "Freelancing and delivery work" },
    lessonTitles: [
      { id: 131, ar: "Uber Eats", fr: "Uber Eats", en: "Uber Eats" },
      { id: 132, ar: "Deliveroo", fr: "Deliveroo", en: "Deliveroo" },
      { id: 133, ar: "Stuart", fr: "Stuart", en: "Stuart" },
      { id: 134, ar: "قبول الطلبات", fr: "Accepter les commandes", en: "Accepting orders" },
      { id: 135, ar: "استلام الطلب", fr: "Récupérer la commande", en: "Picking up the order" },
      { id: 136, ar: "التواصل مع العميل", fr: "Contacter le client", en: "Contacting the customer" },
      { id: 137, ar: "مشاكل العنوان", fr: "Les problèmes d'adresse", en: "Address problems" },
      { id: 138, ar: "المطاعم", fr: "Les restaurants", en: "Restaurants" },
      { id: 139, ar: "الدعم الفني", fr: "Le support", en: "Support" },
      { id: 140, ar: "الأرباح", fr: "Les revenus", en: "Earnings" }
    ]
  },
  {
    id: 17,
    title: { ar: "العلاقات الاجتماعية", fr: "Les relations sociales", en: "Social relationships" },
    lessonTitles: [
      { id: 141, ar: "التعارف", fr: "Faire connaissance", en: "Getting to know people" },
      { id: 142, ar: "الأصدقاء", fr: "Les amis", en: "Friends" },
      { id: 143, ar: "الجيران", fr: "Les voisins", en: "Neighbours" },
      { id: 144, ar: "الزملاء", fr: "Les collègues", en: "Colleagues" },
      { id: 145, ar: "الدعوات", fr: "Les invitations", en: "Invitations" },
      { id: 146, ar: "المناسبات", fr: "Les fêtes et les occasions", en: "Celebrations" },
      { id: 147, ar: "أعياد الميلاد", fr: "Les anniversaires", en: "Birthdays" }
    ]
  },
  {
    id: 18,
    title: { ar: "الترفيه والسفر", fr: "Les loisirs et les voyages", en: "Leisure and travel" },
    lessonTitles: [
      { id: 148, ar: "السينما", fr: "Le cinéma", en: "The cinema" },
      { id: 149, ar: "الحديقة", fr: "Le parc", en: "The park" },
      { id: 150, ar: "المتحف", fr: "Le musée", en: "The museum" },
      { id: 151, ar: "السفر داخل فرنسا", fr: "Voyager en France", en: "Travelling within France" },
      { id: 152, ar: "الفندق", fr: "L'hôtel", en: "The hotel" },
      { id: 153, ar: "حجز الطيران", fr: "Réserver un vol", en: "Booking a flight" }
    ]
  },
  {
    id: 19,
    title: { ar: "الطوارئ", fr: "Les urgences", en: "Emergencies" },
    lessonTitles: [
      { id: 154, ar: "الشرطة", fr: "La police", en: "The police" },
      { id: 155, ar: "الإسعاف", fr: "L'ambulance (le SAMU)", en: "The ambulance" },
      { id: 156, ar: "الإطفاء", fr: "Les pompiers", en: "The fire brigade" },
      { id: 157, ar: "فقدان الوثائق", fr: "La perte des documents", en: "Losing documents" },
      { id: 158, ar: "السرقة", fr: "Le vol", en: "Theft" },
      { id: 159, ar: "الحوادث", fr: "Les accidents", en: "Accidents" }
    ]
  },
  {
    id: 20,
    title: { ar: "العائلة", fr: "La famille", en: "Family" },
    lessonTitles: [
      { id: 160, ar: "الزواج", fr: "Le mariage", en: "Marriage" },
      { id: 161, ar: "الأطفال", fr: "Les enfants", en: "Children" },
      { id: 162, ar: "المدرسة", fr: "L'école", en: "School" },
      { id: 163, ar: "الحضانة", fr: "La crèche", en: "Daycare" },
      { id: 164, ar: "الإجازات العائلية", fr: "Les congés familiaux", en: "Family leave" }
    ]
  },
  {
    id: 21,
    title: { ar: "الأساسيات اللغوية", fr: "Les bases de la langue", en: "Language basics" },
    lessonTitles: [
      { id: 165, ar: "التحيّات والتعريف بالنفس", fr: "Les salutations", en: "Greetings" },
      { id: 166, ar: "الأرقام", fr: "Les nombres", en: "Numbers" },
      { id: 167, ar: "الوقت والساعة", fr: "L'heure", en: "Telling the time" },
      { id: 168, ar: "الأيام والشهور والتواريخ", fr: "Les jours, les mois et les dates", en: "Days, months and dates" },
      { id: 169, ar: "الألوان والأحجام", fr: "Les couleurs et les tailles", en: "Colours and sizes" },
      { id: 170, ar: "أفراد العائلة", fr: "Les membres de la famille", en: "Family members" },
      { id: 171, ar: "الطقس", fr: "La météo", en: "The weather" },
      { id: 172, ar: "الاتجاهات والأماكن", fr: "Les directions et les lieux", en: "Directions and places" }
    ]
  },
  {
    id: 22,
    title: { ar: "عبارات الإنقاذ", fr: "Les phrases de secours", en: "Survival phrases" },
    lessonTitles: [
      { id: 173, ar: "لم أفهم", fr: "Je n'ai pas compris", en: "I didn't understand" },
      { id: 174, ar: "اطلب التكرار والإبطاء", fr: "Demander de répéter", en: "Asking to repeat" },
      { id: 175, ar: "السؤال عن الكلمات", fr: "Demander un mot", en: "Asking about words" },
      { id: 176, ar: "التعريف بمستواك في اللغة", fr: "Expliquer son niveau", en: "Explaining your level" },
      { id: 177, ar: "الاعتذار والاستئذان", fr: "S'excuser et demander la permission", en: "Apologising and asking permission" }
    ]
  },
  {
    id: 23,
    title: { ar: "الهاتف والمواعيد", fr: "Le téléphone et les rendez-vous", en: "Phone calls and appointments" },
    lessonTitles: [
      { id: 178, ar: "مكالمة لحجز موعد", fr: "Appeler pour un rendez-vous", en: "Calling for an appointment" },
      { id: 179, ar: "ترك رسالة صوتية", fr: "Laisser un message", en: "Leaving a message" },
      { id: 180, ar: "تأكيد أو تأجيل موعد", fr: "Confirmer ou reporter", en: "Confirming or postponing" },
      { id: 181, ar: "الرد على مكالمة رسمية", fr: "Répondre à un appel officiel", en: "Answering an official call" },
      { id: 182, ar: "مكالمات الإدارات والانتظار", fr: "Les serveurs vocaux", en: "Phone menus and waiting" }
    ]
  },
  {
    id: 24,
    title: { ar: "المكاتبات والاستمارات", fr: "Les courriers et les formulaires", en: "Letters and forms" },
    lessonTitles: [
      { id: 183, ar: "بريد إلكتروني رسمي", fr: "Un courriel formel", en: "A formal email" },
      { id: 184, ar: "رسالة إلى المالك", fr: "Une lettre au propriétaire", en: "A letter to the landlord" },
      { id: 185, ar: "رسالة إلى المدرسة", fr: "Un mot à l'école", en: "A note to the school" },
      { id: 186, ar: "تعبئة استمارة", fr: "Remplir un formulaire", en: "Filling in a form" },
      { id: 187, ar: "البريد المسجل والملفات", fr: "La lettre recommandée", en: "Registered post and files" }
    ]
  },
  {
    id: 25,
    title: { ar: "الجمعيات والمساعدة الاجتماعية", fr: "Les associations et l'aide sociale", en: "Charities and social aid" },
    lessonTitles: [
      { id: 188, ar: "المساعِدة الاجتماعية", fr: "L'assistante sociale", en: "The social worker" },
      { id: 189, ar: "الجمعيات والمساعدات", fr: "Les associations", en: "Charities" },
      { id: 190, ar: "بنك الطعام والمساعدة الغذائية", fr: "L'aide alimentaire", en: "Food aid" },
      { id: 191, ar: "المساعدة القانونية", fr: "L'aide juridique", en: "Legal aid" },
      { id: 192, ar: "السكن الطارئ (115)", fr: "L'hébergement d'urgence (115)", en: "Emergency housing (115)" }
    ]
  },
  {
    id: 26,
    title: { ar: "الإقامة والجنسية", fr: "Le séjour et la nationalité", en: "Residency and nationality" },
    lessonTitles: [
      { id: 193, ar: "بطاقة الإقامة متعددة السنوات", fr: "La carte pluriannuelle", en: "The multi-year permit" },
      { id: 194, ar: "بطاقة المقيم عشر سنوات", fr: "La carte de résident", en: "The ten-year resident card" },
      { id: 195, ar: "طلب الجنسية", fr: "La demande de naturalisation", en: "Applying for citizenship" },
      { id: 196, ar: "مقابلة المحافظة", fr: "L'entretien en préfecture", en: "The prefecture interview" },
      { id: 197, ar: "امتحان اللغة والشهادات", fr: "L'examen de langue", en: "The language exam" },
      { id: 198, ar: "التجمّع العائلي", fr: "Le regroupement familial", en: "Family reunification" }
    ]
  },
  {
    id: 27,
    title: { ar: "الدين والطعام الحلال", fr: "La religion et le halal", en: "Religion and halal food" },
    lessonTitles: [
      { id: 199, ar: "المسجد وأوقات الصلاة", fr: "La mosquée et les prières", en: "The mosque and prayers" },
      { id: 200, ar: "الطعام الحلال", fr: "La nourriture halal", en: "Halal food" },
      { id: 201, ar: "السؤال عن المكوّنات", fr: "Demander les ingrédients", en: "Asking about ingredients" },
      { id: 202, ar: "رمضان في العمل", fr: "Le Ramadan au travail", en: "Ramadan at work" },
      { id: 203, ar: "الأعياد الدينية", fr: "Les fêtes religieuses", en: "Religious holidays" }
    ]
  },
  {
    id: 28,
    title: { ar: "الخدمات الشخصية", fr: "Les services du quotidien", en: "Personal services" },
    lessonTitles: [
      { id: 204, ar: "الحلاق", fr: "Le coiffeur", en: "The barber" },
      { id: 205, ar: "المغسلة", fr: "Le pressing et la laverie", en: "The laundry" },
      { id: 206, ar: "الخيّاط وتعديل الملابس", fr: "La retouche", en: "Clothing alterations" },
      { id: 207, ar: "تصليح الهاتف", fr: "La réparation de téléphone", en: "Phone repair" },
      { id: 208, ar: "المفاتيح والأحذية", fr: "La cordonnerie et les clés", en: "Shoe repair and keys" }
    ]
  },
  {
    id: 29,
    title: { ar: "البريد والحيوانات والتنقل", fr: "Colis, animaux et mobilité", en: "Parcels, pets and mobility" },
    lessonTitles: [
      { id: 209, ar: "إرسال واستلام الطرود", fr: "Envoyer et recevoir un colis", en: "Sending and receiving parcels" },
      { id: 210, ar: "الحيوانات المنزلية والبيطري", fr: "Les animaux et le vétérinaire", en: "Pets and the vet" },
      { id: 211, ar: "الدراجة الكهربائية والسكوتر", fr: "Le vélo électrique et la trottinette", en: "E-bikes and scooters" },
      { id: 212, ar: "الشراء أونلاين والإرجاع", fr: "Les achats en ligne et les retours", en: "Online shopping and returns" },
      { id: 213, ar: "القمامة وإعادة التدوير", fr: "Les poubelles et le tri", en: "Bins and recycling" }
    ]
  },
  {
    id: 30,
    title: { ar: "المحادثات الصغيرة", fr: "La conversation légère", en: "Small talk" },
    lessonTitles: [
      { id: 214, ar: "بدء الحديث", fr: "Commencer une conversation", en: "Starting a conversation" },
      { id: 215, ar: "مواضيع مقبولة", fr: "Les sujets qui marchent", en: "Safe topics" },
      { id: 216, ar: "التعبير عن الرأي", fr: "Donner son avis", en: "Giving your opinion" },
      { id: 217, ar: "الأدب والاعتذار", fr: "La politesse", en: "Politeness" },
      { id: 218, ar: "إنهاء الحديث", fr: "Terminer une conversation", en: "Ending a conversation" }
    ]
  },
  {
    id: 31,
    title: { ar: "الدروس الشائعة", fr: "Les leçons courantes", en: "Common lessons" },
    lessonTitles: [
      { id: 219, ar: "التحدث عن النفس", fr: "Parler de soi", en: "Talking about yourself" },
      { id: 220, ar: "طلب التوضيح والمساعدة", fr: "Demander des clarifications et de l'aide", en: "Asking for clarification and help" },
      { id: 221, ar: "الاعتذار والشكر", fr: "S'excuser et remercier", en: "Apologising and thanking" },
      { id: 222, ar: "الرأي والاتفاق والاختلاف", fr: "Opinions, accord et désaccord", en: "Opinion, agreement and disagreement" },
      { id: 223, ar: "الوصف والكمية والمقارنة", fr: "Description, quantité et comparaison", en: "Description, quantity and comparison" },
      { id: 224, ar: "التفضيل والرغبة", fr: "Préférences et souhaits", en: "Preferences and wishes" },
      { id: 225, ar: "النصيحة والاحتمال والضرورة", fr: "Conseil, probabilité et nécessité", en: "Advice, probability and necessity" },
      { id: 226, ar: "الطلب والإذن والتمني", fr: "Demandes, permission et souhaits", en: "Requests, permission and wishes" },
      { id: 227, ar: "الإعجاب والشكوى", fr: "Compliments et plaintes", en: "Compliments and complaints" },
      { id: 228, ar: "التواصل الرقمي اليومي", fr: "La communication numérique quotidienne", en: "Daily digital communication" }
    ]
  },
  {
    id: 32,
    title: { ar: "القيادة والسيارات", fr: "La conduite et la voiture", en: "Driving and the car" },
    lessonTitles: [
      { id: 276, ar: "قانون السير", fr: "Le code de la route", en: "The highway code" },
      { id: 277, ar: "امتحان Code de la route النظري", fr: "L'examen du Code de la route", en: "The Code de la route theory exam" },
      { id: 278, ar: "امتحان القيادة العملي", fr: "L'examen pratique de conduite", en: "The practical driving test" }
    ]
  },
  {
    id: 33,
    title: { ar: "مواقف يومية شائعة", fr: "Situations quotidiennes courantes", en: "Common daily situations" },
    lessonTitles: [
      { id: 279, ar: "مواقف يومية شائعة", fr: "Situations quotidiennes courantes", en: "Common daily situations" },
      { id: 280, ar: "مواقف شائعة", fr: "Situations courantes", en: "Common situations" },
      { id: 287, ar: "مواقف في العمل", fr: "Situations au travail", en: "Work situations" },
      { id: 289, ar: "في العمل — المساعدة والخطأ والآلة والتنظيم", fr: "Au travail — aide, erreur, machine et organisation", en: "At work — help, mistake, machine and organization" },
      { id: 290, ar: "الاستراحة والوقت", fr: "Pause et temps", en: "Breaks and time" },
      { id: 291, ar: "مواقف مع الزملاء", fr: "Avec les collègues", en: "With colleagues" }
    ]
  },
  {
    id: 34,
    title: { ar: "اللوجستيك", fr: "La logistique", en: "Logistics" },
    lessonTitles: [
      { id: 281, ar: "اللوجستيك", fr: "La logistique", en: "Logistics" },
      { id: 282, ar: "أفعال شائعة في Sistra", fr: "Verbes courants à Sistra", en: "Common verbs at Sistra" },
      { id: 283, ar: "أسماء وأفعال في Sistra", fr: "Noms et verbes à Sistra", en: "Names and verbs at Sistra" },
      { id: 285, ar: "مشاكل ومواقف شائعة في اللوجستيك", fr: "Problèmes et situations courants en logistique", en: "Common logistics problems and situations" },
      { id: 292, ar: "في Sistra — مخزون وسير الناقل", fr: "À Sistra — stock, convoyeur et production", en: "At Sistra — stock, conveyor and production" }
    ]
  },
  {
    id: 35,
    title: { ar: "تسجيل الوقت (Le pointage)", fr: "Le pointage", en: "Clocking in / Time tracking" },
    lessonTitles: [
      { id: 284, ar: "تسجيل الوقت بالبطاقة", fr: "Le pointage et le badgeage", en: "Clocking in and badge registration" }
    ]
  },
  {
    id: 36,
    title: { ar: "التسوق في Auchan", fr: "Faire ses courses à Auchan", en: "Shopping at Auchan" },
    lessonTitles: [
      { id: 286, ar: "التسوق والعمل في Auchan", fr: "Courses et travail à Auchan", en: "Shopping and working at Auchan" }
    ]
  },
  {
    id: 37,
    title: { ar: "العامية الفرنسية اليومية", fr: "Français familier du quotidien", en: "Everyday colloquial French" },
    lessonTitles: [
      { id: 288, ar: "عبارات عامية شائعة", fr: "Expressions courantes familières", en: "Common colloquial expressions" }
    ]
  },
  {
    id: 38,
    title: { ar: "Basic-Fit", fr: "Basic-Fit", en: "Basic-Fit" },
    lessonTitles: [
      { id: 293, ar: "أسئلة وأجوبة شائعة", fr: "Questions et réponses courantes", en: "Common questions and answers" },
      { id: 294, ar: "أسئلة وأجوبة إضافية", fr: "Questions et réponses supplémentaires", en: "More questions and answers" },
      { id: 295, ar: "التمارين والعضلات والعبارات الشائعة", fr: "Exercices, muscles et expressions courantes", en: "Exercises, muscles and common phrases" },
      { id: 296, ar: "برنامج مبتدئ وعبارات المدربين", fr: "Programme débutant et phrases du coach", en: "Beginner program and coach phrases" },
      { id: 297, ar: "المكملات والبروتين وأسئلة المدرب", fr: "Compléments, protéines et questions au coach", en: "Supplements, protein and coach questions" },
      { id: 298, ar: "محادثات حقيقية داخل Basic-Fit", fr: "Conversations réelles à Basic-Fit", en: "Real conversations at Basic-Fit" },
      { id: 299, ar: "عبارات قصيرة تسمعها كثيرًا", fr: "Expressions courtes entendues souvent à Basic-Fit", en: "Short phrases often heard at Basic-Fit" },
      { id: 300, ar: "محادثات وعبارات إضافية", fr: "Conversations et expressions supplémentaires", en: "More conversations and phrases" },
      { id: 301, ar: "عبارات سريعة في Basic-Fit", fr: "Expressions rapides à Basic-Fit", en: "Quick phrases at Basic-Fit" },
      { id: 302, ar: "مواقف Basic-Fit اليومية", fr: "Situations quotidiennes à Basic-Fit", en: "Daily situations at Basic-Fit" },
      { id: 303, ar: "قواعد وآداب Basic-Fit", fr: "Règles et étiquette à Basic-Fit", en: "Basic-Fit rules and etiquette" },
      { id: 304, ar: "الميزان وقياس الجسم", fr: "La balance et la mesure corporelle", en: "Scale and body measurement" },
      { id: 305, ar: "الدوش والخزائن", fr: "Les douches et les casiers", en: "Showers and lockers" },
      { id: 306, ar: "مواقف صحية أثناء التمرين", fr: "Situations de santé à Basic-Fit", en: "Health situations at Basic-Fit" },
      { id: 307, ar: "مواقف اجتماعية بين الأعضاء", fr: "Situations sociales entre membres", en: "Social situations between members" },
      { id: 308, ar: "بعد التمرين", fr: "Après la séance", en: "After the workout" },
      { id: 309, ar: "مع المدرب", fr: "Avec le coach", en: "With the coach" },
      { id: 310, ar: "مواقف شائعة داخل Basic-Fit", fr: "Situations courantes à Basic-Fit", en: "Common situations at Basic-Fit" },
      { id: 311, ar: "عبارات عامية شائعة جدًا", fr: "Expressions familières très courantes", en: "Very common colloquial phrases" },
      { id: 312, ar: "أهم الأفعال في Basic-Fit", fr: "Les verbes essentiels à Basic-Fit", en: "Essential verbs at Basic-Fit" },
      { id: 313, ar: "أشهر أجهزة Basic-Fit", fr: "Les machines les plus courantes à Basic-Fit", en: "Most common Basic-Fit machines" },
      { id: 314, ar: "دعوة صديق والاشتراكات في Basic-Fit", fr: "Inviter un ami et les abonnements à Basic-Fit", en: "Inviting a friend and memberships at Basic-Fit" }
    ]
  },
  {
    id: 39,
    title: { ar: "المكالمات التجارية والاحتيالية", fr: "Démarchage téléphonique et arnaques", en: "Telemarketing and phone scams" },
    lessonTitles: [
      { id: 315, ar: "عبارات المكالمات التجارية والاحتيالية", fr: "Phrases pour les appels commerciaux et arnaques", en: "Phrases for commercial calls and scams" },
      { id: 316, ar: "أفعال المكالمات التجارية 1", fr: "Verbes du démarchage téléphonique 1", en: "Telephone solicitation verbs 1" },
      { id: 317, ar: "أفعال المكالمات التجارية 2", fr: "Verbes du démarchage téléphonique 2", en: "Telephone solicitation verbs 2" }
    ]
  }
];