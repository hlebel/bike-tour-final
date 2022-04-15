const form = document.querySelector("#slogan-form");
const result = document.querySelector("#result");
if (form) {
  console.log({ form });
  form.addEventListener("submit", async (e) => {
    console.log({ e });
    e.preventDefault();

    const formData = new FormData(form);

    let data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
      // data = {...data, [key]: value}
    }

    const errors = {};
    if (!data.first_name) errors.first_name = "Must enter your first name";
    if (!data.last_name) errors.last_name = "Must enter your last name";
    if (!data.email) errors.email = "Must enter your email";
    if (!data.suggestion) errors.suggestion = "Must enter a slogan";

    if (Object.keys(errors).length > 0) {
      for (const error of Object.keys(errors)) {
        const input = document.querySelector(`#${error}`);
        input.classList.add("is-invalid");
        input.nextElementSibling.innerText = errors[error];
      }
    } else {
      let res = await fetch(`/api/slogans`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          "Content-Type": "application/json",
        },
      });

      res = await res.json();

      if (res.status === "ok") {
        result.innerHTML = `<div class="alert alert-success">${res.message}</div>`;
      } else {
        result.innerHTML = `<div class="alert alert-danger">Oops! something went wrong.</div>`;
      }

      form.reset();

      console.log({ res });
    }
  });
}

const root = document.querySelector("#root");
const loader = document.querySelector("#loader");

const FLICKR_API_KEY = "f71a0d235c15d5af6b9034530a160c9b";

let page = 1;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
};

const fetchPhotos = async (page) => {
  const res = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=bikerace%2C+BoulderBikeTour&safe_search=1&content_type=1&media=photos&geo_context=2&per_page=10&page=${page}&format=json&nojsoncallback=1`
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

/* const mapElm = document.getElementById("map");
if (mapElm) {
  // Initialize and add the map
  async function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(mapElm, {
      zoom: 12,
      center: uluru,
    });

    let riders = await fetch(`/api/riders`);
    riders = await riders.json();

    const [centerLat, centerLng] = riders[0].location.split(", ");
    map.setCenter({ lat: +centerLat, lng: +centerLng });

    for (const r of riders) {
      const [lat, lng] = r.location.split(", ");
      const marker = new google.maps.Marker({
        position: { lat: +lat, lng: +lng },
        map: map,
      });
    }

    // The marker, positioned at Uluru
  }
  if (mapElm) {
    initMap();
  }
} */
