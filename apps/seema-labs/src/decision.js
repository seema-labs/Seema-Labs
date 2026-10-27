export function applyDecision(action, copy) {
  if (action === 'reset') {
    return { badge: copy.pending, status: copy.initial, locked: false };
  }
  const approved = action === 'approve';
  return {
    badge: approved ? 'Approved in example' : 'Denied in example',
    status: approved ? copy.approved : copy.denied,
    locked: true,
  };
}
