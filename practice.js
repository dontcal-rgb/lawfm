const practiceAreas = {
  'criminal-defense': {
    category: '01 / Defense', title: 'Criminal Defense', icon: 'shield',
    intro: 'When an investigation or criminal charge puts your freedom and reputation at stake, a calm plan and careful preparation matter.',
    overview: 'Criminal matters can move quickly and feel difficult to navigate. We begin by listening, clarifying what is known, and identifying immediate concerns such as upcoming court dates, communication with investigators, and records that may need preserving. We then develop a case-specific strategy and explain the options, uncertainties, and next steps in plain language.',
    servicesIntro: 'Our work may include early-stage advice, court representation, or a focused review of a specific legal issue. The right scope depends on the facts and procedural stage.',
    services: ['Pre-charge investigations and interviews', 'Misdemeanor and felony defense', 'Bail and arraignment preparation', 'Evidence review and motion practice', 'Negotiations and trial preparation', 'Appeals and post-conviction review'],
    reviewIntro: 'A focused review helps separate what is known, what is alleged, and what procedural decisions may be coming next.',
    reviewFactors: [
      { icon: 'calendar', title: 'Timeline and status', detail: 'What happened, when contact with authorities occurred, whether charges have been filed, and any scheduled dates.' },
      { icon: 'document', title: 'Available record', detail: 'Notices, charging documents, messages, recordings, or other materials that may clarify the account and evidence.' },
      { icon: 'shield', title: 'Immediate concerns', detail: 'Questions about release conditions, communication, privacy, or preserving information for later review.' },
      { icon: 'compass', title: 'Personal priorities', detail: 'Work, family, travel, licensing, or other circumstances that may affect the goals and timing of representation.' }
    ],
    preparation: ['Court papers, notices, or written communications already received', 'Upcoming court dates, interview requests, or other deadlines', 'A brief timeline of events and agencies or people involved', 'The questions or immediate concerns you most want addressed'],
    steps: [['Get oriented', 'We review the timeline, documents, charges, and immediate deadlines.'], ['Build the record', 'We examine available evidence, identify gaps, and prepare the strongest supported position.'], ['Make informed decisions', 'We discuss the available paths and prepare for the next hearing, negotiation, or trial.']],
    faqs: [['What should I do after learning I am under investigation?', 'Avoid discussing the matter publicly or with investigators before speaking with counsel. Preserve relevant documents and messages, and note any upcoming dates or contact attempts.'], ['Does an initial conversation commit me to hiring the firm?', 'No. The first conversation is an opportunity to describe the issue, ask questions, and understand possible next steps. Representation begins only after an engagement agreement is signed.'], ['Can you tell me what outcome to expect?', 'No responsible attorney can promise a result. An assessment depends on reviewing the facts, evidence, and applicable law.']]
  },
  'civil-litigation': {
    category: '02 / Disputes', title: 'Civil Litigation', icon: 'landmark',
    intro: 'A dispute can consume time, focus, and resources. We help clients understand their position and choose a practical route to resolution.',
    overview: 'Civil cases often turn on details: what an agreement says, what the record shows, and which deadlines control. We help organize those details into a clear case theory, evaluate the risks and costs of different paths, and prepare for negotiation or court. We stay focused on the client’s objectives while preparing carefully for contested proceedings.',
    servicesIntro: 'We represent individuals and organizations in business and other civil matters from early dispute assessment through resolution.',
    services: ['Contract and business disputes', 'Partnership and ownership conflicts', 'Real-estate and property disputes', 'Professional and commercial claims', 'Pre-suit negotiations and mediation', 'Trial preparation and appeals'],
    reviewIntro: 'The legal analysis depends on the duties involved, the documented history, the claimed impact, and the procedural posture.',
    reviewFactors: [
      { icon: 'document', title: 'Rights and obligations', detail: 'What agreements, policies, communications, or legal duties define each party’s responsibilities.' },
      { icon: 'calendar', title: 'Timeline of events', detail: 'Key dates, performance or delivery milestones, notice requirements, and steps already taken to address the dispute.' },
      { icon: 'scales', title: 'Evidence and impact', detail: 'Records supporting each account and the financial or practical consequences that may be relevant.' },
      { icon: 'compass', title: 'Available routes', detail: 'Whether direct discussion, mediation, a court filing, or another process may fit the goals and constraints.' }
    ],
    preparation: ['The agreement or documents at the center of the dispute, if available', 'A dated timeline of key events and conversations', 'Notices, invoices, letters, or other written communications', 'The practical outcome you hope to reach and any upcoming deadlines'],
    steps: [['Assess', 'We identify the key documents, people, legal questions, and practical goals.'], ['Plan', 'We compare negotiation, mediation, and litigation options, including likely costs and timing.'], ['Advance the case', 'We prepare the evidence and arguments needed for the chosen path, adjusting as facts develop.']],
    faqs: [['Should I wait until a lawsuit is filed?', 'Not always. Early advice can help preserve documents, understand deadlines, and evaluate whether a direct resolution is possible.'], ['Do all disputes go to trial?', 'No. Some resolve through negotiation or mediation, while others require court decisions. The best route depends on the facts and each party’s objectives.'], ['How are litigation costs evaluated?', 'We discuss the work likely required, available fee arrangements, and cost drivers after learning more about the matter.']]
  },
  'business-corporate': {
    category: '03 / Business', title: 'Business & Corporate', icon: 'briefcase',
    intro: 'Sound legal guidance can help a business make decisions with fewer surprises and a clearer view of its obligations.',
    overview: 'Businesses face legal questions at every stage: how to structure ownership, document important relationships, manage risk, or prepare for a transaction. We work with owners and leadership teams to understand the commercial objective, identify legal and operational trade-offs, and put workable documents and processes in place.',
    servicesIntro: 'Our counsel is shaped around the company’s stage, industry, ownership, and immediate business priorities.',
    services: ['Entity formation and governance', 'Commercial agreements and vendor terms', 'Founder, shareholder, and partnership arrangements', 'Employment and contractor documentation', 'Business purchases, sales, and restructuring', 'Ongoing outside-counsel support'],
    reviewIntro: 'Business advice begins with the commercial objective, decision makers, existing commitments, and the timing of the decision.',
    reviewFactors: [
      { icon: 'briefcase', title: 'Business objective', detail: 'What the company is trying to accomplish, its operational constraints, and the decision that needs to be made.' },
      { icon: 'users', title: 'Authority and ownership', detail: 'Who owns the relevant interests, who can approve the action, and what governing documents apply.' },
      { icon: 'document', title: 'Contract terms', detail: 'Drafts or signed agreements, renewal and termination language, notice duties, and allocation of responsibility.' },
      { icon: 'calendar', title: 'Timing and exposure', detail: 'Transaction milestones, launch dates, outstanding obligations, and risks if action is delayed.' }
    ],
    preparation: ['The company’s legal name, structure, and key decision-makers', 'Draft or signed agreements related to the question', 'Relevant transaction dates, renewal terms, or notice deadlines', 'The business objective and the decision that needs to be made'],
    steps: [['Understand the business', 'We learn the company’s goals, decision-making structure, and current pressures.'], ['Identify the important terms', 'We surface the risks, responsibilities, and options that matter to the transaction or relationship.'], ['Document and maintain', 'We prepare clear agreements and help keep governance and records organized as circumstances change.']],
    faqs: [['When should a new business speak with an attorney?', 'Before signing foundational agreements, bringing in owners, or taking on major obligations is often useful. The right timing depends on the business and its plans.'], ['Can you review an agreement drafted by someone else?', 'Yes. We can identify significant terms, explain practical implications, and discuss revisions or negotiation priorities.'], ['Do you provide ongoing counsel?', 'We can discuss an ongoing arrangement after understanding the company’s needs and expected legal work.']]
  },
  'personal-injury': {
    category: '04 / Injury', title: 'Personal Injury', icon: 'heart',
    intro: 'After an injury, the legal process should not add to the uncertainty. We help clients understand their options and focus on recovery.',
    overview: 'An injury can affect health, work, family life, and financial stability. We listen to what happened, review available records, and explain what information may help evaluate a potential claim. Our team can coordinate the legal process while keeping clients informed about decisions, deadlines, and the documentation involved.',
    servicesIntro: 'Every claim is fact-specific. A careful early review can help clarify who may be responsible and what evidence should be preserved.',
    services: ['Motor-vehicle collision claims', 'Premises and property-related injuries', 'Workplace and construction incidents', 'Serious and long-term injuries', 'Insurance communications and negotiations', 'Wrongful-death claims brought by eligible family members'],
    reviewIntro: 'A potential injury claim is assessed through the event record, responsibility, medical course, and documented effects on daily life.',
    reviewFactors: [
      { icon: 'calendar', title: 'Incident details', detail: 'When and where the event occurred, how it unfolded, and whether an incident report was prepared.' },
      { icon: 'users', title: 'People and responsibility', detail: 'Who was involved, who may have information, and what conduct or conditions may be relevant.' },
      { icon: 'heart', title: 'Care and recovery', detail: 'The treatment timeline, current concerns, and records that may help describe the injury and its course.' },
      { icon: 'document', title: 'Practical impact', detail: 'Insurance communications, missed work, expenses, and other documented effects of the injury.' }
    ],
    preparation: ['The date, location, and a short account of the incident', 'Incident reports, photographs, or witness contact details, if available', 'Insurance correspondence and a summary of treatment to date', 'Work time missed or other practical effects you want us to understand'],
    steps: [['Listen and document', 'We discuss the incident, treatment, losses, and any insurer or employer communications.'], ['Review responsibility', 'We examine records and available evidence to assess potential claims and applicable deadlines.'], ['Pursue a resolution', 'We prepare the claim, communicate with relevant parties, and evaluate any proposed resolution with you.']],
    faqs: [['What information should I keep after an accident?', 'Keep medical records, photographs, receipts, insurance correspondence, and a dated account of important events. Do not alter original evidence.'], ['How long do I have to bring a claim?', 'Deadlines vary by claim type, location, and the parties involved. Speak with an attorney promptly to identify any deadline that may apply.'], ['Will my case have to go to court?', 'Many injury claims resolve without trial, but court may be necessary. The decision depends on liability, evidence, damages, and the available offers.']]
  },
  'family-law': {
    category: '05 / Family', title: 'Family Law', icon: 'users',
    intro: 'Family transitions call for clear information and steady guidance that recognizes the people behind every legal decision.',
    overview: 'Family-law matters often involve overlapping financial, parenting, and personal concerns. We help clients understand the legal framework, organize relevant information, and consider negotiation or court processes with care. Our goal is to make each decision understandable and to keep the work focused on durable, workable arrangements.',
    servicesIntro: 'We advise clients through a range of family transitions and help identify where specialist support may also be useful.',
    services: ['Divorce and separation planning', 'Parenting schedules and custody matters', 'Child and spousal support', 'Property and financial arrangements', 'Mediation preparation and settlement review', 'Modification and enforcement questions'],
    reviewIntro: 'Family matters require attention to the legal questions, the people affected, and arrangements that can work in day-to-day life.',
    reviewFactors: [
      { icon: 'users', title: 'Family circumstances', detail: 'Who is involved, current caregiving arrangements, and which immediate changes need attention.' },
      { icon: 'calendar', title: 'Parenting and schedules', detail: 'Existing orders or agreements, routines, school or care schedules, and upcoming dates.' },
      { icon: 'document', title: 'Financial information', detail: 'Relevant income, property, expenses, and agreements needed to understand support or division questions.' },
      { icon: 'shield', title: 'Safety and stability', detail: 'Any urgent safety concern or need for a stable interim arrangement that should be raised promptly.' }
    ],
    preparation: ['Existing court orders, agreements, or filed documents', 'Upcoming court dates or time-sensitive family decisions', 'A brief outline of household, parenting, or financial concerns relevant to your question', 'Your priorities for a workable arrangement and any immediate safety concerns'],
    steps: [['Set priorities', 'We clarify immediate concerns, practical needs, and important dates.'], ['Understand the options', 'We explain the process and compare negotiation, mediation, and court-based routes.'], ['Work toward stability', 'We prepare proposals and documents designed to support clear, workable arrangements.']],
    faqs: [['Can family matters be resolved without a court hearing?', 'Sometimes. Negotiation or mediation may resolve some or all issues, depending on safety, cooperation, and the legal questions involved.'], ['What should I bring to an initial meeting?', 'A brief timeline, any court papers, existing agreements, and a list of immediate concerns can help make the conversation productive.'], ['Can you guarantee a parenting or financial outcome?', 'No. Outcomes depend on individual facts and applicable law. We can explain factors a court may consider and help you prepare.']]
  },
  'trusts-estates': {
    category: '06 / Estates', title: 'Trusts & Estates', icon: 'scroll',
    intro: 'Thoughtful estate planning can make your wishes clearer and reduce uncertainty for the people who will carry them out.',
    overview: 'Estate planning is not only about documents. It is also about understanding family circumstances, assets, decision-makers, and the outcomes you want to support. We help clients consider appropriate planning tools, prepare documents that reflect their instructions, and revisit plans when life or the law changes.',
    servicesIntro: 'Planning needs vary with family structure, assets, jurisdiction, and personal priorities. We begin with those details before recommending documents.',
    services: ['Wills and testamentary planning', 'Revocable and irrevocable trusts', 'Powers of attorney and health-care directives', 'Probate and estate administration', 'Trust administration and beneficiary matters', 'Guardianship and incapacity planning'],
    reviewIntro: 'Planning or administration questions depend on the person’s wishes, family and asset structure, existing documents, and applicable location.',
    reviewFactors: [
      { icon: 'users', title: 'People and intent', detail: 'Who you want to provide for, who may make decisions, and any family circumstances that shape those wishes.' },
      { icon: 'document', title: 'Existing documents', detail: 'Wills, trusts, beneficiary designations, powers of attorney, or health-care directives already in place.' },
      { icon: 'briefcase', title: 'Assets and property', detail: 'A broad outline of property, accounts, business interests, and where those assets are located.' },
      { icon: 'calendar', title: 'Life changes and process', detail: 'Recent changes, upcoming decisions, or probate and administration deadlines that may affect next steps.' }
    ],
    preparation: ['Existing wills, trusts, or decision-making documents', 'The state or states connected to your residence and property', 'A broad outline of family members and intended decision-makers', 'Recent life changes and the goals you want a plan to address'],
    steps: [['Map your priorities', 'We discuss family, assets, decision-makers, and the outcomes you want to provide for.'], ['Choose and prepare documents', 'We explain available planning tools and prepare documents that reflect your decisions.'], ['Review over time', 'We identify when changes in family, finances, or law may warrant revisiting the plan.']],
    faqs: [['How often should I review an estate plan?', 'Review it after major life events, significant changes in assets, a move to another state, or changes in relevant law.'], ['Do I need a trust?', 'Not everyone does. Whether a trust is useful depends on your goals, assets, family circumstances, and the law that applies.'], ['Can the firm help administer an estate?', 'We can discuss probate and administration needs, including the documents, notices, and court steps that may be required.']]
  }
};

