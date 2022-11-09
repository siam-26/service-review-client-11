import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../Hook/useTitle';
import ServicesAll from './ServicesAll';

const AllServicesMain = () => {
    const allServices = useLoaderData();
    useTitle('Services');

    return (
        <div>
            <h1 className='text-center text-4xl mt-20 pb-8'>Our All Services</h1>
            <div className='services-div grid grid-cols-3'>
                {
                    allServices.map(allservice => <ServicesAll
                        key={allservice._id}
                        allservice={allservice}
                    ></ServicesAll>)
                }
            </div>

        </div>
    );
};

export default AllServicesMain;