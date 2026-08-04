
// @ts-nocheck
export class GameEngine {
  onUpdate: () => void = () => {};
  setState(updates: any) {
    this.state = { ...this.state, ...updates };
    this.onUpdate();
  }
  forceUpdate() {
    this.onUpdate();
  }
  props: any = {};
  state = { screen:'start', custom:false, cName:'Acme Corp', cIcon:'🚀', cSector:'enterprise', cBudget:120, cDeploys:2, cSens:'med', cSize:'mid', difficulty:'normal' };

  PROFILES = {
    clinic:     { icon:'🏥', name:'Riverside Clinic', budget:120,  income:1.8, deploys:2, recMult:1.3, spread:0.85, scr:0.9 },
    insurer:    { icon:'🏢', name:'Meridian Mutual',  budget:200,  income:3.0, deploys:2, recMult:1.0, spread:1.0,  scr:1.0 },
    bank:       { icon:'🏦', name:'Nova Capital',     budget:300,  income:4.0, deploys:3, recMult:1.15, spread:1.05, scr:1.2 },
    enterprise: { icon:'🌐', name:'Atlas Group',      budget:400, income:5.0, deploys:3, recMult:1.0, spread:1.25, scr:1.25 },
  };
  TOOLS = {
    pseudo:{icon:'🛡️',name:'Pseudonymisation',time:1,base:10,per:0.015,util:0.95,ring:'#A466FF',desc:'Replace identifiers with realistic tokens. Takes 1 day to deploy. Cheap to run, data keeps working.'},
    synth:{icon:'🧬',name:'Synthetic data',time:3,base:25,per:0.04,util:0.90,ring:'#5FD3A6',desc:'Generate artificial data. Takes 3 days to deploy. Very expensive. Usability is high.'},
    enc:{icon:'🔐',name:'Encrypt at rest',time:2,base:15,per:0.025,util:0.35,ring:'#2E6FD5',desc:'Key management makes this pricey. Takes 2 days to deploy. Dead weight in workflows.'},
    lock:{icon:'🔒',name:'Access lockdown',time:1,base:12,per:0.018,util:0.65,ring:'#E7B15C',desc:'Least privilege slows break-ins. Takes 1 day to deploy. Whatever leaks is still real.'},
    anon:{icon:'✂️',name:'True Anonymisation',time:4,base:20,per:0.035,util:0.15,ring:'#8A86A3',desc:'Real anonymisation is expensive. Takes 4 days to deploy. Destroys utility.'},
    remove:{icon:'🙈',name:'Name removal',time:1,base:5,per:0.005,util:0.80,ring:'#D5432E',desc:'Just removing names. Takes 1 day to deploy. False protection.'}
  };
  TEAM_TITLES=['Intern squad','Junior admins','Competent crew','Security veterans','Elite CERT'];
  XP_T=[0,60,150,280,450];
  CUT = {icon:'⛔',name:'Cut all connections',time:1,cost:15,util:0.1,ring:'#D5432E',desc:'Sever every link to this system. Spread through it stops dead — but the business loses it almost entirely (~10% utility), and links never come back.'};
    NODES = [
    {id:'c1',label:'Patient DB',zone:'origin',rec:480,x:0.435,y:0.36},
    {id:'c2',label:'Records Core',zone:'origin',rec:320,x:0.385,y:0.24},
    {id:'c3',label:'Billing',zone:'origin',rec:210,x:0.36,y:0.44},
    {id:'c4',label:'Staff Laptops',zone:'origin',rec:110,x:0.44,y:0.52},
    {id:'c5',label:'Customer CRM',zone:'origin',rec:260,x:0.395,y:0.155},
    {id:'c6',label:'Backup Store',zone:'origin',rec:350,x:0.475,y:0.46},
    {id:'c7',label:'HR System',zone:'origin',rec:180,x:0.335,y:0.19},
    {id:'u7',label:'Marketing SaaS',zone:'eu',rec:200,x:0.585,y:0.5},
    {id:'u8',label:'Gov Reporting Portal',zone:'eu',rec:320,x:0.545,y:0.095},
    {id:'n5',label:'CRM Cloud Vendor',zone:'na',rec:300,x:0.06,y:0.22},
    {id:'p5',label:'Analytics Reseller',zone:'apac',rec:220,x:0.715,y:0.2},
    {id:'l3',label:'Marketing BPO',zone:'latam',rec:180,x:0.16,y:0.74},
    {id:'u1',label:'EU Analytics SaaS',zone:'eu',rec:300,x:0.53,y:0.22},
    {id:'u2',label:'Insurance Partner',zone:'eu',rec:260,x:0.55,y:0.4},
    {id:'u3',label:'Research University',zone:'eu',rec:220,x:0.49,y:0.13},
    {id:'u4',label:'EU Cloud Region',zone:'eu',rec:380,x:0.6,y:0.3},
    {id:'u5',label:'Payment Gateway',zone:'eu',rec:280,x:0.63,y:0.17},
    {id:'u6',label:'Managed IT Provider',zone:'eu',rec:240,x:0.645,y:0.45},
    {id:'n1',label:'US Cloud Region',zone:'na',rec:420,x:0.17,y:0.24},
    {id:'n2',label:'US Analytics Giant',zone:'na',rec:340,x:0.1,y:0.34},
    {id:'n3',label:'Data Broker',zone:'na',rec:500,x:0.22,y:0.36},
    {id:'n4',label:'Ad-Tech Exchange',zone:'na',rec:280,x:0.14,y:0.15},
    {id:'l1',label:'Support BPO',zone:'latam',rec:200,x:0.22,y:0.66},
    {id:'l2',label:'Outsourced QA',zone:'latam',rec:240,x:0.28,y:0.78},
    {id:'m1',label:'Offshore Dev Hub',zone:'mea',rec:260,x:0.5,y:0.68},
    {id:'m2',label:'Logistics Partner',zone:'mea',rec:160,x:0.57,y:0.8},
    {id:'p1',label:'APAC Cloud',zone:'apac',rec:380,x:0.8,y:0.28},
    {id:'p2',label:'AI Lab',zone:'apac',rec:320,x:0.87,y:0.4},
    {id:'p3',label:'Mobile App Vendor',zone:'apac',rec:240,x:0.78,y:0.5},
    {id:'p4',label:'Manufacturing Partner',zone:'apac',rec:150,x:0.88,y:0.17},
    {id:'x1',label:'Dark-web Market',zone:'dark',rec:600,x:0.76,y:0.76},
    {id:'x2',label:'Credential Dump Forum',zone:'dark',rec:300,x:0.87,y:0.68},
    {id:'c8',label:'API Gateway 9',zone:'origin',rec:140,x:0.442,y:0.156},
    {id:'c9',label:'Internal DB 10',zone:'origin',rec:250,x:0.435,y:0.244},
    {id:'c10',label:'Internal DB 11',zone:'origin',rec:190,x:0.362,y:0.366},
    {id:'c11',label:'Auth Service 12',zone:'origin',rec:100,x:0.486,y:0.278},
    {id:'c12',label:'Queue Server 13',zone:'origin',rec:320,x:0.353,y:0.526},
    {id:'c13',label:'Job Worker 14',zone:'origin',rec:290,x:0.409,y:0.195},
    {id:'c14',label:'Auth Service 15',zone:'origin',rec:60,x:0.397,y:0.367},
    {id:'c15',label:'Auth Service 16',zone:'origin',rec:70,x:0.441,y:0.392},
    {id:'c16',label:'API Gateway 17',zone:'origin',rec:300,x:0.464,y:0.423},
    {id:'c17',label:'Queue Server 18',zone:'origin',rec:310,x:0.332,y:0.39},
    {id:'c18',label:'Queue Server 19',zone:'origin',rec:100,x:0.485,y:0.189},
    {id:'c19',label:'Queue Server 20',zone:'origin',rec:230,x:0.479,y:0.536},
    {id:'c20',label:'Internal DB 21',zone:'origin',rec:320,x:0.382,y:0.486},
    {id:'c21',label:'Cache Node 22',zone:'origin',rec:230,x:0.322,y:0.295},
    {id:'c22',label:'Queue Server 23',zone:'origin',rec:180,x:0.366,y:0.289},
    {id:'u9',label:'Berlin Hub 10',zone:'eu',rec:110,x:0.584,y:0.388},
    {id:'u10',label:'Paris Server 11',zone:'eu',rec:270,x:0.529,y:0.488},
    {id:'u11',label:'Paris Server 12',zone:'eu',rec:110,x:0.584,y:0.265},
    {id:'u12',label:'GDPR Mirror 13',zone:'eu',rec:290,x:0.637,y:0.38},
    {id:'u13',label:'EU Sub-processor 14',zone:'eu',rec:220,x:0.581,y:0.146},
    {id:'u14',label:'GDPR Mirror 15',zone:'eu',rec:320,x:0.533,y:0.259},
    {id:'u15',label:'Berlin Hub 16',zone:'eu',rec:150,x:0.564,y:0.32},
    {id:'u16',label:'EU Sub-processor 17',zone:'eu',rec:310,x:0.507,y:0.435},
    {id:'u17',label:'GDPR Mirror 18',zone:'eu',rec:220,x:0.608,y:0.413},
    {id:'u18',label:'Paris Server 19',zone:'eu',rec:260,x:0.492,y:0.488},
    {id:'u19',label:'EU CDN Node 20',zone:'eu',rec:140,x:0.617,y:0.334},
    {id:'u20',label:'Paris Server 21',zone:'eu',rec:60,x:0.64,y:0.136},
    {id:'u21',label:'EU Data Center 22',zone:'eu',rec:200,x:0.59,y:0.206},
    {id:'u22',label:'Berlin Hub 23',zone:'eu',rec:90,x:0.527,y:0.32},
    {id:'u23',label:'Paris Server 24',zone:'eu',rec:190,x:0.593,y:0.236},
    {id:'n6',label:'NY Exchange 7',zone:'na',rec:160,x:0.127,y:0.362},
    {id:'n7',label:'Toronto Branch 8',zone:'na',rec:130,x:0.189,y:0.403},
    {id:'n8',label:'NY Exchange 9',zone:'na',rec:130,x:0.166,y:0.206},
    {id:'n9',label:'Toronto Branch 10',zone:'na',rec:300,x:0.099,y:0.297},
    {id:'n10',label:'NA Analytics 11',zone:'na',rec:100,x:0.076,y:0.167},
    {id:'n11',label:'NY Exchange 12',zone:'na',rec:70,x:0.056,y:0.43},
    {id:'n12',label:'NA Aggregator 13',zone:'na',rec:80,x:0.196,y:0.316},
    {id:'n13',label:'Toronto Branch 14',zone:'na',rec:80,x:0.172,y:0.365},
    {id:'n14',label:'NA Analytics 15',zone:'na',rec:200,x:0.098,y:0.248},
    {id:'n15',label:'Toronto Branch 16',zone:'na',rec:180,x:0.147,y:0.427},
    {id:'p6',label:'APAC Edge Node 7',zone:'apac',rec:230,x:0.884,y:0.324},
    {id:'p7',label:'Sydney Node 8',zone:'apac',rec:250,x:0.826,y:0.187},
    {id:'p8',label:'Manila Gateway 9',zone:'apac',rec:310,x:0.818,y:0.313},
    {id:'p9',label:'Manila Gateway 10',zone:'apac',rec:120,x:0.762,y:0.393},
    {id:'p10',label:'Sydney Node 11',zone:'apac',rec:340,x:0.823,y:0.426},
    {id:'p11',label:'Manila Gateway 12',zone:'apac',rec:130,x:0.82,y:0.479},
    {id:'p12',label:'Tokyo Cloud 13',zone:'apac',rec:170,x:0.737,y:0.514},
    {id:'p13',label:'Tokyo Cloud 14',zone:'apac',rec:310,x:0.797,y:0.369},
    {id:'p14',label:'APAC AI Cluster 15',zone:'apac',rec:340,x:0.719,y:0.379},
    {id:'p15',label:'APAC Edge Node 16',zone:'apac',rec:170,x:0.744,y:0.227},
    {id:'l4',label:'Latam CDN 5',zone:'latam',rec:220,x:0.214,y:0.805},
    {id:'l5',label:'Latam Support DB 6',zone:'latam',rec:100,x:0.154,y:0.704},
    {id:'l6',label:'Latam CDN 7',zone:'latam',rec:100,x:0.289,y:0.668},
    {id:'l7',label:'QA Environment 8',zone:'latam',rec:240,x:0.269,y:0.708},
    {id:'l8',label:'Latam Support DB 9',zone:'latam',rec:270,x:0.191,y:0.768},
    {id:'l9',label:'Latam CDN 10',zone:'latam',rec:100,x:0.16,y:0.796},
    {id:'m3',label:'Regional Offsite 4',zone:'mea',rec:330,x:0.491,y:0.752},
    {id:'m4',label:'Dubai Gateway 5',zone:'mea',rec:70,x:0.55,y:0.841},
    {id:'m5',label:'Africa Mobile CDN 6',zone:'mea',rec:190,x:0.504,y:0.722},
    {id:'m6',label:'MEA Partner API 7',zone:'mea',rec:170,x:0.577,y:0.755},
    {id:'m7',label:'MEA Partner API 8',zone:'mea',rec:190,x:0.467,y:0.687},
    {id:'m8',label:'Regional Offsite 9',zone:'mea',rec:340,x:0.519,y:0.827},
    {id:'x3',label:'Darknet Hub 4',zone:'dark',rec:330,x:0.847,y:0.731},
    {id:'x4',label:'Darknet Hub 5',zone:'dark',rec:280,x:0.723,y:0.808},
    {id:'x5',label:'Data Dump Forum 6',zone:'dark',rec:130,x:0.759,y:0.815},
    {id:'x6',label:'Ransomware Board 7',zone:'dark',rec:180,x:0.815,y:0.706},
    {id:'x7',label:'Ransomware Board 8',zone:'dark',rec:250,x:0.776,y:0.71},
    {id:'x8',label:'Tor Exit Node 9',zone:'dark',rec:280,x:0.807,y:0.768}
  ];
  EDGES = [
    ['c1','c2'],['c1','c3'],['c2','c4'],['c3','c4'],['c5','c1'],['c5','c2'],['c6','c1'],['c6','c3'],
    ['c1','u1'],['c2','u3'],['c3','u2'],['c1','u4'],['u1','u4'],['u2','u4'],['u3','u1'],['c5','u1'],
    ['c6','u4'],['u5','u4'],['u5','u1'],['u5','n1'],['u6','u4'],['u6','c4'],['u6','m1'],['c7','c1'],
    ['c7','c4'],['c7','u6'],['u7','u1'],['u7','c5'],['u7','n2'],['u8','c2'],['u8','u4'],['n5','n1'],
    ['n5','n2'],['n5','u7'],['p5','p1'],['p5','m1'],['l3','l1'],['l3','n3'],['u4','n1'],['u1','n2'],
    ['n1','n2'],['n2','n3'],['n1','n4'],['n3','n4'],['c1','n1'],['c3','l1'],['l1','l2'],['c4','l1'],
    ['u2','l2'],['c2','m1'],['m1','m2'],['u4','m1'],['l2','m2'],['u4','p1'],['n1','p1'],['p1','p2'],
    ['p1','p3'],['p2','p4'],['m1','p3'],['n3','x1'],['p3','x2'],['x1','x2'],['m2','x1'],['c4','x2'],
    ['c8','c3'],['c8','n13'],['c9','c2'],['c9','u16'],['c10','c7'],['c10','n6'],['c11','c20'],['c11','c2'],
    ['c11','n12'],['c12','c2'],['c12','c20'],['c12','u21'],['c13','c4'],['c14','c4'],['c15','c22'],['c16','c3'],
    ['c16','c6'],['c17','c7'],['c18','c22'],['c18','c14'],['c18','n4'],['c19','c8'],['c19','c7'],['c19','n2'],
    ['c20','c17'],['c21','c13'],['c22','c20'],['c22','u6'],['u9','u6'],['u9','n12'],['u10','u11'],['u11','u14'],
    ['u11','u20'],['u12','u6'],['u13','u7'],['u14','u5'],['u14','u18'],['u14','m1'],['u15','u9'],['u15','m8'],
    ['u16','u23'],['u16','u21'],['u17','u11'],['u17','u1'],['u17','c19'],['u18','u9'],['u18','c12'],['u19','u12'],
    ['u19','u8'],['u19','n6'],['u20','p15'],['u21','u20'],['u21','u5'],['u22','u23'],['u22','u14'],['u22','n5'],
    ['u23','u20'],['u23','n15'],['n6','n10'],['n7','n13'],['n7','n8'],['n7','l7'],['n8','n11'],['n8','n1'],
    ['n8','u3'],['n9','n2'],['n10','n2'],['n10','u16'],['n11','n1'],['n11','u12'],['n12','n13'],['n12','p7'],
    ['n13','n15'],['n13','l7'],['n14','n11'],['n14','n6'],['n15','n7'],['n15','n12'],['p6','p7'],['p7','p10'],
    ['p8','p14'],['p8','p7'],['p9','p2'],['p9','p1'],['p10','p14'],['p10','p3'],['p11','p14'],['p11','p1'],
    ['p11','m4'],['p12','p5'],['p13','p6'],['p13','p8'],['p13','u2'],['p14','p9'],['p14','n4'],['p15','p12'],
    ['p15','p10'],['l4','l3'],['l4','l2'],['l4','n12'],['l5','l8'],['l6','l8'],['l7','l6'],['l7','l1'],
    ['l8','l2'],['l9','l3'],['l9','c15'],['m3','m4'],['m3','u19'],['m4','m8'],['m4','u11'],['m5','m6'],
    ['m6','m1'],['m7','m8'],['m7','m3'],['m7','u3'],['m8','m1'],['m8','m6'],['x3','x7'],['x3','l4'],
    ['x4','x3'],['x5','x3'],['x6','x2'],['x6','x4'],['x6','n1'],['x7','x6'],['x8','x4'],['x8','n11']
  ];
  GROWTH = [
    {id:'g1',label:'New Analytics Platform',zone:'eu',rec:220,x:.51,y:.50},
    {id:'g2',label:'Acquired Startup',zone:'origin',rec:240,x:.325,y:.36},
    {id:'g3',label:'Mobile App Backend',zone:'eu',rec:260,x:.665,y:.31},
    {id:'g4',label:'US Sales Office',zone:'na',rec:200,x:.28,y:.18},
    {id:'g5',label:'Chatbot Vendor',zone:'apac',rec:180,x:.72,y:.62},
    {id:'g6',label:'HR SaaS Migration',zone:'eu',rec:200,x:.415,y:.075},
  ];
  REGIONS = [
    {label:'NORTH AMERICA',x:.16,y:.055},{label:'EUROPE — YOUR JURISDICTION',x:.47,y:.055},{label:'ASIA-PACIFIC',x:.83,y:.055},
    {label:'LATAM',x:.25,y:.58},{label:'MIDDLE EAST & AFRICA',x:.53,y:.58},{label:'DARK MARKETS',x:.81,y:.60},
  ];
  LESSONS = {
    eu:{t:'It reached your EU partners',d:'Still inside GDPR — but every processor adds sub-processors, retention and security you don\u2019t control. Contracts travel; control doesn\u2019t. What matters now is what those copies contain.'},
    na:{t:'It crossed the Atlantic',d:'Outside the EU, protection fragments: data brokers legally resell what they hold, and the transfer itself may violate GDPR. You cannot deploy anything here — only what you did at the source counts now.'},
    latam:{t:'It entered the outsourcing chain',d:'Support and QA offshoring hand records to fourth parties you\u2019ve never audited. Each hop dilutes accountability a little more.'},
    mea:{t:'It reached offshore development',d:'Dev hubs work on full production copies across jurisdictions. Weakest-link security now guards your strongest data.'},
    apac:{t:'It was ingested by AI',d:'Models trained on raw personal data memorise it — the copy lives inside the weights, unextractable. If your source data was tokens, the model learned nothing real.'},
    dark:{t:'It hit the dark markets',d:'The point of no return: records on a resale market are copied indefinitely, forever. Unless what leaked was tokens — then the listing is worthless.'},
    growth:{t:'Your attack surface just grew',d:'Companies never sit still — every new tool, vendor, app or acquisition is fresh attack surface, born unprotected and already integrated. Defence isn\u2019t a project you finish; it\u2019s a posture. Protect new systems at birth.'},
    insiderleak:{t:'The threat was inside',d:'An employee walked out with a copy — no firewall saw it happen. The only thing that decided the damage is what the copy contained: pseudonymised tokens are worthless even in a disgruntled pocket. Raw records are a headline.'},
    thirdparty:{t:'A partner breached themselves',d:'Not every breach starts with you — companies in your ecosystem get hacked on their own. The only thing that decides whether it\u2019s your crisis too is what YOUR copies at that partner contained. Tokens: their problem. Raw records: yours.'},
    outofreach:{t:'Out of your reach',d:'You can only deploy defences on your own systems and EU contracts. Data that has already left is governed by whoever holds it — that\u2019s the whole point of protecting at the source.'},
  };
  SECTOR_LABELS = {
    clinic:     { c1:'Patient DB', c2:'Records Core', c3:'Billing', c4:'Staff Laptops', c5:'Appointment CRM', c6:'Backup Archive', u2:'Insurance Partner', u3:'Research University', u8:'Health Registry Portal' },
    insurer:    { c1:'Policyholder DB', c2:'Claims Core', c3:'Underwriting', c4:'Broker Laptops', c5:'Customer CRM', c6:'Claims Archive', u2:'Reinsurance Partner', u3:'Actuarial Bureau' },
    bank:       { c1:'Accounts Core', c2:'Transactions Ledger', c3:'Trading Desk', c4:'Branch Laptops', c5:'Client Portal DB', c6:'Risk Warehouse', u2:'Payments Partner', u3:'Credit Bureau', u5:'SEPA Gateway', u8:'ECB Reporting' },
    enterprise: { c1:'Customer CRM', c2:'HR Master Data', c3:'ERP Finance', c4:'Field Laptops', c5:'Sales CRM', c6:'Data Lake', u2:'Marketing Agency', u3:'Analytics Vendor' },
  };
  DAYMAX = 90;
  WIPE_COST = 25; WIPE_CD = 14;

