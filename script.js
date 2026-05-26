/* ============ ISTC Computer Centre — script.js ============ */

const COURSES = [
  { code: "BC", name: "Basic Computer", dur: "3 months", tag: "Foundation", desc: "Computer fundamentals, MS Office, Internet, Typing — beginner के लिए perfect start।",
    eligibility: "कोई शैक्षिक योग्यता ज़रूरी नहीं", fees: "₹4,999",
    syllabus: ["Computer Fundamentals — hardware, software, OS", "MS Word, Excel, PowerPoint — कंप्लीट training", "Internet, Email, Browsing", "हिंदी + English typing practice", "Practical assignments and tests"],
    outcome: "Office/data-entry roles, further computer courses ke liye foundation." },
  { code: "DTP", name: "DTP & Graphic Design", dur: "4 months", tag: "Creative", desc: "Photoshop, CorelDraw, InDesign — printing press और social media work।",
    eligibility: "10वीं pass", fees: "₹4,999",
    syllabus: ["Adobe Photoshop — image editing, retouching", "CorelDRAW — logo, banner, visiting card design", "Adobe InDesign — magazine, book layout", "Practical projects — real client briefs", "Printing press workflows"],
    outcome: "Graphic designer, DTP operator, freelance design work." },
  { code: "TALLY", name: "Tally ERP 9 with GST", dur: "3 months", tag: "Job-ready", desc: "Accounting, GST filing, inventory — सीधे office का काम।",
    eligibility: "12वीं pass (Commerce preferred)", fees: "₹4,999",
    syllabus: ["Tally Prime / ERP 9 fundamentals", "Ledger, vouchers, day book entries", "GST setup, invoicing aur returns", "Inventory management", "Payroll aur banking", "Real company case studies"],
    outcome: "Accountant, account assistant, GST practitioner." },
  { code: "CCC", name: "CCC (Hindi & English)", dur: "3 months", tag: "Govt. Exam", desc: "NIELIT certified — government job form के लिए ज़रूरी।",
    eligibility: "कोई भी अभ्यर्थी apply कर सकता है", fees: "₹4,999",
    syllabus: ["Computer basics — hardware, OS, files", "MS Word, Excel, PowerPoint", "Internet, email, digital payments", "NIELIT mock tests और sample papers", "हिंदी + English दोनों medium"],
    outcome: "Government job applications (clerk, banking, SSC) ke liye mandatory CCC certificate." },
  { code: "OLEVEL", name: "NIELIT O Level", dur: "1 year", tag: "Govt Recognized", desc: "Govt of India certification. SC/ST/Female के लिए ₹12,000 scholarship।",
    eligibility: "12वीं pass", fees: "₹4,999 (SC/ST/Female: scholarship available)",
    syllabus: ["M1: IT Tools and Network Basics", "M2: Web Designing & Publishing", "M3: Programming & Problem Solving", "M4: Internet of Things & its Applications", "Practical project + viva"],
    outcome: "Diploma-equivalent IT certification, government & private IT jobs ke liye." },
  { code: "NTT", name: "NTT — Nursery Teacher Training", dur: "2 years", tag: "Teaching", desc: "योग्यता: 12वीं। Pre-primary teacher बनने के लिए — आंगनवाड़ी, play school में jobs।",
    eligibility: "12वीं pass", fees: "₹4,999",
    syllabus: ["Child psychology aur development", "Pre-school teaching methods", "Story telling, poems, activity planning", "Classroom management", "Practical teaching internship"],
    outcome: "Pre-primary teacher, आंगनवाड़ी worker, play school teacher." },
  { code: "ECCE", name: "ECCE — Early Childhood Care & Education", dur: "1 year", tag: "DigiLocker", desc: "योग्यता: 10वीं। Rajasthan मदर टीचर / बालवाटिका भर्ती के लिए मान्य।",
    eligibility: "10वीं pass", fees: "₹4,999",
    syllabus: ["780 hours of training (Central Tool Room Ludhiana)", "Early childhood development", "Health, hygiene aur nutrition", "Play-based learning", "Assessment & certification"],
    outcome: "Mother teacher, बालवाटिका teacher, ECCE worker. Rajasthan recruitment ke liye valid." },
  { code: "HSI", name: "Health Sanitary Inspector", dur: "1 year", tag: "HSSC Recognized", desc: "योग्यता: 12वीं। सरकारी, private और विदेशों में jobs। Free books।",
    eligibility: "12वीं pass", fees: "₹4,999 (free books included)",
    syllabus: ["Public health & sanitation", "Water & food safety", "Vector control, disease prevention", "Hospital aur municipal sanitation", "Field training"],
    outcome: "Sanitary inspector, public health worker — government, private hospitals, abroad jobs." },
  { code: "FIRE", name: "Fire & Safety Diploma", dur: "1 year", tag: "Govt Job", desc: "फायरमैन / नगर पालिका fire brigade में भर्ती हेतु diploma।",
    eligibility: "10वीं / 12वीं pass", fees: "₹4,999",
    syllabus: ["Fire chemistry & behavior", "Fire fighting equipment", "Industrial safety", "Rescue operations & first aid", "Practical drill & training"],
    outcome: "Fireman (नगर पालिका), industry safety officer, factory fire safety." },
  { code: "ELEC", name: "Electrician Diploma", dur: "1 year", tag: "Vocational", desc: "Practical-heavy training. Industry और घरेलू wiring दोनों।",
    eligibility: "8वीं / 10वीं pass", fees: "₹4,999",
    syllabus: ["Basic electricity & wiring", "Domestic & industrial wiring", "Motor repair & rewinding", "Inverter, UPS, battery work", "Hands-on workshop training"],
    outcome: "Self-employed electrician, industry electrician, repair & maintenance jobs." },
  { code: "SILAI", name: "Silai (Sewing) Course", dur: "3 months", tag: "FREE Combo", desc: "Basic से Advance training. Cutting, stitching, blouse, salwar — महिलाओं के लिए special batch।",
    eligibility: "कोई शैक्षिक योग्यता ज़रूरी नहीं", fees: "₹4,999 / Computer course के साथ FREE",
    syllabus: ["Cutting techniques — measurements & patterns", "Blouse, salwar, kurta stitching", "Frock, petticoat, nighty", "Embroidery basics", "Best student को FREE सिलाई machine"],
    outcome: "घर बैठे stitching orders, boutique work, self-employment." },
  { code: "BEAUTY", name: "Beauty & Wellness", dur: "3 months", tag: "Self-employ", desc: "Facial, cleanup, waxing, makeup — अपना parlour खोल सकते हो।",
    eligibility: "कोई शैक्षिक योग्यता ज़रूरी नहीं", fees: "₹4,999",
    syllabus: ["Skincare — facial, cleanup, bleach", "Hair care — cutting, styling, coloring", "Makeup — party, bridal", "Threading, waxing, manicure, pedicure", "Best student को FREE Beauty Kit"],
    outcome: "Apna beauty parlour, freelance bridal makeup, salon jobs." },
  { code: "YOGA", name: "Yoga Teacher Course", dur: "3 months", tag: "Wellness", desc: "Yoga teacher बनने के लिए complete training।",
    eligibility: "12वीं pass", fees: "₹4,999",
    syllabus: ["Yoga philosophy & history", "Asanas — standing, sitting, lying", "Pranayama & meditation", "Anatomy basics for yoga", "Teaching methodology"],
    outcome: "Yoga instructor, school yoga teacher, private classes." }
];

