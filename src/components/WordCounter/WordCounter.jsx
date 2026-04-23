import { useState, useMemo, useCallback } from 'react'
import './WordCounter.css'

const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of','with',
  'by','from','is','are','was','were','be','been','being','have','has','had',
  'do','does','did','will','would','could','should','may','might','shall',
  'can','not','no','so','if','as','it','its','this','that','these','those',
  'i','you','he','she','we','they','me','him','her','us','them','my','your',
  'his','our','their','what','which','who','how','when','where','why','all',
  'more','also','just','than','then','there','here','up','out','about','into',
])

const MAX_CHARS = 50000

function analyseText(text) {
  if (!text.trim()) {
    return { words: 0, chars: 0, charsNoSpaces: 0, sentences: 0, paragraphs: 0, readMin: 0, readSec: 0, speakMin: 0, speakSec: 0, keywords: [] }
  }

  const wordList = text.trim().match(/\b\w+('\w+)?\b/g) || []
  const words = wordList.length
  const chars = text.length
  const charsNoSpaces = text.replace(/\s/g, '').length
  const sentences = (text.match(/[^.!?]*[.!?]+/g) || []).length || (text.trim() ? 1 : 0)
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim()).length || (text.trim() ? 1 : 0)

  // Reading @ 238 wpm, speaking @ 130 wpm
  const readSeconds = Math.round((words / 238) * 60)
  const speakSeconds = Math.round((words / 130) * 60)

  // Keyword density — top 10 meaningful words
  const freq = {}
  wordList.forEach(w => {
    const lower = w.toLowerCase()
    if (!STOP_WORDS.has(lower) && lower.length > 2) {
      freq[lower] = (freq[lower] || 0) + 1
    }
  })
  const keywords = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word, count]) => ({ word, count, density: words > 0 ? ((count / words) * 100).toFixed(1) : 0 }))

  return {
    words, chars, charsNoSpaces, sentences, paragraphs,
    readMin: Math.floor(readSeconds / 60), readSec: readSeconds % 60,
    speakMin: Math.floor(speakSeconds / 60), speakSec: speakSeconds % 60,
    keywords,
  }
}

function fmtTime(min, sec) {
  if (min === 0 && sec === 0) return '< 1 sec'
  if (min === 0) return `${sec}s`
  return `${min}m ${sec}s`
}

export default function WordCounter() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const stats = useMemo(() => analyseText(text), [text])

  const handleChange = useCallback(e => {
    if (e.target.value.length <= MAX_CHARS) setText(e.target.value)
  }, [])

  const handleClear = useCallback(() => setText(''), [])

  const handleCopy = useCallback(async () => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  const handlePaste = useCallback(async () => {
    try {
      const t = await navigator.clipboard.readText()
      setText(prev => (prev + t).slice(0, MAX_CHARS))
    } catch {}
  }, [])

  const remaining = MAX_CHARS - text.length
  const nearLimit = remaining < 1000

  return (
    <div className="wc-wrapper">
      {/* Action buttons */}
      <div className="wc-actions">
        <button className="wc-btn wc-btn--primary" onClick={handlePaste}>
          <i className="uil uil-clipboard-alt" /> Paste
        </button>
        <button className="wc-btn" onClick={handleCopy} disabled={!text}>
          <i className={`uil uil-${copied ? 'check' : 'copy'}`} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <button className="wc-btn wc-btn--danger" onClick={handleClear} disabled={!text}>
          <i className="uil uil-trash-alt" /> Clear
        </button>
      </div>

      {/* Layout: textarea + stats */}
      <div className="wc-layout">
        {/* Textarea */}
        <div className="wc-textarea-wrap">
          <textarea
            className="wc-textarea"
            placeholder="Start typing or paste your text here…"
            value={text}
            onChange={handleChange}
            aria-label="Text input for word counting"
          />
          <span className={`wc-char-limit${nearLimit ? ' warning' : ''}`}>
            {remaining.toLocaleString()} characters remaining
          </span>
        </div>

        {/* Stats cards */}
        <div className="wc-stats">
          <div className="wc-stat-card">
            <span className="wc-stat-value">{stats.words.toLocaleString()}</span>
            <span className="wc-stat-label">Words</span>
          </div>
          <div className="wc-stat-card">
            <span className="wc-stat-value">{stats.chars.toLocaleString()}</span>
            <span className="wc-stat-label">Characters</span>
          </div>
          <div className="wc-stat-card">
            <span className="wc-stat-value">{stats.charsNoSpaces.toLocaleString()}</span>
            <span className="wc-stat-label">Chars (no spaces)</span>
          </div>
          <div className="wc-stat-card">
            <span className="wc-stat-value">{stats.sentences.toLocaleString()}</span>
            <span className="wc-stat-label">Sentences</span>
          </div>
          <div className="wc-stat-card">
            <span className="wc-stat-value">{stats.paragraphs.toLocaleString()}</span>
            <span className="wc-stat-label">Paragraphs</span>
          </div>
          <div className="wc-stat-card">
            <span className="wc-stat-value">{stats.words > 0 ? (stats.chars / stats.words).toFixed(1) : '0'}</span>
            <span className="wc-stat-label">Avg word length</span>
          </div>

          {/* Reading + Speaking time — full width */}
          <div className="wc-stat-card wc-stat-card--wide">
            <div className="wc-stat-item">
              <span className="wc-stat-value">{fmtTime(stats.readMin, stats.readSec)}</span>
              <span className="wc-stat-label">Read time</span>
            </div>
            <div className="wc-stat-item">
              <span className="wc-stat-value">{fmtTime(stats.speakMin, stats.speakSec)}</span>
              <span className="wc-stat-label">Speak time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Keyword density */}
      <div className="wc-keywords">
        <p className="wc-keywords__title">Top Keywords</p>
        {stats.keywords.length === 0 ? (
          <div className="wc-empty">
            <i className="uil uil-file-alt" />
            <p>Type or paste text above to see keyword density</p>
          </div>
        ) : (
          <table className="wc-kw-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Keyword</th>
                <th>Count</th>
                <th>Density</th>
                <th style={{ width: '30%' }}>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {stats.keywords.map(({ word, count, density }, i) => (
                <tr key={word}>
                  <td>{i + 1}</td>
                  <td><strong>{word}</strong></td>
                  <td>{count}</td>
                  <td>{density}%</td>
                  <td>
                    <div className="wc-kw-bar-wrap">
                      <div className="wc-kw-bar" style={{ width: `${Math.min(density * 20, 100)}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
