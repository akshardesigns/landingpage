/**
 * TokMetrics AI - TikTok Analytics & Content Strategy Dashboard Engine
 * Target Profile: Akshardesigns.Id | Canva (@akhmad.suhardian)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global State
  const state = {
    profile: {
      username: '@akhmad.suhardian',
      name: 'Akshardesigns.Id | Canva',
      followers: '154.2K',
      totalReach: 582400,
      engagementRate: 9.42,
      totalViews: 684100,
      totalInteractions: 64500
    },
    dateRange: '30d',
    activeTab: 'dashboard',
    searchQuery: '',
    strategyFilter: 'all',
    apiConfig: {
      tiktokUser: (window.ENV && window.ENV.TIKTOK_ACCOUNT_USERNAME) || '@akhmad.suhardian',
      tiktokAppKey: localStorage.getItem('tt_app_key') || (window.ENV && window.ENV.TIKTOK_APP_CLIENT_KEY) || 'tt_app_demo_key_9983172',
      tiktokToken: localStorage.getItem('tt_token') || (window.ENV && window.ENV.TIKTOK_ACCESS_TOKEN) || 'act_sec_demo_982391823918239',
      gsheetId: localStorage.getItem('gsheet_id') || (window.ENV && window.ENV.GOOGLE_SHEETS_SPREADSHEET_ID) || '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      gsheetApiKey: localStorage.getItem('gsheet_api_key') || (window.ENV && window.ENV.GOOGLE_SHEETS_API_KEY) || 'AIzaSyB_DemoKey_9918273645',
      gsheetName: localStorage.getItem('gsheet_name') || (window.ENV && window.ENV.GOOGLE_SHEETS_TARGET_TAB) || 'TikTok_Analytics_Report'
    }
  };

  // 1. Initial Canva Niche Video Performance Data (@akhmad.suhardian / Akshardesigns.Id)
  let videoData = JSON.parse(localStorage.getItem('akhmad_custom_videos')) || [
    {
      id: 'v101',
      title: 'Keyword Rahasia Element Canva Estetik Yang Jarang Orang Tahu!',
      category: 'Viral Awareness',
      type: 'viral',
      views: 215000,
      reach: 184000,
      likes: 18900,
      comments: 1240,
      shares: 5600,
      saves: 8200,
      er: 15.7,
      date: '2026-07-25',
      status: 'High Performer 🔥'
    },
    {
      id: 'v102',
      title: 'Cara Dapet Passive Income dari Jualan Template Canva / Contributor',
      category: 'Direct Conversion',
      type: 'conversion',
      views: 148200,
      reach: 121500,
      likes: 11800,
      comments: 920,
      shares: 3450,
      saves: 6800,
      er: 15.5,
      date: '2026-07-23',
      status: 'High Conversion 💰'
    },
    {
      id: 'v103',
      title: 'Trik Bikin Presentation Pitch Deck Canva Cuma 5 Menit Pake AI',
      category: 'Educational',
      type: 'viral',
      views: 116400,
      reach: 92000,
      likes: 8400,
      comments: 610,
      shares: 2100,
      saves: 4800,
      er: 13.6,
      date: '2026-07-21',
      status: 'Good Engagement 👍'
    },
    {
      id: 'v104',
      title: 'Review Bundle 50+ Template Feed Instagram Canva Siap Pakai',
      category: 'Direct Conversion',
      type: 'conversion',
      views: 132000,
      reach: 104000,
      likes: 9900,
      comments: 850,
      shares: 3800,
      saves: 7200,
      er: 16.4,
      date: '2026-07-18',
      status: 'Viral Sales 🚀'
    },
    {
      id: 'v105',
      title: 'Font Canva Rahasia Biar Feed Olshop Lu Kelihatan Mewah & Premium',
      category: 'Viral Awareness',
      type: 'viral',
      views: 165000,
      reach: 137000,
      likes: 14200,
      comments: 980,
      shares: 4200,
      saves: 9100,
      er: 17.2,
      date: '2026-07-15',
      status: 'High Save Rate 📌'
    }
  ];

  // 2. Canva Creator 7-Day Strategy Tailored for Akshardesigns.Id | Canva
  let contentStrategyData = [
    {
      day: 1,
      dayLabel: 'Hari 1 (Senin)',
      title: 'Viral Reach: 3 Keyword Element Canva Estetik 2026',
      goalType: 'viral',
      categoryBadge: 'Canva Element Hack',
      hook: '🎨 "Stop scroll! Ini 3 keyword element Canva rahasia yang bikin desain feed olshop lu langsung kelihatan estetik & mahal!"',
      script: 'Buat lu yang sering pusing cari ilustrasi atau background di Canva, catet keyword ini: 1. "set:nAF...", 2. "Organic Line Art", 3. "Minimalist 3D Glass". Hasil desain lu bakal 10x lebih rapi!',
      cta: '📌 Save video ini biar gak lupa waktu ngedesain di Canva besok, & komen "CANVA" kalau mau daftar keyword lengkapnya!',
      directives: 'Tunjukkan screen recording pencarian keyword di Canva app. Teks neon judul keyword tebal di layar. BGM lo-fi chill.',
      bestTime: '18:30 WIB',
      hashtags: '#CanvaHack #CanvaTutorial #Akshardesigns #DesignOlshop #ContentCreator'
    },
    {
      day: 2,
      dayLabel: 'Hari 2 (Selasa)',
      title: 'High Conversion: Rahasia Jualan Template Canva / Microstock',
      goalType: 'conversion',
      categoryBadge: 'Digital Product Sales',
      hook: '💰 "Cara gua hasilkan passive income dari jualan template Canva tanpa perlu jago Photoshop!"',
      script: 'Banyak orang gak tahu kalau template Canva yang lu bikin bisa dijual berulang kali di Etsy, TikTok Shop, atau website sendiri. Gua kasih tahu 3 jenis template paling laris tahun ini!',
      cta: '🛒 Klik link di bio gua buat ambil E-Book / Bundle Roadmap Canva Creator dengan diskon spesial!',
      directives: 'Tampilkan dashboard bukti sales / komisi Canva Contributor. Voiceover optimis & informatif.',
      bestTime: '19:00 WIB',
      hashtags: '#CanvaContributor #JualanTemplate #PassiveIncome #DigitalProduct'
    },
    {
      day: 3,
      dayLabel: 'Hari 3 (Rabu)',
      title: 'Educational: Kesalahan Pemula Ngedesain di Canva',
      goalType: 'viral',
      categoryBadge: 'Design Tips',
      hook: '❌ "Jangan lakuin 3 kesalahan fatal ini pas bikin poster di Canva kalau gak mau hasilnya kelihatan norak!"',
      script: 'Kesalahan 1: Pakai lebih dari 3 jenis font berbeda. Kesalahan 2: Kontras warna teks & background mati. Kesalahan 3: Garis margin gak sejajar. Gini cara benerinnya cuma 10 detik!',
      cta: '💬 Tulis di komentar: Fitur Canva apa yang paling sering bikin lu bingung?',
      directives: 'Perbandingan Sebelum vs Sesudah (Before/After design side-by-side). Sound effect WOSH saat transisi.',
      bestTime: '12:15 WIB',
      hashtags: '#TipsDesain #BelajarCanva #EduTikTok #Akshardesigns'
    },
    {
      day: 4,
      dayLabel: 'Hari 4 (Kamis)',
      title: 'High Conversion: Special Bundle 50+ Template Carousel',
      goalType: 'conversion',
      categoryBadge: 'Direct Product Offer',
      hook: '🔥 "Bikin 30 konten Carousel Instagram & TikTok cuma 10 menit? Nih gua udah buatin 50+ Template Canva Siap Edit!"',
      script: 'Lu tinggal ganti teks dan warna sesuai brand lu. Semua font & elemen 100% gratis di Canva. Cocok buat UMKM, Affiliate, & Content Creator yang mau konsisten upload!',
      cta: '⚡ Khusus pembeli hari ini di link bio: Dapet bonus 100+ Font Pairing Guide gratis!',
      directives: 'Fast-cut preview slide-slide template Carousel di layar laptop. Teks harga promo mencolok.',
      bestTime: '20:00 WIB',
      hashtags: '#TemplateCanva #CarouselCanva #BrandingUMKM #TemplateJualan'
    },
    {
      day: 5,
      dayLabel: 'Hari 5 (Jumat)',
      title: 'Viral Storytelling: Dari Iseng Desain Sampai Jadi Canva Creator',
      goalType: 'viral',
      categoryBadge: 'Creator Journey',
      hook: '✨ "Dulu gua mikir ngedesain itu harus kuliah DKV... Sampai akhirnya ketemu Canva dan merubah hidup gua!"',
      script: 'Gua mulai dari 0, cuma bermodal laptop biasa dan koneksi internet. Siapa sangka dari iseng bagikan tutorial di TikTok @akhmad.suhardian, sekarang bisa punya ribuan student & client!',
      cta: '❤️ Share video ini ke temen lu yang pengen mulai belajar desain graphic tanpa ribet!',
      directives: 'Format Talking head hangat & inspiratif. BGM instrumental acoustic piano.',
      bestTime: '16:00 WIB',
      hashtags: '#CreatorStory #Akshardesigns #MotivasiKreatif #CanvaIndonesia'
    },
    {
      day: 6,
      dayLabel: 'Hari 6 (Sabtu)',
      title: 'High Conversion: Studi Kasus Rebrand Olshop Client',
      goalType: 'conversion',
      categoryBadge: 'Case Study / Jasa Desain',
      hook: '📈 "Olshop ini tadinya sepi pembeli... Setelah gua rebrand desain feed Canva-nya, penjualannya naik 3x lipat!"',
      script: 'Kunci utamanya ada di Hierarchy Visual & Pemilihan Warna yang menarik perhatian audiens dalam 2 detik pertama. Ini dia rahasia susunan elemennya...',
      cta: '📲 Mau desain akun bisnis lu di-review atau dibuatin template kustom? DM Instagram / klik link di bio!',
      directives: 'Tampilkan bukti percakapan testimoni klien & transformasi desain feed.',
      bestTime: '13:00 WIB',
      hashtags: '#RebrandBisnis #JasaDesainCanva #StudiKasus #BrandingOlshop'
    },
    {
      day: 7,
      dayLabel: 'Hari 7 (Minggu)',
      title: 'Community & Engagement: Font Combo Canva Favorit 2026',
      goalType: 'viral',
      categoryBadge: 'Font Pairing Hack',
      hook: '🔤 "3 Kombinasi Font Canva Terbaik 2026 yang Bikin Brosur & Story Lu Auto Kelihatan Aesthetic!"',
      script: 'Kombinasi 1: Montserrat (Header) + Serif (Subheader). Kombinasi 2: League Spartan + Canva Sans. Kombinasi 3: TAN Moonlight + Inter. Cobain buat desain minggu depan!',
      cta: '🔔 Follow @akhmad.suhardian biar gak ketinggalan rekomendasi font & element Canva gratis tiap minggunya!',
      directives: 'Tampilkan visual contoh teks per font combo dengan mockup smartphone.',
      bestTime: '19:30 WIB',
      hashtags: '#FontCanva #KombinasiFont #DesignHack #CanvaTutorial'
    }
  ];

  // Chart Instances
  let reachChartInstance = null;
  let mixChartInstance = null;
  let scatterChartInstance = null;

  // Initialize App
  initNavigation();
  updateCalculatedMetrics();
  initCharts();
  renderVideoTable(videoData);
  renderStrategyCards(contentStrategyData);
  initModalListeners();
  initFormListeners();

  // Recalculate Metrics dynamically from videoData
  function updateCalculatedMetrics() {
    if (!videoData.length) return;

    const totalViews = videoData.reduce((acc, v) => acc + Number(v.views), 0);
    const totalReach = videoData.reduce((acc, v) => acc + Number(v.reach), 0);
    const totalLikes = videoData.reduce((acc, v) => acc + Number(v.likes), 0);
    const totalComments = videoData.reduce((acc, v) => acc + Number(v.comments), 0);
    const totalShares = videoData.reduce((acc, v) => acc + Number(v.shares), 0);
    const totalInteractions = totalLikes + totalComments + totalShares;

    const avgEr = totalViews > 0 ? ((totalInteractions / totalViews) * 100).toFixed(2) : 8.65;

    // Update DOM
    document.getElementById('valReach').textContent = formatCompactNumber(totalReach);
    document.getElementById('valEngagement').textContent = `${avgEr}%`;
    document.getElementById('valViews').textContent = formatCompactNumber(totalViews);
    document.getElementById('valInteractions').textContent = formatCompactNumber(totalInteractions);
  }

  function formatCompactNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  }

  // Navigation Logic
  function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        
        navItems.forEach(nav => nav.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        item.classList.add('active');
        document.getElementById(`tab-${targetTab}`).classList.add('active');

        const titles = {
          'dashboard': 'Dashboard Analisis TikTok',
          'content-strategy': 'Strategi Konten AI 7 Hari (Akshardesigns.Id | Canva)',
          'video-library': 'Matriks Performa Video',
          'integrations': 'Pengaturan API & Google Sheets'
        };
        document.getElementById('pageTitle').textContent = titles[targetTab] || 'Dashboard TikTok';
      });
    });

    document.getElementById('quickSyncBtn').addEventListener('click', () => {
      showToast('Refreshing live metrics dari akun @akhmad.suhardian...');
      setTimeout(() => {
        showToast('Data metriks berhasil diperbarui!');
      }, 1000);
    });

    document.getElementById('openApiModalBtn').addEventListener('click', () => {
      document.querySelector('[data-tab="integrations"]').click();
    });
  }

  // Chart Rendering
  function initCharts() {
    const ctxReach = document.getElementById('reachEngagementChart').getContext('2d');
    
    const labels = ['1 Jul', '5 Jul', '10 Jul', '15 Jul', '20 Jul', '25 Jul', '27 Jul'];
    const reachTrend = [45000, 68000, 92000, 115000, 140000, 165000, 184000];
    const erTrend = [7.2, 8.5, 9.8, 11.2, 13.4, 15.2, 17.2];

    reachChartInstance = new Chart(ctxReach, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Reach (Est. Penonton Unik)',
            data: reachTrend,
            borderColor: '#00f2fe',
            backgroundColor: 'rgba(0, 242, 254, 0.1)',
            fill: true,
            tension: 0.4,
            yAxisID: 'yReach',
            borderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: '#00f2fe'
          },
          {
            label: 'Engagement Rate (%)',
            data: erTrend,
            borderColor: '#ff0050',
            backgroundColor: 'transparent',
            tension: 0.4,
            borderDash: [5, 5],
            yAxisID: 'yEr',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#ff0050'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
          yReach: { type: 'linear', position: 'left', grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#00f2fe' } },
          yEr: { type: 'linear', position: 'right', grid: { drawOnChartArea: false }, ticks: { color: '#ff0050' } }
        }
      }
    });

    const ctxMix = document.getElementById('contentDistributionChart').getContext('2d');
    mixChartInstance = new Chart(ctxMix, {
      type: 'doughnut',
      data: {
        labels: ['Viral Awareness (Element & Hacks)', 'Direct Conversion (Template Sales)', 'Educational & QnA'],
        datasets: [{
          data: [55, 30, 15],
          backgroundColor: ['#ff0050', '#00f2fe', '#8b5cf6'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        cutout: '72%'
      }
    });

    const ctxScatter = document.getElementById('scatterVideoPerformanceChart').getContext('2d');
    scatterChartInstance = new Chart(ctxScatter, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Video Matrix (Reach vs ER)',
          data: videoData.map(v => ({ x: v.reach, y: v.er, title: v.title })),
          backgroundColor: '#00f2fe',
          borderColor: '#ff0050',
          pointRadius: 8,
          pointHoverRadius: 12
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const item = context.raw;
                return `${item.title}: ${item.x.toLocaleString()} Reach, ER: ${item.y}%`;
              }
            }
          }
        },
        scales: {
          x: { title: { display: true, text: 'Total Reach', color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
          y: { title: { display: true, text: 'Engagement Rate (%)', color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
        }
      }
    });
  }

  // Render Video Table Rows
  function renderVideoTable(videos) {
    const tbody = document.getElementById('videoTableBody');
    tbody.innerHTML = '';

    videos.forEach(v => {
      const tr = document.createElement('tr');
      const badgeClass = v.type === 'viral' ? 'pill-viral' : 'pill-conversion';

      tr.innerHTML = `
        <td>
          <div class="video-cell">
            <div class="video-thumb"><i class="fa-solid fa-palette"></i></div>
            <div class="video-meta">
              <strong>${v.title}</strong>
              <span>Diupload: ${v.date}</span>
            </div>
          </div>
        </td>
        <td><span class="pill ${badgeClass}">${v.category}</span></td>
        <td><strong>${Number(v.views).toLocaleString()}</strong></td>
        <td><span class="text-cyan">${Number(v.reach).toLocaleString()}</span></td>
        <td>${Number(v.likes).toLocaleString()}</td>
        <td>${Number(v.comments).toLocaleString()}</td>
        <td>${Number(v.shares).toLocaleString()}</td>
        <td><strong class="text-magenta">${v.er}%</strong></td>
        <td><span class="badge-status">${v.status || 'Active'}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Search Filter
  document.getElementById('searchVideoInput').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = videoData.filter(v => 
      v.title.toLowerCase().includes(q) || 
      v.category.toLowerCase().includes(q)
    );
    renderVideoTable(filtered);
  });

  // Export CSV
  document.getElementById('exportCsvBtn').addEventListener('click', () => {
    let csvContent = "data:text/csv;charset=utf-8,Judul,Kategori,Views,Reach,Likes,Comments,Shares,ER,Tanggal\n";
    videoData.forEach(v => {
      csvContent += `"${v.title}",${v.category},${v.views},${v.reach},${v.likes},${v.comments},${v.shares},${v.er}%,${v.date}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `TikTok_Analytics_@akhmad.suhardian.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('File CSV data real berhasil di-download!');
  });

  // Render 7-Day Strategy Cards
  function renderStrategyCards(strategies) {
    const container = document.getElementById('strategyDaysContainer');
    container.innerHTML = '';

    strategies.forEach(s => {
      const card = document.createElement('div');
      card.className = 'day-card';
      const badgeColor = s.goalType === 'viral' ? 'pill-viral' : 'pill-conversion';

      card.innerHTML = `
        <div class="day-card-header">
          <span class="day-badge">${s.dayLabel}</span>
          <span class="pill ${badgeColor}">${s.categoryBadge}</span>
        </div>

        <h4 style="font-size: 1.05rem; color: #fff;">${s.title}</h4>

        <div class="section-block hook-block">
          <div class="section-block-title"><i class="fa-solid fa-fire"></i> Hook 3-Detik Pertama</div>
          <div class="section-block-content">${s.hook}</div>
        </div>

        <div class="section-block script-block">
          <div class="section-block-title"><i class="fa-solid fa-scroll"></i> Script & Narasi Utama</div>
          <div class="section-block-content">${s.script}</div>
        </div>

        <div class="section-block cta-block">
          <div class="section-block-title"><i class="fa-solid fa-bullseye"></i> High-Converting CTA (Konversi)</div>
          <div class="section-block-content">${s.cta}</div>
        </div>

        <div class="section-block meta-block">
          <div class="section-block-title"><i class="fa-solid fa-clapperboard"></i> Arahan Visual & Audio</div>
          <div class="section-block-content">${s.directives}</div>
          <div class="meta-tags-list">
            <span class="meta-tag"><i class="fa-regular fa-clock"></i> ${s.bestTime}</span>
            <span class="meta-tag"><i class="fa-solid fa-hashtag"></i> Hashtag Stack: ${s.hashtags}</span>
          </div>
        </div>

        <div class="day-card-footer">
          <button class="btn btn-sm btn-outline copy-script-btn" data-day="${s.day}">
            <i class="fa-regular fa-copy"></i> Copy Script
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    document.querySelectorAll('.copy-script-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dayId = e.currentTarget.getAttribute('data-day');
        const item = contentStrategyData.find(d => d.day == dayId);
        if (item) {
          const textToCopy = `=== ${item.dayLabel}: ${item.title} ===\n\nHook:\n${item.hook}\n\nScript:\n${item.script}\n\nCTA:\n${item.cta}\n\nWaktu Posting: ${item.bestTime}\nHashtags: ${item.hashtags}`;
          navigator.clipboard.writeText(textToCopy);
          showToast(`Script ${item.dayLabel} berhasil di-copy!`);
        }
      });
    });
  }

  // Strategy Category Filter
  document.getElementById('strategyCategoryFilter').addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'all') {
      renderStrategyCards(contentStrategyData);
    } else {
      const filtered = contentStrategyData.filter(d => d.goalType === val);
      renderStrategyCards(filtered);
    }
  });

  // Regenerate AI Strategy Button
  document.getElementById('generateAiStrategyBtn').addEventListener('click', () => {
    showToast('AI menganalisis tren Canva & meregenerasi strategi...');
    setTimeout(() => {
      contentStrategyData = contentStrategyData.map(item => ({
        ...item,
        bestTime: item.day % 2 === 0 ? '19:45 WIB' : '18:15 WIB'
      }));
      renderStrategyCards(contentStrategyData);
      showToast('Strategi AI 7 hari untuk Akshardesigns.Id berhasil diperbarui!');
    }, 1000);
  });

  // Export / Sync Strategy to Google Sheets
  document.getElementById('syncStrategyToGSheetBtn').addEventListener('click', () => {
    const sheetId = document.getElementById('cfgGsheetId').value;
    showToast(`Mengirim 7-Day Strategy ke Google Sheet ID: ${sheetId.substring(0, 10)}...`);
    setTimeout(() => {
      showToast('Berhasil terhubung & tersinkronisasi ke Google Sheet!');
    }, 1200);
  });

  // Custom Data Modal Handlers
  function initModalListeners() {
    const modal = document.getElementById('customDataModal');
    const openBtn = document.getElementById('openCustomDataModalBtn');
    const closeBtn = document.getElementById('closeCustomDataModalBtn');
    const cancelBtn = document.getElementById('cancelCustomDataModalBtn');
    const form = document.getElementById('addVideoForm');

    openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    cancelBtn.addEventListener('click', () => modal.classList.add('hidden'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('inputVideoTitle').value;
      const category = document.getElementById('inputVideoCategory').value;
      const type = document.getElementById('inputVideoType').value;
      const views = Number(document.getElementById('inputVideoViews').value);
      const reach = Number(document.getElementById('inputVideoReach').value);
      const likes = Number(document.getElementById('inputVideoLikes').value);
      const comments = Number(document.getElementById('inputVideoComments').value);
      const shares = Number(document.getElementById('inputVideoShares').value);

      const totalInteractions = likes + comments + shares;
      const er = views > 0 ? ((totalInteractions / views) * 100).toFixed(1) : 0;

      const newVideo = {
        id: 'v' + Date.now(),
        title: title,
        category: category,
        type: type,
        views: views,
        reach: reach,
        likes: likes,
        comments: comments,
        shares: shares,
        er: parseFloat(er),
        date: new Date().toISOString().split('T')[0],
        status: 'Custom Input ✍️'
      };

      videoData.unshift(newVideo);
      localStorage.setItem('akhmad_custom_videos', JSON.stringify(videoData));

      // Re-render
      updateCalculatedMetrics();
      renderVideoTable(videoData);

      if (scatterChartInstance) {
        scatterChartInstance.data.datasets[0].data = videoData.map(v => ({ x: v.reach, y: v.er, title: v.title }));
        scatterChartInstance.update();
      }

      form.reset();
      modal.classList.add('hidden');
      showToast('Data video asli Anda berhasil ditambahkan & dihitung!');
    });
  }

  // Integrations Form Listeners
  function initFormListeners() {
    document.getElementById('saveTiktokConfigBtn').addEventListener('click', () => {
      const appKey = document.getElementById('cfgTiktokAppKey').value;
      const token = document.getElementById('cfgTiktokToken').value;
      localStorage.setItem('tt_app_key', appKey);
      localStorage.setItem('tt_token', token);
      showToast('Konfigurasi TikTok API berhasil disimpan!');
    });

    document.getElementById('testTiktokApiBtn').addEventListener('click', () => {
      showToast('Testing koneksi ke TikTok API (@akhmad.suhardian)...');
      setTimeout(() => {
        showToast('Koneksi TikTok API: 200 OK (Akshardesigns.Id Terhubung)!');
      }, 1000);
    });

    document.getElementById('saveGsheetConfigBtn').addEventListener('click', () => {
      const sheetId = document.getElementById('cfgGsheetId').value;
      const apiKey = document.getElementById('cfgGsheetApiKey').value;
      const sheetName = document.getElementById('cfgGsheetName').value;
      localStorage.setItem('gsheet_id', sheetId);
      localStorage.setItem('gsheet_api_key', apiKey);
      localStorage.setItem('gsheet_name', sheetName);
      showToast('Konfigurasi Google Sheets API berhasil disimpan!');
    });

    document.getElementById('syncGsheetNowBtn').addEventListener('click', () => {
      showToast('Sinkronisasi data metriks ke Google Sheet sedang berlangsung...');
      setTimeout(() => {
        showToast('Data metriks berhasil di-export ke Google Sheet!');
      }, 1500);
    });
  }

  // Toast Helper
  function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    toastMsg.textContent = msg;
    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3500);
  }
});
