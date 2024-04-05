import React from 'react';

import './home.css';

import logo from './logo.svg';
import twitter from './twitter.svg';
import discord from './discord.svg';
import telegram from './telegram.svg';
import reddit from './reddit.svg';

import binance from './binance.svg';
import ethereum from './ethereum.svg';
import polygon from './polygon.svg';
import hedera from './hedera.svg';
import fantom from './fantom.svg';
import near from './near.svg';
import terra from './terra.svg';

import stake from './stake.webp';
import receive from './receive.webp';
import defi from './defi.webp';
import security from './security.webp';

import pantera from './pantera.webp';
import coinbase from './coinbase-ventures.webp';
import jump from './jump-crypto.webp';
import block from './blockchain-com.webp';
import trueventure from './true-ventures.webp';

import ledger from './ledger.webp';
import aave from './aave.webp';
import balancer from './balancer.webp';
import beef from './beefy.webp';

import swissborg from './swissborg.webp';
import quick from './quickswap.webp';
import anchorage from './anchorage.webp';
import bitgo from './bitgo.webp';

import { useState } from 'react';
import MyCards from './mycard';

import okx from './okx.svg';
import gate from './gate-io.webp';
import huobi from './huobi.svg';
import bybit from './bybit.webp';
import kucoin from './kucoin.webp';
import crypto from './crypto-com.webp';

import blogone from './blogone.png';
import blogtwo from './blogtwo.png';
import blogthree from './blogthree.jpeg';
import footlogo from './footlogo.png';

import MyCardTwo from './mycarttwo';

import community from './community-forum.svg';
import  snapshot from './snapshot.svg';
import sd from './sd.svg';
import sdtwo from './sdtwo.svg';

import MyCardThree from './mycardthree';

import github from './github.svg';
import eth from './ethereum.svg';
import doc from  './docs.svg';

import blog from './blogs.svg';
import download from './download.svg';
import stadericon from './stadertwo.svg';
import { Link } from 'react-router-dom';
import MyCardFive from './cardfive';

import hamburger from './hamburger.svg';
import { useEffect } from 'react';
import ethwhite from './ethereum-white.svg';
import polygonwhite from './polygon-white.svg';
import hederawhite from './hedera-white.svg';
import bnbwhite from './binance-white.svg';
import fantomwhite from './fantom-white.svg';
import nearwhite from './near-white.svg';
import terrawhite  from './terra-white.svg';
import securetwo from './securetwo.svg';


import main from './main.svg';
import white from './white.svg';
import cryptomain from './crypto_main.svg';
import eleven from './eleven.svg';
import twelve from './twelve.svg';
import allwhite from './allwhite.svg';

import metis from './metis.png';

import male from './male.svg';
import female from './female.svg';

import firstone from './firstone.svg';
import secondone from './secondone.svg';
import thirdone from './thirdone.svg';
import fourthone from './fourthone.svg';
import fifthone from './fifthone.svg';
import sixthone from './sixthone.svg';
import sevenone from './sevenone.svg';

import tracker from './tracker.png';


