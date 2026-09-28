"use client";
import { useState } from "react";
import Reveal from "../reveals";
import styles from "./enquiry.module.scss";
import emailjs from "@emailjs/browser";

const PRODUCTS = [
  "Personalised cake topper",
  "Paint-your-own plaster kit / bulk pack",
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
  eventDate: "",
  location: "",
  message: "",
};

/**
 * @param {{ isContactForm?: boolean; productName?: string }} props
 */
export default function Enquiry({ isContactForm = false, productName }) {
  const availableProducts = productName
    ? [productName, ...PRODUCTS.filter(product => product !== productName)]
    : PRODUCTS;
  const createInitialForm = () => ({
    ...initialForm,
    product: productName ?? PRODUCTS[0],
  });
  const [form, setForm] = useState(createInitialForm);

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
          event_date: form.eventDate,
          delivery_location: form.location,
          message: [
            form.message,
            `Quantity: ${form.quantity || "Not provided"}`,
            `Event date: ${form.eventDate || "Not provided"}`,
            `Delivery town/postcode: ${form.location || "Not provided"}`,
          ].join("\n\n"),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm(createInitialForm());
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  const formContent = (
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
        {!isContactForm && (
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="product">What&apos;s it for</label>
            <select
              id="product"
              value={form.product}
              onChange={handleChange("product")}>
              {availableProducts.map(product => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>
        )}

        {!isContactForm && (
          <>
            <div className={styles.field}>
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="e.g. 1 or 30"
                value={form.quantity}
                onChange={handleChange("quantity")}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="event-date">Date needed</label>
              <input
                id="event-date"
                type="date"
                value={form.eventDate}
                onChange={handleChange("eventDate")}
              />
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="location">Delivery town or postcode</label>
              <input
                id="location"
                type="text"
                autoComplete="postal-code"
                placeholder="e.g. Dunedin 9016"
                value={form.location}
                onChange={handleChange("location")}
              />
            </div>
          </>
        )}

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="details">Tell us more</label>
          <textarea
            id="details"
            rows={4}
            placeholder="Names, age, occasion, theme, colours and anything else we should know..."
            value={form.message}
            onChange={handleChange("message")}
          />
        </div>
      </div>

      <button type="submit" disabled={loading} className={styles.submit}>
        {loading ? "Sending..." : "Submit Enquiry"}
      </button>

      {status === "success" && (
        <p className={styles.success} role="status">
          Thanks—your enquiry has been sent. We’ll be in touch to confirm the
          details, price and current turnaround time.
        </p>
      )}

      {status === "error" && (
        <p className={styles.error} role="alert">
          Please complete your name, email and message, then try again.
        </p>
      )}
    </form>
  );

  if (isContactForm) return formContent;

  return (
    <section className={styles.enquiry} id="enquiry">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.card}>
          <span className={styles.eyebrow}>Order enquiry</span>
          <h2>Let&apos;s create something.</h2>
          <p>
            Share the occasion, names, colours, quantity and date you need it.
            We&apos;ll confirm the design, price and current turnaround time
            with you.
          </p>
          {formContent}
        </Reveal>
      </div>
    </section>
  );
}
