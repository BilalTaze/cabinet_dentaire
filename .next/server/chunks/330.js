exports.id=330,exports.ids=[330],exports.modules={6157:(e,s,t)=>{Promise.resolve().then(t.bind(t,4452)),Promise.resolve().then(t.t.bind(t,9404,23)),Promise.resolve().then(t.bind(t,3758)),Promise.resolve().then(t.bind(t,1329)),Promise.resolve().then(t.bind(t,3102))},6085:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},4806:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,9404,23))},3758:(e,s,t)=>{"use strict";t.d(s,{Providers:()=>T});var n=t(326),i=t(7577),r=t(2659),a=t(4976),o=t(5813),l=t(1223);let u=o.zt;o.fC,o.xz,i.forwardRef(({className:e,sideOffset:s=4,...t},i)=>n.jsx(o.VY,{ref:i,sideOffset:s,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t})).displayName=o.VY.displayName;let d=0,c=new Map,p=e=>{if(c.has(e))return;let s=setTimeout(()=>{c.delete(e),f({type:"REMOVE_TOAST",toastId:e})},1e6);c.set(e,s)},x=(e,s)=>{switch(s.type){case"ADD_TOAST":return{...e,toasts:[s.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===s.toast.id?{...e,...s.toast}:e)};case"DISMISS_TOAST":{let{toastId:t}=s;return t?p(t):e.toasts.forEach(e=>{p(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===t||void 0===t?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===s.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==s.toastId)}}},m=[],g={toasts:[]};function f(e){g=x(g,e),m.forEach(e=>{e(g)})}function v({...e}){let s=(d=(d+1)%Number.MAX_SAFE_INTEGER).toString(),t=()=>f({type:"DISMISS_TOAST",toastId:s});return f({type:"ADD_TOAST",toast:{...e,id:s,open:!0,onOpenChange:e=>{e||t()}}}),{id:s,dismiss:t,update:e=>f({type:"UPDATE_TOAST",toast:{...e,id:s}})}}var b=t(321),h=t(9360),q=t(4019);let y=b.zt,L=i.forwardRef(({className:e,...s},t)=>n.jsx(b.l_,{ref:t,className:(0,l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...s}));L.displayName=b.l_.displayName;let j=(0,h.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),D=i.forwardRef(({className:e,variant:s,...t},i)=>n.jsx(b.fC,{ref:i,className:(0,l.cn)(j({variant:s}),e),...t}));D.displayName=b.fC.displayName,i.forwardRef(({className:e,...s},t)=>n.jsx(b.aU,{ref:t,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...s})).displayName=b.aU.displayName;let C=i.forwardRef(({className:e,...s},t)=>n.jsx(b.x8,{ref:t,className:(0,l.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...s,children:n.jsx(q.Z,{className:"h-4 w-4"})}));C.displayName=b.x8.displayName;let z=i.forwardRef(({className:e,...s},t)=>n.jsx(b.Dx,{ref:t,className:(0,l.cn)("text-sm font-semibold",e),...s}));z.displayName=b.Dx.displayName;let S=i.forwardRef(({className:e,...s},t)=>n.jsx(b.dk,{ref:t,className:(0,l.cn)("text-sm opacity-90",e),...s}));function P(){let{toasts:e}=function(){let[e,s]=i.useState(g);return i.useEffect(()=>(m.push(s),()=>{let e=m.indexOf(s);e>-1&&m.splice(e,1)}),[e]),{...e,toast:v,dismiss:e=>f({type:"DISMISS_TOAST",toastId:e})}}();return(0,n.jsxs)(y,{children:[e.map(function({id:e,title:s,description:t,action:i,...r}){return(0,n.jsxs)(D,{...r,children:[(0,n.jsxs)("div",{className:"grid gap-1",children:[s&&n.jsx(z,{children:s}),t&&n.jsx(S,{children:t})]}),i,n.jsx(C,{})]},e)}),n.jsx(L,{})]})}S.displayName=b.dk.displayName;var E=t(4831),N=t(5999);let U=({...e})=>{let{theme:s="system"}=(0,E.F)();return n.jsx(N.x7,{theme:s,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};function T({children:e}){let[s]=(0,i.useState)(()=>new r.S);return n.jsx(a.aH,{client:s,children:(0,n.jsxs)(u,{children:[n.jsx(P,{}),n.jsx(U,{}),e]})})}},1329:(e,s,t)=>{"use strict";t.d(s,{ScrollToTop:()=>i});var n=t(5047);function i(){return(0,n.usePathname)(),null}t(7577)},3102:(e,s,t)=>{"use strict";t.d(s,{default:()=>f});var n=t(326),i=t(7577),r=t(434),a=t(5047),o=t(2887),l=t(7358),u=t(4019),d=t(748),c=t(1664),p=t(3177),x=t(2028),m=t(2142);let g=[{label:"Accueil",path:"/"},{label:"Le Centre",path:"/cabinet"},{label:"Nos Services",path:"/soins"},{label:"L'\xc9quipe",path:"/equipe"},{label:"Conseils",path:"/blog"},{label:"FAQ",path:"/faq"},{label:"Nous contacter",path:"/contact"}],f=()=>{let[e,s]=(0,i.useState)(!1),t=(0,a.usePathname)();return(0,n.jsxs)("header",{className:"fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border",style:{boxShadow:"var(--shadow-nav)"},children:[n.jsx("div",{className:"hidden md:block bg-primary",children:(0,n.jsxs)("div",{className:"container flex items-center justify-between py-1.5 text-xs text-primary-foreground/90",children:[(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsxs)("span",{children:[p.y6.address,", ",p.y6.zip," ",p.y6.city]}),n.jsx("span",{children:"•"}),(0,n.jsxs)("a",{href:`tel:${p.y6.phone}`,className:"flex items-center gap-1 hover:text-accent transition-colors",children:[n.jsx(o.Z,{size:12}),p.y6.phone]})]}),n.jsx("span",{children:"Lun-Jeu : 9h-19h | Ven : 9h-18h"})]})}),(0,n.jsxs)("div",{className:"container flex items-center justify-between h-16 md:h-18",children:[n.jsx(r.default,{href:"/",className:"flex items-center gap-2",children:n.jsx("img",{src:p.y6.logo,alt:"Logo du cabinet",className:"h-14 w-auto object-contain"})}),n.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:g.map(e=>n.jsx(r.default,{href:e.path,className:`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${t===e.path||"/contact"===e.path?"text-accent bg-mint-light":"text-muted-foreground hover:text-foreground hover:bg-secondary"}`,children:e.label},e.path))}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[n.jsx(c.z,{variant:"default",size:"sm",className:"hidden sm:flex bg-accent hover:bg-mint-dark text-accent-foreground shadow-none",asChild:!0,children:(0,n.jsxs)("a",{href:p.y6.doctolibProfileUrl,target:"_blank",rel:"noopener noreferrer",children:[n.jsx(l.Z,{size:16,className:"mr-1.5"}),"Prendre RDV"]})}),n.jsx("button",{onClick:()=>s(!e),className:"lg:hidden p-2 text-foreground","aria-label":"Menu",children:e?n.jsx(u.Z,{size:24}):n.jsx(d.Z,{size:24})})]})]}),n.jsx(x.M,{children:e&&n.jsx(m.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"lg:hidden bg-card border-t border-border overflow-hidden",children:(0,n.jsxs)("nav",{className:"container py-4 flex flex-col gap-1",children:[g.map(e=>n.jsx(r.default,{href:e.path,onClick:()=>s(!1),className:`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${t===e.path||"/contact"===e.path?"text-accent bg-mint-light":"text-muted-foreground hover:text-foreground hover:bg-secondary"}`,children:e.label},e.path)),n.jsx(c.z,{variant:"default",className:"mt-2 bg-accent hover:bg-mint-dark text-accent-foreground",asChild:!0,children:(0,n.jsxs)("a",{href:p.y6.doctolibProfileUrl,target:"_blank",rel:"noopener noreferrer",children:[n.jsx(l.Z,{size:16,className:"mr-2"}),"Prendre rendez-vous"]})})]})})})]})}},1664:(e,s,t)=>{"use strict";t.d(s,{z:()=>u});var n=t(326),i=t(7577),r=t(4214),a=t(9360),o=t(1223);let l=(0,a.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef(({className:e,variant:s,size:t,asChild:i=!1,...a},u)=>{let d=i?r.g7:"button";return n.jsx(d,{className:(0,o.cn)(l({variant:s,size:t,className:e})),ref:u,...a})});u.displayName="Button"},3177:(e,s,t)=>{"use strict";t.d(s,{AH:()=>o,Eb:()=>r,ff:()=>a,lU:()=>i,rA:()=>l,y6:()=>n});let n={name:"La Maison Dentaire",slogan:"Votre centre de soins dentaires \xe0 Strasbourg",subtitle:"Soins dentaires pour adultes et enfants \xe0 Strasbourg - Elsau. Centre conventionn\xe9.",address:"21 Rue L\xe9onard de Vinci",logo:"/logo1.webp",city:"Strasbourg",zip:"67200",phone:"03 88 67 72 57",email:"info@la-maison-dentaire.fr",formspreeEndpoint:"https://formspree.io/f/mnjoezrd",openingHours:[{day:"Lundi",hours:"9h - 19h"},{day:"Mardi",hours:"9h - 19h"},{day:"Mercredi",hours:"9h - 19h"},{day:"Jeudi",hours:"9h - 19h"},{day:"Vendredi",hours:"9h - 18h"},{day:"Samedi",hours:"Ferm\xe9"},{day:"Dimanche",hours:"Ferm\xe9"}],googleMapsEmbedUrl:"https://www.google.com/maps?q=21+Rue+L%C3%A9onard+de+Vinci,+67200+Strasbourg,+France&output=embed",placeId:"VOTRE_PLACE_ID",googlePlacesApiKey:"VOTRE_GOOGLE_PLACES_API_KEY",doctolibProfileUrl:"https://www.doctolib.fr/centre-medical-et-dentaire/strasbourg/maison-dentaire-strasbourg",socialLinks:{facebook:"https://facebook.com",instagram:"https://instagram.com",linkedin:"https://linkedin.com"},contactEmail:"info@la-maison-dentaire.fr",webhookUrl:""},i=[{id:"dr-gumustepe",name:"Dr. Hakan GUMUSTEPE",title:"Chirurgien-Dentiste",specialty:"Implantologie & Esth\xe9tique",bio:"Dipl\xf4m\xe9 de la Facult\xe9 de Chirurgie-Dentaire de Strasbourg.",diplomas:["Doctorat en Chirurgie Dentaire – Universit\xe9 de Strasbourg"],approach:"Une approche douce et rassurante, avec un accent sur la communication et l'explication de chaque \xe9tape du traitement.",image:"male"},{id:"dr-joseph",name:"Dr. Constance JOSEPH",title:"Chirurgien-Dentiste",specialty:"Parodontologie & Soins conservateurs",bio:"Dipl\xf4m\xe9e de la Facult\xe9 de Chirurgie-Dentaire de Strasbourg.",diplomas:["Doctorat en Chirurgie Dentaire – Universit\xe9 de Strasbourg"],approach:"Un praticien \xe0 l'\xe9coute, privil\xe9giant les techniques mini-invasives et la pr\xe9vention pour pr\xe9server au maximum les dents naturelles.",image:"female"},{id:"dr-elassad",name:"Dr. Ghita ELASSAD",title:"Chirurgien-Dentiste",specialty:"Parodontologie & Soins conservateurs",bio:"Dipl\xf4m\xe9e de la Facult\xe9 de Chirurgie-Dentaire de Strasbourg.",diplomas:["Doctorat en Chirurgie Dentaire – Universit\xe9 de Strasbourg"],approach:"Un praticien \xe0 l'\xe9coute, privil\xe9giant les techniques mini-invasives et la pr\xe9vention pour pr\xe9server au maximum les dents naturelles.",image:"male"},{id:"dr-ucar",name:"Dr. Fatih UCAR",title:"Chirurgien-Dentiste",specialty:"Parodontologie & Soins conservateurs",bio:"Dipl\xf4m\xe9 de la Facult\xe9 de Chirurgie-Dentaire de Strasbourg.",diplomas:["Doctorat en Chirurgie Dentaire – Universit\xe9 de Strasbourg"],approach:"Un praticien \xe0 l'\xe9coute, privil\xe9giant les techniques mini-invasives et la pr\xe9vention pour pr\xe9server au maximum les dents naturelles.",image:"male"},{id:"dr-stemmer",name:"Dr. Pauline STEMMER",title:"Chirurgien-Dentiste",specialty:"Parodontologie & Soins conservateurs",bio:"Dipl\xf4m\xe9e de la Facult\xe9 de Chirurgie-Dentaire de Strasbourg.",diplomas:["Doctorat en Chirurgie Dentaire – Universit\xe9 de Strasbourg"],approach:"Un praticien \xe0 l'\xe9coute, privil\xe9giant les techniques mini-invasives et la pr\xe9vention pour pr\xe9server au maximum les dents naturelles.",image:"female"},{id:"dr-wilczynska",name:"Dr. Bozena WILCZYNSKA",title:"Chirurgien-Dentiste",specialty:"Parodontologie & Soins conservateurs",bio:"Dipl\xf4m\xe9e de la Facult\xe9 de Chirurgie-Dentaire de Cracovie.",diplomas:["Doctorat en Chirurgie Dentaire – Universit\xe9 de Cracovie"],approach:"Un praticien \xe0 l'\xe9coute, privil\xe9giant les techniques mini-invasives et la pr\xe9vention pour pr\xe9server au maximum les dents naturelles.",image:"female"},{id:"dr-galfi",name:"Dr. Eliot GALFI",title:"Chirurgien-Dentiste",specialty:"Parodontologie & Soins conservateurs",bio:"Dipl\xf4m\xe9 de la Facult\xe9 de Chirurgie-Dentaire de Strasbourg.",diplomas:["Doctorat en Chirurgie Dentaire – Universit\xe9 de Strasbourg"],approach:"Un praticien \xe0 l'\xe9coute, privil\xe9giant les techniques mini-invasives et la pr\xe9vention pour pr\xe9server au maximum les dents naturelles.",image:"male"}],r=[{id:"parodontologie",title:"Parodontologie",icon:"ShieldCheck",shortDesc:"Pr\xe9vention et traitement des maladies des gencives.",description:"La parodontologie traite les gencives et les tissus de soutien de la dent. Elle permet de pr\xe9venir, diagnostiquer et soigner les inflammations gingivales et les maladies parodontales.",whenToConsult:"En cas de saignement des gencives, de mauvaise haleine persistante, de sensibilit\xe9 ou de d\xe9chaussement.",procedure:"Apr\xe8s un bilan complet, le praticien r\xe9alise un nettoyage cibl\xe9 et met en place un suivi adapt\xe9 \xe0 votre situation.",duration:"30 \xe0 45 minutes",comfort:"G\xe9n\xe9ralement confortable, avec une prise en charge douce et progressive",afterCare:"Maintenir une hygi\xe8ne rigoureuse et respecter les contr\xf4les de suivi recommand\xe9s."},{id:"caries",title:"Soins conservateurs",icon:"Shield",shortDesc:"Pr\xe9server et restaurer vos dents naturelles.",description:"Les soins conservateurs visent \xe0 traiter les l\xe9sions dentaires de mani\xe8re pr\xe9cise tout en gardant un maximum de tissu sain. Ils incluent notamment le traitement des caries.",whenToConsult:"Douleur au chaud ou au froid, sensibilit\xe9, tache sombre sur une dent ou fracture localis\xe9e.",procedure:"Apr\xe8s anesth\xe9sie locale, la partie cari\xe9e est retir\xe9e avec pr\xe9cision puis la dent est restaur\xe9e \xe0 l’aide d’un composite de la couleur de votre dent pour un r\xe9sultat naturel.",duration:"En moyenne 30 minutes \xe0 1 heure, selon l’\xe9tendue de la l\xe9sion et le nombre de dents \xe0 traiter.",comfort:"Traitement sous anesth\xe9sie locale, g\xe9n\xe9ralement indolore.",afterCare:"\xc9viter de manger du c\xf4t\xe9 trait\xe9 pendant 2h. Reprendre le brossage normalement."},{id:"couronnes",title:"Proth\xe8ses",icon:"Crown",shortDesc:"Remplacement et restauration des dents absentes ou fragilis\xe9es.",description:"Les proth\xe8ses dentaires permettent de restaurer l'esth\xe9tique et la fonction des dents gr\xe2ce \xe0 des solutions fixes ou amovibles adapt\xe9es \xe0 chaque patient.",whenToConsult:"Dent tr\xe8s ab\xeem\xe9e, fractur\xe9e, d\xe9vitalis\xe9e, ou besoin de remplacer une ou plusieurs dents manquantes.",procedure:"Nous \xe9tablissons un plan de traitement personnalis\xe9 accompgn\xe9 d'un devis clair et d\xe9taill\xe9. La proth\xe8se est ensuite con\xe7ue sur mesure avant sa pose.",duration:"La dur\xe9e du traitement d\xe9pend du plan  de traitement \xe9tabli.",comfort:"Anesth\xe9sie locale si n\xe9cessaire, avec une pose progressive et ma\xeetris\xe9e",afterCare:"Entretenir la proth\xe8se selon les conseils du praticien et maintenir un brossage r\xe9gulier."},{id:"implants",title:"Implants dentaires",icon:"Wrench",shortDesc:"Une solution durable pour remplacer les dents manquantes.",description:"L'implant dentaire est une racine artificielle en titane pos\xe9e dans l'os de la m\xe2choire. Il sert de support \xe0 une couronne, un bridge ou une proth\xe8se. C'est la solution la plus fiable et durable.",whenToConsult:"Dent manquante, proth\xe8se amovible inconfortable, souhait d'une solution fixe et durable.",procedure:"Pose chirurgicale de l’implant suivie d’une p\xe9riode de cicatrisation avant la r\xe9alisation de la proth\xe8se d\xe9finitive. Des \xe9tapes compl\xe9mentaires peuvent \xeatre n\xe9cessaires selon la situation clinique.",duration:"La dur\xe9e du traitement varie selon le nombre d’implants \xe0 poser et les \xe9ventuels soins compl\xe9mentaires n\xe9cessaires.",comfort:"Intervention sous anesth\xe9sie locale, douleurs post-op\xe9ratoires g\xe9n\xe9ralement l\xe9g\xe8res et bien contr\xf4l\xe9es.",afterCare:"Alimentation molle pendant 1 semaine. Hygi\xe8ne rigoureuse. Suivi r\xe9gulier."},{id:"radiologie-dentaire",title:"Radiologie dentaire",icon:"Radio",shortDesc:"Imagerie num\xe9rique pour un diagnostic pr\xe9cis.",description:"La radiologie dentaire nous aide \xe0 visualiser les zones non accessibles \xe0 l'examen clinique pour \xe9tablir un diagnostic fiable et planifier les soins.",whenToConsult:"Lors d'un bilan complet, avant certains soins ou en cas de douleur sans cause visible.",procedure:"R\xe9alisation d'images cibl\xe9es avec un \xe9quipement num\xe9rique pour analyser pr\xe9cis\xe9ment la situation.",duration:"Quelques minutes",comfort:"Examen rapide, non invasif et g\xe9n\xe9ralement tr\xe8s confortable",afterCare:"Aucune pr\xe9caution particuli\xe8re dans la majorit\xe9 des cas."},{id:"chirurgie",title:"Chirurgie",icon:"Stethoscope",shortDesc:"Des soins chirurgicaux r\xe9alis\xe9s avec pr\xe9cision et s\xe9curit\xe9.",description:"La chirurgie dentaire regroupe les interventions n\xe9cessaires pour traiter certaines situations complexes, dans un cadre ma\xeetris\xe9 et rassurant.",whenToConsult:"Pour une extraction, une intervention pr\xe9paratoire \xe0 un implant ou un soin n\xe9cessitant un geste chirurgical.",procedure:"Le praticien vous explique chaque \xe9tape, r\xe9alise l’intervention sous anesth\xe9sie locale, puis vous remet les consignes adapt\xe9es et assure le suivi si n\xe9cessaire.",duration:"Variable selon l’intervention\nLa dur\xe9e d\xe9pend du type de soin, du nombre de dents concern\xe9es et de la complexit\xe9 du geste.",comfort:"Intervention sous anesth\xe9sie locale avec priorit\xe9 au confort",afterCare:"Respecter les consignes post-op\xe9ratoires et revenir en contr\xf4le si n\xe9cessaire."},{id:"urgences",title:"Urgences dentaires",icon:"AlertCircle",shortDesc:"Prise en charge rapide des douleurs et urgences dentaires.",description:"Les urgences dentaires n\xe9cessitent une \xe9valuation rapide pour soulager la douleur, traiter la cause et \xe9viter toute aggravation.",whenToConsult:"Douleur intense, gonflement, dent cass\xe9e, abc\xe8s ou traumatisme dentaire.",procedure:"Nous r\xe9alisons un diagnostic rapide, un soulagement imm\xe9diat si n\xe9cessaire, puis nous organisons le traitement adapt\xe9.",duration:"30 minutes \xe0 1 heure",comfort:"Priorit\xe9 au soulagement de la douleur et \xe0 une prise en charge rassurante",afterCare:"Suivre les consignes donn\xe9es au cabinet et pr\xe9voir un contr\xf4le si recommand\xe9."},{id:"pedodontie",title:"P\xe9dodontie",icon:"Baby",shortDesc:"Des soins adapt\xe9s et bienveillants pour les plus petits.",description:"La p\xe9dodontie est la sp\xe9cialit\xe9 d\xe9di\xe9e aux soins dentaires des enfants. Notre approche ludique et rassurante permet aux enfants de vivre une exp\xe9rience positive chez le dentiste.",whenToConsult:"Premi\xe8re visite recommand\xe9e d\xe8s 3 ans, puis suivi r\xe9gulier tous les 6 mois.",procedure:"Examen adapt\xe9 \xe0 l’enfant, conseils d’hygi\xe8ne, soins pr\xe9ventifs (scellement de sillons, fluorations) et soins curatifs si n\xe9cessaire.",duration:"En fonction des cas\nLa dur\xe9e varie selon l’\xe2ge de l’enfant, le type de soin r\xe9alis\xe9 et sa coop\xe9ration. Votre praticien vous informera en amont.",comfort:"Approche douce et rassurante, adapt\xe9e au rythme et \xe0 la sensibilit\xe9 de chaque enfant.",afterCare:"Encourager le brossage r\xe9gulier et limiter les sucreries."}],a=[{q:"Est-ce que les soins dentaires font mal ?",a:"La grande majorit\xe9 des soins sont r\xe9alis\xe9s sous anesth\xe9sie locale et sont totalement indolores. Notre priorit\xe9 est votre confort. N'h\xe9sitez pas \xe0 nous signaler toute appr\xe9hension."},{q:"\xc0 quelle fr\xe9quence dois-je consulter ?",a:"Nous recommandons une visite de contr\xf4le tous les 6 mois \xe0 1 an. Un suivi r\xe9gulier permet de d\xe9tecter et traiter les probl\xe8mes \xe0 un stade pr\xe9coce."},{q:"Acceptez-vous les urgences ?",a:"Oui, nous r\xe9servons des cr\xe9neaux pour les urgences dentaires. Appelez-nous directement par t\xe9l\xe9phone pour une prise en charge rapide."},{q:"\xcates-vous conventionn\xe9 ?",a:"Oui, notre cabinet est conventionn\xe9 secteur 1. La plupart des soins courants sont pris en charge par l'Assurance Maladie et votre mutuelle."},{q:"Comment se d\xe9roule une premi\xe8re consultation ?",a:"La premi\xe8re consultation dure environ 45 minutes. Elle comprend un \xe9change sur vos attentes, un examen clinique complet, des radiographies si n\xe9cessaire, et l'\xe9laboration d'un plan de traitement personnalis\xe9."},{q:"Proposez-vous le paiement en plusieurs fois ?",a:"Oui, nous proposons des facilit\xe9s de paiement pour les traitements importants. N'h\xe9sitez pas \xe0 nous en parler lors de votre consultation."},{q:"Les implants dentaires sont-ils rembours\xe9s ?",a:"Les implants ne sont pas rembours\xe9s par l'Assurance Maladie, mais de nombreuses mutuelles proposent une prise en charge partielle. Nous vous fournirons un devis d\xe9taill\xe9."},{q:"\xc0 partir de quel \xe2ge emmener mon enfant chez le dentiste ?",a:"Nous recommandons une premi\xe8re visite d\xe8s l'\xe2ge de 3 ans, ou d\xe8s l'apparition des premi\xe8res dents de lait si vous avez des inqui\xe9tudes."},{q:"Quels moyens de paiement acceptez-vous ?",a:"Nous acceptons les cartes bancaires, les ch\xe8ques, les esp\xe8ces et la t\xe9l\xe9transmission avec votre carte Vitale."},{q:"Le centre est-il accessible aux personnes \xe0 mobilit\xe9 r\xe9duite ?",a:"Oui, notre cabinet est enti\xe8rement accessible aux personnes \xe0 mobilit\xe9 r\xe9duite (PMR). Un acc\xe8s de plain-pied et des \xe9quipements adapt\xe9s sont \xe0 votre disposition."}],o=[{id:"bien-se-brosser-les-dents",title:"Comment bien se brosser les dents ?",excerpt:"D\xe9couvrez les techniques de brossage recommand\xe9es par nos dentistes pour une hygi\xe8ne bucco-dentaire optimale.",content:`Le brossage des dents est le geste fondamental de l'hygi\xe8ne bucco-dentaire. Pourtant, beaucoup de personnes ne le r\xe9alisent pas correctement.

 La technique recommand\xe9e

Utilisez une brosse \xe0 dents souple et un dentifrice fluor\xe9. Placez la brosse \xe0 45\xb0 par rapport \xe0 la gencive et effectuez des mouvements circulaires doux, de la gencive vers la dent.

 Dur\xe9e et fr\xe9quence

Brossez-vous les dents pendant **2 minutes minimum**, au moins **2 fois par jour** (matin et soir). Le brossage du soir est le plus important.

 N'oubliez pas

- Changez de brosse \xe0 dents tous les 3 mois
- Utilisez du fil dentaire ou des brossettes interdentaires
- Compl\xe9tez avec un bain de bouche si recommand\xe9 par votre dentiste`,category:"Hygi\xe8ne",readTime:"3 min"},{id:"frequence-consultation",title:"\xc0 quelle fr\xe9quence consulter son dentiste ?",excerpt:"Un suivi r\xe9gulier est essentiel pour pr\xe9venir les probl\xe8mes dentaires. Voici nos recommandations.",content:`Un suivi dentaire r\xe9gulier est la base d'une bonne sant\xe9 bucco-dentaire. Pourtant, beaucoup de patients consultent uniquement en cas de douleur — ce qui est souvent trop tard. L'UFSBD insiste sur l'importance d'un contr\xf4le pr\xe9ventif annuel pour tous, quel que soit l'\xe2ge.

La fr\xe9quence recommand\xe9e

Pour un adulte en bonne sant\xe9 bucco-dentaire, **une visite par an** est le minimum recommand\xe9. Pour les enfants, les adolescents, les femmes enceintes, les fumeurs ou les patients diab\xe9tiques, **deux visites annuelles** sont pr\xe9conis\xe9es. Votre dentiste adaptera le rythme \xe0 votre situation personnelle.

Pourquoi ne pas attendre la douleur ?

La carie dentaire et les maladies parodontales sont souvent **indolores \xe0 leurs d\xe9buts**. Une consultation pr\xe9ventive permet de les d\xe9tecter t\xf4t, quand elles sont encore simples et peu co\xfbteuses \xe0 traiter. Une carie non trait\xe9e peut \xe9voluer vers une infection, voire n\xe9cessiter une extraction.

Ce que comprend un bilan annuel

- **Examen clinique complet** de toutes les dents et des gencives
- **D\xe9tartrage** pour \xe9liminer le tartre inaccessible \xe0 la brosse
- **Radiographies** cibl\xe9es ou panoramique selon les besoins
- **D\xe9pistage** des l\xe9sions muqueuses et cancers buccaux
- **Conseils personnalis\xe9s** d'hygi\xe8ne adapt\xe9s \xe0 votre situation

Le r\xf4le cl\xe9 du d\xe9tartrage

Le tartre est du plaque dentaire min\xe9ralis\xe9e que le brossage seul ne peut pas \xe9liminer. Son accumulation irrite les gencives et favorise la gingivite, puis la parodontite. Un d\xe9tartrage r\xe9gulier — pris en charge partiellement par l'Assurance Maladie — est indispensable pour maintenir des gencives saines.

Le programme M'T dents

Avec le programme **M'T dents tous les ans !**, l'Assurance Maladie et les compl\xe9mentaires sant\xe9 permettent \xe0 tous les enfants et jeunes adultes de **3 \xe0 24 ans** de b\xe9n\xe9ficier d'un rendez-vous de pr\xe9vention offert, tous les ans, chez le chirurgien-dentiste — et des soins, si n\xe9cessaire.

En r\xe9sum\xe9

- Consultez au minimum **une fois par an**
- **Deux fois par an** si vous \xeates \xe0 risque (tabac, diab\xe8te, grossesse, orthodontie)
- N'attendez jamais l'apparition d'une douleur pour prendre rendez-vous
- Les enfants doivent consulter **d\xe8s l'apparition de la premi\xe8re dent**`,category:"Pr\xe9vention",readTime:"4 min"},{id:"sensibilite-dentaire",title:"Sensibilit\xe9 dentaire : causes et solutions",excerpt:"Douleur au chaud, au froid ? La sensibilit\xe9 dentaire touche de nombreuses personnes. D\xe9couvrez comment y rem\xe9dier.",content:`La sensibilit\xe9 dentaire — ou hypersensibilit\xe9 dentinaire — se manifeste par une douleur vive et br\xe8ve d\xe9clench\xe9e par le froid, le chaud, le sucr\xe9, l'acide ou parfois le simple contact. Elle touche pr\xe8s d'**un adulte sur trois** en France et peut alt\xe9rer consid\xe9rablement la qualit\xe9 de vie.

Pourquoi les dents deviennent-elles sensibles ?

Chaque dent est recouverte d'\xe9mail, une couche protectrice dure et imperm\xe9able. Sous l'\xe9mail se trouve la **dentine**, un tissu parcouru de milliers de microtubules reliant la surface de la dent au nerf. Lorsque la dentine est expos\xe9e — que ce soit par \xe9rosion de l'\xe9mail ou r\xe9cession gingivale —, les stimuli thermiques et chimiques atteignent directement le nerf, provoquant la douleur.

Les causes principales

- **\xc9rosion acide** : consommation excessive de sodas, jus de fruits, aliments acides
- **Brossage trop vigoureux** avec une brosse trop dure
- **R\xe9cession gingivale** exposant les collets et les racines
- **Bruxisme** (grincement des dents) usant l'\xe9mail
- **Caries** ou fissures dentaires
- **Traitement de blanchiment** (sensibilit\xe9 temporaire)
- **Soins dentaires r\xe9cents** (plombage, couronne)

Que faire au quotidien ?

- Utilisez un **dentifrice sp\xe9cifique sensibilit\xe9** contenant du nitrate de potassium ou du fluorure d'\xe9tain — les effets se ressentent apr\xe8s 2 \xe0 4 semaines d'utilisation r\xe9guli\xe8re
- Adoptez une **brosse \xe0 dents souple** et un brossage doux en mouvements circulaires
- \xc9vitez de brosser juste apr\xe8s un repas acide : attendez **30 minutes**
- Limitez les aliments et boissons acides
- Utilisez une **paille** pour les boissons acides ou gazeuses afin de limiter le contact avec les dents

Quand consulter ?

Si la douleur persiste plus de quelques secondes, survient spontan\xe9ment ou s'intensifie, il est imp\xe9ratif de consulter. Une sensibilit\xe9 persistante peut signaler une **carie profonde**, une fissure, ou une pathologie pulpaire n\xe9cessitant un traitement appropri\xe9.

Les traitements disponibles au cabinet

- **Application de vernis fluor\xe9** pour obstruer les tubules dentinaires
- **Agents de liaison** (adh\xe9sifs dentinaires) appliqu\xe9s sur les zones sensibles
- **Goutti\xe8re de protection** en cas de bruxisme
- **Traitement parodontal** si la r\xe9cession gingivale est en cause
- En dernier recours : **traitement canalaire** si le nerf est atteint

En r\xe9sum\xe9

- La sensibilit\xe9 dentaire est fr\xe9quente mais **toujours \xe0 explorer**
- Un dentifrice adapt\xe9 suffit souvent pour les formes l\xe9g\xe8res
- **Ne pas ignorer** une douleur persistante ou spontan\xe9e
- Votre dentiste dispose de solutions efficaces pour chaque cause`,category:"Soins",readTime:"5 min"},{id:"dents-de-sagesse",title:"Dents de sagesse : faut-il les extraire ?",excerpt:"Les dents de sagesse posent souvent probl\xe8me. D\xe9couvrez quand et pourquoi il peut \xeatre n\xe9cessaire de les retirer.",content:`Les dents de sagesse — ou troisi\xe8mes molaires — sont les derni\xe8res dents \xe0 faire leur apparition, g\xe9n\xe9ralement entre **17 et 25 ans**. Elles sont au nombre de quatre, une par coin de la m\xe2choire. Leur \xe9ruption est souvent source d'inconfort, voire de complications qui rendent leur extraction n\xe9cessaire.

Pourquoi posent-elles probl\xe8me ?

Au cours de l'\xe9volution, la m\xe2choire humaine a r\xe9tr\xe9ci, mais le nombre de dents est rest\xe9 le m\xeame. Les dents de sagesse arrivent donc souvent dans un espace insuffisant. Elles peuvent \xeatre :

- **Incluses** : rest\xe9es dans l'os sans sortir
- **Semi-incluses** : partiellement sorties, coinc\xe9es sous la gencive
- **En mauvaise position** : inclin\xe9es vers la dent voisine (dent de sagesse en m\xe9sioversion)

Quand l'extraction est-elle n\xe9cessaire ?

Toutes les dents de sagesse ne doivent pas \xeatre extraites. L'indication d\xe9pend d'un examen clinique et d'une **radio panoramique**. L'extraction est recommand\xe9e dans les cas suivants :

- **P\xe9ricoronarite** : infection r\xe9p\xe9t\xe9e de la gencive autour d'une dent semi-incluse
- **Kyste ou tumeur** se d\xe9veloppant autour de la dent incluse
- **Carie** inaccessible au traitement conservateur
- **Pression sur la dent adjacente** risquant d'endommager sa racine
- **Probl\xe8me orthodontique** : manque de place compromettant l'alignement

Comment se d\xe9roule l'extraction ?

L'intervention se r\xe9alise sous **anesth\xe9sie locale** au cabinet. Elle peut n\xe9cessiter une incision de la gencive et, parfois, un d\xe9coupage de la dent en plusieurs fragments si elle est profond\xe9ment incluse. La dur\xe9e varie de 15 \xe0 60 minutes selon la complexit\xe9. Dans les cas difficiles, le praticien peut orienter vers un chirurgien maxillo-facial.

Les suites op\xe9ratoires

- **Gonflement et douleur** durant 2 \xe0 5 jours, g\xe9r\xe9s par antalgiques et anti-inflammatoires
- **Alimentation molle** pendant quelques jours
- **Pas de tabac** pendant au moins 48h (risque d'alv\xe9olite s\xe8che)
- Bains de bouche antiseptiques d\xe9but\xe9s apr\xe8s 24h selon les recommandations du praticien
- Les points de suture (r\xe9sorbables ou non) disparaissent en 7 \xe0 10 jours

Faut-il attendre ou agir pr\xe9ventivement ?

L'UFSBD recommande une surveillance radiologique r\xe9guli\xe8re des dents de sagesse d\xe8s 16-17 ans. Une extraction pr\xe9ventive avant 25 ans est souvent moins complexe, car les racines ne sont pas encore enti\xe8rement form\xe9es et la cicatrisation est plus rapide.

En r\xe9sum\xe9

- Une **radio panoramique** est indispensable pour \xe9valuer la situation
- L'extraction n'est pas syst\xe9matique, mais souvent in\xe9vitable
- Mieux vaut intervenir **t\xf4t** (avant 25 ans) pour une r\xe9cup\xe9ration facilit\xe9e
- En cas de douleur, gonflement ou fi\xe8vre : consultez sans d\xe9lai`,category:"Chirurgie",readTime:"4 min"},{id:"gingivite",title:"Gingivite : comment la reconna\xeetre et la traiter ?",excerpt:"Gencives rouges, gonfl\xe9es ou qui saignent ? Il s'agit peut-\xeatre d'une gingivite. Voici comment agir.",content:`La gingivite est une inflammation des gencives caus\xe9e par l'accumulation de plaque dentaire bact\xe9rienne \xe0 la jonction entre les dents et la gencive. C'est la forme la plus courante de maladie parodontale : elle touche pr\xe8s de **80 % des adultes** \xe0 un moment de leur vie. Bonne nouvelle : elle est **r\xe9versible** si elle est prise en charge \xe0 temps.

Comment la reconna\xeetre ?

Les signes caract\xe9ristiques de la gingivite sont :

- **Gencives rouges ou violac\xe9es** (au lieu d'un rose p\xe2le sain)
- **Saignements** lors du brossage ou au contact de la soie dentaire
- **Gencives gonfl\xe9es ou douloureuses** au toucher
- **Mauvaise haleine** persistante (halitose)
- Gencives qui semblent se **r\xe9tracter** l\xe9g\xe8rement

\xc0 noter : la gingivite est souvent **indolore au repos**, ce qui explique pourquoi beaucoup de patients la n\xe9gligent.

Les causes de la gingivite

- **Plaque dentaire** insuffisamment \xe9limin\xe9e par le brossage
- **Tartre** irritant chroniquement la gencive
- **Tabac** : ralentit la cicatrisation et masque les saignements
- **Grossesse** : les variations hormonales augmentent la sensibilit\xe9 des gencives
- **Diab\xe8te** mal \xe9quilibr\xe9 : favorise les infections gingivales
- Certains **m\xe9dicaments** (anti\xe9pileptiques, immunosuppresseurs)
- **Stress** et fatigue chronique

Gingivite ou parodontite : quelle diff\xe9rence ?

La gingivite touche uniquement la gencive, sans atteindre l'os alv\xe9olaire. Si elle n'est pas trait\xe9e, elle peut \xe9voluer en **parodontite** — une maladie plus s\xe9v\xe8re qui d\xe9truit progressivement l'os et les fibres de soutien de la dent, pouvant mener \xe0 la mobilit\xe9 puis \xe0 la perte des dents.

Le traitement au cabinet

Le traitement de premi\xe8re intention est le **d\xe9tartrage** (surfa\xe7age radiculaire si n\xe9cessaire), r\xe9alis\xe9 par votre chirurgien-dentiste. Il permet d'\xe9liminer le tartre supra et sous-gingival inaccessible \xe0 la brosse. Ce soin est partiellement rembours\xe9 par l'Assurance Maladie (une s\xe9ance par an).

Ce que vous pouvez faire \xe0 la maison

- **Brossage minutieux** : 2 minutes minimum, 2 fois par jour, avec une brosse souple
- Utilisation quotidienne de **fil dentaire ou de brossettes interdentaires** pour nettoyer les espaces entre les dents
- **Bain de bouche** \xe0 la chlorhexidine sur prescription, en cure courte (7 \xe0 14 jours)
- Arr\xeat du **tabac**, qui masque les saignements et aggrave l'inflammation

En r\xe9sum\xe9

- Des gencives qui **saignent ne sont pas normales** : c'est un signal d'alarme
- La gingivite est **gu\xe9rissable** avec un bon traitement et une hygi\xe8ne rigoureuse
- Sans traitement, elle \xe9volue vers la parodontite, irr\xe9versible
- Un contr\xf4le chez le dentiste d\xe8s les premiers signes est indispensable`,category:"Parodontologie",readTime:"4 min"},{id:"blanchiment-dentaire",title:"Blanchiment dentaire : ce qu'il faut savoir",excerpt:"Envie d'un sourire plus blanc ? D\xe9couvrez les options de blanchiment s\xfbres et efficaces.",content:`Le blanchiment dentaire est l'un des traitements esth\xe9tiques les plus demand\xe9s. Mais entre les kits vendus en grande surface, les produits non r\xe9glement\xe9s et les techniques professionnelles, il est essentiel de savoir \xe0 qui faire confiance et ce qui est r\xe9ellement efficace — et sans danger.

Comment fonctionne le blanchiment ?

Le principe repose sur l'utilisation de **peroxyde d'hydrog\xe8ne** (eau oxyg\xe9n\xe9e) ou de **peroxyde de carbamide**, qui p\xe9n\xe8tre dans l'\xe9mail et oxyde les mol\xe9cules de pigments responsables de la coloration. En France, seuls les chirurgiens-dentistes sont autoris\xe9s \xe0 utiliser des concentrations sup\xe9rieures \xe0 **6 % de peroxyde d'hydrog\xe8ne**.

Les deux techniques professionnelles

**Blanchiment au fauteuil (en cabinet)**
R\xe9alis\xe9 en une \xe0 deux s\xe9ances d'environ une heure. Le praticien applique un gel \xe0 haute concentration activ\xe9 par une lampe LED ou laser. Les r\xe9sultats sont imm\xe9diats et peuvent durer **1 \xe0 3 ans** selon les habitudes.

**Blanchiment \xe0 domicile (goutti\xe8res sur mesure)**
Des goutti\xe8res thermoform\xe9es personnalis\xe9es sont fabriqu\xe9es \xe0 partir d'empreintes de vos dents. Vous appliquez vous-m\xeame le gel \xe0 concentration mod\xe9r\xe9e **chaque nuit pendant 14 \xe0 21 jours**. Technique progressive, r\xe9sultats durables.

Qui peut en b\xe9n\xe9ficier ?

Le blanchiment est indiqu\xe9 pour les dents pr\xe9sentant :

- Colorations li\xe9es au **caf\xe9, th\xe9, vin, tabac**
- Jaunissement naturel avec l'\xe2ge
- Taches dues \xe0 certains **m\xe9dicaments** (t\xe9tracyclines l\xe9g\xe8res)

Il est contre-indiqu\xe9 en cas de :

- **Grossesse ou allaitement**
- Dents avec nombreuses **restaurations ant\xe9rieures** (les proth\xe8ses ne blanchissent pas)
- **Hypersensibilit\xe9** dentaire s\xe9v\xe8re non trait\xe9e
- Moins de **18 ans**
- Caries ou maladies parodontales actives

Les produits en grande surface : sont-ils efficaces ?

Les dentifrices et kits blanchissants vendus en pharmacie ou supermarch\xe9 contiennent des concentrations tr\xe8s faibles (maximum 0,1 % de peroxyde). Leur effet est essentiellement **abrasif** — ils \xe9liminent les taches de surface — mais ils ne modifient pas la couleur intrins\xe8que de l'\xe9mail. Certains peuvent m\xeame fragiliser l'\xe9mail \xe0 long terme s'ils sont trop abrasifs.

Effets secondaires possibles

- **Sensibilit\xe9 temporaire** pendant et apr\xe8s le traitement (3 \xe0 5 jours)
- **Irritation des gencives** si le gel entre en contact avec elles
- Ces effets sont transitoires et disparaissent spontan\xe9ment

Entretien et dur\xe9e des r\xe9sultats

Pour prolonger les effets :

- \xc9vitez les aliments et boissons colorants pendant **48h apr\xe8s chaque s\xe9ance**
- Limitez le caf\xe9, th\xe9 et vin rouge au quotidien
- Ne fumez pas
- Maintenez une hygi\xe8ne rigoureuse et des contr\xf4les r\xe9guliers

En r\xe9sum\xe9

- Le blanchiment professionnel est **s\xfbr et efficace** sous supervision dentaire
- Les r\xe9sultats durent **1 \xe0 3 ans** avec un bon entretien
- Traitez d'abord toute pathologie dentaire avant d'envisager un blanchiment`,category:"Esth\xe9tique",readTime:"5 min"},{id:"implants-dentaires-guide",title:"Implants dentaires : ce qu’il faut savoir",excerpt:"Tout ce que vous devez savoir sur les implants : proc\xe9dure, dur\xe9e, co\xfbt et r\xe9sultats.",content:`L'implant dentaire est aujourd'hui consid\xe9r\xe9 comme la solution de r\xe9f\xe9rence pour remplacer une dent manquante. Il offre un r\xe9sultat esth\xe9tique et fonctionnel proche de la dent naturelle, avec une excellente stabilit\xe9 dans le temps lorsqu'il est bien entretenu.
La dur\xe9e de vie d'un implant d\xe9pend de nombreux facteurs (hygi\xe8ne bucco-dentaire, \xe9tat de sant\xe9 g\xe9n\xe9ral, suivi r\xe9gulier...). Avec un entretien rigoureux et des contr\xf4les r\xe9guliers, les implants peuvent durer de nombreuses ann\xe9es.

Qu'est-ce qu'un implant dentaire ?

Un implant est une **vis en titane** plac\xe9e chirurgicalement dans l'os de la m\xe2choire, qui sert de racine artificielle. Sur cet implant est fix\xe9e une **couronne proth\xe9tique** en c\xe9ramique, con\xe7ue pour ressembler et fonctionner comme une vraie dent. Le titane est choisi pour sa **biocompatibilit\xe9** exceptionnelle : l'os s'y soude naturellement, un ph\xe9nom\xe8ne appel\xe9 ost\xe9o-int\xe9gration.

Quand recourir \xe0 un implant ?

- Perte d'une ou plusieurs dents suite \xe0 une extraction, un traumatisme ou une maladie parodontale
- Remplacement d'un bridge (pour pr\xe9server les dents adjacentes)
- Stabilisation d'un appareil dentaire amovible
- R\xe9habilitation compl\xe8te de la m\xe2choire (technique All-on-4 ou All-on-6)

Les \xe9tapes du traitement

**1. Bilan pr\xe9implantaire**
Radio panoramique et scanner 3D (CBCT) pour \xe9valuer le volume osseux disponible, la position des nerfs et des sinus.

**2. Pose chirurgicale de l'implant**
R\xe9alis\xe9e sous anesth\xe9sie locale, la pose dure de 30 \xe0 60 minutes. Dans certains cas, une greffe osseuse est n\xe9cessaire pour augmenter le volume d'os.

**3. Phase d'ost\xe9o-int\xe9gration**
L'implant fusionne avec l'os pendant **3 \xe0 6 mois**. Une dent provisoire peut \xeatre port\xe9e durant cette p\xe9riode.

**4. Pose de la couronne d\xe9finitive**
Une empreinte optique permet de fabriquer une couronne sur mesure, fix\xe9e sur l'implant via un pilier (abutment).

Conditions de r\xe9ussite

- Un **volume osseux suffisant** (ou une greffe pr\xe9alable)
- Absence de maladies parodontales actives
- **Arr\xeat du tabac** : le tabac divise par deux le taux de succ\xe8s implantaire
- Diab\xe8te \xe9quilibr\xe9
- Bonne hygi\xe8ne bucco-dentaire au quotidien

Dur\xe9e de vie et entretien

Un implant bien int\xe9gr\xe9 peut offrir une excellente stabilit\xe9 dans le temps lorsqu’il est bien entretenu et suivi r\xe9guli\xe8rement.
La couronne proth\xe9tique peut parfois n\xe9cessiter un remplacement apr\xe8s plusieurs ann\xe9es, selon l’usure, l’hygi\xe8ne bucco-dentaire et les contraintes m\xe9caniques.
L’entretien est similaire \xe0 celui des dents naturelles :

- Brossage deux fois par jour
- Utilisation de brossettes interdentaires adapt\xe9es
- Contr\xf4les dentaires r\xe9guliers (1 \xe0 2 fois par an)

Remboursement et co\xfbt

En France, les implants dentaires ne sont g\xe9n\xe9ralement pas pris en charge par l’Assurance Maladie, sauf dans certaines situations particuli\xe8res (ag\xe9n\xe9sie, s\xe9quelles d’accident, pathologies sp\xe9cifiques).
Certaines compl\xe9mentaires sant\xe9 peuvent proposer des forfaits de remboursement pour les implants ou les proth\xe8ses associ\xe9es. Un devis personnalis\xe9 permet d’\xe9valuer pr\xe9cis\xe9ment le reste \xe0 charge.

En r\xe9sum\xe9

- L'implant est la solution la plus **durable et confortable** pour remplacer une dent
- Le traitement dure en moyenne **6 \xe0 12 mois** de la pose \xe0 la couronne d\xe9finitive
- Le **tabac est le principal facteur d'\xe9chec** : un sevrage est fortement conseill\xe9
- Un bilan radiologique pr\xe9alable est indispensable pour \xe9valuer votre \xe9ligibilit\xe9`,category:"Implantologie",readTime:"6 min"},{id:"soins-dentaires-enfants",title:"Soins dentaires pour les enfants : guide pour les parents",excerpt:"Comment prendre soin des dents de votre enfant d\xe8s le plus jeune \xe2ge.",content:`La sant\xe9 bucco-dentaire de votre enfant se construit d\xe8s les premiers mois de vie. De bonnes habitudes prises t\xf4t permettent de pr\xe9venir les caries, de favoriser un d\xe9veloppement dentaire harmonieux et d'\xe9viter l'anxi\xe9t\xe9 dentaire \xe0 l'\xe2ge adulte. L'UFSBD recommande une premi\xe8re consultation d\xe8s l'apparition de la premi\xe8re dent.

La premi\xe8re dent : d\xe8s 6 mois

Les premi\xe8res dents de lait font g\xe9n\xe9ralement leur apparition entre **6 et 12 mois**. Contrairement aux id\xe9es re\xe7ues, les dents de lait sont essentielles :

- Elles permettent la **mastication et la parole**
- Elles **maintiennent l'espace** pour les dents d\xe9finitives
- Une carie sur une dent de lait peut infecter le germe de la dent permanente sous-jacente

Comment brosser les dents d'un jeune enfant ?

- **0 \xe0 2 ans** : nettoyez les dents avec une compresse humide ou une brosse \xe0 dents adapt\xe9e, **sans dentifrice** ou avec une trace de dentifrice \xe0 500 ppm de fluor
- **2 \xe0 6 ans** : brosse souple adapt\xe9e \xe0 l'enfant + dentifrice \xe0 **500 ppm de fluor** — quantit\xe9 de la taille d'un petit pois. C'est le parent qui brosse.
- **6 ans et plus** : dentifrice \xe0 **1000 ppm de fluor** — quantit\xe9 de la taille d'un petit pois. L'enfant brosse, le parent v\xe9rifie jusqu'\xe0 8-10 ans.

Le fluor : alli\xe9 num\xe9ro un contre la carie

Le fluor renforce l'\xe9mail et inhibe les bact\xe9ries cariog\xe8nes. L'UFSBD recommande :

- D\xe8s la premi\xe8re dent : dentifrice fluor\xe9 adapt\xe9 \xe0 l'\xe2ge
- En compl\xe9ment : des **vernis fluor\xe9s** appliqu\xe9s au cabinet (2 \xe0 4 fois par an chez les enfants \xe0 risque)
- **Pas de suppl\xe9ments fluor\xe9s syst\xe9matiques** sans avis du dentiste (risque de fluorose)

La premi\xe8re consultation dentaire

Elle doit avoir lieu **avant 1 an** selon les recommandations actuelles, ou au plus tard \xe0 l'apparition des premi\xe8res dents. Cette visite permet :

- D'\xe9valuer le d\xe9veloppement dentaire
- De donner des conseils personnalis\xe9s aux parents
- D'habituer l'enfant au cabinet de fa\xe7on positive et d\xe9tendue

Le programme M’T dents prend en charge un examen bucco-dentaire de pr\xe9vention annuel chez les enfants et jeunes adultes de 3 \xe0 24 ans.

Les habitudes \xe0 \xe9viter

- **Biberon de jus de fruit ou de lait sucr\xe9** au coucher : le sucre reste en contact avec les dents toute la nuit
- **Sucer son pouce** ou une t\xe9tine au-del\xe0 de 3-4 ans : peut d\xe9former la m\xe2choire
- **Partager les couverts** avec l'enfant : les bact\xe9ries cariog\xe8nes sont transmissibles par la salive
- Donner des **bonbons et g\xe2teaux** \xe0 r\xe9p\xe9tition entre les repas

La carie pr\xe9coce du jeune enfant

La **carie du biberon** est une forme s\xe9v\xe8re qui peut toucher les b\xe9b\xe9s d\xe8s l'apparition des premi\xe8res dents. Elle se manifeste par des taches blanches ou brunes sur les dents du devant. C'est une urgence dentaire : consultez rapidement si vous observez ces signes.

En r\xe9sum\xe9

- Brossez les dents **d\xe8s la premi\xe8re dent**, deux fois par jour
- Utilisez un **dentifrice fluor\xe9 adapt\xe9 \xe0 l'\xe2ge**
- Premi\xe8re consultation dentaire **avant 12-18 mois**
- \xc9vitez les sucreries entre les repas et le biberon sucr\xe9 au coucher
- Profitez des **bilans M'T dents** gratuits tout au long de la croissance`,category:"P\xe9dodontie",readTime:"5 min"}],l=[{title:"Radio num\xe9rique",description:"Imagerie num\xe9rique haute d\xe9finition pour un diagnostic rapide et pr\xe9cis.",benefit:"Diagnostic pr\xe9cis"},{title:"Cam\xe9ra intra-orale",description:"Visualisation en temps r\xe9el afin de mieux comprendre votre traitement.",benefit:"Communication simplifi\xe9e"},{title:"Empreinte optique 3D",description:"Scanner num\xe9rique permettant des empreintes rapides et confortables.",benefit:"Confort optimal"},{title:"Scanner 3D (CBCT)",description:"Imagerie 3D pour l’analyse et la planification des traitements complexes.",benefit:"Imagerie avanc\xe9e"},{title:"St\xe9rilisation haute performance",description:"Protocoles de st\xe9rilisation rigoureux conformes aux normes en vigueur.",benefit:"S\xe9curit\xe9 sanitaire"},{title:"\xc9quipements derni\xe8re g\xe9n\xe9ration",description:"Fauteuils ergonomiques, \xe9clairage LED, et instruments de derni\xe8re technologie.",benefit:"Confort et performance"}]},1223:(e,s,t)=>{"use strict";t.d(s,{cn:()=>r});var n=t(1135),i=t(1009);function r(...e){return(0,i.m6)((0,n.W)(e))}},6176:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>C,metadata:()=>j});var n=t(9510),i=t(9981),r=t.n(i),a=t(1932),o=t.n(a);t(5023);var l=t(8570);let u=(0,l.createProxy)(String.raw`C:\Users\alibi\Documents\projects\cabinet_dentaire\src\app\providers.tsx#Providers`),d=(0,l.createProxy)(String.raw`C:\Users\alibi\Documents\projects\cabinet_dentaire\src\app\scroll-to-top.tsx#ScrollToTop`),c=(0,l.createProxy)(String.raw`C:\Users\alibi\Documents\projects\cabinet_dentaire\src\components\layout\Header.tsx#default`);var p=t(7371),x=t(71),m=t(7799),g=t(1319),f=t(2688),v=t(6615),b=t(6206);let h=()=>n.jsx("footer",{className:"bg-primary text-primary-foreground",children:(0,n.jsxs)("div",{className:"container px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",children:[(0,n.jsxs)("div",{children:[n.jsx("div",{className:"mb-4",children:n.jsx("img",{src:"/logo_footer.png",alt:"Logo",className:"h-20 w-auto object-contain"})}),n.jsx("p",{className:"text-primary-foreground/70 text-sm leading-relaxed mb-4",children:"Centre de sant\xe9 dentaire Strasbourg"})]}),(0,n.jsxs)("div",{children:[n.jsx("h3",{className:"font-serif font-bold text-accent mb-4",children:"Navigation"}),n.jsx("ul",{className:"space-y-2 text-sm text-primary-foreground/70",children:[["Accueil","/"],["Le Centre","/cabinet"],["Nos Services","/soins"],["L'\xc9quipe","/equipe"],["Conseils","/blog"],["FAQ","/faq"],["Nous contacter","/contact"]].map(([e,s])=>n.jsx("li",{children:n.jsx(p.default,{href:s,className:"hover:text-accent transition-colors",children:e})},s))})]}),(0,n.jsxs)("div",{children:[n.jsx("h3",{className:"font-serif font-bold text-accent mb-4",children:"Nos Services"}),n.jsx("ul",{className:"space-y-2 text-sm text-primary-foreground/70",children:["Parodontologie","Soins conservateurs","Proth\xe8ses","Implants","Radiologie dentaire","Chirurgie","Urgences dentaires","P\xe9dodontie"].map(e=>n.jsx("li",{children:n.jsx(p.default,{href:"/soins",className:"hover:text-accent transition-colors",children:e})},e))})]}),(0,n.jsxs)("div",{children:[n.jsx("h3",{className:"font-serif font-bold text-accent mb-4",children:"Contact"}),(0,n.jsxs)("ul",{className:"space-y-3 text-sm text-primary-foreground/70",children:[(0,n.jsxs)("li",{className:"flex items-start gap-2",children:[n.jsx(x.Z,{size:16,className:"mt-0.5 shrink-0 text-accent"}),b.y6.address,", ",b.y6.zip," ",b.y6.city]}),n.jsx("li",{children:(0,n.jsxs)("a",{href:`tel:${b.y6.phone}`,className:"flex items-center gap-2 hover:text-accent transition-colors",children:[n.jsx(m.Z,{size:16,className:"text-accent"}),b.y6.phone]})}),n.jsx("li",{children:(0,n.jsxs)("a",{href:`mailto:${b.y6.email}`,className:"flex items-center gap-2 hover:text-accent transition-colors",children:[n.jsx(g.Z,{size:16,className:"text-accent"}),b.y6.email]})})]}),(0,n.jsxs)("a",{href:b.y6.doctolibProfileUrl,target:"_blank",rel:"noopener noreferrer",className:"mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-mint-dark transition-colors",children:[n.jsx(f.Z,{size:16}),"Prendre RDV"]}),(0,n.jsxs)(p.default,{href:"/contact",className:"mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/80 text-destructive-foreground text-sm font-medium hover:bg-destructive/100 transition-colors",children:[n.jsx(v.Z,{size:16}),"Urgence dentaire"]})]})]}),(0,n.jsxs)("div",{className:"border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50",children:[(0,n.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," ",b.y6.name,". Tous droits r\xe9serv\xe9s."]}),(0,n.jsxs)("div",{className:"flex gap-4",children:[n.jsx(p.default,{href:"/mentions-legales",className:"hover:text-accent transition-colors",children:"Mentions l\xe9gales"}),n.jsx(p.default,{href:"/politique-confidentialite",className:"hover:text-accent transition-colors",children:"Politique de confidentialit\xe9"})]})]})]})}),q=()=>(0,n.jsxs)("a",{href:b.y6.doctolibProfileUrl,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3.5 rounded-full bg-accent text-accent-foreground font-medium text-sm animate-float",style:{boxShadow:"var(--shadow-button)"},children:[n.jsx(f.Z,{size:18}),"Prendre RDV"]}),y=({children:e})=>(0,n.jsxs)("div",{className:"min-h-screen flex flex-col",children:[n.jsx(c,{}),n.jsx("main",{className:"flex-1",children:e}),n.jsx(h,{}),n.jsx(q,{})]});var L=t(441);let j={metadataBase:new URL("https://la-maison-dentaire.fr"),title:{default:"Dentiste \xe0 Strasbourg | La Maison Dentaire",template:"%s | La Maison Dentaire"},description:"La Maison Dentaire \xe0 Strasbourg – soins dentaires, implants, urgences et esth\xe9tique. Cabinet conventionn\xe9 face \xe0 l'arr\xeat de tram Elsau.",alternates:{canonical:"/"},openGraph:{title:"La Maison Dentaire | Dentiste \xe0 Strasbourg",description:"Des soins dentaires d'excellence dans un cadre moderne et rassurant \xe0 Strasbourg – Elsau.",type:"website",locale:"fr_FR",url:"https://la-maison-dentaire.fr"},robots:{index:!0,follow:!0}},D={"@context":"https://schema.org","@type":"Dentist",name:"La Maison Dentaire",address:{"@type":"PostalAddress",streetAddress:"21 Rue L\xe9onard de Vinci",addressLocality:"Strasbourg",postalCode:"67200",addressCountry:"FR"},telephone:"+33388677257",email:"info@la-maison-dentaire.fr",priceRange:"€€",url:"https://la-maison-dentaire.fr"};function C({children:e}){return(0,n.jsxs)("html",{lang:"fr",className:`${r().variable} ${o().variable}`,children:[n.jsx("head",{children:n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(D)}})}),(0,n.jsxs)("body",{children:[(0,n.jsxs)(u,{children:[n.jsx(d,{}),n.jsx(y,{children:e})]}),n.jsx(L.c,{})]})]})}},2523:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var n=t(9510),i=t(7371);function r(){return n.jsx("div",{className:"flex min-h-[60vh] items-center justify-center bg-background",children:(0,n.jsxs)("div",{className:"text-center",children:[n.jsx("p",{className:"text-accent font-medium text-sm uppercase tracking-wide mb-4",children:"Erreur 404"}),n.jsx("h1",{className:"text-4xl md:text-5xl font-serif font-bold text-foreground mb-4",children:"Page introuvable"}),n.jsx("p",{className:"text-muted-foreground mb-8 max-w-md mx-auto",children:"La page que vous recherchez n'existe pas ou a \xe9t\xe9 d\xe9plac\xe9e."}),n.jsx(i.default,{href:"/",className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-mint-dark transition-colors",children:"Retour \xe0 l'accueil"})]})})}},6206:(e,s,t)=>{"use strict";t.d(s,{AH:()=>i,y6:()=>n});let n={name:"La Maison Dentaire",slogan:"Votre centre de soins dentaires \xe0 Strasbourg",subtitle:"Soins dentaires pour adultes et enfants \xe0 Strasbourg - Elsau. Centre conventionn\xe9.",address:"21 Rue L\xe9onard de Vinci",logo:"/logo1.webp",city:"Strasbourg",zip:"67200",phone:"03 88 67 72 57",email:"info@la-maison-dentaire.fr",formspreeEndpoint:"https://formspree.io/f/mnjoezrd",openingHours:[{day:"Lundi",hours:"9h - 19h"},{day:"Mardi",hours:"9h - 19h"},{day:"Mercredi",hours:"9h - 19h"},{day:"Jeudi",hours:"9h - 19h"},{day:"Vendredi",hours:"9h - 18h"},{day:"Samedi",hours:"Ferm\xe9"},{day:"Dimanche",hours:"Ferm\xe9"}],googleMapsEmbedUrl:"https://www.google.com/maps?q=21+Rue+L%C3%A9onard+de+Vinci,+67200+Strasbourg,+France&output=embed",placeId:"VOTRE_PLACE_ID",googlePlacesApiKey:"VOTRE_GOOGLE_PLACES_API_KEY",doctolibProfileUrl:"https://www.doctolib.fr/centre-medical-et-dentaire/strasbourg/maison-dentaire-strasbourg",socialLinks:{facebook:"https://facebook.com",instagram:"https://instagram.com",linkedin:"https://linkedin.com"},contactEmail:"info@la-maison-dentaire.fr",webhookUrl:""},i=[{id:"bien-se-brosser-les-dents",title:"Comment bien se brosser les dents ?",excerpt:"D\xe9couvrez les techniques de brossage recommand\xe9es par nos dentistes pour une hygi\xe8ne bucco-dentaire optimale.",content:`Le brossage des dents est le geste fondamental de l'hygi\xe8ne bucco-dentaire. Pourtant, beaucoup de personnes ne le r\xe9alisent pas correctement.

 La technique recommand\xe9e

Utilisez une brosse \xe0 dents souple et un dentifrice fluor\xe9. Placez la brosse \xe0 45\xb0 par rapport \xe0 la gencive et effectuez des mouvements circulaires doux, de la gencive vers la dent.

 Dur\xe9e et fr\xe9quence

Brossez-vous les dents pendant **2 minutes minimum**, au moins **2 fois par jour** (matin et soir). Le brossage du soir est le plus important.

 N'oubliez pas

- Changez de brosse \xe0 dents tous les 3 mois
- Utilisez du fil dentaire ou des brossettes interdentaires
- Compl\xe9tez avec un bain de bouche si recommand\xe9 par votre dentiste`,category:"Hygi\xe8ne",readTime:"3 min"},{id:"frequence-consultation",title:"\xc0 quelle fr\xe9quence consulter son dentiste ?",excerpt:"Un suivi r\xe9gulier est essentiel pour pr\xe9venir les probl\xe8mes dentaires. Voici nos recommandations.",content:`Un suivi dentaire r\xe9gulier est la base d'une bonne sant\xe9 bucco-dentaire. Pourtant, beaucoup de patients consultent uniquement en cas de douleur — ce qui est souvent trop tard. L'UFSBD insiste sur l'importance d'un contr\xf4le pr\xe9ventif annuel pour tous, quel que soit l'\xe2ge.

La fr\xe9quence recommand\xe9e

Pour un adulte en bonne sant\xe9 bucco-dentaire, **une visite par an** est le minimum recommand\xe9. Pour les enfants, les adolescents, les femmes enceintes, les fumeurs ou les patients diab\xe9tiques, **deux visites annuelles** sont pr\xe9conis\xe9es. Votre dentiste adaptera le rythme \xe0 votre situation personnelle.

Pourquoi ne pas attendre la douleur ?

La carie dentaire et les maladies parodontales sont souvent **indolores \xe0 leurs d\xe9buts**. Une consultation pr\xe9ventive permet de les d\xe9tecter t\xf4t, quand elles sont encore simples et peu co\xfbteuses \xe0 traiter. Une carie non trait\xe9e peut \xe9voluer vers une infection, voire n\xe9cessiter une extraction.

Ce que comprend un bilan annuel

- **Examen clinique complet** de toutes les dents et des gencives
- **D\xe9tartrage** pour \xe9liminer le tartre inaccessible \xe0 la brosse
- **Radiographies** cibl\xe9es ou panoramique selon les besoins
- **D\xe9pistage** des l\xe9sions muqueuses et cancers buccaux
- **Conseils personnalis\xe9s** d'hygi\xe8ne adapt\xe9s \xe0 votre situation

Le r\xf4le cl\xe9 du d\xe9tartrage

Le tartre est du plaque dentaire min\xe9ralis\xe9e que le brossage seul ne peut pas \xe9liminer. Son accumulation irrite les gencives et favorise la gingivite, puis la parodontite. Un d\xe9tartrage r\xe9gulier — pris en charge partiellement par l'Assurance Maladie — est indispensable pour maintenir des gencives saines.

Le programme M'T dents

Avec le programme **M'T dents tous les ans !**, l'Assurance Maladie et les compl\xe9mentaires sant\xe9 permettent \xe0 tous les enfants et jeunes adultes de **3 \xe0 24 ans** de b\xe9n\xe9ficier d'un rendez-vous de pr\xe9vention offert, tous les ans, chez le chirurgien-dentiste — et des soins, si n\xe9cessaire.

En r\xe9sum\xe9

- Consultez au minimum **une fois par an**
- **Deux fois par an** si vous \xeates \xe0 risque (tabac, diab\xe8te, grossesse, orthodontie)
- N'attendez jamais l'apparition d'une douleur pour prendre rendez-vous
- Les enfants doivent consulter **d\xe8s l'apparition de la premi\xe8re dent**`,category:"Pr\xe9vention",readTime:"4 min"},{id:"sensibilite-dentaire",title:"Sensibilit\xe9 dentaire : causes et solutions",excerpt:"Douleur au chaud, au froid ? La sensibilit\xe9 dentaire touche de nombreuses personnes. D\xe9couvrez comment y rem\xe9dier.",content:`La sensibilit\xe9 dentaire — ou hypersensibilit\xe9 dentinaire — se manifeste par une douleur vive et br\xe8ve d\xe9clench\xe9e par le froid, le chaud, le sucr\xe9, l'acide ou parfois le simple contact. Elle touche pr\xe8s d'**un adulte sur trois** en France et peut alt\xe9rer consid\xe9rablement la qualit\xe9 de vie.

Pourquoi les dents deviennent-elles sensibles ?

Chaque dent est recouverte d'\xe9mail, une couche protectrice dure et imperm\xe9able. Sous l'\xe9mail se trouve la **dentine**, un tissu parcouru de milliers de microtubules reliant la surface de la dent au nerf. Lorsque la dentine est expos\xe9e — que ce soit par \xe9rosion de l'\xe9mail ou r\xe9cession gingivale —, les stimuli thermiques et chimiques atteignent directement le nerf, provoquant la douleur.

Les causes principales

- **\xc9rosion acide** : consommation excessive de sodas, jus de fruits, aliments acides
- **Brossage trop vigoureux** avec une brosse trop dure
- **R\xe9cession gingivale** exposant les collets et les racines
- **Bruxisme** (grincement des dents) usant l'\xe9mail
- **Caries** ou fissures dentaires
- **Traitement de blanchiment** (sensibilit\xe9 temporaire)
- **Soins dentaires r\xe9cents** (plombage, couronne)

Que faire au quotidien ?

- Utilisez un **dentifrice sp\xe9cifique sensibilit\xe9** contenant du nitrate de potassium ou du fluorure d'\xe9tain — les effets se ressentent apr\xe8s 2 \xe0 4 semaines d'utilisation r\xe9guli\xe8re
- Adoptez une **brosse \xe0 dents souple** et un brossage doux en mouvements circulaires
- \xc9vitez de brosser juste apr\xe8s un repas acide : attendez **30 minutes**
- Limitez les aliments et boissons acides
- Utilisez une **paille** pour les boissons acides ou gazeuses afin de limiter le contact avec les dents

Quand consulter ?

Si la douleur persiste plus de quelques secondes, survient spontan\xe9ment ou s'intensifie, il est imp\xe9ratif de consulter. Une sensibilit\xe9 persistante peut signaler une **carie profonde**, une fissure, ou une pathologie pulpaire n\xe9cessitant un traitement appropri\xe9.

Les traitements disponibles au cabinet

- **Application de vernis fluor\xe9** pour obstruer les tubules dentinaires
- **Agents de liaison** (adh\xe9sifs dentinaires) appliqu\xe9s sur les zones sensibles
- **Goutti\xe8re de protection** en cas de bruxisme
- **Traitement parodontal** si la r\xe9cession gingivale est en cause
- En dernier recours : **traitement canalaire** si le nerf est atteint

En r\xe9sum\xe9

- La sensibilit\xe9 dentaire est fr\xe9quente mais **toujours \xe0 explorer**
- Un dentifrice adapt\xe9 suffit souvent pour les formes l\xe9g\xe8res
- **Ne pas ignorer** une douleur persistante ou spontan\xe9e
- Votre dentiste dispose de solutions efficaces pour chaque cause`,category:"Soins",readTime:"5 min"},{id:"dents-de-sagesse",title:"Dents de sagesse : faut-il les extraire ?",excerpt:"Les dents de sagesse posent souvent probl\xe8me. D\xe9couvrez quand et pourquoi il peut \xeatre n\xe9cessaire de les retirer.",content:`Les dents de sagesse — ou troisi\xe8mes molaires — sont les derni\xe8res dents \xe0 faire leur apparition, g\xe9n\xe9ralement entre **17 et 25 ans**. Elles sont au nombre de quatre, une par coin de la m\xe2choire. Leur \xe9ruption est souvent source d'inconfort, voire de complications qui rendent leur extraction n\xe9cessaire.

Pourquoi posent-elles probl\xe8me ?

Au cours de l'\xe9volution, la m\xe2choire humaine a r\xe9tr\xe9ci, mais le nombre de dents est rest\xe9 le m\xeame. Les dents de sagesse arrivent donc souvent dans un espace insuffisant. Elles peuvent \xeatre :

- **Incluses** : rest\xe9es dans l'os sans sortir
- **Semi-incluses** : partiellement sorties, coinc\xe9es sous la gencive
- **En mauvaise position** : inclin\xe9es vers la dent voisine (dent de sagesse en m\xe9sioversion)

Quand l'extraction est-elle n\xe9cessaire ?

Toutes les dents de sagesse ne doivent pas \xeatre extraites. L'indication d\xe9pend d'un examen clinique et d'une **radio panoramique**. L'extraction est recommand\xe9e dans les cas suivants :

- **P\xe9ricoronarite** : infection r\xe9p\xe9t\xe9e de la gencive autour d'une dent semi-incluse
- **Kyste ou tumeur** se d\xe9veloppant autour de la dent incluse
- **Carie** inaccessible au traitement conservateur
- **Pression sur la dent adjacente** risquant d'endommager sa racine
- **Probl\xe8me orthodontique** : manque de place compromettant l'alignement

Comment se d\xe9roule l'extraction ?

L'intervention se r\xe9alise sous **anesth\xe9sie locale** au cabinet. Elle peut n\xe9cessiter une incision de la gencive et, parfois, un d\xe9coupage de la dent en plusieurs fragments si elle est profond\xe9ment incluse. La dur\xe9e varie de 15 \xe0 60 minutes selon la complexit\xe9. Dans les cas difficiles, le praticien peut orienter vers un chirurgien maxillo-facial.

Les suites op\xe9ratoires

- **Gonflement et douleur** durant 2 \xe0 5 jours, g\xe9r\xe9s par antalgiques et anti-inflammatoires
- **Alimentation molle** pendant quelques jours
- **Pas de tabac** pendant au moins 48h (risque d'alv\xe9olite s\xe8che)
- Bains de bouche antiseptiques d\xe9but\xe9s apr\xe8s 24h selon les recommandations du praticien
- Les points de suture (r\xe9sorbables ou non) disparaissent en 7 \xe0 10 jours

Faut-il attendre ou agir pr\xe9ventivement ?

L'UFSBD recommande une surveillance radiologique r\xe9guli\xe8re des dents de sagesse d\xe8s 16-17 ans. Une extraction pr\xe9ventive avant 25 ans est souvent moins complexe, car les racines ne sont pas encore enti\xe8rement form\xe9es et la cicatrisation est plus rapide.

En r\xe9sum\xe9

- Une **radio panoramique** est indispensable pour \xe9valuer la situation
- L'extraction n'est pas syst\xe9matique, mais souvent in\xe9vitable
- Mieux vaut intervenir **t\xf4t** (avant 25 ans) pour une r\xe9cup\xe9ration facilit\xe9e
- En cas de douleur, gonflement ou fi\xe8vre : consultez sans d\xe9lai`,category:"Chirurgie",readTime:"4 min"},{id:"gingivite",title:"Gingivite : comment la reconna\xeetre et la traiter ?",excerpt:"Gencives rouges, gonfl\xe9es ou qui saignent ? Il s'agit peut-\xeatre d'une gingivite. Voici comment agir.",content:`La gingivite est une inflammation des gencives caus\xe9e par l'accumulation de plaque dentaire bact\xe9rienne \xe0 la jonction entre les dents et la gencive. C'est la forme la plus courante de maladie parodontale : elle touche pr\xe8s de **80 % des adultes** \xe0 un moment de leur vie. Bonne nouvelle : elle est **r\xe9versible** si elle est prise en charge \xe0 temps.

Comment la reconna\xeetre ?

Les signes caract\xe9ristiques de la gingivite sont :

- **Gencives rouges ou violac\xe9es** (au lieu d'un rose p\xe2le sain)
- **Saignements** lors du brossage ou au contact de la soie dentaire
- **Gencives gonfl\xe9es ou douloureuses** au toucher
- **Mauvaise haleine** persistante (halitose)
- Gencives qui semblent se **r\xe9tracter** l\xe9g\xe8rement

\xc0 noter : la gingivite est souvent **indolore au repos**, ce qui explique pourquoi beaucoup de patients la n\xe9gligent.

Les causes de la gingivite

- **Plaque dentaire** insuffisamment \xe9limin\xe9e par le brossage
- **Tartre** irritant chroniquement la gencive
- **Tabac** : ralentit la cicatrisation et masque les saignements
- **Grossesse** : les variations hormonales augmentent la sensibilit\xe9 des gencives
- **Diab\xe8te** mal \xe9quilibr\xe9 : favorise les infections gingivales
- Certains **m\xe9dicaments** (anti\xe9pileptiques, immunosuppresseurs)
- **Stress** et fatigue chronique

Gingivite ou parodontite : quelle diff\xe9rence ?

La gingivite touche uniquement la gencive, sans atteindre l'os alv\xe9olaire. Si elle n'est pas trait\xe9e, elle peut \xe9voluer en **parodontite** — une maladie plus s\xe9v\xe8re qui d\xe9truit progressivement l'os et les fibres de soutien de la dent, pouvant mener \xe0 la mobilit\xe9 puis \xe0 la perte des dents.

Le traitement au cabinet

Le traitement de premi\xe8re intention est le **d\xe9tartrage** (surfa\xe7age radiculaire si n\xe9cessaire), r\xe9alis\xe9 par votre chirurgien-dentiste. Il permet d'\xe9liminer le tartre supra et sous-gingival inaccessible \xe0 la brosse. Ce soin est partiellement rembours\xe9 par l'Assurance Maladie (une s\xe9ance par an).

Ce que vous pouvez faire \xe0 la maison

- **Brossage minutieux** : 2 minutes minimum, 2 fois par jour, avec une brosse souple
- Utilisation quotidienne de **fil dentaire ou de brossettes interdentaires** pour nettoyer les espaces entre les dents
- **Bain de bouche** \xe0 la chlorhexidine sur prescription, en cure courte (7 \xe0 14 jours)
- Arr\xeat du **tabac**, qui masque les saignements et aggrave l'inflammation

En r\xe9sum\xe9

- Des gencives qui **saignent ne sont pas normales** : c'est un signal d'alarme
- La gingivite est **gu\xe9rissable** avec un bon traitement et une hygi\xe8ne rigoureuse
- Sans traitement, elle \xe9volue vers la parodontite, irr\xe9versible
- Un contr\xf4le chez le dentiste d\xe8s les premiers signes est indispensable`,category:"Parodontologie",readTime:"4 min"},{id:"blanchiment-dentaire",title:"Blanchiment dentaire : ce qu'il faut savoir",excerpt:"Envie d'un sourire plus blanc ? D\xe9couvrez les options de blanchiment s\xfbres et efficaces.",content:`Le blanchiment dentaire est l'un des traitements esth\xe9tiques les plus demand\xe9s. Mais entre les kits vendus en grande surface, les produits non r\xe9glement\xe9s et les techniques professionnelles, il est essentiel de savoir \xe0 qui faire confiance et ce qui est r\xe9ellement efficace — et sans danger.

Comment fonctionne le blanchiment ?

Le principe repose sur l'utilisation de **peroxyde d'hydrog\xe8ne** (eau oxyg\xe9n\xe9e) ou de **peroxyde de carbamide**, qui p\xe9n\xe8tre dans l'\xe9mail et oxyde les mol\xe9cules de pigments responsables de la coloration. En France, seuls les chirurgiens-dentistes sont autoris\xe9s \xe0 utiliser des concentrations sup\xe9rieures \xe0 **6 % de peroxyde d'hydrog\xe8ne**.

Les deux techniques professionnelles

**Blanchiment au fauteuil (en cabinet)**
R\xe9alis\xe9 en une \xe0 deux s\xe9ances d'environ une heure. Le praticien applique un gel \xe0 haute concentration activ\xe9 par une lampe LED ou laser. Les r\xe9sultats sont imm\xe9diats et peuvent durer **1 \xe0 3 ans** selon les habitudes.

**Blanchiment \xe0 domicile (goutti\xe8res sur mesure)**
Des goutti\xe8res thermoform\xe9es personnalis\xe9es sont fabriqu\xe9es \xe0 partir d'empreintes de vos dents. Vous appliquez vous-m\xeame le gel \xe0 concentration mod\xe9r\xe9e **chaque nuit pendant 14 \xe0 21 jours**. Technique progressive, r\xe9sultats durables.

Qui peut en b\xe9n\xe9ficier ?

Le blanchiment est indiqu\xe9 pour les dents pr\xe9sentant :

- Colorations li\xe9es au **caf\xe9, th\xe9, vin, tabac**
- Jaunissement naturel avec l'\xe2ge
- Taches dues \xe0 certains **m\xe9dicaments** (t\xe9tracyclines l\xe9g\xe8res)

Il est contre-indiqu\xe9 en cas de :

- **Grossesse ou allaitement**
- Dents avec nombreuses **restaurations ant\xe9rieures** (les proth\xe8ses ne blanchissent pas)
- **Hypersensibilit\xe9** dentaire s\xe9v\xe8re non trait\xe9e
- Moins de **18 ans**
- Caries ou maladies parodontales actives

Les produits en grande surface : sont-ils efficaces ?

Les dentifrices et kits blanchissants vendus en pharmacie ou supermarch\xe9 contiennent des concentrations tr\xe8s faibles (maximum 0,1 % de peroxyde). Leur effet est essentiellement **abrasif** — ils \xe9liminent les taches de surface — mais ils ne modifient pas la couleur intrins\xe8que de l'\xe9mail. Certains peuvent m\xeame fragiliser l'\xe9mail \xe0 long terme s'ils sont trop abrasifs.

Effets secondaires possibles

- **Sensibilit\xe9 temporaire** pendant et apr\xe8s le traitement (3 \xe0 5 jours)
- **Irritation des gencives** si le gel entre en contact avec elles
- Ces effets sont transitoires et disparaissent spontan\xe9ment

Entretien et dur\xe9e des r\xe9sultats

Pour prolonger les effets :

- \xc9vitez les aliments et boissons colorants pendant **48h apr\xe8s chaque s\xe9ance**
- Limitez le caf\xe9, th\xe9 et vin rouge au quotidien
- Ne fumez pas
- Maintenez une hygi\xe8ne rigoureuse et des contr\xf4les r\xe9guliers

En r\xe9sum\xe9

- Le blanchiment professionnel est **s\xfbr et efficace** sous supervision dentaire
- Les r\xe9sultats durent **1 \xe0 3 ans** avec un bon entretien
- Traitez d'abord toute pathologie dentaire avant d'envisager un blanchiment`,category:"Esth\xe9tique",readTime:"5 min"},{id:"implants-dentaires-guide",title:"Implants dentaires : ce qu’il faut savoir",excerpt:"Tout ce que vous devez savoir sur les implants : proc\xe9dure, dur\xe9e, co\xfbt et r\xe9sultats.",content:`L'implant dentaire est aujourd'hui consid\xe9r\xe9 comme la solution de r\xe9f\xe9rence pour remplacer une dent manquante. Il offre un r\xe9sultat esth\xe9tique et fonctionnel proche de la dent naturelle, avec une excellente stabilit\xe9 dans le temps lorsqu'il est bien entretenu.
La dur\xe9e de vie d'un implant d\xe9pend de nombreux facteurs (hygi\xe8ne bucco-dentaire, \xe9tat de sant\xe9 g\xe9n\xe9ral, suivi r\xe9gulier...). Avec un entretien rigoureux et des contr\xf4les r\xe9guliers, les implants peuvent durer de nombreuses ann\xe9es.

Qu'est-ce qu'un implant dentaire ?

Un implant est une **vis en titane** plac\xe9e chirurgicalement dans l'os de la m\xe2choire, qui sert de racine artificielle. Sur cet implant est fix\xe9e une **couronne proth\xe9tique** en c\xe9ramique, con\xe7ue pour ressembler et fonctionner comme une vraie dent. Le titane est choisi pour sa **biocompatibilit\xe9** exceptionnelle : l'os s'y soude naturellement, un ph\xe9nom\xe8ne appel\xe9 ost\xe9o-int\xe9gration.

Quand recourir \xe0 un implant ?

- Perte d'une ou plusieurs dents suite \xe0 une extraction, un traumatisme ou une maladie parodontale
- Remplacement d'un bridge (pour pr\xe9server les dents adjacentes)
- Stabilisation d'un appareil dentaire amovible
- R\xe9habilitation compl\xe8te de la m\xe2choire (technique All-on-4 ou All-on-6)

Les \xe9tapes du traitement

**1. Bilan pr\xe9implantaire**
Radio panoramique et scanner 3D (CBCT) pour \xe9valuer le volume osseux disponible, la position des nerfs et des sinus.

**2. Pose chirurgicale de l'implant**
R\xe9alis\xe9e sous anesth\xe9sie locale, la pose dure de 30 \xe0 60 minutes. Dans certains cas, une greffe osseuse est n\xe9cessaire pour augmenter le volume d'os.

**3. Phase d'ost\xe9o-int\xe9gration**
L'implant fusionne avec l'os pendant **3 \xe0 6 mois**. Une dent provisoire peut \xeatre port\xe9e durant cette p\xe9riode.

**4. Pose de la couronne d\xe9finitive**
Une empreinte optique permet de fabriquer une couronne sur mesure, fix\xe9e sur l'implant via un pilier (abutment).

Conditions de r\xe9ussite

- Un **volume osseux suffisant** (ou une greffe pr\xe9alable)
- Absence de maladies parodontales actives
- **Arr\xeat du tabac** : le tabac divise par deux le taux de succ\xe8s implantaire
- Diab\xe8te \xe9quilibr\xe9
- Bonne hygi\xe8ne bucco-dentaire au quotidien

Dur\xe9e de vie et entretien

Un implant bien int\xe9gr\xe9 peut offrir une excellente stabilit\xe9 dans le temps lorsqu’il est bien entretenu et suivi r\xe9guli\xe8rement.
La couronne proth\xe9tique peut parfois n\xe9cessiter un remplacement apr\xe8s plusieurs ann\xe9es, selon l’usure, l’hygi\xe8ne bucco-dentaire et les contraintes m\xe9caniques.
L’entretien est similaire \xe0 celui des dents naturelles :

- Brossage deux fois par jour
- Utilisation de brossettes interdentaires adapt\xe9es
- Contr\xf4les dentaires r\xe9guliers (1 \xe0 2 fois par an)

Remboursement et co\xfbt

En France, les implants dentaires ne sont g\xe9n\xe9ralement pas pris en charge par l’Assurance Maladie, sauf dans certaines situations particuli\xe8res (ag\xe9n\xe9sie, s\xe9quelles d’accident, pathologies sp\xe9cifiques).
Certaines compl\xe9mentaires sant\xe9 peuvent proposer des forfaits de remboursement pour les implants ou les proth\xe8ses associ\xe9es. Un devis personnalis\xe9 permet d’\xe9valuer pr\xe9cis\xe9ment le reste \xe0 charge.

En r\xe9sum\xe9

- L'implant est la solution la plus **durable et confortable** pour remplacer une dent
- Le traitement dure en moyenne **6 \xe0 12 mois** de la pose \xe0 la couronne d\xe9finitive
- Le **tabac est le principal facteur d'\xe9chec** : un sevrage est fortement conseill\xe9
- Un bilan radiologique pr\xe9alable est indispensable pour \xe9valuer votre \xe9ligibilit\xe9`,category:"Implantologie",readTime:"6 min"},{id:"soins-dentaires-enfants",title:"Soins dentaires pour les enfants : guide pour les parents",excerpt:"Comment prendre soin des dents de votre enfant d\xe8s le plus jeune \xe2ge.",content:`La sant\xe9 bucco-dentaire de votre enfant se construit d\xe8s les premiers mois de vie. De bonnes habitudes prises t\xf4t permettent de pr\xe9venir les caries, de favoriser un d\xe9veloppement dentaire harmonieux et d'\xe9viter l'anxi\xe9t\xe9 dentaire \xe0 l'\xe2ge adulte. L'UFSBD recommande une premi\xe8re consultation d\xe8s l'apparition de la premi\xe8re dent.

La premi\xe8re dent : d\xe8s 6 mois

Les premi\xe8res dents de lait font g\xe9n\xe9ralement leur apparition entre **6 et 12 mois**. Contrairement aux id\xe9es re\xe7ues, les dents de lait sont essentielles :

- Elles permettent la **mastication et la parole**
- Elles **maintiennent l'espace** pour les dents d\xe9finitives
- Une carie sur une dent de lait peut infecter le germe de la dent permanente sous-jacente

Comment brosser les dents d'un jeune enfant ?

- **0 \xe0 2 ans** : nettoyez les dents avec une compresse humide ou une brosse \xe0 dents adapt\xe9e, **sans dentifrice** ou avec une trace de dentifrice \xe0 500 ppm de fluor
- **2 \xe0 6 ans** : brosse souple adapt\xe9e \xe0 l'enfant + dentifrice \xe0 **500 ppm de fluor** — quantit\xe9 de la taille d'un petit pois. C'est le parent qui brosse.
- **6 ans et plus** : dentifrice \xe0 **1000 ppm de fluor** — quantit\xe9 de la taille d'un petit pois. L'enfant brosse, le parent v\xe9rifie jusqu'\xe0 8-10 ans.

Le fluor : alli\xe9 num\xe9ro un contre la carie

Le fluor renforce l'\xe9mail et inhibe les bact\xe9ries cariog\xe8nes. L'UFSBD recommande :

- D\xe8s la premi\xe8re dent : dentifrice fluor\xe9 adapt\xe9 \xe0 l'\xe2ge
- En compl\xe9ment : des **vernis fluor\xe9s** appliqu\xe9s au cabinet (2 \xe0 4 fois par an chez les enfants \xe0 risque)
- **Pas de suppl\xe9ments fluor\xe9s syst\xe9matiques** sans avis du dentiste (risque de fluorose)

La premi\xe8re consultation dentaire

Elle doit avoir lieu **avant 1 an** selon les recommandations actuelles, ou au plus tard \xe0 l'apparition des premi\xe8res dents. Cette visite permet :

- D'\xe9valuer le d\xe9veloppement dentaire
- De donner des conseils personnalis\xe9s aux parents
- D'habituer l'enfant au cabinet de fa\xe7on positive et d\xe9tendue

Le programme M’T dents prend en charge un examen bucco-dentaire de pr\xe9vention annuel chez les enfants et jeunes adultes de 3 \xe0 24 ans.

Les habitudes \xe0 \xe9viter

- **Biberon de jus de fruit ou de lait sucr\xe9** au coucher : le sucre reste en contact avec les dents toute la nuit
- **Sucer son pouce** ou une t\xe9tine au-del\xe0 de 3-4 ans : peut d\xe9former la m\xe2choire
- **Partager les couverts** avec l'enfant : les bact\xe9ries cariog\xe8nes sont transmissibles par la salive
- Donner des **bonbons et g\xe2teaux** \xe0 r\xe9p\xe9tition entre les repas

La carie pr\xe9coce du jeune enfant

La **carie du biberon** est une forme s\xe9v\xe8re qui peut toucher les b\xe9b\xe9s d\xe8s l'apparition des premi\xe8res dents. Elle se manifeste par des taches blanches ou brunes sur les dents du devant. C'est une urgence dentaire : consultez rapidement si vous observez ces signes.

En r\xe9sum\xe9

- Brossez les dents **d\xe8s la premi\xe8re dent**, deux fois par jour
- Utilisez un **dentifrice fluor\xe9 adapt\xe9 \xe0 l'\xe2ge**
- Premi\xe8re consultation dentaire **avant 12-18 mois**
- \xc9vitez les sucreries entre les repas et le biberon sucr\xe9 au coucher
- Profitez des **bilans M'T dents** gratuits tout au long de la croissance`,category:"P\xe9dodontie",readTime:"5 min"}]},5023:()=>{}};