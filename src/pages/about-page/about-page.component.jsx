import React, { useState } from "react";
import './about-page.styles.scss';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="about-page-summary">
        {isReadMore ? text.slice(0, 600) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

const AboutPage =() => {
    return(
        <div className='about-container' id="about">
           <div className="about-page-div-one">
                <h2 className="about-page-title">About Us</h2>
                <p className="about-page-content"><ReadMore>Sed ut perspiciatis, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui do Lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</ReadMore></p>
            </div>
            <div className="about-page-div-two">
                <div className="about-founder-container1">
                    <div className="about-founder-1"><img className="about-founder-img1" src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80' /></div>
                    <div className="about-founder-text1">
                        <h4 className="about-founder-text1-title">Name</h4>
                        <h5 className="about-founder-text1-subtitle">Founder</h5>
                    </div>
                </div>
                <div className="about-founder-container2">
                    <div className="about-founder-text2">
                        <h4 className="about-founder-text2-title">Name</h4>
                        <h5 className="about-founder-text2-subtitle">Founder</h5>
                    </div>
                    <div className="about-founder-2"><img className="about-founder-img2" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' /></div>
                </div>
                <div className="about-founder-container3">
                    <div className="about-founder-3"><img className="about-founder-img3" src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' /></div>
                    <div className="about-founder-text3">
                        <h4 className="about-founder-text3-title">Name</h4>
                        <h5 className="about-founder-text3-subtitle">Founder</h5>
                    </div>
                </div>
            </div> 
        </div>
    );
    }
    export default AboutPage;