  mount(){
    this.buildBoard(null);
    this._onResize = () => this._resize();
    window.addEventListener('resize', this._onResize);
    const draw = (t: number) => { try { this._draw(t); } catch(err){} };
    const loop = (t: number) => { draw(t); this._raf = requestAnimationFrame(loop); };
    this._raf = requestAnimationFrame(loop);
    this._keepAlive = setInterval(() => { if (document.hidden) draw(performance.now()); }, 120);
    setTimeout(() => draw(performance.now()), 0);
  }
  unmount(){
    clearInterval(this._iv); clearInterval(this._keepAlive); cancelAnimationFrame(this._raf);
    window.removeEventListener('resize', this._onResize);
  }

  buildBoard(profile){
    const byId = {};
    const lbl = profile ? this.SECTOR_LABELS[profile] : null;
    const nodes = this.NODES.map(n => { const o = {...n, label:(lbl&&lbl[n.id])||n.label, state:'clean', payload:null, prot:null, cut:false, exposedAt:0}; byId[n.id]=o; return o; });
    for(const n of nodes) n.adj = [];
    for(const [a,b] of this.EDGES){ byId[a].adj.push(b); byId[b].adj.push(a); }
    this.sim = { profile, nodes, byId, day:0, budget:0, scr:0, traits:{}, pulses:[], running:false, speed:0,
      deploysLeft:0, selNode:null, wipeReadyDay:0, nextTp:12,
      score:0, floats:[], headline:null, deflects:0, nextBoard:25, signed:{}, extraEdges:[], ach:{},
      xp:0, trainReadyDay:0, nextIns:15, growthPool:this.GROWTH.map(g=>({...g})), nextGrow:14, opp:null, nextOpp:7, lastOpp:null, insiderBoostUntil:0,
      log:[], logId:0, lessonsSeen:{}, lesson:null, spent:{pseudo:0,enc:0,lock:0,anon:0}, fines:0, evoQueue:[] };
    this.totalRec = nodes.reduce((s,n)=>s+n.rec,0);
  }
  _pushLog(text, color){
    const s=this.sim; s.log.unshift({id:++s.logId, day:s.day, text, color}); if(s.log.length>8) s.log.pop();
  }

