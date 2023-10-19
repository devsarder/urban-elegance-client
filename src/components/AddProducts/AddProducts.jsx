const AddProducts = () => {
  return (
    <div>
      <div className="text-center text-5xl font-semibold my-6">
        <h2>Add Your Product</h2>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Select your Product!</h1>
          </div>
          <div className="border-4  card flex-shrink-0 w-full max-w-min shadow-2xl bg-base-100">
            <form className="card-body w-full ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">imageURL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  name="imageURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <div className="join">
                  <div>
                    <div>
                      <input
                        className="input input-bordered join-item"
                        placeholder="Select your brand"
                      />
                    </div>
                  </div>
                  <select className="select select-bordered join-item">
                    <option disabled selected>
                      Brand
                    </option>
                    <option>Zara</option>
                    <option>Alcot</option>
                    <option>conbipel</option>
                    <option>gucci</option>
                    <option>luis vuitton</option>
                    <option>loveable</option>
                  </select>
                  <div className="indicator">
                   
                    <button className="btn join-item">Search</button>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-amber-600 text-black">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