/* ===== Render course grid ===== */
function renderCourses() {
  const grid = document.getElementById("course-grid");
  if (!grid) return;
  grid.innerHTML = COURSES.map((c, i) => {
    const highlight = c.tag.includes("FREE") || c.tag.includes("Govt");
    return `
      <button class="course-card" data-course="${i}" type="button">
        <div class="course-card-head">
          <span class="course-code">${c.code}</span>
          <span class="course-tag${highlight ? ' is-highlight' : ''}">${c.tag}</span>
        </div>
        <div class="course-name">${c.name}</div>
        <div class="course-desc">${c.desc}</div>
        <div class="course-foot">
          <span>अवधि: ${c.dur}</span>
          <span class="course-details-link">Details →</span>
        </div>
      </button>
    `;
  }).join("");

  grid.querySelectorAll(".course-card").forEach(btn => {
    btn.addEventListener("click", () => openCourseModal(COURSES[+btn.dataset.course]));
  });

  // Also populate admission form course select
  const select = document.getElementById("course-select");
  if (select) {
    select.innerHTML = COURSES.map(c => `<option>${c.name}</option>`).join("")
      + `<option>पता नहीं — counsellor से बात करनी है</option>`;
  }
}

/* ===== Course modal ===== */
function openCourseModal(course) {
  const modal = document.getElementById("course-modal");
  const body = document.getElementById("course-modal-content");
  const highlight = course.tag.includes("FREE") || course.tag.includes("Govt");

  body.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-row">
        <div style="flex:1;">
          <div class="modal-meta">
            <span class="course-code">${course.code}</span>
            <span class="course-tag${highlight ? ' is-highlight' : ''}">${course.tag}</span>
            <span>अवधि: <strong>${course.dur}</strong></span>
          </div>
          <h3 class="modal-title">${course.name}</h3>
        </div>
        <button class="modal-close" aria-label="Close" type="button" id="modal-close-btn">×</button>
      </div>
    </div>
    <div class="modal-body">
      <p class="modal-desc">${course.desc}</p>
      <div class="modal-meta-grid">
        <div class="modal-meta-cell">
          <div class="modal-meta-label">Eligibility</div>
          <div class="modal-meta-value">${course.eligibility}</div>
        </div>
        <div class="modal-meta-cell">
          <div class="modal-meta-label">Fees</div>
          <div class="modal-meta-value">${course.fees}</div>
        </div>
      </div>
      <div class="modal-section-label">Syllabus / What You'll Learn</div>
      <ul class="modal-syllabus">
        ${course.syllabus.map((s, i) => `
          <li><span class="modal-syllabus-n">${i + 1}</span><span>${s}</span></li>
        `).join("")}
      </ul>
      <div class="modal-outcome">
        <div class="modal-outcome-label">Career Outcome</div>
        <div class="modal-outcome-text">${course.outcome}</div>
      </div>
      <div class="modal-ctas">
        <a href="#admission" class="modal-cta-primary" id="modal-apply">Apply Now →</a>
        <a href="tel:9817550850" class="modal-cta-secondary">📞 9817550850</a>
      </div>
    </div>
  `;

  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";

  body.querySelector("#modal-close-btn").addEventListener("click", closeCourseModal);
  body.querySelector("#modal-apply").addEventListener("click", closeCourseModal);
}

function closeCourseModal() {
  document.getElementById("course-modal").classList.remove("is-open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCourseModal();
});

/* ===== Form ===== */
function setupForm() {
  const form = document.getElementById("admission-form");
  const success = document.getElementById("form-success");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("input-name").value.trim();
    const firstName = name.split(" ")[0] || "दोस्त";
    document.getElementById("success-name").textContent = firstName;
    form.style.display = "none";
    success.classList.add("is-visible");
  });
}

/* ===== Tweaks panel ===== */
const HEADLINES = {
  "combo": {
    kicker: "ISTC Computer Centre • मंगाली बस स्टैंड",
    title: "Computer Course के साथ",
    accent: "FREE Laptop.",
    sub: "1 साल के course के दौरान laptop FREE मिलेगा सीखने के लिए। हिंदी + English में पढ़ाई — Basic से Advanced तक।"
  },
  "skill-job": {
    kicker: "ISTC Computer Centre • मंगाली बस स्टैंड",
    title: "Skill सीखो।",
    accent: "Job पाओ।",
    sub: "Local institute, practical training. Computer, Tally, NTT, Fire Safety, Silai — सब कुछ एक छत के नीचे।"
  },
  "easy": {
    kicker: "ISTC Computer Centre • मंगाली बस स्टैंड",
    title: "All Courses",
    accent: "₹4,999 only.",
    sub: "Quality teaching, experienced faculty, affordable fees. Limited time offer — अभी enroll करो।"
  },
  "combo-silai": {
    kicker: "ISTC Computer Centre • मंगाली बस स्टैंड",
    title: "Computer Course +",
    accent: "FREE सिलाई।",
    sub: "एक admission, दो skills. महिलाओं के लिए special combo. Best student को FREE सिलाई Machine + Beauty Kit भी।"
  }
};

function applyHeadline(key) {
  const h = HEADLINES[key];
  if (!h) return;
  document.getElementById("hero-kicker-text").textContent = h.kicker;
  document.getElementById("hero-title").innerHTML = `${h.title}<br/><span class="accent">${h.accent}</span>`;
  document.getElementById("hero-sub").textContent = h.sub;
  localStorage.setItem("istc-headline", key);
}

function applyPalette(key) {
  document.documentElement.setAttribute("data-palette", key === "trust-blue" ? "" : key);
  localStorage.setItem("istc-palette", key);
}

function setupTweaks() {
  const toggle = document.getElementById("tweaks-toggle");
  const panel = document.getElementById("tweaks-panel");
  toggle.addEventListener("click", () => panel.classList.toggle("is-open"));

  panel.querySelectorAll("[data-palette-val]").forEach(b => {
    b.addEventListener("click", () => {
      panel.querySelectorAll("[data-palette-val]").forEach(x => x.classList.remove("is-active"));
      b.classList.add("is-active");
      applyPalette(b.dataset.paletteVal);
    });
  });
  panel.querySelectorAll("[data-headline-val]").forEach(b => {
    b.addEventListener("click", () => {
      panel.querySelectorAll("[data-headline-val]").forEach(x => x.classList.remove("is-active"));
      b.classList.add("is-active");
      applyHeadline(b.dataset.headlineVal);
    });
  });

  // Restore saved
  const savedPalette = localStorage.getItem("istc-palette");
  if (savedPalette) {
    applyPalette(savedPalette);
    const btn = panel.querySelector(`[data-palette-val="${savedPalette}"]`);
    if (btn) {
      panel.querySelectorAll("[data-palette-val]").forEach(x => x.classList.remove("is-active"));
      btn.classList.add("is-active");
    }
  }
  const savedHeadline = localStorage.getItem("istc-headline");
  if (savedHeadline) {
    applyHeadline(savedHeadline);
    const btn = panel.querySelector(`[data-headline-val="${savedHeadline}"]`);
    if (btn) {
      panel.querySelectorAll("[data-headline-val]").forEach(x => x.classList.remove("is-active"));
      btn.classList.add("is-active");
    }
  }
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  setupForm();
  setupTweaks();

  // Modal backdrop click
  document.getElementById("course-modal").addEventListener("click", (e) => {
    if (e.target.id === "course-modal") closeCourseModal();
  });
});
