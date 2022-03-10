const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "029e60ac9c3b08672512347806424377",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;