const digData = [
    {
        name: "LUCY",
        role: "", 
        date: "2026-01-10",
        location: "TOKYO",
        genre: ["HIPHOP","R&B","DUB"], 
        image: "images/profile_lucy.png", 
        qr: "images/qr_lucy.png",
        serviceIcon: "images/logo_spotify.png",
        // ★必須: QRコードをクリックした時の飛び先URL
        qrLink: "https://open.spotify.com/playlist/xxxxxx" 
    },
    {
        name: "Hiraku Tajima",
        role: "DJ",
        date: "2026-01-11",
        location: "Somewhere in Japan",
        genre: ["JAZZ", "SOUL"],
        image: "images/profile_mike.png",
        qr: "images/qr_mike.png",
        serviceIcon: "images/logo_applemusic.png",
        qrLink: "https://music.apple.com/jp/playlist/xxxxxx" // ★追加
    },
    // ... 他のメンバーも同様に qrLink を設定
];