  start(pk){
    this._zoom = 1; this._panX = 0; this._panY = 0;
    this.buildBoard(pk);
    const s=this.sim, P=this.PROFILES[pk];
    let diffMult = 1;
    if(this.state.difficulty === 'easy') diffMult = 1.5;
    if(this.state.difficulty === 'hard') diffMult = 0.6;
    s.running=true; s.speed=1; s.budget=Math.round(P.budget * diffMult); s.deploysLeft=this._deployMax(P);
    const evo=[['vendor',9],['endpoint',20],['border',27],['ai',38],['aggregate',50],['shadow',32]];
    s.evoQueue = evo.map(([k,d])=>[k, (d as number) + Math.floor(Math.random()*5)-2]).sort((a,b)=>a[1]-b[1]);
    this._pushLog('Threat intel: an intrusion is expected within days. Deploy defences on your systems now.', '#E7B15C');
    this._pushLog('Tip: click any Europe system to open its defence menu. The ? Help button (top right) pauses the game and explains everything.', '#CCAEFC');
    this.setState({screen:'playing'});
    this._restartTimer();
  }
  restart(){ clearInterval(this._iv); this.sim.running=false; this.buildBoard(null); this.setState({screen:'start'}); }
  startCustom(){
    const st=this.state;
    const sens={low:0.8,med:1.0,high:1.3}[st.cSens];
    const size={small:{spread:0.85,income:2.5},mid:{spread:1.0,income:4.0},large:{spread:1.25,income:6.0}}[st.cSize];
    this.PROFILES.custom={icon:st.cIcon,name:(st.cName||'Your Company').slice(0,28),budget:+st.cBudget,income:size.income,deploys:+st.cDeploys,recMult:sens,spread:size.spread,scr:1.0+(st.cSens==='high'?0.2:0)};
    this.SECTOR_LABELS.custom=this.SECTOR_LABELS[st.cSector];
    this.start('custom');
  }

  _restartTimer(){
    clearInterval(this._iv);
    if(!this.sim || !this.sim.running || this.sim.speed===0) return;
    this._iv = setInterval(()=>this._dayTick(), this.sim.speed===2 ? 1700 : 3400);
  }
  setSpeed(v){ if(!this.sim) return; this.sim.speed=v; this._restartTimer(); this.forceUpdate(); }

  aggression(){
    let mult = 1;
    if(this.state.difficulty === 'easy') mult = 0.6;
    if(this.state.difficulty === 'hard') mult = 1.6;
    return (this.props.aggression ?? 1) * mult;
  }

  _lvl(){ const x=this.sim?this.sim.xp||0:0; let l=1; for(let i=1;i<this.XP_T.length;i++) if(x>=this.XP_T[i]) l=i+1; return l; }
  _deployMax(P){ const l=this._lvl(); return P.deploys+(l>=3?1:0)+(l>=5?1:0); }
  _active(){ return this.sim.nodes.filter(n=>n.deployDays>0).length; }
  _xp(n){ const s=this.sim; const before=this._lvl(); s.xp+=n; const after=this._lvl();
    if(after>before) this._pushLog('🎉 Team level up — '+this.TEAM_TITLES[after-1]+'!'+((after===3||after===5)?' (+1 concurrent capacity)':' Deploy costs drop.'), '#5FD3A6'); }
  doTrain(){ const s=this.sim; if(!s.running) return;
    if(s.day<s.trainReadyDay){ this._pushLog('The team is already in training ('+(s.trainReadyDay-s.day)+'d).', '#8A86A3'); this.forceUpdate(); return; }
    if(s.budget<12){ this._pushLog('Not enough budget for a training week (€12k).', '#8A86A3'); this.forceUpdate(); return; }
    s.budget-=12; s.trainReadyDay=s.day+5; this._xp(45);
    this._pushLog('📚 Training week booked (−€12k). The team grumbles, then learns.', '#5FD3A6'); this.forceUpdate(); }
  _grow(){
    const s=this.sim;
    if(!s.growthPool || s.day<s.nextGrow || !s.growthPool.length) return;
    s.nextGrow=s.day+12+Math.floor(Math.random()*8);
    const g=s.growthPool.splice(Math.floor(Math.random()*s.growthPool.length),1)[0];
    const n={...g, state:'clean', payload:null, prot:null, cut:false, exposedAt:0, adj:[]};
    s.nodes.push(n); s.byId[n.id]=n; this.totalRec+=n.rec;
    const home = n.zone==='origin'||n.zone==='eu';
    const pick=(pred,not)=>{ const pool=s.nodes.filter(m=>m.id!==n.id&&!m.cut&&(!not||m.id!==not.id)&&pred(m)); return pool.length?pool[Math.floor(Math.random()*pool.length)]:null; };
    const isHome=(m)=>m.zone==='origin'||m.zone==='eu';
    const links=[];
    const a=pick(isHome); if(a) links.push(a);
    if(home){ const b=pick(isHome,a); if(b) links.push(b);
      if(Math.random()<0.35){ const f=pick(m=>!isHome(m)&&m.zone!=='dark'); if(f) links.push(f); } }
    else { const f=pick(m=>!isHome(m)&&m.zone!=='dark',a); if(f) links.push(f); }
    for(const m of links){ n.adj.push(m.id); m.adj.push(n.id); s.extraEdges.push([n.id,m.id]); }
    s.floats.push({x:n.x,y:n.y,t0:performance.now(),text:'NEW SYSTEM',color:'#5FD3A6'});
    s.pulses.push({from:n.id,to:n.id,t0:performance.now()});
    this._pushLog('🏗 The business grew: '+n.label+' went live'+(home?' — unprotected, and already wired into '+links.filter(isHome).map(m=>m.label).join(' and ')+'.':' — a new external integration, out of your reach.'), '#E7B15C');
    if(home) s.headline='PRESS: '+this.PROFILES[s.profile].name+' launches '+n.label.toLowerCase();
    if(!s.lessonsSeen.growth){ s.lessonsSeen.growth=true; s.lesson=this.LESSONS.growth; }
  }
  _insider(){
    const s=this.sim, P=this.PROFILES[s.profile];
    if(s.day<s.nextIns) return;
    s.nextIns=s.day+10+Math.floor(Math.random()*8);
    const srcPool=s.nodes.filter(n=>n.zone==='origin'&&!n.cut);
    if(!srcPool.length) return;
    const src=srcPool[Math.floor(Math.random()*srcPool.length)];
    const lvl=this._lvl();
    if(Math.random()<0.10+0.13*(lvl-1)){ this._xp(25); s.score+=60;
      this._pushLog('🛡 Insider caught: your team stopped an employee copying '+src.label+' onto a USB drive (+60 pts).', '#5FD3A6'); return; }
    const dstPool=s.nodes.filter(n=>(n.zone==='dark'||n.id==='n3')&&n.state==='clean');
    if(!dstPool.length) return;
    const m=dstPool[Math.floor(Math.random()*dstPool.length)];
    this._infect(m, src);
    this._pushLog('🕵️ Insider leak: an employee sold a copy of '+src.label+' — it just surfaced at '+m.label+'.', '#D5432E');
    s.headline='EXCLUSIVE: disgruntled employee leaks '+P.name+' data';
    if(!s.lessonsSeen.insiderleak){ s.lessonsSeen.insiderleak=true; s.lesson=this.LESSONS.insiderleak; }
  }

