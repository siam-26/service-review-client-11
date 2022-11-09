import { Link } from 'react-router-dom';
import './ServicesAll.css';

const ServicesAll = ({ allservice }) => {

    const { _id, img, service_name, description, price } = allservice



    return (
        <div>

            <div>

                <div className="card w-96 bg-base-100 shadow-xl gap-8 mb-8 ml-5">

                    <figure className="px-10 pt-10">
                        <img src={img} alt="" className="w-44 h-44 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center body">
                        <h2 className="card-title name">{service_name}</h2>
                        <h3 className='price font-bold'>{price}</h3>
                        <p className='text-justify servicesAllPara font-semibold'>{description}</p>

                        <div>
                            <Link to={`/allservices/${_id}`}>
                                <button className="allServices-btn font-bold mt-8">view details</button>
                            </Link>
                        </div>
                    </div>



                </div>


            </div>

        </div>
    );
};

export default ServicesAll;