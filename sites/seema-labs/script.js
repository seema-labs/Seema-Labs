const productToggle = document.getElementById('products-toggle');
const productMenu = document.getElementById('products-menu');
const dropdown = document.querySelector('.dropdown');
function setDropdown(open) { productMenu.hidden = !open; productToggle.setAttribute('aria-expanded', String(open)); }
productToggle.addEventListener('click', event => setDropdown(event.detail > 0 && matchMedia('(hover: hover)').matches ? true : productMenu.hidden));
dropdown.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover)').matches) setDropdown(true); });
dropdown.addEventListener('mouseleave', () => { if (!dropdown.contains(document.activeElement)) setDropdown(false); });
dropdown.addEventListener('focusout', event => { if (!dropdown.contains(event.relatedTarget)) setDropdown(false); });
productToggle.addEventListener('keydown', event => { if (event.key === 'ArrowDown') { event.preventDefault(); setDropdown(true); productMenu.querySelector('a').focus(); } });
document.addEventListener('click', event => { if (!dropdown.contains(event.target)) setDropdown(false); });
const mobileToggle = document.querySelector('.mobile-toggle');
const navigation = document.getElementById('navigation');
function setMobile(open) { navigation.classList.toggle('open', open); mobileToggle.setAttribute('aria-expanded', String(open)); mobileToggle.innerHTML = open ? 'Close <span>−</span>' : 'Menu <span>+</span>'; }
mobileToggle.addEventListener('click', () => setMobile(mobileToggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { if (!productMenu.hidden) { setDropdown(false); productToggle.focus(); } else if (navigation.classList.contains('open')) { setMobile(false); mobileToggle.focus(); } } });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { setDropdown(false); setMobile(false); }));
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) { tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; document.getElementById(item.getAttribute('aria-controls')).hidden = !active; }); if (focus) tab.focus(); }
tabs.forEach((tab, index) => { tab.addEventListener('click', () => selectTab(tab)); tab.addEventListener('keydown', event => { let next; if (event.key === 'ArrowRight') next = (index + 1) % tabs.length; if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length; if (event.key === 'Home') next = 0; if (event.key === 'End') next = tabs.length - 1; if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); } }); });
document.getElementById('next-review').addEventListener('click', () => selectTab(document.getElementById('tab-review'), true));
function wireDecision(type, pending, initial) { const buttons = [...document.querySelectorAll('[data-' + type + ']')]; const reset = document.getElementById('reset-' + type); const badge = document.getElementById(type + '-badge'); const status = document.getElementById(type + '-status'); buttons.forEach(button => button.addEventListener('click', () => { const approved = button.dataset[type] === 'approve'; badge.textContent = approved ? 'Approved in example' : 'Denied in example'; status.textContent = type === 'review' ? (approved ? 'Example: all three permissions approved.' : 'Example: proposed permissions denied.') : (approved ? 'Example: this read request is approved.' : 'Example: denied; file stays protected.'); buttons.forEach(item => item.disabled = true); reset.hidden = false; })); reset.addEventListener('click', () => { badge.textContent = pending; status.textContent = initial; buttons.forEach(item => item.disabled = false); reset.hidden = true; buttons[0].focus(); }); }
wireDecision('review', 'Awaiting review', 'Sample review · Your decision');
wireDecision('access', 'Review needed', 'Human review required');
document.getElementById('open-access').addEventListener('click', event => { const panel = document.getElementById('access-options'); panel.hidden = !panel.hidden; event.currentTarget.setAttribute('aria-expanded', String(!panel.hidden)); event.currentTarget.textContent = panel.hidden ? 'Review request →' : 'Close review ↑'; });
