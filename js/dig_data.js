/* ==================================================
   DIG DATA - メンバー追加・編集
   ================================================== */
// ★修正: window.digData = [...] とすることで、HTML側で確実に読み取れます
window.digData = [
    {
        name: "LUCY",
        role: "", 
        date: "2026-01-10",
        location: "TOKYO",
        genre: ["DJ MIX", "HIPHOP", "R&B"], // DJ MIXを含める
        image: "images/lucy/lucy.png", 
        qr: "images/lucy/lucy_qr.png",
        serviceIcon: "images/SpotifyLogo.png",
        qrLink: "friends/lucy.html",
        instagram: "yng.r"
    },
    {
        name: "Hiraku Tajima",
        role: "DJ",
        date: "2026-01-11",
        location: "SOMEWHERE IN JAPAN",
        genre: ["JAZZ", "SOUL"],
        image: "images/hiraku_tajima/hiraku_tajima.png",
        qr: "images/hiraku_tajima/hiraku_tajima_qr.png",
        serviceIcon: "images/AppleMusicLogo.png",
        qrLink: "friends/hiraku_tajima.html",
        instagram: "udoneatbeat"
    }
    // ここに新しいデータを追加していく形式です
];
