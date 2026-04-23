import { useState, useCallback, useEffect } from 'react'
import './PasswordGenerator.css'

const UPPER  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWER  = 'abcdefghijklmnopqrstuvwxyz'
const NUMS   = '0123456789'
const SYMS   = '!@#$%^&*()_+-=[]{}|;:,.<>?'
const AMBIG  = /[0O1lI]/g

function buildCharset(opts) {
  let charset = ''
  if (opts.upper)   charset += UPPER
  if (opts.lower)   charset += LOWER
  if (opts.numbers) charset += NUMS
  if (opts.symbols) charset += SYMS
  if (opts.noAmbig) charset = charset.replace(AMBIG, '')
  return charset
}

function generate(length, opts) {
  const charset = buildCharset(opts)
  if (!charset) return ''
  const arr = new Uint32Array(length)
  crypto.getRandomValues(arr)
  return Array.from(arr, n => charset[n % charset.length]).join('')
}

function strength(pw) {
  if (!pw) return { label: '—', cls: '' }
  const has = {
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    num:   /[0-9]/.test(pw),
    sym:   /[^A-Za-z0-9]/.test(pw),
  }
  const score = Object.values(has).filter(Boolean).length
  const len   = pw.length
  if (len >= 16 && score === 4) return { label: 'Strong',  cls: 'strong' }
  if (len >= 12 && score >= 3)  return { label: 'Good',    cls: 'good' }
  if (len >= 8  && score >= 2)  return { label: 'Fair',    cls: 'fair' }
  return                               { label: 'Weak',    cls: 'weak' }
}

const DEFAULT_OPTS = { upper: true, lower: true, numbers: true, symbols: false, noAmbig: false }
const BULK_COUNT   = 6

export default function PasswordGenerator() {
  const [length,    setLength]    = useState(16)
  const [opts,      setOpts]      = useState(DEFAULT_OPTS)
  const [password,  setPassword]  = useState('')
  const [bulk,      setBulk]      = useState([])
  const [copied,    setCopied]    = useState(false)
  const [bulkCopied, setBulkCopied] = useState(null)

  const hasChars = buildCharset(opts).length > 0

  const regenerate = useCallback(() => {
    if (!hasChars) { setPassword(''); setBulk([]); return }
    setPassword(generate(length, opts))
    setBulk(Array.from({ length: BULK_COUNT }, () => generate(length, opts)))
  }, [length, opts, hasChars])

  // Generate on mount and whenever settings change
  useEffect(() => { regenerate() }, [regenerate])

  const toggle = key => setOpts(prev => ({ ...prev, [key]: !prev[key] }))

  const copy = async (text, bulk = false, idx = null) => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    if (bulk) {
      setBulkCopied(idx)
      setTimeout(() => setBulkCopied(null), 1800)
    } else {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  const { label: strLabel, cls: strCls } = strength(password)

  const toggleRow = [
    { key: 'upper',   icon: 'uil-letter-english-a', label: 'Uppercase (A–Z)' },
    { key: 'lower',   icon: 'uil-letter-english-a', label: 'Lowercase (a–z)' },
    { key: 'numbers', icon: 'uil-hashtag',           label: 'Numbers (0–9)' },
    { key: 'symbols', icon: 'uil-at',                label: 'Symbols (!@#…)' },
    { key: 'noAmbig', icon: 'uil-eye-slash',         label: 'No Ambiguous (0/O, 1/l)' },
  ]

  return (
    <div className="pg-wrapper">

      {/* Password output */}
      <div className="pg-output">
        <span className="pg-password" aria-live="polite" aria-label="Generated password">
          {password || '—'}
        </span>
        <div className="pg-output-actions">
          <button className={`pg-icon-btn${copied ? ' copied' : ''}`} onClick={() => copy(password)} title="Copy password" aria-label="Copy password">
            <i className={`uil uil-${copied ? 'check' : 'copy'}`} />
          </button>
          <button className="pg-icon-btn" onClick={regenerate} title="Regenerate" aria-label="Regenerate password">
            <i className="uil uil-refresh" />
          </button>
        </div>
      </div>

      {/* Strength indicator */}
      <div className="pg-strength">
        <div className="pg-strength-label">
          <span>Password Strength</span>
          <span>{strLabel}</span>
        </div>
        <div className="pg-strength-track">
          <div className={`pg-strength-fill ${strCls}`} />
        </div>
      </div>

      {/* Controls */}
      <div className="pg-controls">

        {/* Length */}
        <div className="pg-row">
          <span className="pg-row-label">Length</span>
          <input
            type="range" min={6} max={64} value={length}
            onChange={e => setLength(Number(e.target.value))}
            className="pg-slider"
            aria-label={`Password length: ${length}`}
          />
          <span className="pg-length-value">{length}</span>
        </div>

        {/* Toggles */}
        <div className="pg-toggles">
          {toggleRow.map(({ key, icon, label }) => (
            <label key={key} className="pg-toggle">
              <span className="pg-toggle-label">
                <i className={`uil ${icon}`} />
                {label}
              </span>
              <span className="pg-switch">
                <input type="checkbox" checked={opts[key]} onChange={() => toggle(key)} aria-label={label} />
                <span className="pg-switch-track" />
              </span>
            </label>
          ))}
        </div>
      </div>

      {!hasChars && (
        <div className="pg-warning">
          <i className="uil uil-exclamation-triangle" /> Enable at least one character type.
        </div>
      )}

      {/* Generate button */}
      <button className="pg-generate-btn" onClick={regenerate} disabled={!hasChars}>
        <i className="uil uil-refresh" /> Generate New Password
      </button>

      {/* Bulk list */}
      {bulk.length > 0 && (
        <>
          <p className="pg-bulk-title">More passwords with these settings</p>
          <div className="pg-bulk-list">
            {bulk.map((pw, i) => (
              <div key={i} className="pg-bulk-item">
                <span className="pg-bulk-pw">{pw}</span>
                <button
                  className="pg-bulk-copy"
                  onClick={() => copy(pw, true, i)}
                  title="Copy"
                  aria-label={`Copy password ${i + 1}`}
                >
                  <i className={`uil uil-${bulkCopied === i ? 'check' : 'copy'}`} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