  _gate(zone){
    const s=this.sim, t=s.traits;
    let g;
    if(zone==='origin') g=1;
    else if(zone==='eu') g=t.vendor?0.9:0.2;
    else if(zone==='na') g=t.border?0.85:0.08;
    else if(zone==='latam'||zone==='mea') g=t.endpoint?0.8:0.12;
    else if(zone==='apac') g=t.ai?0.95:0.1;
    else if(zone==='dark') g=t.aggregate?0.8:0.04;
    else g=0.5;
    return g;
  }
  _payloadFrom(src){
    if(!src) return 'real';
    if(src.prot==='pseudo') return 'token';
    if(src.prot==='synth') return 'synth';
    if(src.prot==='enc') return 'blob';
    if(src.prot==='anon') return 'empty';
    if(src.prot==='remove') return 'real';
    return src.payload || 'real';
  }
  _infect(m, src){
    const s=this.sim;
    m.state='exposed'; m.exposedAt=s.day;
    m.payload=this._payloadFrom(src);
    s.pulses.push({from:src?src.id:m.id, to:m.id, t0:performance.now()});
    if(s.running){
      if(m.payload==='real'){ s.score-=15; s.floats.push({x:m.x,y:m.y,t0:performance.now(),text:'LEAKED',color:'#F0857A'}); }
      else { s.score+=40; s.xp+=5; s.deflects++; s.floats.push({x:m.x,y:m.y,t0:performance.now(),text:'DEFLECTED +40',color:'#CCAEFC'});
        if(s.deflects%4===0) this._pushLog('📟 GLASS VIPER: tokens. AGAIN. where is the real data.', '#CCAEFC'); }
      if(m.zone==='dark') s.headline = m.payload==='real' ? 'DARK-WEB WATCH: fresh records listed for sale — bidding is lively' : 'DARK-WEB WATCH: listing pulled — "worthless tokens", buyers furious';
    }
    if(m.zone!=='origin' && !s.lessonsSeen[m.zone] && this.LESSONS[m.zone]){ s.lessonsSeen[m.zone]=true; s.lesson=this.LESSONS[m.zone]; }
  }
  dismissLesson(){ this.sim.lesson=null; this.forceUpdate(); }

  _dayTick(){
    const s=this.sim, P=this.PROFILES[s.profile];
    s.day++;
    // process active deployments
    for(const n of s.nodes) {
      if(n.deployDays > 0) {
        n.deployDays--;
        if(n.deployDays <= 0) {
          if(n.deployProt === 'cut') {
            n.cut = true;
            this._pushLog(n.label + ' connections successfully severed.', '#D5432E');
          } else {
            n.prot = n.deployProt;
            this._pushLog(this.TOOLS[n.deployProt].name + ' is now active on ' + n.label + '.', this.TOOLS[n.deployProt].ring);
          }
          n.deployProt = null;
        }
      }
    }
    // income scales with utility; breached systems bleed money daily
    const util=this._utility();
    let bc=0;
    for(const n of s.nodes){ if(n.state==='exposed'){ bc += n.payload==='real' ? (0.2 + n.rec*0.0008)*P.recMult : (n.payload==='blob'?0.06:0.02); } }
    s.breachCost=Math.round(bc*10)/10;
    s.budget += Math.round((P.income*util - bc)*10)/10;
    if(bc>0.3 && !s.bleedWarned){ s.bleedWarned=true; this._pushLog('Breached systems are bleeding money — incident handling, credit monitoring, customer churn (−€'+s.breachCost+'k/d).', '#F0857A'); }
    if(util<0.6 && !s.utilWarned){ s.utilWarned=true; this._pushLog('Your data is barely usable — income has dropped to '+Math.round(util*100)+'% of normal.', '#E7B15C'); }
    // seed the breach
    if(s.day===4 && !s.nodes.some(n=>n.state==='exposed')){
      const entry=s.byId[['c4','c3','c2','c5'][Math.floor(Math.random()*4)]];
      this._infect(entry, null);
      this._pushLog('Intrusion confirmed — '+entry.label+' compromised via phishing.', '#D5432E');
      this._pushLog('📟 GLASS VIPER: knock knock.', '#CCAEFC');
      s.headline='TECH DESK: breach crew "Glass Viper" claims a new victim';
    }
    // breach evolves on its own
    while(s.evoQueue.length && s.day>=s.evoQueue[0][1]){
      const [k]=s.evoQueue.shift(); s.traits[k]=true;
      const msg={vendor:'The breach found your partner data-sharing agreements.',endpoint:'The breach is riding your outsourcing chains.',border:'The breach is syncing into US clouds and brokers.',ai:'The breach is being ingested by AI pipelines.',aggregate:'Stolen copies are being packaged for dark-market resale.',shadow:'Shadow copies are multiplying — spread accelerated.'}[k];
      this._pushLog(msg, '#D5432E');
      const taunt={vendor:'your partners trust you. adorable.',border:'no GDPR where I\u2019m going.',aggregate:'your data, retail price. bulk discounts available.'}[k];
      if(taunt) this._pushLog('📟 GLASS VIPER: '+taunt, '#CCAEFC');
    }
    // spread
    const trans=(1+(s.traits.shadow?0.4:0)) * (s.day<s.insiderBoostUntil?1.4:1) * P.spread * this.aggression();
    const news=[];
    for(const n of s.nodes){ if(n.state!=='exposed') continue;
      for(const mid of n.adj){ const m=s.byId[mid]; if(m.state!=='clean') continue;
        let lockFactor = m.prot==='lock'?0.35:1;
        let p = 0.035 * this._gate(m.zone) * trans * lockFactor;
        if(Math.random() < Math.max(0.005, Math.min(0.8, p))) news.push([m,n]);
      }
    }
    for(const [m,n] of news) this._infect(m,n);
    // scrutiny — only REAL leaks draw regulators
    let scrGain=0;
    for(const n of s.nodes){ if(n.state==='exposed'){ scrGain += n.payload==='real'?0.4:(n.payload==='blob'?0.1:0.04); } }
    s.scr=Math.min(100, s.scr + scrGain*P.scr);
    // fines at thresholds
    if(s.scr>=50 && !s.fined50){ s.fined50=true; const f=Math.round(P.budget*0.12); s.budget-=f; s.fines+=f; this._pushLog('Regulator opens a formal inquiry — provisional fine €'+f+'k.', '#E7B15C'); s.headline='REUTERS: EU regulator opens formal inquiry into '+P.name; }
    if(s.scr>=80 && !s.fined80){ s.fined80=true; const f=Math.round(P.budget*0.25); s.budget-=f; s.fines+=f; this._pushLog('GDPR fine issued: €'+f+'k. One more incident and processing is suspended.', '#D5432E'); s.headline='FRONT PAGE: '+P.name+' hit with GDPR fine over leaked records'; }
    // score trickle + quarterly board review
    s.score += 2 + (util>=0.7?1:0);
    if(s.day>=s.nextBoard){ s.nextBoard+=25; const u=Math.round(util*100);
      if(u>=70){ s.budget+=15; s.score+=100; this._pushLog('💼 Quarterly board review: data still usable ('+u+'%). Budget topped up (+€15k).', '#5FD3A6'); s.headline='BOARD MINUTES: CISO "surprisingly competent", says CFO'; }
      else if(u>=50){ this._pushLog('💼 Quarterly board review: the board grumbles about '+u+'% utility. No new money.', '#E7B15C'); }
      else { s.budget=Math.max(0,s.budget-10); s.score-=50; this._pushLog('💼 Quarterly board review: '+u+'% utility. "What are we even paying for?" Budget cut (−€10k).', '#F0857A'); s.headline='LEAKED MEMO: '+P.name+' staff "can\u2019t use our own data"'; }
    }
    // achievements
    const ach=(id,msg,pts)=>{ if(!s.ach[id]){ s.ach[id]=true; s.score+=pts; this._pushLog('🏅 Achievement: '+msg+' (+'+pts+' pts)', '#E7B15C'); } };
    if(s.nodes.filter(n=>n.zone==='origin'||n.zone==='eu').every(n=>n.prot||n.cut)) ach('fort','FORT EUROPA — every EU system defended',150);
    if(s.deflects>=5) ach('tokens','TOKEN ECONOMY — five leaks deflected as worthless',100);
    { const stA=this._stats(); if(s.day>=45 && stA.real<50) ach('ghost','UNTOUCHABLE — day 45 and almost nothing real has leaked',200); }
    this._grow();
    this._insider();
    this._thirdParty();
    this._tickOpp();
    if(s.day>=s.nextOpp && !s.opp) this._spawnOpp();
    this._checkEnd();
    this.forceUpdate();
  }

  _thirdParty(){
    const s=this.sim;
    if(s.nextTp===undefined) s.nextTp=12;
    if(s.day<s.nextTp) return;
    s.nextTp=s.day+7+Math.floor(Math.random()*6);
    const pool=s.nodes.filter(n=>n.state==='clean'&&!n.cut&&n.zone!=='origin'&&n.zone!=='dark');
    if(!pool.length) return;
    const n=pool[Math.floor(Math.random()*pool.length)];
    const rank={empty:0,token:1,blob:2,real:3};
    let worst=null;
    for(const mid of n.adj){ const m=s.byId[mid]; if(m.zone!=='origin'&&m.zone!=='eu') continue; const p=this._payloadFrom(m); if(worst===null||rank[p]>rank[worst]) worst=p; }
    if(worst===null) worst='real';
    n.state='exposed'; n.exposedAt=s.day; n.payload=worst;
    s.pulses.push({from:n.id,to:n.id,t0:performance.now()});
    const what={real:'raw, identifiable records',token:'worthless pseudonymised tokens',blob:'unreadable encrypted blobs',empty:'nothing of value'}[worst];
    this._pushLog('Third-party breach: '+n.label+' was hacked through their own systems. Your copies there leaked as '+what+'.', worst==='real'?'#D5432E':'#A466FF');
    if(!s.lessonsSeen.thirdparty){ s.lessonsSeen.thirdparty=true; s.lesson=this.LESSONS.thirdparty; }
  }
  _utility(){
    const s=this.sim; let num=0, den=0;
    for(const n of s.nodes){ if(n.zone!=='origin' && n.zone!=='eu') continue;
      const u = n.cut ? this.CUT.util : (n.prot ? this.TOOLS[n.prot].util : 1);
      num += n.rec*u; den += n.rec;
    }
    return den?num/den:1;
  }
  _stats(){
    const s=this.sim, P=this.PROFILES[s.profile||'clinic']; let real=0, exposed=0;
    for(const n of s.nodes){ if(n.state==='exposed'){ exposed++; if(n.payload==='real') real += n.rec*P.recMult; } }
    return { real, exposed, frac: real/this.totalRec, spreadPct: Math.round(exposed/s.nodes.length*100) };
  }

