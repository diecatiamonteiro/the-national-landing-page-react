const albumVideos = {
  Rome: "mmK1fVm4QrE",
  "Laugh Track": "yl-Jy383W9Q", // Laugh Track
  "First Two Pages of Frankenstein": "zdU0qwZKLfU", // Tropic Morning News
  "Juicy Sonic Magic (Live in Berkeley September 24-25 2018)": "CbXnnn8z1tE", // Rylan
  "I Am Easy to Find": "lBcVrb-snPk", // You Had Your Soul with You
  "Boxer (Live in Brussels)": "XWTmxDIBHYs", // Fake Empire Live
  "Sleep Well Beast": "2O6duDDkhis", // The System Only Dreams in Total Darkness
  "Trouble Will Find Me": "A-Tod1_tZdU", // I Need my Girl
  "High Violet (Expanded Edition)": "2t3J7PedRTE", // Wake Up Your Saints
  "High Violet": "WgIp1Y2akRA", // Bloodbuzz Ohio
  Boxer: "Q0eEbxpj0dc", // Start a War
  Alligator: "0PY4VBirn08", // Mr November
  "Sad Songs for Dirty Lovers (2021 Remaster)": "4y3O8jvZwLM", // Cardinal Song
  "Sad Songs for Dirty Lovers": "InkzTJgntW4", // Slipping Husband
  "The National": "suEm2nzKVBA", // American Mary
  "The National (2021 Remaster)": "tITXa390ePE", // Son (Remaster)
};

// For future additions, copy the link from Share and extract only the video id
// https://youtu.be/mmK1fVm4QrE?feature=shared => the video id is mmK1fVm4QrE

export const getAlbumVideos = (albumName) => {
  const videos = albumVideos[albumName];
  return videos ? [{ id: videos }] : [];
};
