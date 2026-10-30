import { useId, useRef, useState } from 'react'
import { CircleAlert, Check, LoaderCircle, Mail, MessageSquare, Send } from 'lucide-react'
import { CATEGORIES, GROUPS, getCategory } from '../data/categories'
import { ENQUIRY_ENDPOINT, SITE } from '../data/site'

const GENERAL = 'general'

const validators = {
  name: (v) => (v.trim().length < 2 ? 'Please enter your name.' : ''),
  phone: (v) => {
    if (!v.trim()) return 'Please enter your phone number.'
    const digits = v.replace(/\D/g, '')
    if (!/^[+\d\s()-]+$/.test(v.trim()) || digits.length < 7 || digits.length > 15)
      return 'Please enter a valid phone number.'
    return ''
  },
  email: (v) =>
    v.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? 'Please enter a valid email address.' : '',
  category: (v) => (!v ? 'Please choose a product category.' : ''),
  message: (v) => (v.length > 2000 ? 'Please keep your message under 2000 characters.' : ''),
}

const validate = (values) =>
  Object.fromEntries(
    Object.entries(validators)
      .map(([key, fn]) => [key, fn(values[key] ?? '')])
      .filter(([, msg]) => msg),
  )

const categoryLabel = (slug) =>
  slug === GENERAL ? 'General enquiry' : getCategory(slug)?.name || ''

const buildSummary = (v) =>
  [
    `New enquiry for ${SITE.name}`,
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    v.email && `Email: ${v.email}`,
    `Category: ${categoryLabel(v.category)}`,
    v.product && `Product: ${v.product}`,
    v.message && `Message: ${v.message}`,
  ]
    .filter(Boolean)
    .join('\n')

/**
 * Enquiry form. `initialCategory` / `initialProduct` prefill the form when a
 * customer arrives from a product's "Enquire Now" button.
 */
export default function EnquiryForm({ initialCategory = '', initialProduct = '' }) {
  const uid = useId()
  const formRef = useRef(null)
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    category: getCategory(initialCategory) ? initialCategory : '',
    product: initialProduct,
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  // idle | sending | sent | error | offline (no endpoint configured)
  const [status, setStatus] = useState('idle')

  const fieldId = (name) => `${uid}-${name}`

  const update = (e) => {
    const { name, value } = e.target
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors(validate(next))
    if (status !== 'idle' && status !== 'sending') setStatus('idle')
  }

  const blur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched(Object.fromEntries(Object.keys(validators).map((k) => [k, true])))
    if (Object.keys(found).length) {
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus()
      return
    }

    if (!ENQUIRY_ENDPOINT) {
      setStatus('offline')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          categoryName: categoryLabel(values.category),
          submittedAt: new Date().toISOString(),
          page: window.location.href,
        }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('sent')
      setValues((v) => ({ ...v, name: '', phone: '', email: '', message: '' }))
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const showError = (name) => touched[name] && errors[name]
  const fieldProps = (name) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: update,
    onBlur: blur,
    'aria-invalid': showError(name) ? 'true' : undefined,
    'aria-describedby': showError(name) ? `${fieldId(name)}-err` : undefined,
  })
  const errorText = (name) =>
    showError(name) ? (
      <p id={`${fieldId(name)}-err`} className="field__error">
        {errors[name]}
      </p>
    ) : null

  const summary = buildSummary(values)
  const { whatsapp, email: businessEmail, phone } = SITE.contact

  return (
    <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__grid">
        <div className="field">
          <label htmlFor={fieldId('name')}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" required {...fieldProps('name')} />
          {errorText('name')}
        </div>

        <div className="field">
          <label htmlFor={fieldId('phone')}>
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" required {...fieldProps('phone')} />
          {errorText('phone')}
        </div>

        <div className="field">
          <label htmlFor={fieldId('email')}>
            Email <span className="field__optional">(optional)</span>
          </label>
          <input type="email" autoComplete="email" {...fieldProps('email')} />
          {errorText('email')}
        </div>

        <div className="field">
          <label htmlFor={fieldId('category')}>
            Product category <span aria-hidden="true">*</span>
          </label>
          <select required {...fieldProps('category')}>
            <option value="">Select a category</option>
            <option value={GENERAL}>General enquiry</option>
            {Object.values(GROUPS).map((g) => (
              <optgroup key={g.key} label={g.name}>
                {CATEGORIES.filter((c) => c.group === g.key).map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {errorText('category')}
        </div>

        <div className="field field--full">
          <label htmlFor={fieldId('product')}>
            Product of interest <span className="field__optional">(optional)</span>
          </label>
          <input type="text" placeholder="e.g. a specific design, finish or size" {...fieldProps('product')} />
        </div>

        <div className="field field--full">
          <label htmlFor={fieldId('message')}>
            Message <span className="field__optional">(optional)</span>
          </label>
          <textarea rows={5} placeholder="Tell us about your requirement, quantity or space" {...fieldProps('message')} />
          {errorText('message')}
        </div>
      </div>

      <div className="form__footer">
        <button type="submit" className="btn btn--gold" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <LoaderCircle size={18} className="spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              <Send size={18} aria-hidden="true" /> Submit Enquiry
            </>
          )}
        </button>
        <p className="form__note">Fields marked * are required.</p>
      </div>

      <div aria-live="polite" className="form__status">
        {status === 'sent' && (
          <p className="notice notice--success">
            <Check size={18} aria-hidden="true" /> Thank you — your enquiry has been sent. Our team will get back to
            you shortly.
          </p>
        )}
        {status === 'error' && (
          <p className="notice notice--error">
            <CircleAlert size={18} aria-hidden="true" /> Sorry, your enquiry could not be sent right now. Please try
            again{phone ? ` or call us on ${phone}` : ''}.
          </p>
        )}
        {status === 'offline' && (
          <div className="notice notice--info">
            <CircleAlert size={18} aria-hidden="true" />
            <div>
              <p>
                <strong>Your details look good, but online form submission is not yet active.</strong> Your enquiry
                has <em>not</em> been sent.
              </p>
              {whatsapp || businessEmail || phone ? (
                <>
                  <p>Please send it to us directly:</p>
                  <div className="notice__actions">
                    {whatsapp && (
                      <a
                        className="btn btn--outline btn--sm"
                        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(summary)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare size={16} aria-hidden="true" /> Send via WhatsApp
                      </a>
                    )}
                    {businessEmail && (
                      <a
                        className="btn btn--outline btn--sm"
                        href={`mailto:${businessEmail}?subject=${encodeURIComponent(
                          `Enquiry: ${categoryLabel(values.category)}`,
                        )}&body=${encodeURIComponent(summary)}`}
                      >
                        <Mail size={16} aria-hidden="true" /> Send via Email
                      </a>
                    )}
                    {phone && (
                      <a className="btn btn--outline btn--sm" href={`tel:${phone.replace(/[^\d+]/g, '')}`}>
                        Call {phone}
                      </a>
                    )}
                  </div>
                </>
              ) : (
                <p>Please visit or contact our showroom directly — contact details will be published here soon.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </form>
  )
}
