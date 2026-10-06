const fmt = n => n.toFixed(2).replace(".", ",") + " €";
const $ = id => document.getElementById(id);
const catNames = {masques:"Masques", coffrets:"Coffrets soin", corps:"Corps"};
let cart = JSON.parse(localStorage.getItem("ferea-cart") || "[]");
const params = new URLSearchParams(location.search);

// Product grid (index.html and produits.html)
if ($("grid")) {
  const cat = params.get("cat");
  const list = cat ? products.filter(p => p.cat === cat) : products;
  if ($("title") && cat) $("title").textContent = catNames[cat];

  $("grid").innerHTML = list.map(p => `
    <article class="card" id="produit-${p.id}">
      <a href="produit.html?id=${p.id}">
        <div class="img" style="background:linear-gradient(150deg,${p.tone},#fbf3f0)">
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
          <i>${p.name}</i>
        </div>
        <h3>${p.name}</h3>
      </a>
      <p>${p.desc}</p>
      <div class="price">${p.old ? `<s>${fmt(p.old)}</s>` : ""}${fmt(p.price)}</div>
      <button class="add" data-id="${p.id}">Ajouter au panier</button>
    </article>`).join("");
}

// Single product page (produit.html)
if ($("product")) {
  const p = products.find(x => x.id == params.get("id")) || products[0];
  document.title = p.name + " — Feréa";
  $("product").innerHTML = `
    <div class="wrap">
      <p class="crumbs"><a href="index.html">Accueil</a> / <a href="produits.html">Nos produits</a> / ${p.name}</p>
      <div class="pdp">
        <div class="pdp-img" style="background:linear-gradient(150deg,${p.tone},#fbf3f0)">
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
          <i>${p.name}</i>
        </div>
        <div class="pdp-info">
          <span class="eyebrow">${catNames[p.cat]}</span>
          <h1>${p.name}</h1>
          <div class="price">${p.old ? `<s>${fmt(p.old)}</s>` : ""}${fmt(p.price)}</div>
          <p class="pdp-short">${p.desc}</p>
          <button class="add add-big" data-id="${p.id}">Ajouter au panier</button>
        </div>
      </div>
      <div class="pdp-details">
        <h2>Description</h2>
        <p>${p.long}</p>
        <h3>Actifs</h3>
        <ul>${p.actives.map(a => `<li>${a}</li>`).join("")}</ul>
        <h3>Conseils d'utilisation</h3>
        <p>${p.use}</p>
      </div>
    </div>`;
}

const veil = $("veil");
function toggle(el, on){ el.classList.toggle("open", on); veil.classList.toggle("on", on); }
function closeAll(){ $("mmenu").classList.remove("open"); $("drawer").classList.remove("open"); veil.classList.remove("on"); }
$("openMenu").onclick = () => toggle($("mmenu"), true);
$("closeMenu").onclick = closeAll;
$("openCart").onclick = () => toggle($("drawer"), true);
$("closeCart").onclick = closeAll;
veil.onclick = closeAll;
$("mmenu").querySelectorAll("a").forEach(a => a.onclick = closeAll);

function render(){
  localStorage.setItem("ferea-cart", JSON.stringify(cart)); // keeps the cart between pages
  $("count").textContent = cart.length;
  $("total").textContent = fmt(cart.reduce((s, p) => s + p.price, 0));
  $("items").innerHTML = cart.length
    ? cart.map((p, i) => `<div class="line"><div>${p.name}<br><button data-rm="${i}">Retirer</button></div><span>${fmt(p.price)}</span></div>`).join("")
    : `<p class="empty">Votre panier est vide.</p>`;
}
document.addEventListener("click", e => {
  const add = e.target.closest(".add");
  if (add){ cart = [...cart, products.find(p => p.id == add.dataset.id)]; render(); toggle($("drawer"), true); }
  const rm = e.target.closest("[data-rm]");
  if (rm){ cart = cart.filter((_, i) => i != rm.dataset.rm); render(); }
});
if ($("nl")) $("nl").onsubmit = e => { e.preventDefault(); $("ok").textContent = "Merci ! Votre code arrive par e-mail."; e.target.reset(); };
render();