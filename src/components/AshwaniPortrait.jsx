import React from "react";

/**
 * AshwaniPortrait Component
 * High-fidelity portrait cutout inspired by IMG_5107.PNG:
 * - Stylish dark hair with modern fade & texture
 * - Rectangular wireframe glasses with subtle light reflections
 * - Trimmed beard & mustache with gentle warm smile
 * - Deep maroon / burgundy button-up collared shirt
 * - Soft grounded drop shadow
 */
const AshwaniPortrait = ({ className = "w-full max-w-[460px] h-auto object-contain", darkMode = false }) => {
  return (
    <div className={`relative flex items-end justify-center select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 520 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
      >
        <defs>
          {/* Skin tone gradients */}
          <linearGradient id="skinBase" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#eed0b6" />
            <stop offset="60%" stopColor="#e4bea0" />
            <stop offset="100%" stopColor="#d5aa8c" />
          </linearGradient>

          <linearGradient id="skinShadow" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#cca082" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#b38264" stopOpacity="0.8" />
          </linearGradient>

          {/* Hair tone gradient */}
          <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1e24" />
            <stop offset="40%" stopColor="#151518" />
            <stop offset="100%" stopColor="#0d0d0f" />
          </linearGradient>

          {/* Maroon Shirt Gradient */}
          <linearGradient id="maroonShirt" x1="0.3" y1="0" x2="0.7" y2="1">
            <stop offset="0%" stopColor="#7a1c36" />
            <stop offset="40%" stopColor="#621429" />
            <stop offset="85%" stopColor="#4e0e1f" />
            <stop offset="100%" stopColor="#3d0917" />
          </linearGradient>

          <linearGradient id="shirtHighlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8d2340" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8d2340" stopOpacity="0.4" />
          </linearGradient>

          {/* Glasses Frame Gradient */}
          <linearGradient id="glassesMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Glasses Lens Glass Tint */}
          <linearGradient id="lensReflect" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* ================= BACKGROUND CHEST & MAROON SHIRT ================= */}
        {/* Shoulders & Torso */}
        <path
          d="M 60 580 C 70 480 130 430 200 415 L 260 445 L 320 415 C 390 430 450 480 460 580 Z"
          fill="url(#maroonShirt)"
        />
        <path
          d="M 60 580 C 70 480 130 430 200 415 L 260 445 L 320 415 C 390 430 450 480 460 580 Z"
          fill="url(#shirtHighlight)"
        />

        {/* Shirt Placket (Center Buttons line) */}
        <path
          d="M 248 450 L 272 450 L 274 580 L 246 580 Z"
          fill="#440b1b"
        />
        {/* Buttons */}
        <circle cx="260" cy="505" r="4.5" fill="#1e1e24" stroke="#7a1c36" strokeWidth="1" />
        <circle cx="260" cy="555" r="4.5" fill="#1e1e24" stroke="#7a1c36" strokeWidth="1" />

        {/* Maroon Shirt Collars */}
        {/* Left Collar */}
        <path
          d="M 205 415 L 255 452 L 235 488 L 175 440 Z"
          fill="#561123"
          stroke="#3d0917"
          strokeWidth="1.5"
        />
        {/* Right Collar */}
        <path
          d="M 315 415 L 265 452 L 285 488 L 345 440 Z"
          fill="#561123"
          stroke="#3d0917"
          strokeWidth="1.5"
        />

        {/* Neck / Throat */}
        <path
          d="M 215 310 L 215 425 C 235 445 285 445 305 425 L 305 310 Z"
          fill="url(#skinBase)"
        />
        {/* Neck shadow under jaw */}
        <path
          d="M 215 310 C 240 375 280 375 305 310 L 305 345 C 280 380 240 380 215 345 Z"
          fill="url(#skinShadow)"
        />
        {/* Collarbone shadow */}
        <path
          d="M 245 420 Q 260 432 275 420"
          stroke="#cca082"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ================= HEAD & FACE ================= */}
        {/* Ears */}
        {/* Left Ear */}
        <path
          d="M 175 240 C 160 245 160 280 178 290 Z"
          fill="#e4bea0"
          stroke="#cca082"
          strokeWidth="1"
        />
        {/* Right Ear */}
        <path
          d="M 345 240 C 360 245 360 280 342 290 Z"
          fill="#e4bea0"
          stroke="#cca082"
          strokeWidth="1"
        />

        {/* Head Contour / Face */}
        <path
          d="M 180 200 C 180 130 340 130 340 200 C 340 280 325 350 260 355 C 195 350 180 280 180 200 Z"
          fill="url(#skinBase)"
        />

        {/* Subtle Cheek Shading & Contours */}
        <path
          d="M 185 240 Q 200 290 230 320"
          stroke="#cca082"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />
        <path
          d="M 335 240 Q 320 290 290 320"
          stroke="#cca082"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />

        {/* ================= BEARD & MUSTACHE (From IMG_5107.PNG) ================= */}
        {/* Stubble / Beard Shadow Around Jaw & Chin */}
        <path
          d="M 178 260 C 180 320 210 356 260 356 C 310 356 340 320 342 260 C 342 290 325 348 260 350 C 195 348 178 290 178 260 Z"
          fill="#1e1e24"
          opacity="0.88"
        />
        {/* Chin Beard Texture */}
        <path
          d="M 230 325 C 240 352 280 352 290 325 C 285 342 235 342 230 325 Z"
          fill="#151518"
        />
        {/* Neat Mustache */}
        <path
          d="M 228 292 C 242 286 255 292 260 296 C 265 292 278 286 292 292 C 282 304 265 304 260 299 C 255 304 238 304 228 292 Z"
          fill="#1c1c20"
        />

        {/* Lips with gentle warm smile */}
        <path
          d="M 236 308 Q 260 318 284 308"
          stroke="#bd7f74"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 244 313 Q 260 320 276 313"
          stroke="#a36357"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Nose */}
        <path
          d="M 258 230 L 255 272 Q 252 278 260 279 Q 268 278 265 272"
          stroke="#cca082"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Nostrils */}
        <ellipse cx="250" cy="275" rx="3.5" ry="2" fill="#b38264" />
        <ellipse cx="270" cy="275" rx="3.5" ry="2" fill="#b38264" />

        {/* Eyes */}
        {/* Left Eye */}
        <ellipse cx="225" cy="235" rx="14" ry="8" fill="#ffffff" />
        <circle cx="225" cy="235" r="6.5" fill="#382923" />
        <circle cx="225" cy="235" r="3.5" fill="#111113" />
        <circle cx="223" cy="233" r="1.5" fill="#ffffff" />
        <path d="M 211 230 Q 225 224 239 230" stroke="#1c1c20" strokeWidth="2" fill="none" />

        {/* Right Eye */}
        <ellipse cx="295" cy="235" rx="14" ry="8" fill="#ffffff" />
        <circle cx="295" cy="235" r="6.5" fill="#382923" />
        <circle cx="295" cy="235" r="3.5" fill="#111113" />
        <circle cx="293" cy="233" r="1.5" fill="#ffffff" />
        <path d="M 281 230 Q 295 224 309 230" stroke="#1c1c20" strokeWidth="2" fill="none" />

        {/* Eyebrows */}
        <path
          d="M 206 218 Q 225 210 244 216"
          stroke="#1e1e24"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 276 216 Q 295 210 314 218"
          stroke="#1e1e24"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* ================= GLASSES (Modern Rectangular Aviator Wireframe from IMG_5107.PNG) ================= */}
        {/* Left Lens Glass */}
        <rect
          x="200"
          y="218"
          width="50"
          height="34"
          rx="7"
          fill="url(#lensReflect)"
          stroke="url(#glassesMetal)"
          strokeWidth="2.2"
        />
        {/* Right Lens Glass */}
        <rect
          x="270"
          y="218"
          width="50"
          height="34"
          rx="7"
          fill="url(#lensReflect)"
          stroke="url(#glassesMetal)"
          strokeWidth="2.2"
        />
        {/* Double Top Bridge */}
        <line x1="248" y1="222" x2="272" y2="222" stroke="url(#glassesMetal)" strokeWidth="2" strokeLinecap="round" />
        <line x1="250" y1="228" x2="270" y2="228" stroke="url(#glassesMetal)" strokeWidth="2" strokeLinecap="round" />
        {/* Temples (Arms going to ears) */}
        <line x1="200" y1="224" x2="176" y2="242" stroke="url(#glassesMetal)" strokeWidth="2" strokeLinecap="round" />
        <line x1="320" y1="224" x2="344" y2="242" stroke="url(#glassesMetal)" strokeWidth="2" strokeLinecap="round" />

        {/* ================= STYLISH HAIR (From IMG_5107.PNG) ================= */}
        {/* Voluminous styled dark hair on top with texture */}
        <path
          d="M 174 195 C 165 140 210 65 260 60 C 310 65 355 140 346 195 C 342 165 320 145 260 145 C 200 145 178 165 174 195 Z"
          fill="url(#hairGrad)"
        />
        {/* Dynamic Spikes & Texture on Top */}
        <path
          d="M 195 125 C 205 90 230 65 260 60 C 290 65 315 90 325 125 C 315 105 295 85 260 85 C 225 85 205 105 195 125 Z"
          fill="#2d2d35"
        />
        {/* Left & Right Sideburns Taper */}
        <path d="M 175 190 L 175 250 L 182 250 L 182 200 Z" fill="#151518" />
        <path d="M 345 190 L 345 250 L 338 250 L 338 200 Z" fill="#151518" />
      </svg>
    </div>
  );
};

export default AshwaniPortrait;
