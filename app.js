/**
 * Horizon Properties - Main Engine
 * نسخه به‌روزرسانی‌شده با اسلایدر افقی تک‌ردیفه و دسته‌بندی دیوار
 */

// ۱. لیست کامل دسته‌بندی‌ها و زیرگروه‌ها (مشابه دیوار)
const PROPERTY_CATEGORIES = [
  {
    id: "all",
    label: "همه آگهی‌های املاک",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"></circle></svg>`
  },
  {
    id: "construction",
    label: "پروژه‌های ساخت‌وساز",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18"></path><path d="M6 21V8"></path><path d="M6 8h9"></path><path d="M15 8v4"></path><path d="M15 12h4"></path><path d="M19 12v9"></path><path d="M9 8V5h5v3"></path><path d="M9 12h3"></path><path d="M9 16h3"></path></svg>`
  },
  {
    id: "short-rent",
    label: "اجاره کوتاه‌مدت",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v5l3 2"></path></svg>`,
    children: [
      { id: "short-rent-apartment", label: "آپارتمان و سوئیت" },
      { id: "short-rent-villa", label: "ویلا و باغ" },
      { id: "short-rent-office", label: "دفتر کار و فضای آموزشی" }
    ]
  },
  {
    id: "rent-residential",
    label: "اجاره مسکونی",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18"></path><path d="M5 21V8l7-5 7 5v13"></path></svg>`,
    children: [
      { id: "rent-residential-apartment", label: "آپارتمان" },
      { id: "rent-residential-house", label: "خانه و ویلا" }
    ]
  },
  {
    id: "sale-residential",
    label: "فروش مسکونی",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18"></path><path d="M5 21V8l7-5 7 5v13"></path></svg>`,
    children: [
      { id: "sale-residential-apartment", label: "آپارتمان" },
      { id: "sale-residential-house", label: "خانه و ویلا" },
      { id: "sale-residential-land", label: "زمین و ملک کلنگی" }
    ]
  },
  {
    id: "sale-commercial",
    label: "فروش اداری و تجاری",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21V4h10v17"></path><path d="M14 9h6v12"></path></svg>`,
    children: [
      { id: "sale-commercial-office", label: "دفتر کار، اتاق اداری، مطب" },
      { id: "sale-commercial-shop", label: "مغازه و غرفه" },
      { id: "sale-commercial-industrial", label: "صنعتی، کشاورزی، تجاری" }
    ]
  },
  {
    id: "rent-commercial",
    label: "اجاره اداری و تجاری",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21V4h10v17"></path><path d="M14 9h6v12"></path></svg>`,
    children: [
      { id: "rent-commercial-office", label: "دفتر کار، اتاق اداری، مطب" },
      { id: "rent-commercial-shop", label: "مغازه و غرفه" },
      { id: "rent-commercial-industrial", label: "صنعتی، کشاورزی، تجاری" }
    ]
  }
];

