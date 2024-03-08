onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  setTimeout(function() {
    // Tạo và thêm div vào phần tử body
    var div = document.createElement("div");
    div.innerHTML = "Chúc em bé Mỹ Hạnh 8/3 vui vẻ!";
    div.classList.add("congratulation");
    document.body.appendChild(div);
  }, 10000); // Hiển thị dòng chữ sau 5 giây