const areas = Object.entries(practiceAreas);
const requestedArea = new URLSearchParams(window.location.search).get('area');
const [currentSlug, current] = Object.hasOwn(practiceAreas, requestedArea) ? [requestedArea, practiceAreas[requestedArea]] : areas[0];

document.title = `${current.title} | Cedarline Law`;
document.querySelector('meta[name="description"]').content = current.intro;
document.querySelector('#breadcrumb-current').textContent = current.title;
document.querySelector('#practice-eyebrow').textContent = `Cedarline Law · ${current.category}`;
document.querySelector('#practice-title').textContent = current.title;
document.querySelector('#practice-icon').innerHTML = window.JusticeIcons[current.icon];
document.querySelector('#practice-intro').textContent = current.intro;
document.querySelector('#practice-overview').textContent = current.overview;
document.querySelector('#services-intro').textContent = current.servicesIntro;
document.querySelector('#review-intro').textContent = current.reviewIntro;

function renderList(containerId, items) {
  const container = document.getElementById(containerId);
  items.forEach(item => {
    const element = document.createElement('li');
    const icon = document.createElement('span');
    const text = document.createElement('span');
    icon.className = 'list-icon';
    icon.innerHTML = window.JusticeIcons.check;
    text.textContent = item;
    element.append(icon, text);
    container.append(element);
  });
}

