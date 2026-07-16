import { useState } from "react";
import styles from "./ContactForm.module.css";
import Modal from "../../ui/Modal";
import { SITE } from "../../config/site";

const INITIAL = { name: "", email: "", category: SITE.contact.categories[0], message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO = `info@${SITE.domain}`;

const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Email is invalid";
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
};

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    const subject = `[${form.category}] Website enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCategory: ${form.category}\n\n${form.message}`;
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setForm(INITIAL);
    setModal({
      variant: "success",
      title: "Thanks for reaching out",
      message: `Your email client will open with your message ready to send to our team. Prefer to write directly? Email us at ${TO}.`,
    });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h2>Send Us a Message</h2>

        <label htmlFor="name">
          Full Name <span aria-hidden="true">*</span>
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>
        <input id="name" name="name" type="text" autoComplete="name"
          value={form.name} onChange={handleChange}
          className={errors.name ? styles.inputError : undefined} />

        <label htmlFor="email">
          Email Address <span aria-hidden="true">*</span>
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>
        <input id="email" name="email" type="email" autoComplete="email"
          value={form.email} onChange={handleChange}
          className={errors.email ? styles.inputError : undefined} />

        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={form.category} onChange={handleChange}>
          {SITE.contact.categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <label htmlFor="message">
          How can we help? <span aria-hidden="true">*</span>
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </label>
        <textarea id="message" name="message" rows="5"
          value={form.message} onChange={handleChange}
          className={errors.message ? styles.inputError : undefined} />

        <button type="submit">Submit</button>
      </form>

      <Modal
        open={!!modal}
        variant={modal?.variant}
        title={modal?.title}
        message={modal?.message}
        onClose={() => setModal(null)}
      />
    </>
  );
};

export default ContactForm;
