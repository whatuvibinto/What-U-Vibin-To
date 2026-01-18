/* ==================================================
   DIG DATA - メンバー追加・編集
   ================================================== */
window.digData = [
    {
        id: "0001", // ★必須: URLパラメータ用の一意なID
        name: "LUCY",
        role: "", 
        date: "2026-01-10",
        location: "TOKYO",
        genre: ["HIPHOP", "R&B", "DUB"],
        image: "images/lucy/lucy.png", 
        qr: "images/lucy/lucy_qr.png", // これは表示用の画像としてのQR
        serviceIcon: "images/SpotifyLogo.png",
        instagram: "yng.r",
        
        // ★追加: HTMLファイルに書いていたリダイレクト先をここに記述
        playlists: {
            morning: "https://open.spotify.com/playlist/5eZRF45oQTOTKxc6LlrdCC",
            night:   "https://open.spotify.com/playlist/0rwum0FuoiCw54BVeHdJdO",
            default: "https://open.spotify.com/playlist/0Pt3YcKUIt6n92aLIICOvF?si=-SbPSo_jT_yTu0bzULUFKw"
        }
    },
    {
        id: "0002", // ★必須: URLパラメータ用の一意なID
        name: "LUCY",
        role: "DJ", 
        date: "2026-01-10",
        location: "OSAKA",
        genre: ["HIPHOP", "R&B", "DUB"],
        image: "images/lucy/lucy.png", 
        qr: "images/lucy/lucy_qr.png", // これは表示用の画像としてのQR
        serviceIcon: "images/SpotifyLogo.png",
        instagram: "yng.r",
        
        // ★追加: HTMLファイルに書いていたリダイレクト先をここに記述
        playlists: {
            morning: "https://open.spotify.com/playlist/5eZRF45oQTOTKxc6LlrdCC",
            night:   "https://open.spotify.com/playlist/0rwum0FuoiCw54BVeHdJdO",
            default: "https://open.spotify.com/playlist/0Pt3YcKUIt6n92aLIICOvF?si=-SbPSo_jT_yTu0bzULUFKw"
        }
    },
   {
        id: "0003", // ★必須: URLパラメータ用の一意なID
        name: "LUCY",
        role: "artist", 
        date: "2026-01-10",
        location: "FUKUOKA",
        genre: ["HIPHOP", "R&B", "DUB"],
        image: "images/lucy/lucy.png", 
        qr: "images/lucy/lucy_qr.png", // これは表示用の画像としてのQR
        serviceIcon: "images/SpotifyLogo.png",
        instagram: "yng.r",
        
        // ★追加: HTMLファイルに書いていたリダイレクト先をここに記述
        playlists: {
            morning: "https://open.spotify.com/playlist/5eZRF45oQTOTKxc6LlrdCC",
            night:   "https://open.spotify.com/playlist/0rwum0FuoiCw54BVeHdJdO",
            default: "https://open.spotify.com/playlist/0Pt3YcKUIt6n92aLIICOvF?si=-SbPSo_jT_yTu0bzULUFKw"
        }
    }
];
