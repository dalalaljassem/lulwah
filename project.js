/* Renders one case study from projects.js into project.html.
   URL format:  project.html?p=kfh   (kfh | gen | branding) */
   (() => {
    const list = window.PROJECTS || [];
    const slug = new URLSearchParams(location.search).get('p');
    const at = list.findIndex(p => p.slug === slug);
    const root = document.getElementById('case');
    const yr = document.getElementById('yr');
    if (yr) yr.textContent = new Date().getFullYear();
  
    // Unknown or missing project → back to the work section
    if (at < 0) { location.replace('index.html#work'); return; }
  
    document.documentElement.classList.add('js');
    const p = list[at];
    const next = list[(at + 1) % list.length];
  
    const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  
    /* ───────────── Placeholder art (replaced when `src` is set) ───────────── */
    const bl = (c = '') => '<i class="bl ' + c + '"></i>';
    const row = (a, b) => '<div class="row"><i></i><div class="col">' + bl(a) + bl(b) + '</div>' + bl('amt') + '</div>';
    const field = '<div class="field">' + bl('w30 s') + bl('w60') + '</div>';
    const bal = (extra) => '<div class="bal ' + (extra || '') + '"><i class="tag"></i>' + bl('big') + bl('w60') + '</div>';
  
    const SCREENS = {
      home: () => '<div class="notch"></div>' + bl('w40') + bal() +
        '<div class="acts"><i></i><i></i><i></i><i></i></div>' + row('w80', 'w40') + row('w60', 'w30') + row('w80', 'w40'),
      detail: () => '<div class="notch"></div>' + bl('w60') + bal('sm') +
        '<div class="bars">' + [40, 70, 35, 55, 100, 45, 75].map((h, i) =>
          '<i class="' + (i === 1 ? 'hi' : '') + '" style="height:' + h + '%"></i>').join('') + '</div>' +
        row('w80', 'w40') + row('w60', 'w30'),
      form: () => '<div class="notch"></div>' + bl('w60') + bal('sm') + field + field + field + '<div class="btn"></div>'
    };
    const phone = (kind, cls) => '<div class="ph ' + cls + '"><div class="scr">' + SCREENS[kind]() + '</div></div>';
  
    const ART = {
      'phones-1': () => phone('form', 'c1'),
      'phones-2': () => phone('home', 'l2') + phone('detail', 'r2'),
      'phones-3': () => phone('home', 's3l') + phone('form', 's3r') + phone('detail', 's3c'),
      'phone-crop-a': () => phone('home', 'crop'),
      'phone-crop-b': () => phone('detail', 'crop'),
      'phone-tilt': () => phone('detail', 'tilt'),
      eco: () => '<div class="orbit o2"></div><div class="orbit o1"></div><i class="pt p1"></i><i class="pt p2"></i>' +
        '<div class="core"><i></i></div><div class="node n1"><i></i>Families</div><div class="node n2"><i></i>Schools</div>',
      bento: () => '<div class="bento"><div class="b1"><span>Aa</span></div>' +
        '<div class="b2"><i></i><i></i><i></i><i></i></div><div class="b3"></div></div>'
    };
  
    /* ───────────── Blocks ───────────── */
    const figure = (item, layout, extra) => {
      const inner = item.src
        ? '<img src="' + esc(item.src) + '" alt="' + esc(item.alt) + '" loading="lazy" decoding="async">'
        : '<div class="art" role="img" aria-label="' + esc(item.alt || 'Placeholder') + '">' +
          ((ART[item.art] || (() => ''))()) + '</div>';
      return '<figure class="media ' + layout + ' ' + (extra || '') + '" data-tone="' + esc(item.tone || 'dark') + '">' + inner + '</figure>';
    };
  
    const renderBlock = b => {
      if (b.type === 'text') {
        return '<section class="prose rv"><h2>' + esc(b.title) + '</h2>' +
          (b.body || []).map(t => '<p>' + esc(t) + '</p>').join('') +
          (b.list ? '<ol>' + b.list.map(t => '<li>' + esc(t) + '</li>').join('') + '</ol>' : '') +
          '</section>';
      }
      if (b.layout === 'pair') {
        return '<div class="pair rv mw">' + b.items.slice(0, 2).map(i => figure(i, 'pair')).join('') + '</div>';
      }
      return '<div class="rv mw">' + figure(b.items[0], 'full') + '</div>';
    };
  
    /* ───────────── Page ───────────── */
    const isExternal = /^https?:/i.test(p.live || '');
    const meta = [['Role', p.role], ['Client', p.client], ['Year', p.year]].map(m =>
      '<div class="meta-card"><span class="pill">' + esc(m[0]) + '</span><p>' + esc(m[1]) + '</p></div>').join('');
    const live = p.live
      ? '<a class="meta-card live" href="' + esc(p.live) + '"' + (isExternal ? ' target="_blank" rel="noopener"' : '') + '>Live preview <span aria-hidden="true">↗</span></a>'
      : '';
  
    root.innerHTML =
      '<header class="head">' +
        '<div class="title-card rise" style="--d:.05s"><h1>' + esc(p.title) + '</h1><p>' + esc(p.subtitle) + '</p></div>' +
        '<div class="meta rise' + (p.live ? '' : ' n3') + '" style="--d:.15s">' + meta + live + '</div>' +
        '<div class="rise" style="--d:.25s">' + figure(p.hero, 'full', 'hero') + '</div>' +
      '</header>' +
      (p.blocks || []).map(renderBlock).join('') +
      '<a class="next-card rv" href="project.html?p=' + encodeURIComponent(next.slug) + '">' +
        '<span class="pill">Next project</span>' +
        '<span class="next-row"><span class="next-title">' + esc(next.title) + '</span><span class="next-arrow" aria-hidden="true">↗</span></span>' +
      '</a>';
  
    document.title = p.title + ' — Lulwah AlDyouly';
    const md = document.getElementById('metaDesc');
    if (md) md.setAttribute('content', p.subtitle + ' A case study by Lulwah AlDyouly, Senior UX/UI Designer in Kuwait.');
  
    // Placeholder links (#) shouldn't jump to the top
    root.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
  
    /* ───────────── Motion ───────────── */
    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    root.querySelectorAll('.rv').forEach(el => io.observe(el));
  })();