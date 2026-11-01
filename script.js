const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const scenarios = {
  production: { config: '생산 지표 / 실시간 조회', title: '생산 모니터링', description: '생산 현황과 주요 지표를 확인하는 업무 화면' },
  spare: { config: '예비품 / 요청과 지급', title: '예비품 관리', description: '생산 라인의 요청부터 창고 지급까지 연결하는 업무 화면' },
  master: { config: '기준정보 / 통합 관리', title: '기준정보', description: '법인별 공통 기준을 일관되게 관리하는 업무 화면' }
};
const scenarioButtons = document.querySelectorAll('[data-scenario]');
scenarioButtons.forEach(button => {
  button.addEventListener('click', () => {
    const scenario = scenarios[button.dataset.scenario];
    scenarioButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.getElementById('config-value').textContent = scenario.config;
    document.getElementById('screen-title').textContent = scenario.title;
    document.getElementById('screen-description').textContent = scenario.description;
    document.getElementById('scenario-status').textContent = `${scenario.title} 예시 표시`;
    if (!reducedMotion.matches) document.querySelectorAll('.model-layer').forEach((layer, index) => {
      layer.animate([{ transform: 'translateY(8px)', opacity: 0.65 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 500, delay: index * 80, easing: 'cubic-bezier(.16,1,.3,1)' });
    });
  });
});
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    projects.forEach(project => {
      project.hidden = filter !== 'all' && project.dataset.category !== filter;
      if (!project.hidden) count++;
    });
    document.getElementById('filter-status').textContent = `프로젝트 ${count}개 표시`;
  });
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (reducedMotion.matches) return;
      const diagram = entry.target.classList.contains('model-layer');
      entry.target.animate([{ transform: diagram ? 'translateX(14px)' : 'translateY(18px)', opacity: 0.75 }, { transform: 'translate(0,0)', opacity: 1 }], { duration: diagram ? 900 : 650, easing: 'cubic-bezier(.16,1,.3,1)' });
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.model-layer, .story-copy h2, .story-copy h3, .story-copy > p, .knowledge > div, .performance-heading > *, .results article, .section-heading > *, .project, .career-list article, .toolkit, .contact-section > div').forEach(element => observer.observe(element));
}
