
// Placeholder for OAuth + Embedded Sign up hooks.
// Replace GOOGLE_CLIENT_ID in index.html and host callback at /app/callback.html when you wire it up.
document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(src);
    btn.textContent = 'Copied';
    setTimeout(()=>btn.textContent='Copy',1200);
  });
});