  // ---- player actions ----
  _cost(tool, n){ const t=this.TOOLS[tool]; return Math.max(1, Math.round((t.base + n.rec*t.per)*(1-0.04*(this._lvl()-1)))); }
  closeSel(){ 
    this.sim.selNode=null; 
    if (this._selPrevSpeed !== undefined && this._selPrevSpeed !== null) {
      this.setSpeed(this._selPrevSpeed);
      this._selPrevSpeed = null;
    }
    this.forceUpdate(); 
  }
  applyTool(k){
    const s=this.sim, n=s.byId[s.selNode]; if(!n) return;
    if(this._active() >= this._deployMax(this.PROFILES[s.profile])){ this._pushLog('IT team is at maximum deployment capacity.', '#8A86A3'); this.forceUpdate(); return; }
    const cost=this._cost(k, n);
    if(s.budget<cost){ this._pushLog('Not enough budget for '+this.TOOLS[k].name+' on '+n.label+' (€'+cost+'k).', '#8A86A3'); this.forceUpdate(); return; }
    s.budget-=cost; s.spent[k]+=cost; n.deployProt=k; n.deployDays=this.TOOLS[k].time; n.deployTotal=this.TOOLS[k].time; this._xp(10);
    this._pushLog('Started deploying '+this.TOOLS[k].name+' on '+n.label+' (−€'+cost+'k, takes '+n.deployDays+' days).', this.TOOLS[k].ring);
    
    if (['pseudo','synth','anon','remove'].includes(k) && !s.lessonsSeen[k]) {
      s.lessonsSeen[k] = true;
      s.lesson = this.LESSONS[k];
    }
    this.closeSel();
  }
  doCut(){
    const s=this.sim, n=s.byId[s.selNode]; if(!n||n.cut) return;
    if(this._active() >= this._deployMax(this.PROFILES[s.profile])){ this._pushLog('IT team is at maximum deployment capacity.', '#8A86A3'); this.forceUpdate(); return; }
    if(s.budget<this.CUT.cost){ this._pushLog('Not enough budget to isolate '+n.label+' (€'+this.CUT.cost+'k).', '#8A86A3'); this.forceUpdate(); return; }
    s.budget-=this.CUT.cost; n.deployProt='cut'; n.deployDays=this.CUT.time; n.deployTotal=this.CUT.time; this._xp(8);
    this._pushLog('Cutting connections on '+n.label+' (−€'+this.CUT.cost+'k, takes '+n.deployDays+' day).', this.CUT.ring);
    for(const mid of n.adj){ const m=s.byId[mid]; m.adj=m.adj.filter(x=>x!==n.id); }
    n.adj=[];
    this._pushLog(n.label+' isolated — every connection cut (−€'+this.CUT.cost+'k). Spread through it stops, but the business just lost it.'+(n.state==='exposed'&&n.payload==='real'?' Copies already elsewhere keep spreading.':''), '#D5432E');
    if(!s.cutTaunted){ s.cutTaunted=true; this._pushLog('📟 GLASS VIPER: cutting cables? the copies I already have don\u2019t need cables.', '#CCAEFC'); }
    this.forceUpdate();
  }
  onCanvasClick(ev){
    const s=this.sim; if(!s || !s.running || this.state.screen!=='playing') return;
    const rect=this.canvas.getBoundingClientRect();
    const kx=rect.width?this.canvas.clientWidth/rect.width:1, ky=rect.height?this.canvas.clientHeight/rect.height:1;
    const cx=(ev.clientX-rect.left)*kx, cy=(ev.clientY-rect.top)*ky;
    let hit=null, best=1e9;
    for(const n of s.nodes){ const [x,y]=this._px(n); const d=(x-cx)*(x-cx)+(y-cy)*(y-cy); if(d<30*30 && d<best){ best=d; hit=n; } }
    if(!hit) return;
    if(hit.zone!=='origin' && hit.zone!=='eu'){
      if(!s.lessonsSeen.outofreach){ s.lessonsSeen.outofreach=true; s.lesson=this.LESSONS.outofreach; }
      else this._pushLog(hit.label+' is outside your jurisdiction — nothing to deploy.', '#8A86A3');
      this.forceUpdate(); return;
    }
    if (s.selNode === hit.id) {
      this.closeSel();
    } else {
      if (!s.selNode) {
        this._selPrevSpeed = s.speed;
        this.setSpeed(0);
      }
      s.selNode = hit.id;
      this.forceUpdate();
    }
  }
  doWipe(){
    const s=this.sim; if(!s.running) return;
    if(s.day<s.wipeReadyDay){ this._pushLog('Incident response team still busy ('+(s.wipeReadyDay-s.day)+'d).', '#8A86A3'); this.forceUpdate(); return; }
    if(s.budget<this.WIPE_COST){ this._pushLog('Not enough budget for a response sweep (€'+this.WIPE_COST+'k).', '#8A86A3'); this.forceUpdate(); return; }
    s.budget-=this.WIPE_COST; s.wipeReadyDay=s.day+this.WIPE_CD;
    const inEU=s.nodes.filter(n=>n.state==='exposed' && (n.zone==='origin'||n.zone==='eu')).slice(0,3);
    for(const n of inEU){ n.state='clean'; n.payload=null; }
    const abroad=s.nodes.some(n=>n.state==='exposed' && n.payload==='real' && n.zone!=='origin' && n.zone!=='eu');
    this._pushLog('Response sweep — '+inEU.length+' EU systems cleaned (−€'+this.WIPE_COST+'k).', '#7FA8EC');
    if(abroad) this._pushLog('Real copies already abroad could not be recalled.', '#D5432E');
    this.forceUpdate();
  }

