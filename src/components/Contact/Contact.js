"use client";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        // Using Formspree - replace YOUR_FORM_ID with actual form ID
        // Get one free at https://formspree.io
        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const socials = {
        github: "https://github.com/abushaidislam",
        twitter: "https://twitter.com/abushaidislam",
        linkedin: "https://www.linkedin.com/in/abushaidislam/",
        instagram: "https://www.instagram.com/abushaidislam",
    };

    return (
        <Container fluid className="contact-section">
            <Particle />
            <Container className="contact-container">
                <Row className="contact-row">
                    <Col lg={5} className="contact-info-col">
                        <div className="contact-info-card">
                            <div className="contact-badge">
                                <span className="contact-badge-text">GET IN TOUCH</span>
                            </div>

                            <h1 className="contact-title">
                                Let&apos;s <span className="purple">Connect</span>
                            </h1>

                            <p className="contact-subtitle">
                                I&apos;m always open to discussing new projects, creative ideas,
                                or opportunities to be part of your vision.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail-item">
                                    <HiLocationMarker className="contact-detail-icon" />
                                    <span>Bangladesh</span>
                                </div>
                                <a
                                    href="mailto:contact@abusyed.com"
                                    className="contact-detail-item"
                                >
                                    <AiOutlineMail className="contact-detail-icon" />
                                    <span>contact@abusyed.com</span>
                                </a>
                            </div>

                            <div className="contact-socials">
                                <a
                                    href={socials.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-social-btn"
                                    aria-label="GitHub"
                                >
                                    <AiFillGithub />
                                </a>
                                <a
                                    href={socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-social-btn"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href={socials.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-social-btn"
                                    aria-label="Twitter"
                                >
                                    <AiOutlineTwitter />
                                </a>
                                <a
                                    href={socials.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-social-btn"
                                    aria-label="Instagram"
                                >
                                    <AiFillInstagram />
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7} className="contact-form-col">
                        <div className="contact-form-card">
                            <h2 className="contact-form-title">Send a Message</h2>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="contact-form-row">
                                    <div className="contact-form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <label htmlFor="email">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                        required
                                    />
                                </div>

                                <div className="contact-form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="contact-submit-btn"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>

                                {status === "success" && (
                                    <p className="contact-status success">
                                        ✓ Message sent successfully! I&apos;ll get back to you soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="contact-status error">
                                        ✗ Something went wrong. Please try again or email directly.
                                    </p>
                                )}
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
