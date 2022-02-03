import { useEffect, useState } from 'react';
import './assets.css';
import Topbar from '../../components/topBar/Topbar';

function Assets() {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/s3assets")
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
      <div className='s3assetspage'>
        < Topbar/>
        <div className='content'>
        <h2><b>@aws-cdk/aws-s3-assets</b></h2>
        <h6>Deploy local files and directories to S3</h6>
        <button className='btn'>AWS CDK v1</button>
        <button className='btn1'>AWS CloudFormation</button>
        <button className='btn2'>AWS Lambda</button>
        </div>
        <div className='s3assetsstatic'>
        <h2><b>AWS CDK Assets</b></h2>
        <span className='s3assetscontent'>CDK-CONSTRUCT STABLE</span>
        <p>Assets are local files or directories which are needed by a CDK app. 
          A common example is a directory which contains the handler code for a Lambda function, 
          but assets can represent any artifact that is needed for the app's operation. </p>
        </div>
        <div className='s3assetsmap'>
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
  


export default Assets;
