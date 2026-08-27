"use client";
import { useState } from "react";
import Reveal from "../reveals";
import styles from "./enquiry.module.scss";
import emailjs from "@emailjs/browser";

const PRODUCTS = [
  "Personalised gift",
  "Party bags / favours",
  "Gift box / hamper",
  "Something else",
];

const initialForm = {
  name: "",
  email: "",
  product: PRODUCTS[0],
  quantity: "",
  message: "",
};

export default function Enquiry() {
  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = field => e => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };
  const validate = () => {
    return form.name && form.email && form.product && form.message;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          product: form.product,
          quantity: form.quantity,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className={styles.enquiry} id="enquiry">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.card}>
          <span className={styles.eyebrow}>Order enquiry</span>
          <h2>Let&apos;s create something.</h2>
          <p>
            Tell us about your gift idea and we&apos;ll come back with a
            personalised quote tailored to your requirements.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@email.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="occasion">What&apos;s it for</label>
                <select
                  id="product"
                  value={form.product}
                  onChange={handleChange("product")}>
                  {PRODUCTS.map(product => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="details">Tell us more</label>
                <textarea
                  id="details"
                  rows={4}
                  placeholder="Occasion, colours, names, quantities, timeframe..."
                  value={form.message}
                  onChange={handleChange("message")}
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className={styles.submit}>
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            {status === "success" && (
              <p className={styles.success}>Message sent successfully ✔</p>
            )}

            {status === "error" && (
              <p className={styles.error}>
                Please fill required fields or try again ❌
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
