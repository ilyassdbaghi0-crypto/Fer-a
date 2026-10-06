// Product catalogue — shared by all pages
// cat: "masques" | "coffrets" | "corps"
const products = [
  {id:1,cat:"masques",name:"Masques tissu aux fruits",desc:"Lot de 6 · Myrtille, aloé, pêche…",price:12.9,old:null,tone:"#f3d9d6",badge:"Nouveau",
   long:"Un assortiment de six masques en tissu, chacun inspiré d'un fruit ou d'une plante : myrtille, aloé, pêche, grenade, miel et concombre. Le tissu doux et respirant épouse le visage et l'imprègne d'une essence hydratante, pour un vrai moment de détente. 25 g par masque.",
   actives:["Myrtille & collagène","Aloé & céramide","Pêche & peptide","Grenade & polypeptide","Miel & niacinamide","Concombre & acide hyaluronique"],
   use:"Après le nettoyage, déplier le masque et l'appliquer sur le visage. Laisser poser 15 à 20 minutes, retirer, puis masser le surplus d'essence jusqu'à absorption. 1 à 2 fois par semaine."},
  {id:2,cat:"masques",name:"PDRN Pink Collagen",desc:"Masque gel · Niacinamide",price:5.9,old:7.9,tone:"#f6d2d3",badge:"Best-seller",
   long:"Un masque gel en une pièce, à la texture fondante, enrichi en Sodium DNA (PDRN), niacinamide et collagène hydrolysé. Il est conçu pour hydrater en profondeur et laisser la peau douce et confortable. 1 masque, 28 g.",
   actives:["Sodium DNA (PDRN)","Niacinamide","Collagène hydrolysé"],
   use:"Appliquer sur une peau propre et sèche. Laisser poser 20 à 30 minutes, retirer, puis masser le surplus. 1 à 2 fois par semaine."},
  {id:3,cat:"masques",name:"Kojic Acid Turmeric",desc:"Masque gel · Niacinamide 2 %",price:5.9,old:null,tone:"#f6edbd",badge:"",
   long:"Un masque gel associant acide kojique, curcuma et niacinamide à 2 %, pensé pour un teint d'aspect plus uniforme et lumineux. 1 masque, 28 g.",
   actives:["Acide kojique","Curcuma","Niacinamide 2 %"],
   use:"Faire un test sur une petite zone avant la première utilisation. Appliquer sur une peau propre, laisser poser 20 minutes, retirer, puis masser le surplus. 1 à 2 fois par semaine."},
  {id:4,cat:"coffrets",name:"Coffret Avocat Hyaluronique",desc:"Rituel 6 pièces",price:39.9,old:49.9,tone:"#f0cfe0",badge:"−20 %",
   long:"Un coffret de six soins pour construire une routine complète, à l'avocat et à l'acide hyaluronique, présenté dans une jolie boîte rose. Parfait pour s'offrir un rituel ou pour offrir.",
   actives:["Avocat","Acide hyaluronique"],
   use:"Suivre l'ordre de la routine : nettoyer, tonifier, puis hydrater, matin et soir."},
  {id:5,cat:"corps",name:"Gamme Rose",desc:"Lotion, huile, beurre corps",price:29.9,old:null,tone:"#e9b3b0",badge:"",
   long:"Une gamme autour de la rose et de l'églantier : lotion hydratante, brume florale, huile et beurre pour le corps. Des textures sensorielles et un parfum délicat pour transformer le soin du corps en rituel.",
   actives:["Rose","Églantier"],
   use:"Appliquer la lotion ou le beurre sur peau propre en massant jusqu'à absorption. L'huile s'utilise en quelques gouttes, et la brume se vaporise à tout moment de la journée."},
  {id:6,cat:"coffrets",name:"Coffret Plum Flower",desc:"Tonique & émulsion revitalisants",price:44.9,old:null,tone:"#ecd0d2",badge:"Coffret",
   long:"Un duo tonique et émulsion à la fleur de prunier, accompagné de miniatures, dans un coffret élégant. Une routine douce en deux gestes, idéale à offrir.",
   actives:["Fleur de prunier"],
   use:"Après le nettoyage, appliquer le tonique avec les mains ou un coton, puis l'émulsion en massant doucement."}
];