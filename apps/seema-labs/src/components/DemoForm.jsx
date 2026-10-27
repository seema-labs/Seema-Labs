import { sendForm } from '@emailjs/browser';
import { useEffect, useId, useRef, useState } from 'react';

export default function DemoForm({ open, onClose }) {
  const dialog = useRef(null);
  const titleId = useId();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  function close() {
    setStatus('idle');
    setError('');
    onClose();
  }

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (open) {
      if (!node.open) node.showModal();
    } else if (node.open) {
      node.close();
    }
  }, [open]);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setError('');
    try {
      await sendForm('service_0lu1o95', 'template_08bxwkz', form, {
        publicKey: '22boYnL_o2Bq8N8nU',
      });
      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err?.text || 'Could not send. Try again.');
    }
  }

  return (
    <dialog
      ref={dialog}
      className="demo-dialog"
      aria-labelledby={titleId}
      onClose={close}
      onClick={(event) => {
        if (event.target === dialog.current) close();
      }}
    >
      <h2 id={titleId}>Request a demo</h2>
      {status === 'sent' ? (
        <p>Request sent.</p>
      ) : (
        <form onSubmit={onSubmit}>
          <p>Leave your name, email, and a way to reach you.</p>
          <input type="hidden" name="title" value="Seema Labs demo request" />
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Contact
            <input type="text" name="contact" autoComplete="tel" required />
          </label>
          {status === 'error' ? <p className="demo-error">{error}</p> : null}
          <button className="button" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>
        </form>
      )}
      <button type="button" className="demo-close" onClick={close} aria-label="Close">
        ×
      </button>
    </dialog>
  );
}
