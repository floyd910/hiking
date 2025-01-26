import TransportType from "../../components/transportType/TransportType";
import { useParams } from "react-router-dom";
import "./TourDetails.css";

const TourDetails = ({ tourItem }) => {
  const { link } = useParams();
  //   const filterTours = tours.filter((tourItem, index) => {
  //     return tourItem.link === link;
  //   });

  const tour = tourItem;
  return (
    <>
      {tour ? (
        <div className="tour_page page">
          <h2 className="tour_title page_title">{tour.title}</h2>
          {/* <div className="cover">
            <img
              className="tour_cover"
              src={tour.cover}
              alt={`PinGeorgia.ge + tour.title}`}
            />
          </div> */}

          {tour.location ? (
            <div className="about_location tour_container">
              <h4 className="subtitle">{tour.location.title}</h4>
              <div className="tour_location flex">
                <img
                  className="location_img"
                  src={tour.location.img}
                  alt={`PinGeorgia.ge + tour.title}`}
                />
                <p className="text location_text">{tour.location.text}</p>
              </div>
            </div>
          ) : null}

          {tour.mainText ? <p>{tour.mainText}</p> : null}

          {tour.details ? (
            <div className="tour_details tour_container">
              <h4 className="subtitle">Tour details:</h4>
              <p className="text">{tour.details.text}</p>

              {tour.details.images ? (
                <div className="details_images flex">
                  {tour.details.images.map((image) => {
                    return (
                      <img
                        key={image}
                        alt={`PinGeorgia.ge + tour.title}`}
                        src={image}
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="flex">
            {tour.itinerary ? (
              <div className="itinerary tour_container">
                <h4 className="subtitle">Itinerary</h4>
                <div className="itinerary_plan">
                  <div className="text">
                    <ul>
                      {tour.itinerary.days.map((day, index) => {
                        return (
                          <li key={day}>
                            <b>Day {index + 1}</b>: {day[0]}
                          </li>
                        );
                      })}
                    </ul>

                    {tour.itinerary.alternative ? (
                      <p className="text alternative">
                        {tour.itinerary.alternative.text}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
            {tour.additional ? (
              <div className="additional tour_container">
                <h4 className="subtitle">Additional Details:</h4>
                {tour.additional.text ? (
                  <p className="text">{tour.text}</p>
                ) : null}
                {tour.additional.list ? (
                  <ul className="flex gap50">
                    {tour.additional.list.map((item, index) => {
                      return (
                        <div key={item}>
                          {item.title ? <h4>{item.title}</h4> : null}
                          {item.list.map((listItem) => {
                            return <li key={listItem}>{listItem}</li>;
                          })}
                        </div>
                      );
                    })}
                  </ul>
                ) : null}
                {tour.additional.map ? (
                  <div className="map">
                    <h4 className="subtitle">Map</h4>
                    <p>Map link:</p>
                    <a target="_blank" href={tour.additional.map}>
                      {tour.additional.map}
                    </a>
                  </div>
                ) : null}
              </div>
            ) : null}

            {tour.itinerary ? (
              <div className="itinerary_images flex">
                {tour.itinerary.images.map((image) => {
                  return (
                    <img
                      key={image}
                      alt={`PinGeorgia.ge + tour.title}`}
                      src={image}
                    />
                  );
                })}
              </div>
            ) : null}

            <div className="flex">
              <div className="price tour_container">
                <h4 className="subtitle">Price of the Tour</h4>
                <ul>
                  {tour.price.list.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>

                {tour.otherPrices ? (
                  <>
                    <p className="other_prices">Other prices:</p>
                    <ul>
                      {tour.price.otherPrices.list.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>
                  </>
                ) : null}

                {tour.offer ? (
                  <div className="we_offer tour_container">
                    <h4 className="subtitle">We Offer</h4>
                    <ul>
                      {tour.offer.list.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <TransportType />
        </div>
      ) : null}
    </>
  );
};

export default TourDetails;
