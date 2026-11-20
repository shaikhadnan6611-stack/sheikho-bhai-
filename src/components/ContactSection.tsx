import React, { useState } from 'react';
import { Check, Copy, Mail, Phone, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { WhatsAppLogo } from './BrandIcons';

export const ContactSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [subject, setSubject] = useState('Brand Collaboration');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedVia, setSubmittedVia] = useState<'email' | 'whatsapp' | null>(null);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 2000);
    } catch {
      // Fallback ignored gracefully in restricted contexts
    }
  };

  const validateForm = (): boolean => {
    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return false;
    }
    if (!senderContact.trim()) {
      setFormError('Please provide your email address or phone number.');
      return false;
    }
    if (message.trim().length < 8) {
      setFormError('Please include a brief message (at least 8 characters).');
      return false;
    }
    setFormError(null);
    return true;
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const encodedSubject = encodeURIComponent(`[Shaikho Bhai Website] ${subject} from ${name.trim()}`);
    const encodedBody = encodeURIComponent(
      `Name: ${name.trim()}\nContact: ${senderContact.trim()}\nTopic: ${subject}\n\nMessage:\n${message.trim()}`
    );
    setSubmittedVia('email');
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleSendWhatsApp = () => {
    if (!validateForm()) return;

    const text = encodeURIComponent(
      `Assalam-o-Alaikum Shaikho Bhai,\nName: ${name.trim()}\nContact: ${senderContact.trim()}\nTopic: ${subject}\n\n${message.trim()}`
    );
    setSubmittedVia('whatsapp');
    window.open(`${siteConfig.contact.phones[0].whatsappUrl}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="bg-[#FAFAFA] text-[#0A0A0B] py-20 sm:py-28 border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-[#9A7414] mb-3">Contact Me · Direct Channels</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#0A0A0B] text-balance mb-4">
            Reach Shaikho Bhai in Pakistan, UAE, or by Email
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            For media inquiries, brand collaborations, event invitations, or direct support, use
            any verified phone line, WhatsApp channel, or email address below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone, WhatsApp, and Email Cards */}
          <div className="lg:col-span-7 space-y-4">
            {siteConfig.contact.phones.map((phone) => (
              <div
                key={phone.id}
                className="p-6 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
              >
                <div>
                  <p className="text-xs font-medium text-[#9A7414] mb-1">
                    {phone.label} · {phone.region}
                  </p>
                  <p className="font-display text-2xl sm:text-3xl font-semibold text-[#0A0A0B] tabular-nums">
                    {phone.number}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href={phone.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[42px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#FAFAFA] bg-[#070708] hover:bg-[#D4AF37] hover:text-[#070708] rounded-md transition-colors whitespace-nowrap"
                  >
                    <WhatsAppLogo className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={phone.telUrl}
                    className="min-h-[42px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0A0A0B] bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-md transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(phone.id, phone.number)}
                    aria-label={`Copy ${phone.number}`}
                    className="min-h-[42px] min-w-[42px] inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-neutral-700 hover:text-[#0A0A0B] border border-neutral-200 hover:border-neutral-400 rounded-md transition-colors"
                  >
                    {copiedId === phone.id ? (
                      <Check className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}

            {/* Email Contact Card */}
            <div className="p-6 rounded-xl bg-[#070708] text-[#FAFAFA] border border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="min-w-0">
                <p className="text-xs font-medium text-[#D4AF37] mb-1">Official Email Address</p>
                <p className="font-display text-xl sm:text-2xl font-semibold text-[#FAFAFA] break-all">
                  {siteConfig.contact.email}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={siteConfig.contact.mailtoUrl}
                  className="min-h-[42px] inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-[#070708] bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy('email', siteConfig.contact.email)}
                  aria-label="Copy official email address"
                  className="min-h-[42px] min-w-[42px] inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-neutral-200 hover:text-[#D4AF37] border border-white/20 hover:border-[#D4AF37] rounded-md transition-colors"
                >
                  {copiedId === 'email' ? (
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Composer */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-white border border-neutral-200">
            <h3 className="font-display text-2xl font-semibold text-[#0A0A0B] mb-2">
              Send a Direct Inquiry
            </h3>
            <p className="text-sm text-neutral-600 mb-6">
              Compose your message below and open it directly in WhatsApp or your email app.
            </p>

            <form onSubmit={handleSendEmail} noValidate className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0A0A0B] bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#9A7414] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-info" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                  Email or Phone Number
                </label>
                <input
                  id="contact-info"
                  type="text"
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  placeholder="name@example.com or +92 / +971..."
                  className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0A0A0B] bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#9A7414] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-topic" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  id="contact-topic"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0A0A0B] bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#9A7414] focus:bg-white transition-colors"
                >
                  <option value="Brand Collaboration">Brand Collaboration</option>
                  <option value="Event Appearance">Event Appearance</option>
                  <option value="Media & Interview">Media & Interview</option>
                  <option value="General Message">General Message</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your collaboration, event, or message..."
                  className="w-full px-3.5 py-2.5 text-sm text-[#0A0A0B] bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-[#9A7414] focus:bg-white transition-colors resize-y"
                />
              </div>

              {formError && (
                <p role="alert" className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                  {formError}
                </p>
              )}

              {submittedVia && !formError && (
                <p role="status" className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-2">
                  Your inquiry has been prepared for{' '}
                  {submittedVia === 'whatsapp' ? 'WhatsApp' : 'your email client'}. Thank you for
                  reaching out to Shaikho Bhai.
                </p>
              )}

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAFAFA] bg-[#070708] hover:bg-neutral-800 rounded-md transition-colors whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#070708] bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-colors whitespace-nowrap"
                >
                  <WhatsAppLogo className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