  // ---- opportunities (defender dilemmas) ----
  OPPS = [
    {id:'leaver', title:'A senior data engineer resigns', desc:'Offboarding normally takes a week — their exports and tokens stay live meanwhile.', a:{label:'Fast offboarding · €6k', cost:6}, b:{label:'Let HR handle it'}, risk:{zones:['origin'],n:1,scr:6,msg:'The leaver\u2019s stale credentials were used to pull data.'}},
    {id:'zeroday', title:'Zero-day disclosed in a core SaaS tool', desc:'The vendor\u2019s patch is a week out. An emergency mitigation is possible — tonight, at a price.', a:{label:'Emergency mitigation · €9k', cost:9}, b:{label:'Wait for the patch'}, risk:{zones:['eu'],n:2,scr:8,msg:'The zero-day was exploited before the patch landed.'}},
    {id:'phish', title:'Audit season is drowning your staff', desc:'Inboxes are chaos — perfect phishing weather. A rapid awareness blitz could inoculate them.', a:{label:'Awareness blitz · €5k', cost:5}, b:{label:'Trust the spam filter'}, risk:{zones:['origin','latam'],n:1,scr:6,msg:'A phishing wave landed during audit season.'}},
    {id:'migrate', title:'IT wants to migrate the data lake tonight', desc:'Monitoring will be down during the sync window. Postponing costs the project money.', a:{label:'Postpone & monitor · €7k', cost:7}, b:{label:'Migrate as planned'}, risk:{zones:['na','apac'],n:1,scr:7,msg:'Something slipped into the unmonitored migration sync.'}},
    {id:'insider', title:'A passed-over admin is talking to brokers', desc:'HR flags the risk. A retention counter-offer would cost money — ignoring it might cost more.', a:{label:'Counter-offer · €8k', cost:8}, b:{label:'Ignore the rumour'}, risk:{boost:8,scr:0,msg:'The insider went quiet — and the breach suddenly moves faster.'}},
    {id:'cloud', title:'Credential-stuffing attack on your cloud', desc:'Automated logins are hammering your EU cloud region with leaked passwords. MFA hardening can be rushed through tonight.', a:{label:'Rush MFA hardening · €8k', cost:8}, b:{label:'Ride it out'}, risk:{zones:['eu'],n:2,scr:8,msg:'Stuffed credentials worked — attackers walked into your cloud region.'}},
    {id:'shodan', title:'A client database is exposed to the internet', desc:'A pentest flags a misconfigured client DB visible on public scanners. Fixing it tonight means downtime.', a:{label:'Emergency reconfig · €6k', cost:6}, b:{label:'Schedule for next sprint'}, risk:{zones:['origin'],n:1,scr:10,msg:'Scrapers found the exposed client DB before your next sprint did.'}},
    {id:'ransom', title:'Ransomware note found on a test server', desc:'Probably a scout for a bigger crew. A threat hunt would pull your best people off everything else.', a:{label:'Threat hunt · €10k', cost:10}, b:{label:'Wipe the server, move on'}, risk:{zones:['origin','eu'],n:2,scr:6,msg:'The scout wasn\u2019t alone — data was exfiltrated before the ransomware fired.'}},
    {id:'keyleak', needs:(s)=>s.nodes.some(n=>n.prot==='enc'), title:'A decryption key surfaced in a public repo', desc:'A developer committed key material to a public repository. Rotating every key means downtime tonight.', a:{label:'Rotate all keys · €7k', cost:7}, b:{label:'Assume it\u2019s stale'}, risk:{breakProt:'enc',scr:5,msg:'The key was live — one encrypted store is now readable.'}},
    {id:'deal_ad', needs:(s)=>!s.signed.deal_ad, title:'💰 Ad-tech giant wants your customer feed', desc:'€30k upfront for a live feed of customer data into their US exchange. Legal shrugs: "depends what\u2019s in the feed." The pipe would be permanent.', a:{label:'Sign the deal · +€30k', gain:30, deal:{from:'c5',to:'n4'}}, b:{label:'Decline politely'}},
    {id:'deal_ai', needs:(s)=>!s.signed.deal_ai, title:'💰 AI lab offers a research partnership', desc:'An APAC AI lab pays €22k for a training feed from your core records. Their security posture is… unaudited.', a:{label:'Sign the deal · +€22k', gain:22, deal:{from:'c1',to:'p2'}}, b:{label:'Decline politely'}},
    {id:'state_fund', title:'State Funding Granted', desc:'A government cybersecurity initiative has awarded you an emergency grant to bolster defenses.', a:{label:'Accept Grant · +€25k', gain:25}, b:{label:'Ignore'}},
    {id:'force_majeure', title:'Force Majeure Incident', desc:'A massive regional internet outage paused data transfers. The resulting insurance payout boosts your budget, though the network rests.', a:{label:'Claim Payout · +€15k', gain:15}, b:{label:'Dismiss'}},
  ];
  _spawnOpp(){
    const s=this.sim;
    const pool=this.OPPS.filter(o=>o.id!==s.lastOpp && (!o.needs||o.needs(s)));
    const o=pool[Math.floor(Math.random()*pool.length)];
    s.lastOpp=o.id; s.opp={...o, until:s.day+4};
  }
  _tickOpp(){
    const s=this.sim;
    if(s.opp && s.day>=s.opp.until){
      const o=s.opp; s.opp=null; this._oppRisk(o);
      let oppDelay = 6+Math.floor(Math.random()*5);
      if(this.state.difficulty === 'easy') oppDelay += 4;
      if(this.state.difficulty === 'hard') oppDelay -= 3;
      s.nextOpp=s.day+oppDelay;
    }
  }
  oppA(){ const s=this.sim,o=s.opp; if(!o) return;
    if(o.a.cost){ if(s.budget<o.a.cost){ this._pushLog('Can\u2019t afford it — €'+o.a.cost+'k needed.', '#8A86A3'); this.forceUpdate(); return; } s.budget-=o.a.cost; }
    if(o.a.gain) s.budget+=o.a.gain;
    if(o.a.deal){
      const x=s.byId[o.a.deal.from], y=s.byId[o.a.deal.to];
      if(x&&y){ if(!x.cut&&!y.cut){ x.adj.push(y.id); y.adj.push(x.id); s.extraEdges.push([x.id,y.id]); }
        s.signed[o.id]=true;
        this._pushLog('Deal signed: live data feed '+x.label+' → '+y.label+' (+€'+o.a.gain+'k). That pipe is now a permanent spread vector — what flows through it is up to your defences.', '#E7B15C');
        s.headline='BUSINESS WIRE: '+this.PROFILES[s.profile].name+' inks data partnership'; }
    } else if(o.a.cost){ this._xp(15); this._pushLog('Risk neutralised: '+o.title.toLowerCase()+' (−€'+o.a.cost+'k).', '#5FD3A6'); }
    s.opp=null;
    let oppDelay = 6+Math.floor(Math.random()*5);
    if(this.state.difficulty === 'easy') oppDelay += 4;
    if(this.state.difficulty === 'hard') oppDelay -= 3;
    s.nextOpp=s.day+oppDelay;
    this.forceUpdate(); }
  oppB(){ const s=this.sim,o=s.opp; if(!o) return; s.opp=null;
    let oppDelay = 6+Math.floor(Math.random()*5);
    if(this.state.difficulty === 'easy') oppDelay += 4;
    if(this.state.difficulty === 'hard') oppDelay -= 3;
    s.nextOpp=s.day+oppDelay; this._oppRisk(o); this.forceUpdate(); }
  _oppRisk(o){
    const s=this.sim, r=o.risk;
    if(!r){ this._pushLog('You passed on: '+o.title.toLowerCase().replace('💰 ','')+'.', '#8A86A3'); return; }
    if(Math.random()<0.3){ this._pushLog('You got lucky — '+o.title.toLowerCase()+' passed without incident.', '#8A86A3'); return; }
    if(r.boost){ s.insiderBoostUntil=s.day+r.boost; }
    if(r.breakProt){ const pool=s.nodes.filter(n=>n.prot===r.breakProt); if(pool.length){ const n=pool[Math.floor(Math.random()*pool.length)]; n.prot=null; this._pushLog(n.label+' lost its encryption — it leaks real data until you redeploy.', '#D5432E'); } }
    if(r.zones){
      const pool=s.nodes.filter(n=>n.state==='clean' && r.zones.includes(n.zone));
      for(let i=0;i<r.n && pool.length;i++){ const m=pool.splice(Math.floor(Math.random()*pool.length),1)[0]; const src=s.nodes.find(x=>x.state==='exposed'); this._infect(m, src||null); }
    }
    s.scr=Math.min(100, s.scr+(r.scr||0));
    this._pushLog(r.msg, '#D5432E');
  }

  _checkEnd(){
    const s=this.sim, st=this._stats();
    // Removed bankrupt condition to allow negative budget play
    if(s.scr>=100){ this._end('shutdown'); return; }
    if(st.frac>=0.45){ this._end('catastrophe'); return; }
    if(s.day>=this.DAYMAX){ this._end('survived'); }
  }
  _end(kind){ clearInterval(this._iv); this.sim.running=false; this.sim.speed=0; this._endKind=kind; this.setState({screen:'over'}); }

  _chip(on){ return 'padding:7px 13px;border-radius:999px;font-size:12px;cursor:pointer;font-family:inherit;border:1px solid '+(on?'#A466FF':'rgba(255,255,255,.14)')+';background:'+(on?'rgba(130,47,255,.25)':'transparent')+';color:'+(on?'#fff':'var(--neutral-300)')+';'; }
  _fmt(k){ if(k>=1000) return (k/1000).toFixed(k>=10000?0:1)+'M'; return Math.round(k)+'k'; }

  _outcome(){
    const s=this.sim, st=this._stats(), util=Math.round(this._utility()*100), kind=this._endKind;
    const spent=s.spent; const top=Object.keys(spent).sort((a,b)=>spent[b]-spent[a])[0];
    const anySpend=spent.pseudo+spent.enc+spent.lock+spent.anon>0;
    const strat = !anySpend?'none':top;
    const stratLine = {
      none:'You deployed nothing. Every copy that left was real, identifiable data — the default state of unprotected information.',
      pseudo:'Your lead defence was pseudonymisation at the source — so downstream copies, wherever they travelled, were realistic tokens. The leak lost its value while the business kept its data.',
      enc:'You leaned on encryption. Strong at rest — but your teams worked around unusable blobs all quarter, and every encrypted store is one key-slip from total exposure.',
      lock:'You leaned on access lockdown. It slowed the intruder and your own teams equally — and whatever did get out was still real data.',
      anon:'You leaned on anonymisation. Nothing real could leak from those systems — because nothing useful remained in them.',
    }[strat];
    const O={
      bankrupt:{accent:'#F0857A',border:'rgba(213,67,46,.5)',kicker:'☠ insolvent',title:'The fines ate you alive.',
        lines:['Between GDPR penalties, the daily bleed from breached systems and crisis spending, the money ran out on day '+s.day+'.',stratLine,'Cheap-looking protection is expensive when the leak is real. Protection that keeps data usable pays for itself.']},
      shutdown:{accent:'#F0857A',border:'rgba(213,67,46,.5)',kicker:'☠ processing suspended',title:'The regulator pulled the plug.',
        lines:['Scrutiny hit 100% — real, identifiable records kept surfacing and processing was suspended on day '+s.day+'.',stratLine,'Regulators don\u2019t punish breaches; they punish breaches of REAL data. Tokens don\u2019t make headlines.']},
      catastrophe:{accent:'#F0857A',border:'rgba(213,67,46,.5)',kicker:'☠ total loss of control',title:'It\u2019s everywhere. And it\u2019s real.',
        lines:[this._fmt(st.real)+' real records reached '+st.spreadPct+'% of the global network — brokers, AI labs, dark markets. There is no recall button.',stratLine,'Once copies cross your border, the only thing you still control is what they contained when they left.']},
      survived:(()=>{
        const grade = st.frac<0.05&&util>=75?'A':(st.frac<0.15&&util>=50?'B':'C');
        if(grade==='A') return {accent:'#CCAEFC',border:'rgba(164,102,255,.6)',kicker:'🛡️ grade A — a non-event',title:'The breach came. Nobody cared.',
          lines:[this.DAYMAX+' days, '+st.spreadPct+'% of the network reached — and only '+this._fmt(st.real)+' real records exposed, with '+util+'% of business utility intact.',stratLine,'That\u2019s the whole argument: you can\u2019t stop copies. You can decide what they contain.']};
        if(grade==='B') return {accent:'#E7B15C',border:'rgba(201,122,30,.5)',kicker:'grade B — survived, scarred',title:'You made it. Barely.',
          lines:[this._fmt(st.real)+' real records got out and utility ended at '+util+'% — survivable, but the audit will sting.',stratLine,'Compare runs: protecting the biggest sources FIRST, with protection that keeps data usable, changes everything.']};
        return {accent:'#E7B15C',border:'rgba(201,122,30,.5)',kicker:'grade C — lucky',title:'Survived on the clock, not on merit.',
          lines:[this._fmt(st.real)+' real records exposed and '+util+'% utility. The clock saved you, not the strategy.',stratLine,'Try again: deploy at the source, early, and pick protection your business can live with.']};
      })(),
    }[kind];
    return O||{accent:'#fff',border:'rgba(255,255,255,.2)',kicker:'',title:'',lines:[]};
  }

