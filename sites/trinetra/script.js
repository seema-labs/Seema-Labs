const reviewButtons = document.querySelectorAll('[data-decision]');
reviewButtons.forEach(button => button.addEventListener('click', () => {
  const approved = button.dataset.decision === 'approve';
  document.getElementById('review-badge').textContent = approved ? 'Approved in example' : 'Denied in example';
  document.getElementById('review-status').textContent = approved ? 'Example: the three proposed permissions are approved.' : 'Example: the proposed permissions are denied.';
  reviewButtons.forEach(item => item.disabled = true);
  document.getElementById('reset-review').hidden = false;
}));
document.getElementById('reset-review').addEventListener('click', () => {
  document.getElementById('review-badge').textContent = 'Awaiting review';
  document.getElementById('review-status').textContent = 'Illustration · Choose a decision';
  reviewButtons.forEach(item => item.disabled = false);
  document.getElementById('reset-review').hidden = true;
  reviewButtons[0].focus();
});
document.getElementById('access-review').addEventListener('click', event => {
  const panel = document.getElementById('access-options');
  panel.hidden = !panel.hidden;
  event.currentTarget.setAttribute('aria-expanded', String(!panel.hidden));
  event.currentTarget.textContent = panel.hidden ? 'Review request →' : 'Close review ↑';
});
const accessButtons = document.querySelectorAll('[data-access]');
accessButtons.forEach(button => button.addEventListener('click', () => {
  const approved = button.dataset.access === 'approve';
  document.getElementById('access-badge').textContent = approved ? 'Approved in example' : 'Denied in example';
  document.getElementById('access-status').textContent = approved ? 'Example: read access approved for this request.' : 'Example: access denied; file remains protected.';
  accessButtons.forEach(item => item.disabled = true);
  document.getElementById('reset-access').hidden = false;
}));
document.getElementById('reset-access').addEventListener('click', () => {
  document.getElementById('access-badge').textContent = 'Review needed';
  document.getElementById('access-status').textContent = 'Human review required';
  accessButtons.forEach(item => item.disabled = false);
  document.getElementById('reset-access').hidden = true;
  accessButtons[0].focus();
});