// ۲. پایگاه داده املاک لوکس (با پشتیبانی از LocalStorage)
const INITIAL_PROPERTIES = [
  {
    id: 1,
    title: "عمارت شاهانه دیپلمات",
    type: "villa",
    category: "sale-residential-house",
    city: "لواسان",
    price: 180,
    area: 950,
    beds: 6,
    baths: 7,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "ویژه هورایزن",
    desc: "واقع در بهترین فرعی اصطلک با چشم‌انداز ۳۶۰ درجه به سد لتیان، استخر روباز آب‌گرم چهارفصل، آسانسور شیشه‌ای، سینمای خصوصی و سیستم هوشمند KNX."
  },
  {
    id: 2,
    title: "پنت‌هاوس رویال اسکای",
    type: "penthouse",
    category: "sale-residential-apartment",
    city: "تهران",
    price: 145,
    area: 680,
    beds: 4,
    baths: 5,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    badge: "فرشته / الهیه",
    desc: "طبقه بیست‌وسوم برج برند با ۳۰۰ متر تراس گاردن معلق، ارتفاع سقف ۴.۵ متر، لابی مجلل هتلی، استخر اختصاصی در روف و ۴ پارکینگ باکس سندی."
  },
  {
    id: 3,
    title: "ویلای ساحلی مارینا بلو",
    type: "villa",
    category: "short-rent-villa",
    city: "مازندران",
    price: 95,
    area: 720,
    beds: 5,
    baths: 6,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    badge: "خط اول دریا",
    desc: "دسترسی مستقیم و اختصاصی به ساحل ماسه‌ای متل‌قو، معماری مدرن مینیمال، شیشه‌های قدی حرارتی، محوطه‌سازی ژاپنی و اسکله قایقرانی اختصاصی."
  },
  {
    id: 4,
    title: "آپارتمان آرشیتکتورال نیاوران",
    type: "apartment",
    category: "sale-residential-apartment",
    city: "تهران",
    price: 68,
    area: 380,
    beds: 3,
    baths: 4,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    badge: "دید کاخ",
    desc: "اثر ماندگار از آرشیتکت بنام، متریال تماماً وارداتی، آشپزخانه فول فرنیش Gaggenau، مشاعات آبی بی‌نظیر و تیم سکیوریتی ۲۴ ساعته."
  },
  {
    id: 5,
    title: "ویلا کاخ صخره‌ای کیش",
    type: "villa",
    category: "sale-residential-house",
    city: "کیش",
    price: 110,
    area: 800,
    beds: 5,
    baths: 5,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    badge: "دامون ساحلی",
    desc: "طراحی تندیس‌گون با ویوی ابدی خلیج فارس، روف‌گاردن استوایی، استخر بی‌نهایت (Infinity Pool) معلق و اسکله تفریحی."
  },
  {
    id: 6,
    title: "دفتر کار لوکس جردن",
    type: "office",
    category: "sale-commercial-office",
    city: "تهران",
    price: 130,
    area: 320,
    beds: 0,
    baths: 2,
    image: "https://images.unsplash.com/photo-16005851554526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    badge: "تجاری اداری",
    desc: "مطب یا دفتر اداری شیک با دسترسی سریع به ولیعصر و جردن، ۳ پارکینگ سندی، اتاق کنفرانس مجزا."
  }
];

function loadProperties() {
  const saved = localStorage.getItem("horizon_properties_list");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return INITIAL_PROPERTIES;
    }
  }
  return INITIAL_PROPERTIES;
}

let properties = loadProperties();

function saveProperties() {
  localStorage.setItem("horizon_properties_list", JSON.stringify(properties));
}

// ۳. رندر کردن کارت‌های املاک
function createPropertyCardHTML(prop) {
  return `
    <article class="prop-card normal-card" onclick="openDetailModal(${prop.id})">
      <img src="${prop.image}" alt="${prop.title}" class="prop-card-bg" loading="lazy" />
      <div class="prop-card-overlay"></div>
      
      <div class="prop-badges">
        <span class="badge-item exclusive">${prop.badge || "امیرکبیر"}</span>
        <span class="badge-item">${prop.city}</span>
      </div>

      <div class="prop-content-bottom">
        <div class="prop-location-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${prop.city}</span>
        </div>
        <h3 class="prop-card-title">${prop.title}</h3>
        
        <div class="prop-specs-row">
          <div class="prop-spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span>${prop.area} متر</span>
          </div>
          <div class="prop-spec-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></svg>
            <span>${prop.beds} خواب</span>
          </div>
        </div>

        <div class="prop-card-footer">
          <div class="prop-price-tag">${prop.price} میلیارد تومان</div>
          <span class="prop-view-btn">مشاهده جزئیات</span>
        </div>
      </div>
    </article>
  `;
}

function renderCatalogGrid(filteredList) {
  const grid = document.getElementById("propertiesGrid");
  if (!grid) return;
  if (filteredList.length === 0) {
    grid.innerHTML = `<div style="width: 100%; text-align: center; padding: 50px 20px; color: #6a7682; font-weight: 500;">ملکی با این مشخصات یافت نشد.</div>`;
    return;
  }
  grid.innerHTML = filteredList.map(p => createPropertyCardHTML(p)).join("");
}