renderList('service-list', current.services);
renderList('preparation-list', current.preparation);

const reviewGrid = document.querySelector('#review-grid');
current.reviewFactors.forEach(({ icon, title, detail }) => {
  const card = document.createElement('article');
  const iconElement = document.createElement('span');
  const heading = document.createElement('strong');
  const description = document.createElement('span');
  card.className = 'review-focus-card';
  iconElement.className = 'review-focus-icon';
  iconElement.innerHTML = window.JusticeIcons[icon];
  heading.textContent = title;
  description.textContent = detail;
  card.append(iconElement, heading, description);
  reviewGrid.append(card);
});

const processList = document.querySelector('#process-list');
current.steps.forEach(([title, detail], index) => {
  const item = document.createElement('li');
  const icon = document.createElement('span');
  const heading = document.createElement('strong');
  const text = document.createElement('span');
  icon.className = 'step-icon';
  icon.innerHTML = window.JusticeIcons[['message', 'document', 'check'][index]];
  heading.textContent = title;
  text.textContent = detail;
  item.append(icon, heading, text);
  processList.append(item);
});

const faqList = document.querySelector('#faq-list');
current.faqs.forEach(([question, answer]) => {
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  const paragraph = document.createElement('p');
  summary.textContent = question;
  paragraph.textContent = answer;
  details.append(summary, paragraph);
  faqList.append(details);
});

const relatedLinks = document.querySelector('#related-links');
areas.filter(([slug]) => slug !== currentSlug).forEach(([slug, area]) => {
  const link = document.createElement('a');
  const practiceUrl = new URL('practice/', document.currentScript.src);
  practiceUrl.searchParams.set('area', slug);
  link.href = practiceUrl.href;
  link.textContent = area.title;
  relatedLinks.append(link);
});