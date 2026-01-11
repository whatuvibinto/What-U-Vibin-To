/* ==================================================
   DIG DATA - メンバー追加・編集
   ================================================== */
const digData = [
    {
        name: "LUCY",
        role: "DJ", // ★追加: 役職 (DJ, SELECTOR, ARTIST etc)
        location: "TOKYO",
        genre: ["DJ MIX", "HIPHOP", "R&B"], // "DJ MIX" を追加
        image: "images/profile_lucy.png", 
        qr: "images/qr_lucy.png",
        serviceIcon: "images/logo_spotify.png" 
    },
    {
        name: "MIKE",
        role: "SELECTOR", // DJじゃない人はSELECTORなど
        location: "NEW YORK",
        genre: ["JAZZ", "SOUL"],
        image: "images/profile_mike.png",
        qr: "images/qr_mike.png",
       qrlink:"#",
       serviceIcon: "images/logo_applemusic.png"
    },
    {
        name: "KIE",
        role: "DJ",
        location: "BERLIN",
        genre: ["DJ MIX", "TECHNO", "HOUSE"],
        image: "images/profile_kie.png",
        qr: "images/qr_kie.png",
       qrlink:"#",
        serviceIcon: "images/logo_spotify.png"
    },
    {
        name: "SATO",
        role: "ARTIST",
        location: "OSAKA",
        genre: ["REGGAE"],
        image: "images/profile_sato.png",
        qr: "images/qr_sato.png",
       qrlink:"#",
        serviceIcon: "images/logo_soundcloud.png"
    },
    // 必要に応じて追加
];
