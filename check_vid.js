const http = require('https');
http.get('https://res.cloudinary.com/dagx74k4y/video/upload/WhatsApp_Video_2026-05-23_at_10.31.52_AM_i2fxbh.mp4', (res) => {
  console.log(res.statusCode);
});
