(() => {
    const $ = (s, r = document) => r.querySelector(s);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    const clamp = (v, a, b) =>
      Math.min(b, Math.max(a, v));
  
    $('#yr').textContent = new Date().getFullYear();
    
    const canvas = $('#dots');
    const ctx = canvas.getContext('2d');
  
    const GAP = 26;
    const RADIUS = 170;
  
    let W = 0;
    let H = 0;
  
    let tx = -9999;
    let ty = -9999;
    let mx = -9999;
    let my = -9999;
  
    let raf = 0;
  
    function sizeCanvas() {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
  
      W = r.width;
      H = r.height;
  
      canvas.width = W * dpr;
      canvas.height = H * dpr;
  
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  
      draw();
    }
  
    function draw() {
      ctx.clearRect(0, 0, W, H);
  
      const ox = (W % GAP) / 2;
      const oy = 4;
  
      for (let x = ox; x < W; x += GAP) {
        for (let y = oy; y < H; y += GAP) {
  
          let a = 0.085;
          let r = 1;
  
          const dx = x - mx;
          const dy = y - my;
  
          if (
            dx > -RADIUS &&
            dx < RADIUS &&
            dy > -RADIUS &&
            dy < RADIUS
          ) {
            const d = Math.sqrt(dx * dx + dy * dy);
  
            if (d < RADIUS) {
              const t = 1 - d / RADIUS;
  
              a += 0.2 * t * t;
              r += 1.0 * t * t;
            }
          }
  
          ctx.fillStyle =
            'rgba(10,10,10,' +
            a.toFixed(3) +
            ')';
  
          ctx.beginPath();
          ctx.arc(x, y, r, 0, 6.2832);
          ctx.fill();
        }
      }
    }
  
    function tick() {
      mx += (tx - mx) * 0.14;
      my += (ty - my) * 0.14;
  
      draw();
  
      if (
        Math.abs(tx - mx) +
        Math.abs(ty - my) >
        0.6
      ) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    }
  
    if (!reduce) {
      window.addEventListener(
        'pointermove',
        e => {
  
          if (e.pointerType === 'touch') return;
  
          const r =
            canvas.getBoundingClientRect();
  
          if (
            e.clientY < r.top - RADIUS ||
            e.clientY > r.bottom + RADIUS
          ) return;
  
          if (mx < -9000) {
            mx = e.clientX - r.left;
            my = e.clientY - r.top;
          }
  
          tx = e.clientX - r.left;
          ty = e.clientY - r.top;
  
          if (!raf) {
            raf =
              requestAnimationFrame(tick);
          }
        },
        { passive: true }
      );
    }
  
    let rt;
  
    window.addEventListener('resize', () => {
      clearTimeout(rt);
  
      rt =
        setTimeout(sizeCanvas, 100);
    });
  
    sizeCanvas();
  
  
    const nav = $('#nav');
    const heroMain = $('#heroMain');
  
    const st = $('#statement');
  
    st.innerHTML =
      st.textContent
        .trim()
        .split(/\s+/)
        .map(
          w =>
            '<span class="w">' +
            w +
            '</span>'
        )
        .join(' ');
  
    const words =
      [...st.querySelectorAll('.w')];
  
    const navLinks =
      [...document.querySelectorAll(
        '.nav-links a'
      )];
  
    const sections =
      navLinks.map(
        a => $(a.getAttribute('href'))
      );
  
    let ticking = false;
  
    function onScroll() {
      const y = window.scrollY;
      const vh = window.innerHeight;
  
      nav.classList.toggle(
        'scrolled',
        y > 12
      );
  
      if (!reduce && y < vh * 1.2) {
  
        const p =
          clamp(
            y / (vh * 0.8),
            0,
            1
          );
  
        heroMain.style.transform =
          'translate3d(0,' +
          (y * 0.18).toFixed(1) +
          'px,0)';
  
        heroMain.style.opacity =
          (1 - p * 0.9).toFixed(3);
      }
  
      const r =
        st.getBoundingClientRect();
  
      const p =
        reduce
          ? 1
          : clamp(
              (
                vh * 0.82 -
                r.top
              ) /
              (
                r.height +
                vh * 0.28
              ),
              0,
              1
            );
  
      const n =
        Math.round(
          p * words.length
        );
  
      words.forEach(
        (w, i) =>
          w.classList.toggle(
            'on',
            i < n
          )
      );
  
      let active = -1;
  
      sections.forEach(
        (s, i) => {
  
          if (!s) return;
  
          const b =
            s.getBoundingClientRect();
  
          if (
            b.top < vh * 0.5 &&
            b.bottom > vh * 0.3
          ) {
            active = i;
          }
        }
      );
  
      navLinks.forEach(
        (a, i) =>
          a.classList.toggle(
            'active',
            i === active
          )
      );
  
      ticking = false;
    }
  
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(
            onScroll
          );
        }
      },
      { passive: true }
    );
  
    window.addEventListener(
      'resize',
      onScroll
    );
  
    onScroll();
  
  
    const io =
      new IntersectionObserver(
        entries => {
  
          entries.forEach(
            entry => {
  
              if (
                entry.isIntersecting
              ) {
                entry.target
                  .classList
                  .add('in');
  
                io.unobserve(
                  entry.target
                );
              }
            }
          );
  
        },
        {
          threshold: 0.12,
          rootMargin:
            '0px 0px -6% 0px'
        }
      );
  
    document
      .querySelectorAll('.reveal')
      .forEach(
        el => io.observe(el)
      );
  

  
    const track = $('#track');
    const prev = $('#prev');
    const next = $('#next');
  
    const cards =
      [...track.querySelectorAll(
        '.card'
      )];
  
    const thumb = $('#thumb');
    const cur = $('#cur');
    const tot = $('#tot');
  
    const pad2 =
      n =>
        String(n)
          .padStart(2, '0');
  
    tot.textContent =
      pad2(cards.length);
  
    const step = () =>
      cards.length > 1
        ? cards[1].offsetLeft -
          cards[0].offsetLeft
        : track.clientWidth;
  
    const maxScroll = () =>
      track.scrollWidth -
      track.clientWidth;
  
    function updateCarousel() {
  
      const sl =
        track.scrollLeft;
  
      const max =
        maxScroll();
  
      const i =
        clamp(
          Math.round(
            sl / step()
          ),
          0,
          cards.length - 1
        );
  
      cur.textContent =
        pad2(
          sl >= max - 4
            ? cards.length
            : i + 1
        );
  
      prev.disabled =
        sl <= 4;
  
      next.disabled =
        sl >= max - 4;
  
      const w =
        clamp(
          track.clientWidth /
          track.scrollWidth,
          0.15,
          1
        );
  
      thumb.style.width =
        (w * 100) + '%';
  
      thumb.style.left =
        (
          max > 0
            ? (sl / max) *
              (1 - w) *
              100
            : 0
        ) + '%';
    }
  
    track.addEventListener(
      'scroll',
      updateCarousel,
      { passive: true }
    );
  
    window.addEventListener(
      'resize',
      updateCarousel
    );
  
    prev.addEventListener(
      'click',
      () =>
        track.scrollBy({
          left: -step(),
          behavior: 'smooth'
        })
    );
  
    next.addEventListener(
      'click',
      () =>
        track.scrollBy({
          left: step(),
          behavior: 'smooth'
        })
    );
  
    track.addEventListener(
      'keydown',
      e => {
  
        if (
          e.key ===
          'ArrowRight'
        ) {
          e.preventDefault();
          next.click();
        }
  
        if (
          e.key ===
          'ArrowLeft'
        ) {
          e.preventDefault();
          prev.click();
        }
      }
    );
  
  
    let down = false;
    let moved = 0;
    let startX = 0;
    let startL = 0;
  
    track.addEventListener(
      'pointerdown',
      e => {
  
        if (
          e.pointerType !== 'mouse' ||
          e.button !== 0
        ) return;
  
        down = true;
        moved = 0;
  
        startX =
          e.clientX;
  
        startL =
          track.scrollLeft;
      }
    );
  
    window.addEventListener(
      'pointermove',
      e => {
  
        if (!down) return;
  
        const dx =
          e.clientX -
          startX;
  
        moved =
          Math.max(
            moved,
            Math.abs(dx)
          );
  
        if (moved > 5) {
  
          track
            .classList
            .add('dragging');
  
          track.scrollLeft =
            startL - dx;
        }
      }
    );
  
    window.addEventListener(
      'pointerup',
      () => {
  
        if (!down) return;
  
        down = false;
  
        if (
          track.classList.contains(
            'dragging'
          )
        ) {
  
          track
            .classList
            .remove('dragging');
  
          const i =
            clamp(
              Math.round(
                track.scrollLeft /
                step()
              ),
              0,
              cards.length - 1
            );
  
          track.scrollTo({
            left: i * step(),
            behavior: 'smooth'
          });
        }
      }
    );
  
    cards.forEach(
      card =>
        card.addEventListener(
          'click',
          e => {
  
            if (moved > 5) {
              e.preventDefault();
              moved = 0;
              return;
            }
  
            if (
              card.getAttribute(
                'href'
              ) === '#'
            ) {
              e.preventDefault();
            }
          }
        )
    );
  
    updateCarousel();
  
  })();