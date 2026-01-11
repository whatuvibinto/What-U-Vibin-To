/* ==================================================
   DIG DATA - メンバー追加・編集
   ================================================== */
const digData = [
    {
        name: "LUCY",
        role: "DJ", 
        date: "2023-12-01", // ★追加: 更新日 (YYYY-MM-DD)
        location: "TOKYO",
        genre: ["DJ MIX", "HIPHOP", "R&B"], 
        image: "images/profile_lucy.png", 
        qr: "images/qr_lucy.png",
        serviceIcon: "images/logo_spotify.png" 
    },
    {
        name: "MIKE",
        role: "SELECTOR",
        date: "2023-11-20", // ★追加
        location: "NEW YORK",
        genre: ["JAZZ", "SOUL"],
        image: "images/profile_mike.png",
        qr: "images/qr_mike.png",
        serviceIcon: "images/logo_applemusic.png"
    },
    {
        name: "KIE",
        role: "DJ",
        date: "2024-01-15", // ★追加: 一番新しいので先頭に来ます
        location: "BERLIN",
        genre: ["DJ MIX", "TECHNO", "HOUSE"],
        image: "images/profile_kie.png",
        qr: "images/qr_kie.png",
        serviceIcon: "images/logo_spotify.png"
    },
    {
        name: "SATO",
        role: "ARTIST",
        date: "2023-10-05", // ★追加
        location: "OSAKA",
        genre: ["REGGAE"],
        image: "images/profile_sato.png",
        qr: "images/qr_sato.png",
        serviceIcon: "images/logo_soundcloud.png"
    },
    // 新しく追加する時も、dateを最新にすれば一番上に表示されます
];
