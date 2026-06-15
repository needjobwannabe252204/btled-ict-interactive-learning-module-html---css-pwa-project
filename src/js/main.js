// Minimal UI helpers for the home page.
// This file is intentionally small — it's a good place to add
// interactive behavior later (e.g., handling clicks, small UI updates).

// Run code after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Debug: indicate the home page script has loaded successfully
  console.log('BTLEd home loaded');

  // Example: you can attach event listeners here, like:
  // const btn = document.querySelector('.btn');
  // if (btn) btn.addEventListener('click', () => { /* do something */ });
});

// ---------------------------
// Profile localStorage helpers
// ---------------------------
function saveProfile(profile) {
  try {
    localStorage.setItem('btled_profile', JSON.stringify(profile));
    return true;
  } catch (err) {
    console.error('Failed to save profile', err);
    return false;
  }
}

function loadProfile() {
  try {
    const raw = localStorage.getItem('btled_profile');
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error('Failed to load profile', err);
    return null;
  }
}

// Attach profile form behavior if present on the page
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('profileForm');
  const savedEl = document.getElementById('savedProfile');
  if (form) {
    // populate if data exists
    const profile = loadProfile();
    if (profile) {
      form.firstName.value = profile.firstName || '';
      form.lastName.value = profile.lastName || '';
      form.course.value = profile.course || '';
      form.section.value = profile.section || '';
      form.year.value = profile.year || '';
      if (savedEl) savedEl.textContent = 'Loaded saved profile.';
    }

    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const data = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        course: form.course.value.trim(),
        section: form.section.value.trim(),
        year: form.year.value.trim(),
      };
      if (saveProfile(data)) {
        if (savedEl) savedEl.textContent = 'Profile saved locally.';
        console.log('Profile saved', data);
      } else {
        if (savedEl) savedEl.textContent = 'Failed to save profile.';
      }
    });
  }
});

// Mobile navigation toggle: attach after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('profileForm');
  const savedEl = document.getElementById('savedProfile');
  if (form) {
    // populate if data exists
    const profile = loadProfile();
    if (profile) {
      form.firstName.value = profile.firstName || '';
      form.lastName.value = profile.lastName || '';
      form.course.value = profile.course || '';
      form.section.value = profile.section || '';
      form.year.value = profile.year || '';
      if (savedEl) savedEl.textContent = 'Loaded saved profile.';
    }

    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const data = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        course: form.course.value.trim(),
        section: form.section.value.trim(),
        year: form.year.value.trim(),
      };
      if (saveProfile(data)) {
        if (savedEl) savedEl.textContent = 'Profile saved locally.';
        console.log('Profile saved', data);
      } else {
        if (savedEl) savedEl.textContent = 'Failed to save profile.';
      }
    });
  }
});
