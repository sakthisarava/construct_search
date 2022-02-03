import React, { useEffect, useState } from 'react';
import Topbar from '../../components/topBar/Topbar';
import './s3.css';
// import Axios from 'axios';


function S3() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/s3")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.hits.hits);
          // console.log('response 2--> ' , result.hits);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

return(
      <div className='s3page'>
        < Topbar/>
        <div className='content'>
        <h2><b>@aws-cdk/aws-s3</b></h2>
        <h6>The CDK Construct Library for AWS::S3</h6>
        <button className='btn'>AWS CDK v1</button>
        <button className='btn1'>Amazon s3</button>
        <button className='btn2'>s3</button>
        </div>
        <div className='s3static'>
        <h2><b>Amazon S3 Construct Library</b></h2>
        <span className='s3content'>CFN-RESOURcES STABLE<br></br></span>
        <span className='s3content'>CDK-CONSTRUCT STABLE</span>
        <p>Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability,
           data availability, security, and performance. 
           Customers of all sizes and industries can store and protect any amount of data for virtually any use case,
            such as data lakes, cloud-native applications, and mobile apps. </p>
        </div>
        <div className='s3map'>
          {items.map((value,index) =>{
            return(
              <div key={index}>
                <p>Name:{value._source.name}</p>
                <p>Author:{value._source.Author}</p>
                <p>Published{value._source.Published_Date}</p>
                <p>Repository:{value._source.Repository}</p>
                <p>License:{value._source.License}</p>
                <p>Registry:{value._source.Registry}</p>
              </div>
            )
          })
          }
        </div>
      </div>
    )
}

export default S3;