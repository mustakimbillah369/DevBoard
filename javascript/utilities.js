function bgRandomColor() {
  const digits = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * 16);
    color += digits[randomColor];
  }
  return color;
}


