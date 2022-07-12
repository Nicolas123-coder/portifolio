import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'
import { faDesktop, faLaptopCode, faCloudUploadAlt, faDatabase} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
      <div id='services'  className='services'>
          <h1 className='py-5'>my services</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                        <div className='circle'><FontAwesomeIcon className='icon' icon={faLaptopCode} size='2x'/></div>                            
                        <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                        <div className='circle'><FontAwesomeIcon className='icon' icon={faFileCode} size='2x'/></div>                            
                            <h3>Back-end Development</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                        <div className='circle'><FontAwesomeIcon className='icon' icon={faCloudUploadAlt} size='2x'/></div>                            
                            <h3>Infrastructure Provisioning</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-md-3 col-sm-6'>
                        <div className='box'>
                        <div className='circle'><FontAwesomeIcon className='icon' icon={faDatabase} size='2x'/></div>                            
                        <h3>Data Management</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
  )
}

export default Services
