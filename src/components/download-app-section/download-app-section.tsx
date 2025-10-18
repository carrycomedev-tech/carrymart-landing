"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";
import qrcode from "qrcode-generator";

const DownloadAppSection = () => {
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // App download URLs (replace with actual URLs when available)
    const appStoreUrl = "https://apps.apple.com/app/carrycome";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.carrycome";

    // Generate QR code when component mounts or URL changes
    useEffect(() => {
        const generateQRCode = () => {
            try {
                const qr = qrcode(0, 'L');
                qr.addData(appStoreUrl);
                qr.make();

                // Create canvas and draw QR code
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!context) return;

                const modules = qr.getModuleCount();
                const cellSize = 4; // Size of each QR code cell
                const size = modules * cellSize;

                canvas.width = size;
                canvas.height = size;

                // Draw QR code
                for (let row = 0; row < modules; row++) {
                    for (let col = 0; col < modules; col++) {
                        context.fillStyle = qr.isDark(row, col) ? '#080231' : '#FFFFFF';
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
        <section className="w-full bg-[#080231] py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="font-urbanist text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Download Our <span className="text-[#FFCC00]">App</span>
                    </h2>
                    <p className="font-outfit text-lg text-white/80 max-w-2xl mx-auto">
                        Get the CarryCome app and start earning or ordering right from your phone.
                        Available on both iOS and Android platforms.
                    </p>
                </div>

                {/* Download Options */}
                <div className="space-y-8">
                    {/* QR Code Display */}
                    <div className="flex justify-center">
                        <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs">
                            <div className="flex flex-col items-center space-y-4">
                                {qrCodeDataUrl ? (
                                    <div className="bg-white p-2 rounded-lg border">
                                        <img
                                            src={qrCodeDataUrl}
                                            alt="QR Code for downloading CarryCome app"
                                            className="w-32 h-32"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <span className="text-[#080231]">Loading...</span>
                                    </div>
                                )}
                                <div className="text-center">
                                    <p className="font-outfit text-sm text-[#080231] font-semibold mb-1">
                                        Scan to Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* App Store Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-[#080231] hover:bg-white/90 rounded-xl px-8 py-6 font-outfit font-semibold text-base"
                        >
                            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0"
                                    y="0"
                                    viewBox="0 0 496 496"
                                    xmlSpace="preserve"
                                    className="mr-2 h-5 w-5"
                                >
                                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="248" y1="496" x2="248" y2="0">
                                        <stop offset="0" stopColor="#0030c4" />
                                        <stop offset="1" stopColor="#11c5fc" />
                                    </linearGradient>
                                    <circle cx="248" cy="248" r="248" fill="url(#a)" />
                                    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="248" y1="476" x2="248" y2="20">
                                        <stop offset="0" stopColor="#1665f0" />
                                        <stop offset="1" stopColor="#13c6fc" />
                                    </linearGradient>
                                    <circle cx="248" cy="248" r="228" fill="url(#b)" />
                                    <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="248.5" y1="84.477" x2="248.5" y2="523.588">
                                        <stop offset="0" stopColor="#eee" />
                                        <stop offset="1" stopColor="#d0d0cd" />
                                    </linearGradient>
                                    <path d="M247.9 110.4l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5s13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H105.8c-11.3 0-20.4-9.1-20.4-20.4s9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5s-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4s-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104z" fill="url(#c)" />
                                </svg>
                                Download for iOS
                            </a>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            className="bg-[#FFCC00] text-[#080231] hover:bg-[#FFCC00]/90 rounded-xl px-8 py-6 font-outfit font-semibold text-base"
                        >
                            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                                <svg
                                    viewBox="0 0 28.99 31.99"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-5 w-5"
                                >
                                    <g data-name="Capa 2">
                                        <g data-name="Capa 1">
                                            <path d="M13.54 15.28.12 29.34a3.66 3.66 0 0 0 5.33 2.16l15.1-8.6Z" style={{ fill: "#ea4335" }} />
                                            <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.54 3.54 0 0 0 1.5-4.79 3.62 3.62 0 0 0-1.5-1.5z" style={{ fill: "#fbbc04" }} />
                                            <path d="M.12 2.66a3.57 3.57 0 0 0-.12.92v24.84a3.57 3.57 0 0 0 .12.92L14 15.64Z" style={{ fill: "#4285f4" }} />
                                            <path d="m13.64 16 6.94-6.85L5.5.51A3.73 3.73 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" style={{ fill: "#34a853" }} />
                                        </g>
                                    </g>
                                </svg>
                                Download for Android
                            </a>
                        </Button>
                    </div>

                    {/* Alternative Text */}
                    <div className="mt-8">
                        <p className="font-outfit text-sm text-white/60">
                            Coming soon to your favorite app stores. Join the campus delivery revolution today!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadAppSection;