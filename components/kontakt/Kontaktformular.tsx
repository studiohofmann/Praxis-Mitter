'use client'

import { useForm, ValidationError } from "@formspree/react";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function Kontaktforumlar() {
    const [state, handleSubmit] = useForm("mbljqkev");

    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="inputcontainer">
                <select
                    id="anrede"
                    name="anrede"
                    required
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
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"

                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="inputcontainer">
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"

                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="inputcontainer">
                <input
                    id="vorname"
                    type="text"
                    name="vorname"
                    placeholder="Vorname"

                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="inputcontainer">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Nachricht"

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