// ۴. مدیریت فیلترها و دسته‌بندی جدید
let selectedPropertyCategory = "all";

function applyFilters() {
  const search = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  const maxPrice = Number(document.getElementById("priceRange")?.value || 200);

  const filtered = properties.filter(property => {
    const title = String(property.title || "").toLowerCase();
    const city = String(property.city || "").toLowerCase();

    const matchesSearch = !search || title.includes(search) || city.includes(search);
    const matchesPrice = Number(property.price || 0) <= maxPrice;
    
    // فیلتر دسته: تطابق دقیق زیرگروه یا گروه اصلی
    let matchesCategory = selectedPropertyCategory === "all";
    if (!matchesCategory) {
      if (property.category === selectedPropertyCategory) {
        matchesCategory = true;
      } else if (property.category && property.category.startsWith(selectedPropertyCategory)) {
        matchesCategory = true;
      }
    }

    return matchesSearch && matchesPrice && matchesCategory;
  });

  renderCatalogGrid(filtered);
}

// رندر داینامیک لیست دسته‌ها در کانتینر (#categoryOptionsList)
function renderCategoryList(categories, isSubLevel = false, parentCategory = null) {
  const container = document.getElementById("categoryOptionsList");
  if (!container) return;

  let html = "";

  if (isSubLevel && parentCategory) {
    html += `
      <button type="button" class="category-option category-back-option" id="categoryBackBtn">
        <span class="category-option-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l7-7-7-7"/></svg>
        </span>
        <span class="category-option-title">همه آگهی‌های ${parentCategory.label}</span>
      </button>
    `;
  }

  categories.forEach(cat => {
    const hasChildren = cat.children && cat.children.length > 0;
    const isSelected = selectedPropertyCategory === cat.id;

    html += `
      <button type="button" 
              class="category-option ${isSelected ? 'selected' : ''}" 
              data-category="${cat.id}" 
              data-label="${cat.label}">
        <span class="category-option-icon">
          ${cat.icon || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"></circle></svg>`}
        </span>
        <span class="category-option-title">${cat.label}</span>
        <span class="category-option-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="${hasChildren ? 'M9 18l6-6-6-6' : 'M5 12h14'}"></path>
          </svg>
        </span>
      </button>
    `;
  });

  container.innerHTML = html;
  attachCategoryEvents(categories, isSubLevel, parentCategory);
}

function attachCategoryEvents(currentList, isSubLevel, parentCategory) {
  const container = document.getElementById("categoryOptionsList");
  if (!container) return;

  const backBtn = document.getElementById("categoryBackBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      renderCategoryList(PROPERTY_CATEGORIES, false, null);
    });
  }

  container.querySelectorAll(".category-option:not(#categoryBackBtn)").forEach(optionBtn => {
    optionBtn.addEventListener("click", () => {
      const catId = optionBtn.dataset.category;
      const catLabel = optionBtn.dataset.label;
      const foundCat = currentList.find(c => c.id === catId);

      if (foundCat && foundCat.children && foundCat.children.length > 0) {
        renderCategoryList(foundCat.children, true, foundCat);
      } else {
        selectPropertyCategory(catId, catLabel);
      }
    });
  });
}

function selectPropertyCategory(category, label) {
  selectedPropertyCategory = category;

  const selectedCategoryText = document.getElementById("selectedCategoryText");
  if (selectedCategoryText) {
    selectedCategoryText.textContent = label;
  }

  closeCategoryFilterSheet();
  applyFilters();
}

function openCategoryFilterSheet() {
  const overlay = document.getElementById("categoryFilterOverlay");
  if (!overlay) return;

  renderCategoryList(PROPERTY_CATEGORIES, false, null);

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("category-filter-is-open");

  setTimeout(() => {
    document.getElementById("categorySearchInput")?.focus();
  }, 200);
}

function closeCategoryFilterSheet() {
  const overlay = document.getElementById("categoryFilterOverlay");
  if (!overlay) return;

  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("category-filter-is-open");
}

function resetAllFilters() {
  const searchInput = document.getElementById("searchInput");
  const priceRange = document.getElementById("priceRange");
  const priceVal = document.getElementById("priceVal");
  const selectedCategoryText = document.getElementById("selectedCategoryText");

  if (searchInput) searchInput.value = "";
  if (priceRange) priceRange.value = 200;
  if (priceVal) priceVal.textContent = "۲۰۰";

  selectedPropertyCategory = "all";
  if (selectedCategoryText) {
    selectedCategoryText.textContent = "همه آگهی‌های املاک";
  }

  renderCategoryList(PROPERTY_CATEGORIES, false, null);

  const categorySearchInput = document.getElementById("categorySearchInput");
  if (categorySearchInput) categorySearchInput.value = "";

  applyFilters();
}

function initCategoryFilter() {
  const openButton = document.getElementById("openCategoryFilterBtn");
  const closeButton = document.getElementById("closeCategoryFilterBtn");
  const overlay = document.getElementById("categoryFilterOverlay");
  const searchInput = document.getElementById("categorySearchInput");
  const resetBtn = document.getElementById("resetFiltersBtn");

  openButton?.addEventListener("click", openCategoryFilterSheet);
  closeButton?.addEventListener("click", closeCategoryFilterSheet);
  resetBtn?.addEventListener("click", resetAllFilters);

  overlay?.addEventListener("click", event => {
    if (event.target === overlay) {
      closeCategoryFilterSheet();
    }
  });

  searchInput?.addEventListener("input", event => {
    const searchValue = event.target.value.trim().toLowerCase();
    
    if (!searchValue) {
      renderCategoryList(PROPERTY_CATEGORIES, false, null);
      return;
    }

    const matchedCategories = [];
    PROPERTY_CATEGORIES.forEach(cat => {
      if (cat.label.toLowerCase().includes(searchValue)) {
        matchedCategories.push(cat);
      }
      if (cat.children) {
        cat.children.forEach(subCat => {
          if (subCat.label.toLowerCase().includes(searchValue)) {
            matchedCategories.push({
              ...subCat,
              label: `${cat.label} > ${subCat.label}`
            });
          }
        });
      }
    });

    renderCategoryList(matchedCategories, false, null);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeCategoryFilterSheet();
    }
  });
}

// ۵. مدیریت کاروسل و اسکرول افقی تک‌ردیفه
function initCarouselControls() {
  const grid = document.getElementById("propertiesGrid");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!grid || !prevBtn || !nextBtn) return;

  const getStep = () => {
    const card = grid.querySelector(".prop-card");
    return card ? card.getBoundingClientRect().width + 24 : 360;
  };

  // دکمه بعدی (حرکت به راست)
  nextBtn.addEventListener("click", () => {
    grid.scrollBy({ left: -getStep(), behavior: "smooth" });
  });

  // دکمه قبلی (حرکت به چپ)
  prevBtn.addEventListener("click", () => {
    grid.scrollBy({ left: getStep(), behavior: "smooth" });
  });
}

// ۶. مدیریت مودال جزئیات ملک
window.openDetailModal = function(id) {
  const prop = properties.find(p => p.id === id);
  if (!prop) return;

  const detailBody = document.getElementById("detailBody");
  detailBody.innerHTML = `
    <div class="detail-img-box">
      <img src="${prop.image}" alt="${prop.title}" />
    </div>
    <span class="badge-sub">${prop.city} | ${prop.type === "villa" ? "ویلا لوکس" : prop.type === "penthouse" ? "پنت‌هاوس" : "املاک"}</span>
    <h2 class="section-title" style="font-size: 1.8rem; margin-top: 6px;">${prop.title}</h2>
    
    <div class="detail-specs-bar">
      <div>📐 متراژ: <strong>${prop.area} مترمربع</strong></div>
      <div>🛏 اتاق خواب: <strong>${prop.beds} خواب</strong></div>
      <div>🚿 حمام: <strong>${prop.baths || 4} سرویس</strong></div>
    </div>

    <p class="detail-desc-text">${prop.desc}</p>

    <div class="detail-footer-bar">
      <div>
        <div style="font-size: 0.85rem; color: #6a7682;">قیمت کارشناسی:</div>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--color-accent);">${prop.price} میلیارد تومان</div>
      </div>
      <a href="tel:09143158388" class="cta-action-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>هماهنگی بازدید اختصاصی</span>
      </a>
    </div>
  `;

  document.getElementById("detailModal").classList.add("open");
};

// ۷. موتور تور سه‌بعدی
let threeCanvasInitialized = false;
let animationFrameId = null;

function init3DViewer() {
  const container = document.getElementById("threeViewport");
  const loading = document.getElementById("threeLoading");
  if (!container) return;

  if (threeCanvasInitialized) return;
  threeCanvasInitialized = true;
  if (loading) loading.style.display = "none";

  const canvas = document.createElement("canvas");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  canvas.style.display = "block";
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  let rotX = 0.4;
  let rotY = 0.8;
  let isDragging = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  const vertices = [
    [-1.5, -0.8, -1], [1.5, -0.8, -1], [1.5, 0.8, -1], [-1.5, 0.8, -1],
    [-1.5, -0.8, 1],  [1.5, -0.8, 1],  [1.5, 0.8, 1],  [-1.5, 0.8, 1],
    [0, 1.6, 0]
  ];

  const edges = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7],
    [2,8],[3,8],[6,8],[7,8]
  ];

  function project(x, y, z) {
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const x1 = x * cosY + z * sinY;
    const z1 = -x * sinY + z * cosY;

    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const y2 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;

    const distance = 4.5;
    const fov = 340;
    const scale = fov / (distance + z2);

    return {
      x: canvas.width / 2 + x1 * scale,
      y: canvas.height / 2 - y2 * scale
    };
  }

  function draw() {
    ctx.fillStyle = "#0f161c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(197, 160, 89, 0.15)";
    ctx.lineWidth = 1;
    for (let i = -3; i <= 3; i++) {
      const p1 = project(i, -0.8, -3);
      const p2 = project(i, -0.8, 3);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      const p3 = project(-3, -0.8, i);
      const p4 = project(3, -0.8, i);
      ctx.beginPath();
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.stroke();
    }

    ctx.strokeStyle = "#c5a059";
    ctx.lineWidth = 2.5;
    edges.forEach(([i, j]) => {
      const v1 = vertices[i];
      const v2 = vertices[j];
      const p1 = project(v1[0], v1[1], v1[2]);
      const p2 = project(v2[0], v2[1], v2[2]);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    });

    if (!isDragging) {
      rotY += 0.006;
    }
    animationFrameId = requestAnimationFrame(draw);
  }

  draw();

  function onPointerDown(e) {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    lastMouseX = clientX;
    lastMouseY = clientY;
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaX = clientX - lastMouseX;
    const deltaY = clientY - lastMouseY;
    rotY += deltaX * 0.01;
    rotX += deltaY * 0.01;
    lastMouseX = clientX;
    lastMouseY = clientY;
  }

  function onPointerUp() {
    isDragging = false;
  }

  canvas.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);

  canvas.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("touchend", onPointerUp);
}

// ۸. موتور اسکرول ویدیوی هیروسکشن
function initHeroVideoScrubbing() {
  const wrapper = document.getElementById("heroWrapper");
  const video = document.getElementById("heroScrollVideo");
  const content = document.getElementById("heroContent");
  const overlay = document.getElementById("heroOverlay");

  if (!wrapper || !video) return;

  video.pause();

  let targetTime = 0;
  let smoothedTime = 0;
  let loopRunning = false;

  function getScrollProgress() {
    const rect = wrapper.getBoundingClientRect();
    const scrollableDistance = wrapper.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return 0;
    return Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
  }

  function smoothRenderLoop() {
    const progress = getScrollProgress();

    if (video.duration) {
      targetTime = progress * video.duration;
      smoothedTime += (targetTime - smoothedTime) * 0.12;

      if (!video.seeking && Math.abs(video.currentTime - smoothedTime) > 0.02) {
        video.currentTime = smoothedTime;
      }
    }

    if (content) {
      const fadeProgress = Math.min(progress / 0.32, 1);
      content.style.opacity = (1 - fadeProgress).toFixed(2);
      content.style.transform = `translateY(-${fadeProgress * 36}px)`;
      content.style.pointerEvents = fadeProgress > 0.65 ? "none" : "auto";
    }

    if (overlay) {
      const overlayDim = Math.min(progress / 0.5, 1);
      overlay.style.opacity = (1 - overlayDim * 0.45).toFixed(2);
    }

    requestAnimationFrame(smoothRenderLoop);
  }

  function startScrubbingLoop() {
    if (!loopRunning) {
      loopRunning = true;
      requestAnimationFrame(smoothRenderLoop);
    }
  }

  video.addEventListener("loadedmetadata", () => {
    video.currentTime = 0;
    startScrubbingLoop();
  });

  if (video.readyState >= 1) {
    startScrubbingLoop();
  }
}

// ۹. مقداردهی اولیه برنامه
document.addEventListener("DOMContentLoaded", () => {
  initHeroVideoScrubbing();

  renderCatalogGrid(properties);
  initCarouselControls();

  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  }, { passive: true });

  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("open"));
    });
  }

  initCategoryFilter();

  const searchInput = document.getElementById("searchInput");
  const priceRange = document.getElementById("priceRange");
  const priceVal = document.getElementById("priceVal");

  searchInput?.addEventListener("input", applyFilters);

  priceRange?.addEventListener("input", event => {
    if (priceVal) {
      priceVal.textContent = event.target.value;
    }
    applyFilters();
  });

  const closeDetailModal = document.getElementById("closeDetailModal");
  const detailModal = document.getElementById("detailModal");
  closeDetailModal?.addEventListener("click", () => detailModal.classList.remove("open"));

  const threeModal = document.getElementById("threeModal");
  const heroOpen3dBtn = document.getElementById("heroOpen3dBtn");
  const closeThreeModal = document.getElementById("closeThreeModal");

  heroOpen3dBtn?.addEventListener("click", () => {
    threeModal?.classList.add("open");
    setTimeout(init3DViewer, 80);
  });
  closeThreeModal?.addEventListener("click", () => threeModal?.classList.remove("open"));

  const openAddModalBtn = document.getElementById("openAddModalBtn");
  const addModal = document.getElementById("addModal");
  const closeAddModal = document.getElementById("closeAddModal");
  const newPropertyForm = document.getElementById("newPropertyForm");

  openAddModalBtn?.addEventListener("click", () => addModal?.classList.add("open"));
  closeAddModal?.addEventListener("click", () => addModal?.classList.remove("open"));

  [detailModal, threeModal, addModal].forEach(modal => {
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  });

  newPropertyForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const newProp = {
      id: Date.now(),
      title: document.getElementById("propTitle").value,
      type: document.getElementById("propType").value,
      category: selectedPropertyCategory !== "all" ? selectedPropertyCategory : "sale-residential-apartment",
      city: document.getElementById("propCity").value,
      price: Number(document.getElementById("propPrice").value),
      area: Number(document.getElementById("propArea").value),
      beds: Number(document.getElementById("propBeds").value),
      baths: 4,
      image: document.getElementById("propImg").value || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      badge: "تازه ثبت شده",
      desc: document.getElementById("propDesc").value || "ملک با امکانات کامل و دسترسی عالی."
    };

    properties.unshift(newProp);
    saveProperties();
    applyFilters();

    newPropertyForm.reset();
    addModal?.classList.remove("open");
    alert("ملک شما با موفقیت ثبت و به لیست اضافه شد!");
  });
});
