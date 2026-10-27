import assert from 'node:assert/strict';
import test from 'node:test';
import { applyDecision } from './decision.js';

const copy = { pending: 'p', initial: 'i', approved: 'a', denied: 'd' };

test('sample approve, deny, and reset stay browser-only copy', () => {
  assert.deepEqual(applyDecision('approve', copy), {
    badge: 'Approved in example',
    status: 'a',
    locked: true,
  });
  assert.deepEqual(applyDecision('deny', copy), {
    badge: 'Denied in example',
    status: 'd',
    locked: true,
  });
  assert.deepEqual(applyDecision('reset', copy), {
    badge: 'p',
    status: 'i',
    locked: false,
  });
});
