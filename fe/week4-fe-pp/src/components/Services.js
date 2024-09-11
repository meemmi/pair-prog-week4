import { services } from '../data'
import { useState } from 'react';
import Title from './Title'
import Service from './Service'

const Services = () => {
  const [servicesData, setServicesData] = useState(services);

  const handleDeleteItem = (serviceId) => {
    const updatedItems = servicesData.filter((item) => item.id !== serviceId);
    setServicesData(updatedItems);
  };

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} onDelete={handleDeleteItem} />
        })}
      </div>
    </section>
  )
}

export default Services