  // ---- canvas ----
  _zoom = 1; _panX = 0; _panY = 0; _isDrag = false; _lastX = 0; _lastY = 0;
  canvasRef(el){
    if(el && el!==this.canvas){
      this.canvas=el; this._ctx=null; this._lastW=null; this._lastH=null;
      if(!this._wheelL) {
        this._wheelL = (e) => {
          e.preventDefault();
          const zoomFactor = Math.exp(-e.deltaY * 0.005);
          const newZoom = Math.max(0.3, Math.min(3, this._zoom * zoomFactor));
          this._zoom = newZoom;
          this.forceUpdate();
        };
        this._mdL = (e) => { this._isDrag = true; this._lastX = e.clientX; this._lastY = e.clientY; };
        this._mmL = (e) => {
          if(!this._isDrag) return;
          this._panX += e.clientX - this._lastX;
          this._panY += e.clientY - this._lastY;
          this._lastX = e.clientX; this._lastY = e.clientY;
          if(this.sim && this.sim.selNode) this.forceUpdate();
        };
        this._muL = () => { this._isDrag = false; };
      }
      el.addEventListener('wheel', this._wheelL, {passive: false});
      el.addEventListener('mousedown', this._mdL);
      window.addEventListener('mousemove', this._mmL);
      window.addEventListener('mouseup', this._muL);
      this._resize();
    } else if(el){ this._resize(); } else {
      if (this.canvas && this._wheelL) {
        this.canvas.removeEventListener('wheel', this._wheelL);
        this.canvas.removeEventListener('mousedown', this._mdL);
        window.removeEventListener('mousemove', this._mmL);
        window.removeEventListener('mouseup', this._muL);
      }
      this.canvas=null;
    }
  }
  _resize(){
    const c=this.canvas; if(!c||!c.parentElement) return;
    const dpr=Math.min(2, window.devicePixelRatio||1);
    const w=c.clientWidth, h=c.clientHeight;
    if(!w||!h) return;
    if(this._lastW===w && this._lastH===h && this._ctx) return;
    this._lastW=w; this._lastH=h;
    c.width=Math.round(w*dpr); c.height=Math.round(h*dpr);
    this._ctx=c.getContext('2d'); this._ctx.setTransform(dpr,0,0,dpr,0,0); this._w=w; this._h=h;
  }
  _px(n){
    const m=40;
    const bx = m + n.x*(this._w-2*m);
    const by = m + n.y*(this._h-2*m);
    const z = this._zoom || 1;
    const cx = this._w/2, cy = this._h/2;
    return [
      cx + (bx - cx) * z + (this._panX || 0),
      cy + (by - cy) * z + (this._panY || 0)
    ];
  }
  _fill(n){
    if(n.state!=='exposed') return null;
    if(n.payload==='real') return '#D5432E';
    if(n.payload==='token') return '#A466FF';
    if(n.payload==='blob') return '#2E6FD5';
    return '#6B6784';
  }
  _draw(t){
    this._resize();
    const ctx=this._ctx, s=this.sim; if(!ctx||!s||!this._w) return;
    ctx.clearRect(0,0,this._w,this._h);
    // subtle backdrop grid + vignette
    ctx.strokeStyle='rgba(139,134,163,.045)'; ctx.lineWidth=1;
    const z = this._zoom || 1;
    const px = this._panX || 0;
    const py = this._panY || 0;
    const gStep = 44 * z;
    const gOffX = (px + this._w/2 * (1-z)) % gStep;
    const gOffY = (py + this._h/2 * (1-z)) % gStep;
    const startX = gOffX < 0 ? gOffX + gStep : gOffX;
    const startY = gOffY < 0 ? gOffY + gStep : gOffY;
    for(let gx=startX;gx<this._w;gx+=gStep){ ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,this._h); ctx.stroke(); }
    for(let gy=startY;gy<this._h;gy+=gStep){ ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(this._w,gy); ctx.stroke(); }
    
    const vg=ctx.createRadialGradient(this._w/2,this._h/2,Math.min(this._w,this._h)/3,this._w/2,this._h/2,Math.max(this._w,this._h)/1.05);
    vg.addColorStop(0,'rgba(13,12,22,0)'); vg.addColorStop(1,'rgba(13,12,22,.5)');
    ctx.fillStyle=vg; ctx.fillRect(0,0,this._w,this._h);
    ctx.font='10px "IBM Plex Mono", monospace'; ctx.textAlign='center';
    
