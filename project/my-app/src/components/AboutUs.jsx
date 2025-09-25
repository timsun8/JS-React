import React from "react";
import "../styles/AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about">
        <h1 className="title">About Us</h1>
        <p className="subtitle">Hello, my name is Timur, I am learning React</p>

        <div className="socials">
            <a
            href="https://t.me/m3t09"
            target="_blank"
            rel="noreferrer"
            className="btn"
            >
                <img 
                    src = "https://img.icons8.com/ios_filled/512/FFFFFF/telegram.png"
                    alt = "Telegram"
                />
            </a>
            <a href="mailto:t_nurlanov@kbtu.kz" className="btn">
                <img 
                    src = "https://png.klev.club/uploads/posts/2024-04/png-klev-club-qi4o-p-belie-znachki-png-12.png"
                    alt = "Email"
                />
            </a>
            <a
                href="https://github.com/timsun8"
                target="_blank"
                rel="noreferrer"
                className="btn"
            >
                <img 
                    src = "https://img.icons8.com/ios11/512/FFFFFF/github.png"
                    alt = "Email"
                />
            </a>
        </div>
    </section>
  );
}
