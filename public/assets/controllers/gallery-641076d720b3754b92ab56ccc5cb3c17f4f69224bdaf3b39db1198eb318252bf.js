const root = document.querySelector("#root");
const loader = document.querySelector("#loader");

if (root) {
  const FLICKR_API_KEY = "f71a0d235c15d5af6b9034530a160c9b";

  let page = 1;

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };

  const fetchPhotos = async (page) => {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=bikerace%2C+BoulderBikeTour&safe_search=1&content_type=1&media=photos&geo_context=2&per_page=12&page=${page}&format=json&nojsoncallback=1`
    );
    return await res.json();
  };

  const handleIntersect = async (entries, observer) => {
    if (entries[0].isIntersecting) {
      const { photos } = await fetchPhotos(page);
      page++;

      photos.photo.map((u) => {
        root.innerHTML += `<img src="https://farm${u.farm}.staticflickr.com/${u.server}/${u.id}_${u.secret}.jpg"/>`;
      });
    }
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(loader);
};
