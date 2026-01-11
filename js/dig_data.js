const digData = [
    {
        name: "LUCY",
        role: "DJ", 
        date: "2023-12-01",
        location: "TOKYO",
        genre: ["DJ MIX", "HIPHOP", "R&B"], 
        image: "images/profile_lucy.png", 
        qr: "images/qr_lucy.png",
        serviceIcon: "images/logo_spotify.png",
        // ★必須: QRコードをクリックした時の飛び先URL
        qrLink: "https://open.spotify.com/playlist/xxxxxx" 
    },
    {
        name: "MIKE",
        role: "SELECTOR",
        date: "2023-11-20",
        location: "NEW YORK",
        genre: ["JAZZ", "SOUL"],
        image: "images/profile_mike.png",
        qr: "images/qr_mike.png",
        serviceIcon: "images/logo_applemusic.png",
        qrLink: "https://music.apple.com/jp/playlist/xxxxxx" // ★追加
    },
    // ... 他のメンバーも同様に qrLink を設定
];
