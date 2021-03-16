import React from 'react';
import Comments from './Comments'
import CreateComm from './CreateComment'



const ResourceDetails = (props) => {

    const Res = [props.res];
    
    return (
        
        <div>
            {
                Res.map(resource => (
                    <div key = {resource._id} >
                        <table>
                            <tbody>
                            <tr className = "lineResource">
                                <td className = "colResource">
                                    <b>Défi  {resource.title}</b>
                                </td>
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                    {resource.label}
                                </td>
                    
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                    <b>Difficulté : </b>
                                </td>
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                    {resource.difficulty}
                                </td>
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                    <b>Type de relation :</b>
                                </td>
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                    {resource.relationType}
                                </td>
                            </tr>
                        </tbody> 
                        </table>
                        <br/><br/>
                        <img src =".../public/logo192.png" alt="ceci la" ></img>
                        <br/><br/>
                        <CreateComm />
                        <br/><br/>
                        <Comments />

                    </div>
                
                ))}
        </div>

    );

}

export default ResourceDetails