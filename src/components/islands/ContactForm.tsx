import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'mt-2 w-full rounded-xl border border-ink/20 bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-taupe-dark/60 focus:border-ink focus:ring-2 focus:ring-gold-deep/30';

export default function ContactForm({ endpoint, phone }: { endpoint?: string; phone: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const v = (k: string) => String(data.get(k) ?? '').trim();
    const next: Record<string, string> = {};
    if (!v('name')) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(v('email'))) next.email = 'Please enter a valid email address.';
    if (v('phone') && v('phone').replace(/\D/g, '').length < 10) next.phone = 'Please enter a 10-digit phone number.';
    if (!v('message')) next.message = 'Please tell us how we can help.';
    if (v('company')) return; // honeypot
    setErrors(next);
    if (Object.keys(next).length) return;
    if (!endpoint) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
      if (!res.ok) throw new Error('bad response');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-[1.5rem] border border-ink/10 bg-white p-10 text-center shadow-2xl shadow-ink/10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
        </div>
        <h3 className="mt-6 font-serif text-3xl">Thank you. We got your message.</h3>
        <p className="mt-3 text-taupe-dark">Our team will reply soon. For urgent needs, please call {phone}.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-dark mt-8">Send another message</button>
      </div>
    );
  }

  const err = (k: string) => (errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-red-700">{errors[k]}</p> : null);
  const aria = (k: string) => ({ 'aria-invalid': errors[k] ? true : undefined, 'aria-describedby': errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[1.5rem] border border-ink/10 bg-white p-8 shadow-2xl shadow-ink/10 md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium">Name
          <input name="name" autoComplete="name" className={field} placeholder="Your full name" {...aria('name')} />
          {err('name')}
        </label>
        <label className="block text-sm font-medium">Email
          <input name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" {...aria('email')} />
          {err('email')}
        </label>
        <label className="block text-sm font-medium">Phone <span className="font-normal text-taupe-dark">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="908-555-0123" {...aria('phone')} />
          {err('phone')}
        </label>
        <label className="block text-sm font-medium">Subject
          <select name="subject" className={field} defaultValue="General question">
            <option>General question</option>
            <option>Appointment request</option>
            <option>Billing or insurance</option>
            <option>Medical records</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="mt-6 block text-sm font-medium">Message
        <textarea name="message" rows={6} className={field} placeholder="How can we help you?" {...aria('message')} />
        {err('message')}
      </label>
      <div className="hidden" aria-hidden="true"><label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label></div>
      <p className="mt-5 text-xs leading-relaxed text-taupe-dark">Please do not include sensitive medical details here. For urgent matters, call us at {phone}.</p>
      {status === 'error' && (
        <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          We could not send your message online right now. Please call us at {phone} and we will help right away.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'} className="btn btn-dark mt-7 disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
