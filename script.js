let groupsShared = 0;
let chatsShared = 0;

document.getElementById("claimBtn").onclick = () => {
  document.getElementById("claimBtn").classList.add("hidden");
  document.getElementById("shareSection").classList.remove("hidden");
};

function fakeShare(type) {
  shareToWhatsApp();
  if (type === 'group' && groupsShared < 20) {
    groupsShared++;
    document.getElementById('groupCount').textContent = groupsShared;
  }
  if (type === 'chat' && chatsShared < 5) {
    chatsShared++;
    document.getElementById('chatCount').textContent = chatsShared;
  }

  if (groupsShared >= 20 && chatsShared >= 5) {
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('shareSection').classList.add('hidden');

    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}

function shareToWhatsApp(type) {
  const message = encodeURIComponent("Have you claimed your bonus! Check this out! https://safaricom-promo.fake.link?id=2025");
  
  // This base URL works for both chat and group shares
  const whatsappUrl = `https://wa.me/?text=${message}`;
  
  // Open in a new tab
  window.open(whatsappUrl, '_blank');
}