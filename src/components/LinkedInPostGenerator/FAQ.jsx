import React from "react"
import "./FAQ.css"
import { faqData } from "../../data/data"
function FAQ() {
    return (
        <section className="section" id="about">
            <h2 className="section__title">Frequently Asked Questions</h2>
            <span className="section__subtitle">
                Answers to common questions about the Viral LinkedIn Post Generator
            </span>

            <div className="faq__container container grid">
                {faqData.map((item, index) => (
                    <div className="faq__item" key={index}>
                        <details>
                            <summary className="faq__question">{item.question}</summary>
                            <p className="faq__answer">{item.answer}</p>
                        </details>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ
