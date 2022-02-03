import { useEffect, useState } from 'react';
import './notification.css';
import Topbar from '../../components/topBar/Topbar';

function Notification() {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/s3notification")
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
      <div className='s3notificationpage'>
        < Topbar/>
        <div className='content'>
        <h2><b>@aws-cdk/aws-s3-notification</b></h2>
        <h6>Bucket Notifications API for AWS S3</h6>
        <button className='btn'>AWS CDK v1</button>
        <button className='btn1'>s3</button>
        <button className='btn2'>notification</button>
        </div>
        <div className='s3notificationstatic'>
        <h2><b>S3 Bucket Notifications Destinations</b></h2>
        <span className='s3notificationcontent'>CDK-CONSTRUCT STABLE</span>
        <p>You can use the Amazon S3 Event Notifications feature to receive notifications when 
          certain events happen in your S3 bucket. To enable notifications, add a notification configuration 
          that identifies the events that you want Amazon S3 to publish. Make sure that it also identifies 
          the destinations where you want Amazon S3 to send the notifications. </p>
        </div>
        <div className='s3notificationmap'>
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
  


export default Notification;