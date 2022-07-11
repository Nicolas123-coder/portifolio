import React from 'react'
import jsIcon from '../icons/js.svg'
import nodeIcon from '../icons/nodejs.svg'
import htmlIcon from '../icons/html.svg'
import cssIcon from '../icons/css.svg'
import pythonIcon from '../icons/python.svg'
import awsIcon from '../icons/aws.svg'
import mongoIcon from '../icons/mongodb.svg'
import gqlIcon from '../icons/graphql.svg'
import reactIcon from '../icons/react.svg'

const Skills = () => {
  return (
      <div className='skills'>
          <h1 className='py-5'>skills</h1>
          <div className='container'>
            <div className='row'>
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={jsIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={nodeIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={htmlIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={cssIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={pythonIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={awsIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={mongoIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={gqlIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            <div className='col'>
                        <div className='box'>
                        <div className='square'>
                            <div className="photo-wrap mb-5">
                                <img className="icon-img" src={reactIcon} alt="JS Icon"/>
                            </div>                           
                        </div>                            
                        </div>
            </div>
            {/* - */}
            </div>
          </div>
      </div>
  )
}

export default Skills
