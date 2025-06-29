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
  const baseMessage = "2025 Safaricom is here. Have you just claimed your bonus from Safaricom?";
  const bonusUrl = "https://safaricom-promo.fake.link?id=2025";
  const fullMessage = `${baseMessage} Check this out! ${bonusUrl}`;

  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}
