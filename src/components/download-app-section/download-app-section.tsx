"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import qrcode from "qrcode-generator";
import { Scan } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const DownloadAppSection = () => {
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

    // App download URLs (replace with actual URLs when available)
    const appStoreUrl = "https://apps.apple.com/app/carrymart";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.carrymart";

    // Generate QR code when component mounts or URL changes
    useEffect(() => {
        const generateQRCode = () => {
            try {
                const qr = qrcode(0, 'L');
                qr.addData(appStoreUrl);
                qr.make();

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!context) return;

                const modules = qr.getModuleCount();
                const cellSize = 4;
                const size = modules * cellSize;

                canvas.width = size;
                canvas.height = size;

                for (let row = 0; row < modules; row++) {
                    for (let col = 0; col < modules; col++) {
                        context.fillStyle = qr.isDark(row, col) ? '#000B29' : '#FFFFFF';
                        context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
                    }
                }

                setQrCodeDataUrl(canvas.toDataURL());
            } catch (error) {
                console.error('Error generating QR code:', error);
            }
        };

        generateQRCode();
    }, [appStoreUrl]);

    return (
        <section id="download" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                    {/* primary-deep rather than primary: white body copy needs 4.5:1
                        and plain --primary only reaches 4.19:1. */}
                    <div className="bg-primary-deep rounded-[2rem] md:rounded-[2.5rem] px-8 sm:px-10 md:px-14 lg:px-16 py-12 md:py-16 relative overflow-hidden">
                        {/* Subtle decorative circles */}
                        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
                        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-secondary/5 pointer-events-none" />

                        {/* Copy column is capped so the QR card sits beside it as a
                            centred pair, rather than being flung to the far edge. */}
                        <div className="relative grid lg:grid-cols-[minmax(0,40rem)_auto] lg:justify-center gap-10 lg:gap-16 items-center">
                            {/* Left — Content */}
                            <div className="text-center lg:text-left">
                                <p className="text-xs font-semibold text-primary-foreground uppercase tracking-[0.15em] mb-3">
                                    Get Started
                                </p>
                                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary-foreground mb-4">
                                    Get the CarryMart app
                                </h2>
                                <p className="text-base md:text-lg text-primary-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                    Set up your shop or find your first deal in minutes.{" "}
                                    <span className="font-semibold underline decoration-white/40 underline-offset-4">
                                        Listing is free
                                    </span>{" "}
                                    and every payment is escrow-protected.
                                </p>

                                {/* Stacked on phones the badges stretch to full width, and
                                    centring each one's contents left the two store icons a
                                    few px apart. justify-start pins both to the same px-6
                                    inset; side by side from sm the badges are content-width,
                                    so it changes nothing there. */}
                                <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                                    <a
                                        href={appStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-start gap-3 bg-secondary text-white rounded-2xl h-14 px-6 hover:bg-secondary/90 hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                        </svg>
                                        <span className="text-left leading-tight">
                                            <span className="block text-[11px] opacity-70">Download on the</span>
                                            <span className="block font-bold text-base">App Store</span>
                                        </span>
                                    </a>

                                    <a
                                        href={playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-start gap-3 bg-secondary text-white rounded-2xl h-14 px-6 hover:bg-secondary/90 hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                        </svg>
                                        <span className="text-left leading-tight">
                                            <span className="block text-[11px] opacity-70">Get it on</span>
                                            <span className="block font-bold text-base">Google Play</span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Right — QR Code */}
                            <div className="hidden md:flex justify-center lg:justify-end">
                                <div className="bg-white rounded-3xl p-7 shadow-sharp-xl">
                                    <div className="flex flex-col items-center gap-5">
                                        <div className="flex items-center gap-2 text-secondary">
                                            <Scan className="size-5" />
                                            <span className="font-semibold">Scan to download</span>
                                        </div>

                                        {qrCodeDataUrl ? (
                                            <Image
                                                src={qrCodeDataUrl}
                                                alt="QR code for downloading the CarryMart app"
                                                width={160}
                                                height={160}
                                                className="w-40 h-40 rounded-lg"
                                            />
                                        ) : (
                                            <div className="w-40 h-40 bg-muted rounded-lg animate-pulse" />
                                        )}

                                        <p className="text-xs text-muted-foreground text-center max-w-[180px]">
                                            Point your camera at the code to get the app
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default DownloadAppSection;