    const cx = this._w/2, cy = this._h/2;
    for(const rg of this.REGIONS){ 
      const bx = 40+rg.x*(this._w-80), by = 40+rg.y*(this._h-80);
      const x = cx + (bx - cx) * z + px;
      const y = cy + (by - cy) * z + py;
      ctx.fillStyle='rgba(139,134,163,.45)'; ctx.fillText(rg.label, x, y);
      ctx.strokeStyle='rgba(139,134,163,.18)'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(x-52*z,y+5*z); ctx.lineTo(x+52*z,y+5*z); ctx.stroke();
    }
    for(const [a,b] of this.EDGES.concat(s.extraEdges||[])){ const na=s.byId[a], nb=s.byId[b]; const [ax,ay]=this._px(na),[bx,by]=this._px(nb);
      const severed = na.cut || nb.cut;
      const both = !severed && na.state==='exposed' && nb.state==='exposed';
      ctx.beginPath(); ctx.moveTo(ax,ay); ctx.lineTo(bx,by);
      if(severed) ctx.setLineDash([2,6]);
      ctx.strokeStyle = severed ? 'rgba(213,67,46,.12)' : (both ? 'rgba(213,67,46,.3)' : 'rgba(255,255,255,.07)');
      ctx.lineWidth = both ? 1.4 : 1; ctx.stroke(); ctx.setLineDash([]);
    }
    const now=performance.now();
    s.pulses = s.pulses.filter(p=> now-p.t0 < 700);
    for(const p of s.pulses){ const na=s.byId[p.from], nb=s.byId[p.to]; if(!na||!nb) continue;
      const k=Math.min(1,(now-p.t0)/700); const [ax,ay]=this._px(na),[bx,by]=this._px(nb);
      const x=ax+(bx-ax)*k, y=ay+(by-ay)*k;
      ctx.beginPath(); ctx.arc(x,y,3.5,0,7); ctx.fillStyle='#F0857A'; ctx.shadowColor='#D5432E'; ctx.shadowBlur=10; ctx.fill(); ctx.shadowBlur=0;
    }
    for(const n of s.nodes){ const [x,y]=this._px(n); const r=6+Math.min(13,n.rec/40); const col=this._fill(n);
      if(col){ const pulse = 1 + (n.exposedAt===s.day?0.5:0)*(0.5+0.5*Math.sin(now/150));
        ctx.beginPath(); ctx.arc(x,y,r,0,7); ctx.fillStyle=col; ctx.shadowColor=col; ctx.shadowBlur=(n.payload==='real'?18:9)*pulse; ctx.fill(); ctx.shadowBlur=0;
        ctx.beginPath(); ctx.arc(x,y,r,0,7); ctx.strokeStyle='rgba(255,255,255,.5)'; ctx.lineWidth=1; ctx.stroke();
      } else {
        ctx.beginPath(); ctx.arc(x,y,r,0,7); ctx.fillStyle='rgba(255,255,255,.03)'; ctx.fill();
        ctx.strokeStyle='rgba(139,134,163,.6)'; ctx.lineWidth=1.5; ctx.stroke();
      }
      if(n.prot){ ctx.beginPath(); ctx.arc(x,y,r+4.5,0,7); ctx.strokeStyle=this.TOOLS[n.prot].ring; ctx.lineWidth=2; ctx.stroke(); }
      if(n.deployDays > 0){
        ctx.beginPath();
        const p = 1 - (n.deployDays / n.deployTotal);
        ctx.arc(x,y,r+4.5, -Math.PI/2, -Math.PI/2 + p * 2*Math.PI);
        const ring = n.deployProt==='cut' ? '#D5432E' : this.TOOLS[n.deployProt].ring;
        ctx.strokeStyle=ring; ctx.lineWidth=3; ctx.stroke();
        ctx.beginPath(); ctx.arc(x,y,r+4.5,0,7); ctx.strokeStyle='rgba(255,255,255,0.1)'; ctx.lineWidth=1; ctx.stroke();
      }
      if(n.cut){ ctx.beginPath(); ctx.setLineDash([3,3]); ctx.arc(x,y,r+8,0,7); ctx.strokeStyle='#D5432E'; ctx.lineWidth=1.6; ctx.stroke(); ctx.setLineDash([]); }
      if(s.selNode===n.id){ ctx.beginPath(); ctx.arc(x,y,r+9,0,7); ctx.strokeStyle='#fff'; ctx.lineWidth=1.4; ctx.stroke(); }
      const deployable = s.running && !n.prot && !n.cut && !(n.deployDays>0) && (n.zone==='origin'||n.zone==='eu');
      if(deployable){ ctx.beginPath(); ctx.setLineDash([4,4]); ctx.lineDashOffset=-now/60;
        ctx.arc(x,y,r+5,0,7); ctx.strokeStyle='rgba(204,174,252,.5)'; ctx.lineWidth=1.2; ctx.stroke(); ctx.setLineDash([]); }
      ctx.fillStyle='rgba(220,220,235,.72)'; ctx.font='10px "IBM Plex Mono", monospace'; ctx.textAlign='center';
      ctx.fillText(n.label, x, y+r+12);
    }
    s.floats=(s.floats||[]).filter(f=>now-f.t0<1300);
    for(const f of s.floats){ const k=(now-f.t0)/1300; const [x,y]=this._px(f);
      ctx.globalAlpha=1-k; ctx.font='bold 11px "IBM Plex Mono", monospace'; ctx.textAlign='center';
      ctx.fillStyle=f.color; ctx.fillText(f.text, x, y-20-k*24); ctx.globalAlpha=1;
    }
  }

  renderVals(){
    const screen=this.state.screen;
    const s=this.sim || {day:0,budget:0,speed:0,scr:0,deploysLeft:0,tool:'pseudo',log:[],spent:{}};
    const P=this.PROFILES[s.profile]||this.PROFILES.clinic;
    const st=this.sim&&s.profile?this._stats():{real:0,exposed:0,frac:0,spreadPct:0};
    const util=this.sim?Math.round(this._utility()*100):100;
    const sel=(v)=>'padding:6px 11px;border-radius:8px;font-family:var(--font-mono);font-size:13px;cursor:pointer;border:1px solid '+(s.speed===v?'#A466FF':'rgba(255,255,255,.15)')+';background:'+(s.speed===v?'rgba(130,47,255,.25)':'transparent')+';color:'+(s.speed===v?'#fff':'var(--neutral-300)')+';';
    const out=screen==='over'?this._outcome():{accent:'#fff',border:'rgba(255,255,255,.2)',kicker:'',title:'',lines:[]};
    const toolCard=(k)=>{ const t=this.TOOLS[k]; return { icon:t.icon, name:t.name, desc:t.desc, costLabel:'from €'+Math.round(t.base+110*t.per)+'k' }; };
    const wipeReady=this.sim && s.day>=s.wipeReadyDay;
    const selN = this.sim && s.selNode ? s.byId[s.selNode] : null;
    const selPos = selN && this._w ? this._px(selN) : [0,0];
    const optStyle=(ok,ring)=>'display:flex;gap:9px;align-items:center;width:100%;padding:8px 10px;border-radius:8px;font-family:inherit;font-size:13px;font-weight:500;border:1px solid '+(ok?ring:'rgba(255,255,255,.1)')+';background:rgba(255,255,255,.03);color:'+(ok?'#fff':'var(--neutral-500)')+';cursor:'+(ok?'pointer':'not-allowed')+';opacity:'+(ok?'1':'.55')+';';
    const selOpts=[];
    if(selN){
      if(!selN.cut){
        for(const k of ['pseudo','synth','enc','lock','anon','remove']){ if(k===selN.prot) continue; const t=this.TOOLS[k]; const cost=this._cost(k,selN); const ok=s.budget>=cost&&this._active()<this._deployMax(this.PROFILES[s.profile])&&!(selN.deployDays>0);
          selOpts.push({icon:t.icon,name:(selN.prot?'Switch to ':'')+t.name,cost:'€'+cost+'k',onClick:()=>this.applyTool(k),style:optStyle(ok,t.ring)}); }
      }
      if(!selN.cut){ const ok=s.budget>=this.CUT.cost&&this._active()<this._deployMax(this.PROFILES[s.profile])&&!(selN.deployDays>0);
        selOpts.push({icon:this.CUT.icon,name:this.CUT.name,cost:'€'+this.CUT.cost+'k',onClick:()=>this.doCut(),style:optStyle(ok,this.CUT.ring)}); }
    }
    return {
      screen, isStart:screen==='start', isPlaying:screen==='playing', isOver:screen==='over',
      coIcon:P.icon, coName:P.name,
      day:s.day, dayMax:this.DAYMAX,
      budget:Math.round(s.budget),
      netLine:(()=>{ const net=Math.round((P.income*(util/100)-(s.breachCost||0))*10)/10; return (net>=0?'+':'\u2212')+'\u20ac'+Math.abs(net)+'k'; })(),
      netColor:(P.income*(util/100)-(s.breachCost||0))>=0?'#5FD3A6':'#F0857A',
      recVal:this._fmt(st.real), recPct:Math.min(100, st.frac/0.45*100),
      utilVal:util, utilPct:util,
      scrVal:Math.round(s.scr||0), scrPct:s.scr||0,
      score:Math.round(s.score||0),
      hasNews:screen==='playing'&&!!s.headline, headline:s.headline||'',
      spreadLine:'Breach reached '+st.exposed+' / '+(this.sim?s.nodes.length:this.NODES.length)+' systems worldwide',
      btnPause:sel(0), btn1x:sel(1), btn2x:sel(2),
      tools:['pseudo','synth','enc','lock','anon','remove'].map(toolCard).concat([{icon:this.CUT.icon,name:this.CUT.name,desc:this.CUT.desc,costLabel:'€'+this.CUT.cost+'k'}]),
      hasSel:screen==='playing'&&!!selN,
      selLabel:selN?selN.label:'', 
      selSub:selN?(selN.rec+'k records · '+(selN.cut?'isolated':(selN.prot?('protected: '+this.TOOLS[selN.prot].name):(selN.state==='exposed'?'BREACHED — protection won\u2019t recall stolen copies':'unprotected')))):'',
      selX:Math.round(Math.max(10, Math.min(selPos[0]+16, (this._w||600)-300))),
      selY:Math.round(Math.max(10, Math.min(selPos[1]-30, (this._h||400)-240))),
      selOpts,
      selFoot:selN?(selN.cut?'This system is fully isolated.':(selN.deployDays>0?'Deployment in progress: '+selN.deployDays+' days remaining.':(selN.prot?'Switching replaces the current defence at full cost.':''))):'',
      closeSel:()=>this.closeSel(),
      deploysLine:'Active IT tasks: '+(this.sim&&s.profile?this._active():0)+'/'+(this.sim&&s.profile?this._deployMax(P):(P.deploys||0)),
      deployColor:(this.sim&&s.profile&&this._active()<this._deployMax(P))?'#5FD3A6':'#F0857A',
      doWipe:()=>this.doWipe(),
      teamLvl:(()=>this._lvl())(),
      difficulty: this.state.difficulty,
      setDifficulty: (v: string) => this.setState({difficulty: v}),
      diffOpts: [
        {id:'easy', name:'Easy'},
        {id:'normal', name:'Normal'},
        {id:'hard', name:'Hard'}
      ],
      teamTitle:this.TEAM_TITLES[this._lvl()-1],
      xpPct:(()=>{ const l=this._lvl(); if(l>=5) return 100; const x=s.xp||0; return Math.round((x-this.XP_T[l-1])/(this.XP_T[l]-this.XP_T[l-1])*100); })(),
      teamPerks:(()=>{ const l=this._lvl(); return 'perks: −'+(4*(l-1))+'% deploy costs · insider detection '+(10+13*(l-1))+'%'+(l>=3?' · +1 concurrent':'')+(l>=5?' · +1 more':''); })(),
      doTrain:()=>this.doTrain(),
      trainReady:this.sim&&s.day>=(s.trainReadyDay||0),
      trainLabel:this.sim&&s.day<(s.trainReadyDay||0)?('training '+(s.trainReadyDay-s.day)+'d'):'📚 Train · €12k',
      trainStyle:'padding:5px 10px;border-radius:8px;font-family:var(--font-mono);font-size:11px;border:1px solid rgba(95,211,166,.45);background:rgba(31,166,114,.12);color:#9FE8C9;cursor:'+(this.sim&&s.day>=(s.trainReadyDay||0)?'pointer':'not-allowed')+';opacity:'+(this.sim&&s.day>=(s.trainReadyDay||0)?'1':'.5')+';',
      wipeLabel:wipeReady?('€'+this.WIPE_COST+'k'):('ready in '+Math.max(0,(s.wipeReadyDay||0)-s.day)+'d'),
      wipeStyle:'display:flex;gap:11px;align-items:flex-start;width:100%;text-align:left;padding:10px 12px;border-radius:10px;font-family:inherit;margin-bottom:8px;border:1px dashed rgba(127,168,236,.5);background:rgba(46,111,213,.08);color:#fff;cursor:'+(wipeReady?'pointer':'not-allowed')+';opacity:'+(wipeReady?'1':'.55')+';',
      log:(s.log||[]).map(e=>({...e})),
      hasOpp:screen==='playing'&&!!s.opp,
      oppTitle:s.opp?s.opp.title:'', oppDesc:s.opp?s.opp.desc:'',
      oppDaysLeft:s.opp?Math.max(0,s.opp.until-s.day):0,
      oppALabel:s.opp?s.opp.a.label:'', oppBLabel:s.opp?s.opp.b.label:'',
      oppAStyle:s.opp?('padding:8px 14px;border-radius:8px;font-family:inherit;font-size:13px;font-weight:500;cursor:pointer;border:1px solid '+(s.budget>=s.opp.a.cost?'#5FD3A6':'rgba(255,255,255,.15)')+';background:'+(s.budget>=s.opp.a.cost?'rgba(31,166,114,.2)':'transparent')+';color:'+(s.budget>=s.opp.a.cost?'#9FE8C9':'var(--neutral-500)')+';'):'',
      oppBStyle:'padding:8px 14px;border-radius:8px;font-family:inherit;font-size:13px;cursor:pointer;border:1px solid rgba(255,255,255,.18);background:transparent;color:var(--neutral-300);',
      oppA:()=>this.oppA(), oppB:()=>this.oppB(),
      hasLesson:screen==='playing'&&!!s.lesson,
      lessonTitle:s.lesson?s.lesson.t:'', lessonDesc:s.lesson?s.lesson.d:'',
      dismissLesson:()=>this.dismissLesson(),
      oAccent:out.accent, oBorder:out.border, oKicker:out.kicker, oTitle:out.title, oLines:out.lines,
      canvasRef:(el)=>this.canvasRef(el), onCanvasClick:(e)=>this.onCanvasClick(e),
      pickClinic:()=>this.start('clinic'), pickInsurer:()=>this.start('insurer'), pickEnterprise:()=>this.start('enterprise'), pickBank:()=>this.start('bank'),
      isCustom:this.state.custom, toggleCustom:()=>this.setState({custom:!this.state.custom}),
      isHelp:!!this.state.help,
      openHelp:()=>{ if(this.sim&&this.sim.running){ this._helpPrevSpeed=this.sim.speed; this.setSpeed(0); } this.setState({help:true}); },
      closeHelp:()=>{ this.setState({help:false}); if(this.sim&&this.sim.running&&this._helpPrevSpeed){ this.setSpeed(this._helpPrevSpeed); this._helpPrevSpeed=null; } },
      cName:this.state.cName, setCName:(e)=>this.setState({cName:e.target.value}),
      cBudget:this.state.cBudget, setCBudget:(e)=>this.setState({cBudget:+e.target.value}),
      cDeploys:this.state.cDeploys, setCDeploys:(e)=>this.setState({cDeploys:+e.target.value}),
      iconOpts:['🚀','🏭','🛒','📱','⚡','🎮'].map(ic=>({ic,onClick:()=>this.setState({cIcon:ic}),style:'font-size:20px;padding:7px 11px;border-radius:9px;cursor:pointer;font-family:inherit;border:1px solid '+(this.state.cIcon===ic?'#A466FF':'rgba(255,255,255,.14)')+';background:'+(this.state.cIcon===ic?'rgba(130,47,255,.25)':'transparent')+';'})),
      sectorOpts:[['clinic','Healthcare'],['insurer','Insurance'],['bank','Finance'],['enterprise','Tech / retail']].map(([k,l])=>({label:l,onClick:()=>this.setState({cSector:k}),style:this._chip(this.state.cSector===k)})),
      sensOpts:[['low','Low'],['med','Medium'],['high','Highly sensitive']].map(([k,l])=>({label:l,onClick:()=>this.setState({cSens:k}),style:this._chip(this.state.cSens===k)})),
      sizeOpts:[['small','Small'],['mid','Mid-size'],['large','Multinational']].map(([k,l])=>({label:l,onClick:()=>this.setState({cSize:k}),style:this._chip(this.state.cSize===k)})),
      startCustom:()=>this.startCustom(),
      setPause:()=>this.setSpeed(0), set1x:()=>this.setSpeed(1), set2x:()=>this.setSpeed(2), restart:()=>this.restart(),
    };
  }
}
