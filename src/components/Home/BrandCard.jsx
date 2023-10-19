import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  console.log(brand);
  return (
    <div className="card  bg-base-100 shadow-xl image-full">
      <figure>
        <img src={brand.image} alt={brand.brand} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{brand.brand}</button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
BrandCard.propTypes = {
  brand: PropTypes.obj,
};
