import axios from "axios";

const FechImageApi = (serchQuery, page) => {
  const apyKey = "18753901-48fe4160ef12c9ad3fe1a3bef";

  return axios
    .get(
      `https://pixabay.com/api/?q=${serchQuery}&page=${page}&key=${apyKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default FechImageApi

