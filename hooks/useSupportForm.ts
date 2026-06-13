"use client";

import { useState, useCallback } from "react";

export type FormData = {
  name: string;
  email: string;
  company: string;
  project_title: string;
  description: string;
  budget: string;
  timeline: string;
};

type Message = { type: "success" | "error"; text: string } | null;

export function useSupportForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", company: "", project_title: "", description: "", budget: "", timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<Message>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const resetForm = () =>
    setFormData({ name: "", email: "", company: "", project_title: "", description: "", budget: "", timeline: "" });

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setMessage({ type: "success", text: "Your request has been sent successfully! We'll be in touch within 24 hours." });
        resetForm();
      } else {
        setMessage({ type: "error", text: "Something went wrong. Please try again." });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to send your request. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  return { formData, handleChange, handleSubmit, isSubmitting, message };
}
