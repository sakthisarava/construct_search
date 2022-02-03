import Topbar from '../../components/topBar/Topbar';
import './dev.css';
import SearchBar from '../../components/searchbar/searchBar';

function Dev() {
    return (
        <>
        <div className="devpage">
        <Topbar />
        <div className="dev">
            <h1>Simplify cloud development with constructs</h1>
            <h4>Find and use open-source Cloud Development Kit (CDK) libraries</h4>
        <div id="form">
             <SearchBar placeholder="search 800 plus construct libraries..."/>
            {/* <input className="search" placeholder="search 800 plus construct libraries" /> */}
            {/* <button className="button">Find constructs</button> */}
        </div>
        <div className="base">
        <span className="title">
        <h2 className="tag">One home for all CDKs</h2>
        <p>Find libraries for AWS Cloud Development Kit (AWS CDK), which generates AWS CloudFormation templates, 
            CDK for Terraform (CDKtf), which generates HashiCorp Terraform configuration files, 
            and CDK for Kubernetes (CDK8s), which generates Kubernetes manifests.</p>
        </span>
        <span className="title">
        <h2 className="tag">Support across languages</h2>
        <p>Define, test, and deploy cloud infrastructure using high level programming languages such as TypeScript,
           Python, Java, and .NET. Find documentation, API references and code samples to quickly build your application.</p>
        </span>
        <span className="title">
        <h2 className="tag">Provision a range of cloud resources</h2>
        <p>Find construct libraries published by the community and cloud service providers such as Datadog,
           Amazon Web Services (AWS), MongoDB, Aqua Security, and more.</p>
        </span>
        </div>
        </div>
        </div>
        </>
    )
}

export default Dev;
