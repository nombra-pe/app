"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#servicios", label: "Servicios" },
    { href: "#precios", label: "Precios" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed z-50 top-0 right-0 left-0">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-xl border backdrop-blur supports-[backdrop-filter]:bg-white/5 border-black/10 bg-black/5">
                    <div className="flex items-center justify-between px-4 py-3">
                        <a
                            href="#inicio"
                            className="font-medium text-black font-nunito text-lg"
                        >
                            Brandia
                        </a>

                        <nav className="hidden items-center gap-8 md:flex">
                            {menuItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium transition text-black/80 hover:text-black font-nunito"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center gap-3">
                            <Button asChild >
                                <Link
                                    href="/signin"
                                    className="text-sm font-medium transition text-black/80 hover:text-black font-nunito"
                                >
                                    Inicia ahora
                                </Link>
                            </Button>

                        </div>

                        <button
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border transition border-black/10 bg-black/0 hover:bg-black/5"
                            onClick={() => setOpen((o) => !o)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M4 5h16"></path>
                                <path d="M4 12h16"></path>
                                <path d="M4 19h16"></path>
                            </svg>
                        </button>
                    </div>

                    {open && (
                        <div
                            id="mobile-menu"
                            className="border-t px-4 py-3 md:hidden border-black/10"
                        >
                            <nav className="grid gap-2">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="rounded-lg px-3 py-2 text-sm font-medium transition text-black/80 hover:bg-black/5 hover:text-black font-nunito"
                                    >
                                        {item.label}
                                    </a>
                                ))}

                                <div className="mt-2 flex gap-2">
                                    <Link
                                        href="#contacto"
                                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-medium transition text-black/80 hover:bg-black/5 hover:text-black font-nunito"
                                        onClick={() => setOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                        </svg>
                                        Contacto
                                    </Link>

                                    <Link
                                        href="#precios"
                                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-black text-white px-3 py-2 text-sm font-medium transition hover:bg-black/90 font-nunito"
                                        onClick={() => setOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                        Ver Precios
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