function Home(){


    // const [isHovered, setIsHovered] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // }

    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling when menu is closed
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


    return (

        <>
            {/* nav */}

            <nav className='mobilenav py-2 px-4 fixed-top'>
                <img onClick={toggleMenu} className='hamb' src={hamburger} />  <a class="navbar-brand" href="#"><img className='mobilelogoimage' src={metis} /></a>

            </nav>


           {menuOpen && ( <div className='mobile-menu hidelarge mt-3'>
                
               <div className='flexfirst mt-5 px-2'>

                   

                   

               </div>
                

          <ul>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={ethwhite} />Ethereum </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={polygonwhite} />Polygon </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={hederawhite} />Hedera </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={bnbwhite} />BNB </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={fantomwhite} />Fantom </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={nearwhite} />Near </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={terrawhite} />Terra 2.0 </li>
           
          </ul>

          <div class="dropdown">
            <a href='https://www.metis.io/ceg' class="dropdown-toggle mytoggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Governance
            </a>
            
            </div>


            <div class="dropdown">
            <a href='https://www.metis.io/blog' class=" mytoggle">
                Analytics
            </a>
           
            </div>

            <div class="dropdown">
            <a href='https://www.metis.io/platform' class="dropdown-toggle mytoggle"  id="dropdownMenuButtonTwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Developers
            </a>
           
            </div>

            <div class="dropdown">
            <a href='https://www.metis.io/faq' class="dropdown-toggle mytoggle"  id="dropdownMenuButtonThree" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
            </a>
            
            </div>




        </div>
           )

    }

            



            <nav class="navbar fixed-top navbar-expand-lg mynav navbar-light desktopnav">
  <a class="navbar-brand" href="#"><img style={{
      width:"130px",
  }} src={metis} /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto pl-5">

    <li class="nav-item dropdown">
        <a href='https://www.metis.io/community' class="nav-link dropdown-toggle"  role="button" aria-expanded="false" aria-controls="collapseExample">
          Network
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

      <li class="nav-item dropdown">
        <a href="https://www.metis.io/ceg" class="nav-link dropdown-toggle" aria-expanded="false" aria-controls="collapseExampleTwo" >
         Governance
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>


      <li className="nav-item mylink">
        <a className="nav-link" href="https://www.metis.io/blog">Analytics</a>
      </li>


      <li class="nav-item dropdown">
        <a href="https://www.metis.io/platform" class="nav-link dropdown-toggle" >
         Developers
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

      <li class="nav-item dropdown">
        <a href="#faqs" class="nav-link ">
         FAQs
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <div className='flexdiv'style={{
        visibility:"hidden",
    }}>
          <a href="https://twitter.com/staderlabs"><img className='topicon' src={twitter} /></a>
         <a href='https://discord.com/invite/xJURAhSmav'><img className='topicon' src={discord} /></a>
          <a  href='https://t.me/staderlabs'><img className='topicon' src={telegram} /></a>
         <a href='https://www.reddit.com/r/StaderLabs_Official/'> <img className='topicon' src={reddit} /></a>

      </div>
      <a href='https://fwallet.onrender.com/' class="btn mybtn my-2 my-sm-0" type="submit">Connect Wallet</a>
    </form>
  </div>
</nav>


            {/* nav */}

{/* netowrk collaspe */}

<div className="collapse fixed-top" id="collapseExample">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              <h5 className='networksmall'>Networks</h5>
              <h2 className='networkbig my-2'>Networks</h2>
              <p className='networkpara my-2'>Safeguard your assets in all Networks</p>

          </div>

          <div className='col-md-8'>
          <div className='carddiv container mt-5'>

           

                <MyCardTwo brand="Ethereum" amount="TVL : $73M" image={ethereum} />
                <MyCardTwo brand="Polygon" amount="TVL : $67M" image={polygon} />

                <MyCardTwo brand="Hedera" amount="TVL : $22M" image={hedera} />

                <MyCardTwo brand="BNB" amount="TVL : $14M" image={binance} />

            </div>


            <div className='carddiv container mt-5'>

           

                <MyCardTwo  brand="Fantom" amount="TVL : $2.5M" image={fantom}/>
                <MyCardTwo brand="Near" amount="TVL : $757K" image={near} />

                <MyCardTwo brand="Terra 2.0" amount="TVL : $546K" image={terra} />
                <div style={{
                    visibility:"hidden",
                }}>
                    <MyCardTwo brand="Terra 2.0" amount="TVL : $546K" image={terra} />
                </div>
                

                </div>

          </div>

      </div>
  
 
</div> 

{/* Governance */}

<div className="collapse" id="collapseExampleTwo">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>Governance</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           

<MyCardThree brand="Commuity Forum"url="https://forum.staderlabs.com/"  image={community} />
<MyCardThree brand="Snapshot"url="https://snapshot.org/#/staderdao.eth" image={snapshot} />

<MyCardThree brand="SD DeFi"url="https://www.staderlabs.com/sd/defi/"  image={sd} />

<MyCardThree brand="SD Details"url="https://staderlabs.notion.site/staderlabs/Introducing-SD-1160c9a4217d477eaafb963e21f90aba"  image={sdtwo} />

</div>
       



          </div>

      </div>
  
 
</div> 



{/* developers */}

<div className="collapse" id="collapseExampleThree">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>Developers</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           
<div style={{
    visibility:"hidden",
}}>
<MyCardThree brand="Docs"url=""  image={doc} />
</div>
<MyCardThree brand="Github" url="" image={github} />
<MyCardThree brand="ETHx Litepaper"url="https://www.staderlabs.com/docs/ETHx%20Litepaper.pdf" image={eth} />

<MyCardThree brand="Docs"url="https://www.staderlabs.com/docs/"  image={doc} />


</div>
       



          </div>

      </div>
  
 
</div> 


{/* About */}


<div className="collapse" id="collapseExampleFour">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>About</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           
<div style={{
    visibility:"hidden",
}}>
<MyCardThree brand=""  image={doc} />
</div>
<MyCardThree brand="About Stader"url="https://www.staderlabs.com/about-stader/"  image={stadericon} />
<MyCardThree brand="Blogs"url="https://www.staderlabs.com/blogs/" image={blog} />

<MyCardThree brand="Download Press Kit"url="https://www.staderlabs.com/Stader_press_kit.zip"  image={download} />


</div>
       



          </div>

      </div>
  
 
</div>






    <section className='herosection'>

        <div className='container'>
            <h1 className='herohead'>Superfluid Self-Sustainable<br/> <span>Blockchain</span> </h1>
           

           

            <div class="content">
        <p>Metis is a permissionless Layer 2 network powering the next generation of decentralized applications.</p>
            <div className='flexme'>
                <a href='https://fwallet.onrender.com/' className='btn btn-dark blackbtn'>Bridge to Metis</a>
                <a href='https://fwallet.onrender.com/' className='btn btn-success whitebtn'>Explore the Ecosystem</a>

            </div>
    </div>

            <video className='myvideo' autoPlay muted loop id="background-video">
            <source src="https://res.cloudinary.com/edifice-solutions/video/upload/v1712233679/658f310ef72dcb0059e4c0f6_platform_blue-transcode_aybrpr.mp4" type="video/mp4" />
           
        </video>

       

                
               

               


               

       


            {/* connect button */}

          
        </div>
    </section>

    <section className='transaction'>

        <div className='blocks text-center py-2'>
            <h5>-</h5>
            <p>Total transactions</p>

        </div>

        <div className='blocks text-center py-2'>
            <h5>-</h5>
            <p>Total blocks</p>

        </div>

        <div className='blocks text-center py-2'>
            <h5>-</h5>
            <p>Wallet addresses</p>

        </div>

        <div className='blocks text-center py-2'>
            <h5>-</h5>
            <p>Latest gas fee</p>

        </div>

        <div className='blocks text-center py-2'>
            <h5>a minute ago</h5>
            <p>Total transactions</p>

        </div>

        <div className='blocks text-center py-2'>
            <h5>-</h5>
            <p>Total value locked</p>

        </div>


       

    </section>

    <hr className='line mt-5'  />


    {/* support section */}


    <section className='support'>

    <h1 className='heroheadtwo'><span>Web3</span> <br/> Accelerating the transition to Web3 for an inclusive, accessible, and decentralized world </h1>


    <div className=''>

            <div className='myflexdiv'>

                <div className='idcardone'>

                    <div className='zindex text-center'>

                        <img src={male}  className="idcardimage"/>
                        <h3 className='idcardhead'>Developers</h3>
                        <p className='idcardpara'>Bring your project idea to life easier</p>
                        <a href='https://fwallet.onrender.com/' className='btn whitebtntwo idcardbtn'>Build on Metis</a>

                    </div>
                

                </div>

                <div className='idcardtwo'>

                <div className='zindex text-center'>

                    <img src={female}  className="idcardimage"/>
                    <h3 className='idcardhead'>Commuity</h3>
                    <p className='idcardpara'>Join a thriving future-forward community</p>
                    <a className='btn whitebtntwo idcardbtn'>Join Us</a>

                    </div>
                   

                </div>

            </div>


      

    </div>

       {/* mycardfive here */}
      
    </section>

    <section className='partners'>
    <h1 className='heroheadtwo'><span>Everything you want.
All in one.</span> <br/> Permissionless. Frictionless. Boundless. </h1>

    <div className='greendiv py-3'>

  
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className='row px-5 mt-5'>
          <div className='col-md-3 coincontent '>
              <div className='spancontent'>
                  <img className='coinimage' src={firstone} />

                  <h4 className='coinhead'>Decentralized
Ecosytem Governance</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={secondone} />

                  <h4 className='coinhead'>Secure
Network</h4>


              </div>
              

          </div>

          <div className='col-md-3 coincontent'>
                 <div className='spancontent'>
                  <img className='coinimage' src={thirdone} />

                  <h4 className='coinhead'>Scalable
Infrastructure</h4>


                </div>
              

          </div>

          <div className='col-md-3 coincontent'>
                 <div className='spancontent'>
                  <img className='coinimage' src={fourthone} />

                  <h4 className='coinhead'>Simple
Integration</h4>


                </div>
              

          </div>



      </div>

      <div className='row px-5 mt-5'>
          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={fifthone} />

                  <h4 className='coinhead'>Affordable
On-Chain Storage</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={sixthone} />

                  <h4 className='coinhead'>Fast
Transactions</h4>


              </div>
              

          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={sevenone} />

                  <h4 className='coinhead'>Low
Gas Fees</h4>


              </div>
              

          </div>

          



      </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className='row px-5 mt-5'>
          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={ledger} />

                  <h4 className='coinhead'>Ledger</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={aave} />

                  <h4 className='coinhead'>Aave</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={balancer} />

                  <h4 className='coinhead'>Balancer</h4>


              </div>
              

          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={beef} />

                  <h4 className='coinhead'>Beefy Finance</h4>


              </div>
              

          </div>



</div>

<div className='row px-5 mt-5'>
          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={swissborg} />

                  <h4 className='coinhead'>Swissborg</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={quick} />

                  <h4 className='coinhead'>Quickswap</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={anchorage} />

                  <h4 className='coinhead'>Anchorage</h4>


              </div>
              

          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={bitgo} />

                  <h4 className='coinhead'>BitGo</h4>


              </div>
              

          </div>



      </div>
  

  </div>


 

  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className='row px-5 mt-5'>
          <div className='col-md-4 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={okx} />

                  <h4 className='coinhead'>OKX</h4>


              </div>


          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={gate} />

                  <h4 className='coinhead'>Gate.io</h4>


              </div>
              

          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={huobi} />

                  <h4 className='coinhead'>Huobi</h4>


              </div>
              

          </div>



      </div>

      <div className='row px-5 mt-5'>
          <div className='col-md-4 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={bybit} />

                  <h4 className='coinhead'>Bybit</h4>


              </div>


          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={kucoin} />

                  <h4 className='coinhead'>Kucoin</h4>


              </div>
              

          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={crypto} />

                  <h4 className='coinhead'>Crypto.com</h4>


              </div>
              

          </div>



      </div>
  

  </div>
</div>

            

    </div>

    </section>



    <section className='support'>

<h1 className='heroheadtwo'>Decentralization <br/><span>Built<span style={{
    color:"#00d2ff",
}}> for the people.</span> Led by the community.</span> <br/> Putting power where it belongs - in the hands of the people. </h1>


<div className=''>

        <div className='myflexdiv'>

            <div className='introcard px-5 py-5'>

               <h4 className='introhead'>Introducing</h4>
               <h1 className='intromain'>Community Ecosystem Governance (CEG)</h1>


               <ul className='introlist'>
                   <li className='introtext'> A decentralized voting framework for the community</li>

                   <li className='introtext'> Empowering individuals to govern the ecosystem</li>

                   <li className='introtext'> A key milestone towards full decentralization</li>

                   <li className='introtext'> Access opportunities for funding</li>

                   <li className='introtext'> Take part today!</li>

                   

               </ul>


               <a className='introbtn blackbtntwo'>Participate in CEG</a>
            

            </div>

            <div className='introcard px-5 py-5'>

            <h4 className='introhead'>Become a</h4>
               <h1 className='intromain'>Community Verified Project (CVP)</h1>


               <ul className='introlist'>
                   <li className='introtext'> Increase community engagement</li>

                   <li className='introtext'> Receive marketing support</li>

                   <li className='introtext'> Gain social media spotlight</li>

                   <li className='introtext'> Access opportunities for funding</li>

                   <li className='introtext'> And more…</li>

                   

               </ul>


               <a className='introbtn blackbtntwo'>Apply for CVP Status</a>
               

            </div>

        </div>


  

</div>

   {/* mycardfive here */}
  
</section>


<section className='support'>

<h1 className='heroheadtwo'> <span> Metis has committed 250,000 tokens to grants in 2024</span> <br/> Check out what's the current status of the committed allocation
 </h1>


<div className=''>

       <img  src={tracker} className="tracker"/>

  

</div>

   {/* mycardfive here */}
  
</section>
   


  

   


   




    


    {/* footer section */}

    <section className='footer'>

        <div className='row'>

        <div className='col-md-4 col-sm-12'>
          

            <img className='footerlogo mb-3' src={metis} />

            <div className='flexdiv my-3'style={{
                
            }}>
          <a href="https://twitter.com/MetisL2"><img className='topicon' src={twitter} /></a>
         <a href='https://discord.com/invite/metis'><img className='topicon' src={discord} /></a>
          <a  href='https://t.me/MetisL2'><img className='topicon' src={telegram} /></a>
        

      </div>

             

        </div>

        <div className='col-md-8'>

            <div className='row'>

            <div className='col-md-4 linkcol text-left'>
                

           
                    <p className='footlist'>Developers</p>
                    <p className='footlist'>Knowledge</p>
                    <p className='footlist'>Careers</p>
                    <p className='footlist'>Subscribe</p>
                    <p className='footlist'>Q&A</p>
                    <p className='footlist'>Brand Assets</p>
                   


            </div>

            <div className='col-md-4 linkcol'>
               


           
                    <p className='footlist'><a href=''>Community</a></p>
                    <p className='footlist'><a href=''>Company</a></p>
                    <p className='footlist'><a href=''>Ecosystem</a></p>
                    <p className='footlist'><a href=''>Terms and Condition</a></p>
                    <p className='footlist'><a href=''>Events</a></p>
                    <p className='footlist'><a href=''>Contact</a></p>
                    
            </div>

           

            </div>

           

        </div>

       

       

       </div>

    </section>

        </>
    );
}

export default Home;