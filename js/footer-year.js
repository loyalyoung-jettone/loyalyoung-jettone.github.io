document.addEventListener('DOMContentLoaded', function() {
  const since = 2017;
  const now = new Date().getFullYear();
  const el = document.querySelector('.footer .since');
  if (el) el.textContent = since === now ? since : `${since} - ${now}`;
});