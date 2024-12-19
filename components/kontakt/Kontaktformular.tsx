'use client'

import { useForm, ValidationError } from "@formspree/react";
import { ArrowRightOutlined } from "@ant-design/icons";

import React from 'react';

export default function Kontaktforumlar() {
    const [state, handleSubmit] = useForm("mbljqkev");

    if (state.succeeded) {
        return <h3 className="italic">Vielen Dank für Ihre Nachricht!
            Wir werden uns so schnell wie möglich bei Ihnen melden.</h3>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="inputcontainer">
                <select
                    id="anrede"
                    name="anrede"
                    required
                    defaultValue=""
                >
                    <option value="" disabled>Anrede / Bitte wählen</option>
                    <option value="frau">Frau</option>
                    <option value="herr">Herr</option>
                    <option value="divers">Divers</option>
                </select>
                <ValidationError prefix="Anrede" field="anrede" errors={state.errors} />
            </div>
            <div className="inputcontainer">
                <input
                    id="vorname"
                    type="text"
                    name="vorname"
                    placeholder="Vorname"
                    required

                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="inputcontainer">
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required

                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="inputcontainer">
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required

                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="inputcontainer">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Nachricht"
                    rows={4}

                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting}>
                Absenden
                <ArrowRightOutlined />
            </button>
            <ValidationError errors={state.errors} />
        </form>
    );
}