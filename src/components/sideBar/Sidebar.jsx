import './sidebar.css';
import HelpIcon from '@material-ui/icons/Help';
// import { Scrollbars } from 'react-custom-scrollbars';

function Sidebar(){
    return(
        <div className='App'>
            <h6>Filters</h6>
            {/* <Scrollbars style={{ width:"100%", height:"100%" }}> */}
            <div className='type1'>
                <h3>CDK Type<HelpIcon className='sideIcon' fontSize='small'/></h3>
                <input type="radio" id="topping" name="topping" value="Any CDK Type"/>Any CDK Type<br></br>
                <input type="radio" id="topping" name="topping" value="Any CDK" />AWS CDK<br></br>
                <input type="radio" id="topping" name="topping" value="CDK8s" />CDK8s<br></br>
                <input type="radio" id="topping" name="topping" value="CDKtf" />CDKtf<br></br>
            </div>
            <div className='type2'>
                <h3>Programming Language<HelpIcon className='sideIcon' fontSize='small' /></h3>
                <input type="checkbox" id="topping" name="topping" value=".NET" />.NET<br></br>
                <input type="checkbox" id="topping" name="topping" value="Java" />Java<br></br>
                <input type="checkbox" id="topping" name="topping" value="Python" />Python<br></br>
                <input type="checkbox" id="topping" name="topping" value="TypeScript" />TypeScript<br></br>
            </div>
            <div className='type3'>
                <h3>Publisher</h3>
                <input type="checkbox" id="topping" name="topping" value="AWS" />AWS<br></br>
                <input type="checkbox" id="topping" name="topping" value="JaHashiCorpva" />HashiCorp<br></br>
                <input type="checkbox" id="topping" name="topping" value="Datadog" />Datadog<br></br>
                <input type="checkbox" id="topping" name="topping" value="Enfo" />Enfo<br></br>
                <input type="checkbox" id="topping" name="topping" value="Community" />Community<br></br>
            </div>
            <div className='type4'>
                <h3>Keywords<HelpIcon className='sideIcon' fontSize='small' /></h3>
                <input type="checkbox" id="topping" name="topping" value="serverless" />serverless<br></br>
                <input type="checkbox" id="topping" name="topping" value="aws lambda" />aws lambda<br></br>
                <input type="checkbox" id="topping" name="topping" value="containers" />containers<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />vpc<br></br>
                <input type="checkbox" id="topping" name="topping" value="constructs" />aws solutions constructs<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />databases<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />aws cloudformation<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />cloudformation<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />security<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />websites<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />aws management console<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />deployment<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />cfn<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />cloud services integerations<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />l1<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />cloudformation-registry<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />cfn-resources<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />extensions<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />amazon s3<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />docker<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />artificial intelligence (ai)<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />analytics<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />amazon dynamodb<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />kubernetes<br></br>
                <input type="checkbox" id="topping" name="topping" value="vpc" />monitoring<br></br>
            </div>
            {/* </Scrollbars> */}
        </div>
    )
}


export default Sidebar;