// img 태그를 모두 배열로 가져옴
const images = Array.from(document.querySelectorAll("img"));

images.forEach((img) => {
  img.addEventListener("click", async () => {
    // 이미지 크기를 키움
    img.style.transition = "all 0.3s ease"; // 부드러운 애니메이션을 위한 트랜지션 설정
    img.style.height = "105px";
    img.style.width = "105px";

    // 크롬 스토리지에 이미지 src 값을 저장
    await chrome.storage.local.set({ image: img.src });

    // 일정 시간 후에 다시 원래 크기로 복구
    setTimeout(() => {
      img.style.borderRadius = "0"; // 원래 스타일로 복구
      img.style.height = "100px"; // 원래 크기 예시 (원래 크기에 맞게 조정)
      img.style.width = "100px"; // 원래 크기 예시 (원래 크기에 맞게 조정)
    }, 1000); // 1초 후에 원래 크기로 복구
  });
});
