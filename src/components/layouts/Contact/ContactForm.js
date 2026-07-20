import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./ContactForm.module.css";
import Modal from "../../ui/Modal";
import { SITE } from "../../config/site";

const INITIAL = {
  name: "",
  email: "",
  category: SITE.contact.categories[0],
  message: "",
  // Honeypot: stays empty for real users. See styles.honeypot.
  website: "",
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO = `info@${SITE.domain}`;

const validate = (data, recaptcha) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!EMAIL_RE.test(data.email)) errors.email = "Email is invalid";
  if (!data.message.trim()) errors.message = "Message is required";
  if (!recaptcha) errors.reCaptcha = "Please verify you are not a robot.";
  return errors;
};

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(null);
  const recaptchaRef = useRef(null);

  // reCAPTCHA tokens are single-use, so the widget has to be reset after every
  // attempt or the next submit is rejected server-side.
  const resetRecaptcha = () => {
    recaptchaRef.current?.reset();
    setRecaptchaValue("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form, recaptchaValue);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "synergy",
          "g-recaptcha-response": recaptchaValue,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setForm(INITIAL);
      resetRecaptcha();
      setModal({
        variant: "success",
        title: "Thanks for reaching out",
        message: "Your message is on its way. Our team will get back to you shortly.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      resetRecaptcha();
      setModal({
        variant: "error",
        title: "Submission Failed",
        message: `We couldn't send your message right now. Please try again, or email us directly at ${TO}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
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

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website"
            value={form.website} onChange={handleChange}
            tabIndex={-1} autoComplete="off" />
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={setRecaptchaValue}
        />
        {errors.reCaptcha && (
          <p role="alert" className={styles.error}>{errors.reCaptcha}</p>